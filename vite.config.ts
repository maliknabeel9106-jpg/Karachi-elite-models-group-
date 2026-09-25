import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig, Plugin} from 'vite';

function imageScannerPlugin(): Plugin {
  return {
    name: 'vite-image-scanner',
    configureServer(server) {
      // Endpoint 1: List all real photos uploaded in /public/images/ and any subfolder
      server.middlewares.use('/api/uploaded-images', (_req, res) => {
        try {
          const imagesRootDir = path.resolve(__dirname, 'public/images');
          const validExt = ['.jpg', '.jpeg', '.png', '.webp', '.avif'];

          const realImages: { url: string; rawUrl?: string; name: string; relativePath: string }[] = [];

          function scanDir(dir: string) {
            if (!fs.existsSync(dir)) return;
            const entries = fs.readdirSync(dir, { withFileTypes: true });
            for (const entry of entries) {
              const fullPath = path.join(dir, entry.name);
              if (entry.isDirectory()) {
                scanDir(fullPath);
              } else if (entry.isFile()) {
                const ext = path.extname(entry.name).toLowerCase();
                // Exclude svgs (placeholders), gitkeep, md, json
                if (validExt.includes(ext) && !entry.name.startsWith('.')) {
                  const relFromPublic = path.relative(path.resolve(__dirname, 'public'), fullPath).replace(/\\/g, '/');
                  realImages.push({
                    url: encodeURI(`/${relFromPublic}`),
                    rawUrl: `/${relFromPublic}`,
                    name: entry.name,
                    relativePath: relFromPublic,
                  });
                }
              }
            }
          }

          scanDir(imagesRootDir);
          realImages.sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' }));

          // Also write to manifest.json for offline/production persistence
          const manifestPath = path.resolve(__dirname, 'public/images/manifest.json');
          try {
            fs.writeFileSync(
              manifestPath,
              JSON.stringify({ lastScanned: new Date().toISOString(), totalRealPhotos: realImages.length, realImages }, null, 2)
            );
          } catch {
            // ignore manifest write error
          }

          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ realImages, count: realImages.length }));
        } catch (err: any) {
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ realImages: [], count: 0, error: err?.message }));
        }
      });

      // Endpoint 2: Save uploaded image directly to /public/images/models/
      server.middlewares.use('/api/save-image', (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.end('Method not allowed');
          return;
        }

        let body = '';
        req.on('data', (chunk) => {
          body += chunk;
        });

        req.on('end', () => {
          try {
            const { filename, dataUrl } = JSON.parse(body);
            if (!filename || !dataUrl) {
              res.statusCode = 400;
              res.end(JSON.stringify({ error: 'filename and dataUrl are required' }));
              return;
            }

            const modelsDir = path.resolve(__dirname, 'public/images/models');
            if (!fs.existsSync(modelsDir)) {
              fs.mkdirSync(modelsDir, { recursive: true });
            }

            // Extract base64 content
            const base64Data = dataUrl.replace(/^data:image\/\w+;base64,/, '');
            const buffer = Buffer.from(base64Data, 'base64');
            const safeName = filename.replace(/[^a-zA-Z0-9._-]/g, '_');
            const targetPath = path.join(modelsDir, safeName);

            fs.writeFileSync(targetPath, buffer);

            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: true, url: `/images/models/${safeName}` }));
          } catch (err: any) {
            res.statusCode = 500;
            res.end(JSON.stringify({ error: err?.message }));
          }
        });
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), imageScannerPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      host: '0.0.0.0',
      port: 3000,
      allowedHosts: true as const,
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});

import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const PRIMARY_DOMAIN = 'karachiescortvip.site';

// 1. 301 Canonical Domain & Normalization Redirect Middleware
app.use((req: Request, res: Response, next: NextFunction) => {
  const host = req.headers.host || '';
  const url = req.url;

  // Domain redirect: from old domains or www.* to primary domain
  if (
    host.includes('karachisescortgroup.site') ||
    host.includes('karachielitemodels.site') ||
    host.includes('karachiescort-elitemodels.site') ||
    host.includes('karachiescortgroup.com') ||
    host.startsWith('www.')
  ) {
    const targetHost = PRIMARY_DOMAIN;
    const protocol = req.headers['x-forwarded-proto'] || req.protocol;
    return res.redirect(301, `${protocol}://${targetHost}${url}`);
  }

  // Strip .html extension (e.g. /about.html -> /about)
  if (url.includes('.html') && !url.includes('google') && !url.startsWith('/api')) {
    const cleanUrl = url.replace(/\.html(\?.*)?$/, '$1');
    if (cleanUrl !== url) {
      return res.redirect(301, cleanUrl === '' ? '/' : cleanUrl);
    }
  }

  // Remove trailing slashes (except root '/')
  const parsedPath = url.split('?')[0];
  const query = url.split('?')[1] ? `?${url.split('?')[1]}` : '';
  if (parsedPath.length > 1 && parsedPath.endsWith('/')) {
    const normalized = parsedPath.slice(0, -1) + query;
    return res.redirect(301, normalized);
  }

  // Lowercase normalization for routes (skip asset files and query params)
  if (/[A-Z]/.test(parsedPath) && !parsedPath.includes('.') && !parsedPath.startsWith('/api')) {
    return res.redirect(301, parsedPath.toLowerCase() + query);
  }

  next();
});

// 2. Specific static handling for robots.txt and sitemap.xml
const publicDir = path.join(__dirname, 'public');
const distDir = path.join(__dirname, 'dist');

app.get('/robots.txt', (_req: Request, res: Response) => {
  const robotsPath = path.join(publicDir, 'robots.txt');
  if (fs.existsSync(robotsPath)) {
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Cache-Control', 'public, max-age=86400');
    return res.sendFile(robotsPath);
  }
  res.status(404).send('robots.txt not found');
});

app.get('/sitemap.xml', (_req: Request, res: Response) => {
  const sitemapPath = path.join(publicDir, 'sitemap.xml');
  if (fs.existsSync(sitemapPath)) {
    res.setHeader('Content-Type', 'application/xml');
    res.setHeader('Cache-Control', 'public, max-age=86400');
    return res.sendFile(sitemapPath);
  }
  res.status(404).send('sitemap.xml not found');
});

// 3. Serve static built assets with caching
if (fs.existsSync(distDir)) {
  app.use(express.static(distDir, {
    maxAge: '1y',
    etag: true,
    setHeaders: (res, filePath) => {
      if (filePath.endsWith('.html')) {
        // Do not cache HTML files for rapid indexing updates
        res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
      } else {
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
      }
    }
  }));
}

// 4. SPA Fallback: Send dist/index.html or public/index.html
app.get('*', (_req: Request, res: Response) => {
  const distIndex = path.join(distDir, 'index.html');
  const rootIndex = path.join(__dirname, 'index.html');

  if (fs.existsSync(distIndex)) {
    return res.sendFile(distIndex);
  } else if (fs.existsSync(rootIndex)) {
    return res.sendFile(rootIndex);
  }
  res.status(404).send('Application build not found. Please run npm run build.');
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

export default app;

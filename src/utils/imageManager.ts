// Utility to resolve, track, and manage user-uploaded images for Karachi Elite Models

// Utility to resolve, track, and manage user-uploaded images for Karachi Elite Models
import { modelsData } from '../data/models';

export interface ModelImageMapping {
  id: string;
  name: string;
  category: string;
  expectedFileNames: string[];
}

export const MODEL_IMAGE_MAPPINGS: Record<string, ModelImageMapping> = {
  'zoya-khan': {
    id: 'zoya-khan',
    name: 'Zoya Khan',
    category: 'VIP',
    expectedFileNames: ['model-1.jpg', 'model-1.png', 'model-1.webp', 'model-1.jpeg', '1.jpg', '1.png', '1.webp', 'zoya-khan.jpg', 'zoya.jpg', 'whatsapp image 2026-09-14 at 11.01.52 pm.jpeg']
  },
  'anastasia-volkova': {
    id: 'anastasia-volkova',
    name: 'Anastasia Volkova',
    category: 'Russian / International',
    expectedFileNames: ['model-2.jpg', 'model-2.png', 'model-2.webp', 'model-2.jpeg', '2.jpg', '2.png', '2.webp', 'anastasia-volkova.jpg', 'anastasia.jpg', 'whatsapp image 2026-09-14 at 11.01.53 pm.jpeg']
  },
  'alizeh-shah': {
    id: 'alizeh-shah',
    name: 'Alizeh Shah',
    category: 'Independent',
    expectedFileNames: ['model-3.jpg', 'model-3.png', 'model-3.webp', 'model-3.jpeg', '3.jpg', '3.png', '3.webp', 'alizeh-shah.jpg', 'alizeh.jpg', 'whatsapp image 2026-09-14 at 11.01.53 pm (1).jpeg']
  },
  'sana-mirza': {
    id: 'sana-mirza',
    name: 'Sana Mirza',
    category: 'Call Girls',
    expectedFileNames: ['model-4.jpg', 'model-4.png', 'model-4.webp', 'model-4.jpeg', '4.jpg', '4.png', '4.webp', 'sana-mirza.jpg', 'sana.jpg', 'whatsapp image 2026-09-14 at 11.01.53 pm (2).jpeg']
  },
  'natasha-romanov': {
    id: 'natasha-romanov',
    name: 'Natasha Romanov',
    category: 'Russian / International',
    expectedFileNames: ['model-5.jpg', 'model-5.png', 'model-5.webp', 'model-5.jpeg', '5.jpg', '5.png', '5.webp', 'natasha-romanov.jpg', 'natasha.jpg', 'whatsapp image 2026-09-14 at 11.01.53 pm (3).jpeg']
  },
  'maha-sheikh': {
    id: 'maha-sheikh',
    name: 'Maha Sheikh',
    category: 'VIP',
    expectedFileNames: ['model-6.jpg', 'model-6.png', 'model-6.webp', 'model-6.jpeg', '6.jpg', '6.png', '6.webp', 'maha-sheikh.jpg', 'maha.jpg', 'whatsapp image 2026-09-14 at 11.01.54 pm.jpeg']
  }
};

export const CATEGORY_IMAGE_MAPPINGS: Record<string, { expectedFileNames: string[] }> = {
  'vip-escorts': {
    expectedFileNames: ['category-1.jpg', 'category-1.png', 'category-1.webp', 'vip-escorts.jpg', 'vip.jpg']
  },
  'independent-escorts': {
    expectedFileNames: ['category-2.jpg', 'category-2.png', 'category-2.webp', 'independent-escorts.jpg', 'independent.jpg']
  },
  'russian-escorts': {
    expectedFileNames: ['category-3.jpg', 'category-3.png', 'category-3.webp', 'russian-escorts.jpg', 'russian.jpg']
  },
  'call-girls': {
    expectedFileNames: ['category-4.jpg', 'category-4.png', 'category-4.webp', 'call-girls.jpg', 'callgirls.jpg']
  }
};

export interface RealImageItem {
  url: string;
  name: string;
  relativePath?: string;
}

// Global cached list of real uploaded images
let cachedRealImages: RealImageItem[] | null = null;
let inFlightPromise: Promise<RealImageItem[]> | null = null;

// Fetch real photos uploaded anywhere in /public/images/ or subfolders
export async function fetchUploadedRealImages(forceRefresh = false): Promise<RealImageItem[]> {
  if (cachedRealImages && !forceRefresh) {
    return cachedRealImages;
  }
  if (inFlightPromise && !forceRefresh) {
    return inFlightPromise;
  }

  inFlightPromise = (async () => {
    try {
      // 1. Try dev server scanner endpoint
      const res = await fetch('/api/uploaded-images');
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data.realImages) && data.realImages.length > 0) {
          cachedRealImages = data.realImages.map((img: any) => ({
            name: img.name,
            url: encodeURI(img.url.startsWith('/') ? img.url : `/${img.url}`),
            relativePath: img.relativePath
          }));
          window.dispatchEvent(new CustomEvent('karachi_real_images_synced', { detail: cachedRealImages }));
          return cachedRealImages;
        }
      }
    } catch {
      // Fall back to manifest
    }

    try {
      // 2. Try static manifest.json in /images/manifest.json
      const manifestRes = await fetch('/images/manifest.json');
      if (manifestRes.ok) {
        const manifestData = await manifestRes.json();
        if (Array.isArray(manifestData.realImages) && manifestData.realImages.length > 0) {
          cachedRealImages = manifestData.realImages.map((img: any) => ({
            name: img.name,
            url: encodeURI(img.url.startsWith('/') ? img.url : `/${img.url}`),
            relativePath: img.relativePath
          }));
          window.dispatchEvent(new CustomEvent('karachi_real_images_synced', { detail: cachedRealImages }));
          return cachedRealImages;
        }
      }
    } catch {
      // No manifest found
    }

    cachedRealImages = cachedRealImages || [];
    return cachedRealImages;
  })();

  try {
    const res = await inFlightPromise;
    return res;
  } finally {
    inFlightPromise = null;
  }
}

// Model IDs in standard order
export const MODEL_ORDER: string[] = [
  'zoya-khan',
  'anastasia-volkova',
  'alizeh-shah',
  'sana-mirza',
  'natasha-romanov',
  'maha-sheikh'
];

/**
 * Resolves the REAL photo URL for a model.
 * Returns the real photo URL if one exists (from local storage, /public/images/ or subfolders),
 * or NULL if no real photo exists yet.
 */
export function resolveRealModelImage(
  modelId: string,
  realImagesList: RealImageItem[] = []
): string | null {
  // 1. Check local storage uploaded image
  const stored = getStoredUserImage(modelId);
  if (stored) return stored;

  // 2. Direct model profile image if pointing to real uploaded photo
  const modelProfile = modelsData.find((m) => m.id === modelId);
  if (modelProfile?.image && !modelProfile.image.includes('placeholder')) {
    return modelProfile.image;
  }

  const mapping = MODEL_IMAGE_MAPPINGS[modelId];
  const modelIdx = MODEL_ORDER.indexOf(modelId);

  // If no real images discovered yet, return null
  if (!realImagesList || realImagesList.length === 0) {
    return null;
  }

  // 3. Direct filename match against expected names (e.g. 'zoya.jpg', 'model-1.jpg', '1.jpg')
  if (mapping) {
    const expectedLower = mapping.expectedFileNames.map((n) => n.toLowerCase());
    const matched = realImagesList.find((img) =>
      expectedLower.includes(img.name.toLowerCase())
    );
    if (matched) return matched.url;

    // 4. Partial match (e.g. filename contains 'zoya' or 'anastasia')
    const nameKeywords = mapping.name.toLowerCase().split(' ');
    const partialMatch = realImagesList.find((img) => {
      const imgLower = img.name.toLowerCase();
      return nameKeywords.some((kw) => kw.length > 2 && imgLower.includes(kw));
    });
    if (partialMatch) return partialMatch.url;
  }

  // 5. Sequential fallback: assign distinct real photo by index
  if (modelIdx >= 0 && modelIdx < realImagesList.length) {
    return realImagesList[modelIdx].url;
  }

  return null;
}

// Helper to get locally uploaded base64 / custom images stored in browser
export function getStoredUserImage(key: string): string | null {
  try {
    return localStorage.getItem(`karachi_img_${key}`);
  } catch {
    return null;
  }
}

export async function saveRealImage(key: string, filename: string, dataUrl: string): Promise<void> {
  try {
    // 1. Save to local storage for instant reactivity
    localStorage.setItem(`karachi_img_${key}`, dataUrl);
    
    // 2. Try saving to server disk if /api/save-image is available
    try {
      await fetch('/api/save-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ filename, dataUrl, modelId: key })
      });
      // Re-scan server images
      fetchUploadedRealImages(true);
    } catch {
      // Offline / client-only fallback
    }

    window.dispatchEvent(new CustomEvent('karachi_image_updated', { detail: { key, dataUrl } }));
  } catch (err) {
    console.error('Failed to save real image', err);
  }
}

export function saveStoredUserImage(key: string, dataUrl: string): void {
  saveRealImage(key, `${key}.jpg`, dataUrl);
}

export function removeStoredUserImage(key: string): void {
  try {
    localStorage.removeItem(`karachi_img_${key}`);
    window.dispatchEvent(new CustomEvent('karachi_image_updated', { detail: { key, dataUrl: null } }));
  } catch (err) {
    console.error('Failed to remove image', err);
  }
}

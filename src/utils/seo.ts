/**
 * SEO Utility: Dynamically updates meta tags, OpenGraph, Twitter Cards,
 * canonical links, and Schema.org structured data in document head.
 */

export interface PageSeoProps {
  title: string;
  description: string;
  canonicalPath: string; // e.g. '/', '/models/zoya-khan', '/categories/vip-escorts'
  ogType?: string;
  ogImage?: string;
  schema?: object | object[];
}

const BASE_DOMAIN = 'https://karachisescortgroup.site';
const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop';

export function updatePageSeo({
  title,
  description,
  canonicalPath,
  ogType = 'website',
  ogImage = DEFAULT_IMAGE,
  schema
}: PageSeoProps) {
  if (typeof document === 'undefined') return;

  // 1. Update Title
  document.title = title;

  // 2. Canonical URL
  const normalizedPath = canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`;
  const canonicalUrl = `${BASE_DOMAIN}${normalizedPath === '/' ? '/' : normalizedPath.replace(/\/+$/, '')}`;
  
  let canonicalEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!canonicalEl) {
    canonicalEl = document.createElement('link');
    canonicalEl.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalEl);
  }
  canonicalEl.setAttribute('href', canonicalUrl);

  // 3. Meta Description
  let descEl = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
  if (!descEl) {
    descEl = document.createElement('meta');
    descEl.setAttribute('name', 'description');
    document.head.appendChild(descEl);
  }
  descEl.setAttribute('content', description);

  // Helper for meta tags
  const setMetaTag = (selector: string, attrName: string, attrVal: string, content: string) => {
    let el = document.querySelector(selector) as HTMLMetaElement | null;
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attrName, attrVal);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };

  // 4. OpenGraph tags
  setMetaTag('meta[property="og:title"]', 'property', 'og:title', title);
  setMetaTag('meta[property="og:description"]', 'property', 'og:description', description);
  setMetaTag('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
  setMetaTag('meta[property="og:type"]', 'property', 'og:type', ogType);
  setMetaTag('meta[property="og:image"]', 'property', 'og:image', ogImage);

  // 5. Twitter Card tags
  setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', title);
  setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description);
  setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', ogImage);

  // 6. Schema.org JSON-LD Structured Data
  const schemaId = 'dynamic-page-schema';
  let schemaScript = document.getElementById(schemaId) as HTMLScriptElement | null;
  
  if (schema) {
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = schemaId;
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(schema, null, 2);
  } else if (schemaScript) {
    schemaScript.remove();
  }
}

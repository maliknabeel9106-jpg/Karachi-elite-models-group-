import { useState, useEffect, useCallback } from 'react';

export type RouteType =
  | { type: 'home' }
  | { type: 'category'; slug: string }
  | { type: 'model'; id: string }
  | { type: 'guide'; slug: string }
  | { type: 'about' }
  | { type: 'contact' }
  | { type: 'privacy' }
  | { type: 'terms' }
  | { type: 'compliance' }
  | { type: 'not-found'; path: string };

export function parseRoute(pathname: string): RouteType {
  // Strip hash and query parameters
  const pathOnly = (pathname || '').split('#')[0].split('?')[0];
  let clean = pathOnly.toLowerCase().trim();
  if (clean.length > 1 && clean.endsWith('/')) {
    clean = clean.slice(0, -1);
  }

  if (!clean || clean === '/' || clean === '/index.html') {
    return { type: 'home' };
  }

  // Model Profiles: /models/:id
  const modelMatch = clean.match(/^\/models\/([a-z0-9-]+)$/);
  if (modelMatch) {
    return { type: 'model', id: modelMatch[1] };
  }

  // Categories: /categories/:slug
  const categoryMatch = clean.match(/^\/categories\/([a-z0-9-]+)$/);
  if (categoryMatch) {
    return { type: 'category', slug: categoryMatch[1] };
  }

  // Guides: /guides/:slug
  const guideMatch = clean.match(/^\/guides\/([a-z0-9-]+)$/);
  if (guideMatch) {
    return { type: 'guide', slug: guideMatch[1] };
  }

  // Informational and Trust Pages
  if (clean === '/about' || clean === '/about-us') {
    return { type: 'about' };
  }
  if (clean === '/contact' || clean === '/contact-us') {
    return { type: 'contact' };
  }
  if (clean === '/privacy' || clean === '/privacy-policy') {
    return { type: 'privacy' };
  }
  if (clean === '/terms' || clean === '/terms-of-service') {
    return { type: 'terms' };
  }
  if (clean === '/compliance' || clean === '/legal-compliance') {
    return { type: 'compliance' };
  }

  return { type: 'not-found', path: clean };
}

export function useRouter() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname;
    }
    return '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = useCallback((to: string, replace = false) => {
    if (typeof window === 'undefined') return;

    // Normalize path
    let target = to.toLowerCase().trim();
    if (target.length > 1 && target.endsWith('/')) {
      target = target.slice(0, -1);
    }

    if (replace) {
      window.history.replaceState(null, '', target);
    } else {
      window.history.pushState(null, '', target);
    }

    setCurrentPath(target);
    if (target.includes('#')) {
      const hashId = target.split('#')[1];
      setTimeout(() => {
        document.getElementById(hashId)?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const route = parseRoute(currentPath);

  return {
    currentPath,
    route,
    navigate
  };
}

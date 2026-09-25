import React, { useEffect } from 'react';
import { updatePageSeo } from '../utils/seo';
import { serviceCategories } from '../data/content';
import { guidesData } from '../data/guides';
import { Home, Compass, BookOpen, Phone, ArrowLeft } from 'lucide-react';

interface NotFoundPageProps {
  path: string;
  onNavigate: (path: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ path, onNavigate }) => {
  useEffect(() => {
    updatePageSeo({
      title: 'Page Not Found (404) | Karachi Elite Models',
      description: 'The requested page could not be found. Discover verified Karachi escorts, companion categories, and adult modeling guides.',
      canonicalPath: '/404'
    });
  }, [path]);

  return (
    <div className="bg-[var(--bg-canvas)] py-16 sm:py-24 text-center transition-colors duration-200">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <span className="font-cinzel text-7xl sm:text-9xl font-extrabold text-rose-600/30">
          404
        </span>

        <h1 className="mt-2 font-cinzel text-2xl sm:text-4xl font-extrabold text-[var(--text-primary)]">
          Page Not Found
        </h1>

        <p className="mt-4 text-sm sm:text-base text-[var(--text-secondary)]">
          The destination you requested (<code className="text-rose-500 font-mono text-xs">{path}</code>) does not exist or has been relocated to an updated URL.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => onNavigate('/')}
            className="flex items-center gap-2 rounded-xl bg-rose-600 px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-white hover:bg-rose-500 transition-all cursor-pointer shadow-lg shadow-rose-900/30"
          >
            <Home className="h-4 w-4" />
            <span>Return to Homepage</span>
          </button>
          <button
            onClick={() => onNavigate('/contact')}
            className="flex items-center gap-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-[var(--text-primary)] hover:border-rose-500/50 transition-all cursor-pointer"
          >
            <Phone className="h-4 w-4 text-rose-600" />
            <span>Contact Concierge</span>
          </button>
        </div>

        {/* Helpful navigation blocks to retain crawl equity */}
        <div className="mt-12 text-left rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-6">
          <h2 className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
            Explore Popular Destinations in Karachi
          </h2>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            {serviceCategories.map((c) => (
              <button
                key={c.id}
                onClick={() => onNavigate(`/categories/${c.id}`)}
                className="text-left font-medium text-[var(--text-secondary)] hover:text-rose-600 transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <span>→</span>
                <span>{c.title}</span>
              </button>
            ))}
            {guidesData.map((g) => (
              <button
                key={g.slug}
                onClick={() => onNavigate(`/guides/${g.slug}`)}
                className="text-left font-medium text-[var(--text-secondary)] hover:text-rose-600 transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <span>→</span>
                <span className="truncate">{g.h1}</span>
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { siteConfig } from '../data/content';

export interface BreadcrumbItem {
  label: string;
  path?: string; // e.g. '/', '/categories/vip-escorts', '/models/zoya-khan'
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  onNavigate?: (path: string) => void;
  className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  onNavigate,
  className = ''
}) => {
  const baseDomain = `https://${siteConfig.domain}`;

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path?: string) => {
    if (!path) return;
    if (onNavigate && path.startsWith('/')) {
      e.preventDefault();
      onNavigate(path);
    }
  };

  return (
    <nav
      aria-label="Breadcrumb"
      className={`py-2 px-1 select-none overflow-x-auto scrollbar-none ${className}`}
    >
      <ol
        itemScope
        itemType="https://schema.org/BreadcrumbList"
        className="flex items-center flex-wrap gap-1.5 text-xs text-[var(--text-muted)]"
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const position = index + 1;
          const fullUrl = item.path
            ? `${baseDomain}${item.path.startsWith('/') ? item.path : `/${item.path}`}`
            : baseDomain;

          return (
            <li
              key={index}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
              className="inline-flex items-center gap-1.5"
            >
              {index === 0 && (
                <Home className="h-3 w-3 text-rose-600 dark:text-rose-500 shrink-0" aria-hidden="true" />
              )}

              {isLast ? (
                // Current / Active page (non-clickable, aria-current)
                <>
                  <span
                    aria-current="page"
                    itemProp="name"
                    className="font-semibold text-[var(--text-primary)] truncate max-w-[220px] sm:max-w-md"
                  >
                    {item.label}
                  </span>
                  <link itemProp="item" href={fullUrl} />
                  <meta itemProp="position" content={String(position)} />
                </>
              ) : (
                // Ancestor link
                <>
                  <a
                    itemProp="item"
                    href={item.path || '/'}
                    onClick={(e) => handleLinkClick(e, item.path)}
                    className="transition-colors hover:text-rose-600 dark:hover:text-rose-400 font-medium cursor-pointer"
                  >
                    <span itemProp="name">{item.label}</span>
                  </a>
                  <meta itemProp="position" content={String(position)} />
                  <ChevronRight
                    className="h-3.5 w-3.5 text-zinc-400 dark:text-zinc-600 shrink-0"
                    aria-hidden="true"
                  />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

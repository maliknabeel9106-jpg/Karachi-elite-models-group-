import React, { useEffect } from 'react';
import { guidesData } from '../data/guides';
import { siteConfig } from '../data/content';
import { updatePageSeo } from '../utils/seo';
import { Breadcrumb } from '../components/Breadcrumb';
import {
  BookOpen,
  Clock,
  Calendar,
  ChevronRight,
  ArrowLeft,
  Sparkles,
  Share2,
  CheckCircle2,
  Phone,
  MessageSquare
} from 'lucide-react';

interface GuidePageProps {
  slug: string;
  onOpenBooking: () => void;
  onNavigate: (path: string) => void;
}

export const GuidePage: React.FC<GuidePageProps> = ({
  slug,
  onOpenBooking,
  onNavigate
}) => {
  const guide = guidesData.find((g) => g.slug === slug);

  useEffect(() => {
    if (!guide) {
      updatePageSeo({
        title: 'Guide Not Found | Karachi Elite Models',
        description: 'The requested guide could not be found. Browse our Karachi escorts articles.',
        canonicalPath: `/guides/${slug}`
      });
      return;
    }

    const title = `${guide.title}`;
    const description = guide.metaDescription;
    const canonicalPath = `/guides/${guide.slug}`;

    const schema = [
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        '@id': `https://karachisescortgroup.site/guides/${guide.slug}#article`,
        headline: guide.h1,
        description: guide.metaDescription,
        inLanguage: 'en-PK',
        datePublished: '2026-09-01T00:00:00+05:00',
        dateModified: '2026-09-24T00:00:00+05:00',
        author: {
          '@type': 'Organization',
          name: 'Karachi Escorts Editorial Team',
          url: 'https://karachisescortgroup.site/'
        },
        publisher: {
          '@type': 'Organization',
          name: 'Karachi Escorts',
          url: 'https://karachisescortgroup.site/'
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `https://karachisescortgroup.site/guides/${guide.slug}`
        }
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://karachisescortgroup.site/'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Guides & Insights',
            item: 'https://karachisescortgroup.site/#guides'
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: guide.h1,
            item: `https://karachisescortgroup.site/guides/${guide.slug}`
          }
        ]
      }
    ];

    updatePageSeo({
      title,
      description,
      canonicalPath,
      ogType: 'article',
      schema
    });
  }, [guide, slug]);

  if (!guide) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-3xl font-cinzel font-bold text-[var(--text-primary)]">Guide Not Found</h1>
        <p className="mt-3 text-[var(--text-secondary)]">The requested informational article was not found.</p>
        <button
          onClick={() => onNavigate('/')}
          className="mt-6 flex items-center gap-2 rounded-xl bg-rose-600 px-6 py-3 text-sm font-bold text-white hover:bg-rose-500 cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Return to Homepage</span>
        </button>
      </div>
    );
  }

  const otherGuides = guidesData.filter((g) => g.slug !== slug);

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Guides', path: '/guides/karachi-escorts-modeling-guide' },
    { label: guide.category, path: `/guides/${guide.slug}` }
  ];

  return (
    <article className="bg-[var(--bg-canvas)] py-8 sm:py-12 transition-colors duration-200">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Semantic Breadcrumbs for Search Engine Hierarchy & Internal Linking */}
        <Breadcrumb items={breadcrumbItems} onNavigate={onNavigate} className="mb-6" />

        {/* Back Link */}
        <button
          onClick={() => onNavigate('/')}
          className="mb-6 inline-flex items-center gap-2 text-xs font-semibold text-rose-600 dark:text-rose-400 hover:underline cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Homepage Directory</span>
        </button>

        {/* Header Metadata */}
        <header className="border-b border-[var(--border-subtle)] pb-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-rose-600/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 border border-rose-500/20">
              {guide.category}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
              <Clock className="h-3.5 w-3.5" />
              <span>{guide.readTime}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
              <Calendar className="h-3.5 w-3.5" />
              <span>Updated {guide.lastUpdated}</span>
            </div>
          </div>

          <h1 className="mt-5 font-cinzel text-2xl sm:text-4xl font-extrabold text-[var(--text-primary)] leading-tight">
            {guide.h1}
          </h1>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-[var(--text-secondary)] font-medium">
            {guide.summary}
          </p>
        </header>

        {/* Article Body Content */}
        <div className="mt-10 space-y-10">
          {guide.sections.map((sec, idx) => (
            <section key={idx} className="space-y-4">
              <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
                {sec.heading}
              </h2>

              {sec.subheading && (
                <p className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
                  {sec.subheading}
                </p>
              )}

              {sec.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-sm sm:text-base leading-relaxed text-[var(--text-secondary)]">
                  {p}
                </p>
              ))}

              {sec.bulletPoints && sec.bulletPoints.length > 0 && (
                <div className="mt-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-4 space-y-2.5">
                  {sec.bulletPoints.map((bp, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)]">
                      <CheckCircle2 className="h-4 w-4 text-rose-600 shrink-0 mt-0.5" />
                      <span>{bp}</span>
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>

        {/* In-article Booking CTA Banner */}
        <div className="mt-14 rounded-3xl border border-rose-500/30 bg-gradient-to-r from-rose-950/40 to-zinc-950/60 p-6 sm:p-8 text-center sm:text-left sm:flex sm:items-center sm:justify-between gap-6">
          <div>
            <h3 className="font-cinzel text-xl font-bold text-white">
              Ready to Reserve a Verified Karachi Companion?
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-zinc-300">
              Our 24/7 concierge is standing by to coordinate in-call and 5-star hotel outcalls across Karachi with absolute discretion.
            </p>
          </div>
          <div className="mt-4 sm:mt-0 shrink-0 flex flex-col sm:flex-row gap-3">
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-xs font-bold text-white uppercase tracking-wider hover:bg-emerald-500 shadow-md transition-all"
            >
              <MessageSquare className="h-4 w-4" />
              <span>WhatsApp Now</span>
            </a>
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-rose-600 px-5 py-3 text-xs font-bold text-white uppercase tracking-wider hover:bg-rose-500 shadow-md transition-all cursor-pointer"
            >
              <span>Instant Booking</span>
            </button>
          </div>
        </div>

        {/* Other Informational Guides / Internal Links */}
        <div className="mt-16 border-t border-[var(--border-subtle)] pt-10">
          <h3 className="font-cinzel text-xl font-bold text-[var(--text-primary)] mb-6">
            More Karachi Escort Guides & Industry Insights
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {otherGuides.map((og) => (
              <div
                key={og.slug}
                onClick={() => onNavigate(`/guides/${og.slug}`)}
                className="cursor-pointer rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-4 hover:border-rose-500/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold text-rose-600 uppercase">{og.category}</span>
                  <h4 className="font-cinzel font-bold text-xs sm:text-sm text-[var(--text-primary)] mt-1 line-clamp-2">
                    {og.h1}
                  </h4>
                  <p className="text-[11px] text-[var(--text-muted)] mt-2 line-clamp-2">
                    {og.summary}
                  </p>
                </div>
                <span className="mt-4 text-[11px] font-bold text-rose-600 hover:underline">
                  Read Guide →
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </article>
  );
};

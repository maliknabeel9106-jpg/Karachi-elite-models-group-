import React, { useEffect } from 'react';
import { serviceCategories, siteConfig } from '../data/content';
import { modelsData } from '../data/models';
import { updatePageSeo } from '../utils/seo';
import { ModelCardImage } from '../components/ModelCardImage';
import { Breadcrumb } from '../components/Breadcrumb';
import {
  ShieldCheck,
  MapPin,
  ChevronRight,
  ArrowLeft,
  Sparkles,
  Phone,
  MessageSquare,
  Clock
} from 'lucide-react';

interface CategoryPageProps {
  slug: string;
  onOpenBooking: (category?: string, model?: string) => void;
  onNavigate: (path: string) => void;
}

export const CategoryPage: React.FC<CategoryPageProps> = ({
  slug,
  onOpenBooking,
  onNavigate
}) => {
  const category = serviceCategories.find((c) => c.id === slug);

  // Map category slug to model category filter
  const categoryFilterMap: Record<string, string> = {
    'vip-escorts': 'VIP',
    'independent-escorts': 'Independent',
    'russian-escorts': 'Russian / International',
    'call-girls': 'Call Girls'
  };

  const modelCategoryFilter = categoryFilterMap[slug] || 'All';
  const matchingModels = modelsData.filter((m) =>
    modelCategoryFilter === 'All' ? true : m.category.toLowerCase().includes(modelCategoryFilter.toLowerCase())
  );

  useEffect(() => {
    if (!category) {
      updatePageSeo({
        title: 'Category Not Found | Karachi Elite Models',
        description: 'The requested category does not exist. Explore our Karachi escorts directory.',
        canonicalPath: `/categories/${slug}`
      });
      return;
    }

    const title = `${category.title} | Karachi Elite Models 24/7`;
    const description = `${category.description} Verified portraits, 24/7 service in DHA, Clifton, and 5-star hotel outcalls in Karachi.`;
    const canonicalPath = `/categories/${category.id}`;

    const schema = [
      {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        '@id': `https://karachisescortgroup.site/categories/${category.id}#webpage`,
        url: `https://karachisescortgroup.site/categories/${category.id}`,
        name: title,
        description: description,
        inLanguage: 'en-PK',
        isPartOf: {
          '@type': 'WebSite',
          '@id': 'https://karachisescortgroup.site/#website',
          url: 'https://karachisescortgroup.site/',
          name: 'Karachi Escorts'
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
            name: 'Categories',
            item: 'https://karachisescortgroup.site/#categories'
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: category.title,
            item: `https://karachisescortgroup.site/categories/${category.id}`
          }
        ]
      }
    ];

    updatePageSeo({
      title,
      description,
      canonicalPath,
      schema
    });
  }, [category, slug]);

  if (!category) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-3xl font-cinzel font-bold text-[var(--text-primary)]">Category Not Found</h1>
        <p className="mt-3 text-[var(--text-secondary)]">The service category you requested does not exist.</p>
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

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Categories', path: '/categories/vip-escorts' },
    { label: category.title, path: `/categories/${category.id}` }
  ];

  return (
    <div className="bg-[var(--bg-canvas)] py-8 sm:py-12 transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Semantic Breadcrumbs for Search Engine Hierarchy & Internal Linking */}
        <Breadcrumb items={breadcrumbItems} onNavigate={onNavigate} className="mb-6" />

        {/* Category Header */}
        <div className="rounded-3xl border border-[var(--border-subtle)] bg-gradient-to-b from-[var(--bg-card)] to-[var(--bg-canvas)] p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
            <Sparkles className="h-3.5 w-3.5" />
            <span>{category.badge}</span>
          </div>

          <h1 className="mt-4 font-cinzel text-3xl sm:text-5xl font-extrabold uppercase text-[var(--text-primary)]">
            {category.title}
          </h1>

          <p className="mt-3 text-base sm:text-lg font-medium text-rose-600 dark:text-rose-400">
            {category.subtitle}
          </p>

          <p className="mt-4 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed text-[var(--text-secondary)]">
            {category.description}
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onOpenBooking(category.title)}
              className="rounded-xl bg-rose-600 px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-white hover:bg-rose-500 transition-all cursor-pointer"
            >
              Book {category.badge} Companion
            </button>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-[var(--text-primary)] hover:border-rose-500/50 transition-all"
            >
              Inquire on WhatsApp
            </a>
          </div>
        </div>

        {/* Models in this category */}
        <div className="mt-12 sm:mt-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
                Available Models in this Category ({matchingModels.length})
              </h2>
              <p className="text-xs text-[var(--text-secondary)] mt-1">
                Verified photos • Stationed in Karachi • 24/7 Availability
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {matchingModels.map((model) => (
              <div
                key={model.id}
                className="group flex flex-col rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] overflow-hidden shadow-sm transition-all hover:border-rose-500/50 hover:shadow-xl"
              >
                {/* Image Section */}
                <div
                  className="aspect-[3/4] cursor-pointer overflow-hidden bg-zinc-950"
                  onClick={() => onNavigate(`/models/${model.id}`)}
                >
                  <ModelCardImage
                    modelId={model.id}
                    modelName={model.name}
                    category={model.category}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    showLightboxOnClick={false}
                  />
                </div>

                {/* Info Card */}
                <div className="p-5 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
                        {model.category}
                      </span>
                      <span className="text-xs font-bold text-[var(--text-primary)]">
                        {model.hourlyRate}
                      </span>
                    </div>

                    <h3
                      onClick={() => onNavigate(`/models/${model.id}`)}
                      className="mt-2 font-cinzel text-xl font-bold text-[var(--text-primary)] group-hover:text-rose-600 transition-colors cursor-pointer"
                    >
                      {model.name}
                    </h3>

                    <p className="mt-1 text-xs text-[var(--text-muted)] flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-rose-500" />
                      <span>{model.location}</span>
                    </p>

                    <p className="mt-3 text-xs leading-relaxed text-[var(--text-secondary)] line-clamp-2">
                      {model.bio}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between gap-2">
                    <button
                      onClick={() => onNavigate(`/models/${model.id}`)}
                      className="flex-1 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] py-2 text-xs font-bold text-[var(--text-primary)] hover:border-rose-500/50 transition-all cursor-pointer text-center"
                    >
                      View Profile
                    </button>
                    <button
                      onClick={() => onOpenBooking(model.category, model.name)}
                      className="flex-1 rounded-lg bg-rose-600 py-2 text-xs font-bold text-white hover:bg-rose-500 transition-all cursor-pointer text-center shadow-sm"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Categories Links */}
        <div className="mt-16 sm:mt-20 border-t border-[var(--border-subtle)] pt-10">
          <h3 className="font-cinzel text-xl font-bold text-[var(--text-primary)] mb-6">
            Explore Other Karachi Categories
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {serviceCategories
              .filter((c) => c.id !== slug)
              .map((c) => (
                <div
                  key={c.id}
                  onClick={() => onNavigate(`/categories/${c.id}`)}
                  className="cursor-pointer rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-4 hover:border-rose-500/50 transition-all"
                >
                  <div className="text-xs font-bold text-rose-600 uppercase">{c.badge}</div>
                  <h4 className="font-cinzel font-bold text-sm text-[var(--text-primary)] mt-1">{c.title}</h4>
                  <p className="text-xs text-[var(--text-muted)] mt-1 line-clamp-1">{c.subtitle}</p>
                </div>
              ))}
          </div>
        </div>

      </div>
    </div>
  );
};

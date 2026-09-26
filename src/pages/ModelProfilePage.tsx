import React, { useEffect } from 'react';
import { modelsData } from '../data/models';
import { siteConfig } from '../data/content';
import { updatePageSeo } from '../utils/seo';
import { ModelCardImage } from '../components/ModelCardImage';
import { Breadcrumb } from '../components/Breadcrumb';
import {
  ShieldCheck,
  Clock,
  MapPin,
  Globe,
  DollarSign,
  Heart,
  ChevronRight,
  Phone,
  MessageSquare,
  Sparkles,
  ArrowLeft,
  Calendar
} from 'lucide-react';

interface ModelProfilePageProps {
  modelId: string;
  onOpenBooking: (category?: string, model?: string) => void;
  onNavigate: (path: string) => void;
}

export const ModelProfilePage: React.FC<ModelProfilePageProps> = ({
  modelId,
  onOpenBooking,
  onNavigate
}) => {
  const model = modelsData.find((m) => m.id === modelId);

  const getCategorySlug = (cat: string) => {
    if (cat.toLowerCase().includes('vip')) return 'vip-escorts';
    if (cat.toLowerCase().includes('independent')) return 'independent-escorts';
    if (cat.toLowerCase().includes('international')) return 'international-escorts';
    if (cat.toLowerCase().includes('call girl')) return 'call-girls';
    return 'vip-escorts';
  };

  useEffect(() => {
    if (!model) {
      updatePageSeo({
        title: 'Model Not Found | Karachi Escorts',
        description: 'The requested model profile could not be found. Browse our directory of verified Karachi escorts.',
        canonicalPath: `/models/${modelId}`
      });
      return;
    }

    const title = `${model.name} - ${model.category} Karachi Escort | Karachi Escorts`;
    const description = `Book ${model.name}, ${model.age}, verified ${model.category} escort in Karachi. Available for in-call & 5-star hotel outcalls in ${model.location}. Rates: ${model.hourlyRate}. 100% real photos.`;
    const canonicalPath = `/models/${model.id}`;
    const categorySlug = getCategorySlug(model.category);

    // Schema.org Structured Data for ProfilePage & Person
    const schema = [
      {
        '@context': 'https://schema.org',
        '@type': 'ProfilePage',
        '@id': `https://karachiescortvip.site/models/${model.id}#webpage`,
        url: `https://karachiescortvip.site/models/${model.id}`,
        name: title,
        description: description,
        inLanguage: 'en-PK',
        isPartOf: {
          '@type': 'WebSite',
          '@id': 'https://karachiescortvip.site/#website',
          url: 'https://karachiescortvip.site/',
          name: 'Karachi Escorts'
        }
      },
      {
        '@context': 'https://schema.org',
        '@type': 'Person',
        '@id': `https://karachiescortvip.site/models/${model.id}#person`,
        name: model.name,
        jobTitle: `${model.category} Model & Companion`,
        gender: 'Female',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Karachi',
          addressRegion: 'Sindh',
          addressCountry: 'PK'
        },
        worksFor: {
          '@type': 'LocalBusiness',
          name: 'Karachi Escorts',
          url: 'https://karachiescortvip.site/'
        },
        description: model.bio
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://karachiescortvip.site/'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: model.category,
            item: `https://karachiescortvip.site/categories/${categorySlug}`
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: model.name,
            item: `https://karachiescortvip.site/models/${model.id}`
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
  }, [model, modelId]);

  if (!model) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-3xl font-cinzel font-bold text-[var(--text-primary)]">Profile Not Found</h1>
        <p className="mt-3 text-[var(--text-secondary)]">The companion profile you are looking for does not exist or has been relocated.</p>
        <button
          onClick={() => onNavigate('/')}
          className="mt-6 flex items-center gap-2 rounded-xl bg-rose-600 px-6 py-3 text-sm font-bold text-white hover:bg-rose-500 cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Return to Homepage Directory</span>
        </button>
      </div>
    );
  }

  // Related models in the same or complementary category
  const relatedModels = modelsData.filter((m) => m.id !== model.id).slice(0, 3);

  const whatsappBookingUrl = `https://wa.me/${siteConfig.phone.replace(/\D/g, '')}?text=${encodeURIComponent(
    `Hello Karachi Elite Models, I would like to book ${model.name} (${model.category}) for an appointment in Karachi.`
  )}`;

  const categorySlug = getCategorySlug(model.category);
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: model.category, path: `/categories/${categorySlug}` },
    { label: model.name, path: `/models/${model.id}` }
  ];

  return (
    <div className="bg-[var(--bg-canvas)] py-8 sm:py-12 transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Semantic Breadcrumbs for Search Engine Hierarchy & Internal Linking */}
        <Breadcrumb items={breadcrumbItems} onNavigate={onNavigate} className="mb-6" />

        {/* Back Link */}
        <button
          onClick={() => onNavigate('/')}
          className="mb-6 inline-flex items-center gap-2 text-xs font-semibold text-rose-600 dark:text-rose-400 hover:underline cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to All Karachi Models</span>
        </button>

        {/* Main Model Profile Grid */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          
          {/* Left Column: Image Portfolio */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-[var(--border-subtle)] shadow-xl">
              <ModelCardImage
                modelId={model.id}
                modelName={model.name}
                category={model.category}
                className="h-full w-full"
              />
            </div>

            {/* Verification highlights banner */}
            <div className="grid grid-cols-2 gap-3 rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-4 text-xs">
              <div className="flex items-center gap-2 text-emerald-400">
                <ShieldCheck className="h-5 w-5 shrink-0" />
                <span className="font-semibold">100% Real & Verified Photos</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-400">
                <Clock className="h-5 w-5 shrink-0" />
                <span className="font-semibold">Available 24/7 in Karachi</span>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Specs & Bio */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-rose-600/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 border border-rose-500/20">
                  {model.category}
                </span>
                {model.verified && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-500 border border-emerald-500/20">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    <span>Identity Verified</span>
                  </span>
                )}
                {model.availableNow && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-500 border border-amber-500/20">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
                    <span>Ready for Booking</span>
                  </span>
                )}
              </div>

              {/* H1 Heading optimized for model profile */}
              <h1 className="mt-4 font-cinzel text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)]">
                {model.name}
              </h1>
              <p className="text-sm font-medium text-rose-600 dark:text-rose-400 mt-1">
                VIP Companion & Adult Model in Karachi
              </p>

              {/* Location Tag */}
              <div className="mt-3 flex items-center gap-2 text-xs text-[var(--text-muted)]">
                <MapPin className="h-4 w-4 text-rose-600 shrink-0" />
                <span>Stationed at: {model.location}</span>
              </div>

              {/* Bio Description */}
              <div className="mt-6 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-5">
                <h2 className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
                  About {model.name}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {model.bio}
                </p>
              </div>

              {/* Physical Attributes & Languages Grid */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-3 text-center">
                  <span className="text-[10px] uppercase tracking-wider text-[var(--text-muted)]">Age</span>
                  <div className="text-sm font-bold text-[var(--text-primary)]">{model.age} Years</div>
                </div>
                <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-3 text-center">
                  <span className="text-[10px] uppercase tracking-wider text-[var(--text-muted)]">Height</span>
                  <div className="text-sm font-bold text-[var(--text-primary)]">{model.height}</div>
                </div>
                <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-3 text-center">
                  <span className="text-[10px] uppercase tracking-wider text-[var(--text-muted)]">Languages</span>
                  <div className="text-xs font-bold text-[var(--text-primary)]">{model.languages.join(', ')}</div>
                </div>
                <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-3 text-center">
                  <span className="text-[10px] uppercase tracking-wider text-[var(--text-muted)]">Discretion</span>
                  <div className="text-xs font-bold text-emerald-500">100% Strict</div>
                </div>
              </div>

              {/* Transparent Rates Card */}
              <div className="mt-6 rounded-2xl border border-rose-500/30 bg-gradient-to-r from-rose-950/20 to-zinc-950/40 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold text-rose-400 uppercase tracking-wider">Hourly Rate</span>
                    <div className="text-2xl font-extrabold text-[var(--text-primary)]">{model.hourlyRate}</div>
                  </div>
                  {model.overnightRate && (
                    <div className="text-right">
                      <span className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">Overnight (12h)</span>
                      <div className="text-lg font-bold text-[var(--text-secondary)]">{model.overnightRate}</div>
                    </div>
                  )}
                </div>
                <p className="mt-3 text-[11px] text-[var(--text-muted)]">
                  * All rates include dedicated in-call suite access or discrete 5-star hotel outcall chauffeur travel across Karachi.
                </p>
              </div>

              {/* Available Services */}
              <div className="mt-6">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
                  Accompaniment Services Offered
                </h3>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {model.services.map((srv, idx) => (
                    <span
                      key={idx}
                      className="rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card)] px-3 py-1.5 text-xs font-medium text-[var(--text-secondary)]"
                    >
                      ✨ {srv}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Booking CTAs */}
            <div className="mt-8 pt-6 border-t border-[var(--border-subtle)] space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={whatsappBookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-900/30 hover:bg-emerald-500 transition-all"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>Reserve on WhatsApp</span>
                </a>

                <button
                  onClick={() => onOpenBooking(model.category, model.name)}
                  className="flex items-center justify-center gap-2 rounded-xl bg-rose-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-rose-900/30 hover:bg-rose-500 transition-all cursor-pointer"
                >
                  <Calendar className="h-4 w-4" />
                  <span>Instant Booking Form</span>
                </button>
              </div>

              <div className="text-center">
                <a
                  href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--text-muted)] hover:text-rose-600 transition-colors"
                >
                  <Phone className="h-3.5 w-3.5 text-rose-600" />
                  <span>Call Concierge directly: {siteConfig.phoneDisplay}</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Related Models Carousel / Internal Linking for SEO */}
        <section className="mt-16 sm:mt-20 border-t border-[var(--border-subtle)] pt-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-cinzel text-2xl font-bold text-[var(--text-primary)]">
                Other Verified Karachi Escorts
              </h2>
              <p className="text-xs text-[var(--text-secondary)] mt-1">
                Explore more companions available in Karachi today
              </p>
            </div>
            <button
              onClick={() => onNavigate('/')}
              className="text-xs font-bold text-rose-600 hover:underline cursor-pointer"
            >
              View All Directory →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedModels.map((rel) => (
              <div
                key={rel.id}
                onClick={() => onNavigate(`/models/${rel.id}`)}
                className="group cursor-pointer rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-4 transition-all hover:border-rose-500/50 hover:shadow-lg"
              >
                <div className="aspect-[4/5] overflow-hidden rounded-xl bg-zinc-900">
                  <ModelCardImage
                    modelId={rel.id}
                    modelName={rel.name}
                    category={rel.category}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                    showLightboxOnClick={false}
                  />
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <div>
                    <h3 className="font-cinzel font-bold text-[var(--text-primary)] group-hover:text-rose-500 transition-colors">
                      {rel.name}
                    </h3>
                    <p className="text-xs text-[var(--text-muted)]">{rel.category} • {rel.location.split(',')[0]}</p>
                  </div>
                  <span className="text-xs font-bold text-rose-600">{rel.hourlyRate.split(' ')[1]}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

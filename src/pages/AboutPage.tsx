import React, { useEffect } from 'react';
import { siteConfig } from '../data/content';
import { updatePageSeo } from '../utils/seo';
import { Breadcrumb } from '../components/Breadcrumb';
import {
  ShieldCheck,
  Award,
  Sparkles,
  ChevronRight,
  ArrowLeft,
  Users,
  Lock,
  HeartHandshake,
  Building2,
  Clock
} from 'lucide-react';

interface AboutPageProps {
  onOpenBooking: () => void;
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenBooking, onNavigate }) => {
  useEffect(() => {
    updatePageSeo({
      title: 'About Karachi Escorts | Premier Adult Modeling Agency',
      description: 'Learn about Karachi Escorts, our founding mission, verified photo screening process, strict client discretion standards, and luxury adult entertainment services in Karachi.',
      canonicalPath: '/about',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        '@id': 'https://karachiescortvip.site/about#webpage',
        url: 'https://karachiescortvip.site/about',
        name: 'About Karachi Escorts',
        description: 'About Karachi Escorts adult modeling and premier companion agency.',
        isPartOf: {
          '@type': 'WebSite',
          '@id': 'https://karachiescortvip.site/#website',
          url: 'https://karachiescortvip.site/'
        }
      }
    });
  }, []);

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' }
  ];

  return (
    <div className="bg-[var(--bg-canvas)] py-8 sm:py-12 transition-colors duration-200">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Semantic Breadcrumbs for Search Engine Hierarchy & Internal Linking */}
        <Breadcrumb items={breadcrumbItems} onNavigate={onNavigate} className="mb-6" />

        <button
          onClick={() => onNavigate('/')}
          className="mb-6 inline-flex items-center gap-2 text-xs font-semibold text-rose-600 dark:text-rose-400 hover:underline cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Homepage Directory</span>
        </button>

        <header className="border-b border-[var(--border-subtle)] pb-8 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Karachi's Trusted Agency Since 2018</span>
          </div>
          <h1 className="mt-4 font-cinzel text-3xl sm:text-5xl font-extrabold text-[var(--text-primary)]">
            About Karachi Elite Models
          </h1>
          <p className="mt-3 text-base sm:text-lg text-[var(--text-secondary)] font-medium">
            Setting the standard for verified adult modeling, sophisticated companionship, and 100% discretion across Karachi.
          </p>
        </header>

        <div className="mt-10 space-y-10 text-[var(--text-secondary)]">
          
          <section className="space-y-4">
            <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
              Our Vision & Agency Standards
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              Founded with the objective of providing high-caliber adult modeling, VIP dinner dates, and discreet private companionship, Karachi Elite Models has established itself as Pakistan’s premier boutique agency. We bridge the gap between discerning domestic executives, international travelers, and verified companions who embody beauty, intellect, and grace.
            </p>
            <p className="text-sm sm:text-base leading-relaxed">
              Our philosophy centers on two unshakeable pillars: <strong className="text-[var(--text-primary)]">authentic verification</strong> and <strong className="text-[var(--text-primary)]">uncompromising discretion</strong>. In a marketplace where deceptive classifieds and stolen imagery are prevalent, we provide a safe, screened, and completely confidential sanctuary.
            </p>
          </section>

          {/* Core Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-5">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-rose-500/10 p-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="font-cinzel font-bold text-sm text-[var(--text-primary)]">100% Real Verification</h3>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-[var(--text-secondary)]">
                Every photograph in our roster is authentic and recently validated. We strictly forbid stock photos or unverified foreign listings.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-5">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-rose-500/10 p-2 text-rose-600">
                  <Lock className="h-5 w-5" />
                </div>
                <h3 className="font-cinzel font-bold text-sm text-[var(--text-primary)]">Absolute Discretion</h3>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-[var(--text-secondary)]">
                We collect zero permanent personal records. All booking communication is coordinated through end-to-end encrypted messaging.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-5">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-rose-500/10 p-2 text-rose-600">
                  <HeartHandshake className="h-5 w-5" />
                </div>
                <h3 className="font-cinzel font-bold text-sm text-[var(--text-primary)]">Model Welfare & Dignity</h3>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-[var(--text-secondary)]">
                Our models possess total autonomy. We enforce strict anti-harassment policies and provide safe, upscale environments for every booking.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-5">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-rose-500/10 p-2 text-rose-600">
                  <Clock className="h-5 w-5" />
                </div>
                <h3 className="font-cinzel font-bold text-sm text-[var(--text-primary)]">24/7 VIP Concierge</h3>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-[var(--text-secondary)]">
                Our booking team operates round the clock to arrange immediate or advance appointments across Karachi with swift 15-minute dispatch.
              </p>
            </div>
          </div>

          <section className="space-y-4 border-t border-[var(--border-subtle)] pt-8">
            <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
              Operational Scope in Karachi
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              We operate exclusively across top residential sectors including Defence Housing Authority (DHA Phases 1–8), Clifton Blocks 1–9, Bath Island, and Shahrah-e-Faisal. In addition, our companions are vetted for five-star hotel outcalls at the Karachi Marriott, Pearl Continental, Mövenpick Hotel, and Avari Towers.
            </p>
            <p className="text-sm sm:text-base leading-relaxed">
              For distinguished corporate guests requiring travel accompaniment, domestic arrangements to Lahore, Islamabad, or Gwadar are readily accommodated with advance notice.
            </p>
          </section>

          {/* Action CTA */}
          <div className="rounded-3xl border border-rose-500/30 bg-[var(--bg-card)] p-6 sm:p-8 text-center">
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
              Experience Refined Companionship in Karachi
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[var(--text-secondary)] max-w-xl mx-auto">
              Connect with our discreet booking desk to view current availability and arrange an unforgettable encounter.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onOpenBooking}
                className="rounded-xl bg-rose-600 px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-white hover:bg-rose-500 transition-all cursor-pointer"
              >
                Instant Booking Form
              </button>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-[var(--text-primary)] hover:border-rose-500/50 transition-all"
              >
                WhatsApp Concierge
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

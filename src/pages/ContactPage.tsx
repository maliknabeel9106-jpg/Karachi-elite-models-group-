import React, { useEffect } from 'react';
import { siteConfig } from '../data/content';
import { updatePageSeo } from '../utils/seo';
import { Breadcrumb } from '../components/Breadcrumb';
import {
  Phone,
  MessageSquare,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  ChevronRight,
  ArrowLeft,
  Sparkles,
  Calendar
} from 'lucide-react';

interface ContactPageProps {
  onOpenBooking: () => void;
  onNavigate: (path: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenBooking, onNavigate }) => {
  useEffect(() => {
    updatePageSeo({
      title: 'Contact Karachi Escorts | 24/7 Discreet Inquiries & Booking',
      description: 'Contact Karachi Escorts via WhatsApp at 0340 2042663 or email info@karachiescortvip.site. 24/7 confidential reservation desk for in-call & hotel outcalls in Karachi.',
      canonicalPath: '/contact',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        '@id': 'https://karachiescortvip.site/contact#webpage',
        url: 'https://karachiescortvip.site/contact',
        name: 'Contact Karachi Escorts',
        description: 'Contact details and 24/7 customer service desk for Karachi Escorts.',
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
    { label: 'Contact Concierge', path: '/contact' }
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
            <Clock className="h-3.5 w-3.5" />
            <span>24/7 Confidential Assistance</span>
          </div>
          <h1 className="mt-4 font-cinzel text-3xl sm:text-5xl font-extrabold text-[var(--text-primary)]">
            Contact Karachi Elite Models
          </h1>
          <p className="mt-3 text-base sm:text-lg text-[var(--text-secondary)] font-medium">
            Reach our VIP booking desk for rapid inquiries, companion availability, and discrete private arrangements.
          </p>
        </header>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* WhatsApp Direct Card */}
          <div className="rounded-3xl border border-emerald-500/30 bg-emerald-950/20 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-emerald-500/20 p-3 text-emerald-400">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-cinzel text-lg font-bold text-white">WhatsApp VIP Desk</h3>
                  <p className="text-xs text-emerald-400">Average response time: 5–15 mins</p>
                </div>
              </div>
              <p className="mt-4 text-xs sm:text-sm leading-relaxed text-zinc-300">
                The fastest and most discreet method to browse current schedules, view real selfies, and confirm appointments.
              </p>
            </div>

            <div className="mt-6">
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-950/50"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Message 0340 2042663</span>
              </a>
            </div>
          </div>

          {/* Direct Phone Call Card */}
          <div className="rounded-3xl border border-rose-500/30 bg-rose-950/20 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-rose-500/20 p-3 text-rose-400">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-cinzel text-lg font-bold text-white">Direct Phone Call</h3>
                  <p className="text-xs text-rose-400">Available 24 Hours Daily</p>
                </div>
              </div>
              <p className="mt-4 text-xs sm:text-sm leading-relaxed text-zinc-300">
                Speak directly with an experienced liaison officer to discuss tailored itineraries or executive hotel visits.
              </p>
            </div>

            <div className="mt-6">
              <a
                href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                className="flex items-center justify-center gap-2 rounded-xl bg-rose-600 px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white hover:bg-rose-500 transition-all shadow-lg shadow-rose-950/50"
              >
                <Phone className="h-4 w-4" />
                <span>Call {siteConfig.phoneDisplay}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Agency Operating Information */}
        <div className="mt-10 rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-6 sm:p-8 space-y-6">
          <h2 className="font-cinzel text-xl font-bold text-[var(--text-primary)]">
            Agency Contact Details & Location
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
            <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-4">
              <div className="flex items-center gap-2 text-rose-600 font-bold uppercase tracking-wider text-[11px]">
                <Mail className="h-4 w-4" />
                <span>Email Inquiries</span>
              </div>
              <p className="mt-2 text-[var(--text-primary)] font-medium">{siteConfig.email}</p>
              <p className="mt-1 text-[11px] text-[var(--text-muted)]">Corporate & media relations</p>
            </div>

            <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-4">
              <div className="flex items-center gap-2 text-rose-600 font-bold uppercase tracking-wider text-[11px]">
                <MapPin className="h-4 w-4" />
                <span>Service Center</span>
              </div>
              <p className="mt-2 text-[var(--text-primary)] font-medium">Main Shahrah-e-Faisal</p>
              <p className="mt-1 text-[11px] text-[var(--text-muted)]">Karachi, Sindh – 75300, Pakistan</p>
            </div>

            <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-4">
              <div className="flex items-center gap-2 text-rose-600 font-bold uppercase tracking-wider text-[11px]">
                <Clock className="h-4 w-4" />
                <span>Operating Hours</span>
              </div>
              <p className="mt-2 text-[var(--text-primary)] font-medium">24 Hours / 7 Days</p>
              <p className="mt-1 text-[11px] text-[var(--text-muted)]">365 days a year</p>
            </div>
          </div>

          <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-xs text-[var(--text-secondary)] space-y-1">
            <div className="font-bold text-amber-500 flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4" />
              <span>Strictly 18+ & Discretion Notice</span>
            </div>
            <p>
              Karachi Elite Models strictly serves adults aged 18 and older. All client inquiries are treated with extreme confidentiality. We do not store conversation transcripts or personal contact cards after appointment completion.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

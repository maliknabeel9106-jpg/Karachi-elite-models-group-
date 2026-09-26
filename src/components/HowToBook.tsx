import React from 'react';
import { Search, PhoneCall, Sparkles, MessageSquare, ArrowRight } from 'lucide-react';
import { siteConfig } from '../data/content';

interface HowToBookProps {
  onOpenBooking: () => void;
  onOpenModels: () => void;
}

export const HowToBook: React.FC<HowToBookProps> = ({ onOpenBooking, onOpenModels }) => {
  return (
    <section id="how-to-book" className="relative bg-[var(--bg-surface)] py-14 sm:py-16 lg:py-24 border-t border-[var(--border-subtle)] transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header from video */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-cinzel text-2xl font-extrabold uppercase tracking-wide text-[var(--text-primary)] sm:text-3xl md:text-4xl">
            How to Book Karachi Escorts - <br className="hidden sm:inline" />
            <span className="text-rose-600 dark:text-rose-500">Simple 3-Step Process</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[var(--text-secondary)] sm:text-base">
            Reserving verified Karachi escorts is rapid, confidential, and completely seamless.
          </p>
        </div>

        {/* 3 Steps matching video layout */}
        <div className="mt-10 sm:mt-14 grid gap-6 sm:gap-8 md:grid-cols-3">
          
          {/* Step 1 */}
          <div className="relative rounded-2xl border border-[var(--border-card)] bg-[var(--bg-card)] p-6 sm:p-8 text-left shadow-[var(--shadow-card)] transition-all hover:border-rose-500/50 hover:bg-[var(--bg-card-hover)]">
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--rose-badge-bg)] border border-[var(--border-rose)] text-rose-600 dark:text-rose-400">
                <Search className="h-6 w-6" />
              </div>
              <span className="font-cinzel text-3xl font-black text-[var(--text-muted)]">01</span>
            </div>

            <h3 className="mt-6 font-cinzel text-base sm:text-lg font-bold uppercase tracking-wider text-[var(--text-primary)]">
              Step 1: Browse & Choose Your Escort
            </h3>
            
            <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[var(--text-secondary)]">
              Browse our verified escorts in Karachi with authentic unretouched portraits and complete profiles. Check locations, rates, and availability. Filter by tier: <span className="text-rose-600 dark:text-rose-400 font-medium">VIP, Independent, International, or Call Girls</span>.
            </p>

            <button
              onClick={onOpenModels}
              className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-rose-600 dark:text-rose-400 hover:underline uppercase tracking-wider cursor-pointer"
            >
              <span>Explore Profiles</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Step 2 */}
          <div className="relative rounded-2xl border-2 border-rose-500/40 bg-[var(--bg-card)] p-6 sm:p-8 text-left shadow-lg shadow-rose-900/10 transition-all hover:border-rose-500 hover:bg-[var(--bg-card-hover)]">
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-600 text-white shadow-md">
                <PhoneCall className="h-6 w-6" />
              </div>
              <span className="font-cinzel text-3xl font-black text-rose-600 dark:text-rose-500">02</span>
            </div>

            <h3 className="mt-6 font-cinzel text-base sm:text-lg font-bold uppercase tracking-wider text-[var(--text-primary)]">
              Step 2: Contact & Confirm Details
            </h3>
            
            <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[var(--text-secondary)]">
              Message us via WhatsApp or call <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className="text-rose-600 dark:text-rose-400 font-bold hover:underline">{siteConfig.phoneDisplay}</a>. Confirm your chosen escort, date, appointment time, location (DHA, Clifton, or Hotel), and rate. We'll answer any questions instantly.
            </p>

            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:underline uppercase tracking-wider"
            >
              <span>Message on WhatsApp</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Step 3 */}
          <div className="relative rounded-2xl border border-[var(--border-card)] bg-[var(--bg-card)] p-6 sm:p-8 text-left shadow-[var(--shadow-card)] transition-all hover:border-rose-500/50 hover:bg-[var(--bg-card-hover)]">
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--rose-badge-bg)] border border-[var(--border-rose)] text-rose-600 dark:text-rose-400">
                <Sparkles className="h-6 w-6" />
              </div>
              <span className="font-cinzel text-3xl font-black text-[var(--text-muted)]">03</span>
            </div>

            <h3 className="mt-6 font-cinzel text-base sm:text-lg font-bold uppercase tracking-wider text-[var(--text-primary)]">
              Step 3: Meet & Enjoy
            </h3>
            
            <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[var(--text-secondary)]">
              Your verified companion arrives on time, discreet and professional. Enjoy your experience with complete privacy and confidence. Repeat bookings are welcomed — many executive clients become regulars with their favorite companions.
            </p>

            <button
              onClick={onOpenBooking}
              className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-rose-600 dark:text-rose-400 hover:underline uppercase tracking-wider cursor-pointer"
            >
              <span>Reserve Companion</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>

        </div>

        {/* Big Action Button matching video */}
        <div className="mt-10 sm:mt-12 text-center">
          <a
            href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
            className="inline-flex min-h-[44px] items-center gap-2.5 rounded-xl bg-rose-600 px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-extrabold uppercase tracking-widest text-white shadow-lg shadow-rose-900/25 hover:bg-rose-500 hover:shadow-rose-600/30 transition-all"
          >
            <PhoneCall className="h-4 w-4" />
            <span>Call to Book: {siteConfig.phoneDisplay}</span>
          </a>
        </div>

      </div>
    </section>
  );
};

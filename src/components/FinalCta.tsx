import React from 'react';
import { MessageSquare, Phone, Check, ShieldCheck, Clock } from 'lucide-react';
import { siteConfig } from '../data/content';

interface FinalCtaProps {
  onOpenBooking: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenBooking }) => {
  return (
    <section id="final-booking" className="relative overflow-hidden bg-[var(--bg-surface)] py-14 sm:py-20 border-t border-[var(--border-subtle)] text-center transition-colors duration-200">
      
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-rose-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Heading from video */}
        <h2 className="font-cinzel text-2xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-[var(--text-primary)]">
          Ready to Book Your <br />
          <span className="text-rose-600 dark:text-rose-500">Elite Escort in Karachi?</span>
        </h2>

        {/* Subtitle from video */}
        <p className="mt-4 sm:mt-6 text-xs sm:text-base lg:text-lg leading-relaxed text-[var(--text-secondary)] max-w-2xl mx-auto">
          Don’t wait. Our verified, premium escorts in Karachi are available right now for discreet in-call and out-call bookings across DHA, Clifton, Gulshan, and all major five-star hotels.
        </p>

        {/* 4 Feature Points with Checkmarks from video */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-[var(--text-primary)]">
          <span className="inline-flex items-center gap-1.5 font-medium">
            <Check className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            100% Real Profiles & Photos
          </span>
          <span className="inline-flex items-center gap-1.5 font-medium">
            <Check className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            24/7 Availability
          </span>
          <span className="inline-flex items-center gap-1.5 font-medium">
            <Check className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            Instant Booking via WhatsApp
          </span>
          <span className="inline-flex items-center gap-1.5 font-medium">
            <Check className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            Absolute Discretion Guaranteed
          </span>
        </div>

        {/* Big Action Buttons from video */}
        <div className="mt-8 sm:mt-10 flex flex-col items-center justify-center gap-3 sm:gap-4 sm:flex-row">
          
          {/* Exact Bright Green WhatsApp Pill Button matching video */}
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[48px] w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-6 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-base font-bold text-white shadow-xl shadow-emerald-950/20 transition-all hover:scale-[1.02]"
          >
            <MessageSquare className="h-5 w-5 fill-current" />
            <span>Book Your Escort Now via WhatsApp</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="flex min-h-[48px] w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-[var(--border-rose)] bg-[var(--rose-badge-bg)] px-6 py-3.5 sm:py-4 text-xs sm:text-base font-bold text-rose-700 dark:text-rose-300 hover:bg-rose-600 hover:text-white transition-all cursor-pointer"
          >
            <span>Book Online Form</span>
          </button>
        </div>

        {/* Direct Call Link matching video */}
        <p className="mt-6 text-xs sm:text-sm text-[var(--text-muted)]">
          Or call{' '}
          <a
            href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
            className="font-bold text-rose-600 dark:text-rose-400 hover:underline underline-offset-4"
          >
            {siteConfig.phoneDisplay}
          </a>{' '}
          for instant booking assistance
        </p>

      </div>
    </section>
  );
};

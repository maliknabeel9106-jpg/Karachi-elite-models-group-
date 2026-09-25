import React from 'react';
import { Sparkles, CalendarHeart, ArrowRight, MessageSquare } from 'lucide-react';
import { siteConfig } from '../data/content';

interface QuickBookingBannerProps {
  onOpenBooking: () => void;
}

export const QuickBookingBanner: React.FC<QuickBookingBannerProps> = ({ onOpenBooking }) => {
  return (
    <div className="relative overflow-hidden bg-[var(--bg-card)] py-9 sm:py-10 border-y border-[var(--border-subtle)] transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row text-center md:text-left">
          
          {/* Text Labels matching video styling */}
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-cinzel text-xs font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400">
                Karachi Escorts
              </span>
              <span className="text-[var(--text-muted)]">•</span>
              <span className="text-xs font-semibold uppercase tracking-wider text-rose-600 dark:text-rose-400">
                Karachi Elite Models
              </span>
            </div>
            
            <h3 className="mt-2 font-cinzel text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-wider text-[var(--text-primary)]">
              Discreet & Instant Booking in Karachi
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-[var(--text-secondary)]">
              In-call luxury suites in DHA/Clifton or seamless outcall to your 5-star hotel suite within 30 minutes.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onOpenBooking}
              className="group relative flex min-h-[44px] items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-rose-600 via-pink-600 to-rose-700 px-6 sm:px-7 py-3 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white shadow-lg shadow-rose-900/30 transition-all hover:scale-105 hover:shadow-rose-600/40 cursor-pointer"
            >
              <CalendarHeart className="h-4 w-4 transition-transform group-hover:scale-125" />
              <span>Click for Instant Booking</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[44px] items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-50 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-400 px-5 py-3 text-xs sm:text-sm font-bold backdrop-blur-sm transition-all hover:bg-emerald-100 dark:hover:bg-emerald-900/50 hover:text-emerald-900 dark:hover:text-white"
            >
              <MessageSquare className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
              <span>WhatsApp Us</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

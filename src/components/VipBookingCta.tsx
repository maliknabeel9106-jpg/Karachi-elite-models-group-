import React from 'react';
import { Check, CalendarHeart, Shield, Sparkles } from 'lucide-react';
import { siteConfig } from '../data/content';
import { ModelCardImage } from './ModelCardImage';

interface VipBookingCtaProps {
  onOpenBooking: () => void;
}

export const VipBookingCta: React.FC<VipBookingCtaProps> = ({ onOpenBooking }) => {
  return (
    <section id="vip-booking" className="relative overflow-hidden bg-[var(--bg-surface)] py-14 sm:py-16 lg:py-24 border-t border-[var(--border-subtle)] transition-colors duration-200">
      
      {/* Background radial glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-rose-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:gap-12 lg:grid-cols-12">
          
          {/* Left Column Content from video */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <h2 className="font-cinzel text-2xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-[var(--text-primary)]">
              Book Your VIP Escort <br />
              <span className="text-rose-600 dark:text-rose-500">in Karachi Today</span>
            </h2>

            <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg leading-relaxed text-[var(--text-secondary)] max-w-2xl mx-auto lg:mx-0">
              Discreet, sophisticated, and rigorously screened. Secure your preferred profile for dinner, corporate events, or private overnight engagements across DHA, Clifton, and all five-star properties.
            </p>

            {/* Action Pill Button matching video */}
            <div className="mt-6 sm:mt-8 flex justify-center lg:justify-start">
              <button
                onClick={onOpenBooking}
                className="flex min-h-[44px] items-center gap-2 rounded-full bg-gradient-to-r from-rose-600 to-pink-600 px-8 sm:px-9 py-3.5 sm:py-4 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white shadow-xl shadow-rose-900/30 hover:from-rose-500 hover:to-pink-500 transition-all cursor-pointer"
              >
                <CalendarHeart className="h-4 w-4" />
                <span>Book Your Engagement Now</span>
              </button>
            </div>

            {/* 4 Checkmarks matching video */}
            <div className="mt-8 sm:mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 text-left">
              <div className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--rose-badge-bg)] text-rose-600 dark:text-rose-400 border border-[var(--border-rose)] flex-shrink-0">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-xs sm:text-sm font-bold text-[var(--text-primary)]">100% Discreet & Confidential</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--rose-badge-bg)] text-rose-600 dark:text-rose-400 border border-[var(--border-rose)] flex-shrink-0">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-xs sm:text-sm font-bold text-[var(--text-primary)]">Personally Vetted Profiles</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--rose-badge-bg)] text-rose-600 dark:text-rose-400 border border-[var(--border-rose)] flex-shrink-0">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-xs sm:text-sm font-bold text-[var(--text-primary)]">Flexible Premium Scheduling</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--rose-badge-bg)] text-rose-600 dark:text-rose-400 border border-[var(--border-rose)] flex-shrink-0">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-xs sm:text-sm font-bold text-[var(--text-primary)]">Authentic Unretouched Portraits</span>
              </div>
            </div>
          </div>

          {/* Right Column: Glamour Model Portrait (matches 00:36 in video) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-[var(--border-card)] bg-[var(--bg-card)] p-2 shadow-[var(--shadow-card)]">
              <div className="relative aspect-[3/4] sm:aspect-[4/5] min-h-[340px] sm:min-h-[420px] w-full overflow-hidden rounded-xl bg-zinc-900">
                <ModelCardImage
                  modelId="anastasia-volkova"
                  modelName="Anastasia V."
                  category="Russian / International"
                  className="h-full w-full object-cover object-top sm:object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <p className="font-cinzel text-xs sm:text-sm font-bold tracking-wider text-rose-300 uppercase">
                    Elite Companion Concierge
                  </p>
                  <p className="text-xs text-zinc-300 mt-1">Available across DHA & Clifton</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

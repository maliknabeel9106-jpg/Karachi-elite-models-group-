import React from 'react';
import { clientReviews } from '../data/content';
import { Star, Quote, Sparkles } from 'lucide-react';

export const ClientReviews: React.FC = () => {
  return (
    <section id="reviews" className="relative bg-[var(--bg-surface)] py-14 sm:py-16 lg:py-24 border-t border-[var(--border-subtle)] transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading from video */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border-rose)] bg-[var(--rose-badge-bg)] px-3 py-1 text-xs font-semibold text-[var(--rose-badge-text)] shadow-sm">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Client Feedback</span>
          </div>
          <h2 className="mt-4 font-cinzel text-2xl font-extrabold uppercase tracking-wide text-[var(--text-primary)] sm:text-3xl md:text-4xl">
            What Our Clients Say <br className="hidden sm:inline" />
            <span className="text-rose-600 dark:text-rose-500">About Our Karachi Escort Services</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[var(--text-secondary)]">
            Authentic testimonials from executives, frequent business travelers, and VIP guests across Karachi.
          </p>
        </div>

        {/* Testimonial Cards Layout matching video (00:39 - 00:42) */}
        <div className="mt-10 sm:mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {clientReviews.map((rev) => (
            <div
              key={rev.id}
              className="group relative flex flex-col justify-between rounded-2xl border border-[var(--border-card)] bg-[var(--bg-card)] p-6 sm:p-7 text-center shadow-[var(--shadow-card)] transition-all duration-300 hover:border-rose-500/50 hover:bg-[var(--bg-card-hover)]"
            >
              {/* Top Accent Icon matching video's pink framed icon */}
              <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border-rose)] bg-[var(--rose-badge-bg)] text-rose-600 dark:text-rose-400 shadow-sm group-hover:bg-rose-600 group-hover:text-white transition-colors">
                <Quote className="h-5 w-5" />
              </div>

              {/* Star Rating */}
              <div className="mb-4 flex justify-center gap-1">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />
                ))}
              </div>

              {/* Quote from video refined */}
              <p className="font-cinzel text-xs sm:text-sm leading-relaxed text-[var(--text-primary)] italic">
                "{rev.quote}"
              </p>

              {/* Author Attribution */}
              <div className="mt-6 border-t border-[var(--border-subtle)] pt-4">
                <div className="font-cinzel text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
                  {rev.client}
                </div>
                <div className="text-[11px] text-[var(--text-muted)] mt-0.5">
                  {rev.location}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

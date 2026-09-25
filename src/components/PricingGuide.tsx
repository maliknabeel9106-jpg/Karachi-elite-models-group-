import React from 'react';
import { pricingTiers, siteConfig } from '../data/content';
import { HelpCircle, MessageSquare, Check, Sparkles } from 'lucide-react';

interface PricingGuideProps {
  onOpenBooking: () => void;
}

export const PricingGuide: React.FC<PricingGuideProps> = ({ onOpenBooking }) => {
  return (
    <section id="pricing" className="relative bg-[var(--bg-canvas)] py-14 sm:py-16 lg:py-24 border-t border-[var(--border-subtle)] transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-xs font-semibold uppercase tracking-widest text-rose-600 dark:text-rose-400">
            Transparent Tariff Schedule
          </div>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[var(--text-primary)] tracking-tight [text-wrap:balance]">
            Karachi Escorts Rates <span className="font-light italic text-rose-600 dark:text-rose-400">&amp;</span> Transparent Pricing
          </h2>
          
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-[var(--text-secondary)] [text-wrap:pretty]">
            Clear, transparent tariffs for verified Karachi escorts. Pricing varies by tier, booking duration, and in-call or hotel suite outcall arrangements across DHA, Clifton, and central Karachi.
          </p>
        </div>

        {/* Pricing Comparison Table matching video */}
        <div className="mt-10 sm:mt-12 overflow-hidden rounded-2xl border border-[var(--border-card)] bg-[var(--bg-card)] shadow-[var(--shadow-card)]">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-[var(--border-subtle)] bg-[var(--bg-surface)] text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                  <th className="py-4 px-5 sm:px-8">Escort Tier</th>
                  <th className="py-4 px-5 sm:px-8">Estimated Tariff</th>
                  <th className="py-4 px-5 sm:px-8">Duration</th>
                  <th className="hidden py-4 px-5 sm:px-8 md:table-cell">Includes</th>
                  <th className="py-4 px-5 sm:px-8 text-right">Reservation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border-subtle)] text-xs sm:text-sm">
                {pricingTiers.map((tier, idx) => (
                  <tr
                    key={idx}
                    className={`transition-colors hover:bg-[var(--bg-card-hover)] ${
                      tier.popular ? 'bg-rose-500/5 dark:bg-rose-950/10' : ''
                    }`}
                  >
                    <td className="py-4 sm:py-5 px-5 sm:px-8 font-serif text-base sm:text-lg font-semibold text-[var(--text-primary)]">
                      <div className="flex items-center gap-2">
                        <span className="text-rose-600 dark:text-rose-400">{tier.type}</span>
                        {tier.popular && (
                          <span className="text-[11px] font-sans font-semibold uppercase tracking-wider text-rose-600 dark:text-rose-300">
                            · Popular
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="py-4 sm:py-5 px-5 sm:px-8 font-semibold text-[var(--text-primary)] tabular-nums">
                      {tier.rates}
                    </td>
                    <td className="py-4 sm:py-5 px-5 sm:px-8 text-[var(--text-secondary)] font-medium">
                      {tier.duration}
                    </td>
                    <td className="hidden py-4 sm:py-5 px-5 sm:px-8 text-xs text-[var(--text-muted)] md:table-cell [text-wrap:pretty]">
                      {tier.includes}
                    </td>
                    <td className="py-4 sm:py-5 px-5 sm:px-8 text-right">
                      <button
                        onClick={onOpenBooking}
                        className="rounded-lg bg-rose-600 px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs font-semibold text-white hover:bg-rose-500 transition-all cursor-pointer shadow-sm active:scale-95"
                      >
                        Reserve
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Footer Note matching the exact text box from video */}
          <div className="border-t border-[var(--border-subtle)] bg-[var(--bg-surface)] p-5 sm:p-6">
            <p className="text-xs sm:text-sm leading-relaxed text-[var(--text-secondary)]">
              <strong className="text-[var(--text-primary)]">Note:</strong> Rates are starting prices and may vary based on companion, time of day, location (DHA / Clifton outcalls, private penthouses), and special requests.{' '}
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-rose-600 dark:text-rose-400 hover:underline underline-offset-2"
              >
                Contact us for exact quotes.
              </a>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

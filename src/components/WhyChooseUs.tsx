import React from 'react';
import { ShieldCheck, Lock, Clock, DollarSign, ArrowRight } from 'lucide-react';

interface WhyChooseUsProps {
  onOpenBooking: () => void;
  onOpenAgencyInfo: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenBooking, onOpenAgencyInfo }) => {
  const pillars = [
    {
      icon: ShieldCheck,
      title: '100% Verified Escorts in Karachi – Real Photos, No Fakes',
      description: "Every companion in our Karachi escort directory is personally screened with authentic, recent photos. You see exactly what you're booking — no misleading stock images, filtered decoys, or outdated profiles like lesser services in Karachi use.",
      highlight: 'Screened in person'
    },
    {
      icon: Lock,
      title: 'Discreet Professional Escort Service You Can Trust',
      description: 'Your privacy is paramount. We utilize encrypted end-to-end communications, anonymous booking protocols, and strict non-disclosure practices to protect your identity at every step. Complete discretion guaranteed.',
      highlight: 'End-to-end privacy'
    },
    {
      icon: Clock,
      title: '24/7 Elite Escort Availability Across Karachi',
      description: 'Instant access to premium companions for in-call and out-call appointments in DHA Phases 1–8, Clifton Blocks 1–9, Gulshan, five-star luxury hotels, and beyond. Prompt arrivals whenever you need company.',
      highlight: 'Rapid dispatch'
    },
    {
      icon: DollarSign,
      title: 'Transparent Pricing – No Hidden Charges',
      description: 'Clear, upfront escort rates in Karachi with zero hidden surprises. Our rates are competitive and straightforward — what you agree upon is what you pay, with no surprise markups, hidden extras, or booking surcharges.',
      highlight: 'Upfront rates'
    }
  ];

  return (
    <section id="why-us" className="relative bg-[var(--bg-canvas)] py-14 sm:py-16 lg:py-24 border-t border-[var(--border-subtle)] transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Section Header from video */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="text-xs font-semibold uppercase tracking-widest text-rose-600 dark:text-rose-400">
            Agency Standards &amp; Guarantees
          </div>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[var(--text-primary)] tracking-tight [text-wrap:balance]">
            Why Choose Our Karachi Escort Service <span className="font-light italic text-rose-600 dark:text-rose-400">&amp;</span> Concierge?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[var(--text-secondary)] max-w-2xl mx-auto [text-wrap:pretty]">
            Setting the benchmark for elegance, reliability, and security in Pakistan’s corporate and cosmopolitan capital.
          </p>
        </div>

        {/* 4 Feature Columns / Grid matching video */}
        <div className="mt-10 sm:mt-14 grid gap-6 sm:gap-8 md:grid-cols-2">
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={index}
                className="group relative rounded-2xl border border-[var(--border-card)] bg-[var(--bg-card)] p-6 sm:p-7 shadow-[var(--shadow-card)] transition-all duration-300 hover:border-rose-500/50 hover:bg-[var(--bg-card-hover)]"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-xl border border-[var(--border-rose)] bg-[var(--rose-badge-bg)] p-3 text-rose-600 dark:text-rose-400 shadow-sm transition-colors group-hover:bg-rose-600 group-hover:text-white flex-shrink-0">
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-rose-600 dark:text-rose-400">
                      {pillar.highlight}
                    </span>
                    <h3 className="mt-1 font-serif text-xl sm:text-2xl font-semibold text-[var(--text-primary)] group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors leading-snug">
                      {pillar.title}
                    </h3>
                  </div>
                </div>
                
                <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)] [text-wrap:pretty]">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Button from video: "ABOUT OUR AGENCY" */}
        <div className="mt-10 sm:mt-12 text-center">
          <button
            onClick={onOpenAgencyInfo}
            className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-rose-600 px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-rose-900/20 hover:bg-rose-500 transition-all cursor-pointer active:scale-95"
          >
            <span>Learn About Our Agency</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

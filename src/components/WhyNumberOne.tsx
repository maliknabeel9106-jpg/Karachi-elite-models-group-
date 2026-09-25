import React from 'react';
import { CheckCircle2, Shield, Lock, Clock, Award, CreditCard } from 'lucide-react';

export const WhyNumberOne: React.FC = () => {
  const points = [
    {
      icon: CheckCircle2,
      title: '100% VERIFIED MODELS',
      desc: 'Every companion in our Karachi directory is personally screened with authentic, up-to-date photos — no fakes, no old pictures, no misleading stock images.'
    },
    {
      icon: Lock,
      title: 'COMPLETE PRIVACY GUARANTEED',
      desc: 'Your identity and booking details are kept strictly confidential. Encrypted communications, anonymous payments, and discreet service from start to finish.'
    },
    {
      icon: Clock,
      title: '24/7 AVAILABILITY',
      desc: 'Book anytime, anywhere. Our escorts are available for morning, afternoon, evening, or late-night appointments across all Karachi areas.'
    },
    {
      icon: Award,
      title: 'PROFESSIONAL & DISCREET',
      desc: 'Our agency operates with the highest standards of professionalism. Every interaction is respectful, confidential, and tailored to your unique expectations.'
    },
    {
      icon: CreditCard,
      title: 'FLEXIBLE & UPFRONT PRICING',
      desc: 'Competitive escort rates, clear upfront pricing, and payment options that work for you. No hidden agency fees, no sudden surcharges.'
    }
  ];

  return (
    <section id="why-number-one" className="relative bg-[var(--bg-canvas)] py-14 sm:py-16 lg:py-24 border-t border-[var(--border-subtle)] transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header from video */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-cinzel text-2xl font-extrabold uppercase tracking-wide text-[var(--text-primary)] sm:text-3xl md:text-4xl">
            Why Karachi Elite Models Leads in <br className="hidden sm:inline" />
            <span className="text-rose-600 dark:text-rose-500">VIP Karachi Escorts</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-xs sm:text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
            With hundreds of verified clients and an impeccable reputation built on discretion, quality, and reliability, Karachi Elite Models is the trusted choice for luxury companionship across Pakistan.
          </p>
        </div>

        {/* 5 Quality Points List */}
        <div className="mt-10 sm:mt-14 max-w-4xl mx-auto space-y-4 sm:space-y-6">
          {points.map((p, i) => {
            const IconComponent = p.icon;
            return (
              <div
                key={i}
                className="group rounded-2xl border border-[var(--border-card)] bg-[var(--bg-card)] p-5 sm:p-6 shadow-[var(--shadow-card)] transition-all hover:border-rose-500/50 hover:bg-[var(--bg-card-hover)]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[var(--rose-badge-bg)] border border-[var(--border-rose)] text-rose-600 dark:text-rose-400 group-hover:bg-rose-600 group-hover:text-white transition-colors">
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-cinzel text-sm sm:text-base font-bold uppercase tracking-wider text-[var(--text-primary)] group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                      {p.title}
                    </h3>
                    <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm leading-relaxed text-[var(--text-secondary)]">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

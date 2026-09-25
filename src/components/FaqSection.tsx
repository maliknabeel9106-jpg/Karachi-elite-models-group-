import React, { useState } from 'react';
import { faqs } from '../data/content';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { siteConfig } from '../data/content';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIdx(openIdx === index ? null : index);
  };

  return (
    <section id="faq" className="relative bg-[var(--bg-canvas)] py-14 sm:py-16 lg:py-24 border-t border-[var(--border-subtle)] transition-colors duration-200">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center">
          <div className="text-xs font-semibold uppercase tracking-widest text-rose-600 dark:text-rose-400">
            Frequently Answered Questions
          </div>
          
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[var(--text-primary)] tracking-tight [text-wrap:balance]">
            Frequently Asked Questions <span className="font-light italic text-rose-600 dark:text-rose-400">&amp;</span> Booking Policies
          </h2>
          
          <p className="mt-3 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed max-w-2xl mx-auto [text-wrap:pretty]">
            Everything you need to know about tariffs, hotel outcalls, client confidentiality, and booking procedures for verified Karachi escorts.
          </p>
        </div>

        {/* FAQ Accordion List matching the exact questions from video */}
        <div className="mt-10 sm:mt-12 space-y-3 sm:space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIdx === index;
            return (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-[var(--border-card)] bg-[var(--bg-card)] shadow-[var(--shadow-card)] transition-all hover:border-rose-500/30"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex min-h-[52px] w-full items-center justify-between p-4 sm:p-5 text-left transition-colors hover:bg-[var(--bg-card-hover)] cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-semibold text-[var(--text-primary)] pr-4 tracking-normal">
                    {faq.question}
                  </span>
                  <div
                    className={`flex h-7 w-7 sm:h-8 sm:w-8 flex-shrink-0 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-primary)] transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-rose-600 text-white border-rose-600' : ''
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="border-t border-[var(--border-subtle)] px-4 pb-5 pt-3 sm:px-5 sm:pb-6 text-sm text-[var(--text-secondary)] leading-relaxed [text-wrap:pretty]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional help prompt */}
        <div className="mt-10 rounded-2xl border border-[var(--border-rose)] bg-[var(--bg-card)] p-5 sm:p-6 text-center shadow-[var(--shadow-card)]">
          <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
            Have a question not listed here? Our concierge is on standby 24/7.
          </p>
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-rose-600 dark:text-rose-400 hover:underline underline-offset-4"
          >
            <MessageSquare className="h-4 w-4" />
            <span>Ask Us Privately on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};

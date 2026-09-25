import React, { useState } from 'react';
import { serviceCategories } from '../data/content';
import { ArrowRight, Sparkles, Check, ChevronRight } from 'lucide-react';

interface ServiceCategoriesProps {
  onSelectCategory: (categoryName: string) => void;
  onOpenBooking: () => void;
  onNavigate?: (path: string) => void;
}

export const ServiceCategories: React.FC<ServiceCategoriesProps> = ({ onSelectCategory, onOpenBooking, onNavigate }) => {
  const handleCategoryClick = (e: React.MouseEvent<HTMLAnchorElement>, catId: string, catTitle: string) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(`/categories/${catId}`);
    } else {
      e.preventDefault();
      onSelectCategory(catTitle);
    }
  };
  return (
    <section id="services" className="relative bg-[var(--bg-surface)] py-14 sm:py-16 lg:py-24 border-t border-[var(--border-subtle)] transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-xs font-semibold uppercase tracking-widest text-rose-600 dark:text-rose-400">
            Curated Companion Portfolio
          </div>
          
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[var(--text-primary)] tracking-tight [text-wrap:balance]">
            Karachi Escorts Categories <span className="font-light italic text-rose-600 dark:text-rose-400">&amp;</span> VIP Companions
          </h2>
          
          <p className="mt-3 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed [text-wrap:pretty]">
            Select from our verified Karachi escort tiers tailored to your occasion. From discreet hotel dinners and private in-call relaxation to luxury outcall companionship.
          </p>
        </div>

        {/* 4 Category Cards matching the video order and exact content */}
        <div className="mt-10 sm:mt-14 grid gap-6 sm:gap-8 lg:grid-cols-2">
          {serviceCategories.map((category) => (
            <div
              key={category.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[var(--border-card)] bg-[var(--bg-card)] p-6 sm:p-8 shadow-[var(--shadow-card)] transition-all duration-300 hover:border-rose-500/50 hover:bg-[var(--bg-card-hover)]"
            >
              <div>
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold uppercase tracking-wider text-rose-600 dark:text-rose-400">
                    {category.badge}
                  </span>
                  <span className="text-[var(--text-muted)] font-medium">Available 24/7</span>
                </div>

                <h3 className="mt-3 font-serif text-2xl sm:text-3xl font-semibold text-[var(--text-primary)] group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                  <a
                    href={`/categories/${category.id}`}
                    onClick={(e) => handleCategoryClick(e, category.id, category.title)}
                  >
                    {category.title}
                  </a>
                </h3>
                
                <div className="mt-1 text-xs font-medium tracking-wide text-[var(--text-muted)]">
                  {category.subtitle}
                </div>

                <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)] [text-wrap:pretty]">
                  {category.description}
                </p>
              </div>

              <div className="mt-6 border-t border-[var(--border-subtle)] pt-5 flex items-center justify-between">
                <a
                  href={`/categories/${category.id}`}
                  onClick={(e) => handleCategoryClick(e, category.id, category.title)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-rose-600 dark:text-rose-400 hover:underline uppercase transition-colors"
                >
                  <span>{category.linkText}</span>
                  <ArrowRight className="h-3 w-3" />
                </a>

                <button
                  onClick={onOpenBooking}
                  className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-4 py-2 text-xs font-semibold text-[var(--text-primary)] hover:bg-rose-600 hover:text-white hover:border-rose-600 transition-all cursor-pointer shadow-sm active:scale-95"
                >
                  Book Category
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Tagline from video */}
        <div className="mt-10 sm:mt-12 rounded-2xl border border-[var(--border-rose)] bg-[var(--bg-card)] p-6 sm:p-8 text-center shadow-[var(--shadow-card)]">
          <p className="font-serif italic text-base sm:text-lg md:text-xl text-[var(--text-primary)] leading-relaxed max-w-3xl mx-auto [text-wrap:balance]">
            &ldquo;Choose us for reliability, sophistication, and real satisfaction in every escort encounter in Karachi. Your elite experience starts here.&rdquo;
          </p>
        </div>

      </div>
    </section>
  );
};

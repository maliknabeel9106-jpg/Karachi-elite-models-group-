import React from 'react';
import { serviceFormats } from '../data/content';
import { Building, Car, Hotel, Moon, Sparkles, Check, ArrowRight } from 'lucide-react';

interface ServiceTypesProps {
  onOpenBooking: () => void;
}

export const ServiceTypes: React.FC<ServiceTypesProps> = ({ onOpenBooking }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building':
        return <Building className="h-6 w-6 text-rose-600 dark:text-rose-500" />;
      case 'Car':
        return <Car className="h-6 w-6 text-rose-600 dark:text-rose-500" />;
      case 'Hotel':
        return <Hotel className="h-6 w-6 text-rose-600 dark:text-rose-500" />;
      case 'Moon':
        return <Moon className="h-6 w-6 text-rose-600 dark:text-rose-500" />;
      default:
        return <Sparkles className="h-6 w-6 text-rose-600 dark:text-rose-500" />;
    }
  };

  return (
    <section id="service-types" className="relative bg-[var(--bg-canvas)] py-14 sm:py-16 lg:py-24 border-t border-[var(--border-subtle)] transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header from video */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-cinzel text-2xl font-extrabold uppercase tracking-wide text-[var(--text-primary)] sm:text-3xl md:text-4xl">
            Karachi Escorts Services <br className="hidden sm:inline" />
            <span className="text-rose-600 dark:text-rose-500">&amp; Companionship Formats</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[var(--text-secondary)] sm:text-base">
            Our Karachi escorts offer multiple service formats to suit your location, privacy preference, and schedule.
          </p>
        </div>

        {/* Formats Grid matching the video */}
        <div className="mt-10 sm:mt-14 space-y-5 sm:space-y-6">
          {serviceFormats.map((format) => (
            <div
              key={format.id}
              className="group rounded-2xl border border-[var(--border-card)] bg-[var(--bg-card)] p-5 sm:p-7 lg:p-8 shadow-[var(--shadow-card)] transition-all hover:border-rose-500/50 hover:bg-[var(--bg-card-hover)]"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                
                <div className="flex items-start gap-4">
                  <div className="rounded-xl border border-[var(--border-rose)] bg-[var(--rose-badge-bg)] p-3.5 flex-shrink-0 group-hover:bg-rose-600 group-hover:text-white transition-colors">
                    {getIcon(format.icon)}
                  </div>
                  <div>
                    <h3 className="font-cinzel text-lg sm:text-xl font-bold uppercase tracking-wide text-[var(--text-primary)] group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                      {format.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[var(--text-secondary)] max-w-3xl">
                      {format.description}
                    </p>

                    {/* Highlights chips */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {format.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-2.5 py-1 text-xs font-medium text-[var(--text-secondary)]"
                        >
                          <Check className="h-3 w-3 text-rose-600 dark:text-rose-500" />
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex-shrink-0 md:text-right pt-2 md:pt-0">
                  <button
                    onClick={onOpenBooking}
                    className="inline-flex min-h-[40px] items-center gap-2 rounded-xl bg-rose-600 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-rose-500 transition-all shadow cursor-pointer"
                  >
                    <span>Book Service</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                  <p className="mt-2 text-[11px] text-[var(--text-muted)]">
                    {format.recommendedFor}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

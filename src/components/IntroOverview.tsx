import React from 'react';
import { CheckCircle2, Shield, HeartHandshake, MapPin } from 'lucide-react';
import { siteConfig } from '../data/content';
import { ModelCardImage } from './ModelCardImage';

interface IntroOverviewProps {
  onOpenBooking: () => void;
  onOpenModels: () => void;
}

export const IntroOverview: React.FC<IntroOverviewProps> = ({ onOpenBooking, onOpenModels }) => {
  return (
    <section id="overview" className="relative border-t border-[var(--border-subtle)] bg-[var(--bg-surface)] py-14 sm:py-16 lg:py-24 transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching video */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="text-xs font-semibold uppercase tracking-widest text-rose-600 dark:text-rose-400">
            About Karachi Elite Models
          </div>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[var(--text-primary)] tracking-tight [text-wrap:balance]">
            Karachi Escorts <span className="font-light italic text-rose-600 dark:text-rose-400">&amp;</span> VIP Executive Companions
          </h2>
          
          <p className="mt-2.5 text-sm sm:text-base font-medium text-[var(--text-secondary)] [text-wrap:pretty]">
            Welcome to Karachi Elite Models — Pakistan&rsquo;s most trusted directory for discreet, verified escort services
          </p>
        </div>

        {/* 2-Column Content Layout: Editorial Copy on Left, Portrait Card on Right */}
        <div className="mt-10 sm:mt-12 grid items-center gap-10 lg:grid-cols-12 lg:gap-10">
          
          {/* Editorial Content Column */}
          <div className="lg:col-span-7 space-y-5 text-[var(--text-secondary)]">
            
            <p className="text-sm sm:text-base leading-relaxed text-[var(--text-secondary)]">
              Discover the finest companion and escort service in Karachi, where sophistication meets absolute discretion. Whether you are seeking <span className="font-semibold text-rose-600 dark:text-rose-400">VIP escorts</span>, independent companions, or stunning international models in Karachi, our verified models ensure complete confidentiality and unforgettable experiences. Available 24/7 for in-call and out-call across <span className="text-[var(--text-primary)] font-medium">DHA Phases 1–8, Clifton Blocks 1–9, Gulshan-e-Iqbal</span>, and premier five-star hotel properties.
            </p>

            <p className="text-sm sm:text-base leading-relaxed text-[var(--text-secondary)]">
              At our elite escort agency in Karachi, we specialize in delivering refined companionship for discerning executives and visitors. Every escort in our Karachi directory is personally vetted, with <span className="font-semibold text-[var(--text-primary)]">100% real photos and verified profiles</span> — no fake images, no misleading stock portraits, and no surprises. From relaxed dining accompaniment to luxury overnight stays, we provide the full spectrum of professional companion services tailored to your exact desires.
            </p>

            <p className="text-sm sm:text-base leading-relaxed font-medium text-[var(--text-primary)]">
              Experience genuine warmth, total discretion, and executive class with Karachi’s most trusted escort service. Reserve your elite companion with confidence today.
            </p>

            {/* Bullet Points with Checkmarks from video */}
            <ul className="mt-6 space-y-3.5 border-t border-[var(--border-subtle)] pt-6">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-rose-600 dark:text-rose-500" />
                <span className="text-xs sm:text-sm font-medium text-[var(--text-secondary)]">
                  <strong className="text-[var(--text-primary)]">Elite & VIP Karachi escorts</strong> available 24/7 with immediate response
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-rose-600 dark:text-rose-500" />
                <span className="text-xs sm:text-sm font-medium text-[var(--text-secondary)]">
                  <strong className="text-[var(--text-primary)]">Discreet escort services in Karachi</strong> with personally screened & verified models
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-rose-600 dark:text-rose-500" />
                <span className="text-xs sm:text-sm font-medium text-[var(--text-secondary)]">
                  <strong className="text-[var(--text-primary)]">Outcalls to luxury hotels</strong> (Marriott, PC, Mövenpick), private residences, and VIP events
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-rose-600 dark:text-rose-500" />
                <span className="text-xs sm:text-sm font-medium text-[var(--text-secondary)]">
                  <strong className="text-[var(--text-primary)]">Competitive rates</strong> starting from affordable luxury with clear, upfront pricing
                </span>
              </li>
            </ul>

            {/* Quick Action Links */}
            <div className="flex flex-wrap items-center gap-3.5 pt-4">
              <button
                onClick={onOpenBooking}
                className="min-h-[44px] rounded-xl bg-rose-600 px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-md shadow-rose-900/20 hover:bg-rose-500 transition-all cursor-pointer"
              >
                Book An Escort Now
              </button>
              <button
                onClick={onOpenModels}
                className="min-h-[44px] rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] px-6 py-3 text-xs sm:text-sm font-bold text-[var(--text-primary)] shadow-sm hover:border-rose-500/50 hover:bg-[var(--bg-card-hover)] transition-all cursor-pointer"
              >
                View Verified Profiles
              </button>
            </div>

          </div>

          {/* Right Column: Model Portrait in Red Dress */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              <div className="overflow-hidden rounded-2xl border border-[var(--border-card)] bg-[var(--bg-card)] p-2 shadow-[var(--shadow-card)]">
                <div className="relative aspect-[3/4] sm:aspect-[4/5] min-h-[350px] sm:min-h-[460px] w-full overflow-hidden rounded-xl bg-zinc-900">
                  <ModelCardImage
                    modelId="alizeh-shah"
                    modelName="Alizeh S."
                    category="Independent"
                    className="h-full w-full object-cover object-top sm:object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                  
                  <div className="absolute top-4 right-4 rounded-full bg-rose-600/90 px-3 py-1 text-xs font-bold text-white shadow backdrop-blur-sm">
                    Verified Roster
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/15 bg-black/80 p-3.5 sm:p-4 backdrop-blur-md">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-cinzel text-sm sm:text-base font-bold text-white">Alizeh S. (22)</p>
                        <p className="flex items-center gap-1 text-xs text-rose-300">
                          <MapPin className="h-3 w-3" /> DHA Phase 5, Karachi
                        </p>
                      </div>
                      <a
                        href={siteConfig.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg bg-rose-600 px-3.5 py-1.5 text-xs font-bold text-white hover:bg-rose-500 shadow"
                      >
                        Inquire
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

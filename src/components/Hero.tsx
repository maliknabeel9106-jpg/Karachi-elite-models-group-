import React from 'react';
import { MessageSquare, Users, ShieldCheck, Clock, Award, Star } from 'lucide-react';
import { siteConfig } from '../data/content';
import { ModelCardImage } from './ModelCardImage';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenModels: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onOpenModels }) => {
  return (
    <section id="home" className="relative overflow-hidden bg-[var(--bg-canvas)] pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-20 lg:pb-28 transition-colors duration-200">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-[700px] rounded-full bg-rose-500/10 dark:bg-rose-900/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-rose-600/5 dark:bg-rose-600/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Hero Text Content matching video */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            {/* Quiet Editorial Kicker (No static pill enclosure) */}
            <div className="flex items-center justify-center lg:justify-start gap-2.5 text-xs font-medium text-[var(--text-muted)] tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              <span className="font-semibold text-rose-600 dark:text-rose-400 uppercase tracking-widest text-[11px]">Verified Directory</span>
              <span aria-hidden="true" className="text-zinc-400 dark:text-zinc-600">·</span>
              <span>Available 24/7 in Karachi</span>
              <span aria-hidden="true" className="hidden sm:inline text-zinc-400 dark:text-zinc-600">·</span>
              <span className="hidden sm:inline">DHA &amp; Clifton Outcalls</span>
            </div>

            {/* Main Editorial Heading */}
            <h1 className="mt-5 font-serif text-3xl sm:text-5xl md:text-5xl lg:text-[3.4rem] font-semibold text-[var(--text-primary)] leading-[1.1] tracking-tight [text-wrap:balance]">
              Karachi Escorts <span className="font-light italic text-rose-600 dark:text-rose-400">&amp;</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-rose-500 to-pink-500 font-bold">VIP Companions</span>
              <span className="block mt-2 font-sans text-base sm:text-xl lg:text-2xl font-light text-[var(--text-secondary)] tracking-normal">
                Discreet in-call &amp; five-star hotel outcalls across Karachi
              </span>
            </h1>

            {/* Refined, professional subtitle with natural rhythm */}
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-[var(--text-secondary)] max-w-2xl mx-auto lg:mx-0 [text-wrap:pretty]">
              Welcome to Karachi Elite Models, Pakistan’s premiere curated companion directory. Every profile is independently photo-verified with prompt, confidential room service to Pearl Continental, Avari Towers, Marriott, and private residences in DHA and Clifton.
            </p>

            {/* Action Buttons - Human Title Case & Balanced Padding */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 lg:justify-start">
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center justify-center gap-2.5 rounded-xl bg-rose-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-900/25 transition-all duration-200 hover:bg-rose-500 hover:shadow-rose-600/35 active:scale-[0.99]"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <button
                onClick={onOpenModels}
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] px-6 py-3 text-sm font-semibold text-[var(--text-primary)] shadow-sm transition-all duration-200 hover:border-rose-500/50 hover:bg-[var(--bg-card-hover)] cursor-pointer active:scale-[0.99]"
              >
                <Users className="h-4 w-4 text-rose-600 dark:text-rose-400" />
                <span>Browse Models</span>
              </button>
            </div>

            {/* Trust Points - Editorial List without shouting */}
            <div className="mt-9 grid grid-cols-1 gap-3.5 sm:grid-cols-3 sm:gap-5 border-t border-[var(--border-subtle)] pt-6 text-left">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-[var(--rose-badge-bg)] p-2 text-rose-600 dark:text-rose-400 border border-[var(--border-rose)]">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[var(--text-primary)]">100% Photo Verified</div>
                  <div className="text-[11px] text-[var(--text-muted)]">Genuine natural portraits</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-[var(--rose-badge-bg)] p-2 text-rose-600 dark:text-rose-400 border border-[var(--border-rose)]">
                  <Clock className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[var(--text-primary)]">24/7 Availability</div>
                  <div className="text-[11px] text-[var(--text-muted)]">Fast DHA &amp; Clifton dispatch</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-[var(--rose-badge-bg)] p-2 text-rose-600 dark:text-rose-400 border border-[var(--border-rose)]">
                  <Award className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[var(--text-primary)]">Strict Discretion</div>
                  <div className="text-[11px] text-[var(--text-muted)]">Private hotel suite arrival</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Model Portrait with Glowing Frame */}
          <div className="lg:col-span-5 relative flex justify-center mt-4 lg:mt-0">
            <div className="relative w-full max-w-md">
              
              {/* Outer decorative ring and glow */}
              <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-tr from-rose-600 to-pink-600 opacity-30 dark:opacity-40 blur-lg transition duration-1000 group-hover:opacity-60" />
              
              {/* Main Model Showcase Card */}
              <div className="relative overflow-hidden rounded-2xl border border-[var(--border-card)] bg-[var(--bg-card)] p-2 shadow-[var(--shadow-card)]">
                <div className="relative aspect-[3/4] sm:aspect-[4/5] min-h-[350px] sm:min-h-[450px] w-full overflow-hidden rounded-xl bg-zinc-900">
                  <ModelCardImage
                    modelId="zoya-khan"
                    modelName="Zoya K."
                    category="VIP"
                    className="h-full w-full object-cover object-top sm:object-center transition-transform duration-700 hover:scale-105"
                  />
                  
                  {/* Subtle gradient vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Overlay Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-600/95 px-3 py-1 text-xs font-bold text-white shadow-md backdrop-blur-md">
                      <Star className="h-3.5 w-3.5 fill-current" />
                      VIP Elite Model
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-black/70 px-2.5 py-0.5 text-[11px] font-medium text-emerald-400 backdrop-blur-md border border-emerald-500/40">
                      ● Available Now
                    </span>
                  </div>

                  {/* Bottom Portrait Info */}
                  <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/15 bg-black/80 p-3.5 sm:p-4 backdrop-blur-md">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-cinzel text-base sm:text-lg font-bold text-white">Zoya K.</h3>
                        <p className="text-xs text-rose-300">DHA Phase 6 & Clifton In-Call</p>
                      </div>
                      <button
                        onClick={onOpenBooking}
                        className="rounded-lg bg-rose-600 px-3.5 py-2 text-xs font-bold text-white hover:bg-rose-500 transition-colors cursor-pointer shadow"
                      >
                        Book Now
                      </button>
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

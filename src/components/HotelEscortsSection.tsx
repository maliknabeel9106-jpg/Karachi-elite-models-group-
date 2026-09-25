import React from 'react';
import { karachiHotelsList, hotelEscortStats, HotelItem } from '../data/hotels';
import { siteConfig } from '../data/content';
import {
  Building2,
  MapPin,
  Sparkles,
  Clock,
  ShieldCheck,
  MessageSquare,
  Calendar,
  ArrowRight,
  Phone,
  CheckCircle2
} from 'lucide-react';

interface HotelEscortsSectionProps {
  onOpenBooking: (hotelName?: string) => void;
}

export const HotelEscortsSection: React.FC<HotelEscortsSectionProps> = ({ onOpenBooking }) => {
  const handleHotelWhatsApp = (e: React.MouseEvent, hotel: HotelItem) => {
    e.stopPropagation();
    const phoneClean = siteConfig.phone.replace(/\D/g, '');
    const text = encodeURIComponent(
      `Hello Karachi Escorts, I would like to book a VIP companion for an outcall at ${hotel.hotelName} (${hotel.location}). Please confirm available models and ETA.`
    );
    window.open(`https://wa.me/${phoneClean}?text=${text}`, '_blank');
  };

  const handleCardClick = (hotel: HotelItem) => {
    onOpenBooking(hotel.hotelName);
  };

  return (
    <section
      id="hotels"
      aria-label="Karachi Hotel Escorts Directory"
      className="relative bg-[var(--bg-canvas)] py-14 sm:py-20 border-t border-[var(--border-subtle)] transition-colors duration-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-rose-600 dark:text-rose-400">
            <Building2 className="h-3.5 w-3.5" />
            <span>24/7 Hotel Outcall Dispatch</span>
          </div>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[var(--text-primary)] tracking-tight [text-wrap:balance]">
            Karachi Hotel Escorts Directory
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed [text-wrap:pretty]">
            Discreet in-room companion services at Karachi’s top five-star and luxury hotels. Verified models arrive in unmarked luxury vehicles within 20 to 35 minutes directly to your suite.
          </p>
        </div>

        {/* 8 Hotel Cards Grid (As featured in the video) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {karachiHotelsList.map((hotel) => (
            <div
              key={hotel.id}
              onClick={() => handleCardClick(hotel)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl sm:rounded-3xl border-2 border-red-600/90 bg-zinc-950 shadow-lg shadow-rose-950/20 transition-all duration-300 hover:-translate-y-1 hover:border-red-500 hover:shadow-2xl hover:shadow-red-600/30"
            >
              {/* Hotel Background Image */}
              <div className="relative aspect-[16/11] sm:aspect-[4/3] w-full overflow-hidden bg-zinc-900">
                <img
                  src={hotel.imageUrl}
                  alt={hotel.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Subtle Vignette & Gradient Overlay for Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/35 group-hover:from-black/90 group-hover:via-black/50 transition-colors" />

                {/* Stars Top Right - Quiet text without pill enclosure */}
                <div className="absolute top-3.5 right-4 text-xs font-serif text-amber-300 drop-shadow tracking-widest">
                  {'★'.repeat(hotel.stars)}
                </div>

                {/* Verified Outcall Cue Top Left */}
                <div className="absolute top-3.5 left-4 inline-flex items-center gap-1 text-[11px] font-medium uppercase tracking-wider text-rose-200 drop-shadow">
                  <Sparkles className="h-2.5 w-2.5 text-rose-400" />
                  <span>Suite Outcall</span>
                </div>

                {/* Center Title - Exactly as framed in the uploaded video */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] px-3 leading-snug group-hover:scale-105 transition-transform duration-300">
                    {hotel.title}
                  </h3>
                </div>

                {/* Bottom Overlay: Location and Quick Actions */}
                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 bg-gradient-to-t from-black/95 to-transparent flex flex-col items-center text-center">
                  <p className="flex items-center justify-center gap-1 text-[11px] text-zinc-300 font-medium">
                    <MapPin className="h-3 w-3 text-rose-400 shrink-0" />
                    <span className="truncate max-w-[200px]">{hotel.location}</span>
                  </p>

                  <div className="mt-2.5 flex items-center justify-center gap-2 w-full pt-2 border-t border-white/10 opacity-90 group-hover:opacity-100 transition-opacity">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCardClick(hotel);
                      }}
                      className="flex-1 inline-flex items-center justify-center gap-1 rounded-lg bg-rose-600 px-2.5 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-rose-500 transition-colors cursor-pointer"
                    >
                      <Calendar className="h-3 w-3" />
                      <span>Book Room</span>
                    </button>

                    <button
                      type="button"
                      onClick={(e) => handleHotelWhatsApp(e, hotel)}
                      className="inline-flex items-center gap-1 rounded-lg bg-emerald-600 px-2.5 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-emerald-500 transition-colors cursor-pointer"
                      title="WhatsApp Inquiry for this hotel"
                    >
                      <MessageSquare className="h-3 w-3" />
                      <span>WhatsApp</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Hotel Service Highlights Row */}
        <div className="mt-10 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-4 sm:p-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="flex flex-col items-center justify-center p-2">
            <Clock className="h-5 w-5 text-rose-500 mb-1.5" />
            <span className="text-xs font-semibold text-[var(--text-primary)]">20–35 Mins Arrival</span>
            <span className="text-[11px] text-[var(--text-muted)]">Express suite delivery</span>
          </div>
          <div className="flex flex-col items-center justify-center p-2">
            <ShieldCheck className="h-5 w-5 text-rose-500 mb-1.5" />
            <span className="text-xs font-semibold text-[var(--text-primary)]">Discreet Reception</span>
            <span className="text-[11px] text-[var(--text-muted)]">Unmarked private entry</span>
          </div>
          <div className="flex flex-col items-center justify-center p-2">
            <CheckCircle2 className="h-5 w-5 text-rose-500 mb-1.5" />
            <span className="text-xs font-semibold text-[var(--text-primary)]">100% Real Models</span>
            <span className="text-[11px] text-[var(--text-muted)]">Verified photo accuracy</span>
          </div>
          <div className="flex flex-col items-center justify-center p-2">
            <Building2 className="h-5 w-5 text-rose-500 mb-1.5" />
            <span className="text-xs font-semibold text-[var(--text-primary)]">All Karachi Hotels</span>
            <span className="text-[11px] text-[var(--text-muted)]">5-star &amp; boutique rooms</span>
          </div>
        </div>

        {/* Stats Section (As seen in the video) */}
        <div className="mt-14 sm:mt-18 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto py-8 px-4 rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-surface)]">
            {hotelEscortStats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="font-serif text-4xl sm:text-5xl font-bold text-rose-600 dark:text-rose-500 tracking-tight tabular-nums">
                  {stat.value}
                </span>
                <span className="mt-2 text-xs sm:text-sm font-medium text-[var(--text-secondary)] max-w-[200px] leading-snug">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Banner: "Stay In Touch With Us" (As seen in the video) */}
        <div className="mt-12 sm:mt-16 relative overflow-hidden rounded-3xl border border-rose-600/40 bg-gradient-to-r from-zinc-950 via-zinc-900 to-rose-950 p-8 sm:p-12 text-center text-white shadow-2xl">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <div className="text-xs font-semibold uppercase tracking-widest text-rose-400">
              Direct Concierge Desk
            </div>
            
            <h3 className="font-serif text-2xl sm:text-4xl font-semibold text-white tracking-tight [text-wrap:balance]">
              Stay in Touch with Our Karachi Concierge
            </h3>

            <p className="text-sm text-zinc-300 leading-relaxed [text-wrap:pretty]">
              Our online booking system makes it effortless to connect with verified Karachi escorts, elegant companions, and VIP hotel outcalls. Book instantly with discreet and quick response through WhatsApp.
            </p>

            <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => onOpenBooking()}
                className="rounded-xl bg-rose-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-600/35 hover:bg-rose-500 transition-all cursor-pointer"
              >
                Reserve Outcall
              </button>

              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/50 bg-emerald-600/90 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-all"
              >
                <MessageSquare className="h-4 w-4" />
                <span>WhatsApp 24/7</span>
              </a>
            </div>
          </div>

          {/* Decorative Background Elements */}
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-rose-600/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-rose-600/10 blur-3xl pointer-events-none" />
        </div>

      </div>
    </section>
  );
};

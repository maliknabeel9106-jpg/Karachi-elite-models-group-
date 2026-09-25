import React from 'react';
import { X, ShieldCheck, Lock, Sparkles, MapPin, MessageSquare } from 'lucide-react';
import { siteConfig } from '../data/content';

interface AgencyInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const AgencyInfoModal: React.FC<AgencyInfoModalProps> = ({ isOpen, onClose, onOpenBooking }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3 sm:p-4 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-2xl rounded-2xl border border-[var(--border-card)] bg-[var(--bg-card)] p-5 sm:p-8 shadow-[var(--shadow-elevated)] max-h-[92vh] overflow-y-auto transition-colors duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 sm:top-5 right-4 sm:right-5 rounded-full p-2 text-[var(--text-secondary)] hover:bg-[var(--bg-surface)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400">
          <Sparkles className="h-4 w-4" />
          <span className="text-xs font-bold uppercase tracking-widest">About Our Agency</span>
        </div>

        <h3 className="mt-2 font-cinzel text-xl sm:text-2xl font-bold uppercase text-[var(--text-primary)]">
          Karachi Elite Models
        </h3>
        
        <p className="mt-1 text-xs sm:text-sm text-[var(--text-secondary)]">
          Pakistan's Most Reputable & Discreet VIP Companion Service
        </p>

        {/* Body Content */}
        <div className="mt-5 sm:mt-6 space-y-4 text-xs sm:text-sm leading-relaxed text-[var(--text-secondary)]">
          <p>
            Established to cater to discerning executives, visiting diplomats, and local gentlemen of taste, <strong className="text-[var(--text-primary)]">Karachi Elite Models</strong> brings an international level of concierge excellence, reliability, and security to Karachi.
          </p>

          <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-4 sm:p-5 space-y-3">
            <h4 className="font-cinzel text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
              Our 4 Inviolable Standards
            </h4>
            
            <div className="flex items-start gap-3">
              <ShieldCheck className="h-4 w-4 text-rose-600 dark:text-rose-400 mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-[var(--text-primary)]">Rigorous In-Person Vetting:</strong> Every model undergoes strict identity and in-person verification. We guarantee that all photographs in our roster are genuine, recent, and unretouched.
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Lock className="h-4 w-4 text-rose-600 dark:text-rose-400 mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-[var(--text-primary)]">Absolute Client Privacy:</strong> We maintain zero customer data logs. Communications are handled exclusively via encrypted WhatsApp, with no credit card billing or public paper trails.
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="h-4 w-4 text-rose-600 dark:text-rose-400 mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-[var(--text-primary)]">Key Service Zones:</strong> Rapid 30-minute dispatch across DHA (Phases 1–8), Clifton, Bath Island, Gulshan-e-Iqbal, and all five-star hotels (Marriott, Pearl Continental, Mövenpick, Ramada, Serena, Avari Towers).
              </div>
            </div>
          </div>

          <p>
            Whether you require an articulate companion for high-society corporate dinners, a private in-call sanctuary in our sanitized luxury apartments, or executive hotel outcalls, we ensure an unforgettable, stress-free encounter.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => {
              onClose();
              onOpenBooking();
            }}
            className="flex-1 min-h-[44px] flex items-center justify-center rounded-xl bg-rose-600 py-3 text-center text-xs font-bold uppercase tracking-wider text-white hover:bg-rose-500 shadow transition-colors cursor-pointer"
          >
            Start Booking Inquiry
          </button>
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 px-5 text-center text-xs font-bold uppercase tracking-wider text-white hover:bg-emerald-500 transition-colors"
          >
            <MessageSquare className="h-4 w-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
};

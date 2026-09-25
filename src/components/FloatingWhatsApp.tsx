import React, { useState, useEffect } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { siteConfig } from '../data/content';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show polite tooltip after 3 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Floating Prompt Bubble */}
      {showTooltip && (
        <div className="relative mb-3 mr-1 max-w-xs rounded-2xl border border-emerald-500/30 bg-[var(--bg-card)] p-3.5 shadow-[var(--shadow-elevated)] backdrop-blur-md transition-all animate-in fade-in slide-in-from-bottom-2">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute -top-2 -left-2 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] cursor-pointer"
            aria-label="Close notification"
          >
            <X className="h-3 w-3" />
          </button>
          
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
            </span>
            <span className="text-xs font-bold text-[var(--text-primary)]">Karachi Concierge Online</span>
          </div>
          
          <p className="mt-1 text-xs text-[var(--text-secondary)] leading-snug">
            Available 24/7 for instant bookings in DHA, Clifton & luxury hotels.
          </p>
        </div>
      )}

      {/* Floating WhatsApp Action Button matching the video */}
      <a
        href={siteConfig.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 dark:bg-emerald-500 text-white shadow-2xl shadow-emerald-900/40 transition-all duration-300 hover:scale-110 hover:bg-emerald-500"
        aria-label="Direct WhatsApp Booking"
      >
        {/* Pulse ring animation */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500 opacity-40 blur group-hover:opacity-75 transition duration-500 animate-pulse" />

        <MessageSquare className="relative h-7 w-7 fill-white text-emerald-600 dark:text-emerald-500" />
      </a>
    </div>
  );
};

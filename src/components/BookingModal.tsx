import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, User, MessageSquare, ShieldCheck, Sparkles } from 'lucide-react';
import { siteConfig } from '../data/content';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedCategory?: string;
  preselectedModel?: string;
  preselectedLocation?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedCategory = 'VIP & Elite Escorts',
  preselectedModel = '',
  preselectedLocation = 'DHA Karachi'
}) => {
  const [category, setCategory] = useState(preselectedCategory);
  const [serviceType, setServiceType] = useState('Hotel Outcall');
  const [location, setLocation] = useState(preselectedLocation);
  const [duration, setDuration] = useState('2 Hours');
  const [clientName, setClientName] = useState('');
  const [specificDate, setSpecificDate] = useState('Today / Immediate');
  const [notes, setNotes] = useState('');

  React.useEffect(() => {
    if (preselectedCategory) setCategory(preselectedCategory);
    if (preselectedLocation) setLocation(preselectedLocation);
  }, [preselectedCategory, preselectedLocation, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello Karachi Elite Models,%0A%0AI would like to make an inquiry/booking:%0A• Category: ${encodeURIComponent(category)}%0A• Preferred Model: ${encodeURIComponent(preselectedModel || 'Open to recommendations')}%0A• Service Format: ${encodeURIComponent(serviceType)}%0A• Location/Hotel: ${encodeURIComponent(location)}%0A• Duration: ${encodeURIComponent(duration)}%0A• Scheduled Date/Time: ${encodeURIComponent(specificDate)}%0A• Client Alias: ${encodeURIComponent(clientName || 'Discreet VIP')}%0A${notes ? `• Special Requests: ${encodeURIComponent(notes)}%0A` : ''}%0APlease confirm availability, profile portfolio, and total rate.`;

    const waLink = `https://wa.me/923402042663?text=${message}`;
    window.open(waLink, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3 sm:p-4 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-lg rounded-2xl border border-[var(--border-card)] bg-[var(--bg-card)] p-5 sm:p-8 shadow-[var(--shadow-elevated)] max-h-[92vh] overflow-y-auto transition-colors duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 sm:top-5 right-4 sm:right-5 rounded-full p-2 text-[var(--text-secondary)] hover:bg-[var(--bg-surface)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Header */}
        <div className="text-left pr-8">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[var(--rose-badge-bg)] px-3 py-1 text-xs font-semibold text-[var(--rose-badge-text)] border border-[var(--border-rose)]">
            <Sparkles className="h-3.5 w-3.5" />
            <span>100% Confidential Reservation</span>
          </div>
          <h3 className="mt-3 font-cinzel text-lg sm:text-2xl font-bold uppercase text-[var(--text-primary)]">
            Book Your Escort in Karachi
          </h3>
          <p className="mt-1 text-xs text-[var(--text-secondary)]">
            Select your preferences below to connect instantly with our dispatch team.
          </p>
        </div>

        {/* Booking Form */}
        <form onSubmit={handleSubmit} className="mt-5 sm:mt-6 space-y-4">
          
          {/* Category */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
              Companion Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mt-1.5 w-full rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-3.5 py-2.5 text-sm text-[var(--text-primary)] focus:border-rose-500 focus:outline-none"
            >
              <option value="VIP & Elite Escorts">VIP & Elite Escorts (PKR 120,000+)</option>
              <option value="Independent Escorts">Independent Escorts (PKR 50,000 - 90,000)</option>
              <option value="International Escorts">International Escorts (PKR 80,000 - 150,000)</option>
              <option value="Premium Call Girls">Call Girls (PKR 35,000 - 60,000)</option>
            </select>
          </div>

          {/* Service Format */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
                Service Format
              </label>
              <select
                value={serviceType}
                onChange={(e) => setServiceType(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-3 py-2 text-sm text-[var(--text-primary)] focus:border-rose-500 focus:outline-none"
              >
                <option value="Hotel Outcall">Hotel Outcall</option>
                <option value="In-Call Private Apt">In-Call Private Apartment</option>
                <option value="Home / Residence Outcall">Home / Residence Outcall</option>
                <option value="Dinner & Social Event">Dinner & Event</option>
                <option value="Overnight Companion">Overnight (10 PM - 10 AM)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
                Duration
              </label>
              <select
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-3 py-2 text-sm text-[var(--text-primary)] focus:border-rose-500 focus:outline-none"
              >
                <option value="1 Hour">1 Hour</option>
                <option value="2 Hours">2 Hours (Recommended)</option>
                <option value="3-4 Hours">3 - 4 Hours</option>
                <option value="Full Night (Overnight)">Full Night (Overnight)</option>
                <option value="Weekend / Travel">Weekend / Travel</option>
              </select>
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
              Location / Preferred Hotel
            </label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g. Marriott Karachi, PC Hotel, DHA Phase 6, Clifton"
              className="mt-1.5 w-full rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-3.5 py-2 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:border-rose-500 focus:outline-none"
              required
            />
          </div>

          {/* Date / Time & Alias */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
                When?
              </label>
              <input
                type="text"
                value={specificDate}
                onChange={(e) => setSpecificDate(e.target.value)}
                placeholder="e.g. Tonight at 9 PM"
                className="mt-1.5 w-full rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-3 py-2 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:border-rose-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
                Your Alias / Name
              </label>
              <input
                type="text"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder="Optional (Discreet)"
                className="mt-1.5 w-full rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-3 py-2 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:border-rose-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Special Requests */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
              Special Preferences or Notes
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={2}
              placeholder="e.g. Attending business dinner, preferred language, dress code"
              className="mt-1.5 w-full rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-3.5 py-2 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:border-rose-500 focus:outline-none"
            />
          </div>

          {/* Security Guarantee Note */}
          <div className="flex items-center gap-2 rounded-xl bg-[var(--bg-surface)] p-3 text-[11px] text-[var(--text-secondary)] border border-[var(--border-subtle)]">
            <ShieldCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
            <span>Encrypted WhatsApp transmission. No credit card required. No records stored.</span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 py-3.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white shadow-lg shadow-emerald-950/20 transition-all cursor-pointer"
          >
            <MessageSquare className="h-4 w-4" />
            <span>Send Booking via WhatsApp</span>
          </button>
        </form>

      </div>
    </div>
  );
};

import React from 'react';
import { siteConfig } from '../data/content';
import { modelsData } from '../data/models';
import { guidesData } from '../data/guides';
import { Sparkles, Phone, Mail, MapPin, ShieldAlert, MessageSquare, ExternalLink, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenModels: () => void;
  onFilterCategory: (cat: string) => void;
  onNavigate?: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenBooking,
  onOpenModels,
  onFilterCategory,
  onNavigate
}) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (onNavigate && path.startsWith('/')) {
      e.preventDefault();
      onNavigate(path);
    }
  };

  return (
    <footer id="contact" className="relative bg-[var(--bg-canvas)] border-t border-[var(--border-subtle)] pt-14 sm:pt-16 pb-12 text-[var(--text-secondary)] transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Brand Section */}
        <div className="text-center border-b border-[var(--border-subtle)] pb-10 sm:pb-12">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-rose-600 text-white shadow-sm">
              <Sparkles className="h-4 w-4" />
            </div>
            <a
              href="/"
              onClick={(e) => handleLinkClick(e, '/')}
              className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)] hover:opacity-90 transition-opacity"
            >
              Elite <span className="font-light italic text-rose-600 dark:text-rose-500">Escorts</span>
            </a>
          </div>

          <p className="text-xs sm:text-sm font-medium text-[var(--text-secondary)] tracking-wide">
            Available 24/7 across Karachi · 100% Photo Verified · Discreet 5-Star Hotel &amp; Residence Outcalls
          </p>

          <p className="mt-2 text-xs text-rose-600/90 dark:text-rose-400/80 font-medium">
            VIP Escorts · Independent Beauties · Russian Models · Exclusive Call Girls across DHA &amp; Clifton
          </p>
        </div>

        {/* 5-Column Extended Footer Grid for Complete SEO Internal Linking */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          
          {/* Col 1: About Agency & Trust */}
          <div className="lg:col-span-1">
            <h4 className="font-serif text-base sm:text-lg font-semibold text-[var(--text-primary)] tracking-normal">
              About Agency
            </h4>
            <p className="mt-4 text-xs leading-relaxed text-[var(--text-secondary)]">
              Karachi Elite Models is the benchmark adult modeling and companion agency in Karachi. Offering verified companions for executive dinners, 5-star hotel outcalls, and discreet personal relaxation across DHA, Clifton, and central Karachi.
            </p>
            <div className="mt-4 space-y-2">
              <a
                href="/compliance"
                onClick={(e) => handleLinkClick(e, '/compliance')}
                className="inline-flex items-center gap-1.5 rounded-lg bg-[var(--bg-surface)] px-2.5 py-1 text-[11px] text-[var(--text-secondary)] border border-[var(--border-subtle)] hover:border-rose-500/50 transition-colors"
              >
                <ShieldAlert className="h-3.5 w-3.5 text-rose-600 dark:text-rose-500" />
                <span>Strictly 18+ Adults Only</span>
              </a>
              <div className="flex items-center gap-1 text-[11px] text-emerald-500 font-medium">
                <ShieldCheck className="h-3.5 w-3.5" />
                <span>100% Real Photo Guarantee</span>
              </div>
            </div>
          </div>

          {/* Col 2: Categories */}
          <div>
            <h4 className="font-serif text-base sm:text-lg font-semibold text-[var(--text-primary)] tracking-normal">
              Categories
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs font-medium">
              <li>
                <a
                  href="/categories/vip-escorts"
                  onClick={(e) => handleLinkClick(e, '/categories/vip-escorts')}
                  className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors block"
                >
                  VIP & Elite Escorts Karachi
                </a>
              </li>
              <li>
                <a
                  href="/categories/independent-escorts"
                  onClick={(e) => handleLinkClick(e, '/categories/independent-escorts')}
                  className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors block"
                >
                  Independent Escorts Karachi
                </a>
              </li>
              <li>
                <a
                  href="/categories/russian-escorts"
                  onClick={(e) => handleLinkClick(e, '/categories/russian-escorts')}
                  className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors block"
                >
                  Russian & International Escorts
                </a>
              </li>
              <li>
                <a
                  href="/categories/call-girls"
                  onClick={(e) => handleLinkClick(e, '/categories/call-girls')}
                  className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors block"
                >
                  Karachi Call Girls (24/7 Fast)
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenModels}
                  className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors text-left cursor-pointer font-bold text-rose-500"
                >
                  Browse Full Photo Directory →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Verified Models */}
          <div>
            <h4 className="font-serif text-base sm:text-lg font-semibold text-[var(--text-primary)] tracking-normal">
              Verified Profiles
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs font-medium">
              {modelsData.map((m) => (
                <li key={m.id}>
                  <a
                    href={`/models/${m.id}`}
                    onClick={(e) => handleLinkClick(e, `/models/${m.id}`)}
                    className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors flex items-center justify-between"
                  >
                    <span>{m.name}</span>
                    <span className="text-[10px] text-[var(--text-muted)]">{m.category.split(' ')[0]}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Guides & Industry Insights */}
          <div>
            <h4 className="font-serif text-base sm:text-lg font-semibold text-[var(--text-primary)] tracking-normal">
              Guides &amp; Insights
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs font-medium">
              {guidesData.map((g) => (
                <li key={g.slug}>
                  <a
                    href={`/guides/${g.slug}`}
                    onClick={(e) => handleLinkClick(e, `/guides/${g.slug}`)}
                    className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors block leading-tight"
                  >
                    {g.category}
                  </a>
                </li>
              ))}
              <li className="pt-1">
                <a
                  href="/#hotels"
                  onClick={(e) => handleLinkClick(e, '/#hotels')}
                  className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors block text-rose-500 font-semibold"
                >
                  Karachi Hotel Escorts Directory
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  onClick={(e) => handleLinkClick(e, '/about')}
                  className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors block"
                >
                  About Our Agency
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  onClick={(e) => handleLinkClick(e, '/contact')}
                  className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors block"
                >
                  Contact & Concierge
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  onClick={(e) => handleLinkClick(e, '/privacy-policy')}
                  className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors block"
                >
                  Privacy & Discretion Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms-of-service"
                  onClick={(e) => handleLinkClick(e, '/terms-of-service')}
                  className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors block"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/compliance"
                  onClick={(e) => handleLinkClick(e, '/compliance')}
                  className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors block"
                >
                  18+ Legal Compliance
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact Info */}
          <div>
            <h4 className="font-serif text-base sm:text-lg font-semibold text-[var(--text-primary)] tracking-normal">
              Contact Concierge
            </h4>
            <p className="mt-2 text-[11px] text-rose-600 dark:text-rose-400 font-semibold">
              Instant Discreet Booking 18+ Only • 100% Privacy
            </p>

            <div className="mt-4 space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-rose-600 dark:text-rose-500 mt-0.5 flex-shrink-0" />
                <span>{siteConfig.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-rose-600 dark:text-rose-500 flex-shrink-0" />
                <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className="hover:text-rose-600 dark:hover:text-white font-medium">
                  {siteConfig.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-rose-600 dark:text-rose-500 flex-shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-rose-600 dark:hover:text-white">
                  {siteConfig.email}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[40px] items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-4 py-2 text-xs font-bold text-white shadow-sm transition-all"
                >
                  <MessageSquare className="h-3.5 w-3.5" />
                  <span>WhatsApp Concierge</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Karachi Locations & Local Relevance SEO Bar (Task 4) */}
        <div className="mt-12 border-t border-[var(--border-subtle)] pt-8">
          <h5 className="font-cinzel text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] text-center sm:text-left">
            Local Coverage Across Karachi Sectors & 5-Star Luxury Hotels
          </h5>
          <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-[var(--text-secondary)]">
            <span className="rounded-md border border-[var(--border-subtle)] bg-[var(--bg-card)] px-2 py-1">DHA Phase 1–8 Karachi</span>
            <span className="rounded-md border border-[var(--border-subtle)] bg-[var(--bg-card)] px-2 py-1">Clifton Blocks 1–9</span>
            <span className="rounded-md border border-[var(--border-subtle)] bg-[var(--bg-card)] px-2 py-1">Bath Island</span>
            <span className="rounded-md border border-[var(--border-subtle)] bg-[var(--bg-card)] px-2 py-1">Main Shahrah-e-Faisal</span>
            <span className="rounded-md border border-[var(--border-subtle)] bg-[var(--bg-card)] px-2 py-1">PECHS & Sindhi Muslim</span>
            <span className="rounded-md border border-[var(--border-subtle)] bg-[var(--bg-card)] px-2 py-1">Gulshan-e-Iqbal</span>
            <span className="rounded-md border border-[var(--border-subtle)] bg-[var(--bg-card)] px-2 py-1">Karachi Marriott Hotel</span>
            <span className="rounded-md border border-[var(--border-subtle)] bg-[var(--bg-card)] px-2 py-1">Pearl Continental (PC) Karachi</span>
            <span className="rounded-md border border-[var(--border-subtle)] bg-[var(--bg-card)] px-2 py-1">Mövenpick Hotel Karachi</span>
            <span className="rounded-md border border-[var(--border-subtle)] bg-[var(--bg-card)] px-2 py-1">Avari Towers Karachi</span>
            <span className="rounded-md border border-[var(--border-subtle)] bg-[var(--bg-card)] px-2 py-1">Ramada Plaza Airport</span>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Domain */}
        <div className="mt-8 border-t border-[var(--border-subtle)] pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[var(--text-muted)] gap-3">
          <p>© 2026 Karachi Elite Models • All Rights Reserved</p>
          <div className="flex items-center gap-4">
            <a href="/privacy-policy" onClick={(e) => handleLinkClick(e, '/privacy-policy')} className="hover:text-rose-600 transition-colors">Privacy</a>
            <span>•</span>
            <a href="/terms-of-service" onClick={(e) => handleLinkClick(e, '/terms-of-service')} className="hover:text-rose-600 transition-colors">Terms</a>
            <span>•</span>
            <a href="/compliance" onClick={(e) => handleLinkClick(e, '/compliance')} className="hover:text-rose-600 transition-colors">18+ Notice</a>
          </div>
          <p className="font-mono text-[11px] text-rose-600/90 dark:text-rose-400/80">
            {siteConfig.domain}
          </p>
        </div>

      </div>
    </footer>
  );
};

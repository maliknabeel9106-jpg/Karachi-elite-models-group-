import React, { useState } from 'react';
import { Menu, X, Phone, MessageSquare, Sparkles, Sun, Moon, Camera } from 'lucide-react';
import { siteConfig } from '../data/content';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenModels: () => void;
  onOpenImageUploader?: () => void;
  onNavigate?: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenModels, onOpenImageUploader, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleLink = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(path);
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--border-subtle)] bg-[var(--bg-header)] backdrop-blur-md transition-colors duration-200">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand Logo - Exact Elite Escorts Style from Video */}
        <a
          href="/"
          onClick={(e) => handleLink(e, '/')}
          className="group flex items-center gap-2.5"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-rose-600 to-rose-900 text-white shadow-lg shadow-rose-600/30">
            <Sparkles className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
          </div>
          <div>
            <div className="font-serif text-2xl font-bold tracking-tight text-[var(--text-primary)] sm:text-[1.7rem] leading-none">
              Elite <span className="font-light italic text-rose-600 dark:text-rose-500">Escorts</span>
            </div>
            <p className="mt-1 text-[10px] tracking-widest text-[var(--text-muted)] uppercase font-medium">Karachi VIP Agency</p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 lg:gap-7 md:flex">
          <a
            href="/"
            onClick={(e) => handleLink(e, '/')}
            className="text-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-rose-600 dark:hover:text-rose-400"
          >
            Home
          </a>
          <button
            onClick={onOpenModels}
            className="text-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-rose-600 dark:hover:text-rose-400 cursor-pointer"
          >
            Our Models
          </button>
          <a
            href="/categories/vip-escorts"
            onClick={(e) => handleLink(e, '/categories/vip-escorts')}
            className="text-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-rose-600 dark:hover:text-rose-400"
          >
            Categories
          </a>
          <a
            href="/#hotels"
            onClick={(e) => handleLink(e, '/#hotels')}
            className="text-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-rose-600 dark:hover:text-rose-400"
          >
            Hotels
          </a>
          <a
            href="/guides/karachi-escorts-modeling-guide"
            onClick={(e) => handleLink(e, '/guides/karachi-escorts-modeling-guide')}
            className="text-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-rose-600 dark:hover:text-rose-400"
          >
            Guides
          </a>
          <a
            href="/about"
            onClick={(e) => handleLink(e, '/about')}
            className="text-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-rose-600 dark:hover:text-rose-400"
          >
            About
          </a>
          <a
            href="/contact"
            onClick={(e) => handleLink(e, '/contact')}
            className="text-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-rose-600 dark:hover:text-rose-400"
          >
            Contact
          </a>
        </nav>

        {/* Header Action Buttons */}
        <div className="hidden items-center gap-3 sm:flex">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-secondary)] shadow-sm transition-all hover:border-rose-500/60 hover:text-rose-600 hover:scale-105 cursor-pointer"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <Sun className="h-4 w-4 text-amber-400" />
            ) : (
              <Moon className="h-4 w-4 text-zinc-700" />
            )}
          </button>

          {/* Upload Photos Quick Trigger */}
          {onOpenImageUploader && (
            <button
              onClick={onOpenImageUploader}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-secondary)] shadow-sm transition-all hover:border-rose-500/60 hover:text-rose-600 hover:scale-105 cursor-pointer"
              title="Upload custom model photos"
              aria-label="Upload custom model photos"
            >
              <Camera className="h-4 w-4" />
            </button>
          )}

          <a
            href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
            className="flex items-center gap-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] px-3.5 py-2 text-xs font-semibold text-[var(--text-primary)] shadow-sm transition-all hover:border-rose-500/50 hover:text-rose-600"
          >
            <Phone className="h-3.5 w-3.5 text-rose-600 dark:text-rose-500" />
            <span className="hidden lg:inline">{siteConfig.phoneDisplay}</span>
            <span className="lg:hidden">Call</span>
          </a>

          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-600 to-rose-700 px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-rose-900/30 transition-all hover:from-rose-500 hover:to-rose-600 hover:shadow-rose-600/30"
          >
            <MessageSquare className="h-4 w-4" />
            <span>WHATSAPP</span>
          </a>
        </div>

        {/* Mobile Action Controls */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Mobile Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-secondary)] shadow-sm transition-all hover:border-rose-500/50 cursor-pointer"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <Sun className="h-4 w-4 text-amber-400" />
            ) : (
              <Moon className="h-4 w-4 text-zinc-700" />
            )}
          </button>

          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-rose-600 text-white shadow-sm"
            aria-label="WhatsApp Us"
          >
            <MessageSquare className="h-4 w-4" />
          </a>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-primary)] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="border-b border-[var(--border-subtle)] bg-[var(--bg-dropdown)] px-5 py-6 md:hidden shadow-xl transition-colors duration-200">
          <div className="flex flex-col space-y-4">
            <a
              href="/"
              onClick={(e) => handleLink(e, '/')}
              className="text-base font-medium text-[var(--text-primary)] hover:text-rose-600"
            >
              Home Directory
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenModels();
              }}
              className="text-left text-base font-medium text-[var(--text-primary)] hover:text-rose-600 cursor-pointer"
            >
              Verified Models
            </button>
            <a
              href="/categories/vip-escorts"
              onClick={(e) => handleLink(e, '/categories/vip-escorts')}
              className="text-base font-medium text-[var(--text-primary)] hover:text-rose-600"
            >
              Service Categories
            </a>
            <a
              href="/#hotels"
              onClick={(e) => handleLink(e, '/#hotels')}
              className="text-base font-medium text-[var(--text-primary)] hover:text-rose-600"
            >
              Hotel Escorts
            </a>
            <a
              href="/guides/karachi-escorts-modeling-guide"
              onClick={(e) => handleLink(e, '/guides/karachi-escorts-modeling-guide')}
              className="text-base font-medium text-[var(--text-primary)] hover:text-rose-600"
            >
              Modeling Guides
            </a>
            <a
              href="/about"
              onClick={(e) => handleLink(e, '/about')}
              className="text-base font-medium text-[var(--text-primary)] hover:text-rose-600"
            >
              About Agency
            </a>
            <a
              href="/contact"
              onClick={(e) => handleLink(e, '/contact')}
              className="text-base font-medium text-[var(--text-primary)] hover:text-rose-600"
            >
              Contact Concierge
            </a>

            <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-col gap-3">
              <div className="flex items-center justify-between py-1">
                <span className="text-sm font-medium text-[var(--text-secondary)]">Website Theme</span>
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] px-3 py-1.5 text-xs font-semibold text-[var(--text-primary)] shadow-sm"
                >
                  {theme === 'dark' ? (
                    <>
                      <Sun className="h-3.5 w-3.5 text-amber-400" />
                      <span>Switch to Light</span>
                    </>
                  ) : (
                    <>
                      <Moon className="h-3.5 w-3.5 text-zinc-700" />
                      <span>Switch to Dark</span>
                    </>
                  )}
                </button>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] py-3 text-center text-sm font-semibold text-[var(--text-primary)] shadow-sm hover:bg-[var(--bg-subtle)] cursor-pointer"
              >
                Instant Online Booking
              </button>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-rose-600 py-3 text-center text-sm font-bold text-white shadow-md hover:bg-rose-500"
              >
                <MessageSquare className="h-4 w-4" />
                <span>WhatsApp: {siteConfig.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

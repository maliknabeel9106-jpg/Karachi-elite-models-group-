import React, { useEffect } from 'react';
import { updatePageSeo } from '../utils/seo';
import { Breadcrumb } from '../components/Breadcrumb';
import { ShieldCheck, Lock, ChevronRight, ArrowLeft } from 'lucide-react';

interface PrivacyPageProps {
  onNavigate: (path: string) => void;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    updatePageSeo({
      title: 'Privacy Policy & Confidentiality Standard | Karachi Elite Models',
      description: 'Read our client privacy policy, data minimization protocol, zero permanent tracking policy, and end-to-end encrypted booking standards.',
      canonicalPath: '/privacy-policy'
    });
  }, []);

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Privacy Policy', path: '/privacy-policy' }
  ];

  return (
    <div className="bg-[var(--bg-canvas)] py-8 sm:py-12 transition-colors duration-200">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Semantic Breadcrumbs for Search Engine Hierarchy & Internal Linking */}
        <Breadcrumb items={breadcrumbItems} onNavigate={onNavigate} className="mb-6" />

        <button
          onClick={() => onNavigate('/')}
          className="mb-6 inline-flex items-center gap-2 text-xs font-semibold text-rose-600 dark:text-rose-400 hover:underline cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Homepage Directory</span>
        </button>

        <header className="border-b border-[var(--border-subtle)] pb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
            <Lock className="h-3.5 w-3.5" />
            <span>Client Confidentiality Guarantee</span>
          </div>
          <h1 className="mt-4 font-cinzel text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)]">
            Privacy Policy & Data Protection
          </h1>
          <p className="mt-2 text-xs text-[var(--text-muted)]">
            Effective Date: September 2026 | Karachi Elite Models
          </p>
        </header>

        <div className="mt-8 space-y-8 text-sm sm:text-base leading-relaxed text-[var(--text-secondary)]">
          <section className="space-y-3">
            <h2 className="font-cinzel text-xl font-bold text-[var(--text-primary)]">1. Commitment to Total Confidentiality</h2>
            <p>
              At Karachi Elite Models, discretion is the cornerstone of our enterprise. We understand that our clientele includes high-profile corporate executives, entrepreneurs, and international guests who value their privacy above all else. We guarantee that your personal information, communications, and booking history remain strictly confidential.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-cinzel text-xl font-bold text-[var(--text-primary)]">2. Data Minimization & Zero Permanent Retention</h2>
            <p>
              We operate under a strict "data minimization" policy. When arranging an appointment, we only request the essential operational parameters required to coordinate the service (e.g., date, duration, preferred companion, venue type).
            </p>
            <p>
              We do not maintain permanent client databases, mailing lists, or marketing profiles. Once a booking is concluded, operational chat records are purged in accordance with our routine privacy protocols.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-cinzel text-xl font-bold text-[var(--text-primary)]">3. Encrypted Communications</h2>
            <p>
              All customer service interactions are handled through end-to-end encrypted messaging channels (WhatsApp) or secure telecommunications. We do not transmit or store client identities over unsecured web forms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-cinzel text-xl font-bold text-[var(--text-primary)]">4. Third-Party Non-Disclosure</h2>
            <p>
              Karachi Elite Models does not sell, lease, or share client information with third-party advertisers, data brokers, or commercial entities under any circumstances.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-cinzel text-xl font-bold text-[var(--text-primary)]">5. Contact Regarding Privacy Inquiries</h2>
            <p>
              If you have any questions regarding our confidentiality practices or wish to confirm the deletion of any temporary inquiry records, you may reach our compliance officer directly at <strong className="text-[var(--text-primary)]">info@karachisescortgroup.site</strong>.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
};

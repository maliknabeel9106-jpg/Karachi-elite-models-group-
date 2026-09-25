import React, { useEffect } from 'react';
import { updatePageSeo } from '../utils/seo';
import { Breadcrumb } from '../components/Breadcrumb';
import { ShieldAlert, CheckCircle2, ChevronRight, ArrowLeft } from 'lucide-react';

interface CompliancePageProps {
  onNavigate: (path: string) => void;
}

export const CompliancePage: React.FC<CompliancePageProps> = ({ onNavigate }) => {
  useEffect(() => {
    updatePageSeo({
      title: '18+ Adult Entertainment Compliance & Legal Notice | Karachi Elite Models',
      description: 'Official 18+ adult entertainment and modeling compliance notice. Age verification, model consent, anti-trafficking policy, and legal disclaimer.',
      canonicalPath: '/compliance'
    });
  }, []);

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: '18+ Compliance', path: '/compliance' }
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
            <ShieldAlert className="h-3.5 w-3.5" />
            <span>Legal Compliance Notice</span>
          </div>
          <h1 className="mt-4 font-cinzel text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)]">
            18+ Adult Content & Legal Notice
          </h1>
          <p className="mt-2 text-xs text-[var(--text-muted)]">
            Compliance Officer | Karachi Elite Models
          </p>
        </header>

        <div className="mt-8 space-y-8 text-sm sm:text-base leading-relaxed text-[var(--text-secondary)]">
          <div className="rounded-2xl border border-rose-500/30 bg-rose-950/20 p-5 text-sm text-rose-200">
            <strong>Adult Content Advisory:</strong> This website contains adult-oriented entertainment, adult modeling profiles, and images intended strictly for mature audiences aged 18 years and older. If you are under the legal age of majority in your jurisdiction, you must leave this website immediately.
          </div>

          <section className="space-y-3">
            <h2 className="font-cinzel text-xl font-bold text-[var(--text-primary)]">1. Mandatory Age Verification</h2>
            <p>
              Every model and companion registered with Karachi Elite Models has submitted verified government-issued identification (CNIC or passport) certifying that she is at least 18 years of age prior to being featured in our directory. We strictly refuse representation to any minor.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-cinzel text-xl font-bold text-[var(--text-primary)]">2. Model Consent & Autonomy</h2>
            <p>
              All models represented on this platform are independent, consenting adults who participate voluntarily. Models retain 100% control over their schedules, clients, rates, and personal boundaries. We vehemently oppose and actively combat human trafficking and coercion in any form.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-cinzel text-xl font-bold text-[var(--text-primary)]">3. Representation of Adult Modeling & Companionship</h2>
            <p>
              Karachi Elite Models clearly represents adult modeling, event hosting, VIP dinner accompaniment, and private social entertainment. We do not make unsupported claims regarding sexual services. Any mutual consensual interaction between adults occurs in private without commercial brokerage of illegal acts.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-cinzel text-xl font-bold text-[var(--text-primary)]">4. Reporting & Takedown Requests</h2>
            <p>
              If you believe any content on this website infringes upon copyright, depicts non-consensual imagery, or violates legal guidelines, please submit an immediate notice to <strong className="text-[var(--text-primary)]">info@karachisescortgroup.site</strong>. We respond to all formal compliance inquiries within 24 business hours.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
};

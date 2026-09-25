import React, { useEffect } from 'react';
import { updatePageSeo } from '../utils/seo';
import { Breadcrumb } from '../components/Breadcrumb';
import { FileText, ShieldAlert, ChevronRight, ArrowLeft } from 'lucide-react';

interface TermsPageProps {
  onNavigate: (path: string) => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    updatePageSeo({
      title: 'Terms of Service & Booking Conditions | Karachi Elite Models',
      description: 'Terms of service, client code of conduct, appointment protocols, cancellation policy, and mutual respect standards for Karachi Elite Models.',
      canonicalPath: '/terms-of-service'
    });
  }, []);

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Terms of Service', path: '/terms-of-service' }
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
            <FileText className="h-3.5 w-3.5" />
            <span>Booking Agreement & Conduct</span>
          </div>
          <h1 className="mt-4 font-cinzel text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)]">
            Terms of Service & Client Agreement
          </h1>
          <p className="mt-2 text-xs text-[var(--text-muted)]">
            Last Revised: September 2026 | Karachi Elite Models
          </p>
        </header>

        <div className="mt-8 space-y-8 text-sm sm:text-base leading-relaxed text-[var(--text-secondary)]">
          <section className="space-y-3">
            <h2 className="font-cinzel text-xl font-bold text-[var(--text-primary)]">1. Age Requirement (Strictly 18+)</h2>
            <p>
              Access to this website, its directory, and all associated companion services is strictly restricted to adults of legal age (18 years or older). By browsing this website or submitting an inquiry, you affirm under penalty of law that you are at least 18 years of age.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-cinzel text-xl font-bold text-[var(--text-primary)]">2. Nature of Services</h2>
            <p>
              Karachi Elite Models is an elite adult entertainment, model directory, and social companionship agency. Our models provide professional social accompaniment for business dinners, formal galas, private tours, and private adult social engagements.
            </p>
            <p>
              Any intimate activities between consenting adults are strictly a matter of private, mutual consent between the respective individuals. The agency does not solicit, promote, or guarantee any illegal activities.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-cinzel text-xl font-bold text-[var(--text-primary)]">3. Client Code of Conduct & Safety</h2>
            <p>
              We maintain a zero-tolerance policy toward any form of disrespectful, coercive, threatening, or unlawful behavior. Clients must maintain pristine personal hygiene and treat every companion with dignity and courtesy.
            </p>
            <p>
              Photography, audio recording, or video recording of any companion without explicit written consent is strictly prohibited and will result in immediate termination of the engagement without refund and permanent blacklisting across Pakistan agency networks.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-cinzel text-xl font-bold text-[var(--text-primary)]">4. Cancellation & Rescheduling Policy</h2>
            <p>
              Clients wishing to cancel or reschedule a confirmed booking must inform our concierge at least 2 hours prior to the scheduled appointment time. Repeated last-minute cancellations without valid justification may require an advance booking deposit for future reservations.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
};

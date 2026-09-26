import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IntroOverview } from './components/IntroOverview';
import { QuickBookingBanner } from './components/QuickBookingBanner';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ServiceCategories } from './components/ServiceCategories';
import { ServiceTypes } from './components/ServiceTypes';
import { HowToBook } from './components/HowToBook';
import { PricingGuide } from './components/PricingGuide';
import { VipBookingCta } from './components/VipBookingCta';
import { WhyNumberOne } from './components/WhyNumberOne';
import { ClientReviews } from './components/ClientReviews';
import { HotelEscortsSection } from './components/HotelEscortsSection';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BookingModal } from './components/BookingModal';
import { ModelsGalleryModal } from './components/ModelsGalleryModal';
import { AgencyInfoModal } from './components/AgencyInfoModal';
import { ImageUploadModal } from './components/ImageUploadModal';
import { ThemeProvider } from './context/ThemeContext';
import { useRouter } from './utils/router';
import { updatePageSeo } from './utils/seo';

// New Specialized SEO Pages
import { ModelProfilePage } from './pages/ModelProfilePage';
import { CategoryPage } from './pages/CategoryPage';
import { GuidePage } from './pages/GuidePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { CompliancePage } from './pages/CompliancePage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  const { currentPath, route, navigate } = useRouter();

  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isModelsOpen, setIsModelsOpen] = useState(false);
  const [isAgencyOpen, setIsAgencyOpen] = useState(false);
  const [isImageUploadOpen, setIsImageUploadOpen] = useState(false);
  const [imageUploadModelId, setImageUploadModelId] = useState<string | undefined>();
  
  const [selectedCategory, setSelectedCategory] = useState('VIP & Elite Escorts');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('DHA Karachi');
  const [modelFilter, setModelFilter] = useState('All');

  // When on home route, ensure homepage meta tags and schemas are set
  useEffect(() => {
    if (route.type === 'home') {
      updatePageSeo({
        title: 'Karachi escorts - #1 VIP Escort Service in Karachi 24/7',
        description: 'Looking for Karachi escorts? Karachi escorts directory offering verified VIP escorts in Karachi available 24/7. Discreet in-call & 5-star hotel outcalls across DHA & Clifton. Call/WhatsApp 0340 2042663.',
        canonicalPath: '/'
      });
    }
  }, [route.type]);

  const handleOpenBooking = (category?: string, model?: string, location?: string) => {
    if (category) setSelectedCategory(category);
    if (model) setSelectedModel(model);
    if (location) setSelectedLocation(location);
    setIsBookingOpen(true);
  };

  const handleOpenCategory = (catName: string) => {
    // Map category name to filter
    if (catName.toLowerCase().includes('vip')) {
      setModelFilter('VIP');
      setSelectedCategory('VIP & Elite Escorts');
    } else if (catName.toLowerCase().includes('independent')) {
      setModelFilter('Independent');
      setSelectedCategory('Independent Escorts');
    } else if (catName.toLowerCase().includes('international')) {
      setModelFilter('International');
      setSelectedCategory('International Escorts');
    } else if (catName.toLowerCase().includes('call girl')) {
      setModelFilter('Call Girls');
      setSelectedCategory('Premium Call Girls');
    } else {
      setModelFilter('All');
    }
    setIsModelsOpen(true);
  };

  const handleSelectModelForBooking = (modelName: string, category: string) => {
    setSelectedModel(modelName);
    setSelectedCategory(category);
    setIsBookingOpen(true);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[var(--bg-canvas)] text-[var(--text-primary)] antialiased selection:bg-rose-600 selection:text-white transition-colors duration-200">
        {/* 1. Header / Navbar */}
        <Navbar
          onOpenBooking={() => handleOpenBooking()}
          onOpenModels={() => {
            setModelFilter('All');
            setIsModelsOpen(true);
          }}
          onOpenImageUploader={() => {
            setImageUploadModelId(undefined);
            setIsImageUploadOpen(true);
          }}
          onNavigate={navigate}
        />

        <main>
          {route.type === 'home' && (
            <>
              {/* 2. Hero Section */}
              <Hero
                onOpenBooking={() => handleOpenBooking()}
                onOpenModels={() => {
                  setModelFilter('All');
                  setIsModelsOpen(true);
                }}
              />

              {/* 3. Value Proposition & Intro Overview */}
              <IntroOverview
                onOpenBooking={() => handleOpenBooking()}
                onOpenModels={() => {
                  setModelFilter('All');
                  setIsModelsOpen(true);
                }}
              />

              {/* 4. Quick Action Banner */}
              <QuickBookingBanner
                onOpenBooking={() => handleOpenBooking()}
              />

              {/* 5. Why Choose Us Section */}
              <WhyChooseUs
                onOpenBooking={() => handleOpenBooking()}
                onOpenAgencyInfo={() => setIsAgencyOpen(true)}
              />

              {/* 6. Service Categories */}
              <ServiceCategories
                onSelectCategory={handleOpenCategory}
                onOpenBooking={() => handleOpenBooking()}
                onNavigate={navigate}
              />

              {/* 7. Types of Services (In-Call, Out-Call, Hotel, Overnight, Event) */}
              <ServiceTypes
                onOpenBooking={() => handleOpenBooking()}
              />

              {/* 8. Simple 3-Step Booking Process */}
              <HowToBook
                onOpenBooking={() => handleOpenBooking()}
                onOpenModels={() => {
                  setModelFilter('All');
                  setIsModelsOpen(true);
                }}
              />

              {/* 9. Transparent Rates & Pricing Guide */}
              <PricingGuide
                onOpenBooking={() => handleOpenBooking()}
              />

              {/* 10. Highlighted VIP Booking CTA */}
              <VipBookingCta
                onOpenBooking={() => handleOpenBooking('VIP & Elite Escorts')}
              />

              {/* 11. Why Karachi Elite Models is #1 */}
              <WhyNumberOne />

              {/* 12. Client Reviews & Testimonials */}
              <ClientReviews />

              {/* 13. Karachi Hotel Escorts Directory (As shown in video) */}
              <HotelEscortsSection
                onOpenBooking={(hotelName) => handleOpenBooking('VIP & Elite Escorts', undefined, hotelName)}
              />

              {/* 14. Frequently Asked Questions (FAQ) */}
              <FaqSection />

              {/* 15. Final Ready to Book CTA Banner */}
              <FinalCta
                onOpenBooking={() => handleOpenBooking()}
              />
            </>
          )}

          {route.type === 'model' && (
            <ModelProfilePage
              modelId={route.id}
              onOpenBooking={handleOpenBooking}
              onNavigate={navigate}
            />
          )}

          {route.type === 'category' && (
            <CategoryPage
              slug={route.slug}
              onOpenBooking={handleOpenBooking}
              onNavigate={navigate}
            />
          )}

          {route.type === 'guide' && (
            <GuidePage
              slug={route.slug}
              onOpenBooking={() => handleOpenBooking()}
              onNavigate={navigate}
            />
          )}

          {route.type === 'about' && (
            <AboutPage
              onOpenBooking={() => handleOpenBooking()}
              onNavigate={navigate}
            />
          )}

          {route.type === 'contact' && (
            <ContactPage
              onOpenBooking={() => handleOpenBooking()}
              onNavigate={navigate}
            />
          )}

          {route.type === 'privacy' && (
            <PrivacyPage
              onNavigate={navigate}
            />
          )}

          {route.type === 'terms' && (
            <TermsPage
              onNavigate={navigate}
            />
          )}

          {route.type === 'compliance' && (
            <CompliancePage
              onNavigate={navigate}
            />
          )}

          {route.type === 'not-found' && (
            <NotFoundPage
              path={route.path}
              onNavigate={navigate}
            />
          )}
        </main>

        {/* 15. Comprehensive Extended Footer */}
        <Footer
          onOpenBooking={() => handleOpenBooking()}
          onOpenModels={() => {
            setModelFilter('All');
            setIsModelsOpen(true);
          }}
          onFilterCategory={(cat) => handleOpenCategory(cat)}
          onNavigate={navigate}
        />

        {/* 16. Persistent Floating WhatsApp Button */}
        <FloatingWhatsApp />

        {/* 17. Booking Modal */}
        <BookingModal
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
          preselectedCategory={selectedCategory}
          preselectedModel={selectedModel}
          preselectedLocation={selectedLocation}
        />

        {/* 18. Models Gallery Modal */}
        <ModelsGalleryModal
          isOpen={isModelsOpen}
          onClose={() => setIsModelsOpen(false)}
          onSelectModelForBooking={handleSelectModelForBooking}
          initialFilter={modelFilter}
          onOpenImageUploader={(modelId) => {
            setImageUploadModelId(modelId);
            setIsImageUploadOpen(true);
          }}
          onNavigate={navigate}
        />

        {/* 19. Agency Information Modal */}
        <AgencyInfoModal
          isOpen={isAgencyOpen}
          onClose={() => setIsAgencyOpen(false)}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 20. Custom Photo & Image Upload Manager Modal */}
        <ImageUploadModal
          isOpen={isImageUploadOpen}
          onClose={() => {
            setIsImageUploadOpen(false);
            setImageUploadModelId(undefined);
          }}
          preselectedModelId={imageUploadModelId}
        />
      </div>
    </ThemeProvider>
  );
}

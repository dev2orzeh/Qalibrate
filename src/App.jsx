import React, { useState, useEffect } from 'react';
import Navbar from './components/common/Navbar';
import Hero from './components/sections/Hero';
import ProblemSection from './components/sections/ProblemSection';
import ServicesSection from './components/sections/ServicesSection';
import MethodSection from './components/sections/MethodSection';
import IndustriesSection from './components/sections/IndustriesSection';
import WhyUsSection from './components/sections/WhyUsSection';
import FaqSection from './components/sections/FaqSection';
import ContactSection from './components/sections/ContactSection';
import AboutEntity from './components/sections/AboutEntity';
import Footer from './components/sections/Footer';
import BookingPage from './components/pages/BookingPage';
import ConsultationModal from './components/common/ConsultationModal';

export default function App() {
  const [currentView, setCurrentView] = useState(() => {
    if (typeof window !== 'undefined') {
      return (window.location.pathname === '/book' || window.location.hash === '#book') 
        ? 'booking' 
        : 'home';
    }
    return 'home';
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Synchronize browser history (Back / Forward button support)
  useEffect(() => {
    const handlePopState = () => {
      const isBooking = window.location.pathname === '/book' || window.location.hash === '#book';
      setCurrentView(isBooking ? 'booking' : 'home');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Navigate to dedicated consultation booking page
  const handleOpenConsultation = () => {
    setCurrentView('booking');
    if (window.location.pathname !== '/book') {
      window.history.pushState(null, '', '/book');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Navigate back to home view (or to a specific anchor like #services)
  const handleNavigateHome = (targetHash = '') => {
    setCurrentView('home');
    window.history.pushState(null, '', '/' + (targetHash || ''));
    if (targetHash) {
      setTimeout(() => {
        const el = document.querySelector(targetHash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 60);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-bone text-dark antialiased selection:bg-accent selection:text-white flex flex-col justify-between">
      {/* Floating Header (Unchanged, seamless across home & booking views) */}
      <Navbar 
        onOpenConsultation={handleOpenConsultation} 
        onNavigateHome={handleNavigateHome}
        currentView={currentView}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {currentView === 'booking' ? (
          <BookingPage onNavigateHome={() => handleNavigateHome()} />
        ) : (
          <>
            <Hero onOpenConsultation={handleOpenConsultation} />
            <ProblemSection onOpenConsultation={handleOpenConsultation} />
            <ServicesSection onOpenConsultation={handleOpenConsultation} />
            <MethodSection onOpenConsultation={handleOpenConsultation} />
            <IndustriesSection onOpenConsultation={handleOpenConsultation} />
            <WhyUsSection onOpenConsultation={handleOpenConsultation} />
            <AboutEntity onOpenConsultation={handleOpenConsultation} />
            <FaqSection onOpenConsultation={handleOpenConsultation} />
            <ContactSection onOpenConsultation={handleOpenConsultation} />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer onOpenConsultation={handleOpenConsultation} />

      {/* Fallback Consultation Modal */}
      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
    </div>
  );
}

import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { About } from './components/About';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ContactAndForm } from './components/ContactAndForm';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { PlumbingServiceItem } from './types';

export default function App() {
  const [selectedServiceForForm, setSelectedServiceForForm] = useState<string>('');

  const handleBookService = (service: PlumbingServiceItem) => {
    setSelectedServiceForForm(service.title);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceFromGallery = (serviceTitle: string) => {
    setSelectedServiceForForm(serviceTitle);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 pb-24 sm:pb-0 selection:bg-amber-400 selection:text-slate-950">
      {/* Navigation Header */}
      <Header onSelectService={handleSelectServiceFromGallery} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onExploreServices={handleExploreServices} />

        {/* 4-Item Proof / Trust Strip */}
        <TrustStrip />

        {/* About Roy Plumbing Services */}
        <About />

        {/* 6 Core Plumbing Services */}
        <Services onBookService={handleBookService} />

        {/* Why Choose Us? (Premium Blue & Yellow Section) */}
        <WhyChooseUs />

        {/* Contact & Service Inquiry Form */}
        <ContactAndForm
          preselectedService={selectedServiceForForm}
          onClearPreselectedService={() => setSelectedServiceForForm('')}
        />
      </main>

      {/* Footer */}
      <Footer onSelectService={handleSelectServiceFromGallery} />

      {/* Floating WhatsApp and Mobile Quick Contact Bar */}
      <FloatingActions />
    </div>
  );
}

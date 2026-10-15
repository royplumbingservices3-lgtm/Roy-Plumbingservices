import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { BUSINESS_INFO } from '../data/plumbingData';

interface HeaderProps {
  onSelectService?: (serviceTitle: string) => void;
}

export function Header({ onSelectService: _ }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
            : 'bg-white border-b border-slate-100 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Bar Contract: 3 zones separated by gap-8 */}
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Brand Wordmark / Logo */}
            <a
              href="#home"
              className="flex items-center gap-2 text-slate-900 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg"
              aria-label="Roy Plumbing Services Home"
            >
              <Logo />
            </a>

            {/* Zone 2: 4-5 single-line clean text navigation links */}
            <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-slate-600">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="whitespace-nowrap shrink-0 hover:text-blue-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded px-1 py-0.5"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Zone 3: 1 Primary Action (Call Now) + Mobile Menu Toggle */}
            <div className="flex items-center gap-3 shrink-0">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold text-white bg-blue-700 hover:bg-blue-800 active:bg-blue-900 rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                aria-label={`Call ${BUSINESS_INFO.displayPhone} now`}
              >
                <Phone className="w-4 h-4 text-amber-300 animate-pulse" />
                <span>Call Now: {BUSINESS_INFO.phone}</span>
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-slate-700 hover:text-blue-700 hover:bg-slate-100 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 md:hidden bg-slate-900/50 backdrop-blur-xs transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed inset-y-0 right-0 w-full max-w-xs bg-white shadow-xl flex flex-col p-6 z-50 animate-in slide-in-from-right duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <Logo />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-slate-500 hover:text-slate-800 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-2 text-xs font-semibold text-slate-400 tracking-wider uppercase">
              Sector 25, Rohini, Delhi · 24/7 Service
            </div>

            <nav className="flex flex-col gap-2 mt-4 text-base font-semibold text-slate-700">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg hover:bg-blue-50 hover:text-blue-700 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="mt-auto pt-6 border-t border-slate-100 space-y-3">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-blue-700 text-white font-bold text-sm shadow hover:bg-blue-800 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-300" />
                Call {BUSINESS_INFO.displayPhone}
              </a>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-emerald-600 text-white font-bold text-sm shadow hover:bg-emerald-700 transition-colors"
              >
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

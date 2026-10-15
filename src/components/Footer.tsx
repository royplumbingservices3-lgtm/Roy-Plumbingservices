import { Logo } from './Logo';
import { BUSINESS_INFO, SERVICES } from '../data/plumbingData';
import { Phone, MapPin, Clock, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onSelectService: (serviceTitle: string) => void;
}

export function Footer({ onSelectService }: FooterProps) {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="light" />
            <p className="text-amber-400 font-bold text-sm tracking-wide">
              “{BUSINESS_INFO.mainTagline}”
            </p>
            <p className="text-xs text-blue-200 font-medium">
              “{BUSINESS_INFO.secondaryTagline}”
            </p>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Providing dependable residential and commercial plumbing services across Sector 25, Rohini, Delhi.
              From leak repairs to water tank installations, our priority is durable craftsmanship and transparent pricing.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-amber-400 transition-colors inline-flex items-center gap-1 text-slate-400 hover:text-slate-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Plumbing Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">Plumbing Services</h4>
            <ul className="space-y-2 text-xs">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <button
                    type="button"
                    onClick={() => {
                      onSelectService(service.title);
                      const el = document.getElementById('contact');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-left text-slate-400 hover:text-amber-400 transition-colors inline-flex items-center gap-1"
                  >
                    <span>{service.title}</span>
                    <ArrowUpRight className="w-3 h-3 text-slate-500" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Coverage Info */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">Contact & Location</h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <a
                    href={BUSINESS_INFO.phoneTel}
                    className="font-bold text-white hover:text-amber-400 transition-colors block"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                  <span className="text-[11px] text-slate-400">Direct Plumber Hotline</span>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  {BUSINESS_INFO.location}
                </span>
              </li>

              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-emerald-400 font-bold">
                  {BUSINESS_INFO.availability} (Every Day)
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Copyright Notice */}
        <div className="pt-10 mt-12 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Roy Plumbing Services. All Rights Reserved.</p>
          <p className="text-[11px] text-slate-600">
            Professional Plumbing in Rohini Sector 25, Delhi
          </p>
        </div>
      </div>
    </footer>
  );
}

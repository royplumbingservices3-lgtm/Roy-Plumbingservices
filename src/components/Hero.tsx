import { Phone, MessageSquare, ArrowDown, Clock, Zap, ShieldCheck, Tag } from 'lucide-react';
import { BUSINESS_INFO } from '../data/plumbingData';

interface HeroProps {
  onExploreServices: () => void;
}

export function Hero({ onExploreServices }: HeroProps) {
  const trustHighlights = [
    { icon: Clock, label: '24/7 Service' },
    { icon: Zap, label: 'Quick Response' },
    { icon: ShieldCheck, label: 'Quality Work' },
    { icon: Tag, label: 'Affordable Rates' },
  ];

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-blue-900 via-blue-950 to-slate-950 text-white py-14 lg:py-20">
      {/* Subtle background plumbing ambient pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="plumbing-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="60" cy="0" r="3" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#plumbing-grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Information & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            {/* Location & Tagline Kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wide uppercase text-blue-200">
              <span className="text-amber-400 font-bold">Rohini Sector 25, Delhi</span>
              <span aria-hidden="true" className="text-blue-400">·</span>
              <span>Residential & Commercial</span>
              <span aria-hidden="true" className="text-blue-400">·</span>
              <span className="text-emerald-400 font-bold">Available 24/7</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] [text-wrap:balance]">
                {BUSINESS_INFO.mainTagline}
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-amber-400">
                {BUSINESS_INFO.secondaryTagline}
              </p>
            </div>

            {/* Promotional Highlight */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-amber-400/10 border border-amber-400/30 text-amber-300 text-sm font-bold w-fit">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>{BUSINESS_INFO.promotionalHighlight}</span>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Reliable plumbing solutions for your home and business. From leak repairs to water tank
              installations, we deliver quality workmanship at affordable prices across Rohini and North West Delhi.
            </p>

            {/* Trust Highlights Checklist */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {trustHighlights.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-2.5 p-2.5 rounded-lg bg-blue-900/40 border border-blue-700/40 text-slate-200"
                  >
                    <IconComponent className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="text-xs font-semibold tracking-tight whitespace-nowrap">{item.label}</span>
                  </div>
                );
              })}
            </div>

            {/* Three CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 active:bg-amber-500 text-slate-950 font-bold text-sm sm:text-base shadow-lg shadow-amber-500/20 hover:shadow-xl transition-all whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                aria-label={`Call ${BUSINESS_INFO.displayPhone}`}
              >
                <Phone className="w-5 h-5 text-slate-950" />
                <span>Call Now: {BUSINESS_INFO.phone}</span>
              </a>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-700/20 hover:shadow-xl transition-all whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              >
                <MessageSquare className="w-5 h-5 text-white" />
                <span>Contact on WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={onExploreServices}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-blue-800/60 hover:bg-blue-800 border border-blue-600/50 text-white font-semibold text-sm transition-all whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              >
                <span>Explore Services</span>
                <ArrowDown className="w-4 h-4 text-blue-300" />
              </button>
            </div>
          </div>

          {/* Right Column: High Quality Plumber Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Glow / Framing */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 to-amber-500 rounded-3xl blur-md opacity-30"></div>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-blue-500/30 bg-slate-900">
                <img
                  src={BUSINESS_INFO.heroImage}
                  alt="Professional plumber from Roy Plumbing Services repairing a pipe installation"
                  referrerPolicy="no-referrer"
                  className="w-full h-80 sm:h-96 lg:h-[460px] object-cover object-center"
                />

                {/* Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/10 text-white flex items-center justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-amber-400 font-bold">Local Expert Plumber</div>
                    <div className="text-sm font-bold text-white">Roy Plumbing Services</div>
                    <div className="text-xs text-slate-300">Rohini, Sector 25, Delhi</div>
                  </div>
                  <a
                    href={BUSINESS_INFO.phoneTel}
                    className="p-2.5 rounded-lg bg-amber-400 text-slate-950 font-bold hover:bg-amber-300 transition-colors"
                    aria-label="Call Roy Plumbing Services"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

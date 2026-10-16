import { Phone, MessageSquare, ArrowDown, Clock, Zap, ShieldCheck, Tag } from 'lucide-react';
import { BUSINESS_INFO } from '../data/plumbingData';
import { WashbasinAnimation } from './WashbasinAnimation';

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
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-blue-900 via-blue-950 to-slate-950 text-white py-10 sm:py-16 lg:py-20">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Column: Information & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-5 sm:space-y-6">
            {/* Brand Logo & Location Kicker */}
            <div className="flex items-center gap-3.5 bg-blue-950/60 backdrop-blur-xs border border-blue-800/60 rounded-2xl p-2.5 sm:p-3 w-fit pr-4 sm:pr-5 shadow-inner">
              <img
                src={BUSINESS_INFO.logoImage}
                alt="Roy Plumbing Services Logo"
                referrerPolicy="no-referrer"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-contain p-0.5 ring-2 ring-amber-400 shadow-md bg-white shrink-0"
              />
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-extrabold tracking-wide uppercase text-white">
                  Roy Plumbing Services
                </span>
                <div className="flex items-center gap-2 text-[11px] sm:text-xs text-blue-200">
                  <span className="text-amber-400 font-semibold">Rohini Sector 25, Delhi</span>
                  <span aria-hidden="true" className="text-blue-400">·</span>
                  <span className="text-emerald-400 font-bold">24/7 Available</span>
                </div>
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-1.5 sm:space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] [text-wrap:balance]">
                {BUSINESS_INFO.mainTagline}
              </h1>
              <p className="text-lg sm:text-2xl font-bold text-amber-400 leading-snug">
                {BUSINESS_INFO.secondaryTagline}
              </p>
            </div>

            {/* Promotional Highlight */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-bold w-fit">
              <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
              <span>{BUSINESS_INFO.promotionalHighlight}</span>
            </div>

            {/* Supporting Text */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Reliable plumbing solutions for your home and business. From leak repairs to water tank
              installations, we deliver quality workmanship at affordable prices across Rohini and North West Delhi.
            </p>

            {/* Trust Highlights Checklist */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-1">
              {trustHighlights.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 p-2 sm:p-2.5 rounded-lg bg-blue-900/40 border border-blue-700/40 text-slate-200"
                  >
                    <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0" />
                    <span className="text-[11px] sm:text-xs font-semibold tracking-tight whitespace-nowrap">{item.label}</span>
                  </div>
                );
              })}
            </div>

            {/* Three CTAs - Stacks neatly on mobile */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-3">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="inline-flex items-center justify-center gap-2.5 px-5 sm:px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 active:bg-amber-500 text-slate-950 font-bold text-sm sm:text-base shadow-lg shadow-amber-500/20 hover:shadow-xl transition-all whitespace-nowrap min-h-[48px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                aria-label={`Call ${BUSINESS_INFO.displayPhone}`}
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-slate-950" />
                <span>Call Now: {BUSINESS_INFO.phone}</span>
              </a>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-5 sm:px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-700/20 hover:shadow-xl transition-all whitespace-nowrap min-h-[48px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              >
                <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                <span>Contact on WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={onExploreServices}
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3 rounded-xl bg-blue-800/60 hover:bg-blue-800 border border-blue-600/50 text-white font-semibold text-xs sm:text-sm transition-all whitespace-nowrap min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              >
                <span>Explore Services</span>
                <ArrowDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-300" />
              </button>
            </div>
          </div>

          {/* Right Column: Looping Washbasin Leak & Plumber Fix Animation Visual */}
          <div className="lg:col-span-5 relative mt-2 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Glow / Framing */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 to-amber-500 rounded-3xl blur-md opacity-30"></div>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-blue-500/30 bg-slate-900">
                {/* Continuous Looping Washbasin Water Leak & Plumber Repair Animated Visual */}
                <WashbasinAnimation />

                {/* Small, compact WhatsApp button in the corner so background image/animation remains fully visible */}
                <div className="absolute bottom-3 right-3 z-20 flex items-center gap-1.5">
                  <a
                    href={BUSINESS_INFO.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-600/95 hover:bg-emerald-500 active:bg-emerald-700 text-white font-bold text-xs shadow-lg backdrop-blur-md border border-emerald-400/30 transition-all hover:scale-105"
                    aria-label="WhatsApp Roy Plumbing Services"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-white" />
                    <span>WhatsApp</span>
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

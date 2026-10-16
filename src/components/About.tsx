import { MapPin, Phone, MessageSquare, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/plumbingData';
import indianPlumberWashbasinImage from '../assets/images/indian_plumber_washbasin_repair_1792142098176.jpg';

export function About() {
  const highlights = [
    'Fast emergency response across Rohini Sector 25 and surrounding sectors',
    'Specialized in residential homes, apartments, and commercial complexes',
    'Clear, honest pricing with no hidden charges or surprises',
    'Comprehensive plumbing solutions from small leak repairs to full water tank installations',
    'Dedicated professional service available 24 hours a day, 7 days a week',
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Visual Card */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-white relative">
                <img
                  src={indianPlumberWashbasinImage}
                  alt="Professional Indian plumber from Roy Plumbing Services repairing washbasin pipes"
                  referrerPolicy="no-referrer"
                  className="w-full h-80 object-cover"
                />
                {/* Official Brand Logo Badge */}
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md rounded-full py-1 px-2.5 shadow-lg border border-slate-200/90 flex items-center gap-2">
                  <img
                    src={BUSINESS_INFO.logoImage}
                    alt="Roy Plumbing Services Brand Logo"
                    referrerPolicy="no-referrer"
                    className="w-8 h-8 rounded-full object-contain p-0.5 ring-1 ring-blue-600/30 bg-white"
                  />
                  <div className="leading-tight pr-1">
                    <span className="text-[11px] font-black text-blue-950 uppercase block">ROY</span>
                    <span className="text-[9px] font-bold text-amber-600 uppercase tracking-wider block">Verified</span>
                  </div>
                </div>
                <div className="p-6 bg-white space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Service Location</div>
                      <div className="text-base font-bold text-slate-900">{BUSINESS_INFO.location}</div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                    <span className="font-medium">Operating Hours:</span>
                    <span className="font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded">24/7 Service</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div>
              <div className="text-xs font-bold tracking-wider uppercase text-blue-700">About Our Company</div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
                About Roy Plumbing Services
              </h2>
              <p className="text-base font-bold text-blue-700 mt-1">
                “{BUSINESS_INFO.secondaryTagline}”
              </p>
            </div>

            <p className="text-slate-600 text-base leading-relaxed">
              Roy Plumbing Services is a trusted plumbing service provider located in Rohini, Delhi, Sector 25.
              Whether you are experiencing a stubborn pipeline leakage, require a new rooftop water tank installation,
              or need swift repair for bathroom fixtures, we handle every job with meticulous craftsmanship and utmost reliability.
            </p>

            <p className="text-slate-600 text-base leading-relaxed">
              We cater to residential apartments, independent homes, retail shops, and commercial offices.
              Guided by our motto, <span className="font-semibold text-slate-900">“{BUSINESS_INFO.mainTagline}”</span>,
              our mission is to resolve your plumbing difficulties smoothly and cost-effectively, ensuring complete peace of mind.
            </p>

            {/* List */}
            <div className="space-y-3 pt-2">
              {highlights.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700 font-medium">{point}</span>
                </div>
              ))}
            </div>

            {/* Direct contact action row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-blue-700 hover:bg-blue-800 active:bg-blue-900 text-white font-bold text-sm shadow hover:shadow-md transition-all min-h-[46px]"
              >
                <Phone className="w-4 h-4 text-amber-300" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-sm shadow hover:shadow-md transition-all min-h-[46px]"
              >
                <MessageSquare className="w-4 h-4 text-white" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

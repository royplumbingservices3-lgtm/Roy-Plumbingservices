import { MapPin, Phone, MessageSquare, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/plumbingData';

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
              <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-white">
                <img
                  src="/src/assets/images/service_commercial_plumbing_1792089015201.jpg"
                  alt="Pipe fittings and plumbing equipment by Roy Plumbing Services"
                  referrerPolicy="no-referrer"
                  className="w-full h-80 object-cover"
                />
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
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm shadow hover:shadow-md transition-all"
              >
                <Phone className="w-4 h-4 text-amber-300" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow hover:shadow-md transition-all"
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

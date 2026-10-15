import { Award, Zap, IndianRupee, Wrench, Clock, CheckCircle } from 'lucide-react';
import { WHY_CHOOSE_US, BUSINESS_INFO } from '../data/plumbingData';

export function WhyChooseUs() {
  const iconMap = [
    Award,       // Quality Workmanship
    Zap,         // Quick Service
    IndianRupee, // Affordable Rates
    Wrench,      // Professional Plumbing Solutions
    Clock,       // 24/7 Service Availability
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-blue-950 via-slate-900 to-blue-950 text-white relative overflow-hidden">
      {/* Decorative subtle ambient ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-amber-400">
            <CheckCircle className="w-4 h-4 text-amber-400" />
            <span>Dedicated Excellence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Why Choose Roy Plumbing Services?
          </h2>
          <p className="text-blue-200 text-base sm:text-lg">
            Reliable plumbing craftsmanship built on honest communication, fast turnaround, and 24/7 availability.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = iconMap[index] || Wrench;
            return (
              <div
                key={item.title}
                className="rounded-2xl p-7 bg-blue-900/30 border border-blue-700/40 hover:border-amber-400/50 hover:bg-blue-900/50 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 mb-5 shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-blue-800/60 flex items-center justify-between text-xs text-blue-300">
                  <span className="font-semibold text-amber-400">Roy Plumbing Services</span>
                  <span>Rohini Sector 25</span>
                </div>
              </div>
            );
          })}

          {/* Card 6: Direct Assistance Banner */}
          <div className="rounded-2xl p-7 bg-gradient-to-br from-blue-700 to-blue-900 border border-blue-500/50 text-white flex flex-col justify-between shadow-lg">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-1">
                Emergency & Scheduled Work
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-3">
                Have a Plumbing Problem Right Now?
              </h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                Contact our technician directly. We assist residential homes and commercial units in Rohini round-the-clock.
              </p>
            </div>

            <div className="pt-6 mt-6 flex flex-col gap-2.5">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="w-full text-center py-3 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 active:bg-amber-500 text-slate-950 font-bold text-sm transition-colors shadow"
              >
                Call: {BUSINESS_INFO.phone}
              </a>
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full text-center py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-colors"
              >
                Quick WhatsApp Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

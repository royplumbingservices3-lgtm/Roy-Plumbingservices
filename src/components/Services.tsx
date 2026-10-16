import { SERVICES } from '../data/plumbingData';
import { ArrowRight, Check } from 'lucide-react';
import { PlumbingServiceItem } from '../types';

interface ServicesProps {
  onBookService: (service: PlumbingServiceItem) => void;
}

export function Services({ onBookService }: ServicesProps) {
  return (
    <section id="services" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="text-xs font-bold tracking-widest uppercase text-blue-700">Comprehensive Solutions</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
            Our Plumbing Services
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            High standard plumbing solutions tailored to residences and commercial spaces in Rohini, Delhi Sector 25.
          </p>
        </div>

        {/* 6 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="group flex flex-col rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-blue-400 transition-all duration-300"
            >
              {/* Image Container with aspect ratio */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt={service.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-blue-900/90 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow-sm">
                  0{index + 1}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1 justify-between space-y-5">
                <div className="space-y-2.5">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Bullet features */}
                  <ul className="space-y-1.5 pt-3 border-t border-slate-100">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Book This Service Button */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => onBookService(service)}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-blue-50 hover:bg-blue-600 active:bg-blue-700 text-blue-700 hover:text-white font-bold text-sm transition-all group/btn shadow-2xs min-h-[44px]"
                  >
                    <span>Book This Service</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

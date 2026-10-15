import { Phone, Clock, MapPin, Wrench } from 'lucide-react';
import { BUSINESS_INFO } from '../data/plumbingData';

export function TrustStrip() {
  const highlights = [
    {
      icon: Clock,
      title: '24/7 Availability',
      desc: 'Emergency plumbing any time of day or night',
    },
    {
      icon: MapPin,
      title: 'Rohini, Sector 25',
      desc: 'Fast local arrival throughout Delhi',
    },
    {
      icon: Wrench,
      title: 'Residential & Commercial',
      desc: 'Apartments, bungalows, shops & offices',
    },
    {
      icon: Phone,
      title: 'Direct Plumber Line',
      desc: BUSINESS_INFO.displayPhone,
      isPhone: true,
    },
  ];

  return (
    <div className="bg-blue-900 border-y border-blue-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center shrink-0 text-amber-400">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-white tracking-tight">{item.title}</h2>
                  {item.isPhone ? (
                    <a
                      href={BUSINESS_INFO.phoneTel}
                      className="text-xs text-amber-300 font-semibold hover:underline block"
                    >
                      {item.desc}
                    </a>
                  ) : (
                    <p className="text-xs text-blue-200">{item.desc}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

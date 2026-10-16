import { useState } from 'react';
import { GALLERY_ITEMS } from '../data/plumbingData';
import { GalleryItem } from '../types';
import { Maximize2, X, Phone, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/plumbingData';

interface GalleryProps {
  onSelectServiceForBooking: (serviceTitle: string) => void;
}

export function Gallery({ onSelectServiceForBooking }: GalleryProps) {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filterOptions = [
    { key: 'all', label: 'All Work' },
    { key: 'leak-repair', label: 'Leak Repair' },
    { key: 'water-tank', label: 'Water Tank Installation' },
    { key: 'pipe-fitting', label: 'Pipe Fitting & Replacement' },
    { key: 'bathroom', label: 'Bathroom Plumbing' },
    { key: 'faucet', label: 'Tap & Faucet Repair' },
    { key: 'cpvc-repair', label: 'CPVC Pipe Repair' },
  ];

  const filteredItems =
    activeFilter === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.categoryKey === activeFilter);

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="text-xs font-bold tracking-widest uppercase text-blue-700">Project Portfolio</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
            Our Work Gallery
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            A glimpse into actual plumbing repairs, installations, and fittings executed with precision.
          </p>
        </div>

        {/* Filter Controls (Horizontally scrollable on mobile, centered on desktop) */}
        <div className="flex items-center sm:justify-center gap-1.5 p-1.5 bg-slate-200/80 rounded-xl max-w-3xl mx-auto mb-8 sm:mb-10 overflow-x-auto no-scrollbar scroll-smooth">
          {filterOptions.map((filter) => {
            const isActive = activeFilter === filter.key;
            return (
              <button
                key={filter.key}
                type="button"
                onClick={() => setActiveFilter(filter.key)}
                className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 min-h-[38px] ${
                  isActive
                    ? 'bg-blue-700 text-white shadow-xs'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-white/60 active:bg-white/80'
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              {/* Image Frame with Aspect Ratio */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Subtle Hover Action Overlay */}
                <div className="absolute inset-0 bg-blue-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/90 text-slate-900 text-xs font-bold shadow">
                    <Maximize2 className="w-3.5 h-3.5 text-blue-700" />
                    View Details
                  </span>
                </div>

                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-blue-900 text-[11px] font-bold px-2.5 py-1 rounded-md shadow-2xs">
                  {item.category}
                </div>
              </div>

              {/* Text info */}
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between text-xs text-blue-700 font-semibold">
                  <span>Rohini Sector 25</span>
                  <span className="flex items-center gap-1 group-hover:underline">
                    Inspect <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedItem && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <div
              className="relative bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="absolute top-3 right-3 z-10 p-2 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-[16/10] w-full bg-slate-900 overflow-hidden">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 uppercase tracking-wider">
                  <span>{selectedItem.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>Roy Plumbing Services</span>
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {selectedItem.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {selectedItem.description}
                </p>

                <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                  <div className="text-xs text-slate-500 font-medium">
                    Sector 25, Rohini, Delhi · 24/7 Service
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        const title = selectedItem.title;
                        setSelectedItem(null);
                        onSelectServiceForBooking(title);
                      }}
                      className="px-4 py-2 rounded-lg bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold transition-colors"
                    >
                      Book Similar Service
                    </button>
                    <a
                      href={BUSINESS_INFO.phoneTel}
                      className="px-4 py-2 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold transition-colors inline-flex items-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

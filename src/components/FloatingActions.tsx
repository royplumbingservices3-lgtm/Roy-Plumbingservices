import { Phone, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/plumbingData';

export function FloatingActions() {
  return (
    <>
      {/* Floating WhatsApp Action (Desktop & Tablet) */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex items-center gap-2">
        <a
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat with Roy Plumbing Services on WhatsApp"
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-xl shadow-emerald-950/20 hover:shadow-2xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2"
        >
          <MessageSquare className="w-5 h-5 text-white" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-bold">
            Chat on WhatsApp
          </span>
        </a>
      </div>

      {/* Compact Mobile Bottom Bar (Complies with 15% mobile sticky cap & safe-area insets) */}
      <div className="fixed bottom-0 inset-x-0 z-40 sm:hidden bg-slate-950/95 backdrop-blur-md border-t border-slate-800/90 px-3 pt-2.5 pb-[calc(0.6rem+env(safe-area-inset-bottom,0px))] flex items-center gap-2.5 shadow-2xl">
        <a
          href={BUSINESS_INFO.phoneTel}
          className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-amber-400 active:bg-amber-500 text-slate-950 font-extrabold text-xs sm:text-sm tracking-tight shadow min-h-[44px]"
          aria-label="Call Roy Plumbing Services now"
        >
          <Phone className="w-4 h-4 text-slate-950 shrink-0" />
          <span>Call: {BUSINESS_INFO.phone}</span>
        </a>

        <a
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-emerald-600 active:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm tracking-tight shadow min-h-[44px]"
          aria-label="WhatsApp Roy Plumbing Services"
        >
          <MessageSquare className="w-4 h-4 text-white shrink-0" />
          <span>WhatsApp</span>
        </a>
      </div>
    </>
  );
}

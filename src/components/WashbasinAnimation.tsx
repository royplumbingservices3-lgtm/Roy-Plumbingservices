import { useState, useEffect } from 'react';
import { AlertTriangle, Wrench, CheckCircle2 } from 'lucide-react';

export function WashbasinAnimation() {
  // Loop through 3 phases: 0 = Leaking, 1 = Plumber Fixing, 2 = Fixed & Sparkling
  const [phase, setPhase] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhase((prev) => (prev + 1) % 3);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[340px] sm:h-96 lg:h-[460px] bg-gradient-to-b from-slate-900 via-blue-950 to-slate-950 flex flex-col items-center justify-center overflow-hidden select-none p-3 pt-8 pb-4">
      {/* Top Floating Status Indicator */}
      <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between z-10 pointer-events-none">
        <div className="transition-all duration-300">
          {phase === 0 && (
            <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-red-500/25 border border-red-500/40 text-red-200 text-[11px] sm:text-xs font-bold shadow-lg backdrop-blur-xs animate-pulse">
              <AlertTriangle className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-red-400 shrink-0" />
              <span>Washbasin Water Leakage!</span>
            </span>
          )}
          {phase === 1 && (
            <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-amber-500/25 border border-amber-500/40 text-amber-200 text-[11px] sm:text-xs font-bold shadow-lg backdrop-blur-xs">
              <Wrench className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400 animate-spin shrink-0" />
              <span>Roy Plumber Fixing Pipe...</span>
            </span>
          )}
          {phase === 2 && (
            <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-emerald-500/25 border border-emerald-500/40 text-emerald-200 text-[11px] sm:text-xs font-bold shadow-lg backdrop-blur-xs">
              <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400 shrink-0" />
              <span>100% Fixed & Leak-Proof!</span>
            </span>
          )}
        </div>

        {/* Animated Loop Badge */}
        <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-white/10 text-slate-300 text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest border border-white/15 shrink-0">
          GIF Loop
        </span>
      </div>

      {/* Main Animated Washbasin SVG Stage */}
      <div className="relative w-full max-w-md h-full flex items-center justify-center pt-8">
        <svg
          viewBox="0 0 360 330"
          className="w-full h-full max-h-[340px]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="wallTiles" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
            <linearGradient id="basinGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#f1f5f9" />
              <stop offset="100%" stopColor="#cbd5e1" />
            </linearGradient>
            <linearGradient id="pipeGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#94a3b8" />
              <stop offset="40%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#64748b" />
            </linearGradient>
            <linearGradient id="chromeGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#e2e8f0" />
              <stop offset="50%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#94a3b8" />
            </linearGradient>
            <linearGradient id="waterFlow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>
            <filter id="waterGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Background Wall Tiles */}
          <rect x="15" y="10" width="330" height="180" rx="8" fill="url(#wallTiles)" stroke="#334155" strokeWidth="1" />
          <line x1="15" y1="65" x2="345" y2="65" stroke="#334155" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="15" y1="120" x2="345" y2="120" stroke="#334155" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="125" y1="10" x2="125" y2="190" stroke="#334155" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="235" y1="10" x2="235" y2="190" stroke="#334155" strokeWidth="1" strokeDasharray="3 3" />

          {/* Mirror / Wall Accessory */}
          <rect x="100" y="16" width="160" height="65" rx="6" fill="#38bdf8" fillOpacity="0.08" stroke="#60a5fa" strokeWidth="1.5" />
          <path d="M 120 25 L 155 70" stroke="#93c5fd" strokeWidth="1.5" strokeOpacity="0.3" />
          <path d="M 135 25 L 170 70" stroke="#93c5fd" strokeWidth="1.5" strokeOpacity="0.3" />

          {/* Soap Dispenser on basin rim */}
          <rect x="70" y="76" width="14" height="20" rx="3" fill="#38bdf8" fillOpacity="0.4" stroke="#7dd3fc" strokeWidth="1" />
          <rect x="74" y="70" width="6" height="6" fill="#cbd5e1" />

          {/* Chrome Water Tap / Faucet */}
          <path d="M 175 92 L 175 58 Q 175 46 186 46 Q 198 46 198 60 L 198 68" fill="none" stroke="url(#chromeGrad)" strokeWidth="8" strokeLinecap="round" />
          <rect x="169" y="88" width="12" height="6" rx="2" fill="#64748b" />
          <circle x="175" y="47" r="4.5" fill="#f59e0b" />

          {/* Water coming out of Tap */}
          {phase === 2 && (
            <g filter="url(#waterGlow)">
              <path
                d="M 198 68 Q 198 86 198 102"
                stroke="#38bdf8"
                strokeWidth="4"
                strokeLinecap="round"
                className="animate-pulse"
              />
              <circle cx="198" cy="103" r="4" fill="#38bdf8" />
            </g>
          )}

          {/* Washbasin Body (Ceramic Bowl) */}
          <path
            d="M 55 94 Q 180 88 305 94 L 290 125 Q 180 156 70 125 Z"
            fill="url(#basinGrad)"
            stroke="#94a3b8"
            strokeWidth="2"
          />
          {/* Washbasin Inner Rim */}
          <ellipse cx="180" cy="102" rx="105" ry="15" fill="#0f172a" fillOpacity="0.25" />
          {/* Drain Ring & Waste Strainer */}
          <ellipse cx="180" cy="107" rx="10" ry="5" fill="#334155" stroke="#94a3b8" strokeWidth="1.5" />

          {/* Under-Sink Plumbing System */}
          {/* Vertical Waste Tailpiece Pipe */}
          <rect x="175" y="122" width="10" height="34" fill="url(#pipeGrad)" />
          {/* Slip Joint Nut / Collar */}
          <rect x="172" y="152" width="16" height="8" rx="2" fill="#e2e8f0" stroke="#475569" strokeWidth="1" />

          {/* P-Trap Curve */}
          <path
            d="M 180 160 L 180 190 Q 180 224 210 224 Q 240 224 240 190 L 240 175 L 315 175"
            fill="none"
            stroke="url(#pipeGrad)"
            strokeWidth="11"
            strokeLinecap="round"
          />

          {/* Escutcheon / Wall Flange */}
          <rect x="310" y="167" width="8" height="16" rx="2" fill="#cbd5e1" stroke="#475569" strokeWidth="1" />

          {/* Hot & Cold Supply Lines */}
          <path d="M 145 130 L 145 190 L 110 190" fill="none" stroke="#f43f5e" strokeWidth="3" strokeLinecap="round" />
          <path d="M 215 130 L 215 190 L 250 190" fill="none" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" />

          {/* ================= PHASE 0: WATER LEAKING FROM WASHBASIN ================= */}
          {phase === 0 && (
            <g>
              {/* Water Spraying & Gushing from Joint */}
              <g filter="url(#waterGlow)">
                {/* Active spurting water arcs */}
                <path d="M 180 156 Q 145 168 135 185" fill="none" stroke="#38bdf8" strokeWidth="3" strokeDasharray="4 3">
                  <animate attributeName="stroke-dashoffset" values="20;0" dur="0.3s" repeatCount="indefinite" />
                </path>
                <path d="M 180 156 Q 215 168 225 185" fill="none" stroke="#38bdf8" strokeWidth="3" strokeDasharray="4 3">
                  <animate attributeName="stroke-dashoffset" values="20;0" dur="0.3s" repeatCount="indefinite" />
                </path>

                {/* Droplets dripping down to floor */}
                <circle cx="178" cy="170" r="3.5" fill="#38bdf8">
                  <animate attributeName="cy" values="160;250" dur="0.6s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="1;0" dur="0.6s" repeatCount="indefinite" />
                </circle>
                <circle cx="184" cy="165" r="3" fill="#60a5fa">
                  <animate attributeName="cy" values="165;252" dur="0.55s" begin="0.15s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="1;0" dur="0.55s" begin="0.15s" repeatCount="indefinite" />
                </circle>
                <circle cx="173" cy="168" r="3.5" fill="#0284c7">
                  <animate attributeName="cy" values="168;250" dur="0.7s" begin="0.3s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="1;0" dur="0.7s" begin="0.3s" repeatCount="indefinite" />
                </circle>
              </g>

              {/* Water Puddle on Floor */}
              <ellipse cx="180" cy="254" rx="42" ry="8" fill="#0284c7" fillOpacity="0.7" filter="url(#waterGlow)">
                <animate attributeName="rx" values="36;46;36" dur="1.2s" repeatCount="indefinite" />
              </ellipse>

              {/* Red Leak Alert Sign */}
              <g transform="translate(105, 205)">
                <rect x="0" y="0" width="150" height="28" rx="6" fill="#ef4444" fillOpacity="0.95" />
                <text x="75" y="18" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle">
                  ⚠ Washbasin Leaking!
                </text>
              </g>
            </g>
          )}

          {/* ================= PHASE 1: PLUMBER FIXING WITH TOOLS ================= */}
          {phase === 1 && (
            <g>
              {/* Plumber's Arm in Navy Blue Roy Plumbing Uniform */}
              <path
                d="M 60 270 Q 115 240 152 188"
                fill="none"
                stroke="#1d4ed8"
                strokeWidth="18"
                strokeLinecap="round"
              />
              {/* Plumber's Glove Hand */}
              <circle cx="160" cy="180" r="10" fill="#0284c7" />

              {/* Wrench Gripping and Tightening the Joint */}
              <g transform="translate(150, 142) rotate(-18 20 20)">
                <rect x="-10" y="38" width="9" height="60" rx="3" fill="#cbd5e1" stroke="#1e293b" strokeWidth="1.5" />
                <circle cx="-5.5" cy="92" r="3" fill="#1e293b" />
                <path
                  d="M -16 38 L 16 38 L 20 16 L 3 10 L 3 24 L -10 24 L -10 10 L -26 16 Z"
                  fill="#94a3b8"
                  stroke="#1e293b"
                  strokeWidth="1.5"
                />
                <rect x="-8" y="26" width="14" height="6" rx="1" fill="#f59e0b" />
              </g>

              {/* Tightening Motion Sparks */}
              <path d="M 192 140 A 16 16 0 0 1 214 158" fill="none" stroke="#facc15" strokeWidth="3" strokeDasharray="4 3">
                <animate attributeName="stroke-dashoffset" values="0;12" dur="0.4s" repeatCount="indefinite" />
              </path>

              {/* Roy Plumber Tool Kit Bag on Floor */}
              <rect x="235" y="230" width="70" height="34" rx="6" fill="#1e3a8a" stroke="#f59e0b" strokeWidth="2" />
              <rect x="235" y="230" width="70" height="8" rx="2" fill="#172554" />
              <text x="270" y="252" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">ROY PLUMBING</text>

              {/* Action Banner */}
              <g transform="translate(95, 252)">
                <rect x="0" y="0" width="170" height="26" rx="6" fill="#f59e0b" />
                <text x="85" y="17" fill="#0f172a" fontSize="11" fontWeight="bold" textAnchor="middle">
                  🔧 Plumber Fixing & Sealing...
                </text>
              </g>
            </g>
          )}

          {/* ================= PHASE 2: 100% FIXED & CLEAN RUNNING ================= */}
          {phase === 2 && (
            <g>
              {/* Sealed Joint with Blue Waterproof Sealing Tape */}
              <rect x="171" y="152" width="18" height="9" rx="2" fill="#38bdf8" stroke="#0284c7" strokeWidth="1" />

              {/* Sparkles around fixed pipe */}
              <g transform="translate(200, 150)" className="animate-spin" style={{ animationDuration: '4s' }}>
                <path d="M 0 -9 L 2.5 -2.5 L 9 0 L 2.5 2.5 L 0 9 L -2.5 2.5 L -9 0 L -2.5 -2.5 Z" fill="#fbbf24" />
              </g>
              <g transform="translate(155, 168)" className="animate-spin" style={{ animationDuration: '3s' }}>
                <path d="M 0 -7 L 2 -2 L 7 0 L 2 2 L 0 7 L -2 2 L -7 0 L -2 -2 Z" fill="#38bdf8" />
              </g>

              {/* Clean Dry Floor Indicator */}
              <line x1="120" y1="255" x2="240" y2="255" stroke="#10b981" strokeWidth="3" strokeLinecap="round" />

              {/* Guaranteed Fixed Badge */}
              <g transform="translate(80, 235)">
                <rect x="0" y="0" width="200" height="30" rx="8" fill="#10b981" />
                <text x="100" y="19" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle">
                  ✓ Leak Fixed by Roy Plumber!
                </text>
              </g>
            </g>
          )}
        </svg>
      </div>
    </div>
  );
}

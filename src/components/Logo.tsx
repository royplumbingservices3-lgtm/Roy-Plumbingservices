interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export function Logo({ variant = 'dark', className = '' }: LogoProps) {
  const isLight = variant === 'light';

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Icon: Modern stylized plumbing pipe with water drop */}
      <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 shadow-md shadow-blue-900/20 text-white shrink-0">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 text-amber-400"
          aria-hidden="true"
        >
          {/* Pipe elbow & Water droplet */}
          <path d="M12 2v6m0 0a4 4 0 0 1-4 4H2" />
          <path d="M22 14h-6a4 4 0 0 1-4-4V2" />
          <path d="M12 12c-2.5 3-4 5.5-4 7.5a4 4 0 0 0 8 0c0-2-1.5-4.5-4-7.5z" fill="currentColor" fillOpacity="0.25" />
        </svg>
      </div>

      <div className="flex flex-col leading-none">
        <div className="flex items-baseline gap-1">
          <span className={`text-xl font-extrabold tracking-tight ${isLight ? 'text-white' : 'text-blue-950'}`}>
            ROY
          </span>
          <span className="text-xs font-bold tracking-wider uppercase text-amber-500">
            Plumbing
          </span>
        </div>
        <span className={`text-[10px] tracking-widest uppercase font-semibold ${isLight ? 'text-blue-200' : 'text-slate-500'}`}>
          Services
        </span>
      </div>
    </div>
  );
}

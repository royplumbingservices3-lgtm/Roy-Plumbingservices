import { useState, useEffect } from 'react';
import royLogoImage from '../assets/images/roy_plumbing_logo.png';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export function Logo({
  variant = 'dark',
  className = '',
  size = 'md',
  showText = true,
}: LogoProps) {
  const isLight = variant === 'light';
  const [logoSrc, setLogoSrc] = useState<string>(royLogoImage);

  useEffect(() => {
    // Check if custom uploaded logo is stored in localStorage
    const saved = localStorage.getItem('roy_plumbing_custom_logo');
    if (saved) {
      setLogoSrc(saved);
    }

    const handleLogoUpdate = () => {
      const updated = localStorage.getItem('roy_plumbing_custom_logo');
      setLogoSrc(updated || royLogoImage);
    };

    window.addEventListener('roy_logo_change', handleLogoUpdate);
    window.addEventListener('storage', handleLogoUpdate);
    return () => {
      window.removeEventListener('roy_logo_change', handleLogoUpdate);
      window.removeEventListener('storage', handleLogoUpdate);
    };
  }, []);

  const sizeConfig = {
    sm: {
      img: 'w-8 h-8',
      title: 'text-base',
      sub: 'text-[9px]',
    },
    md: {
      img: 'w-10 h-10 sm:w-11 sm:h-11',
      title: 'text-lg sm:text-xl',
      sub: 'text-[10px] sm:text-[11px]',
    },
    lg: {
      img: 'w-14 h-14 sm:w-16 sm:h-16',
      title: 'text-2xl sm:text-3xl',
      sub: 'text-xs',
    },
    xl: {
      img: 'w-20 h-20 sm:w-24 sm:h-24',
      title: 'text-3xl sm:text-4xl',
      sub: 'text-sm',
    },
  }[size];

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Official Brand Logo Emblem */}
      <div className="relative shrink-0">
        <img
          src={logoSrc}
          alt="Roy Plumbing Services Official Logo"
          referrerPolicy="no-referrer"
          className={`${sizeConfig.img} rounded-full object-contain shadow-md ring-2 transition-transform hover:scale-105 ${
            isLight
              ? 'ring-amber-400/80 shadow-blue-900/40 bg-white/10'
              : 'ring-blue-600/50 shadow-slate-300 bg-white'
          }`}
        />
        {/* Verification check pip */}
        <span
          className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full shadow-xs"
          title="Verified Plumbing Provider"
        />
      </div>

      {showText && (
        <div className="flex flex-col leading-none">
          <div className="flex items-baseline gap-1">
            <span
              className={`font-black tracking-tight ${sizeConfig.title} ${
                isLight ? 'text-white' : 'text-blue-950'
              }`}
            >
              ROY
            </span>
            <span className="text-xs sm:text-sm font-extrabold tracking-wider uppercase text-amber-500">
              Plumbing
            </span>
          </div>
          <span
            className={`tracking-widest uppercase font-semibold mt-0.5 ${sizeConfig.sub} ${
              isLight ? 'text-blue-200' : 'text-slate-500'
            }`}
          >
            Services
          </span>
        </div>
      )}
    </div>
  );
}


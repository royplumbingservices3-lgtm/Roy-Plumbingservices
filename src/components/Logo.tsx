import { useState } from 'react';
import { useBrandLogo } from '../utils/useBrandLogo';
import { LogoUploadModal } from './LogoUploadModal';
import { Camera } from 'lucide-react';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  enableUploadOnClick?: boolean;
}

export function Logo({
  variant = 'dark',
  className = '',
  size = 'md',
  showText = true,
  enableUploadOnClick = false,
}: LogoProps) {
  const isLight = variant === 'light';
  const { logoUrl } = useBrandLogo();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sizeConfig = {
    sm: {
      img: 'w-9 h-9',
      title: 'text-base',
      sub: 'text-[9px]',
    },
    md: {
      img: 'w-11 h-11 sm:w-12 sm:h-12',
      title: 'text-lg sm:text-xl',
      sub: 'text-[10px] sm:text-[11px]',
    },
    lg: {
      img: 'w-16 h-16 sm:w-18 sm:h-18',
      title: 'text-2xl sm:text-3xl',
      sub: 'text-xs',
    },
    xl: {
      img: 'w-24 h-24 sm:w-28 sm:h-28',
      title: 'text-3xl sm:text-4xl',
      sub: 'text-sm',
    },
  }[size];

  return (
    <>
      <div
        className={`flex items-center gap-2.5 select-none ${className} ${
          enableUploadOnClick ? 'cursor-pointer group' : ''
        }`}
        onClick={enableUploadOnClick ? () => setIsModalOpen(true) : undefined}
        title={enableUploadOnClick ? 'Click to change or upload logo / लोगो बदलें' : 'Roy Plumbing Services'}
      >
        {/* Official Brand Logo Circular Emblem */}
        <div className="relative shrink-0">
          <img
            src={logoUrl}
            alt="Roy Plumbing Services Official Logo"
            referrerPolicy="no-referrer"
            className={`${sizeConfig.img} rounded-full object-contain p-0.5 shadow-md ring-2 transition-transform duration-200 group-hover:scale-105 ${
              isLight
                ? 'ring-amber-400/80 shadow-blue-900/40 bg-white/10'
                : 'ring-blue-600/50 shadow-slate-300 bg-white'
            }`}
          />
          {/* Verification check pip */}
          <span
            className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full shadow-xs"
            title="Verified Plumbing Provider"
          />

          {enableUploadOnClick && (
            <span className="absolute inset-0 rounded-full bg-slate-900/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity text-white">
              <Camera className="w-4 h-4" />
            </span>
          )}
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

      {enableUploadOnClick && (
        <LogoUploadModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}

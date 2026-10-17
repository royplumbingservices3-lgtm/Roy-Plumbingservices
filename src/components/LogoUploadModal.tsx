import React, { useRef, useState } from 'react';
import { useBrandLogo } from '../utils/useBrandLogo';
import { Upload, RotateCcw, X, Check, Image as ImageIcon } from 'lucide-react';

interface LogoUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LogoUploadModal({ isOpen, onClose }: LogoUploadModalProps) {
  const { logoUrl, isCustom, updateLogo, resetLogo } = useBrandLogo();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file (PNG, JPG, SVG, WebP)');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (result) {
        updateLogo(result);
        setSuccessMsg('लोगो सफलतापूर्वक अपडेट हो गया! (Logo updated successfully)');
        setTimeout(() => setSuccessMsg(null), 3000);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleReset = () => {
    resetLogo();
    setSuccessMsg('डिफ़ॉल्ट ऑफिशियल लोगो रीसेट हो गया! (Reset to official logo)');
    setTimeout(() => setSuccessMsg(null), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900 text-white border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
              <ImageIcon className="w-4 h-4 text-slate-950" />
            </div>
            <div>
              <h3 className="font-bold text-base leading-tight">Brand Logo Settings</h3>
              <p className="text-xs text-amber-300">लोगो अपलोड व कस्टमाइज़ करें</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          {/* Current Logo Preview */}
          <div className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-2xl border border-dashed border-slate-300 text-center">
            <div className="relative w-28 h-28 rounded-full bg-white shadow-md ring-4 ring-blue-600/20 p-1 flex items-center justify-center overflow-hidden mb-3">
              <img
                src={logoUrl}
                alt="Active Logo Preview"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <div className="text-sm font-bold text-slate-800">
              {isCustom ? 'कस्टम लोगो एक्टिव है (Custom Logo Active)' : 'ऑफिशियल सर्कुलर लोगो (Official Emblem)'}
            </div>
            <p className="text-xs text-slate-500 mt-1">
              {isCustom
                ? 'यह लोगो हेडर, हीरो, फुटर और पूरे ऐप में दिख रहा है।'
                : 'Roy Plumbing Services का ऑफिशियल सर्कुलर लोगो।'}
            </p>
          </div>

          {/* Success Banner */}
          {successMsg && (
            <div className="flex items-center gap-2 p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs font-semibold">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{successMsg}</span>
            </div>
          )}

          {/* Actions */}
          <div className="space-y-3">
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />

            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="w-full inline-flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-sm shadow transition-all"
            >
              <Upload className="w-4 h-4" />
              <span>नया लोगो अपलोड करें (Upload New Logo PNG/JPG)</span>
            </button>

            {isCustom && (
              <button
                type="button"
                onClick={handleReset}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>ओरिजिनल डिफ़ॉल्ट लोगो पर रीसेट करें (Reset Default)</span>
              </button>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-100 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold transition-colors"
          >
            Done (संपन्न)
          </button>
        </div>
      </div>
    </div>
  );
}

import { useState, useEffect, useCallback } from 'react';
import defaultLogo from '../assets/images/roy_plumbing_logo.png';

export const LOGO_STORAGE_KEY = 'roy_plumbing_custom_logo';
export const LOGO_CHANGE_EVENT = 'roy_logo_change';

export function getActiveLogoUrl(): string {
  try {
    const saved = localStorage.getItem(LOGO_STORAGE_KEY);
    if (saved && saved.trim().length > 0) {
      return saved;
    }
  } catch (e) {
    // ignore localstorage errors
  }
  return defaultLogo;
}

export function useBrandLogo() {
  const [logoUrl, setLogoUrl] = useState<string>(getActiveLogoUrl());
  const [isCustom, setIsCustom] = useState<boolean>(() => {
    try {
      return Boolean(localStorage.getItem(LOGO_STORAGE_KEY));
    } catch {
      return false;
    }
  });

  const syncLogo = useCallback(() => {
    try {
      const saved = localStorage.getItem(LOGO_STORAGE_KEY);
      if (saved && saved.trim().length > 0) {
        setLogoUrl(saved);
        setIsCustom(true);
      } else {
        setLogoUrl(defaultLogo);
        setIsCustom(false);
      }
    } catch {
      setLogoUrl(defaultLogo);
      setIsCustom(false);
    }
  }, []);

  useEffect(() => {
    syncLogo();
    window.addEventListener(LOGO_CHANGE_EVENT, syncLogo);
    window.addEventListener('storage', syncLogo);
    return () => {
      window.removeEventListener(LOGO_CHANGE_EVENT, syncLogo);
      window.removeEventListener('storage', syncLogo);
    };
  }, [syncLogo]);

  const updateLogo = useCallback((dataUrl: string) => {
    try {
      localStorage.setItem(LOGO_STORAGE_KEY, dataUrl);
      window.dispatchEvent(new Event(LOGO_CHANGE_EVENT));
      setLogoUrl(dataUrl);
      setIsCustom(true);
    } catch (err) {
      console.error('Failed to save custom logo to localStorage', err);
    }
  }, []);

  const resetLogo = useCallback(() => {
    try {
      localStorage.removeItem(LOGO_STORAGE_KEY);
      window.dispatchEvent(new Event(LOGO_CHANGE_EVENT));
      setLogoUrl(defaultLogo);
      setIsCustom(false);
    } catch (err) {
      console.error('Failed to reset logo', err);
    }
  }, []);

  return { logoUrl, isCustom, updateLogo, resetLogo };
}

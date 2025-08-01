"use client"

import { useLanguage } from '@/hooks/useLanguage';
import { Button } from './ui/button';
import { Languages } from 'lucide-react';

export function LanguageToggle() {
  const { language, toggleLanguage, isRTL } = useLanguage();

  return (
    <div 
      className="fixed pointer-events-auto"
      style={{ 
        bottom: '24px', 
        right: '24px',
        position: 'fixed',
        zIndex: 99999
      }}
    >
      <Button
        onClick={toggleLanguage}
        className="bg-[#F95700] hover:bg-[#E04E00] text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-full p-3 h-12 w-12 flex items-center justify-center group"
        title={language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
      >
        <div className="flex items-center justify-center">
          <Languages className="h-5 w-5 mr-1" />
          <span className="text-sm font-bold">
            {language === 'en' ? 'AR' : 'EN'}
          </span>
        </div>
      </Button>
    </div>
  );
}

export default LanguageToggle;
"use client"

import { useLanguage } from '@/hooks/useLanguage';
import { Button } from './ui/button';

export function LanguageToggle() {
  const { language, toggleLanguage, isRTL } = useLanguage();

  return (
    <div 
      className="fixed pointer-events-auto flex gap-2"
      style={{ 
        bottom: '24px', 
        right: '24px',
        position: 'fixed',
        zIndex: 99999
      }}
    >
      <Button
        onClick={() => language !== 'ar' && toggleLanguage()}
        className={`${
          language === 'ar' 
            ? 'bg-[#F95700] text-white' 
            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
        } shadow-lg transition-all duration-300 rounded-full px-4 py-2 h-10 flex items-center justify-center border border-gray-600`}
        title="Switch to Arabic"
      >
        <span className="text-sm font-medium">
          عربي
        </span>
      </Button>
      <Button
        onClick={() => language !== 'en' && toggleLanguage()}
        className={`${
          language === 'en' 
            ? 'bg-[#F95700] text-white' 
            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
        } shadow-lg transition-all duration-300 rounded-full px-4 py-2 h-10 flex items-center justify-center border border-gray-600`}
        title="Switch to English"
      >
        <span className="text-sm font-medium">
          EN
        </span>
      </Button>
    </div>
  );
}

export default LanguageToggle;
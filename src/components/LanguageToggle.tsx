import React from 'react';
import { Languages } from 'lucide-react';

interface LanguageToggleProps {
  language: 'en' | 'es';
  setLanguage: (lang: 'en' | 'es') => void;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ language, setLanguage }) => {
  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
      className="fixed top-4 right-4 flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
    >
      <Languages className="w-5 h-5" />
      <span>{language === 'en' ? 'ES' : 'EN'}</span>
    </button>
  );
};

export default LanguageToggle;
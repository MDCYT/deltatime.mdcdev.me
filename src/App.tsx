import React, { useState } from 'react';
import DeltaTimeDemo from './components/DeltaTimeDemo';
import CodeExamples from './components/CodeExamples';
import LanguageToggle from './components/LanguageToggle';
import { Rocket } from 'lucide-react';
import { translations } from './translations';
import { Language } from './types';
import VideoExplaining from './components/VideoExplaining';
function App() {
  const [language, setLanguage] = useState<Language>('en');
  const t = translations[language];

  return (
    <div className="min-h-screen bg-gray-100 pb-16">
      <LanguageToggle language={language} setLanguage={setLanguage} />

      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <Rocket className="w-8 h-8" />
            <h1 className="text-4xl font-bold">{t.title}</h1>
          </div>
          <p className="text-xl opacity-90">{t.subtitle}</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <p className="text-lg mb-8">{t.introduction}</p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">{t.whatIs}</h2>
          <p className="mb-4">{t.whatIsContent}</p>
          <DeltaTimeDemo language={language} />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">{t.whyImportant}</h2>
          <p>{t.whyImportantContent}</p>
        </section>

        <CodeExamples language={language} />
        <VideoExplaining language={language} />
      </main>
    </div>
  );
}

export default App;

import React from 'react';
import { translations } from '../translations';
import { Language } from '../types';
import '@justinribeiro/lite-youtube';

interface VideoExplainingProps {
  language: Language;
}

const VideoExplaining: React.FC<VideoExplainingProps> = ({ language }) => {
  const t = translations[language].videoExplaining;

  return (
    <div className="flex flex-col items-center mt-8 text-center">
      <h2 className="font-bold text-4xl mb-8">{t.title}</h2>
      <p className="mb-8">{t.description}</p>

      <lite-youtube videoid={t.videoID}></lite-youtube>
    </div>
  );
};

export default VideoExplaining;

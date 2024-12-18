import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, RefreshCw } from 'lucide-react';
import { translations } from '../translations';
import { MovingObject } from '../types';

interface DeltaTimeDemoProps {
  language: 'en' | 'es';
}

const DeltaTimeDemo: React.FC<DeltaTimeDemoProps> = ({ language }) => {
  const t = translations[language].demo;

  const [fps, setFps] = useState(60);
  const [isRunning, setIsRunning] = useState(false);
  const [currentFps, setCurrentFps] = useState(0);

  const directUpdateRef = useRef<MovingObject>({ x: 50, speed: 100 });
  const deltaUpdateRef = useRef<MovingObject>({ x: 50, speed: 100 });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const lastTimeRef = useRef<number>(0);
  const framesRef = useRef<number>(0);
  const lastFpsUpdateRef = useRef<number>(0);

  const resetAnimation = () => {
    directUpdateRef.current = { x: 50, speed: 100 };
    deltaUpdateRef.current = { x: 50, speed: 100 };
    setIsRunning(false);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const render = (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const deltaTime = (timestamp - lastTimeRef.current) / 1000;
      lastTimeRef.current = timestamp;

      // FPS calculation
      framesRef.current++;
      if (timestamp - lastFpsUpdateRef.current >= 1000) {
        setCurrentFps(Math.round(framesRef.current));
        framesRef.current = 0;
        lastFpsUpdateRef.current = timestamp;
      }

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (isRunning) {
        // Direct update (frame-dependent)
        directUpdateRef.current.x +=
          directUpdateRef.current.speed * (fps / 60) * 0.016;
        if (directUpdateRef.current.x > canvas.width - 30) {
          directUpdateRef.current.x = canvas.width - 30;
          directUpdateRef.current.speed *= -1;
        } else if (directUpdateRef.current.x < 30) {
          directUpdateRef.current.x = 30;
          directUpdateRef.current.speed *= -1;
        }

        // Delta time update (frame-independent)
        deltaUpdateRef.current.x += deltaUpdateRef.current.speed * deltaTime;
        if (deltaUpdateRef.current.x > canvas.width - 30) {
          deltaUpdateRef.current.x = canvas.width - 30;
          deltaUpdateRef.current.speed *= -1;
        } else if (deltaUpdateRef.current.x < 30) {
          deltaUpdateRef.current.x = 30;
          deltaUpdateRef.current.speed *= -1;
        }
      }

      // Draw objects
      ctx.fillStyle = '#ef4444';
      ctx.beginPath();
      ctx.arc(directUpdateRef.current.x, 50, 15, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#22c55e';
      ctx.beginPath();
      ctx.arc(deltaUpdateRef.current.x, 100, 15, 0, Math.PI * 2);
      ctx.fill();

      // Labels
      ctx.fillStyle = '#000';
      ctx.font = '14px Arial';
      ctx.fillText(t.directUpdate.title, 10, 55);
      ctx.fillText(t.deltaUpdate.title, 10, 105);

      animationFrameId = requestAnimationFrame(render);
    };

    if (isRunning) {
      animationFrameId = requestAnimationFrame(render);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isRunning, fps]);

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{t.title}</h2>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium">FPS: {currentFps}</span>
            <button
              onClick={() => setIsRunning(!isRunning)}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              {isRunning ? (
                <Pause className="w-5 h-5" />
              ) : (
                <Play className="w-5 h-5" />
              )}
            </button>
            <button
              onClick={resetAnimation}
              className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
            >
              <RefreshCw className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            {t.targetFps} {fps}
          </label>
          <input
            type="range"
            min="1"
            max="120"
            value={fps}
            onChange={(e) => setFps(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <canvas
          ref={canvasRef}
          width={800}
          height={200}
          className="border border-gray-200 rounded-lg w-full"
        />

        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="p-4 bg-red-100 rounded-lg">
            <h3 className="font-bold mb-2">{t.directUpdate.title}</h3>
            <p className="text-sm">{t.directUpdate.description}</p>
          </div>
          <div className="p-4 bg-green-100 rounded-lg">
            <h3 className="font-bold mb-2">{t.deltaUpdate.title}</h3>
            <p className="text-sm">{t.deltaUpdate.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeltaTimeDemo;

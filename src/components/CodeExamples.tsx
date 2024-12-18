import React from 'react';
import { translations } from '../translations';
import { Language } from '../types';
import { CopyBlock, dracula } from 'react-code-blocks';

interface CodeExamplesProps {
  language: Language;
}

const CodeExamples: React.FC<CodeExamplesProps> = ({ language }) => {
  const t = translations[language].codeExamples;

  const examples = {
    en: {
      js: `// Without Delta Time (Bad)
function update() {
  player.x += speed;
}

// With Delta Time (Good)
function update(deltaTime) {
  player.x += speed * deltaTime;
}

let lastTime = performance.now();

function gameLoop(currentTime) {
  const deltaTime = (currentTime - lastTime) / 1000;
  lastTime = currentTime;
  
  update(deltaTime);
  requestAnimationFrame(gameLoop);
}`,
      unity: `// Time.deltaTime is provided by Unity
void Update() {
    // Frame-independent movement
    transform.position += velocity * Time.deltaTime;
}`,
    },
    es: {
      js: `// Sin Delta Time (Malo)
function actualizar() {
  jugador.x += velocidad;
}

// Con Delta Time (Bueno)
function actualizar(deltaTime) {
  jugador.x += velocidad * deltaTime;
}

let tiempoAnterior = performance.now();

function bucleJuego(tiempoActual) {
  const deltaTime = (tiempoActual - tiempoAnterior) / 1000;
  tiempoAnterior = tiempoActual;
  
  actualizar(deltaTime);
  requestAnimationFrame(bucleJuego);
}`,
      unity: `// Time.deltaTime es proporcionado por Unity
void Update() {
    // Movimiento independiente del frame
    transform.position += velocidad * Time.deltaTime;
}`,
    },
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 mt-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6">{t.title}</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">
              JavaScript/TypeScript
            </h3>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <CopyBlock
                text={examples[language].js}
                language={'javascript'}
                theme={dracula}
                showLineNumbers
                codeBlock
              />
            </pre>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Unity (C#)</h3>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <CopyBlock
                text={examples[language].unity}
                language={'cpp'}
                theme={dracula}
                showLineNumbers
                codeBlock
              />
            </pre>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">{t.mathTitle}</h3>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="font-mono">
                position = position + (velocity * deltaTime)
              </p>
              <p className="text-sm mt-2">{t.mathDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeExamples;

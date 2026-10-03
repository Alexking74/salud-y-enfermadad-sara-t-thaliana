import React, { useState } from 'react';
import { Sparkles, HelpCircle, ThumbsUp, ArrowRight, CheckCircle2 } from 'lucide-react';

export const Slide12Conclusion: React.FC<{ isProjectorMode: boolean }> = ({ isProjectorMode }) => {
  const [selectedDecisions, setSelectedDecisions] = useState<{ [key: string]: boolean }>({});

  const classroomAnswers = [
    { id: 'c1', label: '💧 Beber agua pura y cero refrescos azucarados' },
    { id: 'c2', label: '😴 Dormir 8 a 10 horas completas hoy sin celular' },
    { id: 'c3', label: '🏃 Realizar 45 minutos de deporte o caminata activa' },
    { id: 'c4', label: '🚭 Decir «NO» con seguridad ante la presión de sustancias' },
    { id: 'c5', label: '🥗 Comer frutas y verduras en lugar de frituras' },
    { id: 'c6', label: '🧠 Conversar con sinceridad sobre cómo me siento hoy' }
  ];

  const toggleDecision = (id: string) => {
    setSelectedDecisions(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const selectedCount = Object.values(selectedDecisions).filter(Boolean).length;

  return (
    <div id="slide-12-conclusion" className="h-full w-full flex flex-col justify-between p-4 sm:p-7 md:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-2.5">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-semibold text-teal-400 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Síntesis Final</span>
          </div>
          <h2 className={`font-black text-white tracking-tight ${isProjectorMode ? 'text-2xl sm:text-3xl md:text-4xl' : 'text-xl sm:text-2xl md:text-3xl'}`}>
            Conclusión y Cierre <span className="text-teal-400 font-medium text-lg sm:text-xl md:text-2xl">| Nuestro Compromiso Biológico</span>
          </h2>
        </div>

        <div className="text-xs text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
          Compromisos activos: <strong className="text-teal-400">{selectedCount}</strong> seleccionados
        </div>
      </div>

      {/* 3 Formula Pillars: SALUD -> PREVENCIÓN -> CUIDADO */}
      <div className="my-auto py-2 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-center">
          <div className="bg-slate-900/90 border border-teal-500/40 p-3.5 rounded-xl text-center shadow-lg">
            <span className="text-[10px] font-mono uppercase text-teal-400 font-bold block">01. EQUILIBRIO</span>
            <h3 className="text-lg font-black text-white">SALUD</h3>
            <p className="text-xs text-slate-300 font-medium mt-0.5">
              Bienestar bio-psico-social total, no solo ausencia de dolor.
            </p>
          </div>

          <div className="bg-slate-900/90 border border-cyan-500/40 p-3.5 rounded-xl text-center shadow-lg">
            <span className="text-[10px] font-mono uppercase text-cyan-400 font-bold block">02. ANTICIPACIÓN</span>
            <h3 className="text-lg font-black text-white">PREVENCIÓN</h3>
            <p className="text-xs text-slate-300 font-medium mt-0.5">
              Decisiones conscientes que evitan la destrucción celular antes de enfermar.
            </p>
          </div>

          <div className="bg-slate-900/90 border border-emerald-500/40 p-3.5 rounded-xl text-center shadow-lg">
            <span className="text-[10px] font-mono uppercase text-emerald-400 font-bold block">03. RESPONSABILIDAD</span>
            <h3 className="text-lg font-black text-white">CUIDADO</h3>
            <p className="text-xs text-slate-300 font-medium mt-0.5">
              Proteger tu único hogar biológico: tu mente y tu cuerpo.
            </p>
          </div>
        </div>

        {/* Interactive Classroom Commitment Card */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-900/95 to-teal-950/40 border border-teal-500/50 rounded-2xl p-4 sm:p-5 shadow-2xl">
          <div className="flex items-center gap-2 text-teal-400 text-xs font-bold uppercase tracking-wider mb-1">
            <HelpCircle className="w-4 h-4 animate-bounce" />
            <span>Pregunta para reflexionar con la clase:</span>
          </div>

          <h3 className="text-base sm:text-xl font-black text-white leading-snug mb-3">
            «¿Qué decisión saludable podemos tomar hoy para proteger nuestro organismo?»
          </h3>

          {/* Interactive Chips */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {classroomAnswers.map((ans) => {
              const isSelected = selectedDecisions[ans.id];
              return (
                <button
                  key={ans.id}
                  onClick={() => toggleDecision(ans.id)}
                  className={`p-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer border text-left flex items-center justify-between ${
                    isSelected
                      ? 'bg-teal-500 text-slate-950 font-bold border-teal-400 shadow-md scale-[1.02]'
                      : 'bg-slate-950/80 text-slate-300 border-slate-700 hover:border-teal-500/50 hover:bg-slate-800'
                  }`}
                >
                  <span className="line-clamp-1">{ans.label}</span>
                  <CheckCircle2 className={`w-4 h-4 shrink-0 ml-1.5 ${isSelected ? 'text-slate-950' : 'text-slate-600'}`} />
                </button>
              );
            })}
          </div>

          {selectedCount > 0 && (
            <div className="mt-3 p-2.5 bg-teal-950/60 border border-teal-500/40 rounded-xl flex items-center gap-2 text-xs text-teal-200">
              <ThumbsUp className="w-4 h-4 text-teal-300 shrink-0" />
              <span><strong>¡Gran compromiso de la clase!</strong> Cada acción cotidiana protege la sinapsis y los órganos vitales.</span>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-800 pt-2 flex items-center justify-between text-xs text-slate-400">
        <span>«La salud no se valora hasta que llega la enfermedad. ¡Cuidémosla hoy!»</span>
        <span className="text-teal-400 font-semibold">12 / 12</span>
      </div>
    </div>
  );
};

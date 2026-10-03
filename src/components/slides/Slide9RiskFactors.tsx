import React, { useState } from 'react';
import { Sparkles, UtensilsCrossed, Footprints, Moon, Zap, Cigarette, Wine, AlertTriangle, Wind, Dna, ShieldCheck, RefreshCw } from 'lucide-react';

export const Slide9RiskFactors: React.FC<{ isProjectorMode: boolean }> = ({ isProjectorMode }) => {
  const [activeFactors, setActiveFactors] = useState<{ [key: string]: boolean }>({
    f1: true,
    f2: true,
    f3: false,
    f4: false,
    f5: false,
    f6: false,
    f7: false,
    f8: false
  });

  const factors = [
    { id: 'f1', name: 'Mala Nutrición', icon: UtensilsCrossed, weight: 15, tag: 'Ultraprocesados' },
    { id: 'f2', name: 'Sedentarismo', icon: Footprints, weight: 15, tag: '<60 min actividad' },
    { id: 'f3', name: 'Falta de Sueño', icon: Moon, weight: 12, tag: '<8h descanso' },
    { id: 'f4', name: 'Estrés Crónico', icon: Zap, weight: 12, tag: 'Cortisol alto' },
    { id: 'f5', name: 'Tabaco / Vapeo', icon: Cigarette, weight: 20, tag: 'Toxinas directas' },
    { id: 'f6', name: 'Alcohol Excesivo', icon: Wine, weight: 18, tag: 'Toxicidad celular' },
    { id: 'f7', name: 'Automedicación', icon: AlertTriangle, weight: 10, tag: 'Sin dosis médica' },
    { id: 'f8', name: 'Contaminación', icon: Wind, weight: 8, tag: 'Exposición tóxica' }
  ];

  const toggleFactor = (id: string) => {
    setActiveFactors(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const activeCount = Object.values(activeFactors).filter(Boolean).length;
  const totalScore = factors.reduce((acc, f) => acc + (activeFactors[f.id] ? f.weight : 0), 0);

  const getRiskStatus = () => {
    if (totalScore <= 30) return { label: 'Riesgo Bajo / Saludable', color: 'text-emerald-400', bar: 'bg-emerald-500', alert: 'Organismo en homeostasis activa.' };
    if (totalScore <= 60) return { label: 'Riesgo Moderado / Alerta', color: 'text-amber-400', bar: 'bg-amber-500', alert: 'Desgaste celular progresivo en órganos diana.' };
    return { label: 'Riesgo Crítico / Patológico', color: 'text-rose-400', bar: 'bg-rose-500', alert: 'Sinergia dañina: Alta probabilidad de patologías crónicas.' };
  };

  const status = getRiskStatus();

  return (
    <div id="slide-9-risk" className="h-full w-full flex flex-col justify-between p-4 sm:p-7 md:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-2.5">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-semibold text-teal-400 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Idea Principal 08</span>
          </div>
          <h2 className={`font-black text-white tracking-tight ${isProjectorMode ? 'text-2xl sm:text-3xl md:text-4xl' : 'text-xl sm:text-2xl md:text-3xl'}`}>
            Factores de Riesgo <span className="text-amber-400 font-medium text-lg sm:text-xl md:text-2xl">| Sinergia y Multiplicación</span>
          </h2>
        </div>

        <div className="text-xs text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
          Toca los hábitos para simular el riesgo del cuerpo ➔
        </div>
      </div>

      {/* Main Interactive Risk Dashboard */}
      <div className="my-auto py-2 space-y-4">
        {/* Risk Meter Card */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3 mb-3">
            <div>
              <div className="flex items-center gap-2">
                <span className={`text-xs font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-950 border border-slate-700 ${status.color}`}>
                  {status.label}
                </span>
                <span className="text-xs text-slate-400 font-mono">({activeCount} de 8 factores presentes)</span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white mt-1">
                {status.alert}
              </h3>
            </div>

            {/* Visual Risk Bar */}
            <div className="w-full sm:w-56 bg-slate-950 p-2.5 rounded-xl border border-slate-800">
              <div className="flex justify-between text-xs font-mono font-bold mb-1">
                <span className="text-slate-400">Probabilidad:</span>
                <span className={status.color}>{Math.min(totalScore, 100)}%</span>
              </div>
              <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                <div
                  className={`h-full ${status.bar} transition-all duration-500 rounded-full`}
                  style={{ width: `${Math.min(totalScore, 100)}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* 8 Interactive Toggles */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {factors.map((f) => {
              const Icon = f.icon;
              const isChecked = activeFactors[f.id];
              return (
                <button
                  key={f.id}
                  onClick={() => toggleFactor(f.id)}
                  className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                    isChecked
                      ? 'bg-rose-950/40 border-rose-500/60 text-white shadow-md'
                      : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Icon className={`w-4 h-4 shrink-0 ${isChecked ? 'text-rose-400' : 'text-slate-500'}`} />
                    <div>
                      <span className="text-xs font-bold block leading-tight">{f.name}</span>
                      <span className="text-[10px] opacity-70 block">{f.tag}</span>
                    </div>
                  </div>
                  <span className={`text-xs font-black ml-1 ${isChecked ? 'text-rose-400' : 'text-slate-600'}`}>
                    {isChecked ? 'ACTIVO' : 'OFF'}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-3 pt-2.5 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
            <span>💡 <strong>Regla de oro:</strong> Los riesgos no se suman, se <strong>multiplican</strong>. Eliminar 2 factores reduce el daño a la mitad.</span>
            <span className="font-mono text-emerald-400 font-bold hidden sm:inline">¡El 80% es Modificable!</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-800 pt-2 flex items-center justify-between text-xs text-slate-400">
        <span>«No podemos cambiar nuestros genes, pero sí elegimos qué hábitos practicamos a diario.»</span>
        <span className="text-teal-400 font-semibold">8 / 12</span>
      </div>
    </div>
  );
};

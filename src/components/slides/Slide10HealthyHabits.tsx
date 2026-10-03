import React, { useState } from 'react';
import { Salad, Activity, Moon, Droplets, Sparkles, Stethoscope, Ban, ShieldCheck, Brain, CheckCircle2 } from 'lucide-react';

export const Slide10HealthyHabits: React.FC<{ isProjectorMode: boolean }> = ({ isProjectorMode }) => {
  const [activeHabits, setActiveHabits] = useState<{ [key: number]: boolean }>({
    0: true,
    1: true,
    2: true,
    3: false,
    4: true,
    5: false,
    6: true,
    7: true,
    8: false
  });

  const habits = [
    { title: 'Nutrición Real', icon: Salad, color: 'text-emerald-400', keyWord: 'Frutas, verduras y cero ultraprocesados' },
    { title: 'Movimiento', icon: Activity, color: 'text-teal-400', keyWord: '60 min de actividad física diaria' },
    { title: 'Sueño Profundo', icon: Moon, color: 'text-indigo-400', keyWord: '8 a 10 horas sin pantallas en la cama' },
    { title: 'Agua Pura', icon: Droplets, color: 'text-cyan-400', keyWord: '1.5 a 2 litros para filtrar toxinas' },
    { title: 'Higiene', icon: Sparkles, color: 'text-blue-400', keyWord: 'Lavado de manos: frena el 80% de virus' },
    { title: 'Cero Humo', icon: Ban, color: 'text-rose-400', keyWord: 'Proteger los cilios y arterias del tabaco' },
    { title: 'Fármacos con Receta', icon: ShieldCheck, color: 'text-amber-400', keyWord: 'Cero automedicación ni excesos' },
    { title: 'Salud Mental', icon: Brain, color: 'text-violet-400', keyWord: 'Hablar de emociones y pedir apoyo' },
    { title: 'Chequeos Médicos', icon: Stethoscope, color: 'text-pink-400', keyWord: 'Vacunas al día y control preventivo' }
  ];

  const toggleHabit = (idx: number) => {
    setActiveHabits(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const completedCount = Object.values(activeHabits).filter(Boolean).length;
  const shieldPercent = Math.round((completedCount / habits.length) * 100);

  return (
    <div id="slide-10-habits" className="h-full w-full flex flex-col justify-between p-4 sm:p-7 md:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-2.5">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-semibold text-teal-400 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Idea Principal 09</span>
          </div>
          <h2 className={`font-black text-white tracking-tight ${isProjectorMode ? 'text-2xl sm:text-3xl md:text-4xl' : 'text-xl sm:text-2xl md:text-3xl'}`}>
            Hábitos Saludables <span className="text-emerald-400 font-medium text-lg sm:text-xl md:text-2xl">| Escudo Biológico de Prevención</span>
          </h2>
        </div>

        {/* Shield Meter Widget */}
        <div className="bg-slate-900 px-3.5 py-1.5 rounded-full border border-slate-800 flex items-center gap-3">
          <span className="text-xs text-slate-300 font-bold">Escudo Protector:</span>
          <div className="w-24 bg-slate-800 h-2.5 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-teal-400 to-emerald-400 transition-all duration-300 rounded-full"
              style={{ width: `${shieldPercent}%` }}
            ></div>
          </div>
          <span className="text-xs font-mono font-bold text-teal-300">{shieldPercent}% ({completedCount}/9)</span>
        </div>
      </div>

      {/* 9 Interactive Habit Cards */}
      <div className="my-auto py-2 space-y-3">
        <div className="text-xs text-slate-400">
          Toca los hábitos que cumples hoy para activar tu escudo biológico:
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          {habits.map((h, i) => {
            const Icon = h.icon;
            const isChecked = activeHabits[i];
            return (
              <button
                key={i}
                onClick={() => toggleHabit(i)}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex items-start gap-2.5 ${
                  isChecked
                    ? 'bg-slate-900 border-teal-500/60 ring-1 ring-teal-500/30 shadow-md'
                    : 'bg-slate-950/50 border-slate-800 hover:border-slate-700 opacity-60 hover:opacity-90'
                }`}
              >
                <div className="mt-0.5 shrink-0">
                  <CheckCircle2 className={`w-5 h-5 ${isChecked ? 'text-teal-400 fill-teal-400/20' : 'text-slate-600'}`} />
                </div>
                <div>
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <Icon className={`w-3.5 h-3.5 ${h.color}`} />
                    <h3 className="text-xs font-black text-white">{h.title}</h3>
                  </div>
                  <p className="text-[11px] text-slate-300 font-medium leading-snug">
                    {h.keyWord}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        <div className="bg-slate-900/90 border border-slate-800 p-3 rounded-xl flex items-center justify-between text-xs text-slate-300">
          <span>💡 <strong>Idea clave:</strong> La prevención no cuesta dinero, cuesta constancia. 1 hábito diario sostenido previene enfermedades de por vida.</span>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-800 pt-2 flex items-center justify-between text-xs text-slate-400">
        <span>«Tus decisiones de hoy determinan la calidad de tus células en 10 años.»</span>
        <span className="text-teal-400 font-semibold">9 / 12</span>
      </div>
    </div>
  );
};

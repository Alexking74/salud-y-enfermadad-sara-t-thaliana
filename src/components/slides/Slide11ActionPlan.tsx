import React, { useState } from 'react';
import { BookOpen, ShieldAlert, HeartPulse, Sparkles, Check, ArrowRight } from 'lucide-react';

export const Slide11ActionPlan: React.FC<{ isProjectorMode: boolean }> = ({ isProjectorMode }) => {
  const [activeLevel, setActiveLevel] = useState<number>(0);

  const levels = [
    {
      num: '01',
      title: 'INFORMARNOS',
      focus: 'Ciencia vs Mitos',
      icon: BookOpen,
      color: 'text-cyan-400',
      borderActive: 'border-cyan-400 ring-2 ring-cyan-400/40 bg-cyan-950/30',
      tagColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
      keyIdea: 'Conocer cómo funciona tu biología para no dejarte engañar.',
      actionBullets: [
        'Comprender el efecto real de las sustancias químicas en la sinapsis.',
        'Desconfiar de retos de redes sociales y mitos entre amigos.',
        'Saber que los síntomas son la voz de alarma de tus órganos.'
      ],
      motto: '«El conocimiento científico es tu primera línea de defensa».'
    },
    {
      num: '02',
      title: 'PREVENIR',
      focus: 'Decisión y Asertividad',
      icon: ShieldAlert,
      color: 'text-teal-400',
      borderActive: 'border-teal-400 ring-2 ring-teal-400/40 bg-teal-950/30',
      tagColor: 'bg-teal-500/20 text-teal-300 border-teal-500/40',
      keyIdea: 'Tener la valentía y criterio para decir «NO» a situaciones de riesgo.',
      actionBullets: [
        'Decir «NO» con firmeza ante la presión grupal de consumir.',
        'Elegir amistades y entornos que sumen a tu bienestar físico.',
        'Construir rutinas de sueño, deporte y comida real antes de buscar estímulos.'
      ],
      motto: '«Prevenir no es privarte; es elegir cuidar tu futuro».'
    },
    {
      num: '03',
      title: 'BUSCAR AYUDA',
      focus: 'Apoyo Profesional Temprano',
      icon: HeartPulse,
      color: 'text-rose-400',
      borderActive: 'border-rose-400 ring-2 ring-rose-400/40 bg-rose-950/30',
      tagColor: 'bg-rose-500/20 text-rose-300 border-rose-500/40',
      keyIdea: 'Pedir apoyo sin miedo ante malestares físicos o emocionales.',
      actionBullets: [
        'Consultar a médicos, orientadores o familiares de confianza.',
        'Atender el dolor o la tristeza antes de que se vuelva crónico.',
        'Acompañar con empatía a compañeros que estén sufriendo.'
      ],
      motto: '«Pedir ayuda es un acto de madurez y autocuidado biológico».'
    }
  ];

  const current = levels[activeLevel];
  const CurrentIcon = current.icon;

  return (
    <div id="slide-11-action" className="h-full w-full flex flex-col justify-between p-4 sm:p-7 md:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-2.5">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-semibold text-teal-400 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Idea Principal 10</span>
          </div>
          <h2 className={`font-black text-white tracking-tight ${isProjectorMode ? 'text-2xl sm:text-3xl md:text-4xl' : 'text-xl sm:text-2xl md:text-3xl'}`}>
            ¿Qué Podemos Hacer? <span className="text-teal-400 font-medium text-lg sm:text-xl md:text-2xl">| 3 Niveles de Acción</span>
          </h2>
        </div>

        <div className="text-xs text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
          Haz clic en cada nivel para ver su aplicación práctica ➔
        </div>
      </div>

      {/* 3 Interactive Level Buttons */}
      <div className="my-auto py-2 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {levels.map((lvl, idx) => {
            const Icon = lvl.icon;
            const isSelected = activeLevel === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveLevel(idx)}
                className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? lvl.borderActive + ' shadow-xl scale-[1.02]'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 opacity-70 hover:opacity-100'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className={`p-1.5 rounded-lg bg-slate-950 border border-slate-800 ${lvl.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${lvl.tagColor}`}>
                    Nivel {lvl.num}
                  </span>
                </div>
                <h3 className="text-sm font-black text-white">{lvl.title}</h3>
                <span className="text-xs text-slate-400 block mt-0.5">{lvl.focus}</span>
              </button>
            );
          })}
        </div>

        {/* Focused Action Card */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-2xl">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-3 mb-3">
            <div className={`p-3 rounded-xl bg-slate-950 border border-slate-700 ${current.color}`}>
              <CurrentIcon className="w-6 h-6" />
            </div>
            <div>
              <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${current.tagColor}`}>
                NIVEL {current.num}: {current.focus}
              </span>
              <h3 className="text-base sm:text-lg font-black text-white mt-1">
                {current.keyIdea}
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-3">
            {current.actionBullets.map((bullet, i) => (
              <div key={i} className="bg-slate-950/70 border border-slate-800 p-3 rounded-xl flex items-start gap-2 text-xs text-slate-200">
                <Check className={`w-4 h-4 shrink-0 mt-0.5 ${current.color}`} />
                <span className="font-semibold leading-snug">{bullet}</span>
              </div>
            ))}
          </div>

          <div className="bg-slate-950/90 border border-slate-800/80 px-3 py-2 rounded-xl text-center text-xs font-bold text-teal-300">
            {current.motto}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-800 pt-2 flex items-center justify-between text-xs text-slate-400">
        <span>💡 <strong>Idea clave:</strong> Cuidar tu salud no es una orden externa, es tu propio derecho a vivir con bienestar.</span>
        <span className="text-teal-400 font-semibold">10 / 12</span>
      </div>
    </div>
  );
};

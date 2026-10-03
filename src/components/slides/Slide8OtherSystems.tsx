import React, { useState } from 'react';
import { Wind, Heart, Brain, Flame, Shield, Sparkles, Layers, Clock, AlertTriangle } from 'lucide-react';

export const Slide8OtherSystems: React.FC<{ isProjectorMode: boolean }> = ({ isProjectorMode }) => {
  const [selectedTarget, setSelectedTarget] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'both' | 'agudo' | 'cronico'>('both');

  const organs = [
    {
      name: 'Pulmones',
      emoji: '🫁',
      icon: Wind,
      color: 'text-cyan-400',
      borderActive: 'border-cyan-400 ring-2 ring-cyan-400/40 bg-cyan-950/30',
      acute: 'Irritación bronquial y menor oxígeno al instante.',
      chronic: 'Enfisema, bronquitis crónica y parálisis de cilios protectores.',
      fact: 'El alquitrán inmoviliza los cilios que expulsan bacterias.'
    },
    {
      name: 'Corazón',
      emoji: '❤️',
      icon: Heart,
      color: 'text-rose-400',
      borderActive: 'border-rose-400 ring-2 ring-rose-400/40 bg-rose-950/30',
      acute: 'Taquicardia, arritmias y subida brusca de tensión.',
      chronic: 'Rigidez arterial, hipertrofia cardíaca y riesgo de infarto prematuro.',
      fact: 'Estimulantes fuerzan al corazón a bombear el doble con menos oxígeno.'
    },
    {
      name: 'Hígado',
      emoji: '🫀',
      icon: Flame,
      color: 'text-amber-400',
      borderActive: 'border-amber-400 ring-2 ring-amber-400/40 bg-amber-950/30',
      acute: 'Sobrecarga metabólica tóxica de filtrado celular.',
      chronic: 'Hígado graso, hepatitis tóxica y cirrosis irreversible.',
      fact: 'El hígado solo procesa una pequeña dosis por hora; el resto envenena la sangre.'
    },
    {
      name: 'Inmunológico',
      emoji: '🛡️',
      icon: Shield,
      color: 'text-emerald-400',
      borderActive: 'border-emerald-400 ring-2 ring-emerald-400/40 bg-emerald-950/30',
      acute: 'Fagocitosis deprimida ante virus y bacterias comunes.',
      chronic: 'Inmunosupresión crónica: alta vulnerabilidad a infecciones pulmonares.',
      fact: 'Las toxinas destruyen linfocitos T y reducen las defensas naturales.'
    },
    {
      name: 'Cerebro Central',
      emoji: '🧠',
      icon: Brain,
      color: 'text-violet-400',
      borderActive: 'border-violet-400 ring-2 ring-violet-400/40 bg-violet-950/30',
      acute: 'Depresión del tronco encefálico (ritmo respiratorio).',
      chronic: 'Pérdida de masa cerebral y atrofia en la corteza prefrontal.',
      fact: 'La muerte neuronal por asfixia tóxica no se regenera.'
    }
  ];

  const current = organs[selectedTarget];
  const CurrentIcon = current.icon;

  return (
    <div id="slide-8-other-systems" className="h-full w-full flex flex-col justify-between p-4 sm:p-7 md:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-2.5">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-semibold text-teal-400 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Idea Principal 07</span>
          </div>
          <h2 className={`font-black text-white tracking-tight ${isProjectorMode ? 'text-2xl sm:text-3xl md:text-4xl' : 'text-xl sm:text-2xl md:text-3xl'}`}>
            Daño en Órganos Vitales <span className="text-teal-400 font-medium text-lg sm:text-xl md:text-2xl">| Efecto Inmediato vs. Crónico</span>
          </h2>
        </div>

        {/* View Mode Filters */}
        <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 p-1 rounded-full text-xs">
          <button
            onClick={() => setViewMode('both')}
            className={`px-2.5 py-0.5 rounded-full font-bold cursor-pointer transition-all ${viewMode === 'both' ? 'bg-teal-500 text-slate-950' : 'text-slate-400'}`}
          >
            Ambos
          </button>
          <button
            onClick={() => setViewMode('agudo')}
            className={`px-2.5 py-0.5 rounded-full font-bold cursor-pointer transition-all ${viewMode === 'agudo' ? 'bg-amber-500 text-slate-950' : 'text-slate-400'}`}
          >
            Solo Agudo
          </button>
          <button
            onClick={() => setViewMode('cronico')}
            className={`px-2.5 py-0.5 rounded-full font-bold cursor-pointer transition-all ${viewMode === 'cronico' ? 'bg-rose-500 text-white' : 'text-slate-400'}`}
          >
            Solo Crónico
          </button>
        </div>
      </div>

      {/* 5 Organ Selector Tabs */}
      <div className="my-auto py-2 space-y-4">
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
          {organs.map((org, idx) => {
            const Icon = org.icon;
            const isSelected = selectedTarget === idx;
            return (
              <button
                key={idx}
                onClick={() => setSelectedTarget(idx)}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? org.borderActive + ' shadow-xl scale-[1.02]'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 opacity-70 hover:opacity-100'
                }`}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-lg">{org.emoji}</span>
                  <div className={`p-1 rounded bg-slate-950 ${org.color}`}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                </div>
                <h3 className="text-xs sm:text-sm font-black text-white">{org.name}</h3>
              </button>
            );
          })}
        </div>

        {/* Focused Comparison Card */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-2xl">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-3 mb-3">
            <span className="text-3xl">{current.emoji}</span>
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                Órgano Seleccionado
              </span>
              <h3 className="text-base sm:text-lg font-black text-white">
                {current.name}: <span className="text-slate-300 font-medium">{current.fact}</span>
              </h3>
            </div>
          </div>

          {/* Side by Side: Acute vs Chronic */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {(viewMode === 'both' || viewMode === 'agudo') && (
              <div className="bg-slate-950/70 border border-amber-500/30 p-3.5 rounded-xl">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-black uppercase mb-1">
                  <Clock className="w-4 h-4" />
                  <span>Efecto Agudo (Inmediato)</span>
                </div>
                <p className="text-xs font-semibold text-white leading-snug">
                  {current.acute}
                </p>
              </div>
            )}

            {(viewMode === 'both' || viewMode === 'cronico') && (
              <div className="bg-slate-950/70 border border-rose-500/30 p-3.5 rounded-xl">
                <div className="flex items-center gap-2 text-rose-400 text-xs font-black uppercase mb-1">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Efecto Crónico (Acumulativo)</span>
                </div>
                <p className="text-xs font-semibold text-rose-200 leading-snug">
                  {current.chronic}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-800 pt-2 flex items-center justify-between text-xs text-slate-400">
        <span>💡 <strong>Idea clave:</strong> El daño celular es silencioso: no duele al principio, pero acumula lesiones irreversibles.</span>
        <span className="text-teal-400 font-semibold">7 / 12</span>
      </div>
    </div>
  );
};

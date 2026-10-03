import React, { useState } from 'react';
import { Pill, Coffee, Wine, AlertOctagon, Sparkles, AlertTriangle, ShieldCheck } from 'lucide-react';

export const Slide6SubstancesOverview: React.FC<{ isProjectorMode: boolean }> = ({ isProjectorMode }) => {
  const [selectedSubstance, setSelectedSubstance] = useState<number>(0);
  const [ageGroup, setAgeGroup] = useState<'adolescente' | 'adulto'>('adolescente');

  const substanceTypes = [
    {
      id: 0,
      title: 'Medicamentos',
      sub: 'Uso terapéutico y dosis médica',
      icon: Pill,
      color: 'text-emerald-400',
      badge: 'Controlado',
      borderActive: 'border-emerald-400 ring-2 ring-emerald-400/40 bg-emerald-950/30',
      mainIdea: 'Diseñados para curar, pero peligrosos si se usan sin receta.',
      risk: 'Automedicación provoca intoxicaciones o resistencia bacteriana.'
    },
    {
      id: 1,
      title: 'Uso Cotidiano',
      sub: 'Cafeína, energizantes y azúcar',
      icon: Coffee,
      color: 'text-amber-400',
      badge: 'Habitual',
      borderActive: 'border-amber-400 ring-2 ring-amber-400/40 bg-amber-950/30',
      mainIdea: 'Estimulantes temporales del estado de alerta.',
      risk: 'El abuso provoca insomnio, taquicardias y dependencia psicológica.'
    },
    {
      id: 2,
      title: 'Alcohol y Tabaco',
      sub: 'Toxinas de alto consumo',
      icon: Wine,
      color: 'text-orange-400',
      badge: 'Toxicidad Alta',
      borderActive: 'border-orange-400 ring-2 ring-orange-400/40 bg-orange-950/30',
      mainIdea: 'Destruyen cilios pulmonares y sobrecargan el hígado.',
      risk: 'Generan adicción rápida, cirrosis hepática y daño vascular.'
    },
    {
      id: 3,
      title: 'Psicoactivas',
      sub: 'Alteración del Sistema Nervioso',
      icon: AlertOctagon,
      color: 'text-rose-400',
      badge: 'Peligro Crítico',
      borderActive: 'border-rose-400 ring-2 ring-rose-400/40 bg-rose-950/30',
      mainIdea: 'Desregulan la sinapsis y distorsionan la realidad.',
      risk: 'Neurotoxicidad severa, pérdida del juicio y dependencia biológica.'
    }
  ];

  const current = substanceTypes[selectedSubstance];
  const CurrentIcon = current.icon;

  const keyFactors = [
    { label: 'Dosis', rule: 'A mayor cantidad, mayor toxicidad celular' },
    { label: 'Frecuencia', rule: 'El uso repetido no permite recuperación a los tejidos' },
    { label: 'Vía de ingreso', rule: 'Inhalada o intravenosa llega al cerebro en segundos' },
    { label: 'Edad biológica', rule: 'El cerebro de menores de 21 años es mucho más vulnerable' }
  ];

  return (
    <div id="slide-6-substances" className="h-full w-full flex flex-col justify-between p-4 sm:p-7 md:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-2.5">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-semibold text-teal-400 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Idea Principal 05</span>
          </div>
          <h2 className={`font-black text-white tracking-tight ${isProjectorMode ? 'text-2xl sm:text-3xl md:text-4xl' : 'text-xl sm:text-2xl md:text-3xl'}`}>
            Sustancias Químicas y el Organismo <span className="text-teal-400 font-medium text-lg sm:text-xl md:text-2xl">| 4 Categorías</span>
          </h2>
        </div>

        <div className="text-xs text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
          Toca una categoría para ver su impacto clave ➔
        </div>
      </div>

      {/* 4 Classification Cards */}
      <div className="my-auto py-2 space-y-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5">
          {substanceTypes.map((item, idx) => {
            const Icon = item.icon;
            const isSelected = selectedSubstance === idx;
            return (
              <button
                key={idx}
                onClick={() => setSelectedSubstance(idx)}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? item.borderActive + ' shadow-xl scale-[1.02]'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 opacity-70 hover:opacity-100'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className={`p-1.5 rounded-lg bg-slate-950 border border-slate-800 ${item.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">{item.badge}</span>
                </div>
                <h3 className="text-sm font-black text-white">{item.title}</h3>
                <span className="text-[10px] text-slate-400 block mt-0.5 line-clamp-1">{item.sub}</span>
              </button>
            );
          })}
        </div>

        {/* Focused Card: Key Idea + Factors Grid */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3 mb-3">
            <div className="flex items-center gap-3">
              <div className={`p-3 rounded-xl bg-slate-950 border border-slate-700 ${current.color}`}>
                <CurrentIcon className="w-6 h-6" />
              </div>
              <div>
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full border border-slate-700 bg-slate-950 ${current.color}`}>
                  {current.title}
                </span>
                <h3 className="text-base sm:text-lg font-black text-white mt-1">
                  {current.mainIdea}
                </h3>
              </div>
            </div>

            {/* Interactive Age Vulnerability Toggle */}
            <div className="flex items-center gap-2 bg-slate-950 p-1 rounded-xl border border-slate-800 shrink-0">
              <span className="text-[10px] uppercase font-bold text-slate-400 px-2">Vulnerabilidad:</span>
              <button
                onClick={() => setAgeGroup('adolescente')}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  ageGroup === 'adolescente' ? 'bg-rose-500 text-white shadow-md' : 'text-slate-400 hover:text-white'
                }`}
              >
                Cerebro Adolescente (¡x3 Riesgo!)
              </button>
              <button
                onClick={() => setAgeGroup('adulto')}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  ageGroup === 'adulto' ? 'bg-slate-700 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Adulto
              </button>
            </div>
          </div>

          {/* Risk Alert Pill */}
          <div className="bg-slate-950/80 border border-slate-800 p-3 rounded-xl flex items-start gap-2.5 mb-3">
            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-bold text-amber-300 block">Riesgo Biológico Principal:</span>
              <p className="text-xs text-slate-300">{current.risk}</p>
            </div>
          </div>

          {/* 4 Determinant Factors in 1 Line each */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
            {keyFactors.map((kf, i) => (
              <div key={i} className="bg-slate-950/60 border border-slate-800/80 p-2 rounded-lg">
                <strong className="text-teal-300 block">{kf.label}:</strong>
                <span className="text-slate-400 text-[11px] leading-tight block mt-0.5">{kf.rule}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-800 pt-2 flex items-center justify-between text-xs text-slate-400">
        <span>💡 <strong>Idea clave:</strong> En los jóvenes, el cerebro aún se está formando: cualquier tóxico interrumpe conexiones permanentes.</span>
        <span className="text-teal-400 font-semibold">5 / 12</span>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { Brain, ArrowRight, Eye, Focus, Compass, Smile, Database, RefreshCw, Sparkles, Zap } from 'lucide-react';

export const Slide7NervousSystem: React.FC<{ isProjectorMode: boolean }> = ({ isProjectorMode }) => {
  const [activeConcept, setActiveConcept] = useState<string>('percepcion');
  const [synapseState, setSynapseState] = useState<'normal' | 'bloqueada'>('normal');

  const processFlow = [
    { step: '1', title: 'Ingreso', desc: 'Oral, inhalada o sanguínea' },
    { step: '2', title: 'Barrera Cerebral', desc: 'Atraviesa al tejido cerebral' },
    { step: '3', title: 'Sinapsis', desc: 'Bloquea o altera neurotransmisores' },
    { step: '4', title: 'Conducta', desc: 'Distorsiona juicio y reflejos' }
  ];

  const cognitiveEffects = [
    {
      id: 'percepcion',
      name: 'Percepción',
      icon: Eye,
      color: 'text-cyan-400',
      borderActive: 'border-cyan-400 ring-2 ring-cyan-400/40 bg-cyan-950/40',
      keyIdea: 'Engaño sensorial: Distorsiona la visión, distancia, tiempo y sonidos.',
      consequence: 'Incapacidad de calcular peligro o reaccionar a tiempo.'
    },
    {
      id: 'atencion',
      name: 'Juicio y Decisión',
      icon: Focus,
      color: 'text-teal-400',
      borderActive: 'border-teal-400 ring-2 ring-teal-400/40 bg-teal-950/40',
      keyIdea: 'Falso sentido de seguridad: Apaga la prudencia en la corteza prefrontal.',
      consequence: 'Conductas impulsivas y toma de decisiones muy riesgosas.'
    },
    {
      id: 'coordinacion',
      name: 'Coordinación Motora',
      icon: Compass,
      color: 'text-indigo-400',
      borderActive: 'border-indigo-400 ring-2 ring-indigo-400/40 bg-indigo-950/40',
      keyIdea: 'Retardo psicomotor: La orden cerebral tarda en llegar a los músculos.',
      consequence: 'Pérdida de equilibrio, torpeza y caídas graves.'
    },
    {
      id: 'animo',
      name: 'Estado de Ánimo',
      icon: Smile,
      color: 'text-amber-400',
      borderActive: 'border-amber-400 ring-2 ring-amber-400/40 bg-amber-950/40',
      keyIdea: 'Montaña rusa química: Falsa euforia seguida de bajón y ansiedad.',
      consequence: 'Irritabilidad extrema y dependencia del estímulo artificial.'
    },
    {
      id: 'memoria',
      name: 'Memoria (Hipocampo)',
      icon: Database,
      color: 'text-violet-400',
      borderActive: 'border-violet-400 ring-2 ring-violet-400/40 bg-violet-950/40',
      keyIdea: 'Bloqueo del almacenamiento: La información no se graba en el cerebro.',
      consequence: 'Lagunas mentales («blackouts») y bajo rendimiento de estudio.'
    },
    {
      id: 'dependencia',
      name: 'Tolerancia y Adicción',
      icon: RefreshCw,
      color: 'text-rose-400',
      borderActive: 'border-rose-400 ring-2 ring-rose-400/40 bg-rose-950/40',
      keyIdea: 'Neuroadaptación: El cerebro exige cada vez más dosis para funcionar.',
      consequence: 'Síndrome de abstinencia y necesidad compulsiva.'
    }
  ];

  const currentEffect = cognitiveEffects.find((c) => c.id === activeConcept) || cognitiveEffects[0];
  const CurrentIcon = currentEffect.icon;

  return (
    <div id="slide-7-nervous" className="h-full w-full flex flex-col justify-between p-4 sm:p-7 md:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-2.5">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-semibold text-teal-400 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Idea Principal 06</span>
          </div>
          <h2 className={`font-black text-white tracking-tight ${isProjectorMode ? 'text-2xl sm:text-3xl md:text-4xl' : 'text-xl sm:text-2xl md:text-3xl'}`}>
            Sustancias y el Sistema Nervioso <span className="text-cyan-400 font-medium text-lg sm:text-xl md:text-2xl">| Alteración Sináptica</span>
          </h2>
        </div>

        {/* Synapse Toggle */}
        <div className="flex items-center gap-2 bg-slate-900 px-3 py-1 rounded-full border border-slate-800 text-xs">
          <span className="text-slate-400 font-medium">Estado Sináptico:</span>
          <button
            onClick={() => setSynapseState(synapseState === 'normal' ? 'bloqueada' : 'normal')}
            className={`px-2.5 py-0.5 rounded-full font-bold transition-all cursor-pointer ${
              synapseState === 'normal' ? 'bg-emerald-500 text-slate-950' : 'bg-rose-500 text-white animate-pulse'
            }`}
          >
            {synapseState === 'normal' ? '⚡ Normal (Equilibrio)' : '⚠️ Alterada por Tóxico'}
          </button>
        </div>
      </div>

      {/* 4-Step Process Bar (Very Visual and Compact) */}
      <div className="my-auto py-2 space-y-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {processFlow.map((pf, i) => (
            <div key={i} className="bg-slate-900/60 border border-slate-800 px-3 py-2 rounded-xl flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-full bg-slate-950 border border-slate-700 flex items-center justify-center font-mono font-bold text-xs text-teal-400 shrink-0">
                {pf.step}
              </span>
              <div>
                <span className="text-xs font-black text-white block leading-tight">{pf.title}</span>
                <span className="text-[10px] text-slate-400 block leading-tight">{pf.desc}</span>
              </div>
            </div>
          ))}
        </div>

        {/* 6 Cognitive Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {cognitiveEffects.map((eff) => {
            const Icon = eff.icon;
            const isSelected = activeConcept === eff.id;
            return (
              <button
                key={eff.id}
                onClick={() => setActiveConcept(eff.id)}
                className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center ${
                  isSelected
                    ? eff.borderActive + ' shadow-xl scale-[1.03]'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 opacity-70 hover:opacity-100'
                }`}
              >
                <div className={`p-1.5 rounded-lg bg-slate-950 border border-slate-800 ${eff.color} mb-1`}>
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-white leading-tight">{eff.name}</span>
              </button>
            );
          })}
        </div>

        {/* Focused Concept Card: Minimalist, 2 Key Lines */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-2xl">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-3 mb-3">
            <div className={`p-3 rounded-xl bg-slate-950 border border-slate-700 ${currentEffect.color}`}>
              <CurrentIcon className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                Función Cerebral Afectada
              </span>
              <h3 className="text-base sm:text-lg font-black text-white">
                {currentEffect.name}
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-slate-950/70 border border-slate-800 p-3.5 rounded-xl">
              <span className="text-[10px] uppercase font-bold text-teal-400 block mb-1">Mecanismo de acción:</span>
              <p className="text-xs font-semibold text-white leading-snug">{currentEffect.keyIdea}</p>
            </div>
            <div className="bg-slate-950/70 border border-slate-800 p-3.5 rounded-xl">
              <span className="text-[10px] uppercase font-bold text-rose-400 block mb-1">Consecuencia conductual directa:</span>
              <p className="text-xs font-semibold text-slate-200 leading-snug">{currentEffect.consequence}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-800 pt-2 flex items-center justify-between text-xs text-slate-400">
        <span>💡 <strong>Idea clave:</strong> Las sustancias no aumentan tus habilidades; apagan los frenos de seguridad biológicos de tu cerebro.</span>
        <span className="text-teal-400 font-semibold">6 / 12</span>
      </div>
    </div>
  );
};

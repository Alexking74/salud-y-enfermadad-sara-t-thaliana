import React, { useState } from 'react';
import { Activity, AlertTriangle, ArrowRight, Dna, ShieldAlert, Sparkles, HeartPulse, RefreshCw } from 'lucide-react';

export const Slide3DiseaseConcept: React.FC<{ isProjectorMode: boolean }> = ({ isProjectorMode }) => {
  const [selectedStep, setSelectedStep] = useState<number>(0);

  const steps = [
    {
      num: '01',
      title: 'Homeostasis',
      status: 'Organismo Sano',
      healthLevel: 100,
      healthColor: 'from-emerald-500 to-teal-400',
      tagColor: 'text-emerald-400 border-emerald-500/40 bg-emerald-950/40',
      keyIdea: 'Equilibrio biológico activo en todas las células y órganos.',
      bullets: ['Temperatura 36.5°C', 'Glucosa y pH estables', 'Defensas al 100%'],
      icon: Activity
    },
    {
      num: '02',
      title: 'Agresión',
      status: 'Ataque o Desgaste',
      healthLevel: 75,
      healthColor: 'from-amber-500 to-yellow-400',
      tagColor: 'text-amber-400 border-amber-500/40 bg-amber-950/40',
      keyIdea: 'Un factor rompe el balance: microbio, toxina o mal hábito.',
      bullets: ['Ingreso de patógenos', 'Toxinas químicas', 'Estrés celular agudo'],
      icon: AlertTriangle
    },
    {
      num: '03',
      title: 'Síntomas',
      status: 'Alerta del Cuerpo',
      healthLevel: 45,
      healthColor: 'from-orange-500 to-amber-500',
      tagColor: 'text-orange-400 border-orange-500/40 bg-orange-950/40',
      keyIdea: 'El organismo avisa y combate: dolor, fiebre o inflamación.',
      bullets: ['Fiebre (defensa térmica)', 'Dolor (señal de alerta)', 'Fatiga y cansancio'],
      icon: ShieldAlert
    },
    {
      num: '04',
      title: 'Enfermedad',
      status: 'Pérdida de Función',
      healthLevel: 15,
      healthColor: 'from-rose-500 to-red-600',
      tagColor: 'text-rose-400 border-rose-500/40 bg-rose-950/40',
      keyIdea: 'Fallo estructural o funcional que requiere reposo o medicina.',
      bullets: ['Incapacidad funcional', 'Disfunción de órganos', 'Tratamiento requerido'],
      icon: Dna
    }
  ];

  const current = steps[selectedStep];
  const StepIcon = current.icon;

  const causes = [
    { label: 'Biológicas', icon: '🦠', eg: 'Virus y bacterias' },
    { label: 'Ambientales', icon: '🌫️', eg: 'Contaminación y tóxicos' },
    { label: 'Conductuales', icon: '⚡', eg: 'Mala nutrición y sustancias' },
    { label: 'Genéticas', icon: '🧬', eg: 'Mutaciones hereditarias' }
  ];

  return (
    <div id="slide-3-disease" className="h-full w-full flex flex-col justify-between p-4 sm:p-7 md:p-8">
      {/* Header Conciso */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-2.5">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-semibold text-teal-400 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Idea Principal 02</span>
          </div>
          <h2 className={`font-black text-white tracking-tight ${isProjectorMode ? 'text-2xl sm:text-3xl md:text-4xl' : 'text-xl sm:text-2xl md:text-3xl'}`}>
            ¿Qué es la Enfermedad? <span className="text-rose-400 font-medium text-lg sm:text-xl md:text-2xl">| Ruptura de la Homeostasis</span>
          </h2>
        </div>

        <div className="text-xs text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
          Toca los pasos para ver la evolución del cuerpo ➔
        </div>
      </div>

      {/* Main Flow + Live Health Meter */}
      <div className="my-auto py-2 space-y-4">
        {/* 4 Interactive Flow Steps */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            const isSelected = selectedStep === idx;
            return (
              <button
                key={s.num}
                onClick={() => setSelectedStep(idx)}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer relative ${
                  isSelected
                    ? 'bg-slate-900 border-teal-400 ring-2 ring-teal-400/40 shadow-xl scale-[1.02]'
                    : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 opacity-70 hover:opacity-100'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-mono text-xs font-bold text-slate-400">PASO {s.num}</span>
                  <div className={`p-1.5 rounded-lg bg-slate-950 border border-slate-800 text-teal-400`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-sm font-black text-white">{s.title}</h3>
                <span className={`text-[11px] font-semibold block ${isSelected ? 'text-teal-300' : 'text-slate-400'}`}>
                  {s.status}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Detail Card with Animated Health Level */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3 mb-3">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-700 text-teal-400">
                <StepIcon className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${current.tagColor}`}>
                    Paso {current.num}: {current.status}
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-black text-white mt-0.5">{current.keyIdea}</h4>
              </div>
            </div>

            {/* Health Meter Widget */}
            <div className="bg-slate-950 px-3.5 py-2 rounded-xl border border-slate-800 shrink-0 w-full sm:w-48">
              <div className="flex justify-between text-xs font-bold mb-1">
                <span className="text-slate-400">Nivel de Homeostasis:</span>
                <span className="text-white">{current.healthLevel}%</span>
              </div>
              <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${current.healthColor} transition-all duration-500 rounded-full`}
                  style={{ width: `${current.healthLevel}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* 3 Ultra-Short Bullets */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {current.bullets.map((b, i) => (
              <div key={i} className="bg-slate-950/70 border border-slate-800/80 px-3 py-2 rounded-lg flex items-center gap-2 text-xs text-slate-200">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0"></span>
                <strong className="font-semibold">{b}</strong>
              </div>
            ))}
          </div>

          {/* 4 Causes Quick Chips */}
          <div className="mt-3 pt-2.5 border-t border-slate-800/60 flex flex-wrap items-center gap-2 text-xs">
            <span className="text-slate-400 font-medium">Orígenes causales:</span>
            {causes.map((c, i) => (
              <span key={i} className="bg-slate-950 border border-slate-800 px-2.5 py-1 rounded-full text-slate-300 inline-flex items-center gap-1.5">
                <span>{c.icon}</span>
                <strong className="text-white">{c.label}:</strong>
                <span className="text-slate-400">{c.eg}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-800 pt-2 flex items-center justify-between text-xs text-slate-400">
        <span>💡 <strong>Idea clave:</strong> Los síntomas no son el enemigo; son la alarma del cuerpo defendiéndose.</span>
        <span className="text-teal-400 font-semibold">2 / 12</span>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { Heart, Brain, Users, Sparkles, CheckCircle2, Touchpad } from 'lucide-react';

export const Slide2HealthConcept: React.FC<{ isProjectorMode: boolean }> = ({ isProjectorMode }) => {
  const [selectedDimension, setSelectedDimension] = useState<'fisica' | 'mental' | 'social'>('fisica');
  const [checkState, setCheckState] = useState<{ [key: string]: boolean }>({
    f1: true,
    f2: false,
    m1: true,
    m2: false,
    s1: true,
    s2: false
  });

  const toggleCheck = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setCheckState(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const dimensions = {
    fisica: {
      title: '1. Salud Física',
      icon: Heart,
      color: 'text-teal-400',
      badgeBg: 'bg-teal-500/20 text-teal-300 border-teal-500/40',
      borderActive: 'border-teal-400 ring-2 ring-teal-400/40 bg-teal-950/40',
      headline: 'El cuerpo en funcionamiento óptimo',
      keyIdeas: [
        { id: 'f1', text: 'Nutrición balanceada y agua diaria', bold: 'Combustible celular' },
        { id: 'f2', text: 'Descanso reparador (8h continuas)', bold: 'Regeneración tisular' },
        { id: 'f3', text: 'Movimiento físico constante', bold: 'Fuerza cardiovascular' }
      ],
      interactiveTip: 'Haz clic en los hábitos para marcar tu balance personal hoy.'
    },
    mental: {
      title: '2. Salud Mental',
      icon: Brain,
      color: 'text-cyan-400',
      badgeBg: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
      borderActive: 'border-cyan-400 ring-2 ring-cyan-400/40 bg-cyan-950/40',
      headline: 'Equilibrio emocional y claridad cognitiva',
      keyIdeas: [
        { id: 'm1', text: 'Gestión asertiva del estrés diario', bold: 'Control de cortisol' },
        { id: 'm2', text: 'Autoestima y aceptación personal', bold: 'Seguridad propia' },
        { id: 'm3', text: 'Capacidad de resolver problemas', bold: 'Pensamiento crítico' }
      ],
      interactiveTip: 'Una mente sana procesa los desafíos sin sobrecargarse.'
    },
    social: {
      title: '3. Salud Social',
      icon: Users,
      color: 'text-blue-400',
      badgeBg: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
      borderActive: 'border-blue-400 ring-2 ring-blue-400/40 bg-blue-950/40',
      headline: 'Convivencia armónica y red de apoyo',
      keyIdeas: [
        { id: 's1', text: 'Relaciones de respeto mutuo', bold: 'Vínculos seguros' },
        { id: 's2', text: 'Comunicación sincera y empatía', bold: 'Saber escuchar' },
        { id: 's3', text: 'Ambientes escolares seguros', bold: 'Cero violencia' }
      ],
      interactiveTip: 'Somos seres biológicos que necesitan vínculos afectivos sanos.'
    }
  };

  const activeData = dimensions[selectedDimension];
  const ActiveIcon = activeData.icon;

  return (
    <div id="slide-2-health" className="h-full w-full flex flex-col justify-between p-4 sm:p-7 md:p-8">
      {/* Header Conciso */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-2.5">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-semibold text-teal-400 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Idea Principal 01</span>
          </div>
          <h2 className={`font-black text-white tracking-tight ${isProjectorMode ? 'text-2xl sm:text-3xl md:text-4xl' : 'text-xl sm:text-2xl md:text-3xl'}`}>
            ¿Qué es la Salud? <span className="text-teal-400 font-medium text-lg sm:text-xl md:text-2xl">| El Equilibrio Bio-Psico-Social</span>
          </h2>
        </div>

        <div className="inline-flex items-center gap-2 bg-slate-900 border border-teal-500/30 px-3 py-1 rounded-full text-xs text-slate-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Definición OMS: <strong>Equilibrio Total</strong>, no solo falta de dolor.</span>
        </div>
      </div>

      {/* Main Interactive Workspace: 3 Big Interactive Dimension Buttons + Active Detail */}
      <div className="my-auto py-2 space-y-4">
        {/* 3 Clickable Selector Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {(Object.keys(dimensions) as Array<keyof typeof dimensions>).map((key) => {
            const dim = dimensions[key];
            const Icon = dim.icon;
            const isSelected = selectedDimension === key;
            return (
              <button
                key={key}
                onClick={() => setSelectedDimension(key)}
                className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer relative ${
                  isSelected
                    ? dim.borderActive + ' shadow-xl scale-[1.02]'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 opacity-70 hover:opacity-100'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className={`p-2 rounded-lg bg-slate-950 border border-slate-800 ${dim.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${dim.badgeBg}`}>
                    {isSelected ? 'Explorando' : 'Clic para ver'}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-white">{dim.title}</h3>
                <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">{dim.headline}</p>
              </button>
            );
          })}
        </div>

        {/* Focused Interactive Card: Minimalist, Key Ideas Only */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-2xl relative overflow-hidden">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
            <div className="flex items-center gap-3">
              <div className={`p-2.5 rounded-xl bg-slate-950 border border-slate-700 ${activeData.color}`}>
                <ActiveIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-black text-white">{activeData.title}</h3>
                <p className={`text-xs font-semibold ${activeData.color}`}>{activeData.headline}</p>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-[11px] text-slate-400 bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800">
              <Touchpad className="w-3.5 h-3.5 text-teal-400" />
              <span>Interactivo: Marca tus hábitos</span>
            </div>
          </div>

          {/* 3 Key Ideas Pills with Click-to-Check */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {activeData.keyIdeas.map((idea) => {
              const isChecked = checkState[idea.id] ?? false;
              return (
                <div
                  key={idea.id}
                  onClick={(e) => toggleCheck(idea.id, e)}
                  className={`p-3 rounded-xl border transition-all cursor-pointer flex items-start gap-2.5 ${
                    isChecked
                      ? 'bg-slate-950 border-teal-500/50 shadow-sm'
                      : 'bg-slate-950/50 border-slate-800/80 hover:border-slate-700'
                  }`}
                >
                  <button className="mt-0.5 text-teal-400 shrink-0">
                    <CheckCircle2 className={`w-4 h-4 ${isChecked ? 'text-teal-400 fill-teal-400/20' : 'text-slate-600'}`} />
                  </button>
                  <div>
                    <span className="text-xs font-bold text-white block">
                      {idea.bold}
                    </span>
                    <span className="text-xs text-slate-300">
                      {idea.text}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-3 pt-2.5 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
            <span>💡 <strong>Idea central:</strong> Si una de las 3 áreas falla, el organismo pierde su equilibrio natural.</span>
            <span className="font-mono text-teal-400 text-[11px] hidden sm:inline">Tríada de Bienestar</span>
          </div>
        </div>
      </div>

      {/* Footer síntesis */}
      <div className="border-t border-slate-800 pt-2 flex items-center justify-between text-xs text-slate-400">
        <span>«Estar sano es tener energía física, paz mental y relaciones de confianza.»</span>
        <span className="text-teal-400 font-semibold">1 / 12</span>
      </div>
    </div>
  );
};

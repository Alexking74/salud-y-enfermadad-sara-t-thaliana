import React, { useState } from 'react';
import { Bug, Ban, Dna, Clock, Wind, Sparkles, HelpCircle, CheckCircle2 } from 'lucide-react';

export const Slide4DiseaseTypes: React.FC<{ isProjectorMode: boolean }> = ({ isProjectorMode }) => {
  const [activeCategory, setActiveCategory] = useState<number>(0);
  const [quizAnswer, setQuizAnswer] = useState<string | null>(null);

  const categories = [
    {
      id: 0,
      title: 'Infecciosas',
      badge: 'Transmisibles',
      icon: Bug,
      color: 'text-rose-400',
      borderActive: 'border-rose-400 ring-2 ring-rose-400/40 bg-rose-950/30',
      tagColor: 'bg-rose-500/20 text-rose-300 border-rose-500/40',
      keyIdea: 'Patógenos externos que invaden y se multiplican.',
      cause: 'Virus, bacterias, hongos o parásitos',
      examples: 'Gripe, Neumonía, Dengue, COVID-19',
      isContagious: 'Sí, por aire, agua o contacto'
    },
    {
      id: 1,
      title: 'No Infecciosas',
      badge: 'No contagiosas',
      icon: Ban,
      color: 'text-emerald-400',
      borderActive: 'border-emerald-400 ring-2 ring-emerald-400/40 bg-emerald-950/30',
      tagColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
      keyIdea: 'Disfunciones metabólicas o de órganos internos.',
      cause: 'Estilo de vida, dieta o envejecimiento',
      examples: 'Diabetes tipo 2, Hipertensión, Cardiopatías',
      isContagious: 'No se transmite entre personas'
    },
    {
      id: 2,
      title: 'Genéticas',
      badge: 'Código ADN',
      icon: Dna,
      color: 'text-cyan-400',
      borderActive: 'border-cyan-400 ring-2 ring-cyan-400/40 bg-cyan-950/30',
      tagColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
      keyIdea: 'Mutaciones heredadas en los cromosomas.',
      cause: 'Alteración del ADN desde la fecundación',
      examples: 'Hemofilia, Fibrosis quística, Daltonismo',
      isContagious: 'No infecciosa, de origen hereditario'
    },
    {
      id: 3,
      title: 'Crónicas',
      badge: 'Larga duración',
      icon: Clock,
      color: 'text-amber-400',
      borderActive: 'border-amber-400 ring-2 ring-amber-400/40 bg-amber-950/30',
      tagColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
      keyIdea: 'Evolución lenta de más de 6 meses de duración.',
      cause: 'Factores combinados persistentes',
      examples: 'Asma bronquial, Artritis, Insuficiencia renal',
      isContagious: 'Requieren control médico continuo'
    },
    {
      id: 4,
      title: 'Ambientales',
      badge: 'Hábitos y entorno',
      icon: Wind,
      color: 'text-teal-400',
      borderActive: 'border-teal-400 ring-2 ring-teal-400/40 bg-teal-950/30',
      tagColor: 'bg-teal-500/20 text-teal-300 border-teal-500/40',
      keyIdea: 'Causadas por contaminantes y hábitos nocivos.',
      cause: 'Humo, plásticos, tóxicos y sedentarismo',
      examples: 'EPOC por tabaco, Saturnismo, Alergias',
      isContagious: 'Altamente prevenibles'
    }
  ];

  const current = categories[activeCategory];
  const CategoryIcon = current.icon;

  const quizOptions = [
    { name: 'Gripe', type: 'Infecciosa', catIndex: 0 },
    { name: 'Diabetes tipo 2', type: 'No Infecciosa', catIndex: 1 },
    { name: 'Hemofilia', type: 'Genética', catIndex: 2 },
    { name: 'Asma', type: 'Crónica', catIndex: 3 }
  ];

  return (
    <div id="slide-4-types" className="h-full w-full flex flex-col justify-between p-4 sm:p-7 md:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-2.5">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-semibold text-teal-400 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Idea Principal 03</span>
          </div>
          <h2 className={`font-black text-white tracking-tight ${isProjectorMode ? 'text-2xl sm:text-3xl md:text-4xl' : 'text-xl sm:text-2xl md:text-3xl'}`}>
            Tipos de Enfermedades <span className="text-teal-400 font-medium text-lg sm:text-xl md:text-2xl">| 5 Categorías Clave</span>
          </h2>
        </div>

        <div className="text-xs text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
          Haz clic en una tarjeta para ver sus ideas maestras ➔
        </div>
      </div>

      {/* 5 Compact Cards */}
      <div className="my-auto py-2 space-y-4">
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            const isSelected = activeCategory === idx;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(idx);
                  setQuizAnswer(null);
                }}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? cat.borderActive + ' shadow-xl scale-[1.03]'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 opacity-70 hover:opacity-100'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className={`p-1.5 rounded-lg bg-slate-950 border border-slate-800 ${cat.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded border ${cat.tagColor}`}>
                    {cat.badge}
                  </span>
                </div>
                <h3 className="text-xs sm:text-sm font-black text-white leading-tight">{cat.title}</h3>
                <span className="text-[10px] text-slate-400 block mt-1 line-clamp-1">{cat.cause}</span>
              </button>
            );
          })}
        </div>

        {/* Focused Key Idea Card */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3 mb-3">
            <div className="flex items-center gap-3">
              <div className={`p-3 rounded-xl bg-slate-950 border border-slate-700 ${current.color}`}>
                <CategoryIcon className="w-6 h-6" />
              </div>
              <div>
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${current.tagColor}`}>
                  {current.badge}
                </span>
                <h3 className="text-base sm:text-lg font-black text-white mt-1">
                  {current.title}: <span className="text-slate-300 font-semibold">{current.keyIdea}</span>
                </h3>
              </div>
            </div>
            <div className="text-right sm:border-l sm:border-slate-800 sm:pl-4">
              <span className="text-[10px] uppercase font-mono text-slate-400 block">Transmisibilidad</span>
              <span className="text-xs font-bold text-teal-300">{current.isContagious}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-slate-950/70 border border-slate-800 px-3.5 py-2.5 rounded-xl">
              <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">Origen principal:</span>
              <p className="text-xs font-semibold text-white">{current.cause}</p>
            </div>
            <div className="bg-slate-950/70 border border-slate-800 px-3.5 py-2.5 rounded-xl">
              <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">Ejemplos para recordar:</span>
              <p className="text-xs font-bold text-teal-300">{current.examples}</p>
            </div>
          </div>

          {/* Interactive Quick Quiz for Classroom Participation */}
          <div className="mt-3 pt-2.5 border-t border-slate-800/60 flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-cyan-400" />
              <span className="text-slate-300 font-medium">Pregunta rápida a la clase: ¿A qué grupo pertenece?</span>
            </div>
            <div className="flex gap-1.5 flex-wrap">
              {quizOptions.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setQuizAnswer(opt.name);
                    setActiveCategory(opt.catIndex);
                  }}
                  className={`px-2.5 py-1 rounded-full text-xs font-medium cursor-pointer border transition-all ${
                    quizAnswer === opt.name
                      ? 'bg-teal-500 text-slate-950 font-bold border-teal-400'
                      : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {opt.name} ➔ {quizAnswer === opt.name ? opt.type : '?'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-800 pt-2 flex items-center justify-between text-xs text-slate-400">
        <span>💡 <strong>Idea clave:</strong> Saber clasificar la enfermedad permite saber si se previene con vacunas, hábitos o medicación.</span>
        <span className="text-teal-400 font-semibold">3 / 12</span>
      </div>
    </div>
  );
};

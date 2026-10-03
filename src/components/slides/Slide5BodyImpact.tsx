import React, { useState } from 'react';
import { Wind, Heart, Brain, Utensils, Shield, Bone, Sparkles, AlertCircle, Zap } from 'lucide-react';

export const Slide5BodyImpact: React.FC<{ isProjectorMode: boolean }> = ({ isProjectorMode }) => {
  const [activeSystem, setActiveSystem] = useState<string>('respiratorio');
  const [alertTriggered, setAlertTriggered] = useState<boolean>(false);

  const systems = [
    {
      id: 'respiratorio',
      name: 'Respiratorio',
      organ: 'Pulmones y Alvéolos',
      icon: Wind,
      color: 'text-cyan-400',
      badge: 'Intercambio O₂ / CO₂',
      borderActive: 'border-cyan-400 ring-2 ring-cyan-400/40 bg-cyan-950/40',
      mainIdea: 'Menor oxigenación celular y colapso de vías aéreas.',
      points: [
        { title: 'Hipoxia tisular', desc: 'Menos oxígeno disponible para las células' },
        { title: 'Inflamación bronquial', desc: 'Tos continua, flemas y dificultad para respirar' },
        { title: 'Riesgo crónico', desc: 'Asma severa, neumonías y daño alveolar' }
      ]
    },
    {
      id: 'cardiovascular',
      name: 'Cardiovascular',
      organ: 'Corazón y Arterias',
      icon: Heart,
      color: 'text-rose-400',
      badge: 'Bomba Sanguínea',
      borderActive: 'border-rose-400 ring-2 ring-rose-400/40 bg-rose-950/40',
      mainIdea: 'Sobrecarga de presión y rigidez de las arterias.',
      points: [
        { title: 'Hipertensión', desc: 'Arterias forzadas por mala elasticidad' },
        { title: 'Arritmias y taquicardias', desc: 'Ritmo cardíaco acelerado o irregular' },
        { title: 'Riesgo crónico', desc: 'Infartos e insuficiencia de bombeo' }
      ]
    },
    {
      id: 'nervioso',
      name: 'Nervioso',
      organ: 'Cerebro y Médula',
      icon: Brain,
      color: 'text-violet-400',
      badge: 'Centro de Control',
      borderActive: 'border-violet-400 ring-2 ring-violet-400/40 bg-violet-950/40',
      mainIdea: 'Fallo de neurotransmisores y lentitud de reflejos.',
      points: [
        { title: 'Desincronización', desc: 'Cerebro procesa estímulos con retraso' },
        { title: 'Pérdida de memoria', desc: 'Dificultad de concentración y aprendizaje' },
        { title: 'Riesgo crónico', desc: 'Deterioro neuronal y pérdida de control motor' }
      ]
    },
    {
      id: 'digestivo',
      name: 'Digestivo / Hepático',
      organ: 'Hígado y Estómago',
      icon: Utensils,
      color: 'text-amber-400',
      badge: 'Filtro y Nutrición',
      borderActive: 'border-amber-400 ring-2 ring-amber-400/40 bg-amber-950/40',
      mainIdea: 'Mala absorción de nutrientes y sobrecarga de toxinas.',
      points: [
        { title: 'Gastritis y úlceras', desc: 'Mucosa gástrica dañada por ácidos' },
        { title: 'Sobrecarga hepática', desc: 'Hígado agotado filtrando venenos químicos' },
        { title: 'Riesgo crónico', desc: 'Hígado graso, cirrosis y desnutrición' }
      ]
    },
    {
      id: 'inmunologico',
      name: 'Inmunológico',
      organ: 'Leucocitos y Ganglios',
      icon: Shield,
      color: 'text-emerald-400',
      badge: 'Defensa Biológica',
      borderActive: 'border-emerald-400 ring-2 ring-emerald-400/40 bg-emerald-950/40',
      mainIdea: 'Bajan las defensas: el cuerpo queda desprotegido.',
      points: [
        { title: 'Inmunodeficiencia', desc: 'Glóbulos blancos lentos o insuficientes' },
        { title: 'Inflamación persistente', desc: 'Respuesta defensiva fuera de control' },
        { title: 'Riesgo crónico', desc: 'Infecciones frecuentes y fatiga general' }
      ]
    },
    {
      id: 'locomotor',
      name: 'Músculos y Huesos',
      organ: 'Tejido Musculoesquelético',
      icon: Bone,
      color: 'text-teal-400',
      badge: 'Estructura Corporal',
      borderActive: 'border-teal-400 ring-2 ring-teal-400/40 bg-teal-950/40',
      mainIdea: 'Pérdida de fuerza y fragilidad ósea.',
      points: [
        { title: 'Atrofia muscular', desc: 'Músculos débiles por inactividad' },
        { title: 'Descalcificación', desc: 'Huesos quebradizos por falta de nutrición' },
        { title: 'Riesgo crónico', desc: 'Osteoporosis y dolores articulares' }
      ]
    }
  ];

  const current = systems.find((s) => s.id === activeSystem) || systems[0];
  const CurrentIcon = current.icon;

  const triggerAlert = () => {
    setAlertTriggered(true);
    setTimeout(() => setAlertTriggered(false), 2000);
  };

  return (
    <div id="slide-5-body" className="h-full w-full flex flex-col justify-between p-4 sm:p-7 md:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-2.5">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-semibold text-teal-400 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Idea Principal 04</span>
          </div>
          <h2 className={`font-black text-white tracking-tight ${isProjectorMode ? 'text-2xl sm:text-3xl md:text-4xl' : 'text-xl sm:text-2xl md:text-3xl'}`}>
            Impacto en el Cuerpo Humano <span className="text-cyan-400 font-medium text-lg sm:text-xl md:text-2xl">| Órganos Diana</span>
          </h2>
        </div>

        <div className="text-xs text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
          Toca cada sistema para ver el efecto biológico ➔
        </div>
      </div>

      {/* Main Interactive System Grid */}
      <div className="my-auto py-2 space-y-4">
        {/* 6 Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {systems.map((sys) => {
            const Icon = sys.icon;
            const isSelected = activeSystem === sys.id;
            return (
              <button
                key={sys.id}
                onClick={() => {
                  setActiveSystem(sys.id);
                  setAlertTriggered(false);
                }}
                className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center ${
                  isSelected
                    ? sys.borderActive + ' shadow-xl scale-[1.03]'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 opacity-70 hover:opacity-100'
                }`}
              >
                <div className={`p-1.5 rounded-lg bg-slate-950 border border-slate-800 ${sys.color} mb-1`}>
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-white leading-tight">{sys.name}</span>
                <span className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">{sys.organ}</span>
              </button>
            );
          })}
        </div>

        {/* Focused System Impact Card */}
        <div className={`bg-slate-900/90 border rounded-2xl p-4 sm:p-5 shadow-2xl transition-all ${alertTriggered ? 'border-rose-500 ring-2 ring-rose-500/50' : 'border-slate-800'}`}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3 mb-3">
            <div className="flex items-center gap-3">
              <div className={`p-3 rounded-xl bg-slate-950 border border-slate-700 ${current.color} ${alertTriggered ? 'animate-bounce' : ''}`}>
                <CurrentIcon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block">
                  Órgano Diana: {current.organ}
                </span>
                <h3 className="text-base sm:text-lg font-black text-white mt-0.5">
                  {current.mainIdea}
                </h3>
              </div>
            </div>

            {/* Interactive Alert Simulator Button */}
            <button
              onClick={triggerAlert}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                alertTriggered
                  ? 'bg-rose-500 text-white animate-pulse'
                  : 'bg-slate-950 border border-slate-700 text-slate-300 hover:border-teal-500 hover:text-white'
              }`}
            >
              <Zap className="w-3.5 h-3.5 text-teal-400" />
              <span>{alertTriggered ? '¡Alerta de Sobrecarga!' : 'Simular Alerta'}</span>
            </button>
          </div>

          {/* 3 Impact Points in Ultra-Short Format */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {current.points.map((pt, i) => (
              <div key={i} className="bg-slate-950/70 border border-slate-800 p-3 rounded-xl">
                <span className={`text-xs font-black block mb-1 ${current.color}`}>
                  {i + 1}. {pt.title}
                </span>
                <p className="text-xs text-slate-300 font-medium leading-snug">
                  {pt.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-3 pt-2.5 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
            <span>💡 <strong>Efecto dominó:</strong> Cuando un sistema falla (ej. respiratorio), el corazón y el cerebro deben sobrecargarse de inmediato.</span>
            <span className="font-mono text-teal-400 text-[11px] hidden sm:inline">Interconexión Biológica</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-800 pt-2 flex items-center justify-between text-xs text-slate-400">
        <span>«El cuerpo humano no trabaja en compartimentos aislados; es una sola red viva.»</span>
        <span className="text-teal-400 font-semibold">4 / 12</span>
      </div>
    </div>
  );
};

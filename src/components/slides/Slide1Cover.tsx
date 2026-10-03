import React from 'react';
import { PresentationMetadata } from '../../types';
import { Sparkles, User, GraduationCap, Calendar, BookOpen, Edit3, ShieldCheck, Activity } from 'lucide-react';

interface Slide1CoverProps {
  metadata: PresentationMetadata;
  onEditMetadata: () => void;
  isProjectorMode: boolean;
}

export const Slide1Cover: React.FC<Slide1CoverProps> = ({ metadata, onEditMetadata, isProjectorMode }) => {
  return (
    <div id="slide-1-cover" className="h-full w-full flex flex-col justify-between p-4 sm:p-8 md:p-12 relative overflow-hidden">
      {/* Background Decorative Scientific Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-teal-400" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      {/* Top Academic Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-teal-500/20 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-teal-500/10 border border-teal-500/30 text-teal-400">
            <Activity className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <span className="text-xs font-semibold tracking-widest text-teal-400 uppercase">
              Exposición Escolar Académica
            </span>
            <p className="text-sm font-medium text-slate-300">
              Asignatura: <strong className="text-white">{metadata.schoolSubject}</strong>
            </p>
          </div>
        </div>

        <button
          onClick={onEditMetadata}
          className="flex items-center gap-2 text-xs text-slate-300 hover:text-teal-300 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 rounded-full px-3 py-1.5 transition-all cursor-pointer shadow-sm"
          title="Editar datos del estudiante, curso o docente"
        >
          <Edit3 className="w-3.5 h-3.5 text-teal-400" />
          <span className="hidden sm:inline">Personalizar datos</span>
        </button>
      </div>

      {/* Main Hero Section */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto py-4">
        {/* Left Typography Column */}
        <div className="lg:col-span-7 space-y-5 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/80 border border-teal-500/40 text-teal-300 text-xs font-semibold tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-teal-400" />
            <span>Biología Humana & Estilo de Vida</span>
          </div>

          <h1 className={`font-extrabold tracking-tight text-white leading-tight ${isProjectorMode ? 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl' : 'text-2xl sm:text-4xl md:text-5xl'}`}>
            SALUD, ENFERMEDADES <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-300 to-blue-400">
              Y SUSTANCIAS
            </span> <br />
            QUE AFECTAN EL ORGANISMO
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-xl leading-snug font-normal">
            Enfoque interactivo basado en <strong className="text-teal-300">ideas principales</strong>: Homeostasis biológica, sinapsis cerebral, daño por sustancias y hábitos protectores.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
            <div className="bg-slate-900/80 border border-teal-500/30 p-2.5 rounded-xl text-left">
              <span className="text-[10px] uppercase font-mono font-bold text-teal-400 block">Bloque 01</span>
              <strong className="text-xs text-white block">Salud & Homeostasis</strong>
              <span className="text-[11px] text-slate-400">Equilibrio bio-psicosocial</span>
            </div>
            <div className="bg-slate-900/80 border border-cyan-500/30 p-2.5 rounded-xl text-left">
              <span className="text-[10px] uppercase font-mono font-bold text-cyan-400 block">Bloque 02</span>
              <strong className="text-xs text-white block">Sustancias & Cerebro</strong>
              <span className="text-[11px] text-slate-400">Alteración de neurotransmisores</span>
            </div>
            <div className="bg-slate-900/80 border border-emerald-500/30 p-2.5 rounded-xl text-left">
              <span className="text-[10px] uppercase font-mono font-bold text-emerald-400 block">Bloque 03</span>
              <strong className="text-xs text-white block">Hábitos & Prevención</strong>
              <span className="text-[11px] text-slate-400">Escudo biológico diario</span>
            </div>
          </div>
        </div>

        {/* Right Visual Anatomical & Molecular Graphic */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center">
            {/* Concentric Glow Rings */}
            <div className="absolute inset-0 rounded-full border border-teal-500/20 animate-[spin_40s_linear_infinite]" />
            <div className="absolute inset-4 rounded-full border border-dashed border-cyan-500/30 animate-[spin_25s_linear_infinite_reverse]" />
            <div className="absolute inset-12 rounded-full bg-gradient-to-br from-teal-500/10 via-blue-500/5 to-transparent blur-xl" />

            {/* Stylized Human & Cellular Vector Graphic */}
            <svg viewBox="0 0 240 240" className="w-full h-full relative z-10 drop-shadow-[0_0_25px_rgba(20,184,166,0.25)]">
              {/* Central Human Silhouette Silhouette */}
              <g className="fill-teal-400/90 stroke-teal-200" strokeWidth="1.5">
                {/* Head */}
                <circle cx="120" cy="50" r="18" className="fill-teal-300/80" />
                {/* Torso & Arms */}
                <path d="M 120 74 C 95 74, 82 88, 78 112 C 76 122, 85 125, 90 118 L 100 102 L 100 155 C 100 160, 105 165, 110 165 L 115 165 L 115 210 C 115 216, 125 216, 125 210 L 125 165 L 130 165 C 135 165, 140 160, 140 155 L 140 102 L 150 118 C 155 125, 164 122, 162 112 C 158 88, 145 74, 120 74 Z" 
                      className="fill-teal-500/70" />
                {/* Vital Heart Pulse Core */}
                <circle cx="120" cy="98" r="6" className="fill-rose-400 animate-ping" />
                <circle cx="120" cy="98" r="5" className="fill-rose-500" />
              </g>

              {/* Orbiting Molecules / Vital Nodes */}
              <g className="stroke-teal-400/60 fill-slate-900" strokeWidth="1.5">
                {/* Physical node */}
                <circle cx="45" cy="80" r="14" />
                <text x="45" y="84" textAnchor="middle" fill="#5eead4" fontSize="9" fontWeight="bold">FÍSICO</text>
                <line x1="59" y1="84" x2="85" y2="95" strokeDasharray="3 3" />

                {/* Mental node */}
                <circle cx="195" cy="80" r="14" />
                <text x="195" y="84" textAnchor="middle" fill="#67e8f9" fontSize="9" fontWeight="bold">MENTAL</text>
                <line x1="181" y1="84" x2="155" y2="95" strokeDasharray="3 3" />

                {/* Social node */}
                <circle cx="120" cy="225" r="14" />
                <text x="120" y="229" textAnchor="middle" fill="#38bdf8" fontSize="9" fontWeight="bold">SOCIAL</text>
                <line x1="120" y1="211" x2="120" y2="195" strokeDasharray="3 3" />
              </g>

              {/* ECG Pulse line */}
              <path d="M 30 135 L 70 135 L 78 120 L 86 150 L 94 110 L 102 145 L 110 135 L 210 135" 
                    fill="none" stroke="#2dd4bf" strokeWidth="1.8" strokeLinecap="round" className="opacity-80" />
            </svg>
          </div>
        </div>
      </div>

      {/* Student Presentation Card Footer */}
      <div className="relative z-10 bg-slate-900/90 backdrop-blur-md border border-slate-800/90 rounded-xl p-4 shadow-lg">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs sm:text-sm">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-teal-500/10 text-teal-400">
              <User className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-slate-400 block">Estudiante</span>
              <span className="font-semibold text-white truncate block">{metadata.studentName}</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-slate-400 block">Curso</span>
              <span className="font-semibold text-white truncate block">{metadata.grade}</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-slate-400 block">Docente</span>
              <span className="font-semibold text-white truncate block">{metadata.teacherName}</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-slate-400 block">Fecha</span>
              <span className="font-semibold text-white truncate block">{metadata.date}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { slidesMeta } from '../data/slidesData';
import { X, Mic, Clock, Quote, Sparkles, CheckCircle2 } from 'lucide-react';

interface SpeakerNotesModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentSlide: number;
}

export const SpeakerNotesModal: React.FC<SpeakerNotesModalProps> = ({
  isOpen,
  onClose,
  currentSlide,
}) => {
  if (!isOpen) return null;

  const currentSlideData = slidesMeta.find((s) => s.id === currentSlide) || slidesMeta[0];
  const { speakerNote } = currentSlideData;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-teal-500/40 rounded-2xl w-full max-w-xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-slate-900/90">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-teal-500/20 text-teal-400">
              <Mic className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-teal-400 uppercase tracking-widest font-bold block">
                Guía Oral de Exposición • Diapositiva {currentSlide < 10 ? `0${currentSlide}` : currentSlide}
              </span>
              <h3 className="text-sm font-bold text-white truncate max-w-xs sm:max-w-sm">
                {currentSlideData.shortTitle}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 text-xs text-slate-400 bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800 font-mono">
              <Clock className="w-3.5 h-3.5 text-teal-400" />
              <span>{speakerNote.durationEstimate}</span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 overflow-y-auto space-y-4">
          {/* Cue Prompt */}
          <div className="bg-slate-950/80 border border-slate-800 p-3.5 rounded-xl">
            <div className="flex items-center gap-1.5 text-xs font-bold text-teal-300 uppercase tracking-wider mb-1">
              <Quote className="w-3.5 h-3.5 text-teal-400" />
              <span>Frase sugerida para iniciar la diapositiva:</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed">
              {speakerNote.cuePrompt}
            </p>
          </div>

          {/* Key Bullet Points to Speak */}
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Puntos clave para explicar a la clase:</span>
            </div>
            <div className="space-y-2">
              {speakerNote.bulletPoints.map((point, i) => (
                <div key={i} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer tip */}
        <div className="p-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>Consejo: Habla con ritmo pausado y mira a tus compañeros y a la maestra.</span>
          <span className="font-mono text-teal-400">Atajo: Tecla [N]</span>
        </div>
      </div>
    </div>
  );
};

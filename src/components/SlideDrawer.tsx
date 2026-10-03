import React from 'react';
import { slidesMeta } from '../data/slidesData';
import { X, CheckCircle2 } from 'lucide-react';

interface SlideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  currentSlide: number;
  onSelectSlide: (slideNumber: number) => void;
}

export const SlideDrawer: React.FC<SlideDrawerProps> = ({
  isOpen,
  onClose,
  currentSlide,
  onSelectSlide,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-4xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-white">Índice General de Diapositivas</h3>
            <p className="text-xs text-slate-400">Selecciona cualquier sección para saltar directamente durante la exposición</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Grid */}
        <div className="p-4 sm:p-6 overflow-y-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {slidesMeta.map((slide) => {
            const isCurrent = slide.id === currentSlide;
            return (
              <button
                key={slide.id}
                onClick={() => {
                  onSelectSlide(slide.id);
                  onClose();
                }}
                className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between h-28 relative ${
                  isCurrent
                    ? 'bg-teal-950/60 border-teal-400 ring-2 ring-teal-400/40 shadow-lg'
                    : 'bg-slate-950/70 border-slate-800 hover:border-slate-700 hover:bg-slate-800/60'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-[11px] font-mono font-bold ${isCurrent ? 'text-teal-300' : 'text-slate-400'}`}>
                    {slide.id < 10 ? `0${slide.id}` : slide.id}
                  </span>
                  <span className="text-[9px] uppercase tracking-wider font-semibold px-1.5 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                    {slide.category}
                  </span>
                </div>

                <div className="my-1">
                  <h4 className="text-xs font-bold text-white line-clamp-2 leading-tight">
                    {slide.shortTitle}
                  </h4>
                </div>

                {isCurrent && (
                  <div className="flex items-center gap-1 text-[10px] text-teal-400 font-medium">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>En pantalla</span>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

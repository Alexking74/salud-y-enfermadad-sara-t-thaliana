import React from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Home,
  Maximize2,
  Minimize2,
  Mic,
  Monitor,
  LayoutGrid,
  Download,
  Lightbulb,
} from 'lucide-react';

interface NavigationControlsProps {
  currentSlide: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
  onHome: () => void;
  onToggleDrawer: () => void;
  onToggleNotes: () => void;
  isNotesOpen: boolean;
  onToggleKeyIdeas: () => void;
  isKeyIdeasOpen: boolean;
  onToggleProjector: () => void;
  isProjectorMode: boolean;
  onToggleFullscreen: () => void;
  isFullscreen: boolean;
  onExportHtml: () => void;
}

export const NavigationControls: React.FC<NavigationControlsProps> = ({
  currentSlide,
  totalSlides,
  onPrev,
  onNext,
  onHome,
  onToggleDrawer,
  onToggleNotes,
  isNotesOpen,
  onToggleKeyIdeas,
  isKeyIdeasOpen,
  onToggleProjector,
  isProjectorMode,
  onToggleFullscreen,
  isFullscreen,
  onExportHtml,
}) => {
  const progressPercent = ((currentSlide - 1) / (totalSlides - 1)) * 100;

  return (
    <footer className="w-full bg-slate-950/95 backdrop-blur-md border-t border-slate-800/90 py-2 sm:py-3 px-3 sm:px-6 flex flex-col gap-2 relative z-40 select-none">
      {/* Interactive Progress Bar */}
      <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden relative cursor-pointer" onClick={onToggleDrawer} title="Clic para ver todas las diapositivas">
        <div
          className="bg-gradient-to-r from-teal-500 via-cyan-400 to-blue-500 h-full transition-all duration-300 rounded-full"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <div className="flex items-center justify-between">
        {/* Left Utility Actions: Home, All Slides, Notes, Projector Mode */}
        <div className="flex items-center gap-1 sm:gap-2">
          {/* Home Button */}
          <button
            onClick={onHome}
            disabled={currentSlide === 1}
            className={`p-2 rounded-lg transition-all cursor-pointer ${
              currentSlide === 1
                ? 'text-slate-600 opacity-40 cursor-not-allowed'
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
            title="Regresar a la Portada (Tecla H)"
          >
            <Home className="w-4 h-4" />
          </button>

          {/* All Slides / Grid Drawer */}
          <button
            onClick={onToggleDrawer}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs text-slate-300 hover:text-white hover:bg-slate-900 border border-slate-800 rounded-lg transition-all cursor-pointer font-medium"
            title="Ver índice de 12 diapositivas"
          >
            <LayoutGrid className="w-3.5 h-3.5 text-teal-400" />
            <span className="hidden sm:inline">Diapositivas</span>
          </button>

          {/* Speaker Notes Button */}
          <button
            onClick={onToggleNotes}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 text-xs rounded-lg transition-all cursor-pointer font-medium border ${
              isNotesOpen
                ? 'bg-teal-500/20 border-teal-400 text-teal-300 shadow-sm'
                : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
            title="Notas orales para el estudiante (Tecla N)"
          >
            <Mic className="w-3.5 h-3.5 text-teal-400" />
            <span className="hidden md:inline">Guía Oral</span>
          </button>

          {/* Key Ideas Modal Button */}
          <button
            onClick={onToggleKeyIdeas}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 text-xs rounded-lg transition-all cursor-pointer font-bold border ${
              isKeyIdeasOpen
                ? 'bg-amber-500/20 border-amber-400 text-amber-300 shadow-sm'
                : 'bg-slate-950 border-amber-500/40 text-amber-300 hover:bg-amber-950/40'
            }`}
            title="Ver las ideas principales de esta diapositiva (Tecla I)"
          >
            <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline">Ideas Clave</span>
          </button>

          {/* Projector High-Contrast Mode */}
          <button
            onClick={onToggleProjector}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 text-xs rounded-lg transition-all cursor-pointer font-medium border ${
              isProjectorMode
                ? 'bg-amber-500/20 border-amber-400 text-amber-300 shadow-sm'
                : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
            title="Modo Proyector: Alto contraste y tipografía aumentada (Tecla P)"
          >
            <Monitor className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden lg:inline">Modo Proyector</span>
          </button>

          {/* Export Single-File HTML */}
          <button
            onClick={onExportHtml}
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 text-xs text-slate-300 hover:text-white hover:bg-slate-900 border border-slate-800 rounded-lg transition-all cursor-pointer font-medium"
            title="Descargar archivo HTML autónomo para memoria USB (sin internet)"
          >
            <Download className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden xl:inline">Exportar HTML</span>
          </button>
        </div>

        {/* Center: Slide Index indicator */}
        <div
          onClick={onToggleDrawer}
          className="flex items-center gap-1.5 px-3 py-1 bg-slate-900/90 border border-slate-800 rounded-full cursor-pointer hover:border-teal-500/50 transition-all shadow-inner"
          title="Clic para cambiar de diapositiva"
        >
          <span className="text-xs sm:text-sm font-mono font-bold text-teal-400">
            {currentSlide < 10 ? `0${currentSlide}` : currentSlide}
          </span>
          <span className="text-xs text-slate-500 font-mono">/</span>
          <span className="text-xs sm:text-sm font-mono text-slate-400 font-medium">
            {totalSlides < 10 ? `0${totalSlides}` : totalSlides}
          </span>
        </div>

        {/* Right Primary Slide Navigation: Prev, Next & Fullscreen */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Previous Button */}
          <button
            onClick={onPrev}
            disabled={currentSlide === 1}
            className={`flex items-center gap-1 px-3 py-1.5 sm:py-2 text-xs sm:text-sm rounded-xl font-semibold border transition-all cursor-pointer ${
              currentSlide === 1
                ? 'bg-slate-900/40 border-slate-800 text-slate-600 opacity-40 cursor-not-allowed'
                : 'bg-slate-900 border-slate-700 text-slate-200 hover:bg-slate-800 hover:text-white shadow-sm'
            }`}
            title="Diapositiva anterior (Tecla Flecha Izquierda)"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Anterior</span>
          </button>

          {/* Next Button */}
          <button
            onClick={onNext}
            disabled={currentSlide === totalSlides}
            className={`flex items-center gap-1 px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-xl font-bold transition-all cursor-pointer ${
              currentSlide === totalSlides
                ? 'bg-slate-900/40 border border-slate-800 text-slate-600 opacity-40 cursor-not-allowed'
                : 'bg-teal-500 hover:bg-teal-400 text-slate-950 shadow-md shadow-teal-500/20 hover:scale-[1.02]'
            }`}
            title="Diapositiva siguiente (Tecla Flecha Derecha o Barra Espaciadora)"
          >
            <span>{currentSlide === totalSlides ? 'Final' : 'Siguiente'}</span>
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Fullscreen Toggle */}
          <button
            onClick={onToggleFullscreen}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-900 rounded-lg transition-all cursor-pointer ml-1"
            title={isFullscreen ? 'Salir de pantalla completa' : 'Pantalla completa para exposición'}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </footer>
  );
};

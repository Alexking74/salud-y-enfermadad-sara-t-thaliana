import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PresentationMetadata } from './types';
import { defaultMetadata, slidesMeta } from './data/slidesData';
import { Slide1Cover } from './components/slides/Slide1Cover';
import { Slide2HealthConcept } from './components/slides/Slide2HealthConcept';
import { Slide3DiseaseConcept } from './components/slides/Slide3DiseaseConcept';
import { Slide4DiseaseTypes } from './components/slides/Slide4DiseaseTypes';
import { Slide5BodyImpact } from './components/slides/Slide5BodyImpact';
import { Slide6SubstancesOverview } from './components/slides/Slide6SubstancesOverview';
import { Slide7NervousSystem } from './components/slides/Slide7NervousSystem';
import { Slide8OtherSystems } from './components/slides/Slide8OtherSystems';
import { Slide9RiskFactors } from './components/slides/Slide9RiskFactors';
import { Slide10HealthyHabits } from './components/slides/Slide10HealthyHabits';
import { Slide11ActionPlan } from './components/slides/Slide11ActionPlan';
import { Slide12Conclusion } from './components/slides/Slide12Conclusion';
import { NavigationControls } from './components/NavigationControls';
import { SlideDrawer } from './components/SlideDrawer';
import { SpeakerNotesModal } from './components/SpeakerNotesModal';
import { KeyIdeasModal } from './components/KeyIdeasModal';
import { MetadataModal } from './components/MetadataModal';
import { exportStandaloneHtml } from './utils/exportHtml';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState<number>(1);
  const [slideDirection, setSlideDirection] = useState<number>(1);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [isNotesOpen, setIsNotesOpen] = useState<boolean>(false);
  const [isKeyIdeasOpen, setIsKeyIdeasOpen] = useState<boolean>(false);
  const [isProjectorMode, setIsProjectorMode] = useState<boolean>(false);
  const [isMetaModalOpen, setIsMetaModalOpen] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  // Load custom metadata from localStorage if exists
  const [metadata, setMetadata] = useState<PresentationMetadata>(() => {
    try {
      const saved = localStorage.getItem('ciencias_presentacion_metadata');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // ignore
    }
    return defaultMetadata;
  });

  const saveMetadata = (newMeta: PresentationMetadata) => {
    setMetadata(newMeta);
    try {
      localStorage.setItem('ciencias_presentacion_metadata', JSON.stringify(newMeta));
    } catch {
      // ignore
    }
  };

  const totalSlides = slidesMeta.length;

  const handleNext = useCallback(() => {
    if (currentSlide < totalSlides) {
      setSlideDirection(1);
      setCurrentSlide((prev) => prev + 1);
    }
  }, [currentSlide, totalSlides]);

  const handlePrev = useCallback(() => {
    if (currentSlide > 1) {
      setSlideDirection(-1);
      setCurrentSlide((prev) => prev - 1);
    }
  }, [currentSlide]);

  const handleHome = useCallback(() => {
    setSlideDirection(-1);
    setCurrentSlide(1);
  }, []);

  const handleSelectSlide = (num: number) => {
    setSlideDirection(num > currentSlide ? 1 : -1);
    setCurrentSlide(num);
  };

  // Fullscreen toggler
  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
      setIsFullscreen(false);
    }
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      switch (e.key) {
        case 'ArrowRight':
        case ' ':
        case 'PageDown':
          e.preventDefault();
          handleNext();
          break;
        case 'ArrowLeft':
        case 'PageUp':
        case 'Backspace':
          e.preventDefault();
          handlePrev();
          break;
        case 'Home':
          e.preventDefault();
          handleHome();
          break;
        case 'End':
          e.preventDefault();
          handleSelectSlide(totalSlides);
          break;
        case 'n':
        case 'N':
          setIsNotesOpen((prev) => !prev);
          break;
        case 'i':
        case 'I':
          setIsKeyIdeasOpen((prev) => !prev);
          break;
        case 'p':
        case 'P':
          setIsProjectorMode((prev) => !prev);
          break;
        case 'f':
        case 'F':
          toggleFullscreen();
          break;
        case 'Escape':
          setIsDrawerOpen(false);
          setIsNotesOpen(false);
          setIsKeyIdeasOpen(false);
          setIsMetaModalOpen(false);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, handleHome, toggleFullscreen, totalSlides]);

  // Touch Swipe Handling for Mobile & Tablets
  const touchStartX = useRef<number>(0);
  const touchStartY = useRef<number>(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diffX = touchStartX.current - e.changedTouches[0].clientX;
    const diffY = touchStartY.current - e.changedTouches[0].clientY;

    // Detect horizontal swipe if deltaX > 50 and greater than vertical scroll
    if (Math.abs(diffX) > 50 && Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  // Render active slide
  const renderSlideContent = () => {
    switch (currentSlide) {
      case 1:
        return (
          <Slide1Cover
            metadata={metadata}
            onEditMetadata={() => setIsMetaModalOpen(true)}
            isProjectorMode={isProjectorMode}
          />
        );
      case 2:
        return <Slide2HealthConcept isProjectorMode={isProjectorMode} />;
      case 3:
        return <Slide3DiseaseConcept isProjectorMode={isProjectorMode} />;
      case 4:
        return <Slide4DiseaseTypes isProjectorMode={isProjectorMode} />;
      case 5:
        return <Slide5BodyImpact isProjectorMode={isProjectorMode} />;
      case 6:
        return <Slide6SubstancesOverview isProjectorMode={isProjectorMode} />;
      case 7:
        return <Slide7NervousSystem isProjectorMode={isProjectorMode} />;
      case 8:
        return <Slide8OtherSystems isProjectorMode={isProjectorMode} />;
      case 9:
        return <Slide9RiskFactors isProjectorMode={isProjectorMode} />;
      case 10:
        return <Slide10HealthyHabits isProjectorMode={isProjectorMode} />;
      case 11:
        return <Slide11ActionPlan isProjectorMode={isProjectorMode} />;
      case 12:
        return <Slide12Conclusion isProjectorMode={isProjectorMode} />;
      default:
        return null;
    }
  };

  return (
    <div
      id="presentation-app"
      className={`h-screen w-screen flex flex-col justify-between overflow-hidden bg-slate-950 text-slate-100 select-none ${
        isProjectorMode ? 'contrast-115 brightness-105' : ''
      }`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Banner when in Projector Mode */}
      {isProjectorMode && (
        <div className="bg-amber-500 text-slate-950 text-[11px] font-bold py-1 px-3 text-center tracking-wide flex items-center justify-center gap-2">
          <span>📺 MODO PROYECTOR ACTIVO (Alto contraste para aulas de clase)</span>
          <button
            onClick={() => setIsProjectorMode(false)}
            className="underline hover:opacity-80 cursor-pointer ml-2"
          >
            Desactivar
          </button>
        </div>
      )}

      {/* Main Slide Canvas Frame */}
      <main className="flex-1 w-full max-w-7xl mx-auto flex flex-col justify-center relative overflow-hidden p-1 sm:p-3">
        <AnimatePresence mode="wait" custom={slideDirection}>
          <motion.div
            key={currentSlide}
            custom={slideDirection}
            initial={{ opacity: 0, x: slideDirection > 0 ? 40 : -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: slideDirection > 0 ? -40 : 40 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            className="h-full w-full flex flex-col justify-center"
          >
            <div className="h-full w-full bg-slate-950/40 rounded-2xl border border-slate-800/60 shadow-2xl flex flex-col justify-center overflow-y-auto">
              {renderSlideContent()}
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Navigation Controls Bar */}
      <NavigationControls
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onPrev={handlePrev}
        onNext={handleNext}
        onHome={handleHome}
        onToggleDrawer={() => setIsDrawerOpen(true)}
        onToggleNotes={() => setIsNotesOpen((prev) => !prev)}
        isNotesOpen={isNotesOpen}
        onToggleKeyIdeas={() => setIsKeyIdeasOpen((prev) => !prev)}
        isKeyIdeasOpen={isKeyIdeasOpen}
        onToggleProjector={() => setIsProjectorMode((prev) => !prev)}
        isProjectorMode={isProjectorMode}
        onToggleFullscreen={toggleFullscreen}
        isFullscreen={isFullscreen}
        onExportHtml={() => exportStandaloneHtml(metadata)}
      />

      {/* Key Ideas Modal */}
      <KeyIdeasModal
        isOpen={isKeyIdeasOpen}
        onClose={() => setIsKeyIdeasOpen(false)}
        currentSlide={currentSlide}
        onSelectSlide={handleSelectSlide}
      />

      {/* Slide Thumbnails Drawer Modal */}
      <SlideDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        currentSlide={currentSlide}
        onSelectSlide={handleSelectSlide}
      />

      {/* Speaker Notes Modal */}
      <SpeakerNotesModal
        isOpen={isNotesOpen}
        onClose={() => setIsNotesOpen(false)}
        currentSlide={currentSlide}
      />

      {/* Presentation Metadata Editor Modal */}
      <MetadataModal
        isOpen={isMetaModalOpen}
        onClose={() => setIsMetaModalOpen(false)}
        metadata={metadata}
        onSave={saveMetadata}
      />
    </div>
  );
}

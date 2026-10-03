import React from 'react';
import { X, Sparkles, Lightbulb, CheckCircle2, ChevronRight } from 'lucide-react';
import { slidesMeta } from '../data/slidesData';

interface KeyIdeasModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentSlide: number;
  onSelectSlide: (num: number) => void;
}

export const KeyIdeasModal: React.FC<KeyIdeasModalProps> = ({
  isOpen,
  onClose,
  currentSlide,
  onSelectSlide,
}) => {
  if (!isOpen) return null;

  const currentMeta = slidesMeta.find((s) => s.id === currentSlide) || slidesMeta[0];

  const keyIdeasMap: { [key: number]: { headline: string; ideas: string[]; callToAction: string } } = {
    1: {
      headline: 'Portada y Marco Teórico de Ciencias Naturales',
      ideas: [
        'El cuerpo humano es un sistema homeostático que busca el equilibrio vital constante.',
        'La salud no es un estado estático, sino una construcción activa diaria bio-psicosocial.',
        'Las sustancias exógenas alteran la química cerebral y la funcionalidad celular.'
      ],
      callToAction: 'Objetivo escolar: Comprender la biología para tomar decisiones conscientes de autocuidado.'
    },
    2: {
      headline: 'Definición Integral de Salud (OMS)',
      ideas: [
        'Tríada de Bienestar: Equilibrio dinámico entre salud Física, Mental y Social.',
        'Salud no es únicamente la ausencia de síntomas o enfermedades visibles.',
        'Si una de las tres dimensiones flaquea, el bienestar biológico global se deteriora.'
      ],
      callToAction: 'Regla de oro: Cuidar cuerpo, emociones y relaciones como un solo sistema.'
    },
    3: {
      headline: 'Concepto y Evolución de la Enfermedad',
      ideas: [
        'La enfermedad es la quiebra de la homeostasis celular y funcional.',
        'Proceso biológico: Homeostasis ➔ Agresión externa/interna ➔ Síntomas de alarma ➔ Daño patológico.',
        'Los síntomas (fiebre, dolor) son mecanismos de defensa y avisos del organismo, no el enemigo.'
      ],
      callToAction: 'Regla de oro: Atender los signos tempranos evita secuelas crónicas.'
    },
    4: {
      headline: '5 Grandes Grupos de Enfermedades',
      ideas: [
        'Infecciosas: Causadas por patógenos transmisibles (virus, bacterias, parásitos).',
        'No Infecciosas / Metabólicas: Originadas por disfunciones celulares internas y hábitos (diabetes).',
        'Genéticas: Mutaciones hereditarias en el código de ADN desde la fecundación.',
        'Crónicas: De progresión lenta y duración prolongada mayor a 6 meses (asma, artritis).',
        'Ambientales: Desencadenadas por toxinas del aire, agua y hábitos de consumo (EPOC).'
      ],
      callToAction: 'Regla de oro: Saber clasificar la patología determina el tipo de prevención adecuado.'
    },
    5: {
      headline: 'Impacto Sistémico en Órganos Diana',
      ideas: [
        'Respiratorio y Cardiovascular: Pérdida de oxígeno celular y sobrecarga de bombeo arterial.',
        'Nervioso Central: Retraso en impulsos sinápticos y alteración de reflejos.',
        'Digestivo y Hepático: Sobrecarga tóxica en el hígado y mala absorción nutricional.',
        'Inmunológico: Descenso de defensas (inmunosupresión) ante infecciones comunes.'
      ],
      callToAction: 'Regla de oro: El fallo de un solo órgano diana desencadena un efecto dominó sistémico.'
    },
    6: {
      headline: 'Clasificación de Sustancias Químicas',
      ideas: [
        'Medicamentos: Uso terapéutico con indicación médica rigurosa (peligro: automedicación).',
        'Uso Cotidiano: Cafeína, energizantes y azúcares alteran transitoriamente el metabolismo.',
        'Alcohol y Tabaco: Tóxicos celulares directos que destruyen cilios y saturan el hígado.',
        'Psicoactivas: Modifican drásticamente el juicio, la percepción y generan adicción veloz.'
      ],
      callToAction: 'Regla de oro: En menores de 21 años, el cerebro en desarrollo sufre el triple de toxicidad.'
    },
    7: {
      headline: 'Neurobiología y Sinapsis Neuronal',
      ideas: [
        'Las moléculas químicas cruzan la barrera hematoencefálica y desregulan neurotransmisores.',
        'Percepción distorsionada: Errores graves al calcular distancias, velocidad y peligro.',
        'Apagado del juicio crítico: Desinhibición falsa que lleva a conductas de alto riesgo.',
        'Tolerancia y adicción: Las neuronas exigen más dosis para evitar el dolor de abstinencia.'
      ],
      callToAction: 'Regla de oro: Las sustancias no aumentan talentos; apagan tus frenos de seguridad biológica.'
    },
    8: {
      headline: 'Efectos en Otros Sistemas (Agudo vs. Crónico)',
      ideas: [
        'Efecto Agudo: Respuestas inmediatas como taquicardia, vómitos, irritación y mareos.',
        'Efecto Crónico: Daño silencioso y acumulativo (enfisema pulmonar, cirrosis, atrofia cerebral).',
        'El tejido pulmonar y neuronal destruido por toxinas no se regenera fácilmente.'
      ],
      callToAction: 'Regla de oro: Que un tóxico no cause dolor inmediato no significa que sea inocuo.'
    },
    9: {
      headline: 'Factores de Riesgo y Sinergia',
      ideas: [
        'Regla de multiplicación: Los factores de riesgo no se suman, se potencian exponencialmente.',
        'El 80% de los factores son Modificables (dieta, sedentarismo, horas de sueño, sustancias).',
        'La genética aporta predisposición, pero el estilo de vida determina si se activa la enfermedad.'
      ],
      callToAction: 'Regla de oro: Tus decisiones diarias pesan más que tu herencia biológica.'
    },
    10: {
      headline: 'Los 9 Pilares de Hábitos Saludables',
      ideas: [
        'Nutrición real, 60 min de actividad diaria y 8-10 horas de sueño continuo.',
        '1.5 a 2 litros de agua pura al día para la filtración celular y renal.',
        'Lavado de manos frecuente: barrera simple que frena el 80% de infecciones.',
        'Salud mental activa: cultivar amistades sinceras y expresar las emociones sin miedo.'
      ],
      callToAction: 'Regla de oro: La constancia en hábitos sencillos crea un escudo biológico de por vida.'
    },
    11: {
      headline: 'Plan de Acción: 3 Niveles Prácticos',
      ideas: [
        '01. Informarnos: Conocer la ciencia de tu cuerpo para no caer en mitos ni engaños.',
        '02. Prevenir: Aprender a decir «NO» con asertividad frente a la presión de grupo.',
        '03. Buscar Ayuda: Consultar a médicos, orientadores o familiares de confianza ante cualquier malestar.'
      ],
      callToAction: 'Regla de oro: Pedir ayuda a tiempo es un acto de valentía y responsabilidad biológica.'
    },
    12: {
      headline: 'Conclusión y Síntesis Final',
      ideas: [
        'Ecuación vital: SALUD (equilibrio) + PREVENCIÓN (anticipación) = CUIDADO DEL ORGANISMO.',
        'El cuerpo humano es nuestro único hogar biológico irreemplazable.',
        'Las pequeñas decisiones cotidianas tienen un impacto acumulativo directo en la longevidad.'
      ],
      callToAction: 'Pregunta de cierre: «¿Qué decisión saludable tomaremos hoy para proteger nuestro organismo?»'
    }
  };

  const currentIdeas = keyIdeasMap[currentSlide] || keyIdeasMap[1];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-slate-900 border border-teal-500/40 rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800 bg-slate-950/60">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-teal-500/20 text-teal-400 border border-teal-500/30">
              <Lightbulb className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-teal-400 block">
                Ficha de Ideas Principales — Diapositiva {currentSlide} / 12
              </span>
              <h3 className="text-base sm:text-lg font-black text-white leading-tight">
                {currentMeta.title}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 space-y-4 overflow-y-auto">
          <div className="bg-slate-950/70 border border-slate-800 p-3 rounded-xl">
            <span className="text-xs font-bold text-teal-300 block mb-0.5">Enfoque Central de la Diapositiva:</span>
            <p className="text-xs text-slate-300 font-medium">{currentIdeas.headline}</p>
          </div>

          <div className="space-y-2">
            <span className="text-xs uppercase font-mono font-bold text-slate-400 block">
              3 Ideas Clave para la Audiencia (Sin Muros de Texto):
            </span>
            {currentIdeas.ideas.map((idea, idx) => (
              <div
                key={idx}
                className="bg-slate-950/50 border border-slate-800/80 p-3 rounded-xl flex items-start gap-2.5"
              >
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-200 font-medium leading-snug">
                  {idea}
                </span>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-teal-950/60 to-slate-950 border border-teal-500/30 p-3.5 rounded-xl">
            <div className="flex items-center gap-2 text-teal-300 text-xs font-bold uppercase mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Conclusión y Aplicación Práctica:</span>
            </div>
            <p className="text-xs sm:text-sm text-white font-semibold italic">
              {currentIdeas.callToAction}
            </p>
          </div>
        </div>

        {/* Modal Footer with Slide Jump Shortcuts */}
        <div className="px-5 py-3 border-t border-slate-800 bg-slate-950/80 flex items-center justify-between text-xs text-slate-400">
          <span>Usa esta ficha para responder preguntas o guiar el debate escolar.</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold rounded-lg cursor-pointer transition-all"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};

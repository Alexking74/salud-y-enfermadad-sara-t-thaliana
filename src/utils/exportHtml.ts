import { PresentationMetadata } from '../types';

export function exportStandaloneHtml(metadata: PresentationMetadata): void {
  const htmlContent = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>Salud, Enfermedades y Sustancias - Ciencias Naturales</title>
  <meta name="description" content="Presentación académica para exposición de Ciencias Naturales">
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Plus Jakarta Sans', sans-serif; }
    .slide-section { display: none; }
    .slide-section.active { display: flex; }
    .glow-teal { box-shadow: 0 0 35px -5px rgba(20, 184, 166, 0.3); }
  </style>
</head>
<body class="bg-slate-950 text-slate-100 h-screen w-screen overflow-hidden flex flex-col justify-between selection:bg-teal-500 selection:text-slate-950">

  <!-- Top Progress Bar -->
  <div class="w-full bg-slate-900 h-1.5 z-50">
    <div id="progress-bar" class="bg-teal-400 h-full transition-all duration-300 w-[8.33%]"></div>
  </div>

  <!-- Main Slides Container -->
  <main class="flex-1 w-full max-w-7xl mx-auto p-4 sm:p-6 md:p-8 flex flex-col justify-center relative overflow-hidden">
    
    <!-- Slide 1: Portada -->
    <section id="slide-1" class="slide-section active h-full flex-col justify-between">
      <div class="flex items-center justify-between border-b border-teal-500/20 pb-3">
        <span class="text-xs font-bold tracking-widest text-teal-400 uppercase">Exposición Escolar • ${metadata.schoolSubject}</span>
        <span class="text-xs text-slate-400">Ciencias Naturales</span>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-center my-auto">
        <div class="md:col-span-8 space-y-4">
          <span class="px-3 py-1 rounded-full bg-teal-950 border border-teal-500/40 text-teal-300 text-xs font-semibold">Biología & Homeostasis</span>
          <h1 class="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            SALUD, ENFERMEDADES <br>
            <span class="text-teal-400">Y SUSTANCIAS</span> <br>
            QUE AFECTAN EL ORGANISMO
          </h1>
          <p class="text-slate-300 text-sm sm:text-base max-w-xl">
            Una mirada científica y educativa a la homeostasis humana, las alteraciones patológicas, la acción química de sustancias y la prevención integral.
          </p>
        </div>
        <div class="md:col-span-4 flex justify-center">
          <div class="w-48 h-48 rounded-full border-2 border-dashed border-teal-400/40 flex items-center justify-center p-6 text-center bg-teal-950/30 glow-teal">
            <div class="text-teal-300 font-bold text-sm">SISTEMA INTEGRAL<br><span class="text-xs text-slate-400">Equilibrio Biológico</span></div>
          </div>
        </div>
      </div>
      <div class="bg-slate-900 border border-slate-800 rounded-xl p-3.5 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
        <div><span class="text-slate-400 block text-[10px] uppercase">Estudiante:</span><strong class="text-white">${metadata.studentName}</strong></div>
        <div><span class="text-slate-400 block text-[10px] uppercase">Curso:</span><strong class="text-white">${metadata.grade}</strong></div>
        <div><span class="text-slate-400 block text-[10px] uppercase">Docente:</span><strong class="text-white">${metadata.teacherName}</strong></div>
        <div><span class="text-slate-400 block text-[10px] uppercase">Fecha:</span><strong class="text-white">${metadata.date}</strong></div>
      </div>
    </section>

    <!-- Slide 2: ¿Qué es la salud? -->
    <section id="slide-2" class="slide-section h-full flex-col justify-between">
      <div class="border-b border-slate-800 pb-2">
        <span class="text-xs font-semibold text-teal-400 uppercase">Fundamentos</span>
        <h2 class="text-2xl sm:text-3xl font-bold text-white">¿Qué es la Salud?</h2>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 my-auto">
        <div class="bg-slate-900/80 border border-teal-500/40 p-5 rounded-2xl">
          <div class="text-2xl mb-2">❤️</div>
          <h3 class="text-base font-bold text-white mb-1">Salud Física</h3>
          <p class="text-xs text-slate-300">Funcionamiento óptimo de los órganos, nutrición, descanso y vitalidad corporal constante.</p>
        </div>
        <div class="bg-slate-900/80 border border-cyan-500/40 p-5 rounded-2xl">
          <div class="text-2xl mb-2">🧠</div>
          <h3 class="text-base font-bold text-white mb-1">Salud Mental</h3>
          <p class="text-xs text-slate-300">Equilibrio emocional, gestión del estrés, autoconocimiento y claridad en la toma de decisiones.</p>
        </div>
        <div class="bg-slate-900/80 border border-blue-500/40 p-5 rounded-2xl">
          <div class="text-2xl mb-2">👥</div>
          <h3 class="text-base font-bold text-white mb-1">Salud Social</h3>
          <p class="text-xs text-slate-300">Relaciones interpersonales sanas, integración en la comunidad y un entorno seguro de apoyo.</p>
        </div>
      </div>
      <div class="bg-slate-900 border border-slate-800 p-3 rounded-xl text-xs text-slate-300">
        <strong class="text-teal-400">OMS:</strong> «La salud es un estado de completo bienestar físico, mental y social, y no solamente la ausencia de afecciones o enfermedades.»
      </div>
    </section>

    <!-- Slide 3: ¿Qué es una enfermedad? -->
    <section id="slide-3" class="slide-section h-full flex-col justify-between">
      <div class="border-b border-slate-800 pb-2">
        <span class="text-xs font-semibold text-teal-400 uppercase">Fisiopatología</span>
        <h2 class="text-2xl sm:text-3xl font-bold text-white">¿Qué es una Enfermedad?</h2>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-4 gap-3 my-auto">
        <div class="bg-slate-900 border border-emerald-500/40 p-4 rounded-xl">
          <span class="text-xs text-emerald-400 font-bold block mb-1">01. Organismo Sano</span>
          <p class="text-xs text-slate-300">Homeostasis y equilibrio celular en autorregulación.</p>
        </div>
        <div class="bg-slate-900 border border-amber-500/40 p-4 rounded-xl">
          <span class="text-xs text-amber-400 font-bold block mb-1">02. Alteración</span>
          <p class="text-xs text-slate-300">Agresión por patógeno, toxina, estrés o fallo genético.</p>
        </div>
        <div class="bg-slate-900 border border-orange-500/40 p-4 rounded-xl">
          <span class="text-xs text-orange-400 font-bold block mb-1">03. Síntomas</span>
          <p class="text-xs text-slate-300">Fiebre, dolor, inflamación: señales de alerta del cuerpo.</p>
        </div>
        <div class="bg-slate-900 border border-rose-500/40 p-4 rounded-xl">
          <span class="text-xs text-rose-400 font-bold block mb-1">04. Enfermedad</span>
          <p class="text-xs text-slate-300">Pérdida de función que requiere reposo o medicina.</p>
        </div>
      </div>
      <div class="text-xs text-slate-400">Causas principales: Biológicas (virus/bacterias), Ambientales (contaminación), Conductuales (hábitos) y Genéticas (herencia).</div>
    </section>

    <!-- Slide 4: Tipos de enfermedades -->
    <section id="slide-4" class="slide-section h-full flex-col justify-between">
      <div class="border-b border-slate-800 pb-2">
        <span class="text-xs font-semibold text-teal-400 uppercase">Clasificación</span>
        <h2 class="text-2xl sm:text-3xl font-bold text-white">Tipos de Enfermedades</h2>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-5 gap-3 my-auto">
        <div class="bg-slate-900 border border-slate-800 p-3.5 rounded-xl">
          <span class="text-xs font-bold text-rose-400 block mb-1">Infecciosas</span>
          <p class="text-xs text-slate-300 mb-2">Causadas por patógenos que invaden el cuerpo.</p>
          <span class="text-[10px] text-slate-400 italic">Ej: Gripe, neumonía.</span>
        </div>
        <div class="bg-slate-900 border border-slate-800 p-3.5 rounded-xl">
          <span class="text-xs font-bold text-emerald-400 block mb-1">No Infecciosas</span>
          <p class="text-xs text-slate-300 mb-2">Disfunción celular o metabólica interna.</p>
          <span class="text-[10px] text-slate-400 italic">Ej: Diabetes tipo 2.</span>
        </div>
        <div class="bg-slate-900 border border-slate-800 p-3.5 rounded-xl">
          <span class="text-xs font-bold text-cyan-400 block mb-1">Genéticas</span>
          <p class="text-xs text-slate-300 mb-2">Alteraciones en el ADN transmitidas por herencia.</p>
          <span class="text-[10px] text-slate-400 italic">Ej: Hemofilia.</span>
        </div>
        <div class="bg-slate-900 border border-slate-800 p-3.5 rounded-xl">
          <span class="text-xs font-bold text-amber-400 block mb-1">Crónicas</span>
          <p class="text-xs text-slate-300 mb-2">Duran más de 6 meses y progresan lentamente.</p>
          <span class="text-[10px] text-slate-400 italic">Ej: Asma, artritis.</span>
        </div>
        <div class="bg-slate-900 border border-slate-800 p-3.5 rounded-xl">
          <span class="text-xs font-bold text-teal-400 block mb-1">Ambientales</span>
          <p class="text-xs text-slate-300 mb-2">Generadas por toxinas externas o hábitos dañinos.</p>
          <span class="text-[10px] text-slate-400 italic">Ej: EPOC por humo.</span>
        </div>
      </div>
      <div class="text-xs text-slate-400">Cada categoría exige enfoques preventivos y terapéuticos diferentes.</div>
    </section>

    <!-- Slide 5: Impacto en el organismo -->
    <section id="slide-5" class="slide-section h-full flex-col justify-between">
      <div class="border-b border-slate-800 pb-2">
        <span class="text-xs font-semibold text-teal-400 uppercase">Fisiología</span>
        <h2 class="text-2xl sm:text-3xl font-bold text-white">¿Cómo Afectan al Organismo?</h2>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-3.5 my-auto">
        <div class="bg-slate-900 p-3 rounded-xl border border-slate-800">
          <strong class="text-cyan-400 block text-xs mb-1">🫁 Sistema Respiratorio</strong>
          <span class="text-xs text-slate-300">Menor captación de oxígeno e inflamación bronquial.</span>
        </div>
        <div class="bg-slate-900 p-3 rounded-xl border border-slate-800">
          <strong class="text-rose-400 block text-xs mb-1">❤️ Sistema Cardiovascular</strong>
          <span class="text-xs text-slate-300">Presión elevada y sobrecarga de bombeo miocárdico.</span>
        </div>
        <div class="bg-slate-900 p-3 rounded-xl border border-slate-800">
          <strong class="text-violet-400 block text-xs mb-1">🧠 Sistema Nervioso</strong>
          <span class="text-xs text-slate-300">Descoordinación de impulsos eléctricos y cefaleas.</span>
        </div>
        <div class="bg-slate-900 p-3 rounded-xl border border-slate-800">
          <strong class="text-amber-400 block text-xs mb-1">🫀 Sistema Digestivo</strong>
          <span class="text-xs text-slate-300">Mala absorción de nutrientes y saturación hepática.</span>
        </div>
        <div class="bg-slate-900 p-3 rounded-xl border border-slate-800">
          <strong class="text-emerald-400 block text-xs mb-1">🛡️ Sistema Inmunológico</strong>
          <span class="text-xs text-slate-300">Agotamiento de glóbulos blancos o autoinmunidad.</span>
        </div>
        <div class="bg-slate-900 p-3 rounded-xl border border-slate-800">
          <strong class="text-teal-400 block text-xs mb-1">🦴 Tejidos y Músculos</strong>
          <span class="text-xs text-slate-300">Fatiga motora, descalcificación ósea y debilidad.</span>
        </div>
      </div>
      <div class="text-xs text-slate-400">El cuerpo es un sistema interconectado: la afectación de un órgano sobrecarga a los demás.</div>
    </section>

    <!-- Slide 6: Sustancias que afectan el organismo -->
    <section id="slide-6" class="slide-section h-full flex-col justify-between">
      <div class="border-b border-slate-800 pb-2">
        <span class="text-xs font-semibold text-teal-400 uppercase">Toxicología</span>
        <h2 class="text-2xl sm:text-3xl font-bold text-white">Sustancias que Afectan el Organismo</h2>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-4 gap-3 my-auto">
        <div class="bg-slate-900 border border-emerald-500/30 p-4 rounded-xl">
          <strong class="text-emerald-400 block text-xs mb-1">💊 Medicamentos</strong>
          <p class="text-xs text-slate-300">Uso médico controlado para aliviar o curar. Requieren prescripción.</p>
        </div>
        <div class="bg-slate-900 border border-amber-500/30 p-4 rounded-xl">
          <strong class="text-amber-400 block text-xs mb-1">☕ Uso Cotidiano</strong>
          <p class="text-xs text-slate-300">Cafeína, energizantes, azúcares. Modifican el metabolismo diario.</p>
        </div>
        <div class="bg-slate-900 border border-orange-500/30 p-4 rounded-xl">
          <strong class="text-orange-400 block text-xs mb-1">🍷🚬 Alcohol y Tabaco</strong>
          <p class="text-xs text-slate-300">Legales para adultos pero con alta toxicidad y dependencia celular.</p>
        </div>
        <div class="bg-slate-900 border border-rose-500/30 p-4 rounded-xl">
          <strong class="text-rose-400 block text-xs mb-1">⚠️ Psicoactivas</strong>
          <p class="text-xs text-slate-300">Alteran severamente el cerebro, la realidad y la conducta.</p>
        </div>
      </div>
      <div class="bg-slate-900 p-3 rounded-xl text-xs text-slate-300">
        <strong class="text-teal-400">Determinantes del efecto:</strong> Sustancia + Cantidad/Dosis + Vía de exposición + Frecuencia + Edad y Vulnerabilidad biológica.
      </div>
    </section>

    <!-- Slide 7: Sustancias y sistema nervioso -->
    <section id="slide-7" class="slide-section h-full flex-col justify-between">
      <div class="border-b border-slate-800 pb-2">
        <span class="text-xs font-semibold text-teal-400 uppercase">Neurobiología</span>
        <h2 class="text-2xl sm:text-3xl font-bold text-white">Sustancias y el Sistema Nervioso</h2>
      </div>
      <div class="my-auto space-y-4">
        <div class="bg-slate-900 p-3 rounded-xl border border-slate-800 text-xs text-teal-300 font-mono text-center">
          Sustancia ➔ Cerebro (Barrera Hematoencefálica) ➔ Alteración en Sinapsis Neuronal ➔ Efectos Conductuales
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
          <div class="bg-slate-900/90 p-3 rounded-xl border border-slate-800"><strong class="text-cyan-400 block mb-1">👁️ Percepción:</strong> Distorsión de señales y distancias.</div>
          <div class="bg-slate-900/90 p-3 rounded-xl border border-slate-800"><strong class="text-teal-400 block mb-1">🎯 Atención:</strong> Incapacidad de concentración y juicio.</div>
          <div class="bg-slate-900/90 p-3 rounded-xl border border-slate-800"><strong class="text-indigo-400 block mb-1">🧭 Coordinación:</strong> Retardo psicomotor y torpeza.</div>
          <div class="bg-slate-900/90 p-3 rounded-xl border border-slate-800"><strong class="text-amber-400 block mb-1">😊 Estado de Ánimo:</strong> Oscilaciones químicas e irritabilidad.</div>
          <div class="bg-slate-900/90 p-3 rounded-xl border border-slate-800"><strong class="text-violet-400 block mb-1">💾 Memoria:</strong> Bloqueo del hipocampo y lagunas.</div>
          <div class="bg-slate-900/90 p-3 rounded-xl border border-slate-800"><strong class="text-rose-400 block mb-1">🔄 Dependencia:</strong> Reajuste neuronal y adicción.</div>
        </div>
      </div>
      <div class="text-xs text-slate-400">El cerebro adolescente aún está en maduración; las sustancias alteran su desarrollo normal.</div>
    </section>

    <!-- Slide 8: Efectos sobre otros sistemas -->
    <section id="slide-8" class="slide-section h-full flex-col justify-between">
      <div class="border-b border-slate-800 pb-2">
        <span class="text-xs font-semibold text-teal-400 uppercase">Daño Orgánico</span>
        <h2 class="text-2xl sm:text-3xl font-bold text-white">Efectos sobre Otros Sistemas Vitales</h2>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-auto">
        <div class="bg-slate-900/90 border border-slate-800 p-4 rounded-xl space-y-2 text-xs">
          <div><strong class="text-cyan-400">🫁 Pulmones:</strong> Destrucción de cilios, enfisema y bronquitis crónica.</div>
          <div><strong class="text-rose-400">❤️ Corazón:</strong> Taquicardias, endurecimiento arterial e infarto prematuro.</div>
          <div><strong class="text-amber-400">🫀 Hígado:</strong> Hígado graso, esteatosis y cirrosis irreversible.</div>
        </div>
        <div class="bg-slate-900/90 border border-slate-800 p-4 rounded-xl space-y-2 text-xs">
          <div><strong class="text-emerald-400">🛡️ Sistema Inmune:</strong> Disminución severa de defensas frente a microbios.</div>
          <div><strong class="text-violet-400">🧠 Tejido Cerebral:</strong> Atrofia de la corteza y pérdida de neuronas.</div>
          <div><strong class="text-teal-400">🦴 Otros Tejidos:</strong> Deshidratación dérmica y descalcificación ósea.</div>
        </div>
      </div>
      <div class="bg-teal-950/40 border border-teal-500/30 p-3 rounded-xl text-xs text-slate-300">
        <strong class="text-teal-400">Daño Acumulativo:</strong> Aunque el cuerpo joven resiste temporalmente, las lesiones celulares son acumulativas y silenciosas.
      </div>
    </section>

    <!-- Slide 9: Factores de riesgo -->
    <section id="slide-9" class="slide-section h-full flex-col justify-between">
      <div class="border-b border-slate-800 pb-2">
        <span class="text-xs font-semibold text-teal-400 uppercase">Epidemiología</span>
        <h2 class="text-2xl sm:text-3xl font-bold text-white">Factores de Riesgo</h2>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-5 gap-3 my-auto text-xs">
        <div class="bg-slate-900 p-3 rounded-xl border border-slate-800"><strong class="text-amber-400 block mb-1">🥗 Mala Dieta:</strong> Exceso de ultraprocesados.</div>
        <div class="bg-slate-900 p-3 rounded-xl border border-slate-800"><strong class="text-orange-400 block mb-1">🏃 Sedentarismo:</strong> Falta de movimiento vital.</div>
        <div class="bg-slate-900 p-3 rounded-xl border border-slate-800"><strong class="text-indigo-400 block mb-1">😴 Falta de Sueño:</strong> Menos de 8 horas diarias.</div>
        <div class="bg-slate-900 p-3 rounded-xl border border-slate-800"><strong class="text-rose-400 block mb-1">⚡ Estrés Crónico:</strong> Cortisol inflamatorio.</div>
        <div class="bg-slate-900 p-3 rounded-xl border border-slate-800"><strong class="text-red-400 block mb-1">🚬 Tabaco:</strong> Toxinas pulmonares directas.</div>
        <div class="bg-slate-900 p-3 rounded-xl border border-slate-800"><strong class="text-pink-400 block mb-1">🍷 Exceso Alcohol:</strong> Sobrecarga tóxica hepática.</div>
        <div class="bg-slate-900 p-3 rounded-xl border border-slate-800"><strong class="text-yellow-400 block mb-1">⚠️ Automedicación:</strong> Daño renal y bacteriano.</div>
        <div class="bg-slate-900 p-3 rounded-xl border border-slate-800"><strong class="text-cyan-400 block mb-1">💨 Tóxicos:</strong> Inhalación de contaminantes.</div>
        <div class="bg-slate-900 p-3 rounded-xl border border-slate-800"><strong class="text-teal-400 block mb-1">🌍 Ambiente:</strong> Contaminación atmosférica.</div>
        <div class="bg-slate-900 p-3 rounded-xl border border-slate-800"><strong class="text-violet-400 block mb-1">🧬 Genética:</strong> Predisposición familiar biológica.</div>
      </div>
      <div class="text-xs text-slate-400">¡Más del 80% de los factores principales son modificables con nuestras decisiones cotidianas!</div>
    </section>

    <!-- Slide 10: Prevención y hábitos saludables -->
    <section id="slide-10" class="slide-section h-full flex-col justify-between">
      <div class="border-b border-slate-800 pb-2">
        <span class="text-xs font-semibold text-teal-400 uppercase">Prevención</span>
        <h2 class="text-2xl sm:text-3xl font-bold text-white">Hábitos Saludables Fundamentales</h2>
      </div>
      <div class="bg-teal-950/60 border border-teal-500/40 p-3 rounded-xl text-center">
        <h3 class="text-base sm:text-xl font-bold text-white">«Prevenir también es cuidar nuestro organismo.»</h3>
      </div>
      <div class="grid grid-cols-3 gap-2.5 my-auto text-xs">
        <div class="bg-slate-900 p-2.5 rounded-lg border border-slate-800">🥗 Alimentación equilibrada</div>
        <div class="bg-slate-900 p-2.5 rounded-lg border border-slate-800">🏃 Actividad física diaria</div>
        <div class="bg-slate-900 p-2.5 rounded-lg border border-slate-800">😴 Sueño reparador (8-10 h)</div>
        <div class="bg-slate-900 p-2.5 rounded-lg border border-slate-800">💧 Hidratación constante</div>
        <div class="bg-slate-900 p-2.5 rounded-lg border border-slate-800">🧼 Higiene y lavado de manos</div>
        <div class="bg-slate-900 p-2.5 rounded-lg border border-slate-800">🩺 Controles médicos al día</div>
        <div class="bg-slate-900 p-2.5 rounded-lg border border-slate-800">🚭 Evitar el tabaco</div>
        <div class="bg-slate-900 p-2.5 rounded-lg border border-slate-800">⚠️ Uso responsable de fármacos</div>
        <div class="bg-slate-900 p-2.5 rounded-lg border border-slate-800">🧠 Cuidado de salud mental</div>
      </div>
      <div class="text-xs text-slate-400">Pequeñas rutinas diarias garantizan una vida activa y longeva.</div>
    </section>

    <!-- Slide 11: ¿Qué podemos hacer? -->
    <section id="slide-11" class="slide-section h-full flex-col justify-between">
      <div class="border-b border-slate-800 pb-2">
        <span class="text-xs font-semibold text-teal-400 uppercase">Estrategia</span>
        <h2 class="text-2xl sm:text-3xl font-bold text-white">¿Qué Podemos Hacer?</h2>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 my-auto">
        <div class="bg-slate-900 border border-cyan-500/40 p-5 rounded-2xl">
          <span class="text-xs font-mono text-cyan-400 block mb-1">NIVEL 01</span>
          <h3 class="text-base font-bold text-white mb-2">INFORMARNOS</h3>
          <p class="text-xs text-slate-300">Conocer la ciencia detrás del cuerpo, los efectos de sustancias y cuestionar mitos falsos.</p>
        </div>
        <div class="bg-slate-900 border border-teal-500/40 p-5 rounded-2xl">
          <span class="text-xs font-mono text-teal-400 block mb-1">NIVEL 02</span>
          <h3 class="text-base font-bold text-white mb-2">PREVENIR</h3>
          <p class="text-xs text-slate-300">Aprender a decir «NO» con asertividad frente a la presión social y priorizar el bienestar propio.</p>
        </div>
        <div class="bg-slate-900 border border-rose-500/40 p-5 rounded-2xl">
          <span class="text-xs font-mono text-rose-400 block mb-1">NIVEL 03</span>
          <h3 class="text-base font-bold text-white mb-2">BUSCAR AYUDA</h3>
          <p class="text-xs text-slate-300">Consultar a profesionales médicos, profesores o familia cuando detectemos señales de riesgo.</p>
        </div>
      </div>
      <div class="bg-slate-900 border border-slate-800 p-3 rounded-xl text-center text-xs sm:text-sm font-bold text-white">
        «Cuidar la salud es una responsabilidad individual y colectiva.»
      </div>
    </section>

    <!-- Slide 12: Conclusión -->
    <section id="slide-12" class="slide-section h-full flex-col justify-between">
      <div class="border-b border-slate-800 pb-2">
        <span class="text-xs font-semibold text-teal-400 uppercase">Cierre</span>
        <h2 class="text-2xl sm:text-3xl font-bold text-white">Conclusión y Pregunta para la Clase</h2>
      </div>
      <div class="my-auto space-y-4 text-center">
        <div class="inline-flex items-center gap-3 bg-slate-900 px-6 py-2 rounded-full border border-teal-500/40 text-sm font-bold text-teal-300">
          SALUD ➔ PREVENCIÓN ➔ CUIDADO DEL ORGANISMO
        </div>
        <div class="bg-gradient-to-br from-slate-900 to-teal-950/50 border border-teal-500/40 p-6 rounded-2xl max-w-2xl mx-auto shadow-2xl">
          <span class="text-xs uppercase tracking-wider text-teal-400 block mb-2 font-bold">Pregunta abierta para compañeros y docente:</span>
          <h3 class="text-xl sm:text-2xl font-black text-white leading-tight">
            «¿Qué decisión saludable podemos tomar hoy para proteger nuestro organismo?»
          </h3>
        </div>
        <div class="text-lg font-bold text-white pt-2">
          ¡Muchas gracias por su atención!
        </div>
      </div>
      <div class="text-xs text-slate-400 text-center">Espacio para preguntas y comentarios • Ciencias Naturales</div>
    </section>

  </main>

  <!-- Bottom Navigation Bar -->
  <footer class="w-full bg-slate-900/95 border-t border-slate-800 p-3 sm:p-4 flex items-center justify-between z-50">
    <button onclick="prevSlide()" class="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs sm:text-sm font-semibold transition cursor-pointer">
      ◀ Anterior
    </button>
    <div class="flex items-center gap-2">
      <span id="slide-number" class="text-xs sm:text-sm font-mono font-bold text-teal-400">01 / 12</span>
    </div>
    <button onclick="nextSlide()" class="px-4 py-2 bg-teal-500 hover:bg-teal-400 text-slate-950 rounded-lg text-xs sm:text-sm font-bold transition cursor-pointer">
      Siguiente ▶
    </button>
  </footer>

  <script>
    let currentSlide = 1;
    const totalSlides = 12;

    function updateSlide() {
      for (let i = 1; i <= totalSlides; i++) {
        const el = document.getElementById('slide-' + i);
        if (el) {
          el.classList.toggle('active', i === currentSlide);
        }
      }
      document.getElementById('slide-number').innerText = (currentSlide < 10 ? '0' : '') + currentSlide + ' / ' + totalSlides;
      document.getElementById('progress-bar').style.width = ((currentSlide / totalSlides) * 100) + '%';
    }

    function prevSlide() {
      if (currentSlide > 1) {
        currentSlide--;
        updateSlide();
      }
    }

    function nextSlide() {
      if (currentSlide < totalSlides) {
        currentSlide++;
        updateSlide();
      }
    }

    // Keyboard support
    window.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp' || e.key === 'Backspace') {
        prevSlide();
      } else if (e.key === 'Home') {
        currentSlide = 1;
        updateSlide();
      }
    });

    // Touch swipe support
    let touchStartX = 0;
    window.addEventListener('touchstart', (e) => { touchStartX = e.changedTouches[0].screenX; }, false);
    window.addEventListener('touchend', (e) => {
      const touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 50) nextSlide();
      if (touchEndX - touchStartX > 50) prevSlide();
    }, false);
  </script>
</body>
</html>`;

  const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'presentacion-salud-y-sustancias.html';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

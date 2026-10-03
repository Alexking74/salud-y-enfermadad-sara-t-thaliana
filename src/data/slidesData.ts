import { SlideData, PresentationMetadata } from '../types';

export const defaultMetadata: PresentationMetadata = {
  studentName: 'Estudiante de Ciencias',
  grade: 'Secundaria / Bachillerato',
  teacherName: 'Profesora de Ciencias Naturales',
  date: new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' }),
  schoolSubject: 'Ciencias Naturales'
};

export const slidesMeta: SlideData[] = [
  {
    id: 1,
    title: 'SALUD, ENFERMEDADES Y SUSTANCIAS QUE AFECTAN EL ORGANISMO',
    shortTitle: 'Portada',
    category: 'Introducción',
    speakerNote: {
      bulletPoints: [
        'Saludar cordialmente a la profesora y a los compañeros de clase.',
        'Mencionar el título: Salud, enfermedades y sustancias que alteran el organismo humano.',
        'Plantear el objetivo: entender cómo funciona el equilibrio del cuerpo y cómo protegerlo conscientemente.'
      ],
      cuePrompt: '"Buenos días profesora y compañeros. Hoy les presentaré un tema vital para nuestra vida diaria..."',
      durationEstimate: '1 min'
    }
  },
  {
    id: 2,
    title: '¿QUÉ ES LA SALUD? — MÁS ALLÁ DE NO ESTAR ENFERMO',
    shortTitle: '¿Qué es la Salud?',
    category: 'Fundamentos',
    speakerNote: {
      bulletPoints: [
        'Aclarar el mito: la salud NO es solo la ausencia de síntomas o dolor.',
        'Explicar la definición de la OMS: bienestar físico, mental y social.',
        'Resaltar que las tres dimensiones están interconectadas como un engranaje.'
      ],
      cuePrompt: '"A menudo creemos que tener salud es simplemente no tener gripe o fiebre, pero la OMS nos enseña que es un equilibrio integral..."',
      durationEstimate: '1.5 min'
    }
  },
  {
    id: 3,
    title: '¿QUÉ ES UNA ENFERMEDAD? — RUPTURA DEL EQUILIBRIO',
    shortTitle: 'Concepto de Enfermedad',
    category: 'Fundamentos',
    speakerNote: {
      bulletPoints: [
        'Definir enfermedad como la alteración en el funcionamiento normal (pérdida de homeostasis).',
        'Seguir el flujo visual: Organismo sano ➔ Alteración ➔ Síntomas ➔ Enfermedad.',
        'Comentar que las causas pueden ser biológicas, genéticas, ambientales o conductuales.'
      ],
      cuePrompt: '"Cuando el cuerpo pierde su capacidad natural de autorregularse, ocurre una alteración que produce signos y síntomas..."',
      durationEstimate: '1.5 min'
    }
  },
  {
    id: 4,
    title: 'CLASIFICACIÓN Y TIPOS DE ENFERMEDADES',
    shortTitle: 'Tipos de Enfermedades',
    category: 'Clasificación',
    speakerNote: {
      bulletPoints: [
        'Explicar brevemente cada uno de los 5 grupos con su ejemplo.',
        'Diferenciar claramente las infecciosas (contagiosas) de las no infecciosas.',
        'Destacar cómo los hábitos influyen en las enfermedades crónicas y ambientales.'
      ],
      cuePrompt: '"Para la medicina es esencial clasificar las enfermedades para saber cómo prevenirlas y tratarlas..."',
      durationEstimate: '2 min'
    }
  },
  {
    id: 5,
    title: '¿CÓMO AFECTAN LAS ENFERMEDADES AL ORGANISMO?',
    shortTitle: 'Impacto en Órganos',
    category: 'Fisiología',
    speakerNote: {
      bulletPoints: [
        'Mostrar el mapa anatómico y hacer clic en los órganos clave.',
        'Explicar que un fallo en un sistema suele afectar a los demás (efecto dominó).',
        'Dar el ejemplo del sistema inmunológico que se desgasta luchando contra agresores.'
      ],
      cuePrompt: '"El cuerpo humano es un sistema interconectado. Una afección respiratoria o cardiovascular termina impactando a todos los tejidos..."',
      durationEstimate: '2 min'
    }
  },
  {
    id: 6,
    title: 'SUSTANCIAS QUE ALTERAN EL ORGANISMO',
    shortTitle: 'Tipos de Sustancias',
    category: 'Toxicología',
    speakerNote: {
      bulletPoints: [
        'Definir sustancia química como cualquier compuesto capaz de interactuar con receptores celulares.',
        'Diferenciar las 4 categorías: Medicamentos, Uso cotidiano, Alcohol/Tabaco y Psicoactivas.',
        'Explicar la regla científica: el efecto depende de la sustancia, dosis, frecuencia, vía y edad.'
      ],
      cuePrompt: '"No todas las sustancias son iguales ni tienen el mismo propósito; un medicamento cura bajo dosis estricta, mientras otras sustancias generan daños progresivos..."',
      durationEstimate: '2 min'
    }
  },
  {
    id: 7,
    title: 'SUSTANCIAS Y EL SISTEMA NERVIOSO CENTRAL',
    shortTitle: 'Sistema Nervioso',
    category: 'Neurobiología',
    speakerNote: {
      bulletPoints: [
        'Describir el proceso biológico: Sustancia ➔ Torrente ➔ Cruce hematoencefálico ➔ Sinapsis neuronal.',
        'Explicar cómo se alteran la dopamina, serotonina y GABA, engañando a las neuronas.',
        'Mencionar los 6 efectos clave: percepción, atención, coordinación, ánimo, memoria y tolerancia/dependencia.'
      ],
      cuePrompt: '"El cerebro es el órgano más sensible. Las sustancias alteran los mensajeros químicos neuronales, creando falsas señales y dependencia..."',
      durationEstimate: '2.5 min'
    }
  },
  {
    id: 8,
    title: 'EFECTOS SOBRE OTROS SISTEMAS VITALES',
    shortTitle: 'Otros Sistemas Vitales',
    category: 'Fisiología',
    speakerNote: {
      bulletPoints: [
        'Recorrer los órganos afectados: pulmones, corazón, hígado e inmunológico.',
        'Explicar el daño al hígado: es el laboratorio del cuerpo y se satura con toxinas.',
        'Enfatizar el concepto de daño acumulativo silencioso a largo plazo.'
      ],
      cuePrompt: '"Más allá del cerebro, el corazón se sobrecarga, los pulmones pierden elasticidad y el hígado sufre inflamación crónica..."',
      durationEstimate: '2 min'
    }
  },
  {
    id: 9,
    title: 'FACTORES DE RIESGO: ¿QUÉ AMENAZA NUESTRO EQUILIBRIO?',
    shortTitle: 'Factores de Riesgo',
    category: 'Epidemiología',
    speakerNote: {
      bulletPoints: [
        'Distinguir entre factores modificables (los que podemos cambiar) y no modificables (genética).',
        'Explicar la sinergia de riesgo: combinar sedentarismo, mala dieta y tabaco multiplica el riesgo exponencialmente.',
        'Concluir que la mayoría de los factores principales dependen de nuestras decisiones diarias.'
      ],
      cuePrompt: '"Los factores de riesgo actúan como un círculo que presiona al organismo. La buena noticia es que la mayoría son modificables..."',
      durationEstimate: '2 min'
    }
  },
  {
    id: 10,
    title: 'PREVENCIÓN Y HÁBITOS SALUDABLES FUNDAMENTALES',
    shortTitle: 'Hábitos Saludables',
    category: 'Prevención',
    speakerNote: {
      bulletPoints: [
        'Presentar los 9 pilares con entusiasmo y claridad.',
        'Detallar el papel del sueño reparador (8 horas para regeneración cerebral) y la hidratación.',
        'Repetir el lema central con firmeza: "Prevenir también es cuidar nuestro organismo".'
      ],
      cuePrompt: '"Frente a los riesgos, nuestra mayor defensa son los hábitos saludables diarios. No se trata de prohibiciones, sino de nutrición y vitalidad..."',
      durationEstimate: '2 min'
    }
  },
  {
    id: 11,
    title: '¿QUÉ PODEMOS HACER? — PLAN DE ACCIÓN COLECTIVO',
    shortTitle: 'Plan de Acción',
    category: 'Acción',
    speakerNote: {
      bulletPoints: [
        'Exponer los tres niveles: Informarnos críticamente, Prevenir con asertividad y Buscar ayuda profesional.',
        'Subrayar que pedir ayuda a un médico o docente nunca es signo de debilidad.',
        'Cerrar con la idea de la responsabilidad individual y colectiva (cuidar de uno y de los amigos).'
      ],
      cuePrompt: '"¿Qué podemos hacer nosotros como estudiantes? La respuesta tiene tres pasos: informarnos con base científica, prevenir y saber pedir ayuda a tiempo..."',
      durationEstimate: '1.5 min'
    }
  },
  {
    id: 12,
    title: 'SÍNTESIS FINAL Y PREGUNTA PARA LA CLASE',
    shortTitle: 'Conclusión y Cierre',
    category: 'Conclusión',
    speakerNote: {
      bulletPoints: [
        'Recapitular la cadena: SALUD ➔ PREVENCIÓN ➔ CUIDADO DEL ORGANISMO.',
        'Hacer la pregunta final a los compañeros de clase para generar participación.',
        'Agradecer con elegancia y abrir el turno de preguntas de la profesora.'
      ],
      cuePrompt: '"Para concluir nuestra exposición, recordemos que nuestro cuerpo es nuestro único hogar biológico. Les dejo esta pregunta a todos..."',
      durationEstimate: '1.5 min'
    }
  }
];

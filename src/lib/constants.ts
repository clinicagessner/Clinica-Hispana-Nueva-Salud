import type {
  NavLink,
  Promotion,
  Service,
  ServiceCategory,
  Testimonial,
} from "@/types";

// Normaliza la URL del sitio: añade https:// si falta el esquema y quita la
// barra final. Evita que un valor mal puesto en la env (p. ej.
// "hispananuevasalud.com" sin https) rompa `new URL()` en el build.
function normalizeBaseUrl(raw: string): string {
  const trimmed = raw.trim();
  const withScheme = /^https?:\/\//i.test(trimmed)
    ? trimmed
    : `https://${trimmed}`;
  return withScheme.replace(/\/+$/, "");
}

const SITE_URL = normalizeBaseUrl(
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.hispananuevasalud.com",
);

export const SITE_CONFIG = {
  name: "Clínica Hispana Nueva Salud",
  shortName: "Nueva Salud",
  tagline: "Centro médico 100% en español en Houston, TX",
  taglineEn: "Medical center 100% in Spanish in Houston, TX",
  description:
    "Clínica hispana en Houston, TX: centro médico con atención profesional en español, sin cita previa y con precios accesibles. No necesitas seguro médico. Médico primario, medicina familiar, exámenes de inmigración, laboratorio y más.",
  descriptionEn:
    "Hispanic clinic in Houston, TX: a medical center with professional care in Spanish, walk-ins welcome, no insurance needed. Primary care, family medicine, immigration exams, lab work and more.",
  baseUrl: SITE_URL,
  locale: "es-MX",
  logoUrl: "/logo-nueva-salud.webp",
  ogImage: "/images/og/og-default.png",
} as const;

export const CONTACT_INFO = {
  address: "7640 Bellfort Ave Ste A",
  city: "Houston",
  state: "TX",
  zip: "77061",
  phone: "+13462221006",
  phoneFormatted: "+1 (346) 222-1006",
  phoneDisplay: "(346) 222-1006",
  // WhatsApp — número EXCLUSIVO para chat. Nunca usarlo en tel:, NAP ni schema.
  // El teléfono de llamadas sigue siendo `phone` / CallRail hace swap solo sobre ese.
  whatsapp: "13462221006", // E.164 sin "+", listo para wa.me
  whatsappDisplay: "(346) 222-1006",
  email: "clinicahispananuevasalud@gmail.com",
  hours: "Lunes a Domingo: 9:00 AM - 9:00 PM",
  hoursEn: "Monday to Sunday: 9:00 AM - 9:00 PM",
  hoursWeekday: "Lunes a Viernes: 9:00 AM - 9:00 PM",
  hoursWeekend: "Sábado y Domingo: 9:00 AM - 9:00 PM",
  // Coordenadas exactas (Places API New) de 7640 Bellfort Ave Ste A, Houston TX 77061.
  coordinates: { lat: 29.6719281, lng: -95.2830357 },
  // URLs ancladas al Place ID real verificado (ChIJSRxrneGXQIYRlwEtNdb7TX4).
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Cl%C3%ADnica+Hispana+Nueva+Salud+7640+Bellfort+Ave+Houston+TX+77061&query_place_id=ChIJSRxrneGXQIYRlwEtNdb7TX4",
  // Enlace directo al diálogo de "escribir reseña" de Google (usa el Place ID).
  googleReviewUrl:
    "https://search.google.com/local/writereview?placeid=ChIJSRxrneGXQIYRlwEtNdb7TX4",
  googleMapsEmbed:
    "https://maps.google.com/maps?q=7640+Bellfort+Ave+Ste+A,+Houston,+TX+77061&t=m&z=16&ie=UTF8&iwloc=&output=embed",
} as const;

// Horario estructurado para JSON-LD (openingHoursSpecification).
export const OPENING_HOURS = [
  { day: "Monday", opens: "09:00", closes: "21:00" },
  { day: "Tuesday", opens: "09:00", closes: "21:00" },
  { day: "Wednesday", opens: "09:00", closes: "21:00" },
  { day: "Thursday", opens: "09:00", closes: "21:00" },
  { day: "Friday", opens: "09:00", closes: "21:00" },
  { day: "Saturday", opens: "09:00", closes: "21:00" },
  { day: "Sunday", opens: "09:00", closes: "21:00" },
] as const;

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/clinicahispananuevasaludhoustontexas",
  instagram: "https://www.instagram.com/clinicahispananuevasalud/",
} as const;

// Fallback de build para rating/reseñas. La data en vivo la trae
// getGooglePlaceData() cuando hay GOOGLE_PLACES_API_KEY + GOOGLE_PLACE_ID.
export const GOOGLE_REVIEWS_DATA = {
  averageRating: 5.0,
  totalReviews: 674,
} as const;

// Navbar (header): sin "Sin cita".
export const NAV_LINKS: NavLink[] = [
  { key: "services", href: "/services" },
  { key: "promotions", href: "/promociones" },
  { key: "blog", href: "/blog" },
  { key: "contact", href: "/#contacto" },
];

// Footer: incluye "Sin cita" (walk-in).
export const FOOTER_NAV_LINKS: NavLink[] = [
  { key: "services", href: "/services" },
  { key: "promotions", href: "/promociones" },
  { key: "blog", href: "/blog" },
  { key: "walkIn", href: "/walk-in" },
  { key: "contact", href: "/#contacto" },
];

/**
 * Promociones vigentes. El precio que ve el paciente vive en el flyer (imagen);
 * aquí `price` es solo dato de apoyo. Copy factual y sin claims médicos
 * (compliance Google Ads salud). Misma fuente para el carrusel de la home y
 * la página /promociones.
 */
export const PROMOTIONS: Promotion[] = [
  {
    slug: "chequeo-general-completo",
    order: 1,
    price: "$99",
    title: "Chequeo General Completo",
    blurb:
      "Cuídate hoy, vive mejor mañana. Chequeo general completo por solo $99 (valor regular $250) con consulta médica gratis: examen general de sangre, A1C (hemoglobina glicosilada) y examen general de orina. Agenda tu cita hoy.",
    includes: [
      "Examen general de sangre",
      "A1C (hemoglobina glicosilada)",
      "Examen general de orina",
      "Consulta médica gratis",
    ],
    alt: "Flyer de la promoción Chequeo General Completo por $99 con consulta gratis en Clínica Hispana Nueva Salud, Houston",
    titleEn: "Complete General Check-Up",
    blurbEn:
      "Take care today, live better tomorrow. Complete general check-up for only $99 (regular value $250) with a free medical consultation: general blood test, A1C (glycated hemoglobin) and general urine test. Book your appointment today.",
    includesEn: [
      "General blood test",
      "A1C (glycated hemoglobin)",
      "General urine test",
      "Free medical consultation",
    ],
    altEn:
      "Complete General Check-Up promotion flyer for $99 with free consultation at Clínica Hispana Nueva Salud, Houston",
  },
  {
    slug: "salud-intima-femenina",
    order: 2,
    price: "$69",
    title: "Salud Íntima Femenina",
    blurb:
      "¿Picazón, flujo o mal olor? No lo ignores: podría ser una infección. En esta evaluación de salud íntima femenina te atendemos con una consulta médica y los estudios necesarios para identificar la causa y orientarte sobre el siguiente paso.",
    includes: ["Cultivo íntimo", "Consulta médica", "Examen de orina incluido"],
    alt: "Flyer de la promoción Salud Íntima Femenina por $69 en Clínica Hispana Nueva Salud, Houston",
    titleEn: "Women's Intimate Health",
    blurbEn:
      "Itching, discharge or odor? Don't ignore it — it could be an infection. This women's intimate health check includes a medical consultation and the tests needed to identify the cause and guide your next step.",
    includesEn: [
      "Intimate culture test",
      "Medical consultation",
      "Urine test included",
    ],
    altEn:
      "Women's Intimate Health promotion flyer for $69 at Clínica Hispana Nueva Salud, Houston",
  },
  {
    slug: "perfil-hormonal-masculino",
    order: 3,
    price: "$200",
    title: "Perfil Hormonal Masculino",
    blurb:
      "¿Deseas evaluar tu salud hormonal? El perfil hormonal masculino te ayuda a revisar señales como fatiga, cambios de ánimo, problemas de sueño o cambios en el peso y la masa muscular, con exámenes confiables y atención profesional.",
    includes: [
      "Perfil hormonal masculino",
      "Exámenes confiables",
      "Resultados precisos",
      "Atención profesional",
    ],
    alt: "Flyer de la promoción Perfil Hormonal Masculino por $200 en Clínica Hispana Nueva Salud, Houston",
    titleEn: "Men's Hormone Profile",
    blurbEn:
      "Want to evaluate your hormonal health? The men's hormone profile helps you review signs such as fatigue, mood changes, sleep trouble, or changes in weight and muscle mass, with reliable tests and professional care.",
    includesEn: [
      "Men's hormone panel",
      "Reliable lab tests",
      "Precise results",
      "Professional care",
    ],
    altEn:
      "Men's Hormone Profile promotion flyer for $200 at Clínica Hispana Nueva Salud, Houston",
  },
  {
    slug: "general-sangre-vitamina-b12",
    order: 4,
    price: "$99",
    title: "General de Sangre + Vitamina B12",
    blurb:
      "Cuida tu salud con un examen general de sangre acompañado de una inyección de vitamina B12. Una forma sencilla de revisar cómo estás y apoyar tu energía y bienestar.",
    includes: [
      "Examen general de sangre",
      "Inyección de vitamina B12",
    ],
    alt: "Flyer de la promoción General de Sangre más Vitamina B12 por $99 en Clínica Hispana Nueva Salud, Houston",
    titleEn: "Blood Panel + Vitamin B12",
    blurbEn:
      "Take care of your health with a general blood panel plus a vitamin B12 injection. A simple way to check how you're doing and support your energy and wellbeing.",
    includesEn: ["General blood panel", "Vitamin B12 injection"],
    altEn:
      "Blood Panel plus Vitamin B12 promotion flyer for $99 at Clínica Hispana Nueva Salud, Houston",
  },
  {
    slug: "chequeo-medico-anual",
    order: 5,
    price: null,
    title: "Chequeo Médico Anual",
    blurb:
      "Tu salud es prioridad. Un chequeo médico anual te ayuda a conocer cómo estás, dar seguimiento a tiempo y cuidar tu bienestar. Agenda tu evaluación general con atención profesional en español.",
    includes: [
      "Evaluación general de salud",
      "Orientación sobre prevención",
      "Atención profesional en español",
    ],
    alt: "Flyer de la promoción Chequeo Médico Anual en Clínica Hispana Nueva Salud, Houston",
    titleEn: "Annual Health Check-Up",
    blurbEn:
      "Your health is a priority. An annual check-up helps you understand how you're doing, follow up in time and care for your wellbeing. Book your general evaluation with professional care in Spanish.",
    includesEn: [
      "General health evaluation",
      "Prevention guidance",
      "Professional care in Spanish",
    ],
    altEn:
      "Annual Health Check-Up promotion flyer at Clínica Hispana Nueva Salud, Houston",
  },
  {
    slug: "deteccion-anemia",
    order: 6,
    price: null,
    title: "Detección de Anemia",
    blurb:
      "¿Cansancio constante, mareos, caída de cabello o palidez? Podrían ser señales de anemia. Un examen de sangre ayuda a revisar tus niveles y orientarte sobre el siguiente paso.",
    includes: [
      "Examen de sangre",
      "Revisión de niveles de hierro",
      "Orientación profesional",
    ],
    alt: "Flyer de la promoción Detección de Anemia en Clínica Hispana Nueva Salud, Houston",
    titleEn: "Anemia Detection",
    blurbEn:
      "Constant fatigue, dizziness, hair loss or paleness? They could be signs of anemia. A blood test helps review your levels and guide your next step.",
    includesEn: [
      "Blood test",
      "Iron level review",
      "Professional guidance",
    ],
    altEn:
      "Anemia Detection promotion flyer at Clínica Hispana Nueva Salud, Houston",
  },
  {
    slug: "examenes-vitaminas-consulta",
    order: 7,
    price: "$99",
    title: "Exámenes de Sangre + Vitaminas + Consulta",
    blurb:
      "Revisa tu salud con un paquete que incluye exámenes generales de sangre, vitaminas y consulta médica, con atención profesional en español.",
    includes: [
      "Exámenes generales de sangre",
      "Vitaminas",
      "Consulta médica incluida",
    ],
    alt: "Flyer de la promoción Exámenes generales de sangre, vitaminas y consulta por $99 en Clínica Hispana Nueva Salud, Houston",
    titleEn: "Blood Tests + Vitamins + Consultation",
    blurbEn:
      "Check your health with a package that includes general blood tests, vitamins and a medical consultation, with professional care in Spanish.",
    includesEn: [
      "General blood tests",
      "Vitamins",
      "Medical consultation included",
    ],
    altEn:
      "General blood tests, vitamins and consultation promotion flyer for $99 at Clínica Hispana Nueva Salud, Houston",
  },
  {
    slug: "prueba-psa-prostata",
    order: 8,
    price: null,
    title: "Prueba PSA de Próstata",
    blurb:
      "La prueba PSA (antígeno prostático) ayuda a revisar la salud de la próstata en hombres. Es rápida y sencilla, y suele recomendarse a partir de los 45 años.",
    includes: [
      "Prueba PSA (antígeno prostático)",
      "Procedimiento rápido y sencillo",
      "Atención profesional en español",
    ],
    alt: "Flyer de la promoción Prueba PSA de Próstata en Clínica Hispana Nueva Salud, Houston",
    titleEn: "Prostate PSA Test",
    blurbEn:
      "The PSA (prostate-specific antigen) test helps review prostate health in men. It's quick and simple, and is usually recommended from age 45.",
    includesEn: [
      "PSA (prostate-specific antigen) test",
      "Quick and simple procedure",
      "Professional care in Spanish",
    ],
    altEn:
      "Prostate PSA Test promotion flyer at Clínica Hispana Nueva Salud, Houston",
  },
  {
    slug: "salud-digestiva-gastritis",
    order: 9,
    price: null,
    title: "Salud Digestiva: Gastritis",
    blurb:
      "La gastritis es la inflamación del revestimiento del estómago y puede causar dolor abdominal, acidez y náuseas. Si los síntomas persisten, consúltanos para una evaluación profesional.",
    includes: [
      "Evaluación de síntomas digestivos",
      "Orientación profesional",
      "Atención en español",
    ],
    alt: "Flyer informativo sobre la gastritis en Clínica Hispana Nueva Salud, Houston",
    titleEn: "Digestive Health: Gastritis",
    blurbEn:
      "Gastritis is inflammation of the stomach lining and can cause abdominal pain, heartburn and nausea. If symptoms persist, come in for a professional evaluation.",
    includesEn: [
      "Digestive symptom evaluation",
      "Professional guidance",
      "Care in Spanish",
    ],
    altEn:
      "Gastritis information flyer at Clínica Hispana Nueva Salud, Houston",
  },
];

export const SERVICE_CATEGORIES: {
  value: ServiceCategory;
  label: string;
  labelEn: string;
}[] = [
  { value: "medicina-general", label: "Medicina general", labelEn: "General medicine" },
  { value: "salud-mujer", label: "Salud de la mujer", labelEn: "Women's health" },
  { value: "examenes", label: "Exámenes y certificados", labelEn: "Exams & certificates" },
  { value: "laboratorio", label: "Laboratorio y pruebas", labelEn: "Lab & testing" },
  { value: "tratamientos", label: "Tratamientos", labelEn: "Treatments" },
];

// Bloques de copy reutilizados (marca Nueva Salud + Houston).
const WHY_ES = `## ¿Por qué elegir Clínica Hispana Nueva Salud?

Somos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en ${CONTACT_INFO.address}, ${CONTACT_INFO.city}, ${CONTACT_INFO.state} ${CONTACT_INFO.zip}, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.`;

const WHY_EN = `## Why choose Clínica Hispana Nueva Salud?

We are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and with affordable pricing, no insurance required. Find your medical center near you at ${CONTACT_INFO.address}, ${CONTACT_INFO.city}, ${CONTACT_INFO.state} ${CONTACT_INFO.zip}, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.`;

const PAYMENT_ES = `## Formas de pago

No es necesario tener seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.`;

const PAYMENT_EN = `## Payment

You don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.`;

const AREAS_ES = `## Áreas que servimos

Atendemos a pacientes del sureste de Houston, TX y de toda el área metropolitana de Houston: Glenbrook Valley, Park Place, Gulfgate, Pecan Park, Golfcrest, Hobby Area y South Houston.`;

const AREAS_EN = `## Areas we serve

We care for patients across southeast Houston, TX and the greater Houston area: Glenbrook Valley, Park Place, Gulfgate, Pecan Park, Golfcrest, Hobby Area and South Houston.`;


export const SERVICES: Service[] = [
  {
    slug: "condiciones-cronicas",
    order: 1,
    category: "medicina-general",
    icon: "Activity",
    highlighted: true,
    title: "Control de Diabetes, Hipertensión y Colesterol",
    titleEn: "Diabetes, Hypertension & Cholesterol Care",
    metaTitle: "Control de Diabetes en Houston | Clínica Hispana Nueva Salud",
    metaTitleEn: "Diabetes Care in Houston, TX | Clínica Hispana Nueva Salud",
    shortDescription:
      "Exámenes y control de diabetes, presión alta y dislipidemias (colesterol y triglicéridos), con seguimiento cercano.",
    shortDescriptionEn:
      "Testing and management of diabetes, high blood pressure and dyslipidemia (cholesterol and triglycerides), with close follow-up.",
    description:
      "Control de diabetes, hipertensión y dislipidemias en Houston, TX. Laboratorio y seguimiento en español, con precios accesibles. Sin cita y sin seguro médico.",
    descriptionEn:
      "Diabetes, hypertension and dyslipidemia management in Houston, TX. Lab work and follow-up in Spanish, with affordable pricing. Walk-ins welcome, no insurance needed.",
    keywords: [
      "control de diabetes houston",
      "doctor diabetes español houston",
      "control de presion alta houston",
      "colesterol alto tratamiento houston",
    ],
    keywordsEn: [
      "diabetes management houston",
      "high blood pressure doctor houston",
      "cholesterol management houston",
      "chronic disease clinic houston",
    ],
    features: [
      "Diagnóstico y monitoreo de laboratorio",
      "Control de glucosa, presión y colesterol",
      "Ajuste de medicamentos",
      "Plan de alimentación y hábitos",
    ],
    featuresEn: [
      "Diagnosis and lab monitoring",
      "Glucose, blood pressure and cholesterol control",
      "Medication adjustment",
      "Nutrition and lifestyle plan",
    ],
    longDescription: `Las enfermedades crónicas como la diabetes, la hipertensión y las dislipidemias (colesterol y triglicéridos altos) se controlan mejor con seguimiento constante. En Clínica Hispana Nueva Salud diseñamos un plan claro y te acompañamos paso a paso, en español.

## ¿Qué incluye?

- Evaluación inicial y exámenes de laboratorio
- Monitoreo de glucosa, presión arterial, colesterol y triglicéridos
- Ajuste de medicamentos según tu evolución
- Plan de alimentación y actividad física
- Educación sobre tu condición en tu idioma

## Por qué es importante el control

Una diabetes, presión o colesterol mal controlados dañan con el tiempo el corazón, los riñones, los ojos y los nervios. Un buen seguimiento previene complicaciones y mejora tu calidad de vida.

Si quieres empezar hoy mismo, lee nuestra [guía para pacientes sobre el control de la diabetes](/blog/control-diabetes-houston-guia-pacientes): qué significan tus números, qué comer y cuándo acudir al médico.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `Chronic conditions like diabetes, hypertension and dyslipidemia (high cholesterol and triglycerides) are best controlled with consistent follow-up. At Clínica Hispana Nueva Salud we design a clear plan and support you every step of the way, in Spanish.

## What's included?

- Initial evaluation and lab work
- Monitoring of glucose, blood pressure, cholesterol and triglycerides
- Medication adjustment based on your progress
- Nutrition and physical-activity plan
- Education about your condition in your language

## Why control matters

Poorly managed diabetes, blood pressure or cholesterol damage the heart, kidneys, eyes and nerves over time. Good follow-up prevents complications and improves your quality of life.

If you want to start today, read our [patient guide to diabetes management](/en/blog/control-diabetes-houston-guia-pacientes): what your numbers mean, what to eat and when to see a doctor.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "tiroides",
    order: 2,
    category: "medicina-general",
    icon: "Thermometer",
    title: "Exámenes y Tratamiento de la Tiroides",
    titleEn: "Thyroid Testing & Treatment",
    metaTitle: "Exámenes de Tiroides Houston | Clínica Hispana Nueva Salud",
    metaTitleEn: "Thyroid Tests in Houston, TX | Clínica Hispana Nueva Salud",
    shortDescription:
      "Diagnóstico y tratamiento de enfermedades de la tiroides (hipotiroidismo e hipertiroidismo) con seguimiento en español.",
    shortDescriptionEn:
      "Diagnosis and treatment of thyroid conditions (hypothyroidism and hyperthyroidism) with follow-up in Spanish.",
    description:
      "Exámenes y tratamiento de la tiroides en Houston, TX. Pruebas de laboratorio y control en español, con precios accesibles. Sin cita y sin seguro médico.",
    descriptionEn:
      "Thyroid testing and treatment in Houston, TX. Lab tests and follow-up in Spanish, with affordable pricing. Walk-ins welcome, no insurance needed.",
    keywords: [
      "tiroides houston",
      "examen de tiroides houston",
      "hipotiroidismo tratamiento houston",
      "doctor tiroides español houston",
    ],
    keywordsEn: [
      "thyroid testing houston",
      "thyroid doctor houston",
      "hypothyroidism treatment houston",
      "thyroid clinic houston",
    ],
    features: [
      "Pruebas de función tiroidea (TSH, T3, T4)",
      "Diagnóstico de hipo e hipertiroidismo",
      "Tratamiento y ajuste de medicamentos",
      "Seguimiento en español",
    ],
    featuresEn: [
      "Thyroid function tests (TSH, T3, T4)",
      "Diagnosis of hypo- and hyperthyroidism",
      "Treatment and medication adjustment",
      "Follow-up in Spanish",
    ],
    longDescription: `La tiroides es una glándula pequeña en el cuello que regula tu energía, tu peso, tu temperatura y tu ánimo. Cuando funciona de más (hipertiroidismo) o de menos (hipotiroidismo) aparecen síntomas que afectan tu día a día y que muchas veces se confunden con estrés o cansancio. En Clínica Hispana Nueva Salud evaluamos tu tiroides con análisis de laboratorio y te damos el tratamiento adecuado: sin cita previa, sin seguro médico y en español.

## ¿Qué incluye?

- **Evaluación de síntomas** y revisión del cuello en busca de crecimiento o nódulos
- **Pruebas de función tiroidea:** TSH y, si es necesario, T3 y T4 libres
- **Diagnóstico** de hipotiroidismo o hipertiroidismo
- **Inicio y ajuste del tratamiento** (por ejemplo, levotiroxina en hipotiroidismo)
- **Seguimiento periódico** con laboratorio para mantener la dosis correcta
- **[Ultrasonido de tiroides](/services/ultrasonido)** cuando se detecta un nódulo o crecimiento
- **Referencia a endocrinólogo** en casos que lo requieran

## Síntomas de hipotiroidismo (tiroides lenta)

- Cansancio constante y sueño excesivo
- Aumento de peso sin cambiar la alimentación
- Frío excesivo, piel seca, caída del cabello
- Estreñimiento
- Tristeza, desánimo o lentitud para pensar
- Periodos menstruales abundantes o irregulares

## Síntomas de hipertiroidismo (tiroides acelerada)

- Nerviosismo, ansiedad o irritabilidad
- Pérdida de peso aunque comas igual o más
- Palpitaciones o latidos rápidos
- Calor excesivo y sudoración
- Temblor en las manos
- Dificultad para dormir

Si reconoces varios de estos síntomas, una prueba de sangre sencilla da la respuesta.

## ¿Quién debe revisarse la tiroides?

- Mujeres, especialmente después de un embarazo o alrededor de la menopausia
- Personas con familiares con problemas de tiroides
- Quienes tienen [diabetes](/services/condiciones-cronicas) u otra enfermedad autoinmune
- Si tienes colesterol alto sin explicación o anemia persistente
- Si planeas un embarazo o estás embarazada: la tiroides influye en el desarrollo del bebé

## ¿Cómo me preparo?

La prueba de TSH no requiere ayuno. Si ya tomas medicamento para la tiroides, tómalo después de la extracción de sangre, no antes, y avísanos. Si vas a aprovechar para hacerte [otros exámenes de sangre](/services/examenes-sangre) (glucosa, colesterol), ven en ayunas de 8 a 12 horas.

## ¿Cómo es la visita?

1. Llegas sin cita y te registras en recepción.
2. El personal médico evalúa tus síntomas y revisa tu cuello.
3. Se toma la muestra de sangre en la clínica.
4. Cuando el laboratorio entrega el resultado, te lo explicamos en español y, si procede, inicias o ajustas tu tratamiento.
5. Programamos el control: en general cada 6-8 semanas al ajustar dosis, y cada 6-12 meses cuando ya está estable.

## Tiroides en una clínica hispana cerca de ti

Si buscas examen de tiroides en Houston sin cita, en español y a precio accesible, te atendemos cerca de ti en el sureste de Houston (zona Bellfort / Hobby), de lunes a domingo de 9 AM a 9 PM.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `The thyroid is a small gland in the neck that regulates your energy, weight, temperature and mood. When it works too much (hyperthyroidism) or too little (hypothyroidism), symptoms appear that affect your daily life and are often mistaken for stress or tiredness. At Clínica Hispana Nueva Salud we evaluate your thyroid with lab tests and give you the right treatment: no appointment, no insurance required and in Spanish.

## What's included?

- **Symptom evaluation** and neck exam for enlargement or nodules
- **Thyroid function tests:** TSH and, if needed, free T3 and T4
- **Diagnosis** of hypothyroidism or hyperthyroidism
- **Starting and adjusting treatment** (for example, levothyroxine for hypothyroidism)
- **Regular follow-up** with lab work to keep the dose right
- **[Thyroid ultrasound](/en/services/ultrasonido)** when a nodule or enlargement is found
- **Endocrinologist referral** for cases that require it

## Symptoms of hypothyroidism (slow thyroid)

- Constant tiredness and excessive sleepiness
- Weight gain without changing your diet
- Feeling cold, dry skin, hair loss
- Constipation
- Sadness, low mood or slow thinking
- Heavy or irregular periods

## Symptoms of hyperthyroidism (overactive thyroid)

- Nervousness, anxiety or irritability
- Weight loss even though you eat the same or more
- Palpitations or a fast heartbeat
- Feeling hot and sweating
- Hand tremors
- Trouble sleeping

If you recognize several of these symptoms, a simple blood test gives the answer.

## Who should get their thyroid checked?

- Women, especially after pregnancy or around menopause
- People with relatives who have thyroid problems
- Those with [diabetes](/en/services/condiciones-cronicas) or another autoimmune disease
- If you have unexplained high cholesterol or persistent anemia
- If you're planning a pregnancy or are pregnant: the thyroid affects the baby's development

## How do I prepare?

The TSH test doesn't require fasting. If you already take thyroid medication, take it after the blood draw, not before, and let us know. If you're also getting [other blood tests](/en/services/examenes-sangre) (glucose, cholesterol), come fasting for 8 to 12 hours.

## What is the visit like?

1. Walk in without an appointment and check in at the front desk.
2. The medical staff evaluates your symptoms and examines your neck.
3. The blood sample is drawn at the clinic.
4. When the lab returns the result, we explain it in Spanish and, if appropriate, you start or adjust your treatment.
5. We schedule follow-up: generally every 6-8 weeks while adjusting the dose, and every 6-12 months once stable.

## Thyroid care at a Hispanic clinic near you

If you're looking for a thyroid test in Houston with no appointment, in Spanish and at an affordable price, we're near you in southeast Houston (Bellfort / Hobby area), Monday to Sunday from 9 AM to 9 PM.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "alergias",
    order: 3,
    category: "medicina-general",
    icon: "Leaf",
    title: "Exámenes y Tratamiento de Alergias",
    titleEn: "Allergy Testing & Treatment",
    metaTitle: "Exámenes de Alergias Houston | Clínica Hispana Nueva Salud",
    metaTitleEn: "Allergy Testing in Houston | Clínica Hispana Nueva Salud",
    shortDescription:
      "Evaluación y tratamiento de alergias estacionales, respiratorias y de la piel, con atención en español.",
    shortDescriptionEn:
      "Evaluation and treatment of seasonal, respiratory and skin allergies, with care in Spanish.",
    description:
      "Exámenes y tratamiento de alergias en Houston, TX. Diagnóstico y manejo en español, con precios accesibles. Sin cita y sin seguro médico.",
    descriptionEn:
      "Allergy testing and treatment in Houston, TX. Diagnosis and management in Spanish, with affordable pricing. Walk-ins welcome, no insurance needed.",
    keywords: [
      "alergias houston",
      "tratamiento de alergias houston",
      "doctor de alergias español houston",
      "examen de alergias houston",
    ],
    keywordsEn: [
      "allergy treatment houston",
      "allergy testing houston",
      "allergy doctor houston",
      "allergy clinic houston",
    ],
    features: [
      "Evaluación de síntomas y desencadenantes",
      "Tratamiento de alergias respiratorias y de piel",
      "Manejo de rinitis y congestión",
      "Atención en español",
    ],
    featuresEn: [
      "Evaluation of symptoms and triggers",
      "Treatment of respiratory and skin allergies",
      "Management of rhinitis and congestion",
      "Care in Spanish",
    ],
    longDescription: `Las alergias pueden afectar tu respiración, tu piel y tu descanso. En Clínica Hispana Nueva Salud identificamos qué las provoca y te ayudamos a controlarlas para que recuperes tu bienestar.

## ¿Qué incluye?

- Evaluación de síntomas y posibles desencadenantes
- Tratamiento de alergias estacionales y respiratorias
- Manejo de rinitis, estornudos y congestión
- Atención de alergias en la piel (ronchas, comezón)
- Recomendaciones para evitar las crisis

## Cuándo consultar

Estornudos frecuentes, ojos llorosos, comezón, ronchas o congestión que no mejora son señales de alergia. Un tratamiento adecuado marca la diferencia.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `Allergies can affect your breathing, your skin and your rest. At Clínica Hispana Nueva Salud we identify what triggers them and help you control them so you feel well again.

## What's included?

- Evaluation of symptoms and possible triggers
- Treatment of seasonal and respiratory allergies
- Management of rhinitis, sneezing and congestion
- Care for skin allergies (hives, itching)
- Recommendations to avoid flare-ups

## When to seek care

Frequent sneezing, watery eyes, itching, hives or congestion that won't improve are signs of allergy. The right treatment makes the difference.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "enfermedades-respiratorias",
    order: 4,
    category: "medicina-general",
    icon: "Wind",
    title: "Pruebas de Flu y COVID y Enfermedades Respiratorias",
    titleEn: "Flu & COVID Testing and Respiratory Illness Care",
    metaTitle: "Prueba de Flu y COVID Houston | Clínica Hispana Nueva Salud",
    metaTitleEn: "Flu & COVID Test in Houston | Clínica Hispana Nueva Salud",
    shortDescription:
      "Pruebas de detección de influenza (flu) y COVID, y tratamiento de gripe, tos y enfermedades respiratorias.",
    shortDescriptionEn:
      "Influenza (flu) and COVID detection testing, plus treatment of flu, cough and respiratory illnesses.",
    description:
      "Pruebas de flu y COVID y tratamiento de enfermedades respiratorias en Houston, TX. Sin cita previa, en español.",
    descriptionEn:
      "Flu and COVID testing and respiratory illness treatment in Houston, TX. Walk-ins welcome, in Spanish.",
    keywords: [
      "prueba de covid houston",
      "prueba de flu houston",
      "tratamiento gripe houston",
      "enfermedades respiratorias houston",
    ],
    keywordsEn: [
      "covid test houston",
      "flu test houston",
      "flu treatment houston",
      "respiratory illness houston",
    ],
    features: [
      "Prueba rápida de flu y COVID",
      "Diagnóstico el mismo día",
      "Tratamiento de gripe, tos y bronquitis",
      "Atención sin cita en español",
    ],
    featuresEn: [
      "Rapid flu and COVID testing",
      "Same-day diagnosis",
      "Treatment of flu, cough and bronchitis",
      "Walk-in care in Spanish",
    ],
    longDescription: `Cuando empiezan la fiebre, la tos o el malestar, saber si es flu, COVID o una infección de garganta ayuda a tratarte a tiempo. En Clínica Hispana Nueva Salud hacemos pruebas rápidas y te damos tratamiento el mismo día: sin cita previa, sin seguro médico y en español.

## ¿Qué incluye?

- **Prueba rápida de influenza (flu)** con resultado en minutos
- **Prueba de COVID-19**
- **[Prueba de estreptococo](/services/prueba-strep)** si el dolor de garganta lo sugiere
- **Evaluación de síntomas respiratorios** y revisión de pulmones y garganta
- **Tratamiento de gripe, tos, bronquitis, sinusitis e infecciones de garganta**
- **Receta y medicamento el mismo día**; contamos con [farmacia dentro de la clínica](/services/farmacia)
- **Indicaciones de recuperación y cuidado en casa**, en español

## ¿Flu, COVID o resfriado común?

Los síntomas se parecen, pero el tratamiento cambia:

- **Resfriado:** congestión, estornudos, molestia leve; suele pasar en pocos días.
- **Flu:** fiebre alta de inicio súbito, dolor de cuerpo, cansancio intenso. Hay medicamento antiviral que funciona mejor en las primeras 48 horas.
- **COVID-19:** fiebre, tos, cansancio, a veces pérdida de olfato o gusto. Conviene confirmar para cuidar a los demás en casa.

La prueba rápida quita la duda en minutos y permite dar el tratamiento correcto desde el primer día.

## ¿Cuándo debo venir?

- Fiebre de 38 °C (100.4 °F) o más que dura más de 2 días
- Tos que no mejora en una semana o que empeora
- Dolor de garganta intenso, con placas o dificultad para tragar
- Dolor en el pecho al respirar o silbido en el pecho
- Síntomas de gripe si tienes asma, diabetes, presión alta, eres mayor de 65 o estás embarazada

**Acude de inmediato a emergencias** si tienes dificultad para respirar, labios morados o confusión.

## Prevención

La [vacuna anual contra la flu](/services/vacunas) reduce el riesgo de enfermar de gravedad. Lavarte las manos, cubrirte al toser y quedarte en casa cuando tienes fiebre protege a tu familia y compañeros de trabajo.

## ¿Cómo es la visita?

1. Llegas sin cita y te registras en recepción.
2. El personal médico evalúa tus síntomas y te revisa garganta, oídos y pulmones.
3. Se hace la prueba rápida de flu, COVID o estreptococo según el caso; el resultado está en minutos.
4. Sales con tu diagnóstico, tu receta y tu tratamiento el mismo día.
5. Si necesitas justificante médico para trabajo o escuela, te lo entregamos.

## Pruebas de flu y COVID en una clínica hispana cerca de ti

Si buscas prueba de flu o COVID en Houston sin cita, en español y a precio accesible, te atendemos cerca de ti en el sureste de Houston (zona Bellfort / Hobby), de lunes a domingo de 9 AM a 9 PM.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `When fever, cough or malaise start, knowing whether it's the flu, COVID or a throat infection helps you get treated in time. At Clínica Hispana Nueva Salud we run rapid tests and give you treatment the same day: no appointment, no insurance required and in Spanish.

## What's included?

- **Rapid flu (influenza) test** with results in minutes
- **COVID-19 test**
- **[Strep test](/en/services/prueba-strep)** if the sore throat suggests it
- **Evaluation of respiratory symptoms** and a check of lungs and throat
- **Treatment for the flu, cough, bronchitis, sinusitis and throat infections**
- **Same-day prescription and medication**; we have a [pharmacy inside the clinic](/en/services/farmacia)
- **Recovery and home-care instructions**, in Spanish

## Flu, COVID or common cold?

The symptoms look alike, but the treatment differs:

- **Cold:** congestion, sneezing, mild discomfort; usually passes in a few days.
- **Flu:** sudden high fever, body aches, intense tiredness. Antiviral medication works best in the first 48 hours.
- **COVID-19:** fever, cough, tiredness, sometimes loss of smell or taste. Worth confirming to protect others at home.

A rapid test clears up the doubt in minutes and lets us give the right treatment from day one.

## When should I come in?

- Fever of 100.4 °F (38 °C) or higher lasting more than 2 days
- Cough that doesn't improve in a week or gets worse
- Severe sore throat, with white patches or trouble swallowing
- Chest pain when breathing or wheezing
- Flu symptoms if you have asthma, diabetes, high blood pressure, are over 65 or pregnant

**Go to the emergency room immediately** if you have trouble breathing, blue lips or confusion.

## Prevention

The [annual flu vaccine](/en/services/vacunas) reduces the risk of severe illness. Washing your hands, covering your cough and staying home when you have a fever protects your family and coworkers.

## What is the visit like?

1. Walk in without an appointment and check in at the front desk.
2. The medical staff evaluates your symptoms and checks your throat, ears and lungs.
3. A rapid flu, COVID or strep test is done as needed; results are ready in minutes.
4. You leave with your diagnosis, prescription and treatment the same day.
5. If you need a doctor's note for work or school, we provide it.

## Flu and COVID testing at a Hispanic clinic near you

If you're looking for a flu or COVID test in Houston with no appointment, in Spanish and at an affordable price, we're near you in southeast Houston (Bellfort / Hobby area), Monday to Sunday from 9 AM to 9 PM.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "examen-fisico-escolar",
    order: 5,
    category: "examenes",
    icon: "ClipboardList",
    title: "Chequeos Físicos Escolares y Deportivos",
    titleEn: "School & Sports Physical Exams",
    metaTitle: "Examen Físico Escolar Houston | Clínica Hispana Nueva Salud",
    metaTitleEn: "School Physicals in Houston | Clínica Hispana Nueva Salud",
    shortDescription:
      "Exámenes físicos para la escuela y los deportes, rápidos y con los formularios completados.",
    shortDescriptionEn:
      "Physical exams for school and sports, fast and with the forms completed.",
    description:
      "Chequeos físicos escolares y deportivos en Houston, TX. Rápidos, en español y con precios accesibles. Sin cita y sin seguro médico.",
    descriptionEn:
      "School and sports physical exams in Houston, TX. Fast, in Spanish, with affordable pricing. Walk-ins welcome, no insurance needed.",
    keywords: [
      "examen fisico escolar houston",
      "physical para la escuela houston",
      "examen deportivo houston",
      "chequeo escolar houston",
    ],
    keywordsEn: [
      "school physical houston",
      "sports physical houston",
      "school physical exam houston",
      "kids physical houston",
    ],
    features: [
      "Examen físico completo",
      "Revisión de signos vitales",
      "Formularios escolares y deportivos llenados",
      "Atención en español",
    ],
    featuresEn: [
      "Complete physical exam",
      "Vital-signs check",
      "School and sports forms completed",
      "Care in Spanish",
    ],
    longDescription: `Antes de inscribirse en la escuela, entrar a la guardería o practicar un deporte, los niños y jóvenes necesitan un chequeo físico. En Clínica Hispana Nueva Salud lo hacemos de forma rápida y completa, con todos los formularios listos: sin cita previa, sin seguro médico y en español.

## ¿Qué incluye?

- **Examen físico general** de pies a cabeza
- **Revisión de signos vitales:** peso, talla, presión arterial, frecuencia cardíaca
- **Evaluación de visión y audición**
- **Revisión de corazón, pulmones, abdomen, columna y articulaciones**, importante para deportes
- **Revisión del historial** de vacunas, alergias y condiciones previas (asma, etc.)
- **Llenado y firma de los formularios** de la escuela, el distrito (HISD, Pasadena ISD y otros) o la liga deportiva
- **Recomendaciones de salud** para la familia, en español

## ¿Para qué sirve?

- **Inscripción escolar** (kínder, primaria, secundaria, preparatoria) y guardería
- **Examen deportivo (sports physical)** para fútbol, béisbol, básquetbol, atletismo, porristas y cualquier actividad escolar
- **Campamentos de verano** y programas extracurriculares
- **Chequeo anual** para saber que tu hijo o hija crece sano

Si tu hijo necesita la [prueba de tuberculosis](/services/prueba-tuberculosis) o un refuerzo de [vacunas](/services/vacunas) para el mismo trámite, lo hacemos en la misma visita.

## ¿Qué debo traer?

- El **formulario de la escuela o del equipo** (si lo tienes; si no, usamos el formato estándar)
- **Cartilla de vacunación** del niño o la niña
- Lista de medicamentos que toma y alergias conocidas
- Lentes o aparatos auditivos, si los usa
- Un padre, madre o tutor debe acompañar a los menores

## ¿Cuándo hacerlo?

Lo ideal es con **2 a 4 semanas de anticipación** al inicio de clases o de la temporada deportiva, para tener tiempo si hace falta algún estudio adicional o una vacuna. En julio y agosto la demanda sube; venir temprano evita esperas.

## ¿Cómo es la visita?

1. Llegan sin cita, se registran y entregan el formulario y la cartilla de vacunas.
2. Se toman signos vitales, peso, talla, visión y audición.
3. El personal médico realiza el examen físico completo y revisa el historial.
4. Se llena y firma el formulario; salen con todo listo para entregar en la escuela.

## Exámenes físicos escolares en una clínica hispana cerca de ti

Si buscas examen físico escolar o deportivo en Houston sin cita, en español y a precio accesible, te atendemos cerca de ti en el sureste de Houston (zona Bellfort / Hobby), de lunes a domingo de 9 AM a 9 PM.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `Before enrolling in school, starting daycare or playing a sport, children and teens need a physical exam. At Clínica Hispana Nueva Salud we do it quickly and thoroughly, with all forms ready: no appointment, no insurance required and in Spanish.

## What's included?

- **Head-to-toe general physical exam**
- **Vital signs:** weight, height, blood pressure, heart rate
- **Vision and hearing screening**
- **Heart, lung, abdomen, spine and joint check**, important for sports
- **Review of vaccination history**, allergies and prior conditions (asthma, etc.)
- **Completion and signature of forms** from the school, district (HISD, Pasadena ISD and others) or sports league
- **Health recommendations** for the family, in Spanish

## What is it for?

- **School enrollment** (kindergarten, elementary, middle, high school) and daycare
- **Sports physical** for soccer, baseball, basketball, track, cheer and any school activity
- **Summer camps** and extracurricular programs
- **Annual checkup** to make sure your child is growing healthy

If your child needs a [TB test](/en/services/prueba-tuberculosis) or a [vaccine](/en/services/vacunas) booster for the same requirement, we do it during the same visit.

## What should I bring?

- The **school or team form** (if you have it; otherwise we use the standard format)
- The child's **vaccination record**
- A list of medications they take and known allergies
- Glasses or hearing aids, if used
- A parent or guardian must accompany minors

## When should I do it?

Ideally **2 to 4 weeks before** school or the sports season starts, to allow time for any additional test or vaccine. Demand rises in July and August; coming early avoids waits.

## What is the visit like?

1. Walk in without an appointment, check in and hand over the form and vaccination record.
2. Vital signs, weight, height, vision and hearing are taken.
3. The medical staff performs the full physical exam and reviews the history.
4. The form is completed and signed; you leave with everything ready to turn in at school.

## School physicals at a Hispanic clinic near you

If you're looking for a school or sports physical in Houston with no appointment, in Spanish and at an affordable price, we're near you in southeast Houston (Bellfort / Hobby area), Monday to Sunday from 9 AM to 9 PM.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "ginecologia",
    order: 6,
    category: "salud-mujer",
    icon: "Flower2",
    highlighted: true,
    title: "Atención Ginecológica: Papanicolaou y Cultivos",
    titleEn: "Gynecology Care: Pap Smear & Cultures",
    metaTitle: "Ginecología en Houston, TX | Clínica Hispana Nueva Salud",
    metaTitleEn: "Gynecology in Houston, TX | Clínica Hispana Nueva Salud",
    shortDescription:
      "Papanicolaou, cultivos vaginales y tratamiento de infecciones vaginales, con privacidad y en español.",
    shortDescriptionEn:
      "Pap smear, vaginal cultures and treatment of vaginal infections, with privacy and in Spanish.",
    description:
      "Atención ginecológica en Houston, TX: papanicolaou, cultivos vaginales y tratamiento de infecciones. En español, con precios accesibles.",
    descriptionEn:
      "Gynecology care in Houston, TX: Pap smear, vaginal cultures and infection treatment. In Spanish, with affordable pricing. Walk-ins welcome, no insurance needed.",
    keywords: [
      "ginecologia en houston",
      "ginecologo houston español",
      "papanicolaou houston",
      "cultivo vaginal houston",
      "infeccion vaginal tratamiento houston",
    ],
    keywordsEn: [
      "gynecology houston",
      "gynecologist houston spanish",
      "pap smear houston",
      "vaginal culture houston",
      "vaginal infection treatment houston",
    ],
    features: [
      "Papanicolaou y chequeo ginecológico",
      "Cultivos vaginales",
      "Tratamiento de infecciones vaginales",
      "Atención privada en español",
    ],
    featuresEn: [
      "Pap smear and gynecological checkup",
      "Vaginal cultures",
      "Treatment of vaginal infections",
      "Private care in Spanish",
    ],
    longDescription: `Tu salud como mujer merece un espacio de confianza. En Clínica Hispana Nueva Salud ofrecemos atención ginecológica en español, con la privacidad y el respeto que mereces: sin cita previa, sin seguro médico y con precios accesibles.

## ¿Qué incluye la consulta ginecológica?

- **Papanicolaou (citología cervical):** detecta a tiempo cambios en el cuello del útero, incluidos los relacionados con el VPH.
- **Chequeo ginecológico de rutina:** revisión general, evaluación de síntomas y orientación sobre tu salud íntima.
- **Cultivos vaginales:** identifican con exactitud si la molestia es por hongos (candidiasis), bacterias (vaginosis) o tricomonas.
- **Tratamiento de infecciones vaginales:** medicamento adecuado según el resultado, no "a ciegas".
- **Evaluación de flujo anormal, comezón, ardor o mal olor.**
- **Orientación sobre [anticonceptivos](/services/anticonceptivos) y [prueba de embarazo](/services/prueba-embarazo)** si lo necesitas en la misma visita.
- **Referencia a especialista** cuando el caso lo requiere (ultrasonido, colposcopia, ginecólogo/a de alta especialidad).

## ¿Cuándo debo hacerme el Papanicolaou?

La mayoría de las guías recomiendan empezar a los 21 años y repetirlo cada 3 años si el resultado es normal (o cada 5 años combinado con prueba de VPH a partir de los 30). Si nunca te lo has hecho, llevas varios años sin hacértelo o tuviste un resultado anormal antes, no lo dejes pasar: es una prueba rápida, de pocos minutos, que puede detectar problemas antes de que den síntomas.

## Señales de que necesitas una consulta ginecológica

- Flujo diferente al habitual, con mal olor o color amarillo/verdoso
- Comezón, ardor o irritación en la zona íntima
- Dolor o sangrado durante o después de las relaciones
- Sangrado fuera del periodo o periodos muy irregulares
- Dolor en la parte baja del abdomen que no se quita
- Molestias que regresan una y otra vez aunque ya te trataste

Una infección vaginal mal tratada o tratada "por internet" suele regresar. Con un cultivo sabemos exactamente qué la causa y qué medicamento sí la resuelve.

## ¿Cómo es la visita?

1. Llegas sin cita y te registras en recepción, en español.
2. Platicas tus síntomas o el motivo de tu chequeo con el personal médico, en privado.
3. Se realiza la revisión y, si aplica, se toma el Papanicolaou o el cultivo.
4. Si hay infección evidente, sales con tu tratamiento el mismo día.
5. Te avisamos cuando los resultados de laboratorio estén listos y te explicamos qué significan.

**Consejo:** para el Papanicolaou es mejor no estar menstruando y evitar relaciones, duchas vaginales u óvulos 48 horas antes. Si tienes dudas, llámanos y te orientamos.

## Ginecología en una clínica hispana cerca de ti

Si buscas ginecología en Houston o un lugar donde hablen tu idioma, en nuestra clínica hispana te atendemos cerca de ti: en español, sin cita previa y con precios accesibles, en el sureste de Houston (zona Bellfort / Hobby). Aquí nadie te juzga; solo queremos que te sientas bien y tranquila con tu salud.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `Your health as a woman deserves a space of trust. At Clínica Hispana Nueva Salud we offer gynecology care in Spanish, with the privacy and respect you deserve: no appointment needed, no insurance required and affordable pricing.

## What does the gynecology visit include?

- **Pap smear (cervical cytology):** detects early changes in the cervix, including those related to HPV.
- **Routine gynecological checkup:** general exam, symptom evaluation and guidance on your intimate health.
- **Vaginal cultures:** pinpoint whether the discomfort is caused by yeast (candidiasis), bacteria (bacterial vaginosis) or trichomonas.
- **Treatment of vaginal infections:** the right medication based on the result, not a guess.
- **Evaluation of abnormal discharge, itching, burning or odor.**
- **Guidance on [birth control](/en/services/anticonceptivos) and [pregnancy testing](/en/services/prueba-embarazo)** if you need it during the same visit.
- **Specialist referral** when the case requires it (ultrasound, colposcopy, a high-specialty gynecologist).

## When should I get a Pap smear?

Most guidelines recommend starting at age 21 and repeating it every 3 years if the result is normal (or every 5 years combined with HPV testing from age 30). If you've never had one, it's been several years, or you had an abnormal result before, don't put it off: it's a quick, few-minute test that can catch problems before they cause symptoms.

## Signs you need a gynecology visit

- Discharge that's different from usual, with odor or a yellow/green color
- Itching, burning or irritation in the intimate area
- Pain or bleeding during or after intercourse
- Bleeding between periods or very irregular periods
- Lower-abdominal pain that won't go away
- Symptoms that keep coming back even after treatment

A vaginal infection that's poorly treated or self-treated "from the internet" usually comes back. With a culture we know exactly what's causing it and which medication truly resolves it.

## What is the visit like?

1. Walk in without an appointment and check in at the front desk, in Spanish.
2. Talk about your symptoms or the reason for your checkup with the medical staff, in private.
3. The exam is performed and, if needed, the Pap smear or culture is taken.
4. If there's an obvious infection, you leave with treatment the same day.
5. We let you know when lab results are ready and explain what they mean.

**Tip:** for a Pap smear it's best not to be on your period and to avoid intercourse, douching or vaginal suppositories for 48 hours beforehand. If you have questions, call us and we'll guide you.

## Gynecology at a Hispanic clinic near you

If you're looking for gynecology care in Houston or a place where they speak your language, our Hispanic clinic is near you: care in Spanish, walk-ins welcome and affordable pricing, in southeast Houston (Bellfort / Hobby area). Nobody judges you here; we just want you to feel well and at ease about your health.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "prueba-embarazo",
    order: 7,
    category: "salud-mujer",
    icon: "Baby",
    title: "Examen y Diagnóstico de Embarazo",
    titleEn: "Pregnancy Testing & Confirmation",
    metaTitle: "Prueba de Embarazo en Houston | Clínica Hispana Nueva Salud",
    metaTitleEn: "Pregnancy Test in Houston, TX | Clínica Hispana Nueva Salud",
    shortDescription:
      "Pruebas de embarazo confiables y orientación sobre tus siguientes pasos, en español.",
    shortDescriptionEn:
      "Reliable pregnancy tests and guidance on your next steps, in Spanish.",
    description:
      "Examen y diagnóstico de embarazo en Houston, TX. Pruebas confiables y orientación en español, con precios accesibles. Sin cita y sin seguro médico.",
    descriptionEn:
      "Pregnancy testing and confirmation in Houston, TX. Reliable tests and guidance in Spanish, with affordable pricing. Walk-ins welcome, no insurance needed.",
    keywords: [
      "prueba de embarazo houston",
      "examen de embarazo houston",
      "confirmar embarazo houston",
      "test de embarazo español houston",
    ],
    keywordsEn: [
      "pregnancy test houston",
      "pregnancy confirmation houston",
      "confirm pregnancy houston",
      "pregnancy testing houston",
    ],
    features: [
      "Prueba de embarazo confiable",
      "Confirmación médica",
      "Orientación sobre próximos pasos",
      "Atención en español",
    ],
    featuresEn: [
      "Reliable pregnancy test",
      "Medical confirmation",
      "Guidance on next steps",
      "Care in Spanish",
    ],
    longDescription: `Si crees que podrías estar embarazada, una prueba confiable te da tranquilidad y claridad. En Clínica Hispana Nueva Salud realizamos pruebas de embarazo y te orientamos sobre lo que sigue, en español y sin juicios.

## ¿Qué incluye?

- Prueba de embarazo (orina o sangre)
- Confirmación médica del resultado
- Orientación sobre tus siguientes pasos
- Información sobre control prenatal y referencias

## Con confianza y respeto

Te explicamos el resultado con claridad y te acompañamos en la decisión que tomes, siempre con respeto y privacidad.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `If you think you might be pregnant, a reliable test gives you peace of mind and clarity. At Clínica Hispana Nueva Salud we perform pregnancy tests and guide you on what comes next, in Spanish and without judgment.

## What's included?

- Pregnancy test (urine or blood)
- Medical confirmation of the result
- Guidance on your next steps
- Information on prenatal care and referrals

## With trust and respect

We explain the result clearly and support you in whatever decision you make, always with respect and privacy.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "anticonceptivos",
    order: 8,
    category: "salud-mujer",
    icon: "Tablets",
    title: "Tratamientos Anticonceptivos",
    titleEn: "Contraceptive Methods",
    metaTitle: "Anticonceptivos en Houston | Clínica Hispana Nueva Salud",
    metaTitleEn: "Birth Control in Houston, TX | Clínica Hispana Nueva Salud",
    shortDescription:
      "Orientación y métodos anticonceptivos (pastillas, inyección y más) para decidir con información, en español.",
    shortDescriptionEn:
      "Guidance and contraceptive methods (pills, injection and more) to decide with clear information, in Spanish.",
    description:
      "Tratamientos anticonceptivos en Houston, TX: orientación, pastillas e inyección. En español, con precios accesibles. Sin cita y sin seguro médico.",
    descriptionEn:
      "Contraceptive methods in Houston, TX: guidance, pills and injection. In Spanish, with affordable pricing. Walk-ins welcome, no insurance needed.",
    keywords: [
      "anticonceptivos houston",
      "metodos anticonceptivos houston",
      "inyeccion anticonceptiva houston",
      "pastillas anticonceptivas houston",
    ],
    keywordsEn: [
      "birth control houston",
      "contraception clinic houston",
      "birth control shot houston",
      "birth control pills houston",
    ],
    features: [
      "Orientación personalizada",
      "Pastillas e inyección anticonceptiva",
      "Inicio y seguimiento del método",
      "Atención en español",
    ],
    featuresEn: [
      "Personalized guidance",
      "Birth control pills and injection",
      "Method start and follow-up",
      "Care in Spanish",
    ],
    longDescription: `Decidir cuándo y cómo formar tu familia es tu derecho. En Clínica Hispana Nueva Salud te damos información clara, en español y sin juicios para que elijas el método anticonceptivo que mejor se adapta a ti: sin cita previa, sin seguro médico y con precios accesibles.

## ¿Qué incluye?

- **Consulta de orientación personalizada:** revisamos tu salud, tus planes y tu estilo de vida
- **Información sobre los distintos métodos** y cómo se comparan en eficacia, comodidad y efectos secundarios
- **Pastillas anticonceptivas e inyección anticonceptiva**, con inicio en la clínica
- **Inicio y seguimiento del método elegido**, para ajustar si algo no te sienta bien
- **Resolución de dudas** sobre olvidos, sangrados irregulares u otros efectos
- **Referencia** si prefieres un método que requiere especialista (DIU, implante)

Si ya tienes un implante y quieres retirarlo, contamos con [extracción de implantes subdérmicos](/services/extraccion-implantes).

## Pastillas o inyección: ¿cuál me conviene?

- **Pastillas:** se toman todos los días a la misma hora. Buena opción si eres constante y quieres poder suspender fácilmente. Algunas también ayudan con el acné o con periodos dolorosos.
- **Inyección:** se aplica cada 3 meses. Ideal si prefieres no pensar en ello a diario o no puedes guardar pastillas en casa. Puede alterar el patrón de sangrado los primeros meses.

En la consulta valoramos factores como presión alta, migrañas, tabaquismo, lactancia o antecedentes de trombosis, que influyen en cuál método es seguro para ti.

## ¿Cuándo empezar y qué esperar?

- Puedes iniciar en cualquier momento del ciclo; te explicamos cuántos días usar protección adicional.
- Los primeros 2-3 meses es común tener sangrados ligeros fuera de fecha; suelen desaparecer.
- Si olvidaste pastillas o se te pasó la inyección, llámanos: te decimos qué hacer y si conviene una [prueba de embarazo](/services/prueba-embarazo).

## ¿Cómo es la visita?

1. Llegas sin cita y te registras en recepción.
2. Platicas en privado con el personal médico sobre lo que buscas y tu historial.
3. Se revisan presión arterial y datos básicos de salud.
4. Eliges el método con toda la información y, si aplica, sales con tu receta o tu inyección el mismo día.
5. Programamos el seguimiento o tu siguiente inyección.

Si además quieres un chequeo completo, podemos hacer en la misma visita tu [consulta ginecológica y Papanicolaou](/services/ginecologia).

## Anticonceptivos en una clínica hispana cerca de ti

Si buscas orientación anticonceptiva en Houston en español, confidencial y a precio accesible, te atendemos cerca de ti en el sureste de Houston (zona Bellfort / Hobby), de lunes a domingo de 9 AM a 9 PM.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `Deciding when and how to build your family is your right. At Clínica Hispana Nueva Salud we give you clear, judgment-free information in Spanish so you can choose the birth control method that fits you best: no appointment, no insurance required and affordable pricing.

## What's included?

- **Personalized counseling visit:** we review your health, your plans and your lifestyle
- **Information on the different methods** and how they compare in effectiveness, convenience and side effects
- **Birth control pills and the contraceptive injection**, started at the clinic
- **Starting and following up on your chosen method**, to adjust if something doesn't suit you
- **Answers to your questions** about missed doses, irregular bleeding or other effects
- **Referral** if you prefer a method that requires a specialist (IUD, implant)

If you already have an implant and want it removed, we offer [subdermal implant removal](/en/services/extraccion-implantes).

## Pills or injection: which is right for me?

- **Pills:** taken every day at the same time. A good option if you're consistent and want to be able to stop easily. Some also help with acne or painful periods.
- **Injection:** given every 3 months. Ideal if you'd rather not think about it daily or can't keep pills at home. It may change your bleeding pattern during the first months.

During the visit we consider factors like high blood pressure, migraines, smoking, breastfeeding or a history of blood clots, which affect which method is safe for you.

## When to start and what to expect

- You can start at any point in your cycle; we explain how many days to use backup protection.
- During the first 2-3 months, light bleeding between periods is common; it usually goes away.
- If you missed pills or your injection is overdue, call us: we'll tell you what to do and whether a [pregnancy test](/en/services/prueba-embarazo) makes sense.

## What is the visit like?

1. Walk in without an appointment and check in at the front desk.
2. Talk privately with the medical staff about what you're looking for and your history.
3. Blood pressure and basic health data are checked.
4. You choose the method with full information and, if applicable, leave with your prescription or injection the same day.
5. We schedule your follow-up or next injection.

If you also want a full checkup, we can do your [gynecology visit and Pap smear](/en/services/ginecologia) during the same visit.

## Birth control at a Hispanic clinic near you

If you're looking for confidential, affordable birth control counseling in Houston in Spanish, we're near you in southeast Houston (Bellfort / Hobby area), Monday to Sunday from 9 AM to 9 PM.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "extraccion-implantes",
    order: 9,
    category: "salud-mujer",
    icon: "Bandage",
    title: "Extracción de Implantes Subdérmicos",
    titleEn: "Subdermal Implant Removal",
    metaTitle: "Retiro de Implante en Houston | Clínica Hispana Nueva Salud",
    metaTitleEn: "Implant Removal in Houston | Clínica Hispana Nueva Salud",
    shortDescription:
      "Retiro seguro de implantes anticonceptivos subdérmicos del brazo, por personal capacitado.",
    shortDescriptionEn:
      "Safe removal of subdermal arm contraceptive implants by trained staff.",
    description:
      "Extracción de implantes subdérmicos en Houston, TX, procedimiento seguro y en español. Con precios accesibles. Sin cita y sin seguro médico.",
    descriptionEn:
      "Subdermal implant removal in Houston, TX, a safe procedure in Spanish. With affordable pricing. Walk-ins welcome, no insurance needed.",
    keywords: [
      "extraccion de implante subdermico houston",
      "quitar implante del brazo houston",
      "retiro de implante anticonceptivo houston",
      "remover implante houston",
    ],
    keywordsEn: [
      "subdermal implant removal houston",
      "arm implant removal houston",
      "contraceptive implant removal houston",
      "birth control implant removal houston",
    ],
    features: [
      "Procedimiento ambulatorio",
      "Anestesia local",
      "Personal capacitado",
      "Cuidado posterior explicado",
    ],
    featuresEn: [
      "Outpatient procedure",
      "Local anesthesia",
      "Trained staff",
      "After-care explained",
    ],
    longDescription: `Si llegó el momento de retirar tu implante subdérmico —porque caducó o porque deseas cambiar de método— en Clínica Hispana Nueva Salud lo hacemos de forma segura, rápida y con cuidado.

## ¿Qué incluye?

- Evaluación y localización del implante
- Extracción ambulatoria con anestesia local
- Indicaciones claras de cuidado posterior
- Orientación sobre tus próximos pasos de planificación

## Un procedimiento sencillo

El retiro suele tomar pocos minutos y se realiza con una pequeña incisión. Te explicamos cada paso en español para que estés tranquila.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `If it's time to remove your subdermal implant —because it expired or you want to switch methods— at Clínica Hispana Nueva Salud we do it safely, quickly and with care.

## What's included?

- Evaluation and location of the implant
- Outpatient removal with local anesthesia
- Clear after-care instructions
- Guidance on your next family-planning steps

## A simple procedure

Removal usually takes only a few minutes through a small incision. We explain every step in Spanish so you feel at ease.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "salud-hombre",
    order: 10,
    category: "medicina-general",
    icon: "Mars",
    highlighted: true,
    title: "Exámenes del Hombre: PSA y Testosterona",
    titleEn: "Men's Health Exams: PSA & Testosterone",
    metaTitle: "Salud del Hombre en Houston | Clínica Hispana Nueva Salud",
    metaTitleEn: "Men's Health Exams in Houston | Clínica Hispana Nueva Salud",
    shortDescription:
      "Exámenes de salud del hombre: antígeno prostático (PSA), testosterona y chequeo general, en español.",
    shortDescriptionEn:
      "Men's health exams: prostate antigen (PSA), testosterone and general checkup, in Spanish.",
    description:
      "Exámenes del hombre en Houston, TX: PSA y testosterona. Laboratorio y atención en español, con precios accesibles. Sin cita y sin seguro médico.",
    descriptionEn:
      "Men's health exams in Houston, TX: PSA and testosterone. Lab work and care in Spanish, with affordable pricing. Walk-ins welcome, no insurance needed.",
    keywords: [
      "examen del hombre houston",
      "prueba psa houston",
      "examen de prostata houston",
      "examen de testosterona houston",
    ],
    keywordsEn: [
      "mens health houston",
      "psa test houston",
      "prostate exam houston",
      "testosterone test houston",
    ],
    features: [
      "Antígeno prostático (PSA)",
      "Nivel de testosterona",
      "Chequeo general del hombre",
      "Resultados explicados en español",
    ],
    featuresEn: [
      "Prostate antigen (PSA)",
      "Testosterone level",
      "General men's checkup",
      "Results explained in Spanish",
    ],
    longDescription: `La salud del hombre muchas veces se posterga: "no me duele nada", "no tengo tiempo". En Clínica Hispana Nueva Salud facilitamos los exámenes que ayudan a detectar a tiempo cambios importantes en la próstata y en tus hormonas, con resultados explicados en español: sin cita previa, sin seguro médico y con precios accesibles.

## ¿Qué incluye el chequeo del hombre?

- **Antígeno prostático específico (PSA):** examen de sangre que ayuda a vigilar la salud de la próstata
- **Nivel de testosterona:** la hormona que influye en energía, ánimo, masa muscular y deseo sexual
- **Chequeo general:** presión arterial, peso, signos vitales y revisión de síntomas
- **Evaluación de síntomas urinarios** (levantarse de noche a orinar, chorro débil, goteo) o de falta de energía
- **Referencia a urólogo o especialista** cuando el resultado lo amerita

Si quieres un panorama completo, podemos combinarlo con [exámenes de sangre](/services/examenes-sangre) de glucosa, colesterol y [tiroides](/services/tiroides) en la misma extracción.

## ¿A qué edad y cada cuánto?

- **PSA:** en general a partir de los 50 años, o desde los 40-45 si tienes familiares (padre, hermano) con cáncer de próstata. Se repite cada 1 a 2 años según el resultado.
- **Testosterona:** a cualquier edad si tienes síntomas de testosterona baja (ver abajo). Se mide en la mañana, que es cuando está más alta.

## Señales de que conviene revisarte

- Te levantas varias veces en la noche a orinar
- Chorro de orina débil, intermitente o sensación de no vaciar
- Cansancio constante, poca energía o ánimo bajo
- Menos deseo sexual o dificultad para mantener una erección
- Pérdida de masa muscular o aumento de grasa abdominal
- Dolor en la parte baja de la espalda o en la pelvis sin causa clara

Muchos de estos síntomas tienen solución cuando se detecta la causa. Ignorarlos no los hace desaparecer.

## ¿Cómo me preparo?

- Para el PSA: evita relaciones sexuales, bicicleta y ejercicio intenso 48 horas antes, porque pueden elevar el resultado.
- Para testosterona: ven por la mañana, idealmente antes de las 10 AM.
- Si además te harás glucosa o colesterol, ayuna de 8 a 12 horas.

## ¿Cómo es la visita?

1. Llegas sin cita, te registras y nos cuentas tus síntomas o tu interés en el chequeo.
2. Se toma la muestra de sangre en la clínica; tarda pocos minutos.
3. El personal médico revisa tus signos vitales y evalúa tus síntomas.
4. Cuando el laboratorio entrega los resultados, te los explicamos en español y definimos los siguientes pasos.

## Salud del hombre en una clínica hispana cerca de ti

Si buscas un examen de próstata (PSA) o de testosterona en Houston sin cita, en español y a precio accesible, te atendemos cerca de ti en el sureste de Houston (zona Bellfort / Hobby), de lunes a domingo de 9 AM a 9 PM.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `Men's health often gets put off: "nothing hurts," "I don't have time." At Clínica Hispana Nueva Salud we make it easy to get the tests that detect important changes in the prostate and your hormones early, with results explained in Spanish: no appointment, no insurance required and affordable pricing.

## What does the men's checkup include?

- **Prostate-specific antigen (PSA):** a blood test that helps monitor prostate health
- **Testosterone level:** the hormone that affects energy, mood, muscle mass and sex drive
- **General checkup:** blood pressure, weight, vital signs and symptom review
- **Evaluation of urinary symptoms** (getting up at night to urinate, weak stream, dribbling) or low energy
- **Referral to a urologist or specialist** when the result warrants it

If you want a full picture, we can combine it with [blood tests](/en/services/examenes-sangre) for glucose, cholesterol and [thyroid](/en/services/tiroides) in the same draw.

## At what age and how often?

- **PSA:** generally from age 50, or from 40-45 if you have relatives (father, brother) with prostate cancer. Repeated every 1 to 2 years depending on the result.
- **Testosterone:** at any age if you have symptoms of low testosterone (see below). It's measured in the morning, when it's highest.

## Signs it's time to get checked

- You get up several times a night to urinate
- Weak or intermittent urine stream, or a feeling of not emptying
- Constant tiredness, low energy or low mood
- Less sex drive or difficulty keeping an erection
- Loss of muscle mass or increased belly fat
- Lower-back or pelvic pain with no clear cause

Many of these symptoms can be solved once the cause is found. Ignoring them doesn't make them go away.

## How do I prepare?

- For PSA: avoid sex, cycling and intense exercise for 48 hours before, since they can raise the result.
- For testosterone: come in the morning, ideally before 10 AM.
- If you're also testing glucose or cholesterol, fast for 8 to 12 hours.

## What is the visit like?

1. Walk in without an appointment, check in and tell us your symptoms or interest in the checkup.
2. The blood sample is drawn at the clinic; it takes a few minutes.
3. The medical staff checks your vital signs and evaluates your symptoms.
4. When the lab returns the results, we explain them in Spanish and define next steps.

## Men's health at a Hispanic clinic near you

If you're looking for a prostate (PSA) or testosterone test in Houston with no appointment, in Spanish and at an affordable price, we're near you in southeast Houston (Bellfort / Hobby area), Monday to Sunday from 9 AM to 9 PM.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "examenes-sangre",
    order: 11,
    category: "laboratorio",
    icon: "FlaskConical",
    highlighted: true,
    title: "Análisis y Exámenes de Sangre | Laboratorio",
    titleEn: "Blood Tests | Lab",
    metaTitle: "Exámenes de Sangre en Houston | Clínica Hispana Nueva Salud",
    metaTitleEn: "Blood Tests in Houston, TX | Clínica Hispana Nueva Salud",
    shortDescription:
      "Análisis de sangre completos con resultados rápidos e interpretación en español, sin cita previa.",
    shortDescriptionEn:
      "Complete blood work with fast results and results explained in Spanish, no appointment needed.",
    description:
      "Análisis de sangre en Houston, TX: biometría, química, glucosa, colesterol y más. Resultados en español, con precios accesibles. Sin cita y sin seguro médico.",
    descriptionEn:
      "Blood tests in Houston, TX: CBC, chemistry, glucose, cholesterol and more. Results in Spanish, with affordable pricing. Walk-ins welcome, no insurance needed.",
    keywords: [
      "examenes de sangre houston",
      "analisis de sangre houston",
      "laboratorio houston",
      "laboratorio cerca de mi houston",
    ],
    keywordsEn: [
      "blood test houston",
      "blood work houston",
      "lab near me houston",
      "clinical lab houston",
    ],
    features: [
      "Biometría y química sanguínea",
      "Glucosa, colesterol y triglicéridos",
      "Pruebas de tiroides, hígado y riñón",
      "Resultados explicados en español",
    ],
    featuresEn: [
      "CBC and blood chemistry",
      "Glucose, cholesterol and triglycerides",
      "Thyroid, liver and kidney tests",
      "Results explained in Spanish",
    ],
    longDescription: `Un buen diagnóstico empieza con un buen laboratorio. En Clínica Hispana Nueva Salud tomamos tus muestras en el momento y te explicamos los resultados en español, sin tecnicismos.

## ¿Qué incluye?

- Biometría hemática completa (conteo de células)
- Química sanguínea (glucosa, colesterol, triglicéridos)
- Pruebas de tiroides, hígado y riñón
- Paneles para chequeo general o seguimiento
- Resultados rápidos en la mayoría de los casos

## Para qué sirven

Los análisis ayudan a detectar problemas antes de que den síntomas, dar seguimiento a una condición crónica o completar un examen de trabajo o escuela.

## Análisis de sangre en una clínica hispana cerca de ti

¿Necesitas un análisis de sangre en Houston? En nuestra clínica hispana te tomamos la muestra sin cita previa, con precios accesibles y resultados explicados en español.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `A good diagnosis starts with a good lab. At Clínica Hispana Nueva Salud we draw your samples on the spot and explain your results in Spanish, without the jargon.

## What's included?

- Complete blood count (CBC)
- Blood chemistry (glucose, cholesterol, triglycerides)
- Thyroid, liver and kidney tests
- Panels for general checkups or follow-up
- Fast results in most cases

## Why they matter

Blood tests help detect problems before symptoms appear, follow up on a chronic condition or complete a work or school exam.

## Blood work at a Hispanic clinic near you

Need blood work in Houston? At our Hispanic clinic we draw your sample with no appointment needed, at affordable prices, with results explained in Spanish.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "infecciones-urinarias",
    order: 12,
    category: "tratamientos",
    icon: "Droplet",
    title: "Examen de Orina y Tratamiento de Infecciones Urinarias",
    titleEn: "Urinalysis & Urinary Infection Treatment",
    metaTitle: "Infección Urinaria en Houston | Clínica Hispana Nueva Salud",
    metaTitleEn: "UTI Treatment in Houston, TX | Clínica Hispana Nueva Salud",
    shortDescription:
      "Examen de orina y tratamiento de infecciones urinarias el mismo día, en español.",
    shortDescriptionEn:
      "Urinalysis and same-day urinary infection treatment, in Spanish.",
    description:
      "Examen de orina y tratamiento de infecciones urinarias en Houston, TX, el mismo día. En español, con precios accesibles. Sin cita y sin seguro médico.",
    descriptionEn:
      "Urinalysis and urinary infection treatment in Houston, TX, same day. In Spanish, with affordable pricing. Walk-ins welcome, no insurance needed.",
    keywords: [
      "examen de orina houston",
      "infeccion urinaria houston",
      "tratamiento infeccion urinaria houston",
      "doctor infeccion de orina houston",
    ],
    keywordsEn: [
      "urinalysis houston",
      "urinary tract infection houston",
      "uti treatment houston",
      "uti doctor houston",
    ],
    features: [
      "Examen de orina en la clínica",
      "Diagnóstico de infección urinaria",
      "Tratamiento el mismo día",
      "Atención sin cita en español",
    ],
    featuresEn: [
      "In-clinic urinalysis",
      "Diagnosis of urinary infection",
      "Same-day treatment",
      "Walk-in care in Spanish",
    ],
    longDescription: `El ardor al orinar no es algo con lo que debas "aguantar". En Clínica Hispana Nueva Salud te hacemos el examen de orina en la clínica y, si hay infección urinaria, empiezas el tratamiento el mismo día: sin cita previa, sin seguro médico y en español.

## ¿Qué incluye?

- **Examen general de orina (urianálisis)** con resultado en la misma visita
- **Evaluación de síntomas** y revisión médica
- **Diagnóstico de infección urinaria** (cistitis) y descarte de otras causas
- **Tratamiento el mismo día** con el antibiótico adecuado
- **Urocultivo** cuando la infección se repite o no mejora, para saber qué bacteria es y qué antibiótico sí funciona
- **Indicaciones claras** para aliviar las molestias y evitar que regrese

## Síntomas de infección urinaria

- Ardor o dolor al orinar
- Ganas constantes de ir al baño, aunque salga muy poco
- Orina turbia, oscura, con mal olor o con sangre
- Dolor o presión en la parte baja del abdomen
- En algunos casos, fiebre, escalofríos o dolor en la espalda baja (a la altura de los riñones)

Si tienes fiebre, escalofríos o dolor en la espalda, no esperes: puede ser una infección que ya subió a los riñones y necesita atención ese mismo día.

## ¿Por qué no debo esperar ni automedicarme?

Tomar un antibiótico "que te sobró" o el que le sirvió a alguien más puede enmascarar los síntomas sin eliminar la bacteria, y hace que la infección regrese más resistente. Una infección de orina sin tratar correctamente puede avanzar a los riñones (pielonefritis). El examen de orina tarda minutos y te da la certeza de qué tienes y qué tomar.

## Infecciones urinarias frecuentes: ¿qué hacer?

Si te da infección varias veces al año, no es normal y tiene solución. En la consulta revisamos posibles causas (hidratación, hábitos, diabetes, cambios hormonales, piedras en el riñón) y, si es necesario, pedimos un urocultivo o [exámenes de sangre](/services/examenes-sangre) para buscar el origen. En mujeres, a veces la molestia viene de una infección vaginal y no urinaria: nuestra [atención ginecológica](/services/ginecologia) puede hacer la diferencia en el diagnóstico.

## ¿Cómo es la visita?

1. Llegas sin cita y te registras en recepción.
2. Das una muestra de orina en la clínica (lo ideal es no haber orinado en la última hora).
3. El personal médico evalúa tus síntomas y el resultado del examen.
4. Si hay infección, sales con tu receta y tu tratamiento ese mismo día; contamos con [farmacia dentro de la clínica](/services/farmacia).
5. Te indicamos cuándo volver si las molestias no mejoran en 2-3 días.

## Tratamiento de infecciones urinarias en una clínica hispana cerca de ti

Somos una clínica hispana cerca de ti en Houston, en la zona de Bellfort / Hobby: te hacemos el examen de orina y, si hay infección, sales con tu tratamiento el mismo día, sin cita previa y en español, de lunes a domingo de 9 AM a 9 PM.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `Burning when you urinate isn't something you should "put up with." At Clínica Hispana Nueva Salud we run the urine test in-clinic and, if there's a urinary tract infection, you start treatment the same day: no appointment, no insurance required, and in Spanish.

## What's included?

- **General urinalysis** with results during the same visit
- **Symptom evaluation** and medical exam
- **Diagnosis of urinary tract infection** (cystitis) and ruling out other causes
- **Same-day treatment** with the appropriate antibiotic
- **Urine culture** when the infection keeps coming back or doesn't improve, to identify the bacteria and the antibiotic that actually works
- **Clear instructions** to relieve symptoms and keep it from returning

## UTI symptoms

- Burning or pain when urinating
- A constant urge to go, even if very little comes out
- Cloudy, dark, foul-smelling or bloody urine
- Pain or pressure in the lower abdomen
- In some cases, fever, chills or lower-back pain (around the kidneys)

If you have fever, chills or back pain, don't wait: it may be an infection that has already reached the kidneys and needs care that same day.

## Why you shouldn't wait or self-medicate

Taking a "leftover" antibiotic or the one that worked for someone else can mask symptoms without eliminating the bacteria, and makes the infection come back more resistant. An improperly treated UTI can progress to the kidneys (pyelonephritis). The urine test takes minutes and tells you exactly what you have and what to take.

## Recurring UTIs: what to do?

If you get infections several times a year, that's not normal and it can be fixed. During the visit we review possible causes (hydration, habits, diabetes, hormonal changes, kidney stones) and, if needed, order a urine culture or [blood tests](/en/services/examenes-sangre) to find the source. In women, the discomfort sometimes comes from a vaginal rather than urinary infection: our [gynecology care](/en/services/ginecologia) can make the difference in the diagnosis.

## What is the visit like?

1. Walk in without an appointment and check in at the front desk.
2. Provide a urine sample at the clinic (ideally without having urinated in the past hour).
3. The medical staff evaluates your symptoms and the test result.
4. If there's an infection, you leave with your prescription and treatment that same day; we have a [pharmacy inside the clinic](/en/services/farmacia).
5. We tell you when to come back if symptoms don't improve in 2-3 days.

## UTI treatment at a Hispanic clinic near you

We are a Hispanic clinic near you in Houston, in the Bellfort / Hobby area: we run your urine test and, if there's an infection, you leave with treatment the same day, no appointment, in Spanish, Monday to Sunday from 9 AM to 9 PM.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "examen-heces",
    order: 13,
    category: "laboratorio",
    icon: "TestTubes",
    title: "Exámenes de Heces Fecales",
    titleEn: "Stool Tests",
    metaTitle: "Examen de Heces en Houston | Clínica Hispana Nueva Salud",
    metaTitleEn: "Stool Test in Houston, TX | Clínica Hispana Nueva Salud",
    shortDescription:
      "Análisis de heces fecales para detectar infecciones y problemas digestivos, en español.",
    shortDescriptionEn:
      "Stool analysis to detect infections and digestive problems, in Spanish.",
    description:
      "Exámenes de heces fecales en Houston, TX. Detección de parásitos e infecciones, en español, con precios accesibles. Sin cita y sin seguro médico.",
    descriptionEn:
      "Stool tests in Houston, TX. Detection of parasites and infections, in Spanish, with affordable pricing. Walk-ins welcome, no insurance needed.",
    keywords: [
      "examen de heces houston",
      "analisis de heces fecales houston",
      "examen de parasitos houston",
      "laboratorio heces houston",
    ],
    keywordsEn: [
      "stool test houston",
      "stool analysis houston",
      "parasite test houston",
      "stool lab houston",
    ],
    features: [
      "Análisis de heces fecales",
      "Detección de parásitos e infecciones",
      "Evaluación de síntomas digestivos",
      "Resultados explicados en español",
    ],
    featuresEn: [
      "Stool analysis",
      "Detection of parasites and infections",
      "Digestive symptom evaluation",
      "Results explained in Spanish",
    ],
    longDescription: `Los problemas digestivos a veces tienen una causa que solo un análisis de heces puede revelar. En Clínica Hispana Nueva Salud realizamos exámenes de heces fecales para encontrar el origen y darte el tratamiento correcto.

## ¿Qué incluye?

- Análisis general de heces fecales
- Detección de parásitos
- Identificación de infecciones intestinales
- Evaluación de sangre oculta cuando se requiere
- Resultados explicados en español

## Cuándo es útil

Diarrea persistente, dolor abdominal, gases, cambios en las evacuaciones o pérdida de peso sin explicación. El examen ayuda a un diagnóstico preciso.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `Digestive problems sometimes have a cause that only a stool test can reveal. At Clínica Hispana Nueva Salud we perform stool tests to find the source and give you the right treatment.

## What's included?

- General stool analysis
- Parasite detection
- Identification of intestinal infections
- Occult-blood evaluation when needed
- Results explained in Spanish

## When it helps

Persistent diarrhea, abdominal pain, gas, changes in bowel movements or unexplained weight loss. The test helps with an accurate diagnosis.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "prueba-strep",
    order: 14,
    category: "laboratorio",
    icon: "TestTube",
    title: "Prueba de Estreptococo (Strep Test)",
    titleEn: "Strep Test",
    metaTitle: "Prueba de Strep en Houston | Clínica Hispana Nueva Salud",
    metaTitleEn: "Strep Test in Houston, TX | Clínica Hispana Nueva Salud",
    shortDescription:
      "Prueba rápida de estreptococo (strep) para el dolor de garganta, con resultado el mismo día.",
    shortDescriptionEn:
      "Rapid strep test for sore throat, with same-day result.",
    description:
      "Prueba de estreptococo (strep test) en Houston, TX. Resultado rápido y tratamiento en español, con precios accesibles. Sin cita y sin seguro médico.",
    descriptionEn:
      "Strep test in Houston, TX. Fast result and treatment in Spanish, with affordable pricing. Walk-ins welcome, no insurance needed.",
    keywords: [
      "prueba de estreptococo houston",
      "strep test houston",
      "prueba de garganta houston",
      "dolor de garganta doctor houston",
    ],
    keywordsEn: [
      "strep test houston",
      "rapid strep test houston",
      "sore throat test houston",
      "strep throat doctor houston",
    ],
    features: [
      "Prueba rápida de estreptococo",
      "Resultado el mismo día",
      "Tratamiento si es positivo",
      "Atención sin cita en español",
    ],
    featuresEn: [
      "Rapid strep test",
      "Same-day result",
      "Treatment if positive",
      "Walk-in care in Spanish",
    ],
    longDescription: `No todo dolor de garganta es igual: la faringitis por estreptococo necesita tratamiento específico. En Clínica Hispana Nueva Salud hacemos la prueba rápida de strep y te damos el resultado y el tratamiento el mismo día.

## ¿Qué incluye?

- Prueba rápida de estreptococo (hisopado de garganta)
- Resultado en pocos minutos
- Evaluación del dolor de garganta
- Tratamiento adecuado si el resultado es positivo
- Indicaciones de recuperación

## Cuándo hacerla

Dolor de garganta fuerte, fiebre, dificultad para tragar o placas blancas en las amígdalas, sobre todo en niños. La prueba evita tratamientos innecesarios.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `Not every sore throat is the same: strep throat needs specific treatment. At Clínica Hispana Nueva Salud we run the rapid strep test and give you the result and treatment the same day.

## What's included?

- Rapid strep test (throat swab)
- Result in minutes
- Sore-throat evaluation
- Appropriate treatment if the result is positive
- Recovery instructions

## When to get it

Severe sore throat, fever, trouble swallowing or white patches on the tonsils, especially in children. The test avoids unnecessary treatments.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "prueba-tuberculosis",
    order: 15,
    category: "laboratorio",
    icon: "ShieldPlus",
    title: "Examen de Tuberculosis (TB)",
    titleEn: "Tuberculosis (TB) Test",
    metaTitle: "Prueba de Tuberculosis Houston | Clínica Hispana Nueva Salud",
    metaTitleEn: "TB Test in Houston, TX | Clínica Hispana Nueva Salud",
    shortDescription:
      "Prueba de tuberculosis (PPD) para trabajo, escuela o trámites, con lectura en español.",
    shortDescriptionEn:
      "Tuberculosis (PPD) test for work, school or paperwork, with reading in Spanish.",
    description:
      "Examen de tuberculosis (TB/PPD) en Houston, TX. Para trabajo y escuela, en español, con precios accesibles. Sin cita y sin seguro médico.",
    descriptionEn:
      "Tuberculosis (TB/PPD) test in Houston, TX. For work and school, in Spanish, with affordable pricing. Walk-ins welcome, no insurance needed.",
    keywords: [
      "examen de tuberculosis houston",
      "prueba ppd houston",
      "prueba de tb houston",
      "tb test español houston",
    ],
    keywordsEn: [
      "tuberculosis test houston",
      "ppd test houston",
      "tb test houston",
      "tb skin test houston",
    ],
    features: [
      "Prueba cutánea de tuberculosis (PPD)",
      "Lectura del resultado",
      "Útil para trabajo y escuela",
      "Atención en español",
    ],
    featuresEn: [
      "Tuberculosis skin test (PPD)",
      "Result reading",
      "Useful for work and school",
      "Care in Spanish",
    ],
    longDescription: `Muchos trabajos y escuelas piden una prueba de tuberculosis al día. En Clínica Hispana Nueva Salud la aplicamos y leemos el resultado, con todo explicado en español.

## ¿Qué incluye?

- Prueba cutánea de tuberculosis (PPD)
- Cita de lectura del resultado (48–72 horas después)
- Documentación del resultado para tu trámite
- Orientación si el resultado requiere seguimiento

## Para qué la piden

Empleos de salud, escuelas, trámites y voluntariado suelen requerir una prueba de TB vigente. Te ayudamos a cumplir el requisito sin complicaciones.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `Many jobs and schools require an up-to-date tuberculosis test. At Clínica Hispana Nueva Salud we administer it and read the result, with everything explained in Spanish.

## What's included?

- Tuberculosis skin test (PPD)
- Result-reading appointment (48–72 hours later)
- Documentation of the result for your paperwork
- Guidance if the result needs follow-up

## Why it's required

Healthcare jobs, schools, paperwork and volunteering often require a current TB test. We help you meet the requirement without hassle.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "enfermedades-transmision-sexual",
    order: 16,
    category: "laboratorio",
    icon: "ShieldCheck",
    title: "Pruebas de Enfermedades de Transmisión Sexual (STD)",
    titleEn: "Sexually Transmitted Disease (STD) Testing",
    metaTitle: "Pruebas de ETS en Houston | Clínica Hispana Nueva Salud",
    metaTitleEn: "STD Testing in Houston, TX | Clínica Hispana Nueva Salud",
    shortDescription:
      "Pruebas de enfermedades de transmisión sexual confidenciales y sin juicios, con tratamiento.",
    shortDescriptionEn:
      "Confidential, judgment-free sexually transmitted disease testing, with treatment.",
    description:
      "Pruebas de ETS/STD confidenciales en Houston, TX. Resultados y tratamiento en español, con precios accesibles. Sin cita y sin seguro médico.",
    descriptionEn:
      "Confidential STD testing in Houston, TX. Results and treatment in Spanish, with affordable pricing. Walk-ins welcome, no insurance needed.",
    keywords: [
      "prueba std houston",
      "examen de transmision sexual houston",
      "prueba ets confidencial houston",
      "clinica std español houston",
    ],
    keywordsEn: [
      "std testing houston",
      "std test near me houston",
      "confidential std clinic houston",
      "sti testing houston",
    ],
    features: [
      "Pruebas confidenciales y sin juicios",
      "Evaluación de síntomas y riesgo",
      "Tratamiento disponible",
      "Atención en español",
    ],
    featuresEn: [
      "Confidential, judgment-free testing",
      "Symptom and risk assessment",
      "Treatment available",
      "Care in Spanish",
    ],
    longDescription: `Cuidar tu salud sexual es un acto de responsabilidad contigo y con tu pareja. En Clínica Hispana Nueva Salud ofrecemos pruebas de enfermedades de transmisión sexual (ETS / STD) de forma confidencial, respetuosa y sin juicios, con tratamiento cuando es necesario: sin cita previa, sin seguro médico y en español.

## ¿Qué incluye?

- **Evaluación privada** de síntomas y factores de riesgo
- **Pruebas de las infecciones más comunes:** clamidia, gonorrea, sífilis, VIH, herpes, tricomonas y hepatitis, según tu caso
- **Análisis de laboratorio** en sangre, orina o muestra según la prueba
- **Tratamiento y orientación** si el resultado es positivo
- **Orientación para tu pareja**, para que ambos se traten y no haya reinfección
- **Total confidencialidad:** tus resultados son solo tuyos

## ¿Cuándo hacerte la prueba?

- Tuviste relaciones sin protección o se rompió el condón
- Tienes una pareja nueva o más de una pareja
- Tu pareja te dijo que tiene una infección
- Presentas síntomas (ver abajo)
- Simplemente quieres estar tranquilo o tranquila: muchas ETS no dan síntomas

Ten en cuenta que cada infección tiene un "periodo de ventana": por ejemplo, clamidia y gonorrea se detectan a partir de 1-2 semanas del contacto, y VIH y sífilis pueden requerir algunas semanas más. Te indicamos cuándo conviene hacer o repetir la prueba.

## Síntomas que no debes ignorar

- Ardor al orinar o secreción por el pene o la vagina
- Llagas, ampollas, verrugas o ronchas en la zona genital o la boca
- Comezón, irritación o mal olor
- Dolor en el bajo vientre o durante las relaciones
- Sangrado entre periodos

Muchas de estas molestias se confunden con una [infección urinaria](/services/infecciones-urinarias) o una infección vaginal. Por eso evaluamos tu caso completo y, en mujeres, podemos complementar con [atención ginecológica](/services/ginecologia).

## ¿Cómo es la visita?

1. Llegas sin cita y te registras; nadie pregunta el motivo en voz alta.
2. Platicas en privado con el personal médico sobre tus síntomas o tu preocupación.
3. Se toman las muestras necesarias (sangre, orina o hisopado), en pocos minutos.
4. Si hay síntomas claros, puedes iniciar tratamiento el mismo día.
5. Te avisamos de forma discreta cuando los resultados estén listos y te explicamos los siguientes pasos.

## Pruebas de ETS en una clínica hispana cerca de ti

Si buscas pruebas de enfermedades de transmisión sexual en Houston de forma confidencial, en español y a precio accesible, te atendemos cerca de ti en el sureste de Houston (zona Bellfort / Hobby), de lunes a domingo de 9 AM a 9 PM.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `Taking care of your sexual health is an act of responsibility to yourself and your partner. At Clínica Hispana Nueva Salud we offer confidential, respectful, judgment-free STD testing, with treatment when needed: no appointment, no insurance required and in Spanish.

## What's included?

- **Private evaluation** of symptoms and risk factors
- **Testing for the most common infections:** chlamydia, gonorrhea, syphilis, HIV, herpes, trichomonas and hepatitis, depending on your case
- **Lab analysis** of blood, urine or a swab depending on the test
- **Treatment and guidance** if the result is positive
- **Guidance for your partner**, so you both get treated and avoid reinfection
- **Complete confidentiality:** your results are yours alone

## When should I get tested?

- You had unprotected sex or the condom broke
- You have a new partner or more than one partner
- Your partner told you they have an infection
- You have symptoms (see below)
- You simply want peace of mind: many STDs cause no symptoms

Keep in mind each infection has a "window period": for example, chlamydia and gonorrhea can be detected 1-2 weeks after exposure, while HIV and syphilis may take a few more weeks. We'll tell you when to test or retest.

## Symptoms you shouldn't ignore

- Burning when urinating or discharge from the penis or vagina
- Sores, blisters, warts or bumps in the genital area or mouth
- Itching, irritation or odor
- Lower-abdominal pain or pain during sex
- Bleeding between periods

Many of these symptoms get mistaken for a [urinary tract infection](/en/services/infecciones-urinarias) or a vaginal infection. That's why we evaluate your whole case and, for women, can add [gynecology care](/en/services/ginecologia).

## What is the visit like?

1. Walk in without an appointment and check in; nobody asks the reason out loud.
2. Talk privately with the medical staff about your symptoms or concern.
3. The necessary samples are taken (blood, urine or swab) in a few minutes.
4. If symptoms are clear, you can start treatment the same day.
5. We notify you discreetly when results are ready and explain next steps.

## STD testing at a Hispanic clinic near you

If you're looking for confidential STD testing in Houston, in Spanish and at an affordable price, we're near you in southeast Houston (Bellfort / Hobby area), Monday to Sunday from 9 AM to 9 PM.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "examen-alcohol-drogas",
    order: 17,
    category: "examenes",
    icon: "Beaker",
    title: "Exámenes de Alcohol y Drogas",
    titleEn: "Alcohol & Drug Testing",
    metaTitle: "Examen de Drogas en Houston | Clínica Hispana Nueva Salud",
    metaTitleEn: "Drug & Alcohol Test Houston | Clínica Hispana Nueva Salud",
    shortDescription:
      "Pruebas de alcohol y drogas para trabajo y trámites, rápidas y con documentación.",
    shortDescriptionEn:
      "Alcohol and drug testing for work and paperwork, fast and with documentation.",
    description:
      "Exámenes de alcohol y drogas en Houston, TX. Para empleo y trámites, en español, con precios accesibles. Sin cita y sin seguro médico.",
    descriptionEn:
      "Alcohol and drug testing in Houston, TX. For employment and paperwork, in Spanish, with affordable pricing. Walk-ins welcome, no insurance needed.",
    keywords: [
      "examen de drogas houston",
      "prueba de alcohol y drogas houston",
      "drug test houston español",
      "examen de drogas para trabajo houston",
    ],
    keywordsEn: [
      "drug test houston",
      "alcohol and drug test houston",
      "employment drug test houston",
      "drug screening houston",
    ],
    features: [
      "Prueba de drogas para empleo",
      "Prueba de alcohol",
      "Proceso rápido",
      "Documentación del resultado",
    ],
    featuresEn: [
      "Drug test for employment",
      "Alcohol test",
      "Fast process",
      "Result documentation",
    ],
    longDescription: `Muchos empleos y trámites requieren una prueba de alcohol y drogas. En Clínica Hispana Nueva Salud la realizamos de forma rápida, discreta y en español, y te entregamos la documentación que necesitas: sin cita previa y sin seguro médico.

## ¿Qué incluye?

- **Prueba de detección de drogas** (panel estándar de las sustancias más solicitadas por empleadores)
- **Prueba de alcohol**
- **Proceso ágil y discreto**, con recolección de muestra en la clínica
- **Documentación del resultado** para tu empleador, agencia o trámite
- **Atención en español** para que entiendas cada paso

Si tu trabajo es de conducción comercial, también hacemos el [examen físico DOT para licencia CDL](/services/examen-dot), y para otros requisitos laborales contamos con [prueba de tuberculosis](/services/prueba-tuberculosis) y [chequeos físicos](/services/examen-fisico-escolar).

## ¿Para qué se usa?

- Requisito de contratación (pre-employment)
- Pruebas periódicas o aleatorias que pide tu empresa
- Regreso al trabajo después de una incapacidad o incidente
- Trámites legales o personales que piden constancia
- Por decisión propia, para tener un documento que lo respalde

## ¿Cómo me preparo?

- Trae una **identificación con foto** y, si tu empleador te dio un formulario o instrucciones, tráelos.
- No necesitas ayuno.
- Si tomas medicamentos con receta, tráelos o anótalos: algunos pueden aparecer en la prueba y conviene documentarlo.
- Llega hidratado, pero sin exceso de líquidos.

## ¿Cuánto tarda y cuándo tengo el resultado?

La recolección de la muestra toma unos minutos. El tiempo del resultado depende del tipo de prueba; te informamos en la clínica cuándo estará lista tu constancia y cómo recogerla o recibirla.

## ¿Cómo es la visita?

1. Llegas sin cita, te registras y presentas tu identificación.
2. Nos indicas qué prueba necesitas y para qué trámite.
3. Se recolecta la muestra siguiendo el procedimiento de cadena de custodia cuando lo requiere el empleador.
4. Te indicamos cuándo y cómo recibirás la documentación del resultado.

## Examen de alcohol y drogas en una clínica hispana cerca de ti

Si buscas prueba de drogas para empleo en Houston sin cita, en español y a precio accesible, te atendemos cerca de ti en el sureste de Houston (zona Bellfort / Hobby), de lunes a domingo de 9 AM a 9 PM.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `Many jobs and procedures require an alcohol and drug test. At Clínica Hispana Nueva Salud we perform it quickly, discreetly and in Spanish, and provide the documentation you need: no appointment and no insurance required.

## What's included?

- **Drug screening** (standard panel of the substances most requested by employers)
- **Alcohol test**
- **Fast, discreet process**, with sample collection at the clinic
- **Result documentation** for your employer, agency or procedure
- **Care in Spanish** so you understand every step

If you drive commercially, we also perform the [DOT physical exam for CDL licenses](/en/services/examen-dot), and for other job requirements we offer [TB testing](/en/services/prueba-tuberculosis) and [physical exams](/en/services/examen-fisico-escolar).

## What is it used for?

- Pre-employment requirement
- Periodic or random tests required by your company
- Return to work after leave or an incident
- Legal or personal procedures that require proof
- By personal choice, to have a document backing it up

## How do I prepare?

- Bring a **photo ID** and, if your employer gave you a form or instructions, bring them.
- No fasting needed.
- If you take prescription medication, bring it or write it down: some can show up on the test and it's worth documenting.
- Arrive hydrated, but without excess fluids.

## How long does it take and when do I get the result?

Sample collection takes a few minutes. Result turnaround depends on the type of test; we'll tell you at the clinic when your documentation will be ready and how to pick it up or receive it.

## What is the visit like?

1. Walk in without an appointment, check in and show your ID.
2. Tell us which test you need and for what purpose.
3. The sample is collected following chain-of-custody procedure when the employer requires it.
4. We tell you when and how you'll receive the result documentation.

## Alcohol and drug testing at a Hispanic clinic near you

If you're looking for a pre-employment drug test in Houston with no appointment, in Spanish and at an affordable price, we're near you in southeast Houston (Bellfort / Hobby area), Monday to Sunday from 9 AM to 9 PM.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "electrocardiograma",
    order: 18,
    category: "laboratorio",
    icon: "HeartPulse",
    title: "Electrocardiograma (EKG)",
    titleEn: "Electrocardiogram (EKG)",
    metaTitle: "Electrocardiograma en Houston | Clínica Hispana Nueva Salud",
    metaTitleEn: "EKG Test in Houston, TX | Clínica Hispana Nueva Salud",
    shortDescription:
      "Electrocardiograma (EKG) rápido y sin dolor para evaluar la salud de tu corazón, en español.",
    shortDescriptionEn:
      "Fast, painless electrocardiogram (EKG) to evaluate your heart health, in Spanish.",
    description:
      "Electrocardiograma EKG en Houston, TX, rápido y sin dolor. Resultados y atención en español, con precios accesibles. Sin cita y sin seguro médico.",
    descriptionEn:
      "Electrocardiogram EKG in Houston, TX, fast and painless. Results and care in Spanish, with affordable pricing. Walk-ins welcome, no insurance needed.",
    keywords: [
      "electrocardiograma houston",
      "ekg houston español",
      "examen del corazon houston",
      "ecg houston",
    ],
    keywordsEn: [
      "electrocardiogram houston",
      "ekg houston",
      "heart test houston",
      "ecg houston spanish",
    ],
    features: [
      "Estudio rápido y sin dolor",
      "Evaluación del ritmo cardiaco",
      "Útil para exámenes médicos",
      "Resultados en español",
    ],
    featuresEn: [
      "Fast and painless test",
      "Heart-rhythm evaluation",
      "Useful for medical exams",
      "Results in Spanish",
    ],
    longDescription: `El electrocardiograma (EKG) registra la actividad eléctrica de tu corazón en pocos minutos y sin ninguna molestia. En Clínica Hispana Nueva Salud lo realizamos como parte de chequeos y exámenes médicos.

## ¿Qué incluye?

- Estudio del ritmo y la actividad del corazón
- Interpretación por personal médico
- Útil para exámenes de trabajo, deporte o cirugía
- Resultados explicados en español

## Cuándo se recomienda

Si tienes palpitaciones, presión alta, dolor en el pecho o necesitas un examen médico completo, el EKG aporta información valiosa sobre tu corazón.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `The electrocardiogram (EKG) records your heart's electrical activity in just a few minutes with no discomfort. At Clínica Hispana Nueva Salud we perform it as part of checkups and medical exams.

## What's included?

- Study of your heart's rhythm and activity
- Interpretation by medical staff
- Useful for work, sports or surgery exams
- Results explained in Spanish

## When it's recommended

If you have palpitations, high blood pressure, chest discomfort or need a complete medical exam, the EKG provides valuable information about your heart.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "ultrasonido",
    order: 19,
    category: "laboratorio",
    icon: "ScanLine",
    title: "Ultrasonido y Ecografía",
    titleEn: "Ultrasound & Sonography",
    metaTitle: "Ultrasonido en Houston, TX | Clínica Hispana Nueva Salud",
    metaTitleEn: "Ultrasound in Houston, TX | Clínica Hispana Nueva Salud",
    shortDescription:
      "Ultrasonidos diagnósticos y de embarazo con equipo moderno y atención en español.",
    shortDescriptionEn:
      "Diagnostic and pregnancy ultrasounds with modern equipment and care in Spanish.",
    description:
      "Ultrasonido y ecografía en Houston, TX: abdominal, pélvico y de embarazo. En español, con precios accesibles. Sin cita y sin seguro médico.",
    descriptionEn:
      "Ultrasound and sonography in Houston, TX: abdominal, pelvic and pregnancy. In Spanish, with affordable pricing. Walk-ins welcome, no insurance needed.",
    keywords: [
      "ultrasonido houston",
      "ecografia houston español",
      "ultrasonido de embarazo houston",
      "sonograma houston",
    ],
    keywordsEn: [
      "ultrasound houston",
      "sonogram houston",
      "pregnancy ultrasound houston",
      "abdominal ultrasound houston",
    ],
    features: [
      "Ultrasonido abdominal y pélvico",
      "Ultrasonido de embarazo",
      "Equipo moderno",
      "Atención en español",
    ],
    featuresEn: [
      "Abdominal and pelvic ultrasound",
      "Pregnancy ultrasound",
      "Modern equipment",
      "Care in Spanish",
    ],
    longDescription: `El ultrasonido (ecografía) es una herramienta segura y sin dolor que nos permite ver el interior de tu cuerpo para diagnosticar con precisión. En Clínica Hispana Nueva Salud contamos con equipo moderno y personal que te explica todo en español: sin cita previa, sin seguro médico y con precios accesibles.

## ¿Qué tipos de ultrasonido hacemos?

- **Ultrasonido abdominal:** hígado, vesícula (piedras), riñones, páncreas y bazo. Útil ante dolor abdominal, molestias después de comer o resultados alterados en [exámenes de sangre](/services/examenes-sangre).
- **Ultrasonido pélvico:** útero y ovarios en la mujer; ayuda a estudiar dolor pélvico, sangrados irregulares o quistes. Se complementa con nuestra [atención ginecológica](/services/ginecologia).
- **Ultrasonido de embarazo (obstétrico):** confirmación y seguimiento del embarazo, latido y desarrollo del bebé. Si aún no lo confirmas, empieza con una [prueba de embarazo](/services/prueba-embarazo).
- **Tiroides y tejidos blandos:** nódulos en el cuello, bolitas o inflamaciones bajo la piel.

## ¿Cuándo se recomienda un ultrasonido?

- Dolor abdominal o en el costado que no se explica
- Sospecha de piedras en la vesícula o en el riñón
- Dolor pélvico, periodos muy abundantes o irregulares
- Confirmar o dar seguimiento a un embarazo
- Una bolita o inflamación que apareció en el cuello o bajo la piel
- Control de una condición ya conocida (por ejemplo, quistes o [tiroides](/services/tiroides))

## Sin radiación y sin dolor

A diferencia de los rayos X, el ultrasonido no usa radiación, por lo que es seguro incluso durante el embarazo y se puede repetir las veces que haga falta. El estudio dura entre 15 y 30 minutos y solo sentirás el gel frío y una ligera presión del transductor.

## ¿Cómo me preparo?

- **Abdominal:** ayuno de 6 a 8 horas (para ver bien la vesícula).
- **Pélvico y de embarazo temprano:** vejiga llena; toma de 3 a 4 vasos de agua una hora antes y no orines.
- **Tiroides y tejidos blandos:** no requiere preparación.

Si tienes dudas sobre tu caso, llámanos antes de venir y te decimos exactamente cómo prepararte.

## ¿Cómo es la visita?

1. Llegas sin cita, te registras y nos cuentas el motivo del estudio.
2. Se realiza el ultrasonido en un espacio privado, con explicación en español.
3. El personal médico revisa las imágenes y te explica los hallazgos en palabras claras.
4. Si se necesita, sales con tratamiento, estudios complementarios o referencia a especialista.

## Ultrasonido en una clínica hispana cerca de ti

Si buscas ultrasonido en Houston a precio accesible y en español, te atendemos cerca de ti en el sureste de Houston (zona Bellfort / Hobby), de lunes a domingo de 9 AM a 9 PM.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `Ultrasound (sonography) is a safe, painless tool that lets us see inside your body for an accurate diagnosis. At Clínica Hispana Nueva Salud we have modern equipment and staff who explain everything in Spanish: no appointment, no insurance required and affordable pricing.

## What types of ultrasound do we perform?

- **Abdominal ultrasound:** liver, gallbladder (stones), kidneys, pancreas and spleen. Useful for abdominal pain, discomfort after meals or abnormal [blood test](/en/services/examenes-sangre) results.
- **Pelvic ultrasound:** uterus and ovaries in women; helps evaluate pelvic pain, irregular bleeding or cysts. It complements our [gynecology care](/en/services/ginecologia).
- **Pregnancy (obstetric) ultrasound:** confirmation and follow-up of pregnancy, heartbeat and the baby's development. If you haven't confirmed yet, start with a [pregnancy test](/en/services/prueba-embarazo).
- **Thyroid and soft tissue:** neck nodules, lumps or swelling under the skin.

## When is an ultrasound recommended?

- Unexplained abdominal or side pain
- Suspected gallbladder or kidney stones
- Pelvic pain, very heavy or irregular periods
- Confirming or following up on a pregnancy
- A lump or swelling that appeared on the neck or under the skin
- Monitoring a known condition (for example, cysts or the [thyroid](/en/services/tiroides))

## No radiation, no pain

Unlike X-rays, ultrasound uses no radiation, so it's safe even during pregnancy and can be repeated as often as needed. The exam takes 15 to 30 minutes and you'll only feel the cool gel and light pressure from the probe.

## How do I prepare?

- **Abdominal:** fast for 6 to 8 hours (to see the gallbladder clearly).
- **Pelvic and early pregnancy:** full bladder; drink 3 to 4 glasses of water an hour before and don't urinate.
- **Thyroid and soft tissue:** no preparation needed.

If you have questions about your case, call us before coming and we'll tell you exactly how to prepare.

## What is the visit like?

1. Walk in without an appointment, check in and tell us the reason for the exam.
2. The ultrasound is performed in a private room, with explanations in Spanish.
3. The medical staff reviews the images and explains the findings in plain words.
4. If needed, you leave with treatment, additional tests or a specialist referral.

## Ultrasound at a Hispanic clinic near you

If you're looking for an affordable ultrasound in Houston in Spanish, we're near you in southeast Houston (Bellfort / Hobby area), Monday to Sunday from 9 AM to 9 PM.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "examen-dot",
    order: 20,
    category: "examenes",
    icon: "Truck",
    highlighted: true,
    title: "Examen Físico DOT - Licencia CDL",
    titleEn: "DOT Physical Exam - CDL License",
    metaTitle: "Examen DOT para CDL en Houston | Clínica Hispana Nueva Salud",
    metaTitleEn: "DOT Physical in Houston, TX | Clínica Hispana Nueva Salud",
    shortDescription:
      "Examen físico DOT para conductores comerciales (CDL), con certificado el mismo día.",
    shortDescriptionEn:
      "DOT physical exam for commercial drivers (CDL), with same-day certificate.",
    description:
      "Examen físico DOT en Houston, TX para licencia CDL, certificado el mismo día y en español. Con precios accesibles. Sin cita y sin seguro médico.",
    descriptionEn:
      "DOT physical exam in Houston, TX for CDL license, same-day certificate, in Spanish. With affordable pricing. Walk-ins welcome, no insurance needed.",
    keywords: [
      "examen dot houston",
      "examen fisico dot houston español",
      "examen cdl houston",
      "dot physical houston español",
    ],
    keywordsEn: [
      "dot physical houston",
      "dot exam houston",
      "cdl physical houston",
      "dot medical exam houston",
    ],
    features: [
      "Certificado DOT el mismo día",
      "Para licencia CDL",
      "Proceso rápido",
      "Atención en español",
    ],
    featuresEn: [
      "Same-day DOT certificate",
      "For CDL license",
      "Fast process",
      "Care in Spanish",
    ],
    longDescription: `Si manejas vehículos comerciales necesitas tu examen físico DOT vigente. En Clínica Hispana Nueva Salud lo realizamos de forma rápida y te entregamos tu certificado el mismo día.

## ¿Qué incluye?

- Revisión de visión y audición
- Toma de presión arterial
- Examen físico requerido por el DOT
- Revisión de historial médico
- Certificado médico DOT el mismo día

## Para conductores comerciales

El examen es obligatorio para obtener o renovar tu licencia CDL. Te explicamos cada paso en español y agilizamos el proceso para que vuelvas pronto a la carretera.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `If you drive commercial vehicles you need a current DOT physical exam. At Clínica Hispana Nueva Salud we perform it quickly and give you your certificate the same day.

## What's included?

- Vision and hearing screening
- Blood-pressure check
- DOT-required physical exam
- Medical-history review
- Same-day DOT medical certificate

## For commercial drivers

The exam is required to obtain or renew your CDL license. We explain every step in Spanish and speed up the process so you get back on the road soon.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "examenes-inmigracion",
    order: 21,
    category: "examenes",
    icon: "ClipboardCheck",
    title: "Examen Médico de Inmigración I-693",
    titleEn: "Immigration Medical Exam I-693",
    metaTitle: "Examen Médico I-693 en Houston | Clínica Hispana Nueva Salud",
    metaTitleEn: "I-693 Exam in Houston, TX | Clínica Hispana Nueva Salud",
    shortDescription:
      "Examen médico de inmigración con médico autorizado por USCIS y el Formulario I-693 sellado.",
    shortDescriptionEn:
      "Immigration medical exam with a USCIS-authorized physician and the sealed Form I-693.",
    description:
      "Examen médico de inmigración I-693 en Houston, TX con médico autorizado por USCIS. Vacunas y formulario sellado. Sin cita y sin seguro médico.",
    descriptionEn:
      "I-693 immigration medical exam in Houston, TX with a USCIS-authorized physician. Vaccines and sealed form. Walk-ins welcome, no insurance needed.",
    keywords: [
      "examen de inmigracion houston",
      "examen medico i-693 houston",
      "civil surgeon houston español",
      "medico autorizado uscis houston",
    ],
    keywordsEn: [
      "immigration medical exam houston",
      "i-693 exam houston",
      "civil surgeon houston",
      "uscis authorized doctor houston",
    ],
    features: [
      "Médico autorizado (civil surgeon)",
      "Formulario I-693 sellado",
      "Vacunas requeridas disponibles",
      "Proceso explicado en español",
    ],
    featuresEn: [
      "Authorized civil surgeon",
      "Sealed Form I-693",
      "Required vaccines available",
      "Process explained in Spanish",
    ],
    longDescription: `El examen médico de inmigración (Formulario I-693) es un requisito para el ajuste de estatus. En Clínica Hispana Nueva Salud lo realizamos con un médico autorizado por USCIS (civil surgeon) y te entregamos el formulario sellado listo para enviar.

## ¿Qué incluye?

- Revisión de historial médico y de vacunas
- Examen físico completo
- Pruebas requeridas por USCIS (incluida la de tuberculosis)
- Aplicación de las vacunas que te falten
- Formulario I-693 completado y sellado en sobre oficial

## Qué traer a tu cita

Identificación con foto, registro de vacunas si lo tienes y cualquier documento médico relevante. Te explicamos todo el proceso en español para que llegues tranquilo.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `The immigration medical exam (Form I-693) is required for adjustment of status. At Clínica Hispana Nueva Salud we perform it with a USCIS-authorized physician (civil surgeon) and give you the sealed form ready to submit.

## What's included?

- Review of medical and vaccination history
- Complete physical exam
- USCIS-required tests (including tuberculosis)
- Administration of any missing vaccines
- Form I-693 completed and sealed in the official envelope

## What to bring

Photo ID, your vaccination record if you have it and any relevant medical documents. We explain the entire process in Spanish so you arrive with peace of mind.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "vacunas",
    order: 22,
    category: "tratamientos",
    icon: "Syringe",
    title: "Vacunas contra la Influenza y Toxoide Tetánico",
    titleEn: "Flu and Tetanus (Tdap) Vaccines",
    metaTitle: "Vacunas en Houston, TX | Clínica Hispana Nueva Salud",
    metaTitleEn: "Vaccines in Houston, TX | Clínica Hispana Nueva Salud",
    shortDescription:
      "Vacuna contra la influenza (flu) y toxoide tetánico, aplicadas por personal médico, en español.",
    shortDescriptionEn:
      "Influenza (flu) vaccine and tetanus toxoid, administered by medical staff, in Spanish.",
    description:
      "Vacunas de flu y toxoide tetánico en Houston, TX. Aplicación por personal médico en español, con precios accesibles. Sin cita y sin seguro médico.",
    descriptionEn:
      "Flu and tetanus vaccines in Houston, TX. Administered by medical staff in Spanish, with affordable pricing. Walk-ins welcome, no insurance needed.",
    keywords: [
      "vacuna de la flu houston",
      "vacuna contra la influenza houston",
      "toxoide tetanico houston",
      "vacuna del tetano houston",
    ],
    keywordsEn: [
      "flu shot houston",
      "flu vaccine houston",
      "tetanus shot houston",
      "tdap vaccine houston",
    ],
    features: [
      "Vacuna contra la influenza (flu)",
      "Toxoide tetánico",
      "Aplicación por personal médico",
      "Atención en español",
    ],
    featuresEn: [
      "Influenza (flu) vaccine",
      "Tetanus toxoid",
      "Administered by medical staff",
      "Care in Spanish",
    ],
    longDescription: `Las vacunas son una de las formas más sencillas de cuidar tu salud y la de tu familia. En Clínica Hispana Nueva Salud aplicamos la vacuna contra la influenza (flu) y el toxoide tetánico de forma segura y rápida: sin cita previa, sin seguro médico y en español.

## ¿Qué vacunas aplicamos?

- **Vacuna contra la influenza (flu):** se recomienda cada año, idealmente entre septiembre y noviembre, antes de que empiece la temporada de gripe en Houston.
- **Toxoide tetánico (refuerzo del tétanos):** protege ante cortes, raspones, heridas con objetos oxidados o mordeduras. El refuerzo se recomienda cada 10 años, o antes si tienes una herida sucia o profunda y no recuerdas tu última dosis.

Si necesitas otra vacuna, pregúntanos: te orientamos sobre dónde obtenerla y qué refuerzos te corresponden según tu edad.

## ¿Quién debe vacunarse contra la flu?

Prácticamente todas las personas a partir de los 6 meses, y en especial:

- Adultos mayores de 65 años
- Personas con diabetes, asma, presión alta o [condiciones crónicas](/services/condiciones-cronicas)
- Mujeres embarazadas
- Quienes trabajan con público, en cuidado de personas o en escuelas
- Quienes viven con niños pequeños o adultos mayores

La vacuna no te da gripe: contiene virus inactivados. Es normal sentir el brazo adolorido o un poco de cansancio uno o dos días.

## ¿Cuándo necesito el refuerzo del tétanos?

- Si pasaron más de 10 años desde tu última dosis
- Si te cortaste, te pinchaste con algo oxidado o te mordió un animal y no recuerdas cuándo te vacunaste
- Antes de ciertos trabajos (construcción, jardinería, mecánica) o trámites que lo piden

Si llegas con una herida, también la limpiamos y la tratamos: contamos con [curación de heridas](/services/curacion-heridas) y [suturas](/services/suturas-heridas) el mismo día.

## ¿Cómo es la visita?

1. Llegas sin cita y te registras en recepción.
2. El personal médico revisa brevemente tu historial (alergias, embarazo, vacunas previas).
3. Se aplica la vacuna en el brazo; toma menos de 5 minutos.
4. Te entregamos tu comprobante de vacunación para trabajo, escuela o tus registros.

## Vacunas en una clínica hispana cerca de ti

Si buscas dónde ponerte la vacuna de la flu o el tétanos en Houston sin cita y en español, te atendemos cerca de ti en el sureste de Houston (zona Bellfort / Hobby), de lunes a domingo de 9 AM a 9 PM.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `Vaccines are one of the simplest ways to protect your health and your family's. At Clínica Hispana Nueva Salud we administer the flu vaccine and the tetanus toxoid safely and quickly: no appointment, no insurance required and in Spanish.

## Which vaccines do we administer?

- **Flu (influenza) vaccine:** recommended every year, ideally between September and November, before flu season starts in Houston.
- **Tetanus toxoid (tetanus booster):** protects you from cuts, scrapes, wounds from rusty objects or bites. A booster is recommended every 10 years, or sooner if you have a dirty or deep wound and don't remember your last dose.

If you need another vaccine, ask us: we'll guide you on where to get it and which boosters you're due for based on your age.

## Who should get the flu shot?

Practically everyone 6 months and older, and especially:

- Adults over 65
- People with diabetes, asthma, high blood pressure or [chronic conditions](/en/services/condiciones-cronicas)
- Pregnant women
- Those who work with the public, in caregiving or in schools
- Those living with small children or older adults

The vaccine doesn't give you the flu: it contains inactivated virus. A sore arm or mild tiredness for a day or two is normal.

## When do I need a tetanus booster?

- If more than 10 years have passed since your last dose
- If you cut yourself, got pricked by something rusty or were bitten by an animal and don't remember when you were vaccinated
- Before certain jobs (construction, landscaping, mechanics) or paperwork that requires it

If you come in with a wound, we also clean and treat it: we offer same-day [wound care](/en/services/curacion-heridas) and [stitches](/en/services/suturas-heridas).

## What is the visit like?

1. Walk in without an appointment and check in at the front desk.
2. The medical staff briefly reviews your history (allergies, pregnancy, previous vaccines).
3. The vaccine is given in the arm; it takes less than 5 minutes.
4. We give you a vaccination record for work, school or your files.

## Vaccines at a Hispanic clinic near you

If you're looking for where to get a flu shot or tetanus booster in Houston with no appointment and in Spanish, we're near you in southeast Houston (Bellfort / Hobby area), Monday to Sunday from 9 AM to 9 PM.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "sueros-vitaminados",
    order: 23,
    category: "tratamientos",
    icon: "Droplets",
    title: "Sueros Vitaminados (Terapia IV)",
    titleEn: "Vitamin IV Therapy",
    metaTitle: "Sueros Vitaminados en Houston | Clínica Hispana Nueva Salud",
    metaTitleEn: "Vitamin IV Therapy Houston | Clínica Hispana Nueva Salud",
    shortDescription:
      "Sueros vitaminados intravenosos para hidratación y energía, aplicados por personal médico.",
    shortDescriptionEn:
      "Intravenous vitamin drips for hydration and energy, administered by medical staff.",
    description:
      "Sueros vitaminados (terapia IV) en Houston, TX. Hidratación y vitaminas en español, con precios accesibles. Sin cita y sin seguro médico.",
    descriptionEn:
      "Vitamin IV therapy in Houston, TX. Hydration and vitamins in Spanish, with affordable pricing. Walk-ins welcome, no insurance needed.",
    keywords: [
      "sueros vitaminados houston",
      "terapia iv houston",
      "suero de vitaminas houston",
      "hidratacion intravenosa houston",
    ],
    keywordsEn: [
      "vitamin iv therapy houston",
      "iv drip houston",
      "iv hydration houston",
      "vitamin drip houston",
    ],
    features: [
      "Hidratación intravenosa",
      "Vitaminas y minerales",
      "Aplicación por personal médico",
      "Atención en español",
    ],
    featuresEn: [
      "Intravenous hydration",
      "Vitamins and minerals",
      "Administered by medical staff",
      "Care in Spanish",
    ],
    longDescription: `Los sueros vitaminados (terapia intravenosa o IV) aportan hidratación, vitaminas y minerales directamente a tu torrente sanguíneo, con una absorción mucho mayor que las pastillas. En Clínica Hispana Nueva Salud los aplicamos con personal médico, en un ambiente cómodo y seguro: sin cita previa, sin seguro médico y en español.

## ¿Qué incluye?

- **Evaluación médica breve** para confirmar que el suero es adecuado para ti y elegir la fórmula
- **Hidratación intravenosa** con solución salina
- **Vitaminas y minerales** según tu necesidad (por ejemplo, complejo B, vitamina C, magnesio)
- **Aplicación y monitoreo** por personal médico durante toda la sesión
- **Atención en español** y un espacio tranquilo para relajarte

## ¿Cuándo puede ayudarte un suero vitaminado?

- Cansancio o falta de energía que no mejora con descanso
- Deshidratación por calor, trabajo pesado, ejercicio intenso o una noche de fiesta
- Después de una gripe, vómito o diarrea, cuando cuesta reponerse
- Apoyo al sistema inmune en temporada de gripe
- Jornadas largas de trabajo físico bajo el sol de Houston
- Cuando te cuesta absorber vitaminas por vía oral

**Importante:** el suero vitaminado es un complemento, no sustituye el tratamiento de una enfermedad. Si tu cansancio es constante, conviene buscar la causa con [exámenes de sangre](/services/examenes-sangre) (anemia, [tiroides](/services/tiroides), vitamina B12, diabetes). Nosotros te orientamos.

## ¿Es seguro?

Sí, cuando lo aplica personal médico después de una evaluación. Antes de la sesión revisamos tu presión, alergias, embarazo y condiciones como problemas renales o cardíacos, que pueden contraindicar ciertos sueros. La mayoría de las personas solo sienten el pinchazo inicial y una sensación de frescura en el brazo.

## ¿Cómo es la sesión?

1. Llegas sin cita y te registras en recepción.
2. El personal médico te evalúa y elige el suero adecuado para ti.
3. Se coloca la vía en el brazo y el suero pasa en 30 a 60 minutos, mientras descansas.
4. Al terminar puedes retomar tu día normalmente; muchas personas notan más energía ese mismo día o al siguiente.

## Sueros vitaminados en una clínica hispana cerca de ti

Si buscas sueros vitaminados en Houston aplicados por personal médico, en español y a precio accesible, te atendemos cerca de ti en el sureste de Houston (zona Bellfort / Hobby), de lunes a domingo de 9 AM a 9 PM.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `Vitamin IV drips (intravenous therapy) deliver hydration, vitamins and minerals straight into your bloodstream, with far greater absorption than pills. At Clínica Hispana Nueva Salud they're administered by medical staff in a comfortable, safe setting: no appointment, no insurance required and in Spanish.

## What's included?

- **Brief medical evaluation** to confirm the drip is right for you and choose the formula
- **IV hydration** with saline solution
- **Vitamins and minerals** based on your needs (for example, B complex, vitamin C, magnesium)
- **Administration and monitoring** by medical staff throughout the session
- **Care in Spanish** and a quiet space to relax

## When can a vitamin drip help?

- Tiredness or low energy that doesn't improve with rest
- Dehydration from heat, heavy work, intense exercise or a night out
- After the flu, vomiting or diarrhea, when it's hard to bounce back
- Immune support during flu season
- Long days of physical work under the Houston sun
- When you have trouble absorbing vitamins orally

**Important:** a vitamin drip is a supplement, not a replacement for treating an illness. If your tiredness is constant, it's worth finding the cause with [blood tests](/en/services/examenes-sangre) (anemia, [thyroid](/en/services/tiroides), vitamin B12, diabetes). We'll guide you.

## Is it safe?

Yes, when administered by medical staff after an evaluation. Before the session we check your blood pressure, allergies, pregnancy and conditions like kidney or heart problems, which may rule out certain drips. Most people only feel the initial needle stick and a cool sensation in the arm.

## What is the session like?

1. Walk in without an appointment and check in at the front desk.
2. The medical staff evaluates you and chooses the right drip for you.
3. The IV line is placed in your arm and the drip runs for 30 to 60 minutes while you rest.
4. When it's done you can go on with your day; many people notice more energy that same day or the next.

## Vitamin IV therapy at a Hispanic clinic near you

If you're looking for vitamin IV drips in Houston administered by medical staff, in Spanish and at an affordable price, we're near you in southeast Houston (Bellfort / Hobby area), Monday to Sunday from 9 AM to 9 PM.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "suturas-heridas",
    order: 24,
    category: "tratamientos",
    icon: "Scissors",
    title: "Suturas de Heridas",
    titleEn: "Wound Suturing",
    metaTitle: "Suturas de Heridas en Houston | Clínica Hispana Nueva Salud",
    metaTitleEn: "Stitches in Houston, TX | Clínica Hispana Nueva Salud",
    shortDescription:
      "Suturas (puntos) para cerrar heridas de forma segura, sin cita previa y en español.",
    shortDescriptionEn:
      "Sutures (stitches) to close wounds safely, walk-ins welcome and in Spanish.",
    description:
      "Suturas de heridas en Houston, TX. Cierre de cortes y heridas en español, con precios accesibles. Sin cita y sin seguro médico.",
    descriptionEn:
      "Wound suturing in Houston, TX. Closing cuts and wounds in Spanish, with affordable pricing. Walk-ins welcome, no insurance needed.",
    keywords: [
      "suturas houston",
      "puntos para herida houston",
      "cerrar herida houston",
      "doctor para cortadas houston",
    ],
    keywordsEn: [
      "wound suturing houston",
      "stitches houston",
      "laceration repair houston",
      "cut treatment houston",
    ],
    features: [
      "Cierre de heridas con suturas",
      "Limpieza y desinfección",
      "Atención sin cita previa",
      "Indicaciones de cuidado posterior",
    ],
    featuresEn: [
      "Wound closure with sutures",
      "Cleaning and disinfection",
      "Walk-ins welcome",
      "After-care instructions",
    ],
    longDescription: `Una herida que no cierra bien puede infectarse o dejar cicatriz. En Clínica Hispana Nueva Salud cerramos cortes y heridas con suturas de forma segura, sin cita y con atención en español.

## ¿Qué incluye?

- Evaluación y limpieza de la herida
- Cierre con suturas (puntos)
- Aplicación de anestesia local
- Indicaciones de cuidado y signos de alarma
- Retiro de puntos cuando corresponde

## Cuándo acudir

Cortes profundos, heridas que sangran o no cierran solas, o que tienen bordes abiertos. Atender pronto reduce el riesgo de infección y mejora la cicatrización.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `A wound that doesn't close well can get infected or leave a scar. At Clínica Hispana Nueva Salud we close cuts and wounds with sutures safely, no appointment needed and with care in Spanish.

## What's included?

- Wound evaluation and cleaning
- Closure with sutures (stitches)
- Local anesthesia
- Care instructions and warning signs
- Suture removal when appropriate

## When to come in

Deep cuts, wounds that bleed or won't close on their own, or that have open edges. Treating them promptly reduces the risk of infection and improves healing.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "curacion-heridas",
    order: 25,
    category: "tratamientos",
    icon: "Bandage",
    title: "Cura y Curación de Heridas",
    titleEn: "Wound Care",
    metaTitle: "Curación de Heridas Houston | Clínica Hispana Nueva Salud",
    metaTitleEn: "Wound Care in Houston, TX | Clínica Hispana Nueva Salud",
    shortDescription:
      "Limpieza, curación y cambio de vendajes de heridas para una buena cicatrización, en español.",
    shortDescriptionEn:
      "Cleaning, wound care and dressing changes for proper healing, in Spanish.",
    description:
      "Cura y curación de heridas en Houston, TX. Limpieza y vendajes en español, con precios accesibles. Sin cita y sin seguro médico.",
    descriptionEn:
      "Wound care in Houston, TX. Cleaning and dressings in Spanish, with affordable pricing. Walk-ins welcome, no insurance needed.",
    keywords: [
      "curacion de heridas houston",
      "cura de heridas houston",
      "cambio de vendaje houston",
      "limpieza de herida houston",
    ],
    keywordsEn: [
      "wound care houston",
      "wound dressing houston",
      "dressing change houston",
      "wound cleaning houston",
    ],
    features: [
      "Limpieza y desinfección",
      "Cambio de vendajes",
      "Seguimiento de la cicatrización",
      "Atención en español",
    ],
    featuresEn: [
      "Cleaning and disinfection",
      "Dressing changes",
      "Healing follow-up",
      "Care in Spanish",
    ],
    longDescription: `Una buena curación evita infecciones y ayuda a que la herida sane más rápido y con mejor cicatriz. En Clínica Hispana Nueva Salud limpiamos, curamos y vendamos tus heridas, y te damos seguimiento hasta que cicatricen: sin cita previa, sin seguro médico y en español.

## ¿Qué incluye?

- **Limpieza y desinfección** de la herida con técnica estéril
- **Retiro de tejido dañado** cuando es necesario para que sane
- **Aplicación de apósitos y vendajes** adecuados al tipo de herida
- **Cambio periódico de vendajes** en la clínica
- **Vigilancia de signos de infección** en cada visita
- **Indicaciones de cuidado en casa**, en español
- **Refuerzo de tétanos** si tu herida lo requiere; contamos con [vacunas](/services/vacunas)

## ¿Qué tipo de heridas curamos?

- Heridas postoperatorias que necesitan curaciones y cambio de vendaje
- Cortes, raspones y laceraciones (si requieren cierre, hacemos [suturas](/services/suturas-heridas))
- Quemaduras leves (primer grado y segundo grado superficial)
- Úlceras en pies o piernas, frecuentes en personas con [diabetes](/services/condiciones-cronicas) o mala circulación
- Heridas que llevan días sin cerrar o que se abrieron de nuevo
- Abscesos ya drenados que necesitan seguimiento ([drenaje de abscesos](/services/drenaje-abscesos))

## Señales de que una herida se está infectando

- Enrojecimiento que se extiende alrededor de la herida
- Calor, hinchazón o dolor que aumenta en lugar de disminuir
- Pus o líquido con mal olor
- Fiebre o escalofríos
- Líneas rojas que avanzan desde la herida

Si notas cualquiera de estas señales, ven el mismo día: una infección tratada a tiempo se resuelve con curaciones y medicamento; si avanza, puede complicarse.

## Pacientes con diabetes: cuidado especial

Con diabetes, las heridas en los pies pueden sanar lento y pasar desapercibidas. Revisa tus pies a diario y, ante cualquier ampolla, grieta o llaga, acude a curación. Un seguimiento regular evita complicaciones mayores.

## ¿Cómo es la visita?

1. Llegas sin cita y te registras en recepción.
2. El personal médico evalúa la herida y decide el tipo de curación.
3. Se limpia, se cura y se cubre con el apósito adecuado.
4. Te explicamos cómo cuidarla en casa y cada cuánto regresar para cambiar el vendaje.
5. Te damos seguimiento hasta que cierre por completo.

## Curación de heridas en una clínica hispana cerca de ti

Si buscas curación de heridas en Houston sin cita, en español y a precio accesible, te atendemos cerca de ti en el sureste de Houston (zona Bellfort / Hobby), de lunes a domingo de 9 AM a 9 PM.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `Good wound care prevents infection and helps the wound heal faster with a better scar. At Clínica Hispana Nueva Salud we clean, dress and bandage your wounds and follow up until they heal: no appointment, no insurance required and in Spanish.

## What's included?

- **Cleaning and disinfection** of the wound with sterile technique
- **Removal of damaged tissue** when needed for healing
- **Dressings and bandages** suited to the type of wound
- **Regular bandage changes** at the clinic
- **Monitoring for signs of infection** at every visit
- **Home-care instructions**, in Spanish
- **Tetanus booster** if your wound requires it; we offer [vaccines](/en/services/vacunas)

## What kinds of wounds do we treat?

- Post-surgical wounds that need dressing changes
- Cuts, scrapes and lacerations (if they need closing, we do [stitches](/en/services/suturas-heridas))
- Minor burns (first-degree and superficial second-degree)
- Foot or leg ulcers, common in people with [diabetes](/en/services/condiciones-cronicas) or poor circulation
- Wounds that haven't closed after days or reopened
- Drained abscesses that need follow-up ([abscess drainage](/en/services/drenaje-abscesos))

## Signs a wound is getting infected

- Redness spreading around the wound
- Warmth, swelling or pain that increases instead of decreasing
- Pus or foul-smelling fluid
- Fever or chills
- Red streaks moving away from the wound

If you notice any of these signs, come in the same day: an infection treated early resolves with wound care and medication; if it progresses, it can get complicated.

## Patients with diabetes: special care

With diabetes, foot wounds can heal slowly and go unnoticed. Check your feet daily and, for any blister, crack or sore, come in for wound care. Regular follow-up prevents major complications.

## What is the visit like?

1. Walk in without an appointment and check in at the front desk.
2. The medical staff evaluates the wound and decides the type of care.
3. It's cleaned, treated and covered with the right dressing.
4. We explain how to care for it at home and how often to return for bandage changes.
5. We follow up until it's completely closed.

## Wound care at a Hispanic clinic near you

If you're looking for wound care in Houston with no appointment, in Spanish and at an affordable price, we're near you in southeast Houston (Bellfort / Hobby area), Monday to Sunday from 9 AM to 9 PM.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "cirugias-menores",
    order: 26,
    category: "tratamientos",
    icon: "Stethoscope",
    title: "Cirugías Menores",
    titleEn: "Minor Surgery",
    metaTitle: "Cirugías Menores en Houston | Clínica Hispana Nueva Salud",
    metaTitleEn: "Minor Surgery in Houston, TX | Clínica Hispana Nueva Salud",
    shortDescription:
      "Procedimientos de cirugía menor ambulatoria (lunares, quistes, lipomas) con anestesia local.",
    shortDescriptionEn:
      "Minor outpatient surgical procedures (moles, cysts, lipomas) with local anesthesia.",
    description:
      "Cirugías menores en Houston, TX: lunares, quistes y lipomas. Procedimiento ambulatorio en español, con precios accesibles. Sin cita y sin seguro médico.",
    descriptionEn:
      "Minor surgery in Houston, TX: moles, cysts and lipomas. Outpatient procedure in Spanish, with affordable pricing. Walk-ins welcome, no insurance needed.",
    keywords: [
      "cirugia menor houston",
      "quitar lunar houston",
      "extraccion de quiste houston",
      "cirugia ambulatoria houston",
    ],
    keywordsEn: [
      "minor surgery houston",
      "mole removal houston",
      "cyst removal houston",
      "lipoma removal houston",
    ],
    features: [
      "Procedimientos ambulatorios",
      "Anestesia local",
      "Extracción de lunares, quistes y lipomas",
      "Cuidado posterior explicado",
    ],
    featuresEn: [
      "Outpatient procedures",
      "Local anesthesia",
      "Removal of moles, cysts and lipomas",
      "After-care explained",
    ],
    longDescription: `Muchos problemas de piel y tejidos blandos se resuelven con un procedimiento sencillo, sin hospital. En Clínica Hispana Nueva Salud realizamos cirugías menores ambulatorias con anestesia local, el mismo día: sin cita previa, sin seguro médico y en español.

## ¿Qué procedimientos hacemos?

- **Extracción de lunares** que molestan, sangran, cambian de forma o simplemente quieres retirar
- **Extracción de quistes** sebáceos o epidérmicos (bolitas bajo la piel que crecen o se inflaman)
- **Extracción de lipomas** (bolitas blandas de grasa bajo la piel)
- **Evaluación de otras lesiones** de piel y tejidos blandos para decidir el mejor tratamiento

También atendemos procedimientos relacionados: [drenaje de abscesos](/services/drenaje-abscesos), [extracción de uñas encarnadas](/services/unas-encarnadas) y [suturas de heridas](/services/suturas-heridas).

## ¿Qué incluye?

- Evaluación de la lesión por personal médico
- Procedimiento ambulatorio con anestesia local
- Cierre con puntos cuando se requiere
- Indicaciones claras de cuidado posterior, en español
- Retiro de puntos en la clínica cuando corresponde
- Seguimiento de la cicatrización y [curación de la herida](/services/curacion-heridas) si hace falta

## ¿Duele? ¿Cuánto tarda?

Con anestesia local solo sientes el pinchazo inicial; durante el procedimiento puedes notar presión, pero no dolor. La mayoría de las cirugías menores toman entre 20 y 45 minutos y sales caminando por tu propio pie. Puedes retomar tus actividades normales ese mismo día, evitando esfuerzo o mojar la zona según las indicaciones.

## ¿Cuándo conviene revisar un lunar o una bolita?

- Cambió de tamaño, color o forma, o tiene bordes irregulares
- Sangra, duele, pica o se inflama
- Creció rápido en semanas o meses
- Te roza con la ropa, el cinturón o al rasurarte
- Te preocupa su apariencia

Retirarlo a tiempo es sencillo; esperar a que crezca o se infecte lo complica.

## ¿Cómo es la visita?

1. Llegas sin cita, te registras y el personal médico evalúa la lesión.
2. Si procede, se realiza la cirugía menor en el mismo día con anestesia local.
3. Sales con tu herida cubierta e indicaciones de cuidado en español.
4. Regresas para el retiro de puntos (normalmente a los 7-14 días) o para revisión si algo te preocupa.

## Cirugías menores en una clínica hispana cerca de ti

Si buscas dónde quitar un lunar, quiste o lipoma en Houston sin cita, en español y a precio accesible, te atendemos cerca de ti en el sureste de Houston (zona Bellfort / Hobby), de lunes a domingo de 9 AM a 9 PM.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `Many skin and soft-tissue problems can be solved with a simple procedure, no hospital required. At Clínica Hispana Nueva Salud we perform outpatient minor surgery under local anesthesia, the same day: no appointment, no insurance required and in Spanish.

## What procedures do we perform?

- **Mole removal** for moles that bother you, bleed, change shape or you simply want gone
- **Cyst removal** (sebaceous or epidermal cysts — lumps under the skin that grow or get inflamed)
- **Lipoma removal** (soft fatty lumps under the skin)
- **Evaluation of other skin and soft-tissue lesions** to decide the best treatment

We also handle related procedures: [abscess drainage](/en/services/drenaje-abscesos), [ingrown toenail removal](/en/services/unas-encarnadas) and [wound stitches](/en/services/suturas-heridas).

## What's included?

- Evaluation of the lesion by medical staff
- Outpatient procedure under local anesthesia
- Stitches when needed
- Clear aftercare instructions, in Spanish
- Suture removal at the clinic when applicable
- Follow-up on healing and [wound care](/en/services/curacion-heridas) if needed

## Does it hurt? How long does it take?

With local anesthesia you only feel the initial needle stick; during the procedure you may notice pressure, but no pain. Most minor surgeries take 20 to 45 minutes and you walk out on your own. You can resume normal activities the same day, avoiding strain or getting the area wet as instructed.

## When should a mole or lump be checked?

- It changed in size, color or shape, or has irregular edges
- It bleeds, hurts, itches or gets inflamed
- It grew quickly over weeks or months
- It rubs against clothing, a belt or when shaving
- You're concerned about how it looks

Removing it early is simple; waiting until it grows or gets infected makes it harder.

## What is the visit like?

1. Walk in without an appointment, check in and the medical staff evaluates the lesion.
2. If appropriate, the minor surgery is performed the same day under local anesthesia.
3. You leave with the wound covered and aftercare instructions in Spanish.
4. You return for suture removal (usually at 7-14 days) or for a check if anything worries you.

## Minor surgery at a Hispanic clinic near you

If you're looking for where to remove a mole, cyst or lipoma in Houston with no appointment, in Spanish and at an affordable price, we're near you in southeast Houston (Bellfort / Hobby area), Monday to Sunday from 9 AM to 9 PM.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "drenaje-abscesos",
    order: 27,
    category: "tratamientos",
    icon: "Droplet",
    title: "Drenaje de Abscesos",
    titleEn: "Abscess Drainage",
    metaTitle: "Drenaje de Abscesos Houston | Clínica Hispana Nueva Salud",
    metaTitleEn: "Abscess Drainage in Houston | Clínica Hispana Nueva Salud",
    shortDescription:
      "Drenaje de abscesos e infecciones de piel para aliviar el dolor y favorecer la curación.",
    shortDescriptionEn:
      "Drainage of abscesses and skin infections to relieve pain and promote healing.",
    description:
      "Drenaje de abscesos en Houston, TX. Tratamiento de infecciones de piel en español, con precios accesibles. Sin cita y sin seguro médico.",
    descriptionEn:
      "Abscess drainage in Houston, TX. Treatment of skin infections in Spanish, with affordable pricing. Walk-ins welcome, no insurance needed.",
    keywords: [
      "drenaje de absceso houston",
      "drenar absceso houston",
      "infeccion de piel houston",
      "tratamiento de absceso houston",
    ],
    keywordsEn: [
      "abscess drainage houston",
      "drain abscess houston",
      "skin infection houston",
      "boil treatment houston",
    ],
    features: [
      "Drenaje del absceso",
      "Limpieza y desinfección",
      "Anestesia local",
      "Indicaciones de cuidado posterior",
    ],
    featuresEn: [
      "Abscess drainage",
      "Cleaning and disinfection",
      "Local anesthesia",
      "After-care instructions",
    ],
    longDescription: `Un absceso es una acumulación de pus que causa dolor e hinchazón y necesita drenarse. En Clínica Hispana Nueva Salud lo tratamos de forma segura para aliviar la molestia y prevenir que la infección avance.

## ¿Qué incluye?

- Evaluación del absceso o infección de piel
- Drenaje con anestesia local
- Limpieza y desinfección de la zona
- Tratamiento de la infección cuando se requiere
- Indicaciones de cuidado y seguimiento

## No lo dejes pasar

Un bulto rojo, caliente y doloroso, a veces con fiebre, necesita atención. Drenarlo a tiempo evita complicaciones y alivia el dolor rápidamente.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `An abscess is a buildup of pus that causes pain and swelling and needs to be drained. At Clínica Hispana Nueva Salud we treat it safely to relieve the discomfort and prevent the infection from spreading.

## What's included?

- Evaluation of the abscess or skin infection
- Drainage with local anesthesia
- Cleaning and disinfection of the area
- Treatment of the infection when needed
- Care and follow-up instructions

## Don't let it go

A red, warm, painful lump, sometimes with fever, needs attention. Draining it in time prevents complications and relieves pain quickly.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "unas-encarnadas",
    order: 28,
    category: "tratamientos",
    icon: "Footprints",
    title: "Extracción de Uñas Encarnadas",
    titleEn: "Ingrown Toenail Removal",
    metaTitle: "Uñas Encarnadas en Houston | Clínica Hispana Nueva Salud",
    metaTitleEn: "Ingrown Toenail in Houston | Clínica Hispana Nueva Salud",
    shortDescription:
      "Tratamiento de uñas encarnadas para aliviar el dolor y prevenir infecciones, en español.",
    shortDescriptionEn:
      "Ingrown toenail treatment to relieve pain and prevent infection, in Spanish.",
    description:
      "Extracción de uñas encarnadas en Houston, TX. Procedimiento con anestesia local en español, con precios accesibles. Sin cita y sin seguro médico.",
    descriptionEn:
      "Ingrown toenail removal in Houston, TX. Procedure with local anesthesia in Spanish, with affordable pricing. Walk-ins welcome, no insurance needed.",
    keywords: [
      "uña encarnada houston",
      "extraccion de uña encarnada houston",
      "tratamiento uña encarnada houston",
      "doctor para uña encarnada houston",
    ],
    keywordsEn: [
      "ingrown toenail houston",
      "ingrown toenail removal houston",
      "ingrown nail treatment houston",
      "toenail doctor houston",
    ],
    features: [
      "Tratamiento de la uña encarnada",
      "Anestesia local",
      "Alivio del dolor",
      "Indicaciones de cuidado posterior",
    ],
    featuresEn: [
      "Ingrown toenail treatment",
      "Local anesthesia",
      "Pain relief",
      "After-care instructions",
    ],
    longDescription: `Una uña encarnada puede doler mucho e infectarse si no se trata. En Clínica Hispana Nueva Salud la atendemos con un procedimiento sencillo y anestesia local para aliviarte el mismo día.

## ¿Qué incluye?

- Evaluación de la uña y el dedo
- Procedimiento con anestesia local
- Extracción de la porción encarnada de la uña
- Tratamiento de la infección si la hay
- Indicaciones de cuidado para evitar que regrese

## Cuándo acudir

Dolor, enrojecimiento, hinchazón o pus alrededor de la uña, sobre todo del dedo gordo del pie. Atenderla pronto evita una infección mayor.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `An ingrown toenail can hurt a lot and get infected if untreated. At Clínica Hispana Nueva Salud we treat it with a simple procedure and local anesthesia to relieve you the same day.

## What's included?

- Evaluation of the nail and toe
- Procedure with local anesthesia
- Removal of the ingrown portion of the nail
- Treatment of the infection if present
- Care instructions to prevent recurrence

## When to come in

Pain, redness, swelling or pus around the nail, especially the big toe. Treating it promptly prevents a larger infection.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "farmacia",
    order: 29,
    category: "tratamientos",
    icon: "Pill",
    title: "Farmacia",
    titleEn: "Pharmacy",
    metaTitle: "Farmacia en Houston, TX | Clínica Hispana Nueva Salud",
    metaTitleEn: "Pharmacy in Houston, TX | Clínica Hispana Nueva Salud",
    shortDescription:
      "Recoge tus medicamentos al terminar la consulta, sin ir a otra farmacia.",
    shortDescriptionEn:
      "Pick up your medications right after your visit — no second stop.",
    description:
      "Farmacia en Houston, TX dentro de la clínica. Surtimos tu receta al terminar la consulta, atención en español. Sin cita y sin seguro médico.",
    descriptionEn:
      "Pharmacy in Houston, TX inside the clinic. We fill your prescription right after your visit, service in Spanish. Walk-ins welcome, no insurance needed.",
    keywords: [
      "farmacia en houston",
      "farmacia hispana houston",
      "farmacia cerca de mí houston",
      "surtir receta houston",
    ],
    keywordsEn: [
      "pharmacy houston",
      "hispanic pharmacy houston",
      "pharmacy near me houston",
      "fill prescription houston",
    ],
    features: [
      "Surtido de tu receta al instante",
      "Medicamentos de marca y genéricos",
      "Medicamentos de venta libre (OTC)",
      "Asesoría sobre tus medicamentos en español",
    ],
    featuresEn: [
      "Prescriptions filled on the spot",
      "Brand-name and generic medications",
      "Over-the-counter (OTC) medications",
      "Guidance about your medications in Spanish",
    ],
    longDescription: `Al terminar tu consulta en Clínica Hispana Nueva Salud puedes recoger tus medicamentos en nuestra propia farmacia, sin tener que ir a otro lugar. Es la comodidad de resolver todo en una sola visita, con atención en español.

## ¿Qué incluye?

- Surtido de tu receta justo al terminar la consulta
- Medicamentos de marca y genéricos
- Medicamentos de venta libre (OTC) para gripe, dolor, alergias y más
- Asesoría del personal sobre cómo tomar tus medicamentos
- Resurtido de recetas

## ¿Por qué usar nuestra farmacia?

Te ahorras una segunda parada: el médico te atiende, te receta y recoges tu medicamento en el mismo lugar. Te explicamos en español la dosis, los horarios y los cuidados.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `After your visit at Clínica Hispana Nueva Salud you can pick up your medications at our own pharmacy, without going anywhere else. It's the convenience of getting everything done in a single visit, with service in Spanish.

## What's included?

- Your prescription filled right after your visit
- Brand-name and generic medications
- Over-the-counter (OTC) medications for colds, pain, allergies and more
- Staff guidance on how to take your medications
- Prescription refills

## Why use our pharmacy?

You skip the second stop: the doctor sees you, writes your prescription, and you pick up your medication in the same place. We explain the dosage, schedule and precautions in Spanish.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
];

// Testimonios de respaldo para el carrusel cuando no hay data en vivo de Google.
export const FALLBACK_TESTIMONIALS: Testimonial[] = [
  {
    author: "María G.",
    rating: 5,
    text: "Excelente atención y todo en español. Me explicaron cada paso de mi examen. Muy recomendados.",
    textEn: "Excellent care and everything in Spanish. They explained every step of my exam. Highly recommended.",
    relativeTime: "Hace 2 semanas",
  },
  {
    author: "José R.",
    rating: 5,
    text: "Llegué sin cita por una infección y me atendieron rápido. El doctor muy amable y los precios accesibles.",
    textEn: "I walked in without an appointment for an infection and was seen quickly. The doctor was very kind and the prices affordable.",
    relativeTime: "Hace 1 mes",
  },
  {
    author: "Carmen L.",
    rating: 5,
    text: "Llevo mi control de diabetes aquí y me siento muy bien cuidada. El seguimiento es muy bueno.",
    textEn: "I manage my diabetes here and feel very well cared for. The follow-up is excellent.",
    relativeTime: "Hace 1 mes",
  },
  {
    author: "Luis M.",
    rating: 5,
    text: "Hice mi examen DOT y salí el mismo día con mi certificado. Proceso rápido y sin complicaciones.",
    textEn: "I did my DOT exam and left the same day with my certificate. Fast process with no complications.",
    relativeTime: "Hace 2 meses",
  },
  {
    author: "Ana P.",
    rating: 5,
    text: "Una clínica donde te tratan con respeto y cariño. El laboratorio entregó mis resultados muy rápido.",
    textEn: "A clinic where they treat you with respect and care. The lab delivered my results very fast.",
    relativeTime: "Hace 3 meses",
  },
];

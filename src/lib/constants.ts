import type {
  NavLink,
  Promotion,
  Service,
  ServiceCategory,
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
    "Clínica Hispana Nueva Salud, en 7640 Bellfort Ave (sureste de Houston, TX): medicina general y familiar, laboratorio, ginecología básica, exámenes de inmigración I-693 y DOT. Sin cita, sin seguro y en español.",
  descriptionEn:
    "Clínica Hispana Nueva Salud at 7640 Bellfort Ave (southeast Houston, TX): general and family medicine, lab work, basic gynecology, I-693 immigration and DOT exams. Walk-in, no insurance needed, in Spanish.",
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
  // Número REAL de la clínica (destino de todas las llamadas en CallRail).
  // Debe coincidir con el "swap target" del website pool de CallRail: el
  // script de swap busca este número en la página y lo sustituye por uno de
  // rastreo. El JSON-LD y el NAP conservan siempre el real. Confirmado 2026-09-01.
  phone: "+18328314016",
  phoneFormatted: "+1 (832) 831-4016",
  phoneDisplay: "(832) 831-4016",
  // WhatsApp: mismo número de la clínica, igual que en Google Business Profile.
  whatsapp: "18328314016", // E.164 sin "+", listo para wa.me
  whatsappDisplay: "(832) 831-4016",
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
  // Ficha oficial del negocio en Google (Place ID). Se usa como sameAs en el
  // JSON-LD para que buscadores e IA enlacen la entidad con su perfil.
  googleBusinessUrl:
    "https://www.google.com/maps/place/?q=place_id:ChIJSRxrneGXQIYRlwEtNdb7TX4",
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
  // Perfiles declarados en Google Business Profile (2026-09-01).
  linkedin: "https://www.linkedin.com/in/clinica-hispana-nueva-salud",
  x: "https://x.com/CHispNuevaSalud",
} as const;

// Última revisión de contenido de las páginas de servicio: caja de revisión
// médica, `lastReviewed` del schema y `lastmod` del sitemap. Se toca en el
// mismo commit que cambia el texto de los servicios.
export const SERVICES_LAST_REVIEWED = "2026-09-25";

// Fallback de build para rating/reseñas. La data en vivo la trae
// getGooglePlaceData() cuando hay GOOGLE_PLACES_API_KEY + GOOGLE_PLACE_ID.
// Comprobado con Places el 2026-09-25: 5,0 · 853 reseñas.
export const GOOGLE_REVIEWS_DATA = {
  averageRating: 5.0,
  totalReviews: 853,
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
      "Un chequeo para saber cómo estás por dentro: examen general de sangre, hemoglobina A1C y examen general de orina, más la consulta médica gratis, por $99 (valor regular $250). Ven sin cita cualquier día de 9 AM a 9 PM.",
    includes: [
      "Examen general de sangre",
      "A1C (hemoglobina glicosilada)",
      "Examen general de orina",
      "Consulta médica gratis",
    ],
    alt: "Flyer de la promoción Chequeo General Completo por $99 con consulta gratis en Clínica Hispana Nueva Salud, Houston",
    titleEn: "Complete General Check-Up",
    blurbEn:
      "A checkup to see how you're doing on the inside: general blood test, hemoglobin A1C and general urine test, plus a free medical visit, for $99 (regular value $250). Come in any day, 9 AM to 9 PM, without booking.",
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
  {
    slug: "examen-testosterona",
    order: 10,
    price: "$79",
    title: "Revisa tu Testosterona",
    blurb:
      "¿Cansancio, poca energía, menos deseo sexual o dificultad con la erección? Podrían estar relacionados con tus niveles de testosterona. Revisa tu testosterona por solo $79 (precio regular $220): examen de testosterona, examen de orina y consulta médica gratis.",
    includes: [
      "Examen de testosterona",
      "Examen de orina",
      "Consulta médica gratis",
    ],
    alt: "Flyer de la promoción Revisa tu Testosterona por $79 con consulta gratis en Clínica Hispana Nueva Salud, Houston",
    titleEn: "Check Your Testosterone",
    blurbEn:
      "Fatigue, low energy, lower sex drive or trouble with erections? They could be related to your testosterone levels. Check your testosterone for only $79 (regular price $220): testosterone test, urine test and a free medical consultation.",
    includesEn: [
      "Testosterone test",
      "Urine test",
      "Free medical consultation",
    ],
    altEn:
      "Check Your Testosterone promotion flyer for $79 with free consultation at Clínica Hispana Nueva Salud, Houston",
  },
  {
    slug: "chequeo-completo-mujer",
    order: 11,
    price: "$179",
    title: "Chequeo Completo de la Mujer",
    blurb:
      "Cuida tu salud con un chequeo completo de la mujer por solo $179 (precio regular $300): ultrasonido pélvico, papanicolaou, examen de orina y consulta médica gratis, con atención profesional en español.",
    includes: [
      "Ultrasonido pélvico",
      "Papanicolaou",
      "Examen de orina",
      "Consulta médica gratis",
    ],
    alt: "Flyer de la promoción Chequeo Completo de la Mujer por $179 con consulta gratis en Clínica Hispana Nueva Salud, Houston",
    titleEn: "Complete Women's Check-Up",
    blurbEn:
      "Take care of your health with a complete women's check-up for only $179 (regular price $300): pelvic ultrasound, Pap smear, urine test and a free medical consultation, with professional care in Spanish.",
    includesEn: [
      "Pelvic ultrasound",
      "Pap smear",
      "Urine test",
      "Free medical consultation",
    ],
    altEn:
      "Complete Women's Check-Up promotion flyer for $179 with free consultation at Clínica Hispana Nueva Salud, Houston",
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
      "Control de diabetes, hipertensión y dislipidemias en Houston, TX. Laboratorio y seguimiento en español, con precios accesibles. Sin cita y sin seguro.",
    descriptionEn:
      "Diabetes, hypertension and cholesterol care in Houston, TX. Lab work and follow-up in Spanish at affordable prices. Walk-ins welcome, no insurance needed.",
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
    longDescription: `La diabetes, la presión alta y el colesterol elevado tienen algo en común: casi no duelen mientras hacen daño. Por eso el control no se trata de ir cuando te sientes mal, sino de tener tus números en el rango correcto mes a mes. En la clínica llevamos ese seguimiento contigo, sin cita y en español.

## ¿Qué hacemos en cada visita de control?

- Medimos presión, peso y, si hace falta, azúcar en la consulta.
- Revisamos tus análisis: hemoglobina A1c, glucosa, perfil de lípidos y pruebas de riñón.
- Repasamos tus medicamentos, cómo los tomas y si te han dado efectos secundarios.
- Ajustamos el tratamiento y fijamos la fecha del próximo control.

## ¿Qué metas se buscan?

Cada persona tiene las suyas, pero como referencia: muchos adultos con diabetes buscan una A1c por debajo de 7 % ([American Diabetes Association](https://diabetes.org/about-diabetes/a1c)) y, en la mayoría de los pacientes con hipertensión, se busca bajar de 130/80. El equipo médico ajusta la meta a tu edad y a tus otras condiciones.

## ¿Sirve medirme la presión en casa?

Mucho. Las lecturas en casa muestran cómo está tu presión en el día a día, sin los nervios de la consulta. Siéntate cinco minutos antes, con la espalda apoyada, los pies en el piso y el brazo a la altura del corazón, y usa un aparato de brazo, no de muñeca ([American Heart Association](https://www.heart.org/en/health-topics/high-blood-pressure/understanding-blood-pressure-readings/monitoring-your-blood-pressure-at-home)). Trae tus anotaciones a cada control.

## ¿Qué más hay que revisar?

- **Riñones**: con análisis de sangre y de orina, al menos una vez al año si tienes diabetes o presión alta.
- **Ojos**: un examen de fondo de ojo anual con el oculista si tienes diabetes.
- **Pies**: revisarlos a diario en casa y en cada consulta, buscando heridas o zonas sin sensibilidad.

## ¿Y si no tengo seguro?

No lo necesitas. Te decimos el precio de los análisis antes de hacerlos y buscamos el esquema de control más sencillo que funcione para ti. Para empezar, lee nuestra [guía para pacientes con diabetes](/blog/control-diabetes-houston-guia-pacientes).`,
    longDescriptionEn: `Diabetes, high blood pressure and high cholesterol have one thing in common: they barely hurt while they do damage. That's why management isn't about coming in when you feel bad, but about keeping your numbers in range month after month. At the clinic we handle that follow-up with you, walk-in and in Spanish.

## What happens at each follow-up visit?

- We check your blood pressure, weight and, when needed, blood sugar in the office.
- We review your lab work: hemoglobin A1c, glucose, lipid panel and kidney tests.
- We go over your medications, how you take them and any side effects.
- We adjust treatment and set the date for your next check.

## What are the targets?

Everyone has their own, but as a reference: many adults with diabetes aim for an A1c under 7% ([American Diabetes Association](https://diabetes.org/about-diabetes/a1c)), and for most patients with hypertension the goal is under 130/80. The medical team tailors the target to your age and other conditions.

## Does checking my blood pressure at home help?

A lot. Home readings show your everyday blood pressure without the stress of the office. Sit for five minutes first, back supported, feet on the floor and arm at heart level, and use an upper-arm cuff rather than a wrist one ([American Heart Association](https://www.heart.org/en/health-topics/high-blood-pressure/understanding-blood-pressure-readings/monitoring-your-blood-pressure-at-home)). Bring your log to every visit.

## What else needs checking?

- **Kidneys**: with blood and urine tests, at least once a year if you have diabetes or high blood pressure.
- **Eyes**: a yearly dilated eye exam with an eye doctor if you have diabetes.
- **Feet**: check them daily at home and at every visit, looking for sores or numb spots.

## What if I don't have insurance?

You don't need it. We tell you the price of lab work before doing it and look for the simplest follow-up plan that works for you. To get started, read our [patient guide to diabetes](/en/blog/control-diabetes-houston-guia-pacientes).`,
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
    longDescription: `Esa glándula con forma de mariposa, en la parte baja del cuello, marca el ritmo de tu energía, tu peso, tu temperatura y tu estado de ánimo. Cuando funciona de más (hipertiroidismo) o de menos (hipotiroidismo) aparecen síntomas que afectan tu día a día y que muchas veces se confunden con estrés o cansancio. Aquí la revisamos con un análisis de sangre sencillo y, si hace falta, empezamos o ajustamos el tratamiento contigo, en español.

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

1. Vienes cuando te acomode, sin cita, y te anotas en la entrada.
2. El personal médico evalúa tus síntomas y revisa tu cuello.
3. Te sacamos sangre ahí mismo, en pocos minutos.
4. Cuando el laboratorio entrega el resultado, te lo explicamos en español y, si procede, inicias o ajustas tu tratamiento.
5. Programamos el control: en general cada 6-8 semanas al ajustar dosis, y cada 6-12 meses cuando ya está estable.

## Tiroides en una clínica hispana cerca de ti

Si buscas examen de tiroides en Houston sin cita, en español y a precio accesible, te atendemos cerca de ti en el sureste de Houston (zona Bellfort / Hobby), de lunes a domingo de 9 AM a 9 PM.`,
    longDescriptionEn: `That butterfly-shaped gland low in your neck sets the pace for your energy, weight, body temperature and mood. When it works too much (hyperthyroidism) or too little (hypothyroidism), symptoms appear that affect your daily life and are often mistaken for stress or tiredness. At Clínica Hispana Nueva Salud we evaluate your thyroid with lab tests and give you the right treatment: no appointment, no insurance required and in Spanish.

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

1. Come by whenever it suits you, no appointment, and sign in when you arrive.
2. The medical staff evaluates your symptoms and examines your neck.
3. The blood sample is drawn at the clinic.
4. When the lab returns the result, we explain it in Spanish and, if appropriate, you start or adjust your treatment.
5. We schedule follow-up: generally every 6-8 weeks while adjusting the dose, and every 6-12 months once stable.

## Thyroid care at a Hispanic clinic near you

If you're looking for a thyroid test in Houston with no appointment, in Spanish and at an affordable price, we're near you in southeast Houston (Bellfort / Hobby area), Monday to Sunday from 9 AM to 9 PM.`,
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
    longDescription: `Estornudos en serie al salir de casa, ojos que pican, nariz tapada que no se quita o ronchas que aparecen sin saber por qué. Las alergias no son "solo un resfriado largo": si no se tratan, quitan sueño, concentración y ganas de salir. En la clínica te ayudamos a entender qué las provoca y a controlarlas.

## ¿Qué alergias atendemos?

- **Rinitis alérgica**: estornudos, congestión, nariz que gotea y picazón en la garganta.
- **Conjuntivitis alérgica**: ojos rojos, llorosos y con comezón.
- **Urticaria**: ronchas que pican y cambian de lugar.
- **Dermatitis**: piel seca, roja o irritada por contacto con algo.
- **Tos o silbido en el pecho** que empeora con el polvo o el polen.

## ¿Por qué en Houston hay tantas alergias?

El clima húmedo y cálido hace que haya polen casi todo el año: de los árboles en primavera, de los pastos en verano y de la ambrosía en otoño, además de moho en cualquier temporada. El Departamento de Salud de Houston publica cada día el [conteo de polen y moho](https://www.houstonhealth.org/services/pollen-mold): revisarlo te ayuda a saber cuándo cerrar ventanas o salir más tarde.

## ¿Cómo es la consulta?

Te preguntamos cuándo empezaron los síntomas, en qué época empeoran, dónde vives y trabajas, si tienes mascotas y qué medicamentos has probado. Con eso y la revisión física definimos un plan: antihistamínicos, aerosoles nasales, cremas para la piel y cambios concretos en casa. Si los síntomas no ceden o sospechamos una alergia más compleja, te orientamos para ver a un alergólogo, que es quien hace las pruebas cutáneas y las vacunas de alergia.

## ¿Cuándo es una emergencia?

Si después de un alimento, un medicamento o una picadura aparecen hinchazón de labios o garganta, dificultad para respirar, mareo o desmayo, llama al 911: puede ser una [anafilaxia](https://www.aaaai.org/tools-for-the-public/conditions-library/allergies/anaphylaxis) y necesita atención inmediata.`,
    longDescriptionEn: `Sneezing fits every time you step outside, itchy eyes, a stuffy nose that never clears or hives that show up for no clear reason. Allergies are not "just a long cold": left untreated, they cost you sleep, focus and time outdoors. At the clinic we help you understand what triggers them and get them under control.

## Which allergies do we treat?

- **Allergic rhinitis**: sneezing, congestion, runny nose and an itchy throat.
- **Allergic conjunctivitis**: red, watery, itchy eyes.
- **Hives**: itchy welts that move around.
- **Dermatitis**: dry, red or irritated skin from contact with something.
- **Coughing or wheezing** that gets worse with dust or pollen.

## Why are allergies so common in Houston?

The warm, humid climate means pollen almost year-round: trees in spring, grasses in summer and ragweed in fall, plus mold in any season. The Houston Health Department posts a daily [pollen and mold count](https://www.houstonhealth.org/services/pollen-mold); checking it tells you when to keep windows closed or head out later.

## What is the visit like?

We ask when your symptoms started, what time of year they get worse, where you live and work, whether you have pets and which medications you have tried. With that and a physical exam we build a plan: antihistamines, nasal sprays, skin creams and specific changes at home. If symptoms don't let up or we suspect a more complex allergy, we guide you to an allergist, who does skin testing and allergy shots.

## When is it an emergency?

If a food, a medication or an insect sting is followed by swelling of the lips or throat, trouble breathing, dizziness or fainting, call 911: it may be [anaphylaxis](https://www.aaaai.org/tools-for-the-public/conditions-library/allergies/anaphylaxis) and needs immediate care.`,
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
    longDescription: `Con la fiebre y la tos encima, distinguir entre flu, COVID o una infección de garganta permite tratarte bien desde el principio. En Clínica Hispana Nueva Salud hacemos pruebas rápidas y te damos tratamiento el mismo día: sin cita previa, sin seguro médico y en español.

## ¿Qué incluye?

- **Prueba rápida de influenza (flu)** con resultado en minutos
- **Prueba de COVID-19**
- **[Prueba de estreptococo](/services/prueba-strep)** si el dolor de garganta lo sugiere
- **Evaluación de síntomas respiratorios** y revisión de pulmones y garganta
- **Atención de gripe, tos, bronquitis, sinusitis y garganta infectada**
- **Receta el mismo día** cuando el equipo médico indica tratamiento
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

1. Vienes cuando puedas, sin cita, y te anotas al llegar.
2. El personal médico evalúa tus síntomas y te revisa garganta, oídos y pulmones.
3. Se hace la prueba rápida de flu, COVID o estreptococo según el caso; el resultado está en minutos.
4. Sales con tu diagnóstico, tu receta y tu tratamiento el mismo día.
5. Si necesitas justificante médico para trabajo o escuela, te lo entregamos.

## Pruebas de flu y COVID en una clínica hispana cerca de ti

Si buscas prueba de flu o COVID en Houston sin cita, en español y a precio accesible, te atendemos cerca de ti en el sureste de Houston (zona Bellfort / Hobby), de lunes a domingo de 9 AM a 9 PM.`,
    longDescriptionEn: `When fever, cough or malaise start, knowing whether it's the flu, COVID or a throat infection helps you get treated in time. At Clínica Hispana Nueva Salud we run rapid tests and give you treatment the same day: no appointment, no insurance required and in Spanish.

## What's included?

- **Rapid flu (influenza) test** with results in minutes
- **COVID-19 test**
- **[Strep test](/en/services/prueba-strep)** if the sore throat suggests it
- **Evaluation of respiratory symptoms** and a check of lungs and throat
- **Treatment for the flu, cough, bronchitis, sinusitis and throat infections**
- **Same-day prescription** when the medical team starts treatment
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

1. Come by whenever you can, no appointment, and sign in when you arrive.
2. The medical staff evaluates your symptoms and checks your throat, ears and lungs.
3. A rapid flu, COVID or strep test is done as needed; results are ready in minutes.
4. You leave with your diagnosis, prescription and treatment the same day.
5. If you need a doctor's note for work or school, we provide it.

## Flu and COVID testing at a Hispanic clinic near you

If you're looking for a flu or COVID test in Houston with no appointment, in Spanish and at an affordable price, we're near you in southeast Houston (Bellfort / Hobby area), Monday to Sunday from 9 AM to 9 PM.`,
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
    longDescription: `La escuela, la guardería o el equipo deportivo suelen pedir un chequeo físico antes de aceptar a un niño o adolescente. En Clínica Hispana Nueva Salud lo hacemos de forma rápida y completa, con todos los formularios listos: sin cita previa, sin seguro médico y en español.

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

Si buscas examen físico escolar o deportivo en Houston sin cita, en español y a precio accesible, te atendemos cerca de ti en el sureste de Houston (zona Bellfort / Hobby), de lunes a domingo de 9 AM a 9 PM.`,
    longDescriptionEn: `Schools, daycares and sports teams usually ask for a physical before they accept a child or teen. At Clínica Hispana Nueva Salud we do it quickly and thoroughly, with all forms ready: no appointment, no insurance required and in Spanish.

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

If you're looking for a school or sports physical in Houston with no appointment, in Spanish and at an affordable price, we're near you in southeast Houston (Bellfort / Hobby area), Monday to Sunday from 9 AM to 9 PM.`,
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
    longDescription: `Hablar de tu salud íntima es más fácil cuando te escuchan con calma y en tu idioma. En Clínica Hispana Nueva Salud ofrecemos atención ginecológica en español, con la privacidad y el respeto que mereces: sin cita previa, sin seguro médico y con precios accesibles.

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

1. Vienes cuando puedas, sin cita, y te anotas al llegar; desde la entrada te atienden en español.
2. Platicas tus síntomas o el motivo de tu chequeo con el personal médico, en privado.
3. Se realiza la revisión y, si aplica, se toma el Papanicolaou o el cultivo.
4. Si hay infección evidente, sales con tu tratamiento el mismo día.
5. Te avisamos cuando los resultados de laboratorio estén listos y te explicamos qué significan.

**Consejo:** para el Papanicolaou es mejor no estar menstruando y evitar relaciones, duchas vaginales u óvulos 48 horas antes. Si tienes dudas, llámanos y te orientamos.

## Atención ginecológica en Bellfort Avenue

Si buscas ginecología en Houston donde te hablen en español, estamos en el sureste de la ciudad, en Bellfort Avenue cerca del aeropuerto Hobby: sin cita previa y con precios accesibles. Aquí nadie te juzga; solo queremos que te sientas bien y tranquila con tu salud.`,
    longDescriptionEn: `Talking about intimate health is easier when someone listens calmly, in your language. At Clínica Hispana Nueva Salud, gynecology care happens in Spanish and in private, with no appointment, no insurance requirement and affordable prices.

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

1. Come by whenever you can, no appointment, and sign in; you're greeted in Spanish from the start.
2. Talk about your symptoms or the reason for your checkup with the medical staff, in private.
3. The exam is performed and, if needed, the Pap smear or culture is taken.
4. If there's an obvious infection, you leave with treatment the same day.
5. We let you know when lab results are ready and explain what they mean.

**Tip:** for a Pap smear it's best not to be on your period and to avoid intercourse, douching or vaginal suppositories for 48 hours beforehand. If you have questions, call us and we'll guide you.

## Gynecology care on Bellfort Avenue

If you want gynecology care in Houston from people who speak Spanish, we're in the southeast part of the city, on Bellfort Avenue near Hobby Airport: walk-ins welcome and affordable prices. Nobody judges you here; we just want you to feel well and at ease about your health.`,
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
    longDescription: `Un retraso en el periodo, náuseas, cansancio o senos sensibles son señales que generan dudas y nervios. Una prueba de embarazo confiable te da una respuesta clara en minutos. En Clínica Hispana Nueva Salud realizamos pruebas de orina y de sangre sin cita previa, sin seguro médico y en español, y te orientamos sobre lo que sigue, sin juicios y con total privacidad.

## ¿Qué incluye?

- **Prueba de embarazo en orina:** resultado en minutos
- **Prueba de embarazo en sangre (hCG):** más sensible y precisa, detecta el embarazo antes
- **Confirmación médica** del resultado y cálculo aproximado de las semanas
- **Orientación** sobre control prenatal, vitaminas y cuidados iniciales
- **[Ultrasonido](/services/ultrasonido)** para confirmar el embarazo y su ubicación cuando está indicado
- **Referencia** a ginecología u obstetricia para tu control prenatal

## ¿Prueba de orina o de sangre?

La **prueba de orina** es rápida y confiable a partir del primer día de retraso del periodo. La **prueba de sangre** mide la hormona hCG con precisión: puede detectar el embarazo desde 7 a 10 días después de la concepción, aun antes del retraso, y también sirve para dar seguimiento cuando hay dudas o sangrado. Si tu prueba casera salió negativa pero el periodo no llega, la prueba en sangre resuelve la duda.

## ¿Cuándo hacerme la prueba?

- En orina, a partir del día en que te debía bajar
- Desde 7 a 10 días después de la relación sin protección (sangre)
- Si tienes síntomas como náuseas, cansancio, senos sensibles o ganas frecuentes de orinar
- Si tu prueba casera es dudosa, con una línea muy tenue
- Antes de iniciar un medicamento, un tratamiento o un estudio con rayos X

## ¿Cómo es la visita?

1. Llegas sin cita y te registras en recepción, en un ambiente discreto.
2. Se toma la muestra de orina o de sangre, según el caso.
3. El médico te da el resultado y lo confirma; en la prueba de orina es en la misma visita.
4. Si es positivo, calculamos las semanas aproximadas, te indicamos vitaminas prenatales y te orientamos sobre el control prenatal.
5. Si es negativo y el periodo sigue sin llegar, evaluamos otras causas como [problemas de tiroides](/services/tiroides), estrés o cambios hormonales.

## Si el resultado es positivo

Un embarazo confirmado necesita control prenatal desde el inicio. Te explicamos qué cuidados empezar de inmediato (ácido fólico, alimentación, qué medicamentos evitar), te hacemos los [exámenes de sangre iniciales](/services/examenes-sangre) si lo deseas y te damos la referencia para tu seguimiento obstétrico. Si no planeabas un embarazo, también te escuchamos y te informamos de tus opciones con respeto.

## Si el resultado es negativo

Un periodo que no llega puede deberse a estrés, cambios de peso, [anticonceptivos](/services/anticonceptivos), problemas hormonales o de tiroides. Si el retraso continúa, te ayudamos a encontrar la causa en nuestra área de [salud de la mujer](/services/ginecologia).

## Prueba de embarazo en una clínica hispana cerca de ti

Si buscas dónde hacerte una prueba de embarazo de sangre en Houston sin cita, en español y a precio accesible, te atendemos cerca de ti en el sureste de Houston (zona Bellfort / Hobby), de lunes a domingo de 9 AM a 9 PM.`,
    longDescriptionEn: `A late period, nausea, tiredness or tender breasts raise questions and nerves. A reliable pregnancy test gives you a clear answer in minutes. At Clínica Hispana Nueva Salud we perform urine and blood pregnancy tests with no appointment, no insurance required and in Spanish, and we guide you on what comes next, without judgment and with full privacy.

## What's included?

- **Urine pregnancy test:** results in minutes
- **Blood pregnancy test (hCG):** more sensitive and precise, detects pregnancy earlier
- **Medical confirmation** of the result and an estimate of how many weeks along you are
- **Guidance** on prenatal care, vitamins and early precautions
- **[Ultrasound](/en/services/ultrasonido)** to confirm the pregnancy and its location when indicated
- **Referral** to gynecology or obstetrics for your prenatal care

## Urine or blood test?

The **urine test** is fast and reliable from the first day of a missed period. The **blood test** measures the hCG hormone precisely: it can detect pregnancy 7 to 10 days after conception, even before a missed period, and it's also used for follow-up when there are doubts or bleeding. If your home test was negative but your period hasn't come, the blood test settles the question.

## When should I get tested?

- Urine test, starting the day your period was due
- From 7 to 10 days after unprotected sex (blood)
- If you have symptoms such as nausea, tiredness, tender breasts or frequent urination
- If your home test is unclear, with a very faint line
- Before starting a medication, a treatment or an X-ray study

## What is the visit like?

1. Come in whenever you can, no appointment, and sign in; everything is handled discreetly.
2. A urine or blood sample is taken, depending on the case.
3. The doctor gives you the result and confirms it; for the urine test it's in the same visit.
4. If it's positive, we estimate the weeks, recommend prenatal vitamins and guide you on prenatal care.
5. If it's negative and your period still hasn't come, we look at other causes such as [thyroid problems](/en/services/tiroides), stress or hormonal changes.

## If the result is positive

A confirmed pregnancy needs prenatal care from the start. We explain which precautions to begin right away (folic acid, diet, which medications to avoid), run the [initial blood tests](/en/services/examenes-sangre) if you wish, and give you the referral for your obstetric follow-up. If you weren't planning a pregnancy, we listen and inform you of your options with respect.

## If the result is negative

A missed period can be due to stress, weight changes, [birth control](/en/services/anticonceptivos), hormonal or thyroid problems. If the delay continues, we help you find the cause in our [women's health](/en/services/ginecologia) area.

## Pregnancy test at a Hispanic clinic near you

If you're looking for where to get a blood pregnancy test in Houston with no appointment, in Spanish and at an affordable price, we're near you in southeast Houston (Bellfort / Hobby area), Monday through Sunday from 9 AM to 9 PM.`,
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
    longDescription: `Tú decides si quieres hijos, cuántos y cuándo. En Clínica Hispana Nueva Salud te damos información clara, en español y sin juicios para que elijas el método anticonceptivo que mejor se adapta a ti: sin cita previa, sin seguro médico y con precios accesibles.

## ¿Qué incluye?

- **Consulta de orientación personalizada:** revisamos tu salud, tus planes y tu estilo de vida
- **Información sobre los distintos métodos** y cómo se comparan en eficacia, comodidad y efectos secundarios
- **Pastillas anticonceptivas e inyección anticonceptiva**, con inicio en la clínica
- **Inicio y seguimiento del método elegido**, para ajustar si algo no te sienta bien
- **Resolución de dudas** sobre olvidos, sangrados irregulares u otros efectos
- **Referencia** si prefieres un método que requiere especialista (DIU, implante)

Si ya tienes un implante y quieres retirarlo, contamos con [extracción de implantes subdérmicos](/services/extraccion-implantes).

## Pastillas o inyección: ¿cuál me conviene?

- **Pastillas:** una diaria, siempre a la misma hora. Buena opción si eres constante y quieres poder suspender fácilmente. Algunas también ayudan con el acné o con periodos dolorosos.
- **Inyección:** se aplica cada 3 meses. Ideal si prefieres no pensar en ello a diario o no puedes guardar pastillas en casa. Puede alterar el patrón de sangrado los primeros meses.

En la consulta valoramos factores como presión alta, migrañas, tabaquismo, lactancia o antecedentes de trombosis, que influyen en cuál método es seguro para ti.

## ¿Cuándo empezar y qué esperar?

- Puedes iniciar en cualquier momento del ciclo; te explicamos cuántos días usar protección adicional.
- Los primeros 2-3 meses es común tener sangrados ligeros fuera de fecha; suelen desaparecer.
- Si olvidaste pastillas o se te pasó la inyección, llámanos: te decimos qué hacer y si conviene una [prueba de embarazo](/services/prueba-embarazo).

## ¿Cómo es la visita?

1. Vienes cuando puedas, sin cita, y te anotas al llegar.
2. Platicas en privado con el personal médico sobre lo que buscas y tu historial.
3. Se revisan presión arterial y datos básicos de salud.
4. Eliges el método con toda la información y, si aplica, sales con tu receta o tu inyección el mismo día.
5. Programamos el seguimiento o tu siguiente inyección.

Si además quieres un chequeo completo, podemos hacer en la misma visita tu [consulta ginecológica y Papanicolaou](/services/ginecologia).

## Anticonceptivos en una clínica hispana cerca de ti

Si buscas orientación anticonceptiva en Houston en español, confidencial y a precio accesible, te atendemos cerca de ti en el sureste de Houston (zona Bellfort / Hobby), de lunes a domingo de 9 AM a 9 PM.`,
    longDescriptionEn: `You decide whether to have children, how many and when. At Clínica Hispana Nueva Salud we give you clear, judgment-free information in Spanish so you can choose the birth control method that fits you best: no appointment, no insurance required and affordable pricing.

## What's included?

- **Personalized counseling visit:** we review your health, your plans and your lifestyle
- **Information on the different methods** and how they compare in effectiveness, convenience and side effects
- **Birth control pills and the contraceptive injection**, started at the clinic
- **Starting and following up on your chosen method**, to adjust if something doesn't suit you
- **Answers to your questions** about missed doses, irregular bleeding or other effects
- **Referral** if you prefer a method that requires a specialist (IUD, implant)

If you already have an implant and want it removed, we offer [subdermal implant removal](/en/services/extraccion-implantes).

## Pills or injection: which is right for me?

- **Pills:** one a day, always at the same hour. A good option if you're consistent and want to be able to stop easily. Some also help with acne or painful periods.
- **Injection:** given every 3 months. Ideal if you'd rather not think about it daily or can't keep pills at home. It may change your bleeding pattern during the first months.

During the visit we consider factors like high blood pressure, migraines, smoking, breastfeeding or a history of blood clots, which affect which method is safe for you.

## When to start and what to expect

- You can start at any point in your cycle; we explain how many days to use backup protection.
- During the first 2-3 months, light bleeding between periods is common; it usually goes away.
- If you missed pills or your injection is overdue, call us: we'll tell you what to do and whether a [pregnancy test](/en/services/prueba-embarazo) makes sense.

## What is the visit like?

1. Come by whenever you can, no appointment, and sign in when you arrive.
2. Talk privately with the medical staff about what you're looking for and your history.
3. Blood pressure and basic health data are checked.
4. You choose the method with full information and, if applicable, leave with your prescription or injection the same day.
5. We schedule your follow-up or next injection.

If you also want a full checkup, we can do your [gynecology visit and Pap smear](/en/services/ginecologia) during the same visit.

## Birth control at a Hispanic clinic near you

If you're looking for confidential, affordable birth control counseling in Houston in Spanish, we're near you in southeast Houston (Bellfort / Hobby area), Monday to Sunday from 9 AM to 9 PM.`,
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
    longDescription: `El implante subdérmico (Nexplanon, Implanon o Jadelle) es una varilla pequeña que se coloca debajo de la piel del brazo y protege contra el embarazo por 3 a 5 años. Cuando se vence, cuando quieres buscar un embarazo o cuando los efectos secundarios ya no te convencen, hay que retirarlo con un procedimiento sencillo. En Clínica Hispana Nueva Salud lo hacemos sin cita previa, sin seguro médico y en español, en una sola visita.

## ¿Qué incluye?

- **Evaluación y localización del implante** por palpación en el brazo
- **Anestesia local** en la zona para que no sientas dolor
- **Retiro en la misma consulta**, por un corte de apenas 2 a 3 milímetros
- **Curación y vendaje** con indicaciones claras de cuidado en casa
- **Orientación anticonceptiva:** si quieres seguir protegida, te ayudamos a elegir [otro método](/services/anticonceptivos) o un implante nuevo ese mismo día

## ¿Cuándo debo retirar el implante?

- **Se venció:** Nexplanon dura 3 años y Jadelle hasta 5. Pasada esa fecha deja de proteger como debería.
- **Quieres embarazarte:** la fertilidad regresa rápido, en general en el primer mes tras el retiro.
- **Efectos secundarios molestos:** sangrado irregular o prolongado, dolor de cabeza, cambios de ánimo, acné o aumento de peso.
- **Cambio de método:** prefieres pastillas, inyección, DIU u otro método.
- **Indicación médica:** por ejemplo, si desarrollas presión alta severa o problemas de coagulación.

No tienes que esperar a que se venza: puedes retirarlo en cualquier momento.

## ¿Cómo es el procedimiento?

1. Llegas sin cita, te registras y el personal médico revisa tu brazo y localiza el implante.
2. Limpiamos la piel y adormecemos con anestesia local; lo único que notas es un piquete breve.
3. Se hace una incisión mínima en el extremo del implante y se retira con una pinza.
4. Se cierra con cinta adhesiva (no suele necesitar puntos) y se coloca un vendaje compresivo.
5. Recibes indicaciones de cuidado y, si lo deseas, sales con tu nuevo método anticonceptivo.

En total, el retiro toma entre 10 y 20 minutos. Si el implante está profundo o difícil de localizar, te lo decimos con honestidad y te orientamos sobre el siguiente paso.

## Cuidados después del retiro

- Deja el vendaje compresivo 24 horas para evitar moretones
- Mantén la zona limpia y seca los primeros 2 a 3 días
- Puedes hacer tus actividades normales; evita cargar peso con ese brazo el primer día
- Es normal un pequeño moretón o sensibilidad por una semana
- Acude a la clínica si hay sangrado abundante, pus, fiebre o dolor que aumenta

## ¿Y después del implante?

Si no quieres embarazarte, recuerda que la protección termina el mismo día del retiro. Podemos colocarte un implante nuevo en la misma incisión, aplicarte la inyección o recetarte pastillas. Si estás buscando un bebé, aprovecha la visita para un [chequeo de salud de la mujer](/services/ginecologia) y [exámenes de sangre](/services/examenes-sangre) de preparación.

## Retiro de implante en una clínica hispana cerca de ti

Si buscas dónde quitarte el implante del brazo en Houston sin cita, en español y a precio accesible, te atendemos cerca de ti en el sureste de Houston (zona Bellfort / Hobby), de lunes a domingo de 9 AM a 9 PM.`,
    longDescriptionEn: `The subdermal implant (Nexplanon, Implanon or Jadelle) is a small rod placed under the skin of the arm that protects against pregnancy for 3 to 5 years. When it expires, when you want to get pregnant, or when the side effects are no longer worth it, it needs to be removed with a simple procedure. At Clínica Hispana Nueva Salud we do it with no appointment, no insurance required and in Spanish, in a single visit.

## What's included?

- **Evaluation and location of the implant** by feeling the arm
- **Local anesthesia** so you don't feel pain
- **Outpatient removal** through a 2 to 3 millimeter incision
- **Wound care and bandage** with clear at-home instructions
- **Contraceptive counseling:** if you want to stay protected, we help you choose [another method](/en/services/anticonceptivos) or a new implant the same day

## When should the implant be removed?

- **It expired:** Nexplanon lasts 3 years and Jadelle up to 5. After that date it's no longer reliable.
- **You want to get pregnant:** fertility returns quickly, usually within the first month after removal.
- **Bothersome side effects:** irregular or prolonged bleeding, headaches, mood changes, acne or weight gain.
- **Switching methods:** you prefer pills, the shot, an IUD or another method.
- **Medical reasons:** for example, if you develop severe high blood pressure or clotting problems.

You don't have to wait until it expires: it can be removed at any time.

## What is the procedure like?

1. You walk in, check in, and the medical staff examines your arm and locates the implant.
2. We clean the skin and numb it with local anesthesia; all you notice is a quick prick.
3. A tiny incision is made at the tip of the implant and it's removed with forceps.
4. It's closed with adhesive strips (stitches are rarely needed) and a pressure bandage is applied.
5. You get care instructions and, if you wish, leave with your new birth control method.

Removal takes 10 to 20 minutes in total. If the implant is deep or hard to locate, we tell you honestly and guide you on the next step.

## Care after removal

- Leave the snug bandage on for a full day so it doesn't bruise
- Keep the spot clean and dry for 2 or 3 days
- You can do your normal activities; avoid lifting heavy things with that arm the first day
- A small bruise or tenderness for a week is normal
- Come to the clinic if there's heavy bleeding, pus, fever or increasing pain

## What comes after the implant?

If you don't want to get pregnant, remember that protection ends the same day it's removed. We can put in a new implant through the same small opening, give you the shot or start you on pills. If you're trying for a baby, use the visit for a [women's health checkup](/en/services/ginecologia) and preparation [blood tests](/en/services/examenes-sangre).

## Implant removal at a Hispanic clinic near you

If you're looking for where to get the arm implant removed in Houston with no appointment, in Spanish and at an affordable price, we're near you in southeast Houston (Bellfort / Hobby area), Monday through Sunday from 9 AM to 9 PM.`,
  },
  {
    slug: "salud-hombre",
    order: 10,
    category: "medicina-general",
    icon: "Mars",
    highlighted: true,
    title: "Exámenes de Salud del Hombre: PSA y Perfil Hormonal",
    titleEn: "Men's Health Exams: PSA & Hormone Profile",
    metaTitle: "Salud del Hombre en Houston | Clínica Hispana Nueva Salud",
    metaTitleEn: "Men's Health Exams in Houston | Clínica Hispana Nueva Salud",
    shortDescription:
      "Exámenes de salud del hombre: antígeno prostático (PSA), perfil hormonal y chequeo general, en español.",
    shortDescriptionEn:
      "Men's health exams: prostate antigen (PSA), hormone profile and general checkup, in Spanish.",
    description:
      "Exámenes del hombre en Houston, TX: PSA y perfil hormonal. Laboratorio y atención en español, con precios accesibles. Sin cita y sin seguro médico.",
    descriptionEn:
      "Men's health exams in Houston, TX: PSA and hormone profile. Lab work and care in Spanish, with affordable pricing. Walk-ins welcome, no insurance needed.",
    keywords: [
      "examen del hombre houston",
      "prueba psa houston",
      "examen de prostata houston",
      "chequeo hombre houston",
    ],
    keywordsEn: [
      "mens health houston",
      "psa test houston",
      "prostate exam houston",
      "mens checkup houston",
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

- **PSA (antígeno prostático específico):** análisis de sangre para dar seguimiento a la próstata
- **Nivel de testosterona:** la hormona que influye en energía, ánimo, masa muscular y deseo sexual
- **Chequeo general:** presión arterial, peso, signos vitales y revisión de síntomas
- **Evaluación de síntomas urinarios** (levantarse de noche a orinar, chorro débil, goteo) o de falta de energía
- **Referencia a urólogo o especialista** cuando el resultado lo amerita

Si quieres un panorama completo, podemos combinarlo con [exámenes de sangre](/services/examenes-sangre) de glucosa, colesterol y [tiroides](/services/tiroides) en la misma extracción.

## ¿A qué edad y cada cuánto?

- **PSA:** entre los 55 y los 69 años se decide con el médico si conviene hacerlo; si tu padre o un hermano tuvo cáncer de próstata, puede adelantarse. Se repite cada 1 a 2 años según el resultado.
- **Testosterona:** a cualquier edad si tienes síntomas de testosterona baja (ver abajo). Se mide en la mañana, que es cuando está más alta.

## Señales de que conviene revisarte

- Te despiertas más de una vez por la noche para ir al baño
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
2. Te sacamos sangre aquí mismo en unos minutos.
3. El personal médico revisa tus signos vitales y evalúa tus síntomas.
4. Cuando el laboratorio entrega los resultados, te los explicamos en español y definimos los siguientes pasos.

## Salud del hombre en una clínica hispana cerca de ti

Si buscas un examen de próstata (PSA) o de testosterona en Houston sin cita, en español y a precio accesible, te atendemos cerca de ti en el sureste de Houston (zona Bellfort / Hobby), de lunes a domingo de 9 AM a 9 PM.`,
    longDescriptionEn: `Men's health often gets put off: "nothing hurts," "I don't have time." At Clínica Hispana Nueva Salud we make it easy to get the tests that detect important changes in the prostate and your hormones early, with results explained in Spanish: no appointment, no insurance required and affordable pricing.

## What does the men's checkup include?

- **PSA (prostate-specific antigen):** a blood test used to keep an eye on the prostate
- **Testosterone level:** the hormone that affects energy, mood, muscle mass and sex drive
- **General checkup:** blood pressure, weight, vital signs and symptom review
- **Evaluation of urinary symptoms** (getting up at night to urinate, weak stream, dribbling) or low energy
- **Referral to a urologist or specialist** when the result warrants it

If you want a full picture, we can combine it with [blood tests](/en/services/examenes-sangre) for glucose, cholesterol and [thyroid](/en/services/tiroides) in the same draw.

## At what age and how often?

- **PSA:** generally from age 50, or from 40-45 if you have relatives (father, brother) with prostate cancer. Repeated every 1 to 2 years depending on the result.
- **Testosterone:** at any age if you have symptoms of low testosterone (see below). It's measured in the morning, when it's highest.

## Signs it's time to get checked

- You wake up more than once a night to use the bathroom
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

If you're looking for a prostate (PSA) or testosterone test in Houston with no appointment, in Spanish and at an affordable price, we're near you in southeast Houston (Bellfort / Hobby area), Monday to Sunday from 9 AM to 9 PM.`,
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
      "Análisis de sangre en Houston, TX: biometría, química, glucosa, colesterol y más. Resultados en español, con precios accesibles. Sin cita y sin seguro.",
    descriptionEn:
      "Blood tests in Houston, TX: CBC, chemistry, glucose, cholesterol and more. Results in Spanish at affordable prices. Walk-ins welcome, no insurance needed.",
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
    longDescription: `Un análisis de sangre es la forma más rápida y económica de saber cómo está tu salud por dentro. Muchas enfermedades como la diabetes, el colesterol alto, la anemia o los problemas de tiroides no dan síntomas al principio y solo se descubren con un examen de laboratorio. En Clínica Hispana Nueva Salud tomamos tu muestra sin cita previa, sin seguro médico y te explicamos cada resultado en español, sin tecnicismos.

## ¿Qué incluye?

- **Toma de muestra en la clínica**, sin necesidad de ir a otro laboratorio
- **Biometría hemática completa** (conteo de glóbulos rojos, blancos y plaquetas)
- **Química sanguínea:** glucosa, colesterol, triglicéridos, función de hígado y riñón
- **Paneles para chequeo general** o para dar seguimiento a una condición
- **Consulta médica** para interpretar los resultados y definir el siguiente paso
- **Resultados explicados en español**, con copia impresa o digital para ti

## Exámenes de sangre más solicitados

- **Glucosa y hemoglobina A1C:** detectan prediabetes y [diabetes](/services/condiciones-cronicas) y muestran el control de los últimos 3 meses
- **Perfil de lípidos:** colesterol total, HDL, LDL y triglicéridos para conocer tu riesgo cardíaco
- **Biometría hemática:** anemia, infecciones y problemas de coagulación
- **Perfil metabólico:** electrolitos, función renal y hepática
- **Pruebas de tiroides:** TSH, T3 y T4 para [hipotiroidismo o hipertiroidismo](/services/tiroides)
- **Vitaminas:** vitamina B12, vitamina D y hierro, causas frecuentes de cansancio
- **Perfil hormonal:** testosterona en el hombre y hormonas femeninas
- **PSA:** detección de problemas de próstata como parte del [chequeo del hombre](/services/salud-hombre)
- **Pruebas de infecciones:** VIH, sífilis, hepatitis y otras [enfermedades de transmisión sexual](/services/enfermedades-transmision-sexual)
- **Prueba de embarazo en sangre:** más sensible que la de orina

Si no sabes qué examen necesitas, cuéntanos tus síntomas y el médico te indica el panel adecuado.

## ¿Cuándo debo hacerme un análisis de sangre?

- Una vez al año como chequeo preventivo, aunque te sientas bien
- Si tienes cansancio constante, mareos, sed excesiva o pérdida de peso sin explicación
- Si en tu familia hay diabetes, colesterol alto, presión alta o enfermedades de tiroides
- Para dar seguimiento a un tratamiento (diabetes, tiroides, colesterol)
- Antes de iniciar un nuevo trabajo, un deporte o un plan de pérdida de peso
- Si tuviste una relación de riesgo y quieres descartar infecciones

## ¿Necesito venir en ayunas?

Depende del examen. Para glucosa, colesterol y triglicéridos conviene un ayuno de 8 a 12 horas: puedes tomar agua, pero no café, jugo ni alimentos. Para biometría, tiroides, vitaminas, hormonas o pruebas de infecciones no hace falta ayuno. Si vas a combinar varios exámenes, ven en ayunas por la mañana y te tomamos todo en una sola muestra. Si tomas medicamentos, no los suspendas; solo avísanos cuáles usas.

## ¿Cómo es la visita?

1. Vienes cuando puedas, sin cita, y te anotas al llegar.
2. El médico o enfermera revisa tus síntomas y confirma qué exámenes necesitas.
3. Se toma la muestra de sangre en la clínica; el procedimiento dura pocos minutos.
4. Cuando el laboratorio entrega los resultados, te llamamos o te los entregamos en tu visita de control.
5. El médico te explica cada valor en español y, si algo sale alterado, inicias tratamiento o seguimiento ese mismo día.

## Resultados claros, en tu idioma

Un resultado de laboratorio lleno de siglas no sirve de mucho si nadie te lo explica. Por eso cada análisis incluye la revisión con el médico: te decimos qué valores están bien, cuáles necesitan atención y qué hacer al respecto. Si necesitas [sueros o vitaminas inyectadas](/services/sueros-vitaminados), medicamento o una referencia a un especialista, lo resolvemos en la misma visita.

## Análisis de sangre en Bellfort Avenue

Si buscas exámenes de sangre en Houston sin cita, sin seguro y en español, te atendemos cerca de ti en el sureste de Houston (zona Bellfort / Hobby), de lunes a domingo de 9 AM a 9 PM. Revisa también nuestras [promociones de laboratorio](/promociones) con paquetes de chequeo general.`,
    longDescriptionEn: `A blood test is the fastest and most affordable way to know how your health is doing on the inside. Many conditions such as diabetes, high cholesterol, anemia or thyroid problems cause no symptoms at first and are only found through lab work. At Clínica Hispana Nueva Salud we draw your sample with no appointment, no insurance required, and explain every result in Spanish, without the jargon.

## What's included?

- **Sample drawn at the clinic**, no need to go to a separate lab
- **CBC (complete blood count)**: your red and white cells and platelets
- **Blood chemistry:** glucose, cholesterol, triglycerides, liver and kidney function
- **Panels for general checkups** or to follow up on a condition
- **Medical consultation** to interpret the results and decide the next step
- **Results explained in Spanish**, with a printed or digital copy for you

## Most requested blood tests

- **Glucose and hemoglobin A1C:** detect prediabetes and [diabetes](/en/services/condiciones-cronicas) and show your control over the last 3 months
- **Lipid panel:** total cholesterol, HDL, LDL and triglycerides to know your heart risk
- **CBC:** anemia, infections and clotting problems
- **Metabolic panel:** electrolytes, kidney and liver function
- **Thyroid tests:** TSH, T3 and T4 for [hypothyroidism or hyperthyroidism](/en/services/tiroides)
- **Vitamins:** vitamin B12, vitamin D and iron, common causes of fatigue
- **Hormone panel:** testosterone in men and female hormones
- **PSA:** prostate screening as part of the [men's health checkup](/en/services/salud-hombre)
- **Infection tests:** HIV, syphilis, hepatitis and other [sexually transmitted diseases](/en/services/enfermedades-transmision-sexual)
- **Blood pregnancy test:** more sensitive than the urine test

If you're not sure which test you need, tell us your symptoms and the doctor will order the right panel.

## When should I get blood work?

- Once a year as a preventive checkup, even if you feel fine
- If you have constant tiredness, dizziness, excessive thirst or unexplained weight loss
- If diabetes, high cholesterol, high blood pressure or thyroid disease run in your family
- To follow up on a treatment (diabetes, thyroid, cholesterol)
- Before starting a new job, a sport or a weight-loss plan
- After a risky encounter, to rule out infections

## Do I need to fast?

It depends on the test. For glucose, cholesterol and triglycerides an 8 to 12 hour fast is recommended: you may drink water, but no coffee, juice or food. For CBC, thyroid, vitamins, hormones or infection tests no fasting is needed. If you're combining several tests, come fasting in the morning and we'll draw everything in a single sample. If you take medication, don't stop it; just let us know what you use.

## What is the visit like?

1. Come by whenever you can, no appointment, and sign in when you arrive.
2. The doctor or nurse reviews your symptoms and confirms which tests you need.
3. Your blood sample is drawn at the clinic; it takes just a few minutes.
4. When the lab delivers the results, we call you or hand them to you at your follow-up visit.
5. The doctor explains every value in Spanish and, if something is off, you start treatment or follow-up the same day.

## Clear results, in your language

A lab report full of abbreviations isn't much use if nobody explains it. That's why every test includes a review with the doctor: we tell you which values are fine, which need attention and what to do about it. If you need [IV fluids or vitamin injections](/en/services/sueros-vitaminados), medication or a specialist referral, we take care of it in the same visit.

## Blood lab at a Hispanic clinic near you

If you're looking for blood tests in Houston with no appointment, no insurance and in Spanish, we're near you in southeast Houston (Bellfort / Hobby area), Monday through Sunday from 9 AM to 9 PM. Check our [lab promotions](/en/promociones) with general checkup packages too.`,
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
      "Examen de orina en la clínica y tratamiento de infecciones urinarias, en español.",
    shortDescriptionEn:
      "In-clinic urinalysis and urinary infection treatment, in Spanish.",
    description:
      "Examen de orina y tratamiento de infecciones urinarias en Houston, TX. En español, con precios accesibles. Sin cita y sin seguro médico.",
    descriptionEn:
      "Urinalysis and urinary infection treatment in Houston, TX. In Spanish, with affordable pricing. Walk-ins welcome, no insurance needed.",
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
      "Tratamiento indicado por el equipo médico",
      "Atención sin cita en español",
    ],
    featuresEn: [
      "In-clinic urinalysis",
      "Diagnosis of urinary infection",
      "Treatment prescribed by the medical team",
      "Walk-in care in Spanish",
    ],
    longDescription: `El ardor al orinar no es algo con lo que debas "aguantar". En Clínica Hispana Nueva Salud te hacemos el examen de orina en la clínica y, si hay infección urinaria, el equipo médico te indica el tratamiento: sin cita previa, sin seguro médico y en español.

## ¿Qué incluye?

- **Examen general de orina (urianálisis)** con resultado en la misma visita
- **Evaluación de síntomas** y revisión médica
- **Diagnóstico de infección urinaria** (cistitis) y descarte de otras causas
- **Tratamiento** con el antibiótico adecuado, indicado por el equipo médico
- **Urocultivo** cuando la infección se repite o no mejora, para saber qué bacteria es y qué antibiótico sí funciona
- **Indicaciones claras** para aliviar las molestias y evitar que regrese

## Síntomas de infección urinaria

- Ardor o dolor al orinar
- Necesidad de orinar a cada rato, aunque sean unas gotas
- Orina turbia, oscura, con mal olor o con sangre
- Molestia o peso en el bajo vientre
- En algunos casos, fiebre, escalofríos o dolor en la espalda baja (a la altura de los riñones)

Si tienes fiebre, escalofríos o dolor en la espalda, no esperes: puede ser una infección que ya subió a los riñones y necesita atención ese mismo día.

## ¿Por qué no debo esperar ni automedicarme?

Tomar un antibiótico "que te sobró" o el que le sirvió a alguien más puede enmascarar los síntomas sin eliminar la bacteria, y hace que la infección regrese más resistente. Una infección de orina sin tratar correctamente puede avanzar a los riñones (pielonefritis). El examen de orina tarda minutos y te da la certeza de qué tienes y qué tomar.

## Infecciones urinarias frecuentes: ¿qué hacer?

Si te da infección varias veces al año, no es normal y tiene solución. En la consulta revisamos posibles causas (hidratación, hábitos, diabetes, cambios hormonales, piedras en el riñón) y, si es necesario, pedimos un urocultivo o [exámenes de sangre](/services/examenes-sangre) para buscar el origen. En mujeres, a veces la molestia viene de una infección vaginal y no urinaria: nuestra [atención ginecológica](/services/ginecologia) puede hacer la diferencia en el diagnóstico.

## ¿Cómo es la visita?

1. Vienes cuando puedas, sin cita, y te anotas al llegar.
2. Das una muestra de orina en la clínica (lo ideal es no haber orinado en la última hora).
3. El personal médico evalúa tus síntomas y el resultado del examen.
4. Si hay infección, el equipo médico te indica el tratamiento y te entrega la receta.
5. Te indicamos cuándo volver si las molestias no mejoran en 2-3 días.

## Infección urinaria: atención en Bellfort Avenue

Estamos en Bellfort Avenue, cerca del aeropuerto Hobby. El examen de orina se hace aquí mismo y, si confirma la infección, sales con el tratamiento indicado; abrimos todos los días de 9 AM a 9 PM y te atendemos en español.`,
    longDescriptionEn: `Burning when you urinate isn't something you should "put up with." At Clínica Hispana Nueva Salud we run the urine test in-clinic and, if there's a urinary tract infection, the medical team prescribes your treatment: no appointment, no insurance required, and in Spanish.

## What's included?

- **General urinalysis** with results during the same visit
- **Symptom evaluation** and medical exam
- **Diagnosis of urinary tract infection** (cystitis) and ruling out other causes
- **Treatment** with the appropriate antibiotic, prescribed by the medical team
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

1. Come by whenever you can, no appointment, and sign in when you arrive.
2. Provide a urine sample at the clinic (ideally without having urinated in the past hour).
3. The medical staff evaluates your symptoms and the test result.
4. If there's an infection, the medical team prescribes your treatment and hands you the prescription.
5. If you're not feeling better in 2 or 3 days, we tell you when to return.

## UTI care on Bellfort Avenue

We are a Hispanic clinic near you in Houston, in the Bellfort / Hobby area: we run your urine test and, if there's an infection, you get the treatment you need, no appointment, in Spanish, Monday to Sunday from 9 AM to 9 PM.`,
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
    longDescription: `Diarrea que no se quita, dolor de estómago que va y viene, gases, cambios en la forma de ir al baño o bajar de peso sin buscarlo. Muchas veces la causa está en el intestino y la forma más directa de encontrarla es un análisis de heces.

## ¿Qué se busca en la muestra?

- **Parásitos y sus huevos**, revisados al microscopio en el laboratorio ([MedlinePlus](https://medlineplus.gov/lab-tests/ova-and-parasite-test/)).
- **Bacterias** que causan infecciones intestinales, mediante un cultivo cuando el médico lo indica.
- **Sangre oculta**: rastros invisibles que avisan de un posible sangrado en el intestino.
- **Características generales**: consistencia, grasa, restos de alimentos o signos de inflamación.

El equipo médico decide qué estudios pedir según tus síntomas, para no repetir pruebas que no aportan.

## ¿Cómo recojo la muestra?

1. Te damos un recipiente limpio y las instrucciones.
2. Recoge la evacuación sin que se mezcle con orina, agua del inodoro ni papel.
3. Tapa bien el recipiente y anota la fecha y la hora.
4. Tráela lo antes posible; si no puedes, pregúntanos cómo conservarla.

Para buscar parásitos a veces se piden varias muestras de días distintos, porque no siempre aparecen en todas.

## ¿La sangre oculta tiene que ver con el cáncer de colon?

Sí. La prueba de sangre oculta en heces es una de las formas de detección del cáncer de colon que se recomiendan a partir de los 45 años, aunque no tengas síntomas. Si sale positiva, el siguiente paso suele ser una colonoscopia con un especialista.

## ¿Cuándo no esperar?

Si hay sangre visible, heces negras como el alquitrán, fiebre alta, deshidratación o dolor muy fuerte, busca atención ese mismo día o acude a urgencias.`,
    longDescriptionEn: `Diarrhea that won't go away, stomach pain that comes and goes, gas, changes in your bathroom habits or losing weight without trying. Often the cause is in the gut, and the most direct way to find it is a stool test.

## What does the sample show?

- **Parasites and their eggs**, checked under the microscope at the lab ([MedlinePlus](https://medlineplus.gov/lab-tests/ova-and-parasite-test/)).
- **Bacteria** that cause intestinal infections, through a culture when the doctor orders it.
- **Hidden blood**, invisible to the eye, which may point to bleeding in the digestive tract.
- **General features**: consistency, fat, food remnants or signs of inflammation.

The medical team decides which tests to order based on your symptoms, so you don't repeat tests that add nothing.

## How do I collect the sample?

1. We give you a clean container and instructions.
2. Collect the stool without mixing it with urine, toilet water or paper.
3. Close the container tightly and write down the date and time.
4. Bring it in as soon as you can; if you can't, ask us how to store it.

When looking for parasites, several samples from different days are sometimes needed, because they don't show up in every one.

## Does hidden blood have to do with colon cancer?

Yes. A fecal occult blood test is one of the recommended ways to screen for colon cancer starting at age 45, even without symptoms. If it comes back positive, the next step is usually a colonoscopy with a specialist.

## When shouldn't you wait?

If you see blood, have tar-black stools, a high fever, dehydration or very severe pain, get care that same day or go to the emergency room.`,
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
    longDescription: `El dolor de garganta casi siempre lo causa un virus y se quita solo. Pero una parte de los casos, sobre todo en niños, se debe a la bacteria estreptococo del grupo A y sí necesita antibiótico. La prueba rápida de strep ayuda a distinguirlos en la misma visita.

## ¿Cómo se hace la prueba?

Con un hisopo tomamos una muestra del fondo de la garganta y de las amígdalas. Dura unos segundos y puede dar un poco de náusea, pero no duele. El resultado está en minutos, así que sales de la consulta sabiendo si es strep o no.

Si la prueba rápida sale negativa en un niño o adolescente con síntomas claros, puede hacer falta un cultivo de garganta para confirmar, como recomiendan los [CDC](https://www.cdc.gov/group-a-strep/about/strep-throat.html).

## ¿Qué síntomas hacen pensar en strep?

- Dolor de garganta de inicio rápido y dolor al tragar.
- Fiebre.
- Amígdalas rojas e hinchadas, a veces con placas blancas.
- Ganglios del cuello inflamados.
- En niños, dolor de cabeza, de estómago o vómito.

La tos, la nariz tapada y la ronquera apuntan más a un virus.

## ¿Qué pasa si sale positivo?

El equipo médico te receta el antibiótico adecuado. Tómalo completo aunque te sientas mejor a los dos días: dejarlo a medias favorece complicaciones. Los CDC indican que, sin fiebre y con 12 horas o más de antibiótico, ya se puede regresar a clases o al trabajo.

## ¿Y si sale negativo?

Tratamos los síntomas: líquidos, alivio del dolor y reposo. Los antibióticos no sirven contra los virus y usarlos sin necesidad trae efectos secundarios. Vuelve si aparece fiebre alta, dificultad para respirar o para abrir la boca.`,
    longDescriptionEn: `A sore throat is almost always caused by a virus and clears up on its own. But some cases, especially in children, are due to group A strep bacteria and do need antibiotics. The rapid strep test helps tell them apart at the same visit.

## How is the test done?

We swab the back of the throat and the tonsils. It takes a few seconds and may make you gag a little, but it doesn't hurt. The result is ready in minutes, so you leave the visit knowing whether it's strep or not.

If the rapid test is negative in a child or teen with clear symptoms, a throat culture may be needed to confirm, as the [CDC](https://www.cdc.gov/group-a-strep/about/strep-throat.html) recommends.

## Which symptoms suggest strep?

- A sore throat that starts fast and pain when swallowing.
- Fever.
- Red, swollen tonsils, sometimes with white patches.
- Swollen lymph nodes in the neck.
- In children, headache, stomach ache or vomiting.

Coughing, a stuffy nose and hoarseness point more toward a virus.

## What if it's positive?

The medical team prescribes the right antibiotic. Finish it even if you feel better after two days: stopping early raises the risk of complications. The CDC says that once the fever is gone and the antibiotic has been going for 12 hours or more, it's fine to head back to school or work.

## And if it's negative?

We treat the symptoms: fluids, pain relief and rest. Antibiotics don't work against viruses, and using them when not needed brings side effects. Come back if you develop a high fever or trouble breathing or opening your mouth.`,
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
    longDescription: `Muchos empleos, escuelas, programas de voluntariado y trámites piden un resultado de tuberculosis vigente. La prueba detecta si en algún momento tuviste contacto con la bacteria, aunque te sientas perfectamente.

## ¿Qué tipos de prueba hay?

Según los [CDC](https://www.cdc.gov/tb/testing/index.html) hay dos:

- **Prueba cutánea (PPD o TST):** se inyecta una pequeña cantidad de líquido bajo la piel del antebrazo. Se hace en **dos visitas**: un día se aplica y, de 48 a 72 horas después, se lee.
- **Prueba en sangre (IGRA):** se hace con una muestra de sangre en **una sola visita**. Es la preferida si recibiste la vacuna BCG de niño, porque esa vacuna puede dar un falso positivo en la prueba cutánea.

Pregunta a tu empleador o escuela cuál aceptan antes de venir.

## ¿Cómo es la prueba cutánea?

1. Aplicamos el líquido en el antebrazo con una aguja muy fina; se forma una pequeña roncha que desaparece.
2. No la cubras, no la rasques y no le pongas cremas.
3. Regresas entre las 48 y 72 horas para la lectura. Si no vuelves a tiempo, la prueba se tiene que repetir.
4. Te entregamos el resultado documentado para tu trámite.

## ¿Qué significa un resultado positivo?

Que tuviste contacto con la bacteria, no necesariamente que estés enfermo ni que contagies. El siguiente paso es una radiografía de tórax y una evaluación para distinguir entre infección latente, que no contagia, y tuberculosis activa. Ambas tienen tratamiento. Te orientamos en cada paso.

## ¿Cuándo sospechar tuberculosis activa?

Tos de más de tres semanas, sangre al toser, fiebre, sudores nocturnos o pérdida de peso sin explicación. En ese caso no esperes al requisito del trabajo: consulta cuanto antes.`,
    longDescriptionEn: `Many jobs, schools, volunteer programs and applications require a current tuberculosis result. The test shows whether you have ever been exposed to the bacteria, even if you feel perfectly fine.

## What kinds of tests are there?

According to the [CDC](https://www.cdc.gov/tb/testing/index.html), there are two:

- **Skin test (PPD or TST):** a small amount of fluid is injected under the skin of the forearm. It takes **two visits**: the placement and the reading 48 to 72 hours later.
- **Blood test (IGRA):** done with a blood sample in **a single visit**. It's the better choice for anyone vaccinated with BCG in childhood, since that shot can make the skin test read positive when it isn't.

Ask your employer or school which one they accept before you come in.

## How does the skin test work?

1. We place the fluid in your forearm with a very fine needle; a small bump forms and then fades.
2. Don't cover it, scratch it or put creams on it.
3. Come back between 48 and 72 hours later for the reading. If you miss that window, the test has to be repeated.
4. We give you the documented result for your paperwork.

## What does a positive result mean?

That you've been exposed to the bacteria, not necessarily that you are sick or contagious. The next step is a chest X-ray and an evaluation to tell latent infection, which isn't contagious, from active tuberculosis. Both are treatable. We guide you through each step.

## When to suspect active tuberculosis?

A cough lasting more than three weeks, coughing up blood, fever, night sweats or unexplained weight loss. In that case, don't wait for a work requirement: get checked as soon as possible.`,
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
- **Tratamiento y explicación de los pasos siguientes** si sale positivo
- **Orientación para tu pareja**, para que ambos se traten y no haya reinfección
- **Total confidencialidad:** tus resultados son solo tuyos

## ¿Cuándo hacerte la prueba?

- Tuviste relaciones sin protección o se rompió el condón
- Tienes una pareja nueva o más de una pareja
- Tu pareja te avisó que le diagnosticaron una infección
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

Si buscas pruebas de enfermedades de transmisión sexual en Houston de forma confidencial, en español y a precio accesible, te atendemos cerca de ti en el sureste de Houston (zona Bellfort / Hobby), de lunes a domingo de 9 AM a 9 PM.`,
    longDescriptionEn: `Getting tested looks after you and the people you're with. At Clínica Hispana Nueva Salud we offer confidential, respectful, judgment-free STD testing, with treatment when needed: no appointment, no insurance required and in Spanish.

## What's included?

- **Private evaluation** of symptoms and risk factors
- **Testing for the most common infections:** chlamydia, gonorrhea, syphilis, HIV, herpes, trichomonas and hepatitis, depending on your case
- **Lab analysis** of blood, urine or a swab depending on the test
- **Treatment and a clear next-step plan** if it's positive
- **Guidance for your partner**, so you both get treated and avoid reinfection
- **Complete confidentiality:** your results are yours alone

## When should I get tested?

- You had unprotected sex or the condom broke
- You've started with someone new or have several partners
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

If you're looking for confidential STD testing in Houston, in Spanish and at an affordable price, we're near you in southeast Houston (Bellfort / Hobby area), Monday to Sunday from 9 AM to 9 PM.`,
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
    longDescription: `Para entrar a muchos trabajos, o para algunos trámites, te piden una prueba de alcohol y drogas. En Clínica Hispana Nueva Salud la realizamos de forma rápida, discreta y en español, y te entregamos la documentación que necesitas: sin cita previa y sin seguro médico.

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

Si buscas prueba de drogas para empleo en Houston sin cita, en español y a precio accesible, te atendemos cerca de ti en el sureste de Houston (zona Bellfort / Hobby), de lunes a domingo de 9 AM a 9 PM.`,
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

## How long is the visit, and when is the result ready?

Sample collection takes a few minutes. Result turnaround depends on the type of test; we'll tell you at the clinic when your documentation will be ready and how to pick it up or receive it.

## What is the visit like?

1. Walk in without an appointment, check in and show your ID.
2. Tell us which test you need and for what purpose.
3. The sample is collected following chain-of-custody procedure when the employer requires it.
4. We tell you when and how you'll receive the result documentation.

## Alcohol and drug testing at a Hispanic clinic near you

If you're looking for a pre-employment drug test in Houston with no appointment, in Spanish and at an affordable price, we're near you in southeast Houston (Bellfort / Hobby area), Monday to Sunday from 9 AM to 9 PM.`,
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
    longDescription: `Con el electrocardiograma (EKG o ECG) vemos en papel cómo late tu corazón. Es rápido, no duele y da información valiosa sobre el ritmo y el funcionamiento del corazón, por eso es una de las pruebas más pedidas en chequeos y exámenes para trabajo o cirugía.

## ¿Cómo se hace?

Mientras estás recostado, pegamos pequeños electrodos en el pecho y en las extremidades. Durante unos minutos debes quedarte quieto y respirar con normalidad mientras el equipo registra las señales. No pasa electricidad hacia tu cuerpo: solo se "escucha" la que produce tu corazón ([MedlinePlus](https://medlineplus.gov/spanish/pruebas-de-laboratorio/electrocardiograma/)).

**Para prepararte:** ven con ropa de dos piezas, para descubrir el pecho con facilidad, y evita cremas o aceites en la piel ese día, porque impiden que los electrodos se peguen bien.

## ¿Qué puede mostrar?

- Latidos demasiado rápidos, lentos o irregulares.
- Señales de que el corazón ha trabajado de más, como en la presión alta de años.
- Indicios de un infarto antiguo que pasó sin notarse.
- Alteraciones que conviene estudiar con más detalle.

Un EKG normal es una buena noticia, pero no descarta todos los problemas del corazón: es una fotografía de ese momento. Si el resultado o tus síntomas lo piden, te orientamos para estudios de cardiología.

## ¿Cuándo conviene hacerlo?

- Si sientes palpitaciones o el corazón "se salta" latidos.
- Si vives con hipertensión, azúcar alta o colesterol elevado.
- Antes de una cirugía, cuando el cirujano lo solicita.
- En chequeos de trabajo o deporte que lo exigen.

## ¿Y si tengo dolor en el pecho ahora?

Eso no es para la clínica, es para el 911. Opresión fuerte en el pecho acompañada de ahogo, sudoración fría o molestia que baja al brazo o sube a la mandíbula puede ser un infarto.`,
    longDescriptionEn: `An electrocardiogram (EKG or ECG) puts on paper how your heart is beating. It is quick, painless and gives valuable information about heart rhythm and function, which is why it is one of the most requested tests in checkups and exams for work or surgery.

## How is it done?

While you lie down, we stick small electrodes on your chest and limbs. For a few minutes you stay still and breathe normally while the machine records the signals. No electricity goes into your body: it only "listens" to what your heart produces ([MedlinePlus](https://medlineplus.gov/lab-tests/electrocardiogram/)).

**To prepare:** wear a two-piece outfit so your chest is easy to uncover, and skip lotions or oils on your skin that day, since they keep the electrodes from sticking well.

## What can it show?

- Heartbeats that are too fast, too slow or irregular.
- Signs the heart has been overworked, as with years of high blood pressure.
- Evidence of an old heart attack that went unnoticed.
- Changes that call for a closer look.

A normal EKG is good news, but it doesn't rule out every heart problem: it is a snapshot of that moment. If the result or your symptoms call for it, we guide you toward cardiology testing.

## When is it a good idea?

- If you feel palpitations or your heart "skips" beats.
- If you live with hypertension, high blood sugar or elevated cholesterol.
- Before surgery, when the surgeon requests it.
- For work or sports checkups that require it.

## What if I have chest pain right now?

That's a job for 911, not the clinic. Heavy chest pressure along with breathlessness, a cold sweat or discomfort moving down the arm or up to the jaw may be a heart attack.`,
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
    longDescription: `Con el ultrasonido (ecografía) vemos órganos y tejidos por dentro, sin dolor y sin agujas, para saber con más certeza qué está pasando. En Clínica Hispana Nueva Salud contamos con equipo moderno y personal que te explica todo en español: sin cita previa, sin seguro médico y con precios accesibles.

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

Trabaja con ondas de sonido, no con radiación como los rayos X; por eso se usa sin problema en el embarazo y puede repetirse cuando haga falta. El estudio dura entre 15 y 30 minutos y solo sentirás el gel frío y una ligera presión del transductor.

## ¿Cómo me preparo?

- **Abdominal:** de 6 a 8 horas sin comer, para que la vesícula se vea bien.
- **Pélvico y de embarazo temprano:** con la vejiga llena; bebe 3 o 4 vasos de agua una hora antes y aguanta sin ir al baño.
- **Tiroides y tejidos blandos:** no requiere preparación.

Si no sabes cuál te toca, escríbenos antes y te decimos cómo venir preparado.

## ¿Cómo es la visita?

1. Llegas sin cita, te registras y nos cuentas el motivo del estudio.
2. Se realiza el ultrasonido en un espacio privado, con explicación en español.
3. El equipo médico mira las imágenes contigo y te cuenta qué encontró, sin tecnicismos.
4. Si se necesita, sales con tratamiento, estudios complementarios o referencia a especialista.

## Ultrasonido en una clínica hispana cerca de ti

Si buscas ultrasonido en Houston a precio accesible y en español, te atendemos cerca de ti en el sureste de Houston (zona Bellfort / Hobby), de lunes a domingo de 9 AM a 9 PM.`,
    longDescriptionEn: `Ultrasound (sonography) lets us look at organs and tissue inside you, with no pain and no needles, to get a clearer picture of what's going on. At Clínica Hispana Nueva Salud we have modern equipment and staff who explain everything in Spanish: no appointment, no insurance required and affordable pricing.

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

It relies on sound waves rather than the radiation X-rays use, which is why it's fine during pregnancy and can be repeated when needed. The exam takes 15 to 30 minutes and you'll only feel the cool gel and light pressure from the probe.

## How do I prepare?

- **Abdominal:** fast for 6 to 8 hours (to see the gallbladder clearly).
- **Pelvic and early pregnancy:** come with a full bladder; drink 3 or 4 glasses of water an hour ahead and hold it.
- **Thyroid and soft tissue:** no preparation needed.

Not sure which one you need? Message us first and we'll tell you how to come prepared.

## What is the visit like?

1. Walk in without an appointment, check in and tell us the reason for the exam.
2. The ultrasound is performed in a private room, with explanations in Spanish.
3. The medical staff reviews the images and explains the findings in plain words.
4. If needed, you leave with treatment, additional tests or a specialist referral.

## Ultrasound at a Hispanic clinic near you

If you're looking for an affordable ultrasound in Houston in Spanish, we're near you in southeast Houston (Bellfort / Hobby area), Monday to Sunday from 9 AM to 9 PM.`,
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
    longDescription: `Si manejas camiones, autobuses o cualquier vehículo comercial, necesitas tener vigente tu examen físico DOT (Department of Transportation). Sin ese certificado no puedes obtener ni renovar tu licencia CDL, y las empresas no pueden ponerte a manejar. En Clínica Hispana Nueva Salud hacemos el examen sin cita previa, en español y con el certificado listo el mismo día, para que no pierdas horas de trabajo ni tengas que ir a otra clínica.

## ¿Qué incluye?

- **Revisión de historial médico:** enfermedades, cirugías, medicamentos y hábitos
- **Examen de la vista:** agudeza visual (mínimo 20/40 en cada ojo, con o sin lentes) y visión periférica
- **Examen de audición:** prueba de voz susurrada o audiometría
- **Presión arterial y pulso**
- **Análisis de orina** para detectar glucosa, proteína o sangre (no es prueba de drogas)
- **Examen físico completo:** corazón, pulmones, abdomen, columna, extremidades y sistema nervioso
- **Certificado médico DOT** (Medical Examiner's Certificate) el mismo día si apruebas

## ¿Quién necesita el examen DOT?

- Conductores con licencia CDL clase A, B o C
- Conductores de unidades de más de 10,001 libras que cruzan de un estado a otro
- Conductores de autobuses o vehículos con capacidad para más de 8 o 15 pasajeros
- Quienes transportan materiales peligrosos con placard
- Conductores que van a renovar su certificado por vencimiento

## ¿Qué debo llevar?

- Licencia de conducir vigente
- Tus lentes o pupilentes y, si usas, tus aparatos para oír
- Lista de tus medicamentos con nombre y dosis
- Con diabetes, hipertensión, un problema cardíaco o apnea del sueño: tus análisis más recientes, la receta vigente o el reporte de uso del CPAP
- Formulario de la empresa, si tu empleador lo requiere

## ¿Cuánto dura el certificado DOT?

Por lo general el certificado es válido por **2 años**. Cuando hay una condición que vigilar, como la presión o el azúcar, el examinador puede darlo por menos tiempo: 1 año, 6 meses o 3 meses. En esos casos te explicamos qué debes mejorar para lograr la vigencia completa en tu siguiente examen.

## Condiciones que pueden afectar el resultado

- **Presión alta:** con valores hasta 139/89 el certificado es de 2 años; entre 140/90 y 159/99 es de 1 año; más alto puede requerir tratamiento antes de aprobar
- **Diabetes:** si usas insulina necesitas el formulario de tu médico tratante (MCSA-5870) con menos de 45 días
- **Apnea del sueño:** puede pedirse constancia de uso del CPAP
- **Problemas de visión o audición** que no se corrijan con lentes o audífonos
- **Enfermedades del corazón** recientes, epilepsia o uso de ciertos medicamentos

Si tienes alguna de estas condiciones no significa que vayas a reprobar: ven con tus documentos y te orientamos. También podemos [tratar tu presión o tu diabetes](/services/condiciones-cronicas) en la misma clínica para que pases el examen la próxima vez.

## ¿Cómo es la visita?

1. Llegas sin cita, te registras y llenas el cuestionario de salud del DOT.
2. Se toman tus signos vitales, la muestra de orina y las pruebas de vista y oído.
3. El examinador realiza el examen físico y revisa tu historial y medicamentos.
4. Si apruebas, recibes tu certificado médico impreso ese mismo día.
5. Entrega una copia a tu empleador y, en Texas, al Departamento de Seguridad Pública (DPS) para mantener tu CDL activa.

## Examinador médico certificado

Por ley, el examen DOT solo es válido si lo realiza un examinador médico registrado en el Registro Nacional de la FMCSA (Federal Motor Carrier Safety Administration). Llámanos antes de tu visita para confirmar la disponibilidad del examinador ese día y evitar viajes en vano.

## Examen DOT y prueba de drogas

El examen físico DOT no incluye la prueba de drogas. Muchas empresas la piden por separado al contratar o de forma aleatoria: también la hacemos aquí, consulta nuestro [examen de alcohol y drogas](/services/examen-alcohol-drogas). Si necesitas ambos, los hacemos en la misma visita.

## Examen DOT en una clínica hispana cerca de ti

Si buscas examen DOT en Houston sin cita, en español y a precio accesible, te atendemos cerca de ti en el sureste de Houston (zona Bellfort / Hobby, a minutos de las autopistas I-45 y 610), de lunes a domingo de 9 AM a 9 PM. Lee también nuestra [guía del examen DOT para camioneros](/blog/examen-dot-cdl-camioneros-houston).`,
    longDescriptionEn: `If you drive trucks, buses or any commercial vehicle, you need a current DOT (Department of Transportation) physical. Without that certificate you can't get or renew your CDL license, and companies can't put you behind the wheel. At Clínica Hispana Nueva Salud we do the exam with no appointment, in Spanish, and with your certificate ready the same day, so you don't lose hours of work or have to go to another clinic.

## What's included?

- **Medical history review:** conditions, surgeries, medications and habits
- **Eyesight:** each eye must reach 20/40, glasses allowed, and your side vision is checked too
- **Hearing test:** forced-whisper test or audiometry
- **Blood pressure and pulse**
- **Urinalysis** to check for glucose, protein or blood (this is not a drug test)
- **Full physical exam:** heart, lungs, abdomen, spine, limbs and nervous system
- **DOT medical certificate** (Medical Examiner's Certificate) the same day if you pass

## Who needs a DOT physical?

- Drivers with a Class A, B or C CDL
- Anyone driving vehicles over 10,001 lbs in interstate commerce
- Bus drivers or vehicles carrying more than 8 or 15 passengers
- Drivers transporting placarded hazardous materials
- Drivers renewing an expiring certificate

## What should I bring?

- A valid driver's license
- Your glasses or contacts and, if you wear them, your hearing aids
- A list of your medications with name and dose
- With diabetes, hypertension, a heart condition or sleep apnea: your most recent labs, current prescription or CPAP usage report
- Your company's form, if your employer requires one

## How long is the DOT certificate valid?

The certificate is usually valid for **2 years**. If you have a condition that needs monitoring, such as high blood pressure or diabetes, the examiner may issue it for 1 year, 6 months or 3 months. In those cases we explain what you need to improve to get the full term at your next exam.

## Conditions that can affect the result

- **High blood pressure:** up to 139/89 gets a 2-year certificate; 140/90 to 159/99 gets 1 year; higher may require treatment before passing
- **Diabetes:** if you use insulin you need your treating doctor's form (MCSA-5870) dated within 45 days
- **Sleep apnea:** proof of CPAP compliance may be requested
- **Vision or hearing problems** not corrected with glasses or hearing aids
- **Recent heart conditions**, epilepsy or certain medications

Having one of these conditions doesn't mean you'll fail: come with your paperwork and we'll guide you. We can also [treat your blood pressure or diabetes](/en/services/condiciones-cronicas) at the same clinic so you pass next time.

## What is the visit like?

1. You walk in without an appointment, check in and fill out the DOT health questionnaire.
2. We take your vital signs, urine sample and vision and hearing tests.
3. The examiner performs the physical and reviews your history and medications.
4. If you pass, you receive your printed medical certificate the same day.
5. Give a copy to your employer and, in Texas, to the Department of Public Safety (DPS) to keep your CDL active.

## Certified medical examiner

By law, a DOT physical is only valid when performed by a medical examiner listed on the FMCSA (Federal Motor Carrier Safety Administration) National Registry. Call us before your visit to confirm the examiner's availability that day and avoid a wasted trip.

## DOT physical vs. drug test

The DOT physical does not include a drug test. Many companies require it separately at hiring or at random: we do that here too, see our [drug and alcohol testing](/en/services/examen-alcohol-drogas). If you need both, we do them in the same visit.

## DOT physical at a Hispanic clinic near you

If you're looking for a DOT physical in Houston with no appointment, in Spanish and at an affordable price, we're near you in southeast Houston (Bellfort / Hobby area, minutes from I-45 and the 610 Loop), Monday through Sunday from 9 AM to 9 PM. Read our [DOT exam guide for truck drivers](/en/blog/examen-dot-cdl-camioneros-houston) too.`,
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
    longDescription: `Si estás ajustando tu estatus para obtener la residencia permanente, USCIS te pedirá el Formulario I-693 con el resultado de tu examen médico. En Clínica Hispana Nueva Salud lo realizamos con médico autorizado por USCIS (*civil surgeon*), con la toma de muestras y las vacunas en la misma clínica y todo explicado en español.

## ¿Qué incluye el servicio?

- Revisión de tu historial médico y de tu cartilla de vacunación.
- Examen físico y evaluación de salud mental y de consumo de sustancias, como pide el CDC.
- Prueba de tuberculosis en sangre (IGRA) y los análisis de laboratorio que correspondan a tu edad.
- Aplicación de las vacunas que te falten.
- Llenado y firma del I-693 por el médico autorizado cuando están todos los resultados.

## ¿Cómo compruebo que el médico está autorizado?

En el buscador oficial [Find a Civil Surgeon](https://www.uscis.gov/tools/find-a-civil-surgeon) de USCIS puedes buscar por código postal. Te recomendamos hacerlo con cualquier clínica antes de pagar.

## ¿Qué debo traer?

Identificación con foto, tu cartilla de vacunas (de aquí o de tu país), la lista de tus medicamentos y, si alguna vez te trataron por tuberculosis, esos documentos. No firmes el formulario antes de venir.

## ¿Cuánto tarda todo el proceso?

La visita en la clínica es una sola, pero el formulario se completa cuando llegan los resultados del laboratorio. Si alguna prueba sale alterada, puede hacer falta un estudio adicional antes de cerrarlo. Te avisamos en cuanto esté listo.

Para conocer el paso a paso con más detalle, lee nuestra [guía del examen I-693](/blog/guia-examen-medico-inmigracion-i693-houston) y [qué es un civil surgeon](/blog/medicos-autorizados-uscis-houston-civil-surgeon).`,
    longDescriptionEn: `If you are adjusting status to become a permanent resident, USCIS will ask for Form I-693 with the results of your medical exam. At Clínica Hispana Nueva Salud we perform it with a USCIS-authorized physician (*civil surgeon*), with sample collection and vaccines at the same clinic and everything explained in Spanish.

## What does the service include?

- A review of your medical history and vaccination record.
- A physical exam plus mental health and substance use evaluation, as the CDC requires.
- A tuberculosis blood test (IGRA) and the lab tests that apply to your age.
- Any vaccines you are missing.
- Completion and signature of the I-693 by the authorized physician once all results are in.

## How can I confirm the doctor is authorized?

USCIS's official [Find a Civil Surgeon](https://www.uscis.gov/tools/find-a-civil-surgeon) tool lets you search by ZIP code. We recommend doing this with any clinic before you pay.

## What should I bring?

A photo ID, your vaccination record (from here or your home country), a list of your medications and, if you were ever treated for tuberculosis, those documents. Don't sign the form before you come in.

## How long does the whole process take?

The clinic visit is a single one, but the form is completed once the lab results arrive. If a test comes back abnormal, an additional study may be needed before it can be finished. You'll hear from us the moment it's done.

For a more detailed walkthrough, read our [I-693 exam guide](/en/blog/guia-examen-medico-inmigracion-i693-houston) and [what a civil surgeon is](/en/blog/medicos-autorizados-uscis-houston-civil-surgeon).`,
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
    longDescription: `Ponerte al día con tus vacunas toma unos minutos y te protege a ti y a quienes viven contigo. En Clínica Hispana Nueva Salud aplicamos la vacuna contra la influenza (flu) y el toxoide tetánico de forma segura y rápida: sin cita previa, sin seguro médico y en español.

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

1. Vienes cuando puedas, sin cita, y te anotas al llegar.
2. El personal médico revisa brevemente tu historial (alergias, embarazo, vacunas previas).
3. La inyección va en el brazo y en menos de 5 minutos está lista.
4. Te entregamos tu comprobante de vacunación para trabajo, escuela o tus registros.

## Vacunas en una clínica hispana cerca de ti

Si buscas dónde ponerte la vacuna de la flu o el tétanos en Houston sin cita y en español, te atendemos cerca de ti en el sureste de Houston (zona Bellfort / Hobby), de lunes a domingo de 9 AM a 9 PM.`,
    longDescriptionEn: `Catching up on your shots takes a few minutes and protects you and the people you live with. At Clínica Hispana Nueva Salud we administer the flu vaccine and the tetanus toxoid safely and quickly: no appointment, no insurance required and in Spanish.

## Which vaccines do we administer?

- **Flu (influenza) vaccine:** recommended every year, ideally between September and November, before flu season starts in Houston.
- **Tetanus toxoid (tetanus booster):** protects you from cuts, scrapes, wounds from rusty objects or bites. Plan on a booster every 10 years, or earlier after a deep or dirty wound if you can't recall your last one.

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

1. Come by whenever you can, no appointment, and sign in when you arrive.
2. The medical staff briefly reviews your history (allergies, pregnancy, previous vaccines).
3. The shot goes in your arm and is done in under 5 minutes.
4. We give you a vaccination record for work, school or your files.

## Vaccines at a Hispanic clinic near you

If you're looking for where to get a flu shot or tetanus booster in Houston with no appointment and in Spanish, we're near you in southeast Houston (Bellfort / Hobby area), Monday to Sunday from 9 AM to 9 PM.`,
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

Sí, siempre que antes te evalúe el equipo médico y lo aplique personal capacitado. Antes de la sesión revisamos tu presión, alergias, embarazo y condiciones como problemas renales o cardíacos, que pueden contraindicar ciertos sueros. La mayoría de las personas solo sienten el pinchazo inicial y una sensación de frescura en el brazo.

## ¿Cómo es la sesión?

1. Vienes cuando puedas, sin cita, y te anotas al llegar.
2. El personal médico te evalúa y elige el suero adecuado para ti.
3. Se coloca la vía en el brazo y el suero pasa en 30 a 60 minutos, mientras descansas.
4. Al terminar puedes retomar tu día normalmente; muchas personas notan más energía ese mismo día o al siguiente.

## Sueros vitaminados en una clínica hispana cerca de ti

Si buscas sueros vitaminados en Houston aplicados por personal médico, en español y a precio accesible, te atendemos cerca de ti en el sureste de Houston (zona Bellfort / Hobby), de lunes a domingo de 9 AM a 9 PM.`,
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

1. Come by whenever you can, no appointment, and sign in when you arrive.
2. The medical staff evaluates you and chooses the right drip for you.
3. The IV line is placed in your arm and the drip runs for 30 to 60 minutes while you rest.
4. When it's done you can go on with your day; many people notice more energy that same day or the next.

## Vitamin IV therapy at a Hispanic clinic near you

If you're looking for vitamin IV drips in Houston administered by medical staff, in Spanish and at an affordable price, we're near you in southeast Houston (Bellfort / Hobby area), Monday to Sunday from 9 AM to 9 PM.`,
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
    longDescription: `Un corte en la cocina, en el trabajo o jugando: la mayoría se resuelve con limpieza y un vendaje, pero algunos necesitan puntos para cerrar bien, sanar más rápido y dejar menos marca. En la clínica evaluamos la herida, la cerramos con anestesia local y te decimos cómo cuidarla.

## ¿Cómo sé si mi corte necesita puntos?

- Los bordes quedan separados y no se juntan solos.
- Es profunda: se ve grasa amarilla o tejido debajo de la piel.
- Mide más de un par de centímetros o está en una zona que se dobla, como un nudillo o la rodilla.
- Está en la cara, donde la cicatriz importa más.
- Sigue sangrando después de apretarla con un paño limpio durante varios minutos.

## ¿Cuánto tiempo puedo esperar?

Lo mejor es venir en las primeras horas. Con el paso del tiempo aumenta el riesgo de infección y, en algunas heridas, cerrarlas tarde ya no conviene; entonces se deja sanar abierta con curaciones.

## ¿Qué hacemos en la consulta?

1. Revisamos la herida, la sensibilidad y el movimiento de la zona.
2. Aplicamos anestesia local para que no sientas dolor.
3. Lavamos a fondo y retiramos suciedad o restos.
4. Cerramos con puntos y colocamos el vendaje.
5. Revisamos tu vacuna del tétanos: con heridas sucias puede hacer falta un refuerzo.

## ¿Cómo la cuido en casa?

Mantén el vendaje seco las primeras 24 a 48 horas, luego lava con agua y jabón suave y seca con cuidado. Los puntos se retiran entre 5 y 14 días después, según la zona del cuerpo; te decimos la fecha al terminar ([MedlinePlus](https://medlineplus.gov/ency/article/001237.htm)).

## ¿Cuándo ir directo a urgencias?

Si la sangre sale a chorros o no para con presión, si no puedes mover o sentir un dedo, si la mordedura de un animal es grande o si hay un objeto clavado.`,
    longDescriptionEn: `A cut in the kitchen, at work or while playing: most heal with cleaning and a bandage, but some need stitches to close properly, heal faster and leave less of a mark. At the clinic we assess the wound, close it under local anesthesia and tell you how to care for it.

## How do I know if my cut needs stitches?

- The edges gape apart and won't come together on their own.
- It's deep: you can see yellow fat or tissue under the skin.
- It's longer than a couple of centimeters or sits where the body bends, such as a knuckle or knee.
- It's on the face, where scarring matters more.
- It keeps bleeding after several minutes of pressing it with a clean cloth.

## How long can I wait?

Coming in within the first hours is best. As time passes the risk of infection goes up and, for some wounds, late closure is no longer a good idea; they are left to heal open with dressing changes instead.

## What happens at the visit?

1. We check the wound and the feeling and movement in the area.
2. We numb it with local anesthesia so you don't feel pain.
3. We clean it thoroughly and remove dirt or debris.
4. We close it with stitches and put on a dressing.
5. We check your tetanus shot: dirty wounds may need a booster.

## Aftercare at home

For a day or two, don't let the dressing get wet. After that, clean the area with mild soap and water and dab it dry. Stitches come out 5 to 14 days later, depending on where they are; we give you the date before you leave ([MedlinePlus](https://medlineplus.gov/ency/article/001237.htm)).

## When should I go straight to the ER?

If blood is spurting or won't stop with pressure, if you can't move or feel a finger, if an animal bite is large or if something is stuck in the wound.`,
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
    longDescription: `Curar bien una herida la protege de infecciones y hace que cierre antes y deje menos marca. En Clínica Hispana Nueva Salud limpiamos, curamos y vendamos tus heridas, y te damos seguimiento hasta que cicatricen: sin cita previa, sin seguro médico y en español.

## ¿Qué incluye?

- **Limpieza y desinfección** de la herida con técnica estéril
- **Retiro de tejido dañado** cuando es necesario para que sane
- **Gasas y vendajes** elegidos según cómo sea la herida
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

- Piel roja que se va extendiendo alrededor
- Calor, hinchazón o dolor que aumenta en lugar de disminuir
- Pus o líquido con mal olor
- Fiebre o escalofríos
- Líneas rojas que avanzan desde la herida

Si notas cualquiera de estas señales, ven el mismo día: una infección tratada a tiempo se resuelve con curaciones y medicamento; si avanza, puede complicarse.

## Pacientes con diabetes: cuidado especial

Con diabetes, las heridas en los pies pueden sanar lento y pasar desapercibidas. Revisa tus pies a diario y, ante cualquier ampolla, grieta o llaga, acude a curación. Un seguimiento regular evita complicaciones mayores.

## ¿Cómo es la visita?

1. Vienes cuando puedas, sin cita, y te anotas al llegar.
2. El personal médico evalúa la herida y decide el tipo de curación.
3. Se limpia, se cura y se cubre con el apósito adecuado.
4. Te explicamos cómo cuidarla en casa y cada cuánto regresar para cambiar el vendaje.
5. Te damos seguimiento hasta que cierre por completo.

## Curación de heridas en una clínica hispana cerca de ti

Si buscas curación de heridas en Houston sin cita, en español y a precio accesible, te atendemos cerca de ti en el sureste de Houston (zona Bellfort / Hobby), de lunes a domingo de 9 AM a 9 PM.`,
    longDescriptionEn: `Good wound care prevents infection and helps the wound heal faster with a better scar. At Clínica Hispana Nueva Salud we clean, dress and bandage your wounds and follow up until they heal: no appointment, no insurance required and in Spanish.

## What's included?

- **Cleaning and disinfection** of the wound with sterile technique
- **Removal of damaged tissue** when needed for healing
- **Gauze and bandages** chosen for the kind of wound you have
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

1. Come by whenever you can, no appointment, and sign in when you arrive.
2. The medical staff evaluates the wound and decides the type of care.
3. It's cleaned, treated and covered with the right dressing.
4. We explain how to care for it at home and how often to return for bandage changes.
5. We follow up until it's completely closed.

## Wound care at a Hispanic clinic near you

If you're looking for wound care in Houston with no appointment, in Spanish and at an affordable price, we're near you in southeast Houston (Bellfort / Hobby area), Monday to Sunday from 9 AM to 9 PM.`,
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
    longDescription: `Un lunar molesto, un quiste o un lipoma pequeño casi siempre se retiran en consulta, sin ir al hospital. En Clínica Hispana Nueva Salud realizamos cirugías menores ambulatorias con anestesia local, el mismo día: sin cita previa, sin seguro médico y en español.

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

Si buscas dónde quitar un lunar, quiste o lipoma en Houston sin cita, en español y a precio accesible, te atendemos cerca de ti en el sureste de Houston (zona Bellfort / Hobby), de lunes a domingo de 9 AM a 9 PM.`,
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

If you're looking for where to remove a mole, cyst or lipoma in Houston with no appointment, in Spanish and at an affordable price, we're near you in southeast Houston (Bellfort / Hobby area), Monday to Sunday from 9 AM to 9 PM.`,
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
    longDescription: `Un bulto rojo, caliente y cada vez más doloroso, que a veces se llena de pus: eso suele ser un absceso, una bolsa de infección bajo la piel. Muchos no se curan solos porque el antibiótico no llega bien al interior. Lo que resuelve es abrirlo y vaciarlo, y eso lo hacemos en la clínica con anestesia local.

## ¿Qué lo provoca?

Casi siempre bacterias de la piel que entran por un poro, un vello enterrado o una pequeña herida. Una parte de estas infecciones la causa el estafilococo resistente a antibióticos (MRSA), que se contagia por contacto piel con piel y por objetos compartidos como toallas o rastrillos ([CDC](https://www.cdc.gov/mrsa/about/index.html)).

## ¿Por qué no apretarlo en casa?

Exprimirlo o pincharlo con una aguja empuja la infección más adentro, la extiende a los tejidos de alrededor y aumenta el riesgo de cicatriz. Un grano pequeño puede mejorar con compresas tibias; un absceso grande o que sigue creciendo necesita drenaje.

## ¿Cómo es el procedimiento?

1. Evaluamos el tamaño, la profundidad y si hay fiebre u otros signos de infección extendida.
2. Adormecemos la zona con anestesia local.
3. Hacemos una pequeña apertura, vaciamos el pus y lavamos la cavidad.
4. A veces dejamos una gasa dentro unos días para que siga drenando.
5. Decidimos si hace falta antibiótico: tras un buen drenaje, muchos casos no lo necesitan.

## ¿Cómo lo cuido después?

Cambia la curación como te indicamos, lávate las manos antes y después, y no compartas toallas mientras sane. Vuelve a revisión en la fecha acordada.

## ¿Cuándo es urgente?

Si aparecen líneas rojas que se extienden desde el bulto, fiebre alta o escalofríos, si el absceso está en la cara cerca del ojo o si tienes diabetes o defensas bajas, no esperes.`,
    longDescriptionEn: `A red, hot lump that keeps getting more painful and sometimes fills with pus: that is usually an abscess, a pocket of infection under the skin. Many won't heal on their own because antibiotics don't reach the inside well. What fixes it is opening and emptying it, which we do at the clinic under local anesthesia.

## What causes it?

Almost always skin bacteria that get in through a pore, an ingrown hair or a small wound. Some of these infections are caused by antibiotic-resistant staph (MRSA), which spreads through skin-to-skin contact and shared items such as towels or razors ([CDC](https://www.cdc.gov/mrsa/about/index.html)).

## Why not squeeze it at home?

Squeezing it or poking it with a needle pushes the infection deeper, spreads it into nearby tissue and raises the risk of scarring. A small pimple may improve with warm compresses; a large abscess, or one that keeps growing, needs drainage.

## What is the procedure like?

1. We assess its size and depth and check for fever or other signs of spreading infection.
2. We numb the area with local anesthesia.
3. We make a small opening, drain the pus and rinse the cavity.
4. Sometimes we leave gauze inside for a few days so it keeps draining.
5. We decide whether you need antibiotics: after good drainage, many cases don't.

## How do I care for it afterward?

Change the dressing as instructed, wash your hands before and after, and don't share towels while it heals. Come back for your check on the agreed date.

## When is it urgent?

If red streaks spread from the lump, you get a high fever or chills, the abscess is on the face near the eye, or you have diabetes or a weakened immune system, don't wait.`,
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
    longDescription: `Cuando el borde de la uña se clava en la piel del dedo, sobre todo en el dedo gordo del pie, cada paso duele. Si además se infecta, aparece hinchazón, pus y a veces un bulto de carne roja que sangra con facilidad. En la clínica retiramos la parte que se entierra con anestesia local para que el dolor ceda.

## ¿Por qué se encarna la uña?

- Cortarla en curva o demasiado corta, dejando las esquinas bajo la piel.
- Zapatos apretados o de punta estrecha.
- Golpes en el dedo o pisotones.
- La forma natural de la uña, que en algunas familias es más curva.

## ¿Qué puedo hacer en casa al principio?

Si solo hay molestia leve, sin pus: remoja el pie en agua tibia varias veces al día, sécalo bien y usa calzado abierto o amplio ([AAOS](https://orthoinfo.aaos.org/en/diseases--conditions/ingrown-toenail/)). No intentes cortar la esquina tú mismo, porque suele empeorar.

## ¿Cuándo hace falta el procedimiento?

Cuando hay pus, enrojecimiento que se extiende, dolor que no te deja caminar o si ya lo intentaste en casa y no mejora. Si tienes diabetes o mala circulación en los pies, ven desde el primer síntoma: una infección pequeña puede complicarse rápido.

## ¿Cómo es?

1. Adormecemos el dedo con anestesia local.
2. Retiramos solo la franja de uña que se entierra, no la uña completa.
3. Limpiamos la zona y tratamos la infección si la hay.
4. Colocamos un vendaje y te explicamos las curaciones.

La mayoría de las personas camina con normalidad en pocos días. Si la uña vuelve a encarnarse una y otra vez, hablamos de opciones para evitarlo.

## ¿Cómo evito que regrese?

Corta las uñas en línea recta, sin redondear las esquinas, y déjalas al ras del dedo. Elige calzado donde los dedos no vayan apretados y sécate bien entre ellos después del baño.`,
    longDescriptionEn: `When the edge of a nail digs into the skin of the toe, especially the big toe, every step hurts. If it also gets infected, you get swelling, pus and sometimes a lump of red tissue that bleeds easily. At the clinic we remove the part that's digging in under local anesthesia so the pain eases.

## Why does a nail become ingrown?

- Cutting it rounded or too short, leaving the corners under the skin.
- Tight or narrow-toed shoes.
- Stubbing or crushing the toe.
- The natural shape of the nail, which runs more curved in some families.

## What can I do at home at first?

If there's only mild discomfort and no pus: soak the foot in warm water several times a day, dry it well and wear open or roomy shoes ([AAOS](https://orthoinfo.aaos.org/en/diseases--conditions/ingrown-toenail/)). Don't try to cut out the corner yourself; it usually makes things worse.

## When is the procedure needed?

When there's pus, spreading redness, pain that keeps you from walking, or when home care hasn't helped. If you have diabetes or poor circulation in your feet, come in at the first sign: a small infection can get complicated quickly.

## What is it like?

1. We numb the toe with local anesthesia.
2. We remove only the strip of nail that's digging in, not the whole nail.
3. We clean the area and treat any infection.
4. We put on a dressing and explain the aftercare.

Most people walk normally within a few days. If the nail keeps growing in again and again, we discuss options to prevent it.

## Keeping it from growing in again

Cut nails straight across, without rounding the corners, and leave them level with the tip of the toe. Wear shoes with room for your toes and keep your feet dry.`,
  },
];

// Copia de las 5 reseñas REALES que devuelve Google Places para esta ficha
// (place ChIJSRxrneGXQIYRlwEtNdb7TX4), capturada el 2026-09-25. Solo se usa si
// la API falla y no hay caché previa, para que el sitio nunca muestre reseñas
// inventadas. Refrescar cuando se actualice GOOGLE_REVIEWS_DATA.
export const GOOGLE_REVIEWS_SNAPSHOT: {
  author: string;
  rating: number;
  text: string;
}[] = [
  {
    author: "Adriannes Guevara",
    rating: 5,
    text: "Tuve una muy buena experiencia en Clínica Hispana Nueva Salud. El personal fue amable, atento y profesional desde el momento en que llegué. Me atendieron con paciencia, respondieron mis preguntas y me hicieron sentir en confianza. Las instalaciones estaban limpias y el servicio fue rápido y eficiente. Recomiendo esta clínica a cualquier persona que busque atención médica de calidad en un ambiente agradable.”",
  },
  {
    author: "Daniela Navarro",
    rating: 5,
    text: "Tuve una excelente experiencia en la Clínica Nueva Salud. Desde el momento en que llegué, el personal fue muy amable, atento y profesional. Los médicos se tomaron el tiempo para escuchar mis inquietudes y explicarme todo con claridad. Las instalaciones son limpias, cómodas y transmiten mucha confianza. Se nota el compromiso que tienen con el bienestar de sus pacientes. Sin duda, recomiendo esta clínica a quienes buscan atención médica de calidad y un trato humano excepcional. ¡Muchas gracias por su excelente servicio!",
  },
  {
    author: "Orestes Diaz Mejias",
    rating: 5,
    text: "✨ Estoy súper agradecido con la atención de Clinica Hispana Nueva Salud. Desde que llegas te hacen sentir en confianza y realmente se preocupan por cada paciente. Me encantó que ofrecen muchísimos servicios en un mismo lugar, desde consultas médicas y laboratorios hasta ultrasonidos y chequeos completos, todo con atención en español y precios súper accesibles. 💙\n\nEl personal es muy amable, profesional y siempre dispuesto a ayudarte con paciencia y buena actitud. Se nota el compromiso que tienen con nuestra comunidad hispana y eso hace toda la diferencia. 🙌\n\nDefinitivamente recomiendo esta clínica a cualquier persona que busque buena atención médica, excelentes precios y un lugar donde te traten con respeto, cariño y profesionalismo. 🌟",
  },
  {
    author: "anabel Aurioles",
    rating: 5,
    text: "Fui a consulta y me atendieron muy bien desde el primer momento. Me sorprendió gratamente que, con un solo examen de orina, lograron determinar y explicarme muchas cosas sobre mi salud con gran profesionalismo. Estoy muy feliz con el servicio, la amabilidad del personal y lo limpio del lugar. ¡Los recomiendo 100%!",
  },
  {
    author: "Nancy Joya",
    rating: 5,
    text: "Tuve una experiencia maravillosa en la Clínica Hispana Nueva Salud. Desde que llegué el trato fue excepcional, me explicaron todo con mucha claridad y, lo mejor de todo, ¡la atención fue muy rápida! \"Me sentí muy complacido en esta clínica, me atendieron muy bien, atencion rápida y certera.\" como explican en los servicios de la Clínica Hispana nueva salud . Da gusto encontrar lugares donde verdaderamente se preocupan por la comunidad y todo te lo explican en español. ¡Cinco estrellas!",
  },
];

import { CONTACT_INFO, SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";
import { getAllPosts } from "@/lib/blog";
import { getGooglePlaceData } from "@/lib/google-places";
import { HOME_FAQS } from "@/lib/home-faqs";
import { getLocalizedPromotions } from "@/lib/promotions";
import { getAllServices } from "@/lib/services";
import { SERVICE_FAQS } from "@/lib/service-faqs";
import { getLocalizedService } from "@/lib/utils";

const BASE = SITE_CONFIG.baseUrl;
const url = (path: string, en = false) =>
  `${BASE}${en ? "/en" : ""}${path === "/" ? "" : path}`;

// Nunca incluir el WhatsApp aquí: es un número solo para chat y no forma
// parte del NAP (nombre, dirección, teléfono) que debe ser idéntico en todas
// las plataformas.
async function header(full: boolean): Promise<string> {
  const place = await getGooglePlaceData();
  return [
    `# ${SITE_CONFIG.name}${full ? " — Información completa" : ""}`,
    "",
    `> ${SITE_CONFIG.name} es una clínica médica de atención primaria en el sureste de Houston, Texas. Atiende sin cita previa, de lunes a domingo de 9:00 AM a 9:00 PM, a pacientes con o sin seguro médico, con precios accesibles por servicio. Todo el personal atiende en español y también en inglés.`,
    "",
    "## Datos de contacto",
    "",
    `- Nombre: ${SITE_CONFIG.name}`,
    `- Dirección: ${CONTACT_INFO.address}, ${CONTACT_INFO.city}, ${CONTACT_INFO.state} ${CONTACT_INFO.zip}`,
    `- Teléfono: ${CONTACT_INFO.phoneDisplay}`,
    `- Correo: ${CONTACT_INFO.email}`,
    `- Horario: ${CONTACT_INFO.hours}`,
    "- Idiomas: Español (principal) e inglés",
    "- Pago: sin seguro médico necesario; efectivo y tarjeta",
    `- Calificación en Google: ${place.averageRating.toFixed(1)} de 5 con ${place.totalReviews} reseñas`,
    `- Sitio web: ${BASE}`,
    `- Ficha de Google: ${CONTACT_INFO.googleBusinessUrl}`,
    `- Facebook: ${SOCIAL_LINKS.facebook}`,
    `- Instagram: ${SOCIAL_LINKS.instagram}`,
    `- LinkedIn: ${SOCIAL_LINKS.linkedin}`,
    `- X (Twitter): ${SOCIAL_LINKS.x}`,
    "- Área de servicio: sureste de Houston (Glenbrook Valley, Park Place, Gulfgate, Pecan Park, Golfcrest, Hobby Area, South Houston) y área metropolitana de Houston",
    "",
  ].join("\n");
}

/** /llms.txt: índice compacto con enlaces y una línea por recurso. */
export async function buildLlmsIndex(): Promise<string> {
  const services = getAllServices().map((s) => getLocalizedService(s, "es"));
  const servicesEn = getAllServices().map((s) => getLocalizedService(s, "en"));
  const promos = getLocalizedPromotions("es");
  const posts = getAllPosts("es");
  const postsEn = getAllPosts("en");

  const lines = [
    await header(false),
    "## Servicios",
    "",
    ...services.map(
      (s) => `- [${s.title}](${url(`/services/${s.slug}`)}): ${s.shortDescription}`,
    ),
    "",
    "## Promociones vigentes",
    "",
    ...promos.map(
      (p) =>
        `- [${p.title}${p.price ? ` (${p.price})` : ""}](${url("/promociones")}#${p.slug}): ${p.includes.join(", ")}`,
    ),
    "",
    "## Páginas",
    "",
    `- [Inicio](${url("/")})`,
    `- [Todos los servicios](${url("/services")})`,
    `- [Promociones](${url("/promociones")})`,
    `- [Atención sin cita (walk-in)](${url("/walk-in")})`,
    `- [Blog de salud](${url("/blog")})`,
    "",
    "## Blog",
    "",
    ...posts.map(
      (p) => `- [${p.title}](${url(`/blog/${p.slug}`)}): ${p.description}`,
    ),
    "",
    "## English version",
    "",
    `- [Home](${url("/", true)})`,
    `- [All services](${url("/services", true)})`,
    `- [Promotions](${url("/promociones", true)})`,
    `- [Walk-in care](${url("/walk-in", true)})`,
    ...servicesEn.map((s) => `- [${s.title}](${url(`/services/${s.slug}`, true)})`),
    ...postsEn.map((p) => `- [${p.title}](${url(`/blog/${p.slug}`, true)})`),
    "",
    `- [Versión completa](${url("/llms-full.txt")})`,
    "",
  ];
  return lines.join("\n");
}

/** /llms-full.txt: mismo índice más descripciones y todas las FAQs. */
export async function buildLlmsFull(): Promise<string> {
  const services = getAllServices().map((s) => getLocalizedService(s, "es"));
  const promos = getLocalizedPromotions("es");
  const posts = getAllPosts("es");

  const lines = [
    await header(true),
    "## Preguntas frecuentes generales",
    "",
    ...HOME_FAQS.map((f) => `**${f.question}** ${f.answer}`),
    "",
    "## Servicios",
    "",
  ];

  for (const s of services) {
    lines.push(`### ${s.title}`, "", `URL: ${url(`/services/${s.slug}`)}`, "", s.description, "");
    if (s.features.length) {
      lines.push(...s.features.map((f) => `- ${f}`), "");
    }
    const faqs = SERVICE_FAQS[s.slug] ?? [];
    if (faqs.length) {
      lines.push(...faqs.map((f) => `**${f.question}** ${f.answer}`), "");
    }
  }

  lines.push("## Promociones vigentes", "");
  for (const p of promos) {
    lines.push(
      `### ${p.title}${p.price ? ` — ${p.price}` : ""}`,
      "",
      `URL: ${url("/promociones")}#${p.slug}`,
      "",
      p.blurb,
      "",
      ...p.includes.map((i) => `- ${i}`),
      "",
    );
  }

  lines.push("## Blog", "");
  for (const p of posts) {
    lines.push(
      `- [${p.title}](${url(`/blog/${p.slug}`)}): ${p.description} (publicado ${p.date}${p.updated ? `, actualizado ${p.updated}` : ""})`,
    );
  }
  lines.push("");
  return lines.join("\n");
}

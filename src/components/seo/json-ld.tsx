import {
  CONTACT_INFO,
  OPENING_HOURS,
  SITE_CONFIG,
  SOCIAL_LINKS,
} from "@/lib/constants";
import { getAllServices } from "@/lib/services";
import { getGooglePlaceData } from "@/lib/google-places";
import { getLocalizedService } from "@/lib/utils";
import { absoluteUrl } from "@/lib/seo";
import type { Locale, LocalizedFaq } from "@/types";

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // JSON serializado de forma segura
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: CONTACT_INFO.address,
  addressLocality: CONTACT_INFO.city,
  addressRegion: CONTACT_INFO.state,
  postalCode: CONTACT_INFO.zip,
  addressCountry: "US",
};

/**
 * Nodo COMPLETO de la clínica: solo en la home. El resto de páginas emite
 * JsonLdClinicRef con el mismo @id; si lo pusiera el layout, el nodo completo
 * (rating, 29 servicios, reseñas) se repetiría en las 92 URLs.
 * Async: rating y reseñas 5★ en vivo con respaldo de reseñas reales.
 * availableService usa MedicalProcedure (sin price → no rompe validación).
 */
export async function JsonLdMedicalClinic({ locale }: { locale: Locale }) {
  const place = await getGooglePlaceData();
  const services = getAllServices().map((s) => getLocalizedService(s, locale));
  const homeUrl = absoluteUrl("/", locale);

  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": `${SITE_CONFIG.baseUrl}/#clinic`,
    name: SITE_CONFIG.name,
    description:
      locale === "en" ? SITE_CONFIG.descriptionEn : SITE_CONFIG.description,
    url: homeUrl,
    telephone: CONTACT_INFO.phone,
    email: CONTACT_INFO.email,
    image: `${SITE_CONFIG.baseUrl}${SITE_CONFIG.ogImage}`,
    logo: `${SITE_CONFIG.baseUrl}${SITE_CONFIG.logoUrl}`,
    priceRange: "$$",
    currenciesAccepted: "USD",
    // Del volcado de "Acerca de tu negocio" de la ficha (2026-09-25).
    paymentAccepted:
      "Cash, Credit Card, Debit Card, Visa, Mastercard, American Express, Discover",
    address: postalAddress,
    geo: {
      "@type": "GeoCoordinates",
      latitude: CONTACT_INFO.coordinates.lat,
      longitude: CONTACT_INFO.coordinates.lng,
    },
    hasMap: CONTACT_INFO.googleMapsUrl,
    // Enlaces de entidad: conectan la clínica con sus perfiles externos
    // (señal clave para Google y para motores de respuesta con IA).
    sameAs: [
      CONTACT_INFO.googleBusinessUrl,
      SOCIAL_LINKS.facebook,
      SOCIAL_LINKS.instagram,
      SOCIAL_LINKS.linkedin,
      SOCIAL_LINKS.x,
    ],
    // Solo atención primaria: sin ginecólogo titulado no se declara la
    // especialidad (la ginecología básica va como servicio, no como especialidad).
    medicalSpecialty: ["PrimaryCare"],
    // La ficha solo declara Houston como área de servicio.
    areaServed: { "@type": "City", name: "Houston" },
    availableLanguage: ["es", "en"],
    isAcceptingNewPatients: true,
    // Atributos de la ficha de Google (2026-09-25).
    amenityFeature: [
      "Wheelchair accessible entrance",
      "Wheelchair accessible restroom",
      "Wheelchair accessible parking lot",
      "Free parking lot",
      "On-site parking",
      "Restroom",
      "Walk-ins accepted",
      "Latino-owned",
    ].map((name) => ({
      "@type": "LocationFeatureSpecification",
      name,
      value: true,
    })),
    openingHoursSpecification: OPENING_HOURS.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: `https://schema.org/${h.day}`,
      opens: h.opens,
      closes: h.closes,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: place.averageRating,
      reviewCount: place.totalReviews,
      bestRating: 5,
      worstRating: 1,
    },
    availableService: services.map((s) => ({
      "@type": "MedicalProcedure",
      name: s.title,
      url: absoluteUrl(`/services/${s.slug}`, locale),
    })),
  };

  if (place.reviews.length > 0) {
    data.review = place.reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.author },
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating,
        bestRating: 5,
      },
      reviewBody: r.text,
    }));
  }

  return <JsonLd data={data} />;
}

/**
 * Referencia ligera a la clínica, con el mismo @id que el nodo completo de la
 * home. La ponen todas las páginas que no son la home.
 */
export function JsonLdClinicRef({ locale }: { locale: Locale }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "MedicalClinic",
        "@id": `${SITE_CONFIG.baseUrl}/#clinic`,
        name: SITE_CONFIG.name,
        url: absoluteUrl("/", locale),
        telephone: CONTACT_INFO.phone,
        address: postalAddress,
      }}
    />
  );
}

export function JsonLdBreadcrumb({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item.name,
          item: item.url,
        })),
      }}
    />
  );
}

export function JsonLdMedicalProcedure({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        name,
        description,
        url,
        provider: { "@id": `${SITE_CONFIG.baseUrl}/#clinic` },
      }}
    />
  );
}

export function JsonLdFaqPage({ faqs }: { faqs: LocalizedFaq[] }) {
  if (faqs.length === 0) return null;
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      }}
    />
  );
}

export function JsonLdCollectionPage({
  name,
  description,
  url,
  items,
}: {
  name: string;
  description: string;
  url: string;
  items: { name: string; url: string }[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name,
        description,
        url,
        mainEntity: {
          "@type": "ItemList",
          itemListElement: items.map((item, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: item.name,
            url: item.url,
          })),
        },
      }}
    />
  );
}

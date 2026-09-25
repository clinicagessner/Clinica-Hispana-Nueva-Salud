import { SITE_CONFIG } from "@/lib/constants";
import type { Locale } from "@/types";

export function localePrefix(locale: Locale): string {
  return locale === "en" ? "/en" : "";
}

/** URL absoluta para un path interno en un locale (es sin prefijo). */
export function absoluteUrl(path: string, locale: Locale): string {
  const clean = path === "/" ? "" : path;
  return `${SITE_CONFIG.baseUrl}${localePrefix(locale)}${clean}`;
}

/**
 * Bloque alternates para generateMetadata: canonical del locale actual
 * + hreflang es / en / x-default. El español nunca lleva prefijo.
 */
export function buildAlternates(path: string, locale: Locale) {
  const clean = path === "/" ? "" : path;
  return {
    canonical: absoluteUrl(path, locale),
    languages: {
      es: `${SITE_CONFIG.baseUrl}${clean}`,
      en: `${SITE_CONFIG.baseUrl}/en${clean}`,
      "x-default": `${SITE_CONFIG.baseUrl}${clean}`,
    },
  };
}

/**
 * Bloque openGraph + twitter para una página. El `openGraph` de la página
 * REEMPLAZA entero al del layout: sin `images` aquí, los 29 servicios salían
 * sin imagen social.
 */
export function buildSocial({
  title,
  description,
  path,
  locale,
  type = "website",
  image,
  imageAlt,
  publishedTime,
  modifiedTime,
}: {
  title: string;
  description: string;
  path: string;
  locale: Locale;
  type?: "website" | "article";
  image?: string;
  imageAlt?: string;
  publishedTime?: string;
  modifiedTime?: string;
}) {
  const url = absoluteUrl(path, locale);
  const img = image ?? SITE_CONFIG.ogImage;
  return {
    openGraph: {
      title,
      description,
      type,
      url,
      siteName: SITE_CONFIG.name,
      locale: locale === "en" ? "en_US" : "es_US",
      images: [{ url: img, alt: imageAlt ?? title }],
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
      images: [img],
    },
  };
}

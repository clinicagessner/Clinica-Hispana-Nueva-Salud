import type { MetadataRoute } from "next";
import { SERVICES_LAST_REVIEWED, SITE_CONFIG } from "@/lib/constants";
import { getAllServiceSlugs } from "@/lib/services";
import { getPost, getPostSlugs } from "@/lib/blog";

const BASE = SITE_CONFIG.baseUrl;

// Fecha de la última edición **de contenido** de cada página. Se actualiza en
// el mismo commit que cambia la página. Sin `lastmod`, o con la fecha del
// build, Google no tiene señal de qué recorrer cuando el contenido cambia.
// /privacy es noindex: no va en el sitemap para no enviar señales contradictorias.
const PAGE_DATES: Record<string, string> = {
  "/": "2026-09-25", // reseñas reales, FAQ propia, promo de $99
  "/services": "2026-09-25", // §9 y contenido propio de los 29 servicios (B3)
  "/promociones": "2026-09-25", // texto propio de la promo de $99
  "/walk-in": "2026-08-02",
  "/landing/comparacion-clinicas-houston": "2026-09-25", // reseñas reales, plazos de laboratorio
};

// Cada ruta genera dos entradas <url> (es + /en) con hreflang cruzado.
// Google trata las alternates solo como pistas; las URLs /en/ deben ser
// entradas propias para que se descubran y se indexen por sí mismas.
// Sin priority ni changefreq: Google los ignora.
function entries(path: string, lastModified?: string): MetadataRoute.Sitemap {
  const clean = path === "/" ? "" : path;
  const es = `${BASE}${clean}`;
  const en = `${BASE}/en${clean}`;
  const alternates = { languages: { es, en, "x-default": es } };
  return [
    { url: es, alternates, lastModified },
    { url: en, alternates, lastModified },
  ];
}

export default function sitemap(): MetadataRoute.Sitemap {
  // lastmod real del post (updated > date) para que Google priorice recrawls.
  const posts = getPostSlugs().map((slug) => {
    const post = getPost(slug, "es");
    return { slug, lastModified: post?.updated ?? post?.date };
  });
  const lastPost = posts
    .map((p) => p.lastModified)
    .filter((d): d is string => Boolean(d))
    .sort()
    .at(-1);

  const staticPaths: MetadataRoute.Sitemap = [
    ...Object.entries(PAGE_DATES).flatMap(([path, date]) =>
      entries(path, date),
    ),
    ...entries("/blog", lastPost),
  ];

  const services: MetadataRoute.Sitemap = getAllServiceSlugs().flatMap(
    (slug) => entries(`/services/${slug}`, SERVICES_LAST_REVIEWED),
  );

  const postEntries: MetadataRoute.Sitemap = posts.flatMap((p) =>
    entries(`/blog/${p.slug}`, p.lastModified),
  );

  return [...staticPaths, ...services, ...postEntries];
}

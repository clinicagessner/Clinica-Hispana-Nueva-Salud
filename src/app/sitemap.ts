import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { getAllServiceSlugs } from "@/lib/services";
import { getPostSlugs } from "@/lib/blog";

const BASE = SITE_CONFIG.baseUrl;

// Cada ruta genera dos entradas <url> (es + /en) con hreflang cruzado.
// Google trata las alternates solo como pistas; las URLs /en/ deben ser
// entradas propias para que se descubran y se indexen por sí mismas.
function entries(
  path: string,
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"],
  priority: number,
): MetadataRoute.Sitemap {
  const clean = path === "/" ? "" : path;
  const es = `${BASE}${clean}`;
  const en = `${BASE}/en${clean}`;
  const alternates = { languages: { es, en, "x-default": es } };
  return [
    { url: es, changeFrequency, priority, alternates },
    { url: en, changeFrequency, priority, alternates },
  ];
}

export default function sitemap(): MetadataRoute.Sitemap {
  // /privacy es noindex: no va en el sitemap para no enviar señales contradictorias.
  const staticPaths: MetadataRoute.Sitemap = [
    ...entries("/", "weekly", 1),
    ...entries("/services", "weekly", 0.9),
    ...entries("/promociones", "weekly", 0.8),
    ...entries("/blog", "weekly", 0.7),
    ...entries("/walk-in", "monthly", 0.8),
    ...entries("/landing/comparacion-clinicas-houston", "monthly", 0.7),
  ];

  const services: MetadataRoute.Sitemap = getAllServiceSlugs().flatMap(
    (slug) => entries(`/services/${slug}`, "monthly", 0.8),
  );

  const posts: MetadataRoute.Sitemap = getPostSlugs().flatMap((slug) =>
    entries(`/blog/${slug}`, "monthly", 0.6),
  );

  return [...staticPaths, ...services, ...posts];
}

import { ArrowRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Reveal } from "@/components/animations/reveal";
import { ServiceCard } from "@/components/services/service-card";
import { getServiceCardData } from "@/lib/services";
import { ctaButton } from "@/lib/button-styles";
import { cn } from "@/lib/utils";
import type { Locale, ServiceCardData } from "@/types";

// En el home solo se destacan estos 4 (los de Google Ads + laboratorio);
// el catálogo completo vive en /services.
const HOME_SERVICE_SLUGS = [
  "condiciones-cronicas",
  "ginecologia",
  "infecciones-urinarias",
  "examenes-sangre",
];

// Enlaces de texto a servicios con poca visibilidad orgánica: un enlace en el
// cuerpo del home pesa más para el rastreo que el listado del footer.
const HOME_MORE_SLUGS = [
  "tiroides",
  "ultrasonido",
  "vacunas",
  "sueros-vitaminados",
  "salud-hombre",
  "anticonceptivos",
  "examen-fisico-escolar",
  "enfermedades-respiratorias",
  "enfermedades-transmision-sexual",
  "cirugias-menores",
  "curacion-heridas",
  "examen-dot",
];

export function Services() {
  const t = useTranslations("Services");
  const locale = useLocale() as Locale;
  const bySlug = new Map(
    getServiceCardData(locale).map((s) => [s.slug, s]),
  );
  const services = HOME_SERVICE_SLUGS.map((slug) => bySlug.get(slug)).filter(
    (s): s is ServiceCardData => Boolean(s),
  );
  const more = HOME_MORE_SLUGS.map((slug) => bySlug.get(slug)).filter(
    (s): s is ServiceCardData => Boolean(s),
  );

  return (
    <section
      id="servicios"
      className="bg-linear-to-b from-cloud to-sky-bg py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Encabezado editorial asimétrico */}
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-deep">
              {t("eyebrow")}
            </p>
            <h2 className="mt-3 max-w-2xl font-heading text-3xl font-extrabold leading-tight tracking-tight text-slate-dark sm:text-4xl">
              {t("title")}
            </h2>
            <div className="mt-4 h-0.5 w-20 rounded-full bg-linear-to-r from-blue-primary to-teal" />
          </Reveal>
          <Reveal delay={120} className="lg:col-span-4">
            <p className="text-base leading-relaxed text-slate-primary lg:text-right">
              {t("subtitle")}
            </p>
          </Reveal>
        </div>

        {/* Grid de servicios */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 3) * 80}>
              <ServiceCard service={service} className="h-full" />
            </Reveal>
          ))}
        </div>

        {/* Más servicios: enlaces de texto con el nombre completo del servicio */}
        <Reveal delay={160}>
          <nav aria-label={t("moreTitle")} className="mt-10">
            <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-slate-primary">
              {t("moreTitle")}
            </p>
            <ul className="mt-4 flex flex-wrap justify-center gap-2.5">
              {more.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-block rounded-full border border-blue-light bg-white px-4 py-1.5 text-sm font-medium text-slate-dark transition-colors hover:border-teal hover:text-teal-deep"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </Reveal>

        <div className="mt-10 flex justify-center">
          <Link href="/services" className={cn(ctaButton({ size: "lg" }))}>
            {t("cta")}
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

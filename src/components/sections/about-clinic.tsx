import { Clock, Globe, Languages, MapPin, Star, Wallet } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import { Reveal } from "@/components/animations/reveal";
import { CONTACT_INFO } from "@/lib/constants";
import { getGooglePlaceData } from "@/lib/google-places";
import type { Locale } from "@/types";

/**
 * Bloque de definición de la entidad (GEO): un párrafo autocontenido de
 * ~150 palabras con hechos verificables (qué es, dónde, horario, idiomas,
 * servicios, calificación) que un motor de respuesta con IA pueda citar.
 * Server Component async: la calificación llega en vivo de Google Places.
 */
export async function AboutClinic() {
  const [t, locale, place] = await Promise.all([
    getTranslations("AboutClinic"),
    getLocale(),
    getGooglePlaceData(),
  ]);
  const en = (locale as Locale) === "en";
  const rating = place.averageRating.toFixed(1);
  const count = place.totalReviews;

  const facts = [
    {
      icon: MapPin,
      label: t("addressLabel"),
      value: `${CONTACT_INFO.address}, ${CONTACT_INFO.city}, ${CONTACT_INFO.state} ${CONTACT_INFO.zip}`,
    },
    {
      icon: Clock,
      label: t("hoursLabel"),
      value: en ? CONTACT_INFO.hoursEn : CONTACT_INFO.hours,
    },
    { icon: Wallet, label: t("paymentLabel"), value: t("paymentValue") },
    { icon: Languages, label: t("languagesLabel"), value: t("languagesValue") },
    {
      icon: Star,
      label: t("ratingLabel"),
      value: t("ratingValue", { rating, count }),
    },
    { icon: Globe, label: t("areaLabel"), value: t("areaValue") },
  ];

  return (
    <section
      id="sobre-la-clinica"
      className="bg-linear-to-b from-sky-bg to-cloud py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-deep">
              {t("eyebrow")}
            </p>
            <h2 className="mt-3 font-heading text-3xl font-extrabold leading-tight tracking-tight text-slate-dark sm:text-4xl">
              {t("title")}
            </h2>
            <div className="mt-4 h-0.5 w-20 rounded-full bg-linear-to-r from-blue-primary to-teal" />
            <p className="mt-6 text-lg leading-relaxed text-slate-primary">
              {t("definition", { rating, count })}
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-primary">
              {t("services")}
            </p>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-5">
            <div className="grid gap-4 rounded-3xl border border-blue-light bg-white p-6 shadow-xl shadow-blue-deep/10 sm:grid-cols-2 lg:grid-cols-1">
              {facts.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-teal-bg text-teal-deep">
                    <Icon className="h-4.5 w-4.5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-primary/70">
                      {label}
                    </p>
                    <p className="mt-0.5 text-sm font-medium text-slate-dark">
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

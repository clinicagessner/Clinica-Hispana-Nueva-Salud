import Image from "next/image";
import { Check, Clock, Navigation, Phone, ShieldCheck } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { CONTACT_INFO } from "@/lib/constants";
import { getGooglePlaceData } from "@/lib/google-places";
import { StarRating } from "@/components/shared/star-rating";

export async function Hero() {
  const t = await getTranslations("Hero");
  const tc = await getTranslations("Common");
  const place = await getGooglePlaceData();

  return (
    <section className="relative isolate flex min-h-[660px] items-end overflow-hidden sm:min-h-[90vh]">
      {/* Fachada real del local — protagonista, a pantalla completa */}
      <Image
        src="/images/hero-fachada-v2.webp"
        alt="Fachada de Clínica Hispana Nueva Salud en 7640 Bellfort Ave, Houston, TX"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover object-[center_72%]"
      />
      {/* Oscurecido principal abajo: arriba la foto clara, abajo texto legible.
          Base sólida en el pie para máximo contraste de título y botones. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-linear-to-t from-blue-deep from-0% via-blue-deep/72 via-38% to-transparent to-72%"
      />
      {/* Velo sutil arriba para que la píldora de rating contraste sobre el cielo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-44 bg-linear-to-b from-blue-deep/55 to-transparent"
      />
      {/* Vignette muy ligero para enfocar el contenido (radial vía style: fiable en TW v4) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 60%, transparent 55%, rgba(10,39,64,0.35) 100%)",
        }}
      />

      {/* Píldora flotante de rating (cristal) sobre la zona clara de la foto */}
      <div className="absolute right-5 top-6 flex items-center gap-2.5 rounded-3xl border border-white/25 bg-blue-deep/50 px-4 py-2.5 shadow-lg shadow-blue-deep/20 backdrop-blur-md lg:right-10">
        <StarRating rating={place.averageRating} starClassName="h-4 w-4" />
        <span className="text-sm font-semibold text-white">
          {place.averageRating.toFixed(1)}
          <span className="ml-1 hidden font-normal text-sky-bg/80 sm:inline">
            ({tc("ratingSummary", { count: place.totalReviews })})
          </span>
        </span>
      </div>

      {/* Contenido anclado abajo */}
      <div className="relative mx-auto w-full max-w-6xl px-5 pb-14 pt-40 sm:px-6 sm:pb-20">
        <div className="max-w-2xl text-center sm:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-success" />
            {t("openToday")} · {CONTACT_INFO.city}, TX
          </span>

          <h1 className="mt-5 font-heading text-[2.7rem] font-extrabold leading-[1.04] tracking-tight text-white [text-shadow:0_2px_18px_rgba(7,22,40,0.6)] sm:text-7xl">
            <span className="block">{t("titleLead")}</span>
            <span className="relative mt-1 inline-block">
              <span className="bg-linear-to-r from-teal-light via-white to-teal-light bg-clip-text text-transparent">
                {t("titleHighlight")}
              </span>
              <svg
                aria-hidden
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
                className="absolute -bottom-2 left-0 h-3 w-full text-red-accent"
              >
                <path
                  d="M2 8c40-6 156-6 196 0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span className="mt-4 block text-lg font-semibold text-white sm:text-3xl">
              {t("titleTail")}
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base font-medium leading-relaxed text-white/95 [text-shadow:0_1px_10px_rgba(7,22,40,0.7)] sm:text-lg">
            {t("subtitle")}
          </p>

          {/* CTAs píldora */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              aria-label={`${t("ctaCall")} ${CONTACT_INFO.phoneFormatted}`}
              className="group inline-flex h-14 items-center justify-center gap-2.5 rounded-full bg-red-accent px-7 font-heading text-base font-semibold text-white shadow-lg shadow-red-accent/40 transition-all duration-200 hover:bg-red-dark hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <Phone className="h-5 w-5 shrink-0 transition-transform group-hover:scale-110" />
              <span className="whitespace-nowrap">
                {t("callShort")} · {CONTACT_INFO.phoneDisplay}
              </span>
            </a>
            <a
              href={CONTACT_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-white/50 bg-white/15 px-7 font-heading text-base font-semibold text-white backdrop-blur transition-all duration-200 hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <Navigation className="h-5 w-5 shrink-0" />
              {t("ctaDirections")}
            </a>
          </div>

          {/* Trust en línea */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm font-medium text-white [text-shadow:0_1px_8px_rgba(7,22,40,0.7)] sm:justify-start">
            <span className="inline-flex items-center gap-1.5">
              <Check className="h-4 w-4 text-teal-light" />
              {t("trustWalkIn")}
            </span>
            <span className="h-1 w-1 rounded-full bg-white/50" />
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-teal-light" />
              {t("trustInsurance")}
            </span>
            <span className="h-1 w-1 rounded-full bg-white/50" />
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-teal-light" />
              {t("hoursLine")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

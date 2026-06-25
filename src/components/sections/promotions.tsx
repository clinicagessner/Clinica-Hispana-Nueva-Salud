import { ArrowRight } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import { Reveal } from "@/components/animations/reveal";
import { PromotionsCarousel } from "@/components/promotions/promotions-carousel";
import { Link } from "@/i18n/navigation";
import { CONTACT_INFO } from "@/lib/constants";
import { getLocalizedPromotions } from "@/lib/promotions";
import { ctaButton } from "@/lib/button-styles";
import { cn } from "@/lib/utils";
import type { Locale } from "@/types";

export async function Promotions() {
  const t = await getTranslations("Promotions");
  const td = await getTranslations("PromotionDialog");
  const locale = (await getLocale()) as Locale;
  const items = getLocalizedPromotions(locale);

  if (items.length === 0) return null;

  return (
    <section
      id="promociones"
      className="scroll-mt-24 bg-linear-to-b from-sky-bg to-cloud pb-20 lg:pb-28"
    >
      {/* Transición desde el hero oscuro: funde el pie navy del hero hacia el
          fondo claro de esta sección, sin texto encima. */}
      <div
        aria-hidden
        className="h-24 w-full bg-linear-to-b from-blue-deep to-sky-bg sm:h-32"
      />
      <div className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8 lg:pt-16">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-accent">
            {t("eyebrow")}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-extrabold leading-tight tracking-tight text-slate-dark sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-primary">
            {t("subtitle")}
          </p>
        </Reveal>

        <Reveal delay={140} className="mt-12">
          <PromotionsCarousel
            items={items}
            labels={{
              viewDetail: t("viewDetail"),
              prev: t("prev"),
              next: t("next"),
              swipeHint: t("swipeHint"),
              openAria: t("openAria", { title: "{title}" }),
            }}
            dialogLabels={{
              priceLabel: td("priceLabel"),
              includesLabel: td("includesLabel"),
              ctaCall: td("ctaCall"),
              ctaDirections: td("ctaDirections"),
              ctaForm: td("ctaForm"),
              close: td("close"),
            }}
            contact={{
              phone: CONTACT_INFO.phone,
              phoneDisplay: CONTACT_INFO.phoneDisplay,
              googleMapsUrl: CONTACT_INFO.googleMapsUrl,
            }}
            formHref="#contacto"
          />
        </Reveal>

        <div className="mt-12 flex justify-center">
          <Link
            href="/promociones"
            className={cn(ctaButton({ variant: "primary", size: "lg" }))}
          >
            {t("viewAll")}
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

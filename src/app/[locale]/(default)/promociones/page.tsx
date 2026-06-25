import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowLeft } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Reveal } from "@/components/animations/reveal";
import { StarRating } from "@/components/shared/star-rating";
import { FaqAccordion } from "@/components/shared/faq-accordion";
import { JsonLdBreadcrumb, JsonLdFaqPage } from "@/components/seo/json-ld";
import { PromotionsGrid } from "@/components/promotions/promotions-grid";
import { ContactForm } from "@/components/forms/contact-form";
import { CONTACT_INFO } from "@/lib/constants";
import { getLocalizedPromotions } from "@/lib/promotions";
import { getAllServices } from "@/lib/services";
import { getGooglePlaceData } from "@/lib/google-places";
import { absoluteUrl, buildAlternates } from "@/lib/seo";
import { getLocalizedService } from "@/lib/utils";
import { ctaButton } from "@/lib/button-styles";
import { cn } from "@/lib/utils";
import { routing } from "@/i18n/routing";
import type { Locale } from "@/types";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "PromotionsPage" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: buildAlternates("/promociones", locale as Locale),
  };
}

export default async function PromotionsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);
  const loc = locale as Locale;

  const t = await getTranslations("PromotionsPage");
  const td = await getTranslations("PromotionDialog");
  const tc = await getTranslations("Common");

  const items = getLocalizedPromotions(loc);
  const place = await getGooglePlaceData();
  const services = getAllServices().map((s) => {
    const l = getLocalizedService(s, loc);
    return { value: l.slug, label: l.title };
  });

  const faqs = [
    { question: t("faqQ1"), answer: t("faqA1") },
    { question: t("faqQ2"), answer: t("faqA2") },
    { question: t("faqQ3"), answer: t("faqA3") },
  ];

  const dialogLabels = {
    priceLabel: td("priceLabel"),
    includesLabel: td("includesLabel"),
    ctaCall: td("ctaCall"),
    ctaDirections: td("ctaDirections"),
    ctaForm: td("ctaForm"),
    close: td("close"),
  };

  return (
    <>
      <JsonLdBreadcrumb
        items={[
          { name: loc === "en" ? "Home" : "Inicio", url: absoluteUrl("/", loc) },
          { name: t("eyebrow"), url: absoluteUrl("/promociones", loc) },
        ]}
      />
      <JsonLdFaqPage faqs={faqs} />

      {/* Encabezado compacto */}
      <section className="bg-linear-to-b from-cloud to-sky-bg pb-12 pt-10 lg:pb-16 lg:pt-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-dark transition-colors hover:text-blue-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            {t("backToHome")}
          </Link>

          <Reveal className="mt-8 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-accent">
              {t("eyebrow")}
            </p>
            <h1 className="mt-3 font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-dark sm:text-5xl">
              {t("title")}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-primary">
              {t("subtitle")}
            </p>
            <div className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-blue-light bg-white px-4 py-2.5 shadow-sm">
              <StarRating rating={place.averageRating} starClassName="h-4 w-4" />
              <span className="font-heading text-sm font-bold text-blue-dark">
                {tc("ratingSummary", { count: place.totalReviews })}
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Grid de promociones */}
      <section className="bg-sky-bg pb-20 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PromotionsGrid
            items={items}
            viewDetailLabel={t("viewDetail")}
            dialogLabels={dialogLabels}
            contact={{
              phone: CONTACT_INFO.phone,
              phoneDisplay: CONTACT_INFO.phoneDisplay,
              googleMapsUrl: CONTACT_INFO.googleMapsUrl,
            }}
            formHref="#lead-form"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-linear-to-b from-sky-bg to-cloud py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-heading text-3xl font-extrabold tracking-tight text-slate-dark">
            {t("faqTitle")}
          </h2>
          <div className="mt-8 rounded-3xl border border-blue-light bg-white px-6 py-2 shadow-sm">
            <FaqAccordion items={faqs} />
          </div>
        </div>
      </section>

      {/* Formulario (lead form) */}
      <section
        id="lead-form"
        className="scroll-mt-24 bg-linear-to-b from-cloud to-blue-deep py-16 lg:py-24"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-slate-dark sm:text-4xl">
              {t("formTitle")}
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-slate-primary">
              {t("formSubtitle")}
            </p>
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className={cn(ctaButton({ variant: "red", size: "md" }), "mt-6")}
            >
              {td("ctaCall")} · {CONTACT_INFO.phoneDisplay}
            </a>
          </Reveal>
          <div className="mt-10">
            <ContactForm services={services} />
          </div>
        </div>
      </section>
    </>
  );
}

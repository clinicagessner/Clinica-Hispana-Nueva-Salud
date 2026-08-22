import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Gynecology } from "@/components/sections/gynecology";
import { MensHealth } from "@/components/sections/mens-health";
import { Promotions } from "@/components/sections/promotions";
import { Testimonials } from "@/components/sections/testimonials";
import { BlogPreview } from "@/components/sections/blog-preview";
import { Faq } from "@/components/sections/faq";
import { Location } from "@/components/sections/location";
import { Contact } from "@/components/sections/contact";
import { buildAlternates } from "@/lib/seo";
import type { Locale } from "@/types";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";
  return {
    // Título <= 60 chars con marca + "clínica hispana" + Houston + ganchos;
    // la description lleva dirección/ZIP y horario para el snippet local.
    title: isEn
      ? "Clínica Hispana Nueva Salud Houston | Walk-In, No Insurance"
      : "Clínica Hispana Nueva Salud Houston | Sin Cita, Sin Seguro",
    description: isEn
      ? "Hispanic clinic in Houston, TX (7640 Bellfort Ave, 77061): care 100% in Spanish, walk-ins welcome, no insurance needed, affordable prices. Open daily 9 AM-9 PM."
      : "Clínica hispana en Houston, TX (7640 Bellfort Ave, 77061): atención 100% en español, sin cita y sin seguro, con precios accesibles. Lunes a domingo, 9 AM-9 PM.",
    alternates: buildAlternates("/", locale as Locale),
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return (
    <>
      <Hero />
      <Promotions />
      <Services />
      <Gynecology />
      <MensHealth />
      <Testimonials />
      <BlogPreview />
      <Faq />
      <Location />
      <Contact />
    </>
  );
}

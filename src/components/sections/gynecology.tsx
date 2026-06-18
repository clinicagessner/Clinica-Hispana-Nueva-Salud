import Image from "next/image";
import { ArrowRight, Check, Flower2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Reveal } from "@/components/animations/reveal";
import { ctaButton } from "@/lib/button-styles";
import { cn } from "@/lib/utils";

export function Gynecology() {
  const t = useTranslations("Gynecology");
  const points = [t("point1"), t("point2"), t("point3")];

  return (
    <section className="bg-linear-to-b from-sky-bg to-cloud py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          {/* Card claro: texto oscuro de alto contraste + foto real visible */}
          <div className="relative overflow-hidden rounded-4xl border border-blue-light bg-white px-6 py-12 shadow-xl shadow-blue-deep/10 sm:px-10 lg:px-14 lg:py-16">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-teal/10 blur-3xl"
            />

            <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
              {/* Texto */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-deep">
                  {t("eyebrow")}
                </p>
                <h2 className="mt-3 font-heading text-3xl font-extrabold leading-tight tracking-tight text-slate-dark sm:text-4xl">
                  {t("title")}
                </h2>
                <p className="mt-5 max-w-lg text-lg leading-relaxed text-slate-primary">
                  {t("body")}
                </p>

                <ul className="mt-7 space-y-3.5">
                  {points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-bg text-teal-deep">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-base text-slate-primary">{point}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/services/ginecologia"
                  className={cn(ctaButton({ size: "lg" }), "mt-8")}
                >
                  {t("cta")}
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>

              {/* Foto real de atención ginecológica, en marco */}
              <div className="relative mx-auto w-full max-w-md lg:max-w-none">
                <div className="overflow-hidden rounded-3xl border-4 border-white shadow-xl shadow-blue-deep/15 ring-1 ring-blue-light">
                  <Image
                    src="/images/services/ginecologia.webp"
                    alt="Atención ginecológica en español en Clínica Hispana Nueva Salud, Houston"
                    width={800}
                    height={1000}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="aspect-[4/5] w-full object-cover"
                  />
                </div>
                {/* Badge flotante de marca */}
                <span className="absolute -bottom-5 left-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-accent text-white shadow-lg shadow-red-accent/30">
                  <Flower2 className="h-8 w-8" />
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

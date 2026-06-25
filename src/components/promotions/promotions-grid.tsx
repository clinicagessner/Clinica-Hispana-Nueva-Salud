"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import {
  PromotionDialog,
  type PromotionDialogContact,
  type PromotionDialogLabels,
} from "@/components/promotions/promotion-dialog";
import type { LocalizedPromotion } from "@/types";

export function PromotionsGrid({
  items,
  viewDetailLabel,
  dialogLabels,
  contact,
  formHref,
}: {
  items: LocalizedPromotion[];
  viewDetailLabel: string;
  dialogLabels: PromotionDialogLabels;
  contact: PromotionDialogContact;
  formHref: string;
}) {
  const [active, setActive] = useState<LocalizedPromotion | null>(null);

  // Deep-link: /promociones#<slug> abre ese dialog. Limpiamos el hash de
  // inmediato (replaceState SÍNCRONO antes de abrir) para que cerrar no reabra
  // ni "redirija".
  useEffect(() => {
    const hash = decodeURIComponent(window.location.hash.slice(1));
    if (!hash) return;
    const found = items.find((p) => p.slug === hash);
    if (!found) return;
    window.history.replaceState(
      null,
      "",
      window.location.pathname + window.location.search,
    );
    // Inicialización única desde la URL (deep-link); no es un loop de estado.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setActive(found);
  }, [items]);

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((promo) => (
          <article
            key={promo.slug}
            id={promo.slug}
            className="flex h-full scroll-mt-28 flex-col overflow-hidden rounded-3xl border border-blue-light bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-primary/30 hover:shadow-xl hover:shadow-blue-primary/10"
          >
            <button
              type="button"
              onClick={() => setActive(promo)}
              className="group relative block aspect-4/5 w-full overflow-hidden bg-sky-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-primary"
            >
              <Image
                src={promo.image}
                alt={promo.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </button>

            <div className="flex flex-1 flex-col p-5">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-heading text-base font-bold leading-snug text-slate-dark">
                  {promo.title}
                </h3>
                {promo.price && (
                  <span className="shrink-0 font-heading text-lg font-extrabold text-red-accent">
                    {promo.price}
                  </span>
                )}
              </div>
              {/* Blurb completo en el DOM (line-clamp solo visual = indexable) */}
              <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-muted">
                {promo.blurb}
              </p>
              <button
                type="button"
                onClick={() => setActive(promo)}
                className="mt-4 inline-flex items-center gap-1.5 self-start font-heading text-sm font-semibold text-blue-dark transition-colors hover:text-blue-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-primary focus-visible:ring-offset-2"
              >
                {viewDetailLabel}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </article>
        ))}
      </div>

      <PromotionDialog
        promo={active}
        labels={dialogLabels}
        contact={contact}
        formHref={formHref}
        onClose={() => setActive(null)}
      />
    </>
  );
}

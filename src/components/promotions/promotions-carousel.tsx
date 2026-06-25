"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Eye } from "lucide-react";
import {
  PromotionDialog,
  type PromotionDialogContact,
  type PromotionDialogLabels,
} from "@/components/promotions/promotion-dialog";
import type { LocalizedPromotion } from "@/types";

export interface PromotionsCarouselLabels {
  viewDetail: string;
  prev: string;
  next: string;
  swipeHint: string;
  /** Template con {title} para el aria-label de cada flyer. */
  openAria: string;
}

export function PromotionsCarousel({
  items,
  labels,
  dialogLabels,
  contact,
  formHref,
}: {
  items: LocalizedPromotion[];
  labels: PromotionsCarouselLabels;
  dialogLabels: PromotionDialogLabels;
  contact: PromotionDialogContact;
  formHref: string;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);
  const [active, setActive] = useState<LocalizedPromotion | null>(null);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y py-2">
          {items.map((promo) => (
            <div
              key={promo.slug}
              className="min-w-0 shrink-0 grow-0 basis-[82%] px-2.5 sm:basis-1/2 lg:basis-1/3"
            >
              <button
                type="button"
                onClick={() => setActive(promo)}
                aria-label={labels.openAria.replace("{title}", promo.title)}
                className="group relative block aspect-4/5 w-full overflow-hidden rounded-3xl border border-blue-light bg-sky-bg shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-primary/30 hover:shadow-xl hover:shadow-blue-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-primary focus-visible:ring-offset-2"
              >
                <Image
                  src={promo.image}
                  alt={promo.alt}
                  fill
                  sizes="(max-width: 640px) 82vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
                {/* Overlay "Ver promoción" al hover/focus */}
                <span className="absolute inset-0 flex items-end justify-center bg-linear-to-t from-blue-deep/80 via-blue-deep/10 to-transparent p-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 font-heading text-sm font-semibold text-blue-dark shadow-md">
                    <Eye className="h-4 w-4" />
                    {labels.viewDetail}
                  </span>
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Flechas (desktop) */}
      <button
        type="button"
        onClick={scrollPrev}
        aria-label={labels.prev}
        className="absolute -left-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-blue-light bg-white text-blue-dark shadow-md transition-colors hover:bg-sky-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-primary lg:flex"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={scrollNext}
        aria-label={labels.next}
        className="absolute -right-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-blue-light bg-white text-blue-dark shadow-md transition-colors hover:bg-sky-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-primary lg:flex"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Controles prev/next (móvil/tablet, donde no hay flechas laterales) */}
      <div className="mt-6 flex flex-col items-center gap-3 lg:hidden">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={scrollPrev}
            aria-label={labels.prev}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-blue-light bg-white text-blue-dark shadow-sm transition-colors hover:bg-sky-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-primary"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            aria-label={labels.next}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-blue-light bg-white text-blue-dark shadow-sm transition-colors hover:bg-sky-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-primary"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
        <p className="text-xs font-medium text-slate-muted">{labels.swipeHint}</p>
      </div>

      <PromotionDialog
        promo={active}
        labels={dialogLabels}
        contact={contact}
        formHref={formHref}
        onClose={() => setActive(null)}
      />
    </div>
  );
}

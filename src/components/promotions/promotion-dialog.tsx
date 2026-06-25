"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Check, Navigation, Phone, Send, X } from "lucide-react";
import { ctaButton } from "@/lib/button-styles";
import { cn } from "@/lib/utils";
import type { LocalizedPromotion } from "@/types";

export interface PromotionDialogLabels {
  priceLabel: string;
  includesLabel: string;
  ctaCall: string;
  ctaDirections: string;
  ctaForm: string;
  close: string;
}

export interface PromotionDialogContact {
  phone: string;
  phoneDisplay: string;
  googleMapsUrl: string;
}

export function PromotionDialog({
  promo,
  labels,
  contact,
  formHref,
  onClose,
}: {
  promo: LocalizedPromotion | null;
  labels: PromotionDialogLabels;
  contact: PromotionDialogContact;
  /** Ancla al formulario en la página actual (p.ej. "#contacto" o "#lead-form"). */
  formHref: string;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const open = promo !== null;

  // Escape cierra; enfocar el botón cerrar al abrir; bloquear scroll del body.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!promo) return null;

  const titleId = `promo-dialog-title-${promo.slug}`;

  return (
    <div
      className="fixed inset-0 z-60 flex items-start justify-center overflow-y-auto bg-blue-deep/70 p-4 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(e) => e.stopPropagation()}
        className="relative flex max-h-[90vh] w-full max-w-md flex-col overflow-y-auto rounded-3xl bg-white shadow-2xl shadow-blue-deep/40"
      >
        {/* Cerrar */}
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label={labels.close}
          className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-dark shadow-md backdrop-blur transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-primary"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Flyer completo (4:5, sin recorte: la imagen ya es 4:5) */}
        <div className="relative aspect-4/5 w-full shrink-0 bg-sky-bg">
          <Image
            src={promo.image}
            alt={promo.alt}
            fill
            sizes="(max-width: 480px) 100vw, 448px"
            className="object-cover"
          />
        </div>

        {/* Detalle */}
        <div className="flex flex-col gap-4 p-6">
          <div>
            <h3
              id={titleId}
              className="font-heading text-2xl font-extrabold leading-tight tracking-tight text-slate-dark"
            >
              {promo.title}
            </h3>
            {promo.price && (
              <p className="mt-2 flex items-baseline gap-2">
                <span className="text-xs font-medium uppercase tracking-wide text-slate-muted">
                  {labels.priceLabel}
                </span>
                <span className="font-heading text-3xl font-extrabold text-red-accent">
                  {promo.price}
                </span>
              </p>
            )}
          </div>

          <p className="text-sm leading-relaxed text-slate-primary">
            {promo.blurb}
          </p>

          {promo.includes.length > 0 && (
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-muted">
                {labels.includesLabel}
              </p>
              <ul className="mt-2 space-y-2">
                {promo.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-slate-primary"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-bg text-teal-deep">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* 3 CTAs contextuales */}
          <div className="mt-1 flex flex-col gap-2.5">
            <a
              href={`tel:${contact.phone}`}
              aria-label={`${labels.ctaCall} ${contact.phoneDisplay}`}
              className={cn(ctaButton({ variant: "red", size: "md" }), "w-full")}
            >
              <Phone className="h-5 w-5" />
              {labels.ctaCall}
            </a>
            <div className="grid grid-cols-2 gap-2.5">
              <a
                href={contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(ctaButton({ variant: "outline", size: "md" }))}
              >
                <Navigation className="h-4 w-4" />
                {labels.ctaDirections}
              </a>
              <a
                href={formHref}
                onClick={onClose}
                className={cn(ctaButton({ variant: "primary", size: "md" }))}
              >
                <Send className="h-4 w-4" />
                {labels.ctaForm}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

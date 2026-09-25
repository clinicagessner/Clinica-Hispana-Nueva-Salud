import { ShieldCheck } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { formatDate } from "@/lib/utils";
import type { Locale } from "@/types";

/**
 * Caja de revisión médica (B2). Firma como "equipo médico de la clínica":
 * sin nombre y credenciales del cliente no se nombra a ningún médico.
 *
 * Las fechas van en `<time datetime>` para que sean legibles por máquina y
 * coincidan con `datePublished` / `lastReviewed` del JSON-LD.
 */
export function MedicalReview({
  locale,
  published,
  reviewed,
}: {
  locale: Locale;
  /** ISO (YYYY-MM-DD). Opcional: los servicios no tienen fecha de publicación. */
  published?: string;
  /** ISO (YYYY-MM-DD) de la última revisión de contenido. */
  reviewed: string;
}) {
  const en = locale === "en";

  return (
    <aside className="mt-10 flex gap-3 rounded-2xl border border-blue-light bg-sky-bg/40 p-4 text-sm text-slate-primary">
      <ShieldCheck
        className="mt-0.5 h-5 w-5 shrink-0 text-blue-dark"
        aria-hidden
      />
      <p className="leading-relaxed">
        {en
          ? "Content reviewed by the medical team at "
          : "Contenido revisado por el equipo médico de "}
        <strong className="font-semibold text-slate-dark">
          {SITE_CONFIG.name}
        </strong>
        .{" "}
        {published ? (
          <>
            {en ? "Published " : "Publicado el "}
            <time dateTime={published}>{formatDate(published, locale)}</time>
            .{" "}
          </>
        ) : null}
        {en ? "Last reviewed " : "Última revisión: "}
        <time dateTime={reviewed}>{formatDate(reviewed, locale)}</time>.{" "}
        {en
          ? "This page is general information and does not replace a medical visit."
          : "Esta página es información general y no sustituye una consulta médica."}
      </p>
    </aside>
  );
}

import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Estrellas con relleno PROPORCIONAL al rating (p. ej. 4.7 → 4 llenas + 70%
 * de la quinta). Se logra con una capa de estrellas llenas recortada por
 * `width: (rating/5)*100%` sobre una base de estrellas vacías.
 */
export function StarRating({
  rating,
  className,
  starClassName = "h-4 w-4",
}: {
  rating: number;
  className?: string;
  starClassName?: string;
}) {
  const pct = Math.max(0, Math.min(100, (rating / 5) * 100));

  return (
    <span
      className={cn("relative inline-flex shrink-0", className)}
      role="img"
      aria-label={`${rating.toFixed(1)} de 5 estrellas`}
    >
      {/* Base: estrellas vacías (tenues) */}
      <span className="flex gap-0.5" aria-hidden>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className={cn("fill-current text-warning/25", starClassName)} />
        ))}
      </span>
      {/* Relleno proporcional recortado por ancho % */}
      <span
        className="absolute inset-y-0 left-0 overflow-hidden"
        style={{ width: `${pct}%` }}
        aria-hidden
      >
        <span className="flex w-max gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={cn("fill-current text-warning", starClassName)} />
          ))}
        </span>
      </span>
    </span>
  );
}

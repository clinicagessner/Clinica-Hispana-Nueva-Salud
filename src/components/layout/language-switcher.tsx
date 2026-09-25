"use client";

import { useLocale } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

/**
 * Enlaces reales, escritos a mano. Antes eran <button> con router.replace:
 * sin `href` en el HTML, Google no tenía por dónde descubrir /en. El `Link`
 * de next-intl con `locale` tampoco sirve aquí: genera `/es/...`, que redirige.
 */
function localeHref(locale: string, pathname: string): string {
  const path = pathname === "/" ? "" : pathname;
  return locale === routing.defaultLocale ? path || "/" : `/${locale}${path}`;
}

export function LanguageSwitcher({ className }: { className?: string }) {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-blue-light bg-white p-0.5 text-xs font-semibold",
        className,
      )}
      role="group"
      aria-label="Language"
    >
      {routing.locales.map((l) => (
        <a
          key={l}
          href={localeHref(l, pathname)}
          hrefLang={l}
          aria-current={l === locale ? "true" : undefined}
          className={cn(
            "rounded-full px-2.5 py-1 uppercase tracking-wide transition-colors",
            l === locale
              ? "bg-blue-dark text-white"
              : "text-slate-muted hover:text-blue-dark",
          )}
        >
          {l}
        </a>
      ))}
    </div>
  );
}

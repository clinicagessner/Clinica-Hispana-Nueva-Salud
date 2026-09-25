"use client";

import Script from "next/script";

/**
 * GA4 + Google Ads en un solo `gtag/js`, con `lazyOnload`.
 *
 * Antes: `@next/third-parties` inyectaba su propio preload de gtm y el tag de
 * Ads cargaba otro `gtag/js` con `afterInteractive`. Salían tres `gtag/js` en
 * el HTML y el preload competía con el LCP.
 *
 * No se pierde medición: GA4 y Ads encolan en `dataLayer` y envían al
 * inicializarse. No-op si faltan las dos variables de entorno.
 */
export function GoogleTags() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
  const srcId = gaId || adsId;
  if (!srcId) return null;

  const config = [
    gaId && `gtag('config', '${gaId}');`,
    adsId && `gtag('config', '${adsId}');`,
  ]
    .filter(Boolean)
    .join("\n");

  return (
    <>
      <Script
        id="gtag-src"
        src={`https://www.googletagmanager.com/gtag/js?id=${srcId}`}
        strategy="lazyOnload"
      />
      <Script id="gtag-init" strategy="lazyOnload">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
${config}`}
      </Script>
    </>
  );
}

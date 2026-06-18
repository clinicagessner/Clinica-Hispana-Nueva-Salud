import Script from "next/script";

/**
 * CallRail Dynamic Number Insertion (swap.js).
 * Reemplaza en el navegador el número MOSTRADO por uno del pool de tracking
 * según la fuente del visitante. El número real (NAP) permanece en el HTML /
 * JSON-LD, así que Googlebot y los datos estructurados siempre ven el real →
 * NO rompe la consistencia NAP.
 *
 * No-op si falta NEXT_PUBLIC_CALLRAIL_SWAP_URL (p. ej.
 * "https://cdn.callrail.com/companies/XXXXXX/YYYYYY/12/swap.js").
 */
export function CallRail() {
  const swapUrl = process.env.NEXT_PUBLIC_CALLRAIL_SWAP_URL;
  if (!swapUrl) return null;

  return (
    <Script id="callrail-swap" strategy="afterInteractive" src={swapUrl} />
  );
}

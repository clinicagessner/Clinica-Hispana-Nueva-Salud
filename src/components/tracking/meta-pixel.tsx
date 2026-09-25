/**
 * Script base del Meta Pixel inyectado como <script> CRUDO (no next/script)
 * para garantizar que corre antes de la hidratación. Dispara un PageView
 * inicial. `fbq` se define al instante y encola los eventos; fbevents.js
 * (108 KB) se descarga tras el evento `load` para no competir con el LCP
 * (Lighthouse móvil, 2026-09-25): los eventos encolados se envían al cargar. Los PageView de navegación SPA los maneja MetaPixelSPATracker.
 * No-op si falta NEXT_PUBLIC_META_PIXEL_ID.
 */
export function MetaPixel() {
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  if (!pixelId) return null;

  const code = `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];var go=function(){t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)};
if(b.readyState==='complete'){setTimeout(go,0)}else{f.addEventListener('load',function(){setTimeout(go,0)})}
}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${pixelId}');
fbq('track', 'PageView');`;

  return (
    <>
      <script
        id="meta-pixel"
        // Script crudo intencional: debe ejecutarse antes de la hidratación.
        dangerouslySetInnerHTML={{ __html: code }}
      />
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          alt=""
          src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
}

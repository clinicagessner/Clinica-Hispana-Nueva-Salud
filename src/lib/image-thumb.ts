/**
 * Devuelve la variante reducida (`<dir>/sm/<nombre>.webp`) de una imagen de
 * `public/`.
 *
 * Existe porque `images.unoptimized` está activado (cuota 402 del optimizador
 * de Vercel): Next sirve el archivo tal cual y `sizes` no genera nada. Las
 * variantes las produce `scripts/build-image-variants.mjs` en el prebuild.
 *
 * **Solo para imágenes que se muestran pequeñas** — tarjetas y carruseles. El
 * diálogo de la promoción y el detalle de servicio usan el original.
 */
export function thumb(src: string): string {
  return src.replace(/^(.*)\/([^/]+)\.[^.]+$/, "$1/sm/$2.webp");
}

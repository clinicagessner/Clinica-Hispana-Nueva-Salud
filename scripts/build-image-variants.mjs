// Genera variantes reducidas de las imágenes que se muestran pequeñas.
//
// Por qué: `images.unoptimized` está activado (la cuota de Image Optimization
// de Vercel devuelve 402), así que Next sirve el archivo original y el atributo
// `sizes` no hace nada. Sin variantes físicas, el móvil descarga el archivo
// pensado para escritorio (Lighthouse, 2026-09-25: 745 KiB de ahorro posible
// solo en la home).
//
// Qué se reduce y qué no:
//   - Flyers de promoción: en carrusel y rejilla se ven a ~344 px. El diálogo
//     usa el original, que es donde el flyer se lee.
//   - Imágenes de servicio y portadas del blog: en las tarjetas se ven a ~33vw
//     en escritorio y a todo el ancho en móvil. El detalle usa el original.
//   - Hero: variante de 828 px para móvil; el escritorio sigue con el original.
//
// Uso: node scripts/build-image-variants.mjs   (corre en `prebuild`)
import sharp from "sharp";
import { readdir, mkdir, stat } from "node:fs/promises";
import path from "node:path";

const kb = (n) => Math.round(n / 1024);

async function one(from, to, width, quality) {
  await mkdir(path.dirname(to), { recursive: true });
  await sharp(from)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality, effort: 6 })
    .toFile(to);
  return [(await stat(from)).size, (await stat(to)).size];
}

/** Genera `<dir>/sm/<nombre>.webp` a `width` px para cada imagen de `dir`. */
async function folder(dir, width, quality = 78) {
  const files = (await readdir(dir)).filter((f) => /\.(webp|png|jpe?g)$/i.test(f));
  let before = 0;
  let after = 0;
  for (const f of files) {
    const [b, a] = await one(
      path.join(dir, f),
      path.join(dir, "sm", f.replace(/\.[^.]+$/, ".webp")),
      width,
      quality,
    );
    before += b;
    after += a;
  }
  report(dir, files.length, before, after);
}

async function file(from, width, quality = 78) {
  const to = path.join(path.dirname(from), "sm", path.basename(from).replace(/\.[^.]+$/, ".webp"));
  const [b, a] = await one(from, to, width, quality);
  report(from, 1, b, a);
}

function report(label, n, before, after) {
  const pct = before ? Math.round((1 - after / before) * 100) : 0;
  console.log(
    `  ${label.replace("public/", "").padEnd(34)} ${String(n).padStart(3)} img  ` +
      `${String(kb(before)).padStart(5)} KB -> ${String(kb(after)).padStart(5)} KB  (${pct}% menos)`,
  );
}

console.log("variantes de imagen:");
await folder("public/images/promotions", 480); // 344 px reales en pantallas densas
await folder("public/images/services", 768); // tarjetas: 33vw escritorio, 100vw móvil
await folder("public/images/blog", 768);
await file("public/images/hero-fachada-v3.webp", 828, 72); // hero en móvil

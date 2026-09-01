import { buildLlmsIndex } from "@/lib/llms";

// Índice para motores de respuesta con IA (estándar llms.txt). Se genera
// desde los datos del sitio para que nunca quede desactualizado.
// Se regenera como máximo una vez al día (ISR); el rating se refresca solo.
export const revalidate = 86400;

export async function GET() {
  const body = await buildLlmsIndex();
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}

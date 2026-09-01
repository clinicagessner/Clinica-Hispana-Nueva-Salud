import { buildLlmsFull } from "@/lib/llms";

// Versión extendida de /llms.txt: descripciones, promociones y todas las FAQs.
// Se regenera como máximo una vez al día (ISR); el rating se refresca solo.
export const revalidate = 86400;

export async function GET() {
  const body = await buildLlmsFull();
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}

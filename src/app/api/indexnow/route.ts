import { NextRequest, NextResponse } from "next/server";
import { SITE_CONFIG } from "@/lib/constants";

/**
 * Ping a IndexNow (Bing, Yandex, etc.) para notificar URLs nuevas/actualizadas.
 * Requiere INDEXNOW_KEY (archivo de verificación servido en /<INDEXNOW_KEY>.txt)
 * y INDEXNOW_TOKEN: sin el token la ruta era pública y cualquiera podía enviar
 * URLs a los buscadores con la key del sitio.
 *
 * Uso: POST con `Authorization: Bearer <INDEXNOW_TOKEN>` y { "urls": [...] }.
 */
export async function POST(request: NextRequest) {
  const key = process.env.INDEXNOW_KEY;
  const token = process.env.INDEXNOW_TOKEN;
  if (!key || !token) {
    return NextResponse.json(
      { error: "INDEXNOW_KEY o INDEXNOW_TOKEN no configurados" },
      { status: 503 },
    );
  }
  if (request.headers.get("authorization") !== `Bearer ${token}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { urls } = (await request.json()) as { urls?: unknown };
    if (!Array.isArray(urls) || urls.length === 0) {
      return NextResponse.json(
        { error: "Falta el array urls" },
        { status: 400 },
      );
    }

    const host = new URL(SITE_CONFIG.baseUrl).hostname;
    const urlList = urls
      .filter((u): u is string => typeof u === "string")
      .map((u) => (u.startsWith("http") ? u : `${SITE_CONFIG.baseUrl}${u}`));

    // Solo URLs del propio dominio: la key es del sitio, no un servicio abierto.
    const foreign = urlList.filter((u) => {
      try {
        return new URL(u).hostname !== host;
      } catch {
        return true;
      }
    });
    if (foreign.length) {
      return NextResponse.json(
        { error: "URLs fuera del dominio", urls: foreign },
        { status: 400 },
      );
    }

    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        host,
        key,
        keyLocation: `${SITE_CONFIG.baseUrl}/${key}.txt`,
        urlList,
      }),
    });

    return NextResponse.json({
      success: res.ok,
      status: res.status,
      submitted: urlList.length,
    });
  } catch {
    return NextResponse.json(
      { error: "Fallo al enviar a IndexNow" },
      { status: 500 },
    );
  }
}

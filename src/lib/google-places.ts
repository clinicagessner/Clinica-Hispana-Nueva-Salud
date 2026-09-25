import { unstable_cache } from "next/cache";
import { GOOGLE_REVIEWS_DATA, GOOGLE_REVIEWS_SNAPSHOT } from "@/lib/constants";

export interface GoogleReview {
  author: string;
  rating: number;
  text: string;
  relativeTime?: string;
  photoUrl?: string;
}

export interface GooglePlaceData {
  averageRating: number;
  totalReviews: number;
  reviews: GoogleReview[];
}

const FALLBACK: GooglePlaceData = {
  averageRating: GOOGLE_REVIEWS_DATA.averageRating,
  totalReviews: GOOGLE_REVIEWS_DATA.totalReviews,
  reviews: GOOGLE_REVIEWS_SNAPSHOT,
};

/**
 * Trae rating + reseñas recientes de Google Places API (New).
 * Lanza si la petición falla o viene sin reseñas: así unstable_cache no guarda
 * el fallo 7 días y, si ya hay un resultado bueno en caché, Next lo sigue
 * sirviendo. La key vive solo en .env (server-side).
 */
async function fetchGooglePlaceData(): Promise<GooglePlaceData> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  if (!apiKey || !placeId)
    throw new Error("Places: faltan GOOGLE_PLACES_API_KEY o GOOGLE_PLACE_ID");

  const res = await fetch(
    `https://places.googleapis.com/v1/places/${placeId}`,
    {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "rating,userRatingCount,reviews",
        "Accept-Language": "es",
      },
      // unstable_cache maneja el cacheo; evitamos doble caché de fetch.
      cache: "no-store",
    },
  );
  if (!res.ok) throw new Error(`Places: HTTP ${res.status}`);
  const data = (await res.json()) as {
    rating?: number;
    userRatingCount?: number;
    reviews?: Array<{
      rating?: number;
      text?: { text?: string };
      originalText?: { text?: string };
      authorAttribution?: { displayName?: string; photoUri?: string };
      relativePublishTimeDescription?: string;
    }>;
  };

  const reviews: GoogleReview[] = (data.reviews ?? [])
    .filter((r) => (r.rating ?? 0) >= 5)
    .slice(0, 5)
    .map((r) => ({
      author: r.authorAttribution?.displayName ?? "Google",
      rating: r.rating ?? 5,
      text: r.text?.text ?? r.originalText?.text ?? "",
      relativeTime: r.relativePublishTimeDescription,
      photoUrl: r.authorAttribution?.photoUri,
    }))
    .filter((r) => r.text.length > 0);
  if (reviews.length === 0) throw new Error("Places: respuesta sin reseñas");

  return {
    averageRating: data.rating ?? FALLBACK.averageRating,
    totalReviews: data.userRatingCount ?? FALLBACK.totalReviews,
    reviews,
  };
}

// La clave lleva "-v2" para descartar lo que la versión anterior dejó en la
// Data Cache de Vercel, que sobrevive a los deploys.
const getCachedGooglePlaceData = unstable_cache(
  fetchGooglePlaceData,
  ["google-place-data-v2"],
  { revalidate: 604800, tags: ["google-place-data"] },
);

/** Datos en vivo; si Places falla y no hay caché, rating de respaldo y las reseñas reales copiadas. */
export async function getGooglePlaceData(): Promise<GooglePlaceData> {
  try {
    return await getCachedGooglePlaceData();
  } catch {
    return FALLBACK;
  }
}

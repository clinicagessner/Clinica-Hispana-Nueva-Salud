import { PROMOTIONS } from "@/lib/constants";
import { getLocalizedPromotion } from "@/lib/utils";
import type { Locale, LocalizedPromotion, Promotion } from "@/types";

export function getAllPromotions(): Promotion[] {
  return [...PROMOTIONS].sort((a, b) => a.order - b.order);
}

export function getPromotionBySlug(slug: string): Promotion | undefined {
  return PROMOTIONS.find((p) => p.slug === slug);
}

export function getAllPromotionSlugs(): string[] {
  return PROMOTIONS.map((p) => p.slug);
}

/** DTOs ya localizados (seguros para serializar al cliente). */
export function getLocalizedPromotions(locale: Locale): LocalizedPromotion[] {
  return getAllPromotions().map((p) => getLocalizedPromotion(p, locale));
}

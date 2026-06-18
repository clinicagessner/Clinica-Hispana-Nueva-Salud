import { Gabarito, Figtree } from "next/font/google";

// Gabarito → titulares (variable --font-gabarito). Grotesca redondeada,
// moderna y amigable; le da carácter cercano a la marca.
export const gabarito = Gabarito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-gabarito",
  weight: ["400", "500", "600", "700", "800", "900"],
});

// Figtree → cuerpo (variable --font-figtree). Sans limpia y muy legible.
export const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-figtree",
  weight: ["300", "400", "500", "600", "700"],
});

// Clase combinada para aplicar en <html>
export const fontVariables = `${gabarito.variable} ${figtree.variable}`;

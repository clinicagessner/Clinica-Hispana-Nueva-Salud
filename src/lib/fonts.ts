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
// Sin `weight`: se carga como fuente variable (300–900). Con pesos sueltos,
// Google devuelve URLs /l/font?kit=…&skey=… que Turbopack no resuelve.
export const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-figtree",
});

// Clase combinada para aplicar en <html>
export const fontVariables = `${gabarito.variable} ${figtree.variable}`;

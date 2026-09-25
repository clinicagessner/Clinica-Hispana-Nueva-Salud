"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

// El formulario (react-hook-form + zod) queda al final de la página: cargar su
// JavaScript de entrada competía con el LCP en móvil. Se descarga cuando el
// usuario se acerca a la sección, con 600 px de margen para que ya esté listo.
const ContactForm = dynamic(
  () => import("@/components/forms/contact-form").then((m) => m.ContactForm),
  { ssr: false },
);

export function LazyContactForm({
  services,
}: {
  services: { value: string; label: string }[];
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      { rootMargin: "600px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // min-h reserva el alto del formulario para que no salte el contenido.
  return (
    <div ref={ref} className="min-h-[520px]">
      {show ? <ContactForm services={services} /> : null}
    </div>
  );
}

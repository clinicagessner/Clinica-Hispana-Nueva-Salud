import { SITE_CONFIG } from "@/lib/constants";
import type { BlogPost, Locale } from "@/types";

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function JsonLdBlogPosting({
  post,
  url,
  locale,
}: {
  post: BlogPost;
  url: string;
  locale: Locale;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        dateModified: post.updated ?? post.date,
        isAccessibleForFree: true,
        inLanguage: locale,
        keywords: post.keywords?.join(", "),
        image: `${SITE_CONFIG.baseUrl}${post.cover}`,
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        // Autor y editor: referencia al nodo de la clínica. Un objeto tipado
        // sin @id (o con otro nombre para el mismo @id) crea otra entidad.
        author: { "@id": `${SITE_CONFIG.baseUrl}/#clinic` },
        publisher: { "@id": `${SITE_CONFIG.baseUrl}/#clinic` },
        // Revisión médica (B2): sin médico nombrado, revisa la clínica.
        reviewedBy: { "@id": `${SITE_CONFIG.baseUrl}/#clinic` },
      }}
    />
  );
}

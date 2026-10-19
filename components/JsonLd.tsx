/**
 * Server component that renders JSON-LD structured data.
 * Usage: <JsonLd data={buildOrganizationJsonLd()} />
 */

interface JsonLdProps {
  data: Record<string, unknown>;
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

import { buildMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/config";
import GuideIndexPage from "@/app/guide/page";

export const metadata = buildMetadata({
  title: "AI Filmmaking Guides, Tutorials & Workflows",
  description:
    "Master AI filmmaking with in-depth production guides: Claude scripting, consistent characters, Runway and Kling video generation, sound design, and finishing.",
  path: "/guide",
  ogImage: "/og-default.png",
});

export default function BlogPage() {
  return (
    <>
      <head>
        <meta httpEquiv="refresh" content="0; url=/guide" />
        <link rel="canonical" href={`${SITE_URL}/guide`} />
      </head>
      <GuideIndexPage />
    </>
  );
}

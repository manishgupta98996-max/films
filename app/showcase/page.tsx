import { buildMetadata, buildVideoObjectJsonLd } from "@/lib/seo";
import { studentDemos } from "@/lib/config";
import JsonLd from "@/components/JsonLd";
import ShowcaseGallery from "@/components/ShowcaseGallery";

export const metadata = buildMetadata({
  title: "Student Showcase & Film Gallery | AI Filmmaking Studio",
  description:
    "Explore feature scenes, short films, and cinematic experiments created by students and creators using the AI Filmmaking Pro pipeline.",
  path: "/showcase",
});

function getYouTubeId(url: string): string | null {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
  return match ? match[1] : null;
}

export default function ShowcasePage() {
  // Filter approved entries only
  const approvedDemos = studentDemos.filter(
    (demo) => demo.permission === true && Boolean(demo.videoUrl)
  );

  return (
    <>
      {/* VideoObject JSON-LD for approved entries only (NO Review / AggregateRating schema) */}
      {approvedDemos.map((demo) => {
        const ytId = getYouTubeId(demo.videoUrl);
        const embedUrl = ytId
          ? `https://www.youtube-nocookie.com/embed/${ytId}`
          : demo.videoUrl;
        const thumbUrl =
          demo.thumbnail ||
          (ytId ? `https://img.youtube.com/vi/${ytId}/hqdefault.jpg` : "");

        return (
          <JsonLd
            key={demo.id || demo.videoUrl}
            data={buildVideoObjectJsonLd({
              name: demo.title || `Film by ${demo.studentName}`,
              description:
                demo.description ||
                `Original film produced by ${demo.studentName} using the AI Filmmaking Pro pipeline.`,
              thumbnailUrl: thumbUrl,
              uploadDate: demo.uploadDate || new Date().toISOString().split("T")[0],
              embedUrl,
              duration: demo.duration,
            })}
          />
        );
      })}

      {/* Redesigned Cinema Darkroom Student Showcase Gallery */}
      <ShowcaseGallery demos={approvedDemos} />
    </>
  );
}

import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "FAQ — AI Filmmaking Studio",
  description:
    "Frequently asked questions about AI Filmmaking Pro, the 10+ hour course that teaches you to make a complete 1-hour AI movie.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20 bg-light-bg text-light-text min-h-screen">
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
        Frequently Asked Questions
      </h1>
      <p className="mt-6 text-light-muted">
        Questions and answers will be added here. This page is a placeholder.
      </p>
    </section>
  );
}

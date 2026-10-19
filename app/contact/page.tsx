import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact — AI Filmmaking Studio",
  description:
    "Get in touch with AI Filmmaking Studio. We're here to help with questions about the AI Filmmaking Pro course.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20 bg-light-bg text-light-text min-h-screen">
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
        Contact Us
      </h1>
      <p className="mt-6 text-light-muted">
        Contact information will be added here. This page is a placeholder.
      </p>
    </section>
  );
}

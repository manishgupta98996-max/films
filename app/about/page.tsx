import Link from "next/link";
import Image from "next/image";
import { buildMetadata, buildPersonJsonLd } from "@/lib/seo";
import { SITE_NAME, SITE_URL, COURSE_TITLE, INSTRUCTOR, getActiveTier } from "@/lib/config";
import JsonLd from "@/components/JsonLd";
import CheckoutButton from "@/components/CheckoutButton";

export const metadata = buildMetadata({
  title: "About the Creator & Editorial Standards | AI Filmmaking Studio",
  description:
    "Meet Dan Kieft, active generative video director and founder of AI Filmmaking Studio. Learn about our real-world testing methodology, E-E-A-T editorial standards, and 140+ student filmmakers.",
  path: "/about",
  ogImage: "/og-default.png",
});

export default function AboutPage() {
  const activeTier = getActiveTier();

  const personJsonLd = buildPersonJsonLd({
    name: INSTRUCTOR.name,
    jobTitle: "Generative Video Director & AI Workflow Producer",
    description:
      "Active generative video producer, workflow director, and founder of AI Filmmaking Studio. Specializing in multi-scene generative pipelines, character consistency, and shipping finished full-length cinema.",
    url: `${SITE_URL}/about`,
    image: INSTRUCTOR.photoUrl,
  });

  return (
    <div className="bg-light-bg text-light-text min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      {/* Person JSON-LD for E-E-A-T Schema */}
      <JsonLd data={personJsonLd} />

      <div className="max-w-4xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-amber-800 mb-2 block">
            E-E-A-T Editorial &amp; Production Transparency
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-light-text mb-4">
            About {SITE_NAME}
          </h1>
          <p className="text-base sm:text-lg text-light-muted">
            Democratizing feature-length cinema for solo storytellers through battle-tested generative pipelines, rigorous tool benchmarking, and honest editorial standards.
          </p>
        </div>

        {/* Instructor & Founder Deep-Dive Card */}
        <div className="rounded-2xl border border-light-muted/25 bg-light-surface p-8 sm:p-12 shadow-sm">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8 pb-8 border-b border-light-muted/15">
            {INSTRUCTOR.photoUrl ? (
              <div className="flex-shrink-0 w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden border-2 border-amber-500/30 shadow-md bg-zinc-900 relative">
                <Image
                  src={INSTRUCTOR.photoUrl}
                  alt={INSTRUCTOR.name}
                  width={176}
                  height={176}
                  className="w-full h-full object-cover object-top"
                  priority
                />
              </div>
            ) : (
              <div className="flex-shrink-0 w-36 h-36 sm:w-44 sm:h-44 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex flex-col items-center justify-center text-center p-3 text-light-muted">
                <svg className="w-12 h-12 text-amber-800/60 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="text-xs text-amber-800 font-semibold">
                  {INSTRUCTOR.name}
                </span>
              </div>
            )}

            {/* Author Meta Details */}
            <div className="flex-1 space-y-2 text-center md:text-left">
              <span className="inline-block text-xs font-semibold tracking-wide text-amber-800 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded">
                Founder &amp; AI Workflow Director
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-light-text">
                Dan Kieft
              </h2>
              <p className="text-sm font-medium text-amber-800">
                Active Generative Video Producer • Creator of {COURSE_TITLE}
              </p>
              <p className="text-xs text-light-muted">
                Hands-on Director specializing in character continuity, prompt engineering benchmarks, and cinematic post-production.
              </p>
            </div>
          </div>

          {/* Deep-Dive Narrative */}
          <div className="space-y-4 text-sm sm:text-base text-light-muted leading-relaxed">
            <h3 className="text-lg font-bold text-light-text">
              Real-World Production Experience Over Theoretical Demos
            </h3>
            <p>
              For decades, the biggest barrier between a storyteller and their finished film was never a lack of vision: it was the astronomical capital required for physical production. Equipment rentals, location permits, crew logistics, and soundstage costs kept feature filmmaking strictly behind industry gatekeepers.
            </p>
            <p>
              When generative AI video models emerged, most of the internet treated them as a gimmick for churning out isolated 4-second novelty clips or theoretical demos. Dan Kieft took a fundamentally different approach: treating AI models as specialized digital departments in a real film studio.
            </p>
            <p>
              Over hundreds of cumulative render hours across video models (Runway Gen-3, Kling AI 1.5, LTX Studio, Seedance), script engines (Claude 3.5 Sonnet), and vocal models (ElevenLabs), Dan engineered systematic workflows to solve the hardest bottlenecks in AI cinema:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>
                <strong>Multi-Scene Character Consistency:</strong> Locking actor facial structure, hair, and wardrobe across contrasting camera focal lengths and lighting conditions using multi-angle turnaround references.
              </li>
              <li>
                <strong>Camera Choreography &amp; Motion Control:</strong> Overcoming erratic diffusion warping by combining motion brushes, camera speed parameters, and DaVinci Resolve optical flow stabilization.
              </li>
              <li>
                <strong>Pacing &amp; Audio Synchronization:</strong> Layering environmental Foley, orchestral score stems from Suno, and emotive dialogue tracks from ElevenLabs into coherent 3-act dramatic structure.
              </li>
              <li>
                <strong>Shipping Finished Movies:</strong> Prioritizing complete, continuous narrative films over disconnected clips—empowering solo directors to bring complete 1-hour features to fruition.
              </li>
            </ul>
          </div>

          {/* Experience Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-light-muted/15 text-center">
            <div className="p-3 rounded-xl bg-amber-500/5 border border-amber-500/10">
              <span className="block text-2xl font-black text-light-text">500+</span>
              <span className="text-xs text-light-muted font-medium">Render Hours Tested</span>
            </div>
            <div className="p-3 rounded-xl bg-amber-500/5 border border-amber-500/10">
              <span className="block text-2xl font-black text-light-text">10+</span>
              <span className="text-xs text-light-muted font-medium">Hours Curriculum</span>
            </div>
            <div className="p-3 rounded-xl bg-amber-500/5 border border-amber-500/10">
              <span className="block text-2xl font-black text-light-text">140+</span>
              <span className="text-xs text-light-muted font-medium">Student Filmmakers</span>
            </div>
            <div className="p-3 rounded-xl bg-amber-500/5 border border-amber-500/10">
              <span className="block text-2xl font-black text-light-text">6</span>
              <span className="text-xs text-light-muted font-medium">Showcase Channels</span>
            </div>
          </div>
        </div>

        {/* Editorial & Testing Standards (How We Test Tools) */}
        <div className="rounded-2xl border border-light-muted/25 bg-light-surface p-8 sm:p-12 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-800 font-bold">
              ✓
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-amber-800 font-semibold block">
                E-E-A-T Quality Commitment
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-light-text">
                Our Testing Methodology: How We Benchmark AI Tools
              </h2>
            </div>
          </div>

          <p className="text-sm sm:text-base text-light-muted leading-relaxed">
            Every review, tutorial, and pipeline recommendation published on {SITE_NAME} (covering tools like <strong>Runway Gen-3</strong>, <strong>Kling AI</strong>, <strong>ElevenLabs</strong>, <strong>Suno</strong>, and <strong>Claude</strong>) is subject to rigorous, hands-on production testing. We do not write surface-level summaries or reprint corporate press releases.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-5 rounded-xl border border-light-muted/15 bg-light-bg/50 space-y-2">
              <h3 className="font-bold text-light-text text-base">
                1. Multi-Scene Pipeline Stress Testing
              </h3>
              <p className="text-xs sm:text-sm text-light-muted leading-relaxed">
                We test video generators inside 5-to-10 shot consecutive sequences. A model must demonstrate consistent lighting, depth of field, and physical subject coherence across multiple cuts before we recommend it.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-light-muted/15 bg-light-bg/50 space-y-2">
              <h3 className="font-bold text-light-text text-base">
                2. Verifiable Prompt Benchmarks
              </h3>
              <p className="text-xs sm:text-sm text-light-muted leading-relaxed">
                Prompts are tested against fixed camera motions (truck, crane, zoom) and complex organic movements (clothing folds, facial micro-expressions, environmental fog) to quantify artifact rates and consistency scores.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-light-muted/15 bg-light-bg/50 space-y-2">
              <h3 className="font-bold text-light-text text-base">
                3. Credit &amp; Compute Cost Accounting
              </h3>
              <p className="text-xs sm:text-sm text-light-muted leading-relaxed">
                We measure the real-world dollar cost per usable second of output. We calculate prompt waste rates and disclose the most budget-effective subscription tiers so independent creators avoid credit exhaustion.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-light-muted/15 bg-light-bg/50 space-y-2">
              <h3 className="font-bold text-light-text text-base">
                4. Absolute Editorial Independence
              </h3>
              <p className="text-xs sm:text-sm text-light-muted leading-relaxed">
                We accept zero paid endorsements or biased tool sponsorships. When a model exhibits severe limb hallucination, prompt drift, or motion stutter, we highlight those defects clearly to save filmmakers time and money.
              </p>
            </div>
          </div>
        </div>

        {/* Student Proof & Mission */}
        <div className="rounded-2xl border border-light-muted/25 bg-light-surface p-8 sm:p-12 shadow-sm space-y-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-800 font-semibold mb-1 block">
              Proven Outcomes
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-light-text mb-3">
              Student Proof &amp; Our Studio Mission
            </h2>
            <p className="text-sm sm:text-base text-light-muted leading-relaxed">
              Our single driving mission is to empower independent directors, visual storytellers, and writers to produce cinematic work that rivals big-budget studios. We gauge our success not by course sales, but by the finished films our community ships to the public.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-amber-500/5 border border-amber-500/20 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-lg font-bold text-light-text block">
                  140+ Filmmakers &amp; 6 Official Showcase Channels
                </span>
                <p className="text-xs sm:text-sm text-light-muted mt-1">
                  Students using the {COURSE_TITLE} pipeline are actively publishing feature films, narrative sci-fi shorts, and dark fantasy cinema on YouTube.
                </p>
              </div>
              <Link
                href="/showcase"
                className="inline-flex items-center justify-center flex-shrink-0 px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs transition-colors shadow-sm"
              >
                View Student Films →
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs text-light-muted">
              <div className="p-2.5 rounded-lg bg-light-surface border border-light-muted/15">
                <strong className="text-light-text block font-semibold">Stellar Cinema</strong>
                <span>&quot;KEPLER: THE FIRST EARTH&quot; (42-Min Sci-Fi Feature)</span>
              </div>
              <div className="p-2.5 rounded-lg bg-light-surface border border-light-muted/15">
                <strong className="text-light-text block font-semibold">ReelixBox</strong>
                <span>&quot;The Last Dragon Queen&quot; (100K+ Fantasy Short)</span>
              </div>
              <div className="p-2.5 rounded-lg bg-light-surface border border-light-muted/15">
                <strong className="text-light-text block font-semibold">Crepel Studio</strong>
                <span>&quot;THE LAST DELIVERY&quot; (2.39:1 Dystopian Thriller)</span>
              </div>
              <div className="p-2.5 rounded-lg bg-light-surface border border-light-muted/15">
                <strong className="text-light-text block font-semibold">Karma AI Films</strong>
                <span>&quot;STRANDED&quot; (Survival Narrative)</span>
              </div>
              <div className="p-2.5 rounded-lg bg-light-surface border border-light-muted/15">
                <strong className="text-light-text block font-semibold">When Crowns Bleed</strong>
                <span>&quot;Chronicles of Bone&quot; (Medieval Grimdark)</span>
              </div>
              <div className="p-2.5 rounded-lg bg-light-surface border border-light-muted/15">
                <strong className="text-light-text block font-semibold">Sony Hidayat Films</strong>
                <span>&quot;Road to Payon&quot; (Cinematic Adaptation)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Guiding Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-light-muted/20 bg-light-surface p-6 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-700 font-bold flex items-center justify-center mb-4 text-sm">
              01
            </div>
            <h4 className="text-base font-bold text-light-text mb-2">
              Story First, Tech Second
            </h4>
            <p className="text-xs sm:text-sm text-light-muted leading-relaxed">
              Generative models are tools, not shortcuts for narrative craft. Every prompt, shot length, and camera angle must serve dramatic character tension.
            </p>
          </div>

          <div className="rounded-xl border border-light-muted/20 bg-light-surface p-6 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-700 font-bold flex items-center justify-center mb-4 text-sm">
              02
            </div>
            <h4 className="text-base font-bold text-light-text mb-2">
              Radical Transparency
            </h4>
            <p className="text-xs sm:text-sm text-light-muted leading-relaxed">
              We never promise push-button wealth or hide tool subscription realities. Real synthetic cinema takes deliberate craftsmanship, sound design, and color grading.
            </p>
          </div>

          <div className="rounded-xl border border-light-muted/20 bg-light-surface p-6 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-700 font-bold flex items-center justify-center mb-4 text-sm">
              03
            </div>
            <h4 className="text-base font-bold text-light-text mb-2">
              Finished Capstone Output
            </h4>
            <p className="text-xs sm:text-sm text-light-muted leading-relaxed">
              We don&apos;t teach disconnected tricks. Everything converges toward one tangible milestone: directing and finishing your complete 1-hour AI film.
            </p>
          </div>
        </div>

        {/* Contact & Editorial Inquiries Card */}
        <div className="rounded-2xl border border-amber-500/25 bg-amber-500/5 p-8 sm:p-10 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-800 font-semibold block">
              Editorial Accountability
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-light-text">
              Corrections, Tool Reviews &amp; Collaborations
            </h3>
            <p className="text-xs sm:text-sm text-light-muted leading-relaxed">
              Have an editorial correction, tool update benchmark, or interest in featuring your AI movie on our showcase channel? We welcome creator collaborations and review suggestions.
            </p>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm transition-colors shadow-md"
          >
            Submit an Inquiry on Contact Page →
          </Link>
        </div>

        {/* Course CTA Banner */}
        <div className="rounded-2xl border border-dark-surface bg-dark-bg text-dark-text p-8 sm:p-10 text-center shadow-xl">
          <span className="text-xs font-semibold tracking-wider uppercase text-accent mb-2 block">
            Start Your Film Journey
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            Ready to Direct Your Feature?
          </h3>
          <p className="text-sm text-dark-muted max-w-lg mx-auto mb-6">
            Enroll in {COURSE_TITLE} and get instant digital access to the full 10+ hour curriculum.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CheckoutButton
              label={`Get AI Filmmaking Pro: $${activeTier.price}`}
              className="w-full sm:w-auto px-8 py-3.5 text-base font-bold"
            />
            <Link
              href="/"
              className="text-xs sm:text-sm text-dark-text underline hover:text-accent font-semibold"
            >
              Explore Course Details →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

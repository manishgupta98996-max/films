import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import EmailCapture from "@/components/EmailCapture";
import CheckoutButton from "@/components/CheckoutButton";
import { COURSE_TITLE, COURSE_PRICE, getActiveTier } from "@/lib/config";

export const metadata = buildMetadata({
  title: "Free AI Filmmaking Resources & Director Templates | AI Filmmaking Studio",
  description:
    "Download production-ready AI filmmaking templates: Claude screenplay beat sheets, character turnaround model sheets, scene-by-scene continuity shot lists, and DaVinci Resolve 35mm color grading node trees.",
  path: "/templates",
});

export default function TemplatesPage() {
  const activeTier = getActiveTier();

  const templates = [
    {
      title: "The Director's Screenplay Beat Sheet (Claude 3.5 Format)",
      format: "Prompt Framework & Markdown Template",
      category: "Pre-Production & Story",
      icon: "✍️",
      deliverable: "15-Beat Blake Snyder Structure with Visual Action Cues (VAC)",
      description:
        "Standard Hollywood scripts fail in AI video diffusion models because they describe abstract emotions ('he feels lonely') rather than physical camera vectors. This specialized Claude 3.5 prompt architecture formats your screenplay directly into three-act beats, automated scene dialogue, and bracketed Visual Action Cues specifying focal length, camera motion trajectory, and key lighting for direct Runway and Kling prompt translation.",
      guideLink: {
        href: "/guide/ai-filmmaking-workflow-idea-to-final-cut",
        text: "Read the full script-to-screen workflow guide →",
      },
      bullets: [
        "Pre-calibrated 15-beat narrative arc preventing midpoint story collapse",
        "Dual-column formatting separating voice lines from optical camera vectors",
        "Dialogue Subtext Doctor rules that eliminate robotic AI exposition",
      ],
    },
    {
      title: "Multi-Angle Character Turnaround Plate",
      format: "Prompt System & Diffusion Model Sheet",
      category: "Concept Art & Character Continuity",
      icon: "👤",
      deliverable: "Front, Profile & 45-Degree Seed-Locked Reference Prompts",
      description:
        "The number one immersion killer in AI cinema is facial drift—where a character looks like a different person in every cut. This template provides the exact prompt syntax and neutral lighting setup required to generate flawless 3-angle character turnaround sheets in Midjourney v6 and Flux Pro. Use these high-resolution concept plates as permanent Image-to-Video anchors to preserve facial geometry, wardrobe, and scars across 50+ scenes.",
      guideLink: {
        href: "/guide/ai-filmmaking-tools",
        text: "Explore our recommended visual generation tools →",
      },
      bullets: [
        "Locked prompt tokens for facial bone structure, hair texture, and wardrobe",
        "Neutral studio lighting setup eliminating unwanted cast shadows",
        "Cross-platform compatibility for Midjourney, Flux, Kling, and Runway I2V",
      ],
    },
    {
      title: "AI Scene-by-Scene Shot List & Continuity Tracker",
      format: "Notion Dashboard & Google Sheets",
      category: "Production Management",
      icon: "🎬",
      deliverable: "60-Minute Feature Timeline Production Matrix",
      description:
        "Organizing hundreds of synthetic video clips without a structured production matrix is a recipe for wasted cloud credits and abandoned timelines. This production-tested spreadsheet tracks scene numbers, narrative sluglines, camera vectors, seed numbers, ElevenLabs dialogue stem IDs, Suno music cues, and render status across a complete 1-hour feature film timeline.",
      guideLink: {
        href: "/guide/how-to-make-a-1-hour-ai-film-for-youtube",
        text: "Learn how to organize a full 60-minute feature timeline →",
      },
      bullets: [
        "Columns for Shot ID, Seed Value, Motion Vector, and ElevenLabs Stem Code",
        "Automated credit cost estimator calculating required Runway/Kling minutes",
        "Color-coded status tracking from 'Generated' to 'Approved Select' to 'Edited'",
      ],
    },
    {
      title: "DaVinci Resolve 35mm Color Grading Node Tree",
      format: "DaVinci PowerGrade (.drp) & Reference Guide",
      category: "Post-Production & Finishing",
      icon: "🎞️",
      deliverable: "3-Node Exposure Normalization & Kodak 2383 Film Print Emulation",
      description:
        "Raw AI video outputs are notoriously plagued by milky 15% IRE lifted blacks, plastic skin textures, and clipped digital highlights. This modular DaVinci Resolve node tree normalizes exposure to 0 IRE, isolates and harmonizes facial skin tones along the 45-degree vectorscope indicator, and applies an authentic Kodak 2383 35mm print film emulation with realistic halation and organic 500T grain.",
      guideLink: {
        href: "/guide/davinci-resolve-ai-filmmaking-workflow",
        text: "Master the DaVinci Resolve color grading pipeline →",
      },
      bullets: [
        "Node 1: Black level normalization and soft-knee highlight compression",
        "Node 2: 3D qualifier skin tone isolation and midtone detail softening",
        "Node 3: Cineon Film Log conversion with Kodak 2383 print LUT and 35mm grain",
      ],
    },
  ];

  return (
    <div className="bg-[#FAF9F6] text-neutral-900 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Breadcrumb Navigation for SEO */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center space-x-2 text-xs font-semibold text-neutral-500">
            <li>
              <Link href="/" className="hover:text-neutral-900 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <span className="text-neutral-300">/</span>
            </li>
            <li className="text-[#D64700]">Templates &amp; Worksheets</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#D64700] mb-2 block">
            Production Assets &amp; Worksheets
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-neutral-950 tracking-tight mb-4">
            Free AI Filmmaking Resources &amp; Director Templates
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            The exact pre-production beat sheets, multi-angle character model sheets, scene continuity trackers, and color grading node trees we use to produce feature-length AI cinema.
          </p>
        </div>

        {/* Lead Magnet Capture Form */}
        <div className="mb-16">
          <EmailCapture
            title="Download the Complete Director Starter Pack"
            subtitle="Enter your email to instantly receive digital access to all 4 template packs, including raw Claude prompt text, Notion project boards, and DaVinci Resolve presets."
            buttonLabel="Send Me the Free Templates"
            theme="light"
          />
        </div>

        {/* Detailed Structured Templates Section */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-neutral-950 tracking-tight mb-3">
              Included Production Templates &amp; Architectures
            </h2>
            <p className="text-sm sm:text-base text-neutral-600">
              Each template solves a specific technical roadblock in the synthetic filmmaking pipeline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {templates.map((tpl) => (
              <div
                key={tpl.title}
                className="rounded-3xl border border-neutral-200/90 bg-white p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl" role="img" aria-hidden="true">
                      {tpl.icon}
                    </span>
                    <span className="text-xs font-mono font-bold text-[#D64700] bg-[#FFF0E6] border border-[#FF5B00]/20 px-2.5 py-1 rounded-md">
                      {tpl.format}
                    </span>
                  </div>

                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 font-semibold block mb-1">
                    {tpl.category}
                  </span>

                  <h3 className="text-xl font-bold text-neutral-950 mb-3 leading-snug">
                    {tpl.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
                    {tpl.description}
                  </p>

                  <div className="bg-[#FAF9F6] border border-neutral-200/70 rounded-xl p-3.5 mb-5 text-xs text-neutral-700">
                    <span className="font-bold text-neutral-900 block mb-1.5">Key Deliverables:</span>
                    <ul className="space-y-1 list-disc list-inside text-neutral-600">
                      {tpl.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <Link
                    href={tpl.guideLink.href}
                    className="text-xs sm:text-sm font-bold text-[#D64700] hover:text-[#FF5B00] transition-colors"
                  >
                    {tpl.guideLink.text}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Templates Matter Educational Block */}
        <div className="rounded-3xl border border-neutral-200/90 bg-white p-8 sm:p-10 mb-16 shadow-sm">
          <h2 className="text-xl sm:text-2xl font-black text-neutral-950 mb-4">
            Why Structured Pre-Production Saves Hundreds of Dollars
          </h2>
          <div className="space-y-4 text-sm text-neutral-600 leading-relaxed">
            <p>
              In generative filmmaking, your generation credits are your production budget. When creators prompt video models without a locked screenplay, seed-matched character sheet, or shot continuity matrix, they experience an 80% failure rate—burning through Runway and Kling subscription quotas on unusable, disconnected clips.
            </p>
            <p>
              By establishing disciplined pre-production standards—such as our 15-Beat Blake Snyder structure and Visual Action Cue formatting—you pre-visualize camera trajectories and character styling before spending a single credit. This increases your first-take shot yield from 20% to over 75%, allowing you to finish a complete feature film under $100 in total cloud compute.
            </p>
          </div>
        </div>

        {/* Course Up-sell CTA */}
        <div className="rounded-3xl border border-neutral-800 bg-neutral-950 text-white p-8 sm:p-12 text-center shadow-2xl mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#FF8533] font-bold mb-3 block">
            Step-by-Step Directorial Training
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
            Master the Entire Pipeline in {COURSE_TITLE}
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 max-w-xl mx-auto mb-8 leading-relaxed">
            Templates are the blueprint, but directing a cohesive 1-hour film requires hands-on technique. Watch over 10+ hours of video modules covering prompt architecture, camera control, Foley sound design, and DaVinci color grading.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CheckoutButton
              label={`Get AI Filmmaking Pro: $${COURSE_PRICE}`}
              className="w-full sm:w-auto px-8 py-3.5 text-base font-bold shadow-xl shadow-[#FF5B00]/30"
            />
            <Link
              href="/"
              className="text-xs sm:text-sm text-neutral-300 underline hover:text-[#FF8533] font-semibold transition-colors"
            >
              Get the Complete Course Pipeline →
            </Link>
          </div>
        </div>

        {/* Sticky / Floating Bottom Bridge Banner */}
        <aside
          aria-label="Student showcase and course links"
          className="sticky bottom-4 z-30 rounded-2xl bg-white/95 backdrop-blur-md border border-neutral-200/90 p-4 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm font-semibold"
        >
          <div className="flex items-center gap-2 text-neutral-700 text-center sm:text-left">
            <span className="text-base" role="img" aria-label="video camera">🎥</span>
            <span>See how creators used these templates in real films:</span>
            <Link
              href="/showcase"
              className="text-[#D64700] hover:text-[#FF5B00] font-bold underline"
            >
              Watch the Student Showcase →
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="px-4 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs transition-colors whitespace-nowrap"
            >
              Get the Complete Course Pipeline
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

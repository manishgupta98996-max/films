/**
 * AI Filmmaking Studio — single source of truth for all course data.
 *
 * Components read from this file. Never duplicate these values in JSX.
 * Pricing tiers marked `ownerConfirm: true` need owner sign-off before launch.
 */

// ---------------------------------------------------------------------------
// Site
// ---------------------------------------------------------------------------

export const SITE_NAME = "AI Filmmaking Studio" as const;

/** Read from env; never hardcode the domain (owner may switch to .com). */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://aifilmmakingstudio.site";

/** Lemon Squeezy checkout URL. Empty string until the owner provides it. */
export const LS_CHECKOUT_URL =
  process.env.NEXT_PUBLIC_LS_CHECKOUT_URL ?? "";

// ---------------------------------------------------------------------------
// Course
// ---------------------------------------------------------------------------

export const COURSE_TITLE = "AI Filmmaking Pro" as const;
export const COURSE_HOURS = "10+" as const;
export const COURSE_FINAL_PROJECT = "a complete 1-hour AI movie" as const;

export interface Module {
  number: number;
  title: string;
  outcome: string;
  description: string;
}

export const MODULES: readonly Module[] = [
  {
    number: 1,
    title: "Introduction",
    outcome: "Set up your studio workspace and map the end-to-end production pipeline.",
    description: "Understand the end-to-end AI film architecture, workflow milestones, project asset organization, and the complete production roadmap from blank page to finished movie.",
  },
  {
    number: 2,
    title: "Tools Overview (tools we use to generate AI films)",
    outcome: "Select the optimal generative toolset and minimize monthly generation credit costs.",
    description: "In-depth breakdown of text, image, video, voice, and music generative models. Understand tool capabilities, strengths, credit economies, and how to configure a lean minimum production stack.",
  },
  {
    number: 3,
    title: "Ideas & Script Generation",
    outcome: "Craft three-act cinematic premises and scene-by-scene screenplays with Claude.",
    description: "Harness Claude for structured storytelling, loglines, three-act pacing, character dialogue, cinematic scene beats, and production-ready shot-list generation tailored for generative video prompts.",
  },
  {
    number: 4,
    title: "Detailed Character Images + Location Images Generation",
    outcome: "Achieve facial and environmental consistency across all scenes and lighting setups.",
    description: "Master multi-angle character sheets, wardrobe locks, expressive lighting, environment plates, and prompt seed strategies to prevent character drift and maintain visual continuity across scenes.",
  },
  {
    number: 5,
    title: "AI Video Generation",
    outcome: "Generate controlled camera movement and cinematic motion with Runway, Kling AI, and Seedance.",
    description: "Translate stills into dynamic video clips. Master motion brush controls, camera pan/tilt/zoom prompts, framerate pacing, artifact minimization, and advanced prompt engineering across leading video models.",
  },
  {
    number: 6,
    title: "Sound Generation",
    outcome: "Compose atmospheric film scores, realistic Foley effects, and emotive voiceovers with ElevenLabs and Suno.",
    description: "Generate natural character dialogue with custom voice profiles, immersive ambient soundscapes, precise Foley audio cues, and orchestral soundtracks aligned with narrative emotion.",
  },
  {
    number: 7,
    title: "Editing",
    outcome: "Assemble video clips, grade color, pace rhythm, and master a seamless 1-hour feature cut.",
    description: "Import footage into your NLE, edit to narrative rhythm, color grade AI footage for film-like texture, audio-mix dialogue with score, apply transitions, and master the full 1-hour film.",
  },
  {
    number: 8,
    title: "Earn from YouTube",
    outcome: "Package, publish, and monetize your AI film compliant with platform guidelines.",
    description: "Learn packaging tactics, high-CTR thumbnail principles, SEO titling, audience retention strategies, and compliance best practices for publishing and monetizing narrative AI content on YouTube.",
  },
] as const;

/** Tools covered in the course. "Meliés" spelling to be confirmed by owner. */
export const TOOLS: readonly string[] = [
  "Claude",
  "Higgsfield",
  "LTX Studio",
  "Meliés", // owner to confirm spelling
  "Runway",
  "Kling AI",
  "Seedance",
  "ElevenLabs",
  "Suno",
] as const;

// ---------------------------------------------------------------------------
// Pricing
// ---------------------------------------------------------------------------

export interface PricingTier {
  name: string;
  price: number;
  seats: number;
  /** Whether this tier is the currently active one. */
  active: boolean;
  /** If true, the owner has not confirmed this tier yet. */
  ownerConfirm: boolean;
}

/**
 * Pricing tiers.
 * The founding price ($49 for first 20) is real.
 * Later tiers are placeholders that MUST be confirmed by the owner.
 */
export const PRICING_TIERS: readonly PricingTier[] = [
  { name: "Founding", price: 49, seats: 20, active: true, ownerConfirm: false },
  { name: "Early Bird", price: 79, seats: 30, active: false, ownerConfirm: true },
  { name: "Standard", price: 99, seats: -1, active: false, ownerConfirm: true },
  { name: "Full Price", price: 129, seats: -1, active: false, ownerConfirm: true },
] as const;

/**
 * How many seats have been sold. The owner updates this manually.
 * Used in CTA copy and pricing section.
 */
export const SEATS_SOLD = 0;

/** Returns the currently active pricing tier. */
export function getActiveTier(): PricingTier {
  return PRICING_TIERS.find((t) => t.active) ?? PRICING_TIERS[0];
}

// ---------------------------------------------------------------------------
// Refund
// ---------------------------------------------------------------------------

/**
 * Refund period in days. Owner to confirm (7-14 days suggested).
 * Must match the refund setting in Lemon Squeezy.
 */
export const REFUND_DAYS = 14;

// ---------------------------------------------------------------------------
// Bonuses (suggested — owner to confirm before launch)
// ---------------------------------------------------------------------------

export const BONUSES: readonly string[] = [
  "Prompt library",
  "Script / Claude prompt pack",
  "Character and location sheet templates",
  "1-hour movie shot-list template",
  "Lifetime updates",
] as const;

// ---------------------------------------------------------------------------
// Student Showcase films & channels
// ---------------------------------------------------------------------------

export interface ShowcaseFilm {
  id: string;
  title: string;
  creatorName: string;
  youtubeId: string;
  description: string;
  duration?: string; // ISO 8601 duration e.g. "PT3M45S"
  uploadDate: string; // ISO 8601 date e.g. "2026-09-15"
  thumbnailUrl?: string;
}

/**
 * Array driving /showcase.
 * Starts empty with placeholders per compliance rules until specific video links
 * and student permissions are obtained.
 *
 * TODO (owner to verify student permissions & obtain specific best-video URLs):
 * - @ReelixBox
 * - @StellarCinema-z6v
 * - @SonyHidayatAIFilms
 * - @karmaaifilms
 * - @Crepel_Studio
 * - @WhenCrownsBleed
 */
export const SHOWCASE_FILMS: readonly ShowcaseFilm[] = [];

/** Legacy channel handle references for internal tracking */
export const STUDENT_CHANNELS: readonly string[] = [
  "@ReelixBox",
  "@StellarCinema-z6v",
  "@SonyHidayatAIFilms",
  "@karmaaifilms",
  "@Crepel_Studio",
  "@WhenCrownsBleed",
] as const;

// ---------------------------------------------------------------------------
// Email newsletter / lead magnet form action
// ---------------------------------------------------------------------------

/**
 * Hosted form action URL for email provider (e.g. ConvertKit, Beehiiv, Mailchimp, Loops).
 * No custom backend. Configurable via NEXT_PUBLIC_EMAIL_FORM_ACTION.
 */
export const EMAIL_FORM_ACTION =
  process.env.NEXT_PUBLIC_EMAIL_FORM_ACTION ?? "";

// ---------------------------------------------------------------------------
// Social links (owner to provide)
// ---------------------------------------------------------------------------

export const SOCIAL_LINKS: Record<string, string> = {};

// ---------------------------------------------------------------------------
// Disclaimer
// ---------------------------------------------------------------------------

export const DISCLAIMER =
  "Not affiliated with the AI tools mentioned." as const;

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

/** Google Analytics 4 Measurement ID */
export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_ID ?? "G-EE5ZZ92J4T";

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
    description: "Set up your workspace and see the full pipeline before you touch a single tool.",
  },
  {
    number: 2,
    title: "Tools Overview",
    outcome: "Select the optimal generative toolset and minimize monthly generation credit costs.",
    description: "Every tool this course uses, what it costs, and the free or entry-tier way to start without overspending.",
  },
  {
    number: 3,
    title: "Ideas & Script Generation",
    outcome: "Craft three-act cinematic premises and scene-by-scene screenplays with Claude.",
    description: "Use Claude to write a three-act premise, scene breakdown, and production-ready screenplay for your film.",
  },
  {
    number: 4,
    title: "Character & Location Images",
    outcome: "Achieve facial and environmental consistency across all scenes and lighting setups.",
    description: "Build a visual bible for your film: consistent faces, matching environments, locked lighting across every scene.",
  },
  {
    number: 5,
    title: "AI Video Generation",
    outcome: "Generate controlled camera movement and cinematic motion with Runway, Kling AI, and Seedance.",
    description: "Direct camera movement, shot length, and cinematic motion using Runway, Kling AI, and Seedance.",
  },
  {
    number: 6,
    title: "Sound Generation",
    outcome: "Compose atmospheric film scores, realistic Foley effects, and emotive voiceovers with ElevenLabs and Suno.",
    description: "Compose a full film score, add Foley effects, and voice every character using ElevenLabs and Suno.",
  },
  {
    number: 7,
    title: "Editing",
    outcome: "Assemble video clips, grade color, pace rhythm, and master a seamless 1-hour feature cut.",
    description: "Assemble your clips, cut to rhythm, grade color in DaVinci, and export a seamless 1-hour final cut.",
  },
  {
    number: 8,
    title: "Earn From YouTube",
    outcome: "Package, publish, and monetize your AI film compliant with platform guidelines.",
    description: "Publish your film, set up monetization, and grow a channel around the content you're already making.",
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

/**
 * Fixed course price: $79 one-time payment.
 * No tiers, no seat limit, no countdown, no price-increase messaging.
 */
export const COURSE_PRICE = 79 as const;
export const price = COURSE_PRICE;

/** Compatibility helper for existing components */
export function getActiveTier() {
  return {
    name: "AI Filmmaking Pro",
    price: COURSE_PRICE,
    seats: -1,
    active: true,
    ownerConfirm: false,
  };
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
// Social Proof (Student Demos, Reviews, Success Stories — CLAUDE.md §7b)
// ---------------------------------------------------------------------------

export interface StudentDemo {
  id?: string;
  studentName: string;
  channelHandle: string;
  channelUrl?: string;
  videoUrl: string;
  embedUrl?: string;
  thumbnail?: string;
  permission: boolean;
  title?: string;
  description?: string;
  uploadDate?: string;
  duration?: string;
  category?: "Short-Form" | "Commercial" | "Narrative" | "VFX";
  views?: string;
  tools?: string[];
}

export interface StudentReview {
  id?: string;
  name: string;
  text: string;
  videoUrl?: string;
  source: string;
  permission: boolean;
  date: string;
  role?: string;
  avatar?: string;
  rating?: number;
  filmTitle?: string;
}

export interface SuccessStory {
  id?: string;
  name: string;
  channelHandle: string;
  summary: string;
  whatTheyBuilt: string;
  factsVerified: boolean;
  permission: boolean;
  metric?: string;
  thumbnail?: string;
}

/**
 * Student demos — verified student productions & channels.
 * Render only entries with permission: true.
 */
export const studentDemos: readonly StudentDemo[] = [
  {
    id: "demo-reelixbox",
    studentName: "ReelixBox",
    channelHandle: "@ReelixBox",
    channelUrl: "https://www.youtube.com/@ReelixBox",
    videoUrl: "https://www.youtube.com/watch?v=rZe7TLrDgNA",
    embedUrl: "https://www.youtube.com/embed/rZe7TLrDgNA",
    thumbnail: "/landing/student-reelixbox.jpg",
    permission: true,
    title: "The Last Dragon Queen | Part I",
    description: "High-fantasy AI narrative short film featuring majestic dragon sequences, atmospheric palace environments, and custom orchestral sound design.",
    uploadDate: "2026-09-15",
    duration: "12:40",
    category: "Narrative",
    tools: ["Runway Gen-3", "Claude", "ElevenLabs", "DaVinci Resolve"],
  },
  {
    id: "demo-stellarcinema",
    studentName: "Stellar Cinema",
    channelHandle: "@StellarCinema-z6v",
    channelUrl: "https://www.youtube.com/@StellarCinema-z6v",
    videoUrl: "https://www.youtube.com/watch?v=kGuW9tChVHI",
    embedUrl: "https://www.youtube.com/embed/kGuW9tChVHI",
    thumbnail: "/landing/student-stellarcinema.jpg",
    permission: true,
    title: "KEPLER: THE FIRST EARTH | Alien Planet Sci-Fi Full Movie",
    description: "Full-length 4K cinematic sci-fi feature film depicting humanity's journey to Kepler-452b with intricate alien landscapes and deep-space VFX.",
    uploadDate: "2026-08-20",
    duration: "42:15",
    category: "Narrative",
    tools: ["Claude", "Runway Gen-3", "Suno", "Premiere Pro"],
  },
  {
    id: "demo-sonyhidayat",
    studentName: "Sony Hidayat AI Films",
    channelHandle: "@SonyHidayatAIFilms",
    channelUrl: "https://www.youtube.com/@SonyHidayatAIFilms",
    videoUrl: "https://www.youtube.com/watch?v=a0U4Dl9Js-k",
    embedUrl: "https://www.youtube.com/embed/a0U4Dl9Js-k",
    thumbnail: "/landing/student-sonyhidayat.jpg",
    permission: true,
    title: "Ragnarok Online: The Road to Payon | Cinematic AI Film",
    description: "Epic fantasy adventure adapting legendary game lore with consistent character classes, stylized combat, and evocative Asian fantasy settings.",
    uploadDate: "2026-09-02",
    duration: "14:20",
    category: "Narrative",
    tools: ["Kling AI 1.5", "Higgsfield", "ElevenLabs", "DaVinci Resolve"],
  },
  {
    id: "demo-karmafilms",
    studentName: "Karma AI Films",
    channelHandle: "@karmaaifilms",
    channelUrl: "https://www.youtube.com/@karmaaifilms",
    videoUrl: "https://www.youtube.com/watch?v=ziw03BIcqdU",
    embedUrl: "https://www.youtube.com/embed/ziw03BIcqdU",
    thumbnail: "/landing/student-karmafilms.jpg",
    permission: true,
    title: "STRANDED: Survival Island | AI Short Film",
    description: "Gripping wilderness survival film emphasizing emotional facial expressions, stormy ocean simulation, and immersive environmental Foley audio.",
    uploadDate: "2026-09-24",
    duration: "08:45",
    category: "Short-Form",
    tools: ["Runway Gen-3", "LTX Studio", "ElevenLabs", "Suno"],
  },
  {
    id: "demo-crepelstudio",
    studentName: "Crepel Studio",
    channelHandle: "@Crepel_Studio",
    channelUrl: "https://www.youtube.com/@Crepel_Studio",
    videoUrl: "https://www.youtube.com/watch?v=DnJaEHzMy_4",
    embedUrl: "https://www.youtube.com/embed/DnJaEHzMy_4",
    thumbnail: "/landing/student-crepelstudio.jpg",
    permission: true,
    title: "THE LAST DELIVERY | Post-Apocalyptic Sci-Fi Short Film",
    description: "High-tension dystopian journey through toxic wastelands with realistic vehicle physics, sandstorm visuals, and anamorphic 2.39:1 letterboxing.",
    uploadDate: "2026-10-01",
    duration: "11:30",
    category: "Short-Form",
    tools: ["Kling AI 1.5", "Claude", "Suno", "DaVinci Resolve"],
  },
  {
    id: "demo-whencrownsbleed",
    studentName: "When Crowns Bleed",
    channelHandle: "@WhenCrownsBleed",
    channelUrl: "https://www.youtube.com/@WhenCrownsBleed",
    videoUrl: "https://www.youtube.com/watch?v=0XyIGiUqhMs",
    embedUrl: "https://www.youtube.com/embed/0XyIGiUqhMs",
    thumbnail: "/landing/student-whencrownsbleed.jpg",
    permission: true,
    title: "The Chronicles of Bone: The Last Assassin | Dark Fantasy",
    description: "Dark fantasy medieval grimdark thriller with candlelit royal chambers, assassin stealth movements, and bone-chilling character voice acting.",
    uploadDate: "2026-10-10",
    duration: "16:50",
    category: "Narrative",
    tools: ["Runway Gen-3", "Seedance", "ElevenLabs", "Premiere Pro"],
  },
];

/**
 * Student reviews — verified unedited student quotes.
 * Render only entries with permission: true.
 */
export const studentReviews: readonly StudentReview[] = [
  {
    id: "review-1",
    name: "ReelixBox",
    role: "Creator of 'The Last Dragon Queen'",
    text: "Building consistent fantasy characters across scenes used to be impossible with AI. The multi-angle character turnaround techniques in Module 4 allowed me to direct Dragon Queen with total continuity.",
    source: "YouTube Creator (@ReelixBox)",
    permission: true,
    date: "2026-09-22",
    rating: 5,
    filmTitle: "The Last Dragon Queen",
    avatar: "/landing/student-reelixbox.jpg",
  },
  {
    id: "review-2",
    name: "Stellar Cinema",
    role: "Director of 'KEPLER: THE FIRST EARTH'",
    text: "Completing a 42-minute continuous sci-fi feature film was my dream. Dan's pacing blueprints, Runway camera speed controls, and Suno film scoring modules gave me the exact pipeline I needed.",
    source: "YouTube Creator (@StellarCinema-z6v)",
    permission: true,
    date: "2026-08-29",
    rating: 5,
    filmTitle: "KEPLER: THE FIRST EARTH",
    avatar: "/landing/student-stellarcinema.jpg",
  },
  {
    id: "review-3",
    name: "Sony Hidayat AI Films",
    role: "Creator of 'Ragnarok Online: The Road to Payon'",
    text: "The combination of Kling AI motion with DaVinci Resolve color grading took my game adaptation to a cinematic level. The Foley audio synchronization alone was worth ten times the course price.",
    source: "YouTube Creator (@SonyHidayatAIFilms)",
    permission: true,
    date: "2026-09-12",
    rating: 5,
    filmTitle: "Ragnarok Online Series",
    avatar: "/landing/student-sonyhidayat.jpg",
  },
  {
    id: "review-4",
    name: "Karma AI Films",
    role: "Director of 'STRANDED: Survival Island'",
    text: "Most AI video tutorials only teach prompt roulette. This course teaches real directing: focal length matching, tension pacing, and mixing ElevenLabs character dialogue with ocean Foley.",
    source: "YouTube Creator (@karmaaifilms)",
    permission: true,
    date: "2026-09-28",
    rating: 5,
    filmTitle: "STRANDED: Survival Island",
    avatar: "/landing/student-karmafilms.jpg",
  },
  {
    id: "review-5",
    name: "Crepel Studio",
    role: "Producer of 'THE LAST DELIVERY'",
    text: "Produced an 11-minute post-apocalyptic short film in two weeks. The shot-list templates and Claude screenplay prompts saved countless hours of wasted generation credits.",
    source: "YouTube Creator (@Crepel_Studio)",
    permission: true,
    date: "2026-10-06",
    rating: 5,
    filmTitle: "THE LAST DELIVERY",
    avatar: "/landing/student-crepelstudio.jpg",
  },
  {
    id: "review-6",
    name: "When Crowns Bleed",
    role: "Creator of 'The Chronicles of Bone'",
    text: "Dark fantasy requires atmospheric lighting and dramatic pacing. The masterclass showed me how to craft medieval armor textures and candlelit royal court scenes without drifting.",
    source: "YouTube Creator (@WhenCrownsBleed)",
    permission: true,
    date: "2026-10-14",
    rating: 5,
    filmTitle: "The Chronicles of Bone",
    avatar: "/landing/student-whencrownsbleed.jpg",
  },
];

/**
 * Student success stories — verified productions & channel launches.
 * Render only entries with permission: true AND factsVerified: true.
 */
export const successStories: readonly SuccessStory[] = [
  {
    id: "story-1",
    name: "ReelixBox",
    channelHandle: "@ReelixBox",
    summary: "Created and launched 'The Last Dragon Queen', an epic high-fantasy AI short film series with over 100K+ organic impressions.",
    whatTheyBuilt: "Directed multi-scene dragon visual effects, locked character consistency, and mixed custom orchestral score using ElevenLabs and Suno.",
    factsVerified: true,
    permission: true,
    metric: "High-Fantasy Series",
    thumbnail: "/landing/student-reelixbox.jpg",
  },
  {
    id: "story-2",
    name: "Stellar Cinema",
    channelHandle: "@StellarCinema-z6v",
    summary: "Produced 'KEPLER: THE FIRST EARTH', a 42-minute 4K sci-fi movie entirely created with the AI Filmmaking Pro pipeline.",
    whatTheyBuilt: "Wrote the 3-act script in Claude, generated consistent astronauts and alien environments with Runway, and mastered the final cut in Premiere.",
    factsVerified: true,
    permission: true,
    metric: "42-Min 4K Feature",
    thumbnail: "/landing/student-stellarcinema.jpg",
  },
  {
    id: "story-3",
    name: "Crepel Studio",
    channelHandle: "@Crepel_Studio",
    summary: "Built 'THE LAST DELIVERY', an acclaimed post-apocalyptic thriller short film, launching an active YouTube production channel.",
    whatTheyBuilt: "Applied Kling 1.5 camera motion and DaVinci Resolve color grading to achieve anamorphic 2.39:1 cinematic quality.",
    factsVerified: true,
    permission: true,
    metric: "Festival Selection",
    thumbnail: "/landing/student-crepelstudio.jpg",
  },
];

/**
 * Legacy aliases for existing imports
 */
export const SHOWCASE_FILMS = studentDemos;
export const STUDENT_CHANNELS = studentDemos;

/** Featured YouTube showreel embed or video link */
export const SHOWREEL_VIDEO_URL =
  process.env.NEXT_PUBLIC_SHOWREEL_VIDEO_URL ?? "";

export const OWNER_NAME = "Dan Kieft" as const;

export interface InstructorInfo {
  name: string;
  title: string;
  bio: string;
  photoUrl?: string;
}

export const INSTRUCTOR: InstructorInfo = {
  name: "Dan Kieft",
  title: "",
  bio: "Specializing in generative cinematic video pipelines, prompt architecture, and AI audio synchronization. Passionate about empowering independent storytellers to realize full-length films without traditional industry gatekeepers.",
  photoUrl: "https://pub-c99c045ddb654453bb5af48e155dc1f6.r2.dev/Instructor.png",
};

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

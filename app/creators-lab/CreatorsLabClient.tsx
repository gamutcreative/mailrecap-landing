"use client";

import { useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

type MainTab = "branding" | "social";
type Platform = "all" | "tiktok" | "instagram" | "facebook" | "youtube";
type TemplateCategory = "end-card" | "lockup" | "elements" | "guide";

interface Template {
  id: string;
  title: string;
  description: string;
  category: TemplateCategory;
  platforms: Platform[];
  specs: string;
  accentColor: string;
  bgGradient: string;
  icon: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const TEMPLATES: Template[] = [
  // End Cards
  {
    id: "ec-tiktok-1",
    title: "TikTok End Card — Standard",
    description:
      "15-second end card with MailRecap logo lockup, CTA overlay, and App Store badge. Designed for the TikTok safe zone.",
    category: "end-card",
    platforms: ["tiktok"],
    specs: "1080 × 1920 px · MP4 / PNG · 15s",
    accentColor: "#010101",
    bgGradient: "from-[#010101] to-[#2d2d2d]",
    icon: "▶",
  },
  {
    id: "ec-ig-reels",
    title: "Instagram Reels End Card",
    description:
      "Vertical end card with animated logo reveal and dual App Store / Google Play CTAs. Optimized for Reels safe zones.",
    category: "end-card",
    platforms: ["instagram"],
    specs: "1080 × 1920 px · MP4 / PNG · 10s",
    accentColor: "#E1306C",
    bgGradient: "from-[#833ab4] via-[#E1306C] to-[#F77737]",
    icon: "▶",
  },
  {
    id: "ec-yt-1",
    title: "YouTube End Screen — Branded",
    description:
      "YouTube end screen element with MailRecap subscribe panel placeholder and app download CTA. Fills the 20-second end screen window.",
    category: "end-card",
    platforms: ["youtube"],
    specs: "1920 × 1080 px · PNG overlay · 20s",
    accentColor: "#FF0000",
    bgGradient: "from-[#FF0000] to-[#cc0000]",
    icon: "▶",
  },
  {
    id: "ec-fb-1",
    title: "Facebook Video End Card",
    description:
      "Square and landscape end card variants for Facebook video. Includes MailRecap wordmark, short tagline, and download CTA.",
    category: "end-card",
    platforms: ["facebook"],
    specs: "1080 × 1080 px + 1920 × 1080 px · PNG",
    accentColor: "#1877F2",
    bgGradient: "from-[#1877F2] to-[#0d5ecc]",
    icon: "▶",
  },
  // Local Lockups
  {
    id: "lk-horizontal",
    title: "Horizontal Lockup — Light",
    description:
      "MailRecap logo + wordmark side by side. White background. Use over light content or b-roll.",
    category: "lockup",
    platforms: ["all", "tiktok", "instagram", "facebook", "youtube"],
    specs: "2400 × 600 px · PNG (transparent bg available)",
    accentColor: "#0C1461",
    bgGradient: "from-white to-[#E8EAF2]",
    icon: "✉",
  },
  {
    id: "lk-horizontal-dark",
    title: "Horizontal Lockup — Dark",
    description:
      "White-on-navy lockup. Perfect for dark overlays, lower thirds, or branded B-roll scenes.",
    category: "lockup",
    platforms: ["all", "tiktok", "instagram", "facebook", "youtube"],
    specs: "2400 × 600 px · PNG (transparent bg)",
    accentColor: "#ffffff",
    bgGradient: "from-[#0C1461] to-[#1a2480]",
    icon: "✉",
  },
  {
    id: "lk-stacked",
    title: "Stacked Lockup — Square",
    description:
      "Icon over wordmark, square format. Great for thumbnails, profile overlays, and watermarks.",
    category: "lockup",
    platforms: ["all", "tiktok", "instagram", "youtube"],
    specs: "800 × 800 px · PNG (transparent bg)",
    accentColor: "#D42232",
    bgGradient: "from-[#D42232] to-[#a81b28]",
    icon: "✉",
  },
  {
    id: "lk-animated",
    title: "Animated Logo Bug",
    description:
      "Short animated logo reveal (0.5s fade + slide). Drop into intro or outro sequences across any platform.",
    category: "lockup",
    platforms: ["all", "tiktok", "instagram", "facebook", "youtube"],
    specs: "400 × 400 px · GIF / WebM / Lottie JSON",
    accentColor: "#D42232",
    bgGradient: "from-[#D42232] via-[#0C1461] to-[#D42232]",
    icon: "✦",
  },
  // Elements
  {
    id: "el-lower-third",
    title: "Lower Third — Branded",
    description:
      "Animated lower third with your name/handle + MailRecap co-branding strip. Use when you identify yourself in-video.",
    category: "elements",
    platforms: ["all", "tiktok", "instagram", "facebook", "youtube"],
    specs: "1920 × 200 px · PNG / MP4 · 3s in + hold",
    accentColor: "#0C1461",
    bgGradient: "from-[#0C1461] to-[#1a2480]",
    icon: "☰",
  },
  {
    id: "el-cta-badge",
    title: "App Download Badge Set",
    description:
      "App Store and Google Play badges in MailRecap red and navy. Use as overlays or static graphics in your posts.",
    category: "elements",
    platforms: ["all", "tiktok", "instagram", "facebook", "youtube"],
    specs: "Various sizes · SVG + PNG",
    accentColor: "#D42232",
    bgGradient: "from-[#D42232] to-[#a81b28]",
    icon: "⬇",
  },
  {
    id: "el-caption-card",
    title: "Caption Card — Story Format",
    description:
      "Pull-quote style caption cards for Stories. Drop your key message over a MailRecap-branded background with subtle texture.",
    category: "elements",
    platforms: ["instagram", "facebook"],
    specs: "1080 × 1920 px · PNG",
    accentColor: "#0d9488",
    bgGradient: "from-[#0d9488] to-[#0C1461]",
    icon: "❝",
  },
  {
    id: "el-hashtag-kit",
    title: "Hashtag & CTA Copy Kit",
    description:
      "Suggested hashtags, caption starters, and call-to-action phrases per platform. Copy-paste-ready text doc.",
    category: "elements",
    platforms: ["all", "tiktok", "instagram", "facebook", "youtube"],
    specs: "TXT / MD doc",
    accentColor: "#0C1461",
    bgGradient: "from-[#E8EAF2] to-white",
    icon: "#",
  },
  // Guides
  {
    id: "guide-tiktok",
    title: "TikTok Safe Zone Guide",
    description:
      "Full annotated safe zone overlay for TikTok 9:16. Shows UI chrome, text-safe areas, and no-go zones for logos and CTAs.",
    category: "guide",
    platforms: ["tiktok"],
    specs: "1080 × 1920 px · PDF + PNG overlay",
    accentColor: "#010101",
    bgGradient: "from-[#010101] to-[#2d2d2d]",
    icon: "⊞",
  },
  {
    id: "guide-ig",
    title: "Instagram Safe Zone Guide",
    description:
      "Safe zones for Feed (1:1, 4:5), Reels (9:16), and Stories (9:16). Includes Reels UI chrome and caption overlaps.",
    category: "guide",
    platforms: ["instagram"],
    specs: "3-page PDF + individual PNG overlays",
    accentColor: "#E1306C",
    bgGradient: "from-[#833ab4] via-[#E1306C] to-[#F77737]",
    icon: "⊞",
  },
  {
    id: "guide-yt",
    title: "YouTube Safe Zone Guide",
    description:
      "Safe zones for YouTube 16:9 videos. End screen clickable area map, thumbnail zone, and subscribe button placement.",
    category: "guide",
    platforms: ["youtube"],
    specs: "2-page PDF + PNG overlays",
    accentColor: "#FF0000",
    bgGradient: "from-[#FF0000] to-[#cc0000]",
    icon: "⊞",
  },
  {
    id: "guide-fb",
    title: "Facebook Safe Zone Guide",
    description:
      "Safe zones for Facebook Feed video (16:9, 1:1) and Reels (9:16). Includes mobile UI chrome mapping.",
    category: "guide",
    platforms: ["facebook"],
    specs: "2-page PDF + PNG overlays",
    accentColor: "#1877F2",
    bgGradient: "from-[#1877F2] to-[#0d5ecc]",
    icon: "⊞",
  },
];

const PLATFORM_META: Record<Platform, { label: string; color: string; dot: string }> = {
  all: { label: "All Platforms", color: "bg-slate-100 text-slate-700", dot: "bg-slate-400" },
  tiktok: { label: "TikTok", color: "bg-black text-white", dot: "bg-white" },
  instagram: { label: "Instagram", color: "bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white", dot: "bg-white" },
  facebook: { label: "Facebook", color: "bg-blue-600 text-white", dot: "bg-white" },
  youtube: { label: "YouTube", color: "bg-red-600 text-white", dot: "bg-white" },
};

const CATEGORY_META: Record<TemplateCategory, { label: string; icon: string }> = {
  "end-card": { label: "End Cards", icon: "▶" },
  lockup: { label: "Logo Lockups", icon: "✉" },
  elements: { label: "Elements", icon: "☰" },
  guide: { label: "Safe Zone Guides", icon: "⊞" },
};

// ─── Brand Color Swatches ──────────────────────────────────────────────────────

const BRAND_COLORS = [
  { name: "MailRecap Red", hex: "#D42232", pantone: "Red 032 C", usage: "Primary CTA, logo icon, accents" },
  { name: "MailRecap Navy", hex: "#0C1461", pantone: "280 C", usage: "Primary text, wordmark, backgrounds" },
  { name: "Navy Light", hex: "#1a2480", pantone: "286 C", usage: "Hover states, secondary backgrounds" },
  { name: "Brand BG", hex: "#E8EAF2", pantone: "—", usage: "Section backgrounds, light fills" },
  { name: "Teal Accent", hex: "#0d9488", pantone: "7474 C", usage: "Feature highlights, secondary CTAs" },
  { name: "White", hex: "#FFFFFF", pantone: "—", usage: "Backgrounds, reversed type" },
];

const BRAND_TYPOGRAPHY = [
  { name: "Pacifico", role: "Display / Logo", usage: "Headlines, wordmark, hero type", sampleSize: "text-4xl", weight: "400" },
  { name: "Playfair Display", role: "Serif Accent", usage: "Pull quotes, feature subheads", sampleSize: "text-2xl", weight: "400–700" },
  { name: "Inter", role: "Body / UI", usage: "All body copy, labels, nav items", sampleSize: "text-base", weight: "400–700" },
];

// ─── Sub-components ────────────────────────────────────────────────────────────

function TemplateCard({ template }: { template: Template }) {
  const isLight = template.id.includes("horizontal") && !template.id.includes("dark");

  return (
    <div className="group rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white flex flex-col">
      {/* Preview */}
      <div className={`relative h-40 bg-gradient-to-br ${template.bgGradient} flex items-center justify-center overflow-hidden`}>
        <span
          className={`text-5xl opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-500 ${isLight ? "text-slate-800" : "text-white"}`}
        >
          {template.icon}
        </span>
        {/* Category badge */}
        <span className="absolute top-3 left-3 text-xs font-semibold bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full">
          {CATEGORY_META[template.category].label}
        </span>
        {/* Platform dots */}
        <div className="absolute top-3 right-3 flex gap-1">
          {template.platforms
            .filter((p) => p !== "all")
            .map((p) => (
              <span
                key={p}
                className="text-[10px] font-bold bg-white/20 backdrop-blur-sm text-white px-1.5 py-0.5 rounded"
              >
                {p.charAt(0).toUpperCase()}
              </span>
            ))}
          {template.platforms.includes("all") && (
            <span className="text-[10px] font-bold bg-white/20 backdrop-blur-sm text-white px-1.5 py-0.5 rounded">
              ALL
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-semibold text-slate-900 text-base mb-1 leading-snug">{template.title}</h3>
        <p className="text-sm text-slate-500 leading-relaxed flex-1">{template.description}</p>
        <div className="mt-4 flex items-center justify-between gap-3">
          <span className="text-xs text-slate-400 font-mono">{template.specs}</span>
          <button className="shrink-0 text-xs font-semibold text-white px-3 py-1.5 rounded-lg bg-[#D42232] hover:bg-[#a81b28] transition-colors">
            Download
          </button>
        </div>
      </div>
    </div>
  );
}

function ColorSwatch({ color }: { color: typeof BRAND_COLORS[0] }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="h-28" style={{ backgroundColor: color.hex }} />
      <div className="p-4 bg-white">
        <div className="flex items-center justify-between mb-1">
          <span className="font-semibold text-slate-900 text-sm">{color.name}</span>
          <span className="font-mono text-xs text-slate-500 bg-slate-50 px-2 py-0.5 rounded">
            {color.hex}
          </span>
        </div>
        {color.pantone !== "—" && (
          <p className="text-xs text-slate-400 mb-1">Pantone {color.pantone}</p>
        )}
        <p className="text-xs text-slate-500 leading-snug">{color.usage}</p>
      </div>
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────

export default function CreatorsLabClient() {
  const [mainTab, setMainTab] = useState<MainTab>("branding");
  const [platform, setPlatform] = useState<Platform>("all");
  const [category, setCategory] = useState<TemplateCategory | "all">("all");

  const filteredTemplates = TEMPLATES.filter((t) => {
    const platformMatch =
      platform === "all" || t.platforms.includes(platform) || t.platforms.includes("all");
    const categoryMatch = category === "all" || t.category === category;
    return platformMatch && categoryMatch;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0C1461] via-[#1a2480] to-[#0C1461] text-white py-24 px-4">
        {/* Animated background orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10"
            style={{
              background: "radial-gradient(circle, #D42232 0%, transparent 70%)",
              animation: "pulse 4s ease-in-out infinite",
            }}
          />
          <div
            className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full opacity-10"
            style={{
              background: "radial-gradient(circle, #0d9488 0%, transparent 70%)",
              animation: "pulse 6s ease-in-out infinite 2s",
            }}
          />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm font-medium mb-6">
            <span className="text-[#D42232]">✦</span>
            <span>For Creators</span>
          </div>
          <h1
            className="text-5xl sm:text-7xl font-bold mb-4 tracking-tight"
            style={{ fontFamily: "var(--font-pacifico)" }}
          >
            Creators Lab
          </h1>
          <p className="text-xl sm:text-2xl text-blue-200 max-w-2xl mx-auto leading-relaxed mb-8">
            Everything you need to bring MailRecap to your audience — branding assets,
            platform templates, and guides built for creators.
          </p>
          <div className="flex flex-wrap gap-3 justify-center text-sm">
            {(["tiktok", "instagram", "facebook", "youtube"] as Platform[]).map((p) => (
              <span
                key={p}
                className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-3 py-1.5"
              >
                <span className="w-2 h-2 rounded-full bg-white/60" />
                {PLATFORM_META[p].label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tab Navigation ───────────────────────────────────────────────── */}
      <div className="sticky top-16 z-40 bg-white border-b border-slate-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-0">
            {(
              [
                { id: "branding", label: "MailRecap Branding", icon: "✉" },
                { id: "social", label: "Social Media Elements", icon: "◎" },
              ] as { id: MainTab; label: string; icon: string }[]
            ).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setMainTab(tab.id)}
                className={`relative flex items-center gap-2 px-6 py-4 text-sm font-semibold transition-colors ${
                  mainTab === tab.id
                    ? "text-[#D42232]"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                <span>{tab.icon}</span>
                {tab.label}
                {mainTab === tab.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D42232] rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Branding Tab ─────────────────────────────────────────────────── */}
      {mainTab === "branding" && (
        <div className="max-w-6xl mx-auto px-4 py-16 space-y-20">
          {/* Colors */}
          <section>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Brand Colors</h2>
              <p className="text-slate-500">
                Use these exact values wherever MailRecap appears in your content. Don't
                approximate—accurate colors build brand trust.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {BRAND_COLORS.map((c) => (
                <ColorSwatch key={c.hex} color={c} />
              ))}
            </div>
          </section>

          {/* Typography */}
          <section>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Typography</h2>
              <p className="text-slate-500">
                MailRecap uses Google Fonts across all surfaces — all freely available for
                creator use.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {BRAND_TYPOGRAPHY.map((font) => (
                <div
                  key={font.name}
                  className="rounded-2xl border border-slate-100 p-6 hover:shadow-md transition-shadow"
                >
                  <p
                    className={`${font.sampleSize} text-[#0C1461] mb-3 leading-tight`}
                    style={
                      font.name === "Pacifico"
                        ? { fontFamily: "var(--font-pacifico)" }
                        : font.name === "Playfair Display"
                        ? { fontFamily: "var(--font-playfair)", fontWeight: 700 }
                        : {}
                    }
                  >
                    MailRecap
                  </p>
                  <p className="font-bold text-slate-900 text-sm">{font.name}</p>
                  <p className="text-xs text-[#D42232] font-semibold mb-1">{font.role}</p>
                  <p className="text-xs text-slate-500">{font.usage}</p>
                  <p className="text-xs text-slate-400 mt-1">Weight: {font.weight}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Brand Voice */}
          <section>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Brand Voice</h2>
              <p className="text-slate-500">
                Sound like MailRecap when you talk about us.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  tone: "Clear & Direct",
                  desc: "Say exactly what MailRecap does. No fluff. Lead with the benefit.",
                  do: "\"Never miss a bill buried in your mailbox again.\"",
                  dont: "\"An innovative mail management solution for today's busy professional.\"",
                },
                {
                  tone: "Trustworthy",
                  desc: "Physical mail is personal. Sound like someone the user can trust with it.",
                  do: "\"Your mail, scanned and summarized — only for you.\"",
                  dont: "\"We collect, process, and analyze your incoming mail data.\"",
                },
                {
                  tone: "Effortless",
                  desc: "MailRecap removes friction. Reflect that energy in copy and pacing.",
                  do: "\"In seconds. Not stack-sorting Sunday sessions.\"",
                  dont: "\"Follow these 7 steps to set up your mail management workflow.\"",
                },
                {
                  tone: "Warm & Human",
                  desc: "We talk to real people with real mail problems — not enterprise buyers.",
                  do: "\"Your mailbox doesn't have to feel like homework.\"",
                  dont: "\"Leverage our AI-powered mail digitization infrastructure.\"",
                },
              ].map((item) => (
                <div
                  key={item.tone}
                  className="rounded-2xl border border-slate-100 p-6 hover:shadow-md transition-shadow"
                >
                  <h3 className="font-bold text-slate-900 mb-1">{item.tone}</h3>
                  <p className="text-sm text-slate-500 mb-4">{item.desc}</p>
                  <div className="space-y-2">
                    <div className="flex gap-2 items-start">
                      <span className="text-green-600 text-sm font-bold mt-0.5 shrink-0">✓</span>
                      <p className="text-sm text-slate-700 italic">{item.do}</p>
                    </div>
                    <div className="flex gap-2 items-start">
                      <span className="text-red-500 text-sm font-bold mt-0.5 shrink-0">✗</span>
                      <p className="text-sm text-slate-400 line-through">{item.dont}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Download CTA */}
          <section className="rounded-3xl bg-gradient-to-br from-[#0C1461] to-[#1a2480] text-white p-10 text-center">
            <h2 className="text-2xl font-bold mb-2">Download the Full Brand Kit</h2>
            <p className="text-blue-200 mb-6 max-w-md mx-auto">
              Logos in all formats (SVG, PNG, PDF), color swatches (ASE, ACO), and brand
              guidelines PDF — all in one zip.
            </p>
            <button className="bg-[#D42232] hover:bg-[#a81b28] text-white font-semibold px-8 py-3 rounded-xl transition-colors">
              Download Brand Kit ↓
            </button>
          </section>
        </div>
      )}

      {/* ── Social Media Elements Tab ─────────────────────────────────────── */}
      {mainTab === "social" && (
        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Filters */}
          <div className="mb-10 space-y-4">
            {/* Platform Filter */}
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                Platform
              </p>
              <div className="flex flex-wrap gap-2">
                {(["all", "tiktok", "instagram", "facebook", "youtube"] as Platform[]).map(
                  (p) => (
                    <button
                      key={p}
                      onClick={() => setPlatform(p)}
                      className={`text-sm font-semibold px-4 py-2 rounded-xl transition-all ${
                        platform === p
                          ? "bg-[#0C1461] text-white shadow-sm scale-[1.02]"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      }`}
                    >
                      {PLATFORM_META[p].label}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                Type
              </p>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setCategory("all")}
                  className={`text-sm font-semibold px-4 py-2 rounded-xl transition-all ${
                    category === "all"
                      ? "bg-[#D42232] text-white shadow-sm scale-[1.02]"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  All Types
                </button>
                {(["end-card", "lockup", "elements", "guide"] as TemplateCategory[]).map(
                  (c) => (
                    <button
                      key={c}
                      onClick={() => setCategory(c)}
                      className={`text-sm font-semibold px-4 py-2 rounded-xl transition-all ${
                        category === c
                          ? "bg-[#D42232] text-white shadow-sm scale-[1.02]"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      }`}
                    >
                      {CATEGORY_META[c].icon} {CATEGORY_META[c].label}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Results count */}
          <p className="text-sm text-slate-400 mb-6">
            {filteredTemplates.length} asset{filteredTemplates.length !== 1 ? "s" : ""}
          </p>

          {/* Template Grid */}
          {filteredTemplates.length === 0 ? (
            <div className="text-center py-20 text-slate-400">
              <p className="text-4xl mb-3">◎</p>
              <p className="font-medium">No templates match this filter.</p>
              <p className="text-sm mt-1">Try a different platform or type.</p>
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filteredTemplates.map((t) => (
                <TemplateCard key={t.id} template={t} />
              ))}
            </div>
          )}

          {/* How to Use Section */}
          <section className="mt-20">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">How to Use These Assets</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  step: "1",
                  title: "Download your assets",
                  desc: "Grab the templates for your platform. Each pack includes a specs doc with exact placement instructions.",
                  color: "from-[#D42232] to-[#a81b28]",
                },
                {
                  step: "2",
                  title: "Drop into your editor",
                  desc: "PNG/SVG files work in CapCut, Premiere, DaVinci, Canva, Figma — anywhere you edit. Follow safe zone guides.",
                  color: "from-[#0C1461] to-[#1a2480]",
                },
                {
                  step: "3",
                  title: "Ship your content",
                  desc: "Post with the hashtag #MailRecap so we can find and amplify your work. Affiliate links available on request.",
                  color: "from-[#0d9488] to-[#0C1461]",
                },
              ].map((item) => (
                <div key={item.step} className="rounded-2xl border border-slate-100 p-6 hover:shadow-md transition-shadow">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} text-white font-bold flex items-center justify-center text-lg mb-4`}>
                    {item.step}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Affiliate CTA */}
          <div className="mt-12 rounded-3xl bg-gradient-to-br from-[#0d9488] to-[#0C1461] text-white p-10 text-center">
            <h2 className="text-2xl font-bold mb-2">Become a MailRecap Creator Partner</h2>
            <p className="text-teal-100 mb-6 max-w-md mx-auto">
              Earn commission on every download you drive. Get early access to new features,
              dedicated assets, and creator-only support.
            </p>
            <button className="bg-white text-[#0C1461] font-semibold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors">
              Apply to the Partner Program →
            </button>
          </div>
        </div>
      )}

      {/* Keyframes */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.1; }
          50% { transform: scale(1.15); opacity: 0.18; }
        }
      `}</style>
    </div>
  );
}

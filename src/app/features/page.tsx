"use client"

import {
    Zap,
    FileSearch,
    Heart,
    GitCompareArrows,
    Layers,
    SquareStack,
    Clock3,
    Gauge,
    Share2,
    CalendarClock,
    Users,
    Network,
    Search,
    ShieldCheck,
    GitBranch,
} from "lucide-react"
import {
    Container,
    Section,
    SectionHeading,
    SectionLabel,
    Reveal,
    Button,
    Pill,
} from "../../components/site/ui"

const SECTORS = [
    { name: "Semantic", half: "139 days", desc: "Facts & knowledge", lambda: 0.005 },
    { name: "Procedural", half: "87 days", desc: "How-to & skills", lambda: 0.008 },
    { name: "Episodic", half: "46 days", desc: "Events & experiences", lambda: 0.015 },
    { name: "Emotional", half: "35 days", desc: "Feelings & reactions", lambda: 0.02 },
    { name: "Reflective", half: "693 days", desc: "Insight & wisdom", lambda: 0.001 },
]

const PATTERNS = [
    { type: "communication_style", ex: "Prefers concise bullet points" },
    { type: "decision_making", ex: "Data-driven; asks for metrics" },
    { type: "work_preference", ex: "Schedules deep work in the morning" },
    { type: "tool_preference", ex: "Uses TypeScript over JavaScript" },
    { type: "collaboration_style", ex: "Prefers async over meetings" },
]

const BRAIN_FEATURES = [
    { icon: Zap, name: "Priming", desc: "Recording access boosts future retrieval — the recency effect, as an endpoint." },
    { icon: FileSearch, name: "Source memory", desc: "Provenance for every fact: which document, when, at what confidence." },
    { icon: Heart, name: "Emotional memory", desc: "Valence, arousal and intensity scoring, with retrieval by emotional tone." },
    { icon: GitCompareArrows, name: "Contradiction detection", desc: "Finds conflicting facts and distinguishes current value from previous." },
    { icon: Layers, name: "Consolidation", desc: "Merges duplicates at ~85% similarity and resolves conflicts on a schedule." },
    { icon: SquareStack, name: "Working memory", desc: "Session-scoped short-term memory, ~7±2 items, with overflow handling." },
    { icon: Clock3, name: "Context engine", desc: "Infers time-of-day, weekday and work/personal mode to bias retrieval." },
    { icon: Gauge, name: "Predictive pre-loading", desc: "Anticipates likely-needed memories and warms them for instant search." },
    { icon: Share2, name: "Associative spreading", desc: "Activation spreads across related memories through shared topics & entities." },
    { icon: CalendarClock, name: "Temporal reasoning", desc: "A temporal fast-path resolves 'now vs. before' without timeline confusion." },
]

const REASONING = [
    { icon: CalendarClock, name: "Temporal reasoning", desc: "State changes are first-class. “I used to work at Google but now at OpenAI” supersedes the old fact — and queries about “now” return the current truth." },
    { icon: Users, name: "Multi-speaker attribution", desc: "In conversations and transcripts, facts are attributed to the right speaker so memories never get crossed between people." },
    { icon: Network, name: "Knowledge graph", desc: "Entities and relations are extracted automatically into a graph with multi-hop traversal — three engines behind one unified facade." },
    { icon: Search, name: "Hybrid search + RRF", desc: "Five searches run in parallel — facts, triplets, files, keyword, reminders — fused with reciprocal-rank fusion and source weighting." },
    { icon: GitBranch, name: "Cross-encoder reranking", desc: "Top candidates are reranked by Cohere rerank v4 (Gemini fallback) so the most relevant evidence rises before synthesis." },
    { icon: ShieldCheck, name: "Answer verification", desc: "Synthesized answers are cross-checked against your facts for grounding — low confidence falls back instead of hallucinating." },
]

const ENDPOINTS = [
    ["/v1/save", "Save anything — async by default"],
    ["/v1/ask", "Full brain pipeline, verified answer"],
    ["/v1/search", "Hybrid semantic + keyword search"],
    ["/v1/query", "Multi-strategy search + reminders"],
    ["/v1/facts", "Structured user facts"],
    ["/v1/profile", "Assembled profile + synapses"],
    ["/v1/graph", "Knowledge graph"],
    ["/v1/remind", "Create a context reminder"],
    ["/v1/synapses", "Learned behavioral patterns"],
    ["/v1/relations", "Fact relations"],
    ["/v1/entities", "Named entities"],
    ["/v1/forget", "Delete or fully erase data"],
]

export default function FeaturesPage() {
    return (
        <main className="bg-white">
            {/* Hero */}
            <section className="relative px-6 pb-8 pt-36 md:pt-44">
                <div className="hairline-grid mask-fade-b pointer-events-none absolute inset-0 opacity-70" />
                <Container className="relative">
                    <Reveal>
                        <Pill>Features</Pill>
                    </Reveal>
                    <Reveal delay={0.06}>
                        <h1 className="mt-6 max-w-3xl font-display text-[2.75rem] leading-[1.02] text-zinc-950 md:text-7xl">
                            Everything Hypersave <span className="text-zinc-300">remembers</span>.
                        </h1>
                    </Reveal>
                    <Reveal delay={0.12}>
                        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-500">
                            A cognitive architecture, not a vector store. Memory sectors that decay
                            like yours, patterns it learns on its own, proactive recall, a knowledge
                            graph, temporal reasoning, and answers it verifies before returning.
                        </p>
                    </Reveal>
                </Container>
            </section>

            {/* Memory model */}
            <Section className="border-t border-zinc-200">
                <Container>
                    <SectionLabel index="01 / 05">The memory model</SectionLabel>
                    <SectionHeading
                        title={<>Five sectors. Five <span className="text-accent">decay curves</span>.</>}
                        lead="Each memory is filed into a cognitive sector with its own forgetting rate. Salience — reinforced by access and emotion — slows decay for what matters."
                    />
                    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                        {SECTORS.map((s, i) => (
                            <Reveal key={s.name} delay={i * 0.06}>
                                <div className="h-full rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
                                    <h4 className="text-xl font-semibold text-zinc-950">{s.name}</h4>
                                    <p className="mt-1 text-sm text-zinc-500">{s.desc}</p>
                                    <DecayCurve lambda={s.lambda} />
                                    <div className="mt-4 flex items-center justify-between border-t border-zinc-100 pt-4">
                                        <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-zinc-400">half-life</span>
                                        <span className="font-mono text-xs text-accent">{s.half}</span>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Synapses */}
            <Section className="border-t border-zinc-200 bg-zinc-50">
                <Container>
                    <SectionLabel index="02 / 05">Self-learning · synapses</SectionLabel>
                    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                        <SectionHeading
                            title={<>Patterns, not <span className="text-accent">tags</span>.</>}
                            lead="Synapses capture implicit behavior — how you communicate, decide and work — inferred from interactions and scored by confidence and evidence. Refreshed automatically and injected into your profile for any model to use."
                        />
                        <Reveal>
                            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
                                <div className="grid grid-cols-[1fr_1.2fr] border-b border-zinc-200 bg-zinc-50 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-400">
                                    <span>Pattern type</span>
                                    <span>Example</span>
                                </div>
                                {PATTERNS.map((p) => (
                                    <div key={p.type} className="grid grid-cols-[1fr_1.2fr] items-center border-b border-zinc-100 px-5 py-4 last:border-0">
                                        <span className="font-mono text-[12px] text-accent">{p.type}</span>
                                        <span className="text-sm text-zinc-700">{p.ex}</span>
                                    </div>
                                ))}
                            </div>
                        </Reveal>
                    </div>
                </Container>
            </Section>

            {/* Proactive */}
            <Section className="border-t border-zinc-200">
                <Container>
                    <SectionLabel index="03 / 05">Proactive intelligence</SectionLabel>
                    <SectionHeading
                        title={<>Recall that comes <span className="text-accent">to you</span>.</>}
                        lead="Prospective memory that fires on its own — reminders triggered by keyword, topic, entity or time, a weekly watchlist of blockers, and alerts when new information contradicts the old."
                    />
                    <div className="mt-12 grid gap-4 md:grid-cols-3">
                        {[
                            { k: "Triggered reminders", v: "Bind a reminder to keywords, a topic, an entity or a moment. It surfaces exactly when the context reappears." },
                            { k: "Weekly watchlist", v: "Ask “what should I watch this week?” and Hypersave surfaces stale commitments, open loops and looming blockers." },
                            { k: "Contradiction alerts", v: "When a fresh fact disagrees with a stored one, Hypersave flags the conflict and tracks the supersession." },
                        ].map((p, i) => (
                            <Reveal key={p.k} delay={i * 0.06}>
                                <div className="h-full rounded-2xl border border-zinc-200 bg-white p-7 shadow-sm">
                                    <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">{p.k}</span>
                                    <p className="mt-4 text-sm leading-relaxed text-zinc-500">{p.v}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Brain features */}
            <Section className="border-t border-zinc-200 bg-zinc-50">
                <Container>
                    <SectionLabel index="04 / 05">Brain features</SectionLabel>
                    <SectionHeading
                        title="The cognitive toolkit."
                        lead="Ten human-memory mechanisms, each exposed as its own set of endpoints under /v1/brain."
                    />
                    <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 sm:grid-cols-2 lg:grid-cols-3">
                        {BRAIN_FEATURES.map((f, i) => (
                            <Reveal key={f.name} delay={(i % 3) * 0.04}>
                                <div className="group h-full bg-white p-7 transition-colors hover:bg-zinc-50">
                                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
                                        <f.icon className="h-5 w-5" strokeWidth={1.6} />
                                    </span>
                                    <h4 className="mt-5 text-base font-semibold text-zinc-950">{f.name}</h4>
                                    <p className="mt-2 text-sm leading-relaxed text-zinc-500">{f.desc}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Reasoning */}
            <Section className="border-t border-zinc-200">
                <Container>
                    <SectionLabel index="05 / 05">Reasoning & retrieval</SectionLabel>
                    <SectionHeading
                        title={<>How it finds the <span className="text-accent">truth</span>.</>}
                        lead="The retrieval path is where Hypersave separates from RAG — temporal awareness, multi-speaker attribution, a real knowledge graph, hybrid fusion, reranking and verification."
                    />
                    <div className="mt-12 grid gap-4 md:grid-cols-2">
                        {REASONING.map((r, i) => (
                            <Reveal key={r.name} delay={(i % 2) * 0.05}>
                                <div className="flex h-full gap-5 rounded-2xl border border-zinc-200 bg-white p-7 shadow-sm">
                                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                                        <r.icon className="h-5 w-5" strokeWidth={1.6} />
                                    </span>
                                    <div>
                                        <h4 className="text-lg font-semibold text-zinc-950">{r.name}</h4>
                                        <p className="mt-2 text-sm leading-relaxed text-zinc-500">{r.desc}</p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Endpoints */}
            <Section className="border-t border-zinc-200 bg-zinc-50">
                <Container>
                    <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
                        <SectionHeading
                            eyebrow="Universal ingestion & API"
                            title="One graph. Any input."
                            lead="Web pages, YouTube, PDFs, documents, images and raw text all become memory — then reach it through a clean, async-first API."
                        />
                        <Reveal>
                            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
                                {ENDPOINTS.map(([ep, desc], i) => (
                                    <div key={ep} className={`grid grid-cols-[auto_1fr] items-center gap-4 px-5 py-3.5 ${i % 2 ? "bg-zinc-50/60" : "bg-white"}`}>
                                        <code className="font-mono text-[12.5px] text-accent">{ep}</code>
                                        <span className="text-right text-[13px] text-zinc-500">{desc}</span>
                                    </div>
                                ))}
                            </div>
                        </Reveal>
                    </div>
                </Container>
            </Section>

            {/* CTA */}
            <Section className="border-t border-zinc-200">
                <Container>
                    <div className="flex flex-col items-center gap-8 text-center">
                        <Reveal>
                            <h2 className="font-display text-4xl text-zinc-950 md:text-6xl">See it on your own data.</h2>
                        </Reveal>
                        <Reveal delay={0.08}>
                            <div className="flex flex-col gap-3 sm:flex-row">
                                <Button href="https://platform.hypersave.io/signup" size="lg" arrow>Get your API key</Button>
                                <Button href="/how-it-works" variant="ghost" size="lg">How it works</Button>
                            </div>
                        </Reveal>
                    </div>
                </Container>
            </Section>
        </main>
    )
}

function DecayCurve({ lambda }: { lambda: number }) {
    const w = 200
    const h = 56
    const days = 365
    const steps = 40
    const pts: string[] = []
    for (let i = 0; i <= steps; i++) {
        const t = (i / steps) * days
        const s = Math.exp(-lambda * t)
        const x = (i / steps) * w
        const y = h - s * (h - 4) - 2
        pts.push(`${x.toFixed(1)},${y.toFixed(1)}`)
    }
    const linePath = `M${pts.join(" L")}`
    const areaPath = `${linePath} L${w},${h} L0,${h} Z`
    return (
        <svg viewBox={`0 0 ${w} ${h}`} className="mt-5 w-full" preserveAspectRatio="none">
            <defs>
                <linearGradient id={`fg-${lambda}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0d9488" stopOpacity="0.22" />
                    <stop offset="100%" stopColor="#0d9488" stopOpacity="0" />
                </linearGradient>
            </defs>
            <path d={areaPath} fill={`url(#fg-${lambda})`} />
            <path d={linePath} fill="none" stroke="#0d9488" strokeWidth="1.5" />
        </svg>
    )
}

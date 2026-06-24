"use client"

import { motion } from "framer-motion"
import { Moon, FlaskConical, Check } from "lucide-react"
import {
    Container,
    Section,
    SectionHeading,
    SectionLabel,
    Reveal,
    Button,
    Pill,
} from "../../components/site/ui"

const PIPELINE = [
    { n: "01", name: "Validate", desc: "Security check binds every query to its owner — no cross-user leakage." },
    { n: "02", name: "Profile fast-path", desc: "Broad “who am I” questions short-circuit straight to the compiled profile." },
    { n: "03", name: "HyDE expansion", desc: "A hypothetical answer is generated to widen and sharpen the search vector." },
    { n: "04", name: "Temporal fast-path", desc: "Strong time-matches (≥ 0.85) return early with the current-truth answer." },
    { n: "05", name: "Entity & graph routing", desc: "Named entities trigger up to 3-hop traversal across the knowledge graph." },
    { n: "06", name: "Multi-hop detection", desc: "Nine patterns spot questions that need chained reasoning across facts." },
    { n: "07", name: "Parallel search ×5", desc: "Facts, triplets, file search, keyword and reminders run concurrently." },
    { n: "08", name: "RRF fusion", desc: "Reciprocal-rank fusion merges sources with weighted priority." },
    { n: "09", name: "Reranking", desc: "Cohere rerank v4 (Gemini fallback) floats the strongest evidence up." },
    { n: "10", name: "Context assembly", desc: "Ten priority-ordered sections are composed into the synthesis prompt." },
    { n: "11", name: "Synthesis", desc: "Azure OpenAI gpt-5-mini writes the answer from assembled context." },
    { n: "12", name: "Verification", desc: "Grounding, echo, hedge and type checks gate the answer and score it." },
]

const ARCHITECTURE = [
    { layer: "API", impl: "Hono", note: "160+ endpoints · auth · rate limiting" },
    { layer: "Memory core", impl: "HypersaveMemory", note: "orchestration & lifecycle" },
    { layer: "Brain", impl: "Retrieval pipeline", note: "the 12-stage ask path" },
    { layer: "Services", impl: "Facts · Graph · Temporal · Synapses", note: "specialized cognition" },
    { layer: "Database", impl: "Convex", note: "51 tables · 7 vector indexes" },
]

const WORKERS = [
    { name: "Synapse learning", cadence: "every 6h + on idle", desc: "Re-derives behavioral patterns from recent activity." },
    { name: "Memory consolidation", cadence: "every 12h", desc: "Merges near-duplicates at 85% similarity, resolves conflicts." },
    { name: "Salience decay", cadence: "every 8h", desc: "Applies each sector's forgetting curve; reinforces what's used." },
    { name: "Waypoint refresh", cadence: "daily · 3 AM", desc: "Rebuilds graph waypoints for faster multi-hop traversal." },
    { name: "Community detection", cadence: "weekly · Sun 4 AM", desc: "Clusters the entity graph into topical communities." },
]

const HARNESS_PROVES = [
    "Account creation & auth",
    "Realistic memory ingestion",
    "Identity & profile recall",
    "Current vs. past truth",
    "Proactive reminders & synapses",
    "Multi-user data isolation",
    "Export & hard-delete",
    "MCP & SDK contracts",
    "Browser surface health",
]

const PIPELINES = [
    { name: "offline-ci", use: "Deterministic, no network — every PR.", time: "seconds" },
    { name: "quick-prod", use: "Fast production confidence checks.", time: "1–2 min" },
    { name: "browser-prod", use: "Chromium screenshots of app/docs.", time: "2–4 min" },
    { name: "full-prod", use: "Release gate with MCP + SDK contracts.", time: "3–8 min" },
]

export default function HowItWorksPage() {
    return (
        <main className="bg-white">
            {/* Hero */}
            <section className="relative px-6 pb-8 pt-36 md:pt-44">
                <div className="hairline-grid mask-fade-b pointer-events-none absolute inset-0 opacity-70" />
                <Container className="relative">
                    <Reveal>
                        <Pill>How it works</Pill>
                    </Reveal>
                    <Reveal delay={0.06}>
                        <h1 className="mt-6 max-w-3xl font-display text-[2.75rem] leading-[1.02] text-zinc-950 md:text-7xl">
                            From a question to a <span className="text-accent">cited answer</span>.
                        </h1>
                    </Reveal>
                    <Reveal delay={0.12}>
                        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-500">
                            Every <span className="font-mono text-accent">/v1/ask</span> runs a
                            twelve-stage pipeline. Behind it, a layered architecture and background
                            workers keep memory sharp — and a launch harness proves it all works.
                        </p>
                    </Reveal>
                </Container>
            </section>

            {/* Pipeline */}
            <Section className="border-t border-zinc-200">
                <Container>
                    <SectionLabel index="01 / 04">The ask pipeline</SectionLabel>
                    <SectionHeading
                        title={<>Twelve stages, <span className="text-accent">one call</span>.</>}
                        lead="You make a single request. Inside, Hypersave expands, routes, searches in parallel, fuses, reranks, synthesizes — and verifies before it answers."
                    />
                    <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 sm:grid-cols-2 lg:grid-cols-3">
                        {PIPELINE.map((p, i) => (
                            <Reveal key={p.n} delay={(i % 3) * 0.04}>
                                <div className="h-full bg-white p-7">
                                    <div className="flex items-center gap-3">
                                        <span className="font-mono text-xs text-accent">{p.n}</span>
                                        <span className="h-px flex-1 bg-zinc-200" />
                                    </div>
                                    <h4 className="mt-4 text-base font-semibold text-zinc-950">{p.name}</h4>
                                    <p className="mt-2 text-sm leading-relaxed text-zinc-500">{p.desc}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Architecture */}
            <Section className="border-t border-zinc-200 bg-zinc-50">
                <Container>
                    <SectionLabel index="02 / 04">Architecture</SectionLabel>
                    <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
                        <SectionHeading
                            title={<>Layers, top to <span className="text-accent">bottom</span>.</>}
                            lead="A request enters the API and descends through orchestration, the brain, specialized services and finally storage — each layer with a single responsibility."
                        />
                        <Reveal>
                            <div className="space-y-2">
                                {ARCHITECTURE.map((a, i) => (
                                    <motion.div
                                        key={a.layer}
                                        initial={{ opacity: 0, x: 14 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: i * 0.07 }}
                                        className="flex items-center justify-between rounded-xl border border-zinc-200 bg-white px-5 py-4 shadow-sm"
                                        style={{ marginLeft: `${i * 14}px` }}
                                    >
                                        <div>
                                            <div className="text-sm font-semibold text-zinc-950">{a.layer}</div>
                                            <div className="font-mono text-[11px] text-accent">{a.impl}</div>
                                        </div>
                                        <div className="hidden text-right text-[11px] text-zinc-400 sm:block">{a.note}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </Reveal>
                    </div>
                </Container>
            </Section>

            {/* Sleep cycle */}
            <Section className="border-t border-zinc-200">
                <Container>
                    <SectionLabel index="03 / 04">The sleep cycle</SectionLabel>
                    <div className="mb-10 flex items-start gap-4">
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent-soft text-accent">
                            <Moon className="h-5 w-5" strokeWidth={1.6} />
                        </span>
                        <div>
                            <h2 className="font-display text-[2rem] leading-[1.05] text-zinc-950 md:text-[2.6rem]">
                                It gets smarter while you&apos;re away.
                            </h2>
                            <p className="mt-3 max-w-2xl text-lg text-zinc-500">
                                Like a brain consolidating during sleep, background workers run on
                                their own cadence — learning patterns, merging duplicates, decaying
                                the irrelevant and reshaping the graph.
                            </p>
                        </div>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {WORKERS.map((w, i) => (
                            <Reveal key={w.name} delay={(i % 3) * 0.05}>
                                <div className="h-full rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
                                    <h4 className="text-base font-semibold text-zinc-950">{w.name}</h4>
                                    <span className="mt-2 inline-block rounded-full bg-accent-soft px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-accent">
                                        {w.cadence}
                                    </span>
                                    <p className="mt-4 text-sm leading-relaxed text-zinc-500">{w.desc}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Harness */}
            <Section className="border-t border-zinc-200 bg-zinc-50">
                <Container>
                    <SectionLabel index="04 / 04">The launch harness</SectionLabel>
                    <div className="grid gap-12 lg:grid-cols-2">
                        <div>
                            <div className="flex items-start gap-4">
                                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent-soft text-accent">
                                    <FlaskConical className="h-5 w-5" strokeWidth={1.6} />
                                </span>
                                <div>
                                    <h2 className="font-display text-[2rem] leading-[1.05] text-zinc-950 md:text-[2.6rem]">
                                        Proof it works.
                                    </h2>
                                    <p className="mt-3 max-w-md text-lg leading-relaxed text-zinc-500">
                                        Hypersave ships with an agentic launch and evaluation harness —
                                        realistic memory journeys, answer-quality scoring, browser
                                        probes, MCP & SDK contract checks, and replayable reports.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-8 grid grid-cols-2 gap-3">
                                {PIPELINES.map((p) => (
                                    <div key={p.name} className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
                                        <code className="font-mono text-[12px] text-accent">{p.name}</code>
                                        <p className="mt-2 text-[12px] leading-snug text-zinc-500">{p.use}</p>
                                        <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.1em] text-zinc-400">{p.time}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <Reveal>
                            <div className="rounded-2xl border border-zinc-200 bg-white p-7 shadow-sm">
                                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-zinc-400">What it proves</p>
                                <ul className="mt-6 space-y-3.5">
                                    {HARNESS_PROVES.map((h) => (
                                        <li key={h} className="flex items-center gap-3 text-sm text-zinc-700">
                                            <Check className="h-4 w-4 shrink-0 text-accent" strokeWidth={2.2} />
                                            {h}
                                        </li>
                                    ))}
                                </ul>
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
                            <h2 className="font-display text-4xl text-zinc-950 md:text-6xl">Build on it.</h2>
                        </Reveal>
                        <Reveal delay={0.08}>
                            <div className="flex flex-col gap-3 sm:flex-row">
                                <Button href="/developers" size="lg" arrow>Developer quickstart</Button>
                                <Button href="https://platform.hypersave.io/signup" variant="ghost" size="lg">Get your API key</Button>
                            </div>
                        </Reveal>
                    </div>
                </Container>
            </Section>
        </main>
    )
}

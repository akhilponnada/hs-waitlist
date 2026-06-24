"use client"

import React from "react"
import { motion } from "framer-motion"
import {
    Globe,
    Youtube,
    FileText,
    Github,
    MessagesSquare,
    ImageIcon,
    ArrowRight,
    Repeat2,
    Lock,
    Layers,
    Check,
    Sparkles,
    BellRing,
    Brain,
} from "lucide-react"
import { OpenAI, Claude, Gemini } from "@lobehub/icons"
import { Integrations } from "../components/site/Integrations"
import {
    Container,
    Section,
    SectionHeading,
    SectionLabel,
    Reveal,
    Button,
    Pill,
    LiveDot,
} from "../components/site/ui"

const PROBLEMS = [
    {
        icon: Repeat2,
        title: "It forgets every session",
        body: "Your assistant starts from zero each conversation. Users repeat themselves, and context dies the moment the chat ends.",
    },
    {
        icon: Lock,
        title: "Its memory is locked in",
        body: "Memory inside ChatGPT or Claude is trapped there. Switch models or ship your own app and everything it knew is gone.",
    },
    {
        icon: Layers,
        title: "RAG returns chunks, not answers",
        body: "Vector similarity isn't relevance. You get fragments to stuff in a prompt — not facts, and no idea if they're even true.",
    },
]

const USE_CASES = [
    {
        title: "Assistants that remember your users",
        body: "Persistent context and per-user profiles, so people come back to an AI that already knows their preferences, history and constraints.",
        accent: true,
    },
    {
        title: "Agents with long-term memory",
        body: "Memory that survives across runs and is shared across your whole agent fleet — so agents stop repeating work and start compounding.",
    },
    {
        title: "Personalized products",
        body: "Every user gets an experience that adapts to them. Generic AI churns; an assistant that learns each person keeps them.",
    },
    {
        title: "Your own second brain",
        body: "Save everything — notes, links, videos, files — and recall any of it in plain language, with cited answers you can trust.",
    },
]

const BRAIN_PILLARS = [
    {
        icon: Sparkles,
        title: "It learns",
        body: "Self-learning synapses infer how you communicate, decide and work — no tagging. Your profile sharpens with every interaction.",
    },
    {
        icon: BellRing,
        title: "It acts",
        body: "Proactive recall: context-triggered reminders, a weekly watchlist of blockers, and alerts when new facts contradict the old.",
    },
    {
        icon: Brain,
        title: "It reasons",
        body: "Temporal reasoning — now vs. before — a knowledge graph, and answers verified against your own facts before they're returned.",
    },
]

const SOURCES = [
    { icon: Globe, className: "text-sky-600" },
    { icon: Youtube, className: "text-red-500" },
    { icon: FileText, className: "text-rose-500" },
    { icon: Github, className: "text-zinc-900" },
    { icon: ImageIcon, className: "text-violet-500" },
    { icon: MessagesSquare, className: "text-emerald-600" },
]

export default function Home() {
    return (
        <main className="bg-white">
            {/* ============================ HERO ============================ */}
            <section className="relative overflow-hidden px-6 pb-16 pt-36 md:pt-44">
                <div className="dot-grid mask-radial pointer-events-none absolute inset-0 opacity-70" />
                <div className="pointer-events-none absolute left-1/2 top-24 h-[28rem] w-[40rem] -translate-x-1/2 rounded-full bg-accent-soft blur-[120px]" />

                <Container className="relative">
                    <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Pill>
                                <LiveDot />
                                The cognitive memory layer · now live
                            </Pill>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                            className="mt-7 text-balance font-display text-[2.75rem] leading-[1.02] text-zinc-950 sm:text-6xl md:text-7xl"
                        >
                            Memory that <span className="text-accent">thinks</span>
                            <br className="hidden sm:block" /> — and works with any model.
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.15 }}
                            className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-500"
                        >
                            Bring your data and Hypersave turns it into memory your AI actually uses —
                            it learns your patterns, recalls with verified answers, and works across
                            every model and app. You own it, not your model vendor.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.25 }}
                            className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
                        >
                            <Button href="https://platform.hypersave.io/signup" size="lg" arrow>
                                Get your API key
                            </Button>
                            <Button href="https://docs.hypersave.io" variant="ghost" size="lg">
                                Read the docs
                            </Button>
                        </motion.div>
                    </div>

                    {/* Works with any model */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-16"
                    >
                        <p className="mb-6 text-center font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-400">
                            Works with any model
                        </p>
                        <Integrations />
                    </motion.div>
                </Container>
            </section>

            {/* ============================ STAT STRIP ============================ */}
            <div className="border-y border-zinc-200 bg-zinc-50">
                <Container>
                    <div className="grid grid-cols-1 divide-y divide-zinc-200 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                        {[
                            { v: "86%", l: "LoCoMo — state-of-the-art recall" },
                            { v: "2 calls", l: "save it, then ask in plain language" },
                            { v: "Any model", l: "OpenAI, Claude, Gemini & beyond" },
                        ].map((s) => (
                            <div key={s.l} className="px-6 py-9 text-center">
                                <div className="font-display text-3xl text-zinc-950 md:text-4xl">{s.v}</div>
                                <div className="mt-2 text-sm text-zinc-500">{s.l}</div>
                            </div>
                        ))}
                    </div>
                </Container>
            </div>

            {/* ============================ PROBLEM ============================ */}
            <Section>
                <Container>
                    <SectionLabel index="01 / 05">The problem</SectionLabel>
                    <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
                        <SectionHeading
                            title={
                                <>
                                    Your AI forgets.
                                    <br />
                                    And its memory isn&apos;t <span className="text-accent">yours</span>.
                                </>
                            }
                            lead="Every AI product hits the same wall: no durable memory, and what little there is gets trapped inside one vendor's ecosystem."
                        />
                        <div className="grid gap-4 sm:grid-cols-1">
                            {PROBLEMS.map((p, i) => (
                                <Reveal key={p.title} delay={i * 0.06}>
                                    <div className="flex gap-4 rounded-2xl border border-zinc-200 bg-white p-5">
                                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700">
                                            <p.icon className="h-5 w-5" strokeWidth={1.6} />
                                        </span>
                                        <div>
                                            <h4 className="text-[15px] font-semibold text-zinc-950">{p.title}</h4>
                                            <p className="mt-1.5 text-sm leading-relaxed text-zinc-500">{p.body}</p>
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>

                    {/* Contrast */}
                    <Reveal>
                        <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 md:grid-cols-2">
                            <div className="bg-zinc-50 p-7">
                                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-400">
                                    Without Hypersave
                                </span>
                                <p className="mt-3 text-lg font-medium text-zinc-400 line-through decoration-zinc-300">
                                    Stores chunks. Starts from zero. Locked to one model.
                                </p>
                            </div>
                            <div className="bg-white p-7">
                                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                                    With Hypersave
                                </span>
                                <p className="mt-3 text-lg font-medium text-zinc-900">
                                    Evolving facts. Remembered for as long as they matter. Yours,
                                    everywhere.
                                </p>
                            </div>
                        </div>
                    </Reveal>
                </Container>
            </Section>

            {/* ============================ HOW (light touch) ============================ */}
            <Section className="border-t border-zinc-200 bg-zinc-50">
                <Container>
                    <SectionLabel index="02 / 05">How it works</SectionLabel>
                    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                        <div>
                            <SectionHeading
                                title={
                                    <>
                                        Bring your data.
                                        <br />
                                        Your AI just <span className="text-accent">knows</span>.
                                    </>
                                }
                                lead="Two endpoints. Save anything; ask in plain language. Hypersave extracts the facts, builds understanding, and returns an answer it has verified against what it knows."
                            />
                            <div className="mt-8">
                                <Button href="/how-it-works" variant="ghost" arrow>
                                    See the full pipeline
                                </Button>
                            </div>
                        </div>
                        <Reveal>
                            <CodeCard />
                        </Reveal>
                    </div>
                </Container>
            </Section>

            {/* ============================ CONNECT / ANY MODEL ============================ */}
            <Section className="border-t border-zinc-200">
                <Container>
                    <SectionLabel index="03 / 05">One memory, everywhere</SectionLabel>
                    <SectionHeading
                        align="center"
                        title={
                            <>
                                Pour in any data. Recall it with <span className="text-accent">any model</span>.
                            </>
                        }
                        lead="Web pages, videos, PDFs, docs, chats and code go in. One portable memory comes out — usable from OpenAI, Claude, Gemini, your own app, or an MCP agent."
                    />
                    <Reveal className="mt-14">
                        <ConnectVisual />
                    </Reveal>
                </Container>
            </Section>

            {/* ============================ USE CASES ============================ */}
            <Section className="border-t border-zinc-200 bg-zinc-50">
                <Container>
                    <SectionLabel index="04 / 05">Use cases</SectionLabel>
                    <SectionHeading
                        title={
                            <>
                                Built for anything that needs to <span className="text-accent">remember</span>.
                            </>
                        }
                        lead="From production AI products to your personal second brain — one memory layer, every use case."
                    />
                    <div className="mt-12 grid gap-4 md:grid-cols-2">
                        {USE_CASES.map((u, i) => (
                            <Reveal key={u.title} delay={(i % 2) * 0.06}>
                                <div
                                    className={
                                        u.accent
                                            ? "h-full rounded-2xl border border-accent/25 bg-accent-soft p-7"
                                            : "h-full rounded-2xl border border-zinc-200 bg-white p-7"
                                    }
                                >
                                    <h4 className="text-xl font-semibold text-zinc-950">{u.title}</h4>
                                    <p className="mt-3 text-[15px] leading-relaxed text-zinc-600">{u.body}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* ============================ TWO AUDIENCES ============================ */}
            <Section className="border-t border-zinc-200">
                <Container>
                    <div className="grid gap-4 lg:grid-cols-2">
                        {/* Developers */}
                        <Reveal>
                            <div className="flex h-full flex-col rounded-3xl border border-zinc-200 bg-zinc-50 p-9">
                                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                                    For developers & teams
                                </span>
                                <h3 className="mt-4 font-display text-3xl text-zinc-950">The Hypersave API</h3>
                                <p className="mt-3 max-w-md text-[15px] leading-relaxed text-zinc-500">
                                    Add memory to your app or agent in two calls. REST, TypeScript &
                                    Python SDKs, and an MCP server with 13 tools.
                                </p>
                                <div className="mt-7 grid grid-cols-3 gap-3">
                                    {[
                                        { v: "< 8s", l: "verified answers" },
                                        { v: "13", l: "MCP tools" },
                                        { v: "86%", l: "recall" },
                                    ].map((s) => (
                                        <div key={s.l} className="rounded-xl border border-zinc-200 bg-white p-3 text-center">
                                            <div className="text-lg font-semibold text-zinc-950">{s.v}</div>
                                            <div className="mt-1 text-[11px] text-zinc-400">{s.l}</div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-8">
                                    <Button href="https://platform.hypersave.io/signup" arrow>
                                        Start building
                                    </Button>
                                </div>
                            </div>
                        </Reveal>

                        {/* Everyone */}
                        <Reveal delay={0.06}>
                            <div className="flex h-full flex-col rounded-3xl border border-zinc-200 bg-white p-9">
                                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-400">
                                    For everyone
                                </span>
                                <h3 className="mt-4 font-display text-3xl text-zinc-950">Hypersave for you</h3>
                                <p className="mt-3 max-w-md text-[15px] leading-relaxed text-zinc-500">
                                    A personal memory you carry between every AI you use. Save what
                                    matters; ask anything later — it remembers so you don&apos;t have to.
                                </p>
                                <ul className="mt-7 space-y-3">
                                    {["One memory across every AI app", "Save links, notes, files & chats", "Recall it instantly, with sources"].map((t) => (
                                        <li key={t} className="flex items-center gap-3 text-sm text-zinc-700">
                                            <Check className="h-4 w-4 shrink-0 text-accent" strokeWidth={2} />
                                            {t}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-8">
                                    <Button href="https://platform.hypersave.io/signup" variant="ghost" arrow>
                                        Get started free
                                    </Button>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </Container>
            </Section>

            {/* ============================ WHY BETTER (light feature touch) ============================ */}
            <Section className="border-t border-zinc-200 bg-zinc-50">
                <Container>
                    <SectionLabel index="05 / 05">Why it&apos;s better</SectionLabel>
                    <SectionHeading
                        title={<>Not a database. A <span className="text-accent">brain</span>.</>}
                        lead="Storage just hands back what you put in. Hypersave does more — it learns your patterns, acts before you ask, and reasons over time. That's what “memory that thinks” actually means."
                    />
                    <div className="mt-12 grid gap-4 md:grid-cols-3">
                        {BRAIN_PILLARS.map((p, i) => (
                            <Reveal key={p.title} delay={i * 0.06}>
                                <div className="h-full rounded-2xl border border-zinc-200 bg-white p-7 shadow-sm">
                                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
                                        <p.icon className="h-5 w-5" strokeWidth={1.6} />
                                    </span>
                                    <h4 className="mt-5 text-lg font-semibold text-zinc-950">{p.title}</h4>
                                    <p className="mt-2 text-sm leading-relaxed text-zinc-500">{p.body}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                    <Reveal delay={0.1}>
                        <div className="mt-4 flex flex-col items-center justify-between gap-4 rounded-2xl border border-zinc-200 bg-white px-6 py-5 sm:flex-row">
                            <p className="text-sm text-zinc-600">
                                <span className="font-semibold text-zinc-950">86% on LoCoMo</span> —
                                state-of-the-art long-context recall, with memory sectors that decay
                                like yours.
                            </p>
                            <Button href="/features" variant="ghost" arrow>
                                Explore the cognitive features
                            </Button>
                        </div>
                    </Reveal>
                </Container>
            </Section>

            {/* ============================ CTA ============================ */}
            <Section className="border-t border-zinc-200">
                <Container>
                    <div className="relative overflow-hidden rounded-[2rem] border border-zinc-200 bg-gradient-to-b from-accent-soft to-white px-6 py-20 text-center md:py-24">
                        <div className="pointer-events-none absolute left-1/2 top-0 h-56 w-[34rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />
                        <div className="relative">
                            <Reveal>
                                <h2 className="mx-auto max-w-2xl font-display text-4xl leading-[1.02] text-zinc-950 md:text-6xl">
                                    Give your AI a memory it owns.
                                </h2>
                            </Reveal>
                            <Reveal delay={0.08}>
                                <p className="mx-auto mt-5 max-w-lg text-lg text-zinc-500">
                                    Free to start. Your first memory is one API call away.
                                </p>
                            </Reveal>
                            <Reveal delay={0.14}>
                                <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                                    <Button href="https://platform.hypersave.io/signup" size="lg" arrow>
                                        Get your API key
                                    </Button>
                                    <Button href="https://docs.hypersave.io" variant="ghost" size="lg">
                                        Read the docs
                                    </Button>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </Container>
            </Section>
        </main>
    )
}

/* ------------------------------------------------------------------ helpers */

function CodeCard() {
    return (
        <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-[#0c0d10] shadow-xl">
            <div className="flex items-center gap-2 border-b border-white/[0.06] px-5 py-3.5">
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="ml-3 font-mono text-[11px] text-zinc-500">hypersave · shell</span>
            </div>
            <div className="space-y-4 p-5 font-mono text-[12.5px] leading-relaxed text-zinc-300">
                <div>
                    <span className="text-accent-bright">$</span> hypersave save \
                    <br />
                    <span className="pl-3 text-zinc-500">&quot;Shipped v1 to OpenAI as lead engineer&quot;</span>
                </div>
                <div className="text-zinc-600">→ saved · 3 facts extracted</div>
                <div className="border-t border-white/[0.06] pt-4">
                    <span className="text-accent-bright">$</span> hypersave ask \
                    <br />
                    <span className="pl-3 text-zinc-500">&quot;where do I work now?&quot;</span>
                </div>
                <div className="rounded-lg border border-white/[0.06] bg-black/40 p-4 text-zinc-200">
                    You currently work at OpenAI as the lead engineer.
                    <div className="mt-2 flex gap-4 text-[11px]">
                        <span className="text-zinc-500">
                            confidence <span className="text-accent-bright">high</span>
                        </span>
                        <span className="text-zinc-500">
                            grounding <span className="text-accent-bright">0.95</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

function ConnectVisual() {
    return (
        <div className="grid items-center gap-6 rounded-3xl border border-zinc-200 bg-white p-8 md:grid-cols-[1fr_auto_1fr] md:gap-10 md:p-12">
            {/* Sources */}
            <div>
                <p className="mb-4 text-center font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-400 md:text-left">
                    Any data
                </p>
                <div className="grid grid-cols-6 gap-3 md:grid-cols-3">
                    {SOURCES.map((s, i) => (
                        <div
                            key={i}
                            className="flex aspect-square items-center justify-center rounded-2xl border border-zinc-200 bg-zinc-50"
                        >
                            <s.icon className={`h-5 w-5 ${s.className}`} strokeWidth={1.7} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Center */}
            <div className="flex items-center justify-center gap-3 md:flex-col">
                <ArrowRight className="h-5 w-5 rotate-90 text-zinc-300 md:rotate-0" />
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-zinc-200 bg-white shadow-[0_8px_30px_rgba(13,148,136,0.18)]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/favicon.svg" alt="Hypersave" className="h-8 w-8" />
                </div>
                <ArrowRight className="h-5 w-5 rotate-90 text-zinc-300 md:rotate-0" />
            </div>

            {/* Models */}
            <div>
                <p className="mb-4 text-center font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-400 md:text-right">
                    Any model
                </p>
                <div className="flex flex-col gap-3">
                    {[
                        { name: "OpenAI", icon: <OpenAI size={20} /> },
                        { name: "Claude", icon: <Claude.Color size={20} /> },
                        { name: "Gemini", icon: <Gemini.Color size={20} /> },
                    ].map((m) => (
                        <div
                            key={m.name}
                            className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3"
                        >
                            <span className="flex h-5 w-5 items-center justify-center">{m.icon}</span>
                            <span className="text-sm font-medium text-zinc-700">{m.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

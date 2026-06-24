"use client"

import { Container, Section, SectionHeading, SectionLabel, Reveal, Button, Pill } from "../../components/site/ui"

const PRINCIPLES = [
    { n: "01", title: "Personal first", body: "We serve individual minds before abstract benchmarks. Memory is personal, so we build it that way." },
    { n: "02", title: "Compounding, not theatrical", body: "We ship in increments and let the work speak. No pre-announcements, no theatre — just steady progress." },
    { n: "03", title: "Accountable", body: "Auditable claims and reproducible results. Citation isn't an afterthought; it's a product feature." },
    { n: "04", title: "Useful before grand", body: "Solve a real problem today on the way to the larger one. Utility now earns the right to a bigger vision." },
    { n: "05", title: "For every mind", body: "Memory that's accessible across people, contexts and price points — not just frontier labs." },
    { n: "06", title: "Patient about the destination", body: "General intelligence is a decade-long goal. We're built to last the distance." },
]

const TEAM = [
    { name: "Akhil Ponnada", role: "Founder & CEO" },
    { name: "Naga Sri Arvapalli", role: "Chief Technology Officer" },
    { name: "Naveen Yelloji", role: "Executive Director" },
]

function initials(name: string) {
    return name.split(" ").map((p) => p[0]).slice(0, 2).join("")
}

export default function AboutPage() {
    return (
        <main className="bg-white">
            {/* Hero */}
            <section className="relative px-6 pb-8 pt-36 md:pt-44">
                <div className="hairline-grid mask-fade-b pointer-events-none absolute inset-0 opacity-70" />
                <Container className="relative">
                    <Reveal>
                        <Pill>About · Unite Group Inc.</Pill>
                    </Reveal>
                    <Reveal delay={0.06}>
                        <h1 className="mt-6 max-w-4xl font-display text-[2.75rem] leading-[1.04] text-zinc-950 md:text-7xl">
                            Building personal intelligence — for <span className="text-accent">every mind</span>.
                        </h1>
                    </Reveal>
                    <Reveal delay={0.12}>
                        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-500">
                            Unite Group Inc. is the company behind Hypersave. We believe persistent
                            memory, self-reflection and per-agent cognition are the bottom-up route to
                            general intelligence — and that the path runs through the individual.
                        </p>
                    </Reveal>
                </Container>
            </section>

            {/* Thesis */}
            <Section className="border-t border-zinc-200">
                <Container>
                    <SectionLabel index="01 / 04">Our thesis</SectionLabel>
                    <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
                        <SectionHeading title={<>Memory is the missing <span className="text-accent">layer</span>.</>} />
                        <Reveal>
                            <div className="space-y-6 text-lg leading-relaxed text-zinc-500">
                                <p>
                                    Most of the field scales top-down — bigger models, more
                                    parameters. We think the more durable route is bottom-up:
                                    intelligence that remembers, reflects, and grows with the person
                                    it serves.
                                </p>
                                <p>
                                    Hypersave is the first expression of that thesis — a cognitive
                                    memory layer with five memory sectors, realistic forgetting,
                                    self-learning synapses and verified recall. The labs that get
                                    memory right will define the next decade of AI.
                                </p>
                            </div>
                        </Reveal>
                    </div>
                </Container>
            </Section>

            {/* What we build */}
            <Section className="border-t border-zinc-200 bg-zinc-50">
                <Container>
                    <SectionLabel index="02 / 04">What we build</SectionLabel>
                    <SectionHeading title="One product, deeply." lead="We focus our energy on the memory layer itself — the infrastructure that lets any AI remember, reason and recall like a mind." />
                    <div className="mt-12 grid gap-4 md:grid-cols-3">
                        {[
                            { k: "Research", v: "Cognitive architectures, decay models and retrieval that beats RAG on long-context recall." },
                            { k: "Infrastructure", v: "A production memory platform — API, SDKs and MCP — that scales to multi-tenant agent workloads." },
                            { k: "Applied", v: "Real products built on Hypersave, proving personal intelligence in the wild." },
                        ].map((c, i) => (
                            <Reveal key={c.k} delay={i * 0.06}>
                                <div className="h-full rounded-2xl border border-zinc-200 bg-white p-7 shadow-sm">
                                    <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">{c.k}</span>
                                    <p className="mt-4 text-sm leading-relaxed text-zinc-500">{c.v}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Principles */}
            <Section className="border-t border-zinc-200">
                <Container>
                    <SectionLabel index="03 / 04">Operating principles</SectionLabel>
                    <SectionHeading title="How we work." />
                    <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 sm:grid-cols-2 lg:grid-cols-3">
                        {PRINCIPLES.map((p, i) => (
                            <Reveal key={p.n} delay={(i % 3) * 0.04}>
                                <div className="h-full bg-white p-7">
                                    <span className="font-mono text-xs text-accent">{p.n}</span>
                                    <h4 className="mt-4 text-lg font-semibold text-zinc-950">{p.title}</h4>
                                    <p className="mt-2 text-sm leading-relaxed text-zinc-500">{p.body}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Team */}
            <Section className="border-t border-zinc-200 bg-zinc-50">
                <Container>
                    <SectionLabel index="04 / 04">Team</SectionLabel>
                    <SectionHeading title="The people building it." />
                    <div className="mt-12 grid gap-4 sm:grid-cols-3">
                        {TEAM.map((m, i) => (
                            <Reveal key={m.name} delay={i * 0.07}>
                                <div className="h-full rounded-2xl border border-zinc-200 bg-white p-7 shadow-sm">
                                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-soft font-display text-lg font-semibold text-accent">
                                        {initials(m.name)}
                                    </span>
                                    <h4 className="mt-5 text-lg font-semibold text-zinc-950">{m.name}</h4>
                                    <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.12em] text-accent">{m.role}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Careers */}
            <Section id="careers" className="border-t border-zinc-200">
                <Container>
                    <div className="relative overflow-hidden rounded-[2rem] border border-zinc-200 bg-gradient-to-b from-accent-soft to-white px-6 py-20 text-center md:py-24">
                        <div className="pointer-events-none absolute left-1/2 top-0 h-56 w-[34rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[80px]" />
                        <div className="relative">
                            <Reveal>
                                <Pill>We&apos;re hiring · Est. 2024</Pill>
                            </Reveal>
                            <Reveal delay={0.06}>
                                <h2 className="mx-auto mt-7 max-w-2xl font-display text-4xl leading-[1.02] text-zinc-950 md:text-6xl">
                                    Come build memory with us.
                                </h2>
                            </Reveal>
                            <Reveal delay={0.12}>
                                <p className="mx-auto mt-5 max-w-lg text-lg text-zinc-500">
                                    A small, senior team hiring across research, infrastructure,
                                    applied and operations.
                                </p>
                            </Reveal>
                            <Reveal delay={0.18}>
                                <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                                    <Button href="mailto:careers@hypersave.io" size="lg" arrow>
                                        Get in touch
                                    </Button>
                                    <Button href="/" variant="ghost" size="lg">
                                        Explore Hypersave
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

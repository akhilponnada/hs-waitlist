"use client"

import { useState } from "react"
import { Terminal, Package, Network, Boxes, ArrowUpRight } from "lucide-react"
import {
    Container,
    Section,
    SectionHeading,
    SectionLabel,
    Reveal,
    Button,
    Pill,
} from "../../components/site/ui"
import { cn } from "../../lib/utils"

const QUICKSTART: Record<string, string> = {
    cURL: `# 1 · Save a memory
curl -X POST https://api.hypersave.io/v1/save \\
  -H "Authorization: Bearer $HYPERSAVE_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{ "content": "Shipped v1 to OpenAI as lead engineer" }'

# 2 · Ask a question
curl -X POST https://api.hypersave.io/v1/ask \\
  -H "Authorization: Bearer $HYPERSAVE_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{ "query": "where do I work now?" }'
# → { "answer": "...", "confidence": "high", "grounding": 0.95 }`,
    JavaScript: `import Hypersave from "hypersave";

const hs = new Hypersave({ apiKey: process.env.HYPERSAVE_API_KEY });

// Save anything — async by default
await hs.save({ content: "Shipped v1 to OpenAI as lead engineer" });

// Ask, with verification on
const { answer, confidence } = await hs.ask({
  query: "where do I work now?",
  verify: true,
});

if (confidence === "high") console.log(answer);`,
    Python: `from hypersave import Hypersave

hs = Hypersave(api_key=os.environ["HYPERSAVE_API_KEY"])

# Save anything
hs.save(content="Shipped v1 to OpenAI as lead engineer")

# Ask a question
res = hs.ask(query="where do I work now?", verify=True)
print(res["answer"], res["confidence"])`,
}

const INSTALLS = [
    { icon: Package, title: "TypeScript / JavaScript", cmd: "npm install hypersave", note: "Zero runtime dependencies · strict types · 21 methods." },
    { icon: Package, title: "Python", cmd: "pip install hypersave", note: "Sync client with the same save / ask / search surface." },
    { icon: Network, title: "MCP server (for agents)", cmd: "npx -y hypersave-mcp", note: "13 tools over stdio. Drop into Claude Desktop & MCP clients." },
]

const MCP_TOOLS = [
    "hypersave_save", "hypersave_ask", "hypersave_search", "hypersave_facts",
    "hypersave_profile", "hypersave_graph", "hypersave_remind", "hypersave_temporal",
    "hypersave_learn", "hypersave_list", "hypersave_update", "hypersave_delete", "hypersave_usage",
]

const SDK_METHODS = [
    "save", "saveSync", "ask", "search", "query", "getProfile",
    "getFacts", "getGraph", "getMemories", "remind", "getSynapses",
    "triggerLearning", "ingest", "batchSave", "waitForSave", "getUsage",
]

export default function DevelopersPage() {
    const [tab, setTab] = useState<keyof typeof QUICKSTART>("cURL")

    return (
        <main className="bg-white">
            {/* Hero */}
            <section className="relative px-6 pb-8 pt-36 md:pt-44">
                <div className="hairline-grid mask-fade-b pointer-events-none absolute inset-0 opacity-70" />
                <Container className="relative">
                    <Reveal>
                        <Pill>Developers</Pill>
                    </Reveal>
                    <Reveal delay={0.06}>
                        <h1 className="mt-6 max-w-3xl font-display text-[2.75rem] leading-[1.02] text-zinc-950 md:text-7xl">
                            Memory in <span className="text-accent">two calls</span>.
                        </h1>
                    </Reveal>
                    <Reveal delay={0.12}>
                        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-500">
                            Grab an API key, install a client, and you&apos;re saving and recalling
                            memory in minutes — over REST, the TypeScript and Python SDKs, or MCP for
                            agents.
                        </p>
                    </Reveal>
                    <Reveal delay={0.18}>
                        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                            <Button href="https://platform.hypersave.io/signup" size="lg" arrow>Get your API key</Button>
                            <Button href="https://docs.hypersave.io" variant="ghost" size="lg">Full documentation</Button>
                        </div>
                    </Reveal>
                </Container>
            </section>

            {/* Quickstart */}
            <Section className="border-t border-zinc-200">
                <Container>
                    <SectionLabel index="01 / 03">Quickstart</SectionLabel>
                    <SectionHeading title={<>Save, then <span className="text-accent">ask</span>.</>} lead="The entire core API is two endpoints. Pick your language." />
                    <Reveal className="mt-10">
                        <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-[#0c0d10] shadow-xl">
                            <div className="flex items-center gap-1 border-b border-white/[0.06] px-3 py-2.5">
                                {Object.keys(QUICKSTART).map((k) => (
                                    <button
                                        key={k}
                                        onClick={() => setTab(k as keyof typeof QUICKSTART)}
                                        className={cn(
                                            "rounded-lg px-3.5 py-1.5 font-mono text-[12px] transition-colors",
                                            tab === k ? "bg-white/[0.08] text-white" : "text-zinc-500 hover:text-zinc-300",
                                        )}
                                    >
                                        {k}
                                    </button>
                                ))}
                                <span className="ml-auto hidden font-mono text-[11px] text-zinc-600 sm:block">api.hypersave.io</span>
                            </div>
                            <pre className="overflow-x-auto p-6 font-mono text-[12.5px] leading-relaxed text-zinc-300">
                                <code>{QUICKSTART[tab]}</code>
                            </pre>
                        </div>
                    </Reveal>
                </Container>
            </Section>

            {/* Install */}
            <Section className="border-t border-zinc-200 bg-zinc-50">
                <Container>
                    <SectionLabel index="02 / 03">Install & download</SectionLabel>
                    <SectionHeading title="Pick a client." lead="Official SDKs and an MCP server. All you need is your API key in the environment." />
                    <div className="mt-12 grid gap-4 md:grid-cols-3">
                        {INSTALLS.map((it, i) => (
                            <Reveal key={it.title} delay={i * 0.06}>
                                <div className="flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-7 shadow-sm">
                                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
                                        <it.icon className="h-5 w-5" strokeWidth={1.6} />
                                    </span>
                                    <h4 className="mt-5 text-base font-semibold text-zinc-950">{it.title}</h4>
                                    <div className="mt-4 flex items-center gap-2 rounded-lg border border-zinc-800 bg-[#0c0d10] px-3 py-2.5">
                                        <Terminal className="h-3.5 w-3.5 text-zinc-500" />
                                        <code className="font-mono text-[12.5px] text-zinc-200">{it.cmd}</code>
                                    </div>
                                    <p className="mt-4 flex-1 text-sm leading-relaxed text-zinc-500">{it.note}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* MCP + SDK */}
            <Section className="border-t border-zinc-200">
                <Container>
                    <SectionLabel index="03 / 03">SDKs & MCP</SectionLabel>
                    <div className="grid gap-4 lg:grid-cols-2">
                        <Reveal>
                            <div className="h-full rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
                                <div className="flex items-center gap-3">
                                    <Network className="h-5 w-5 text-accent" strokeWidth={1.6} />
                                    <h3 className="text-lg font-semibold text-zinc-950">MCP server · 13 tools</h3>
                                </div>
                                <p className="mt-4 text-sm leading-relaxed text-zinc-500">
                                    Expose Hypersave to any MCP-compatible agent over stdio. Configure
                                    once and your agent can save, ask, remind and traverse the graph.
                                </p>
                                <div className="mt-6 flex flex-wrap gap-2">
                                    {MCP_TOOLS.map((t) => (
                                        <span key={t} className="rounded-md border border-zinc-200 bg-zinc-50 px-2.5 py-1 font-mono text-[11px] text-zinc-600">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                        <Reveal delay={0.06}>
                            <div className="h-full rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
                                <div className="flex items-center gap-3">
                                    <Boxes className="h-5 w-5 text-accent" strokeWidth={1.6} />
                                    <h3 className="text-lg font-semibold text-zinc-950">SDK surface</h3>
                                </div>
                                <p className="mt-4 text-sm leading-relaxed text-zinc-500">
                                    The <code className="font-mono text-zinc-700">hypersave</code> package ships 21 typed methods — the essentials:
                                </p>
                                <div className="mt-6 flex flex-wrap gap-2">
                                    {SDK_METHODS.map((m) => (
                                        <span key={m} className="rounded-md border border-zinc-200 bg-zinc-50 px-2.5 py-1 font-mono text-[11px] text-zinc-600">
                                            {m}()
                                        </span>
                                    ))}
                                </div>
                                <a href="https://docs.hypersave.io/sdks" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline">
                                    SDK reference <ArrowUpRight className="h-3.5 w-3.5" />
                                </a>
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
                            <h2 className="font-display text-4xl text-zinc-950 md:text-6xl">Ship with memory today.</h2>
                        </Reveal>
                        <Reveal delay={0.08}>
                            <div className="flex flex-col gap-3 sm:flex-row">
                                <Button href="https://platform.hypersave.io/signup" size="lg" arrow>Get your API key</Button>
                                <Button href="https://docs.hypersave.io/api-reference" variant="ghost" size="lg">API reference</Button>
                            </div>
                        </Reveal>
                    </div>
                </Container>
            </Section>
        </main>
    )
}

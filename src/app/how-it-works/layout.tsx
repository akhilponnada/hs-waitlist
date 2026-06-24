import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "How it works",
    description:
        "Inside Hypersave: the twelve-stage ask pipeline, the layered architecture, the background sleep cycle that keeps memory sharp, and the agentic launch harness that proves it all works.",
}

export default function HowItWorksLayout({ children }: { children: React.ReactNode }) {
    return children
}

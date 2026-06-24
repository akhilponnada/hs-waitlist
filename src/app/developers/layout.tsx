import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Developers",
    description:
        "Quickstart, SDKs and downloads. Save and recall memory in two calls over REST, the TypeScript and Python SDKs, or an MCP server with 13 tools for agents.",
}

export default function DevelopersLayout({ children }: { children: React.ReactNode }) {
    return children
}

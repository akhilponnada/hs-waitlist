import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "About",
    description:
        "Unite Group Inc. is the company behind Hypersave — building personal intelligence for every mind, on the belief that memory is the missing layer of AI.",
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return children
}

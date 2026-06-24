import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const COLUMNS: { title: string; links: { label: string; href: string; external?: boolean }[] }[] = [
    {
        title: "Product",
        links: [
            { label: "Features", href: "/features" },
            { label: "How it works", href: "/how-it-works" },
            { label: "Developers", href: "/developers" },
            { label: "Get API key", href: "https://platform.hypersave.io/signup", external: true },
        ],
    },
    {
        title: "Resources",
        links: [
            { label: "Documentation", href: "https://docs.hypersave.io", external: true },
            { label: "API Reference", href: "https://docs.hypersave.io/api-reference", external: true },
            { label: "SDKs", href: "https://docs.hypersave.io/sdks", external: true },
            { label: "Quickstart", href: "https://docs.hypersave.io/quickstart", external: true },
        ],
    },
    {
        title: "Company",
        links: [
            { label: "About", href: "/about" },
            { label: "Careers", href: "/about#careers" },
            { label: "Contact", href: "mailto:hello@hypersave.io", external: true },
        ],
    },
    {
        title: "Legal",
        links: [
            { label: "Privacy", href: "https://docs.hypersave.io/legal/privacy", external: true },
            { label: "Terms", href: "https://docs.hypersave.io/legal/terms", external: true },
        ],
    },
]

const SOCIALS = [
    { label: "X", href: "https://x.com/hypersave_io" },
    { label: "Instagram", href: "https://instagram.com/hypersaveai" },
    { label: "GitHub", href: "https://github.com/hypersave" },
]

export function SiteFooter() {
    return (
        <footer className="border-t border-zinc-200 bg-zinc-50">
            <div className="mx-auto max-w-[1140px] px-6 py-16 md:px-8 md:py-20">
                <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
                    <div className="col-span-2">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/logo.svg" alt="Hypersave" className="h-6 w-auto" />
                        <p className="mt-5 max-w-xs text-sm leading-relaxed text-zinc-500">
                            Portable memory for AI. Bring your data; recall it across every model and
                            app. You own it.
                        </p>
                        <div className="mt-6 flex items-center gap-5">
                            {SOCIALS.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-400 transition-colors hover:text-zinc-900"
                                >
                                    {s.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {COLUMNS.map((col) => (
                        <div key={col.title}>
                            <h4 className="font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-400">
                                {col.title}
                            </h4>
                            <ul className="mt-5 space-y-3">
                                {col.links.map((link) =>
                                    link.external ? (
                                        <li key={link.label}>
                                            <a
                                                href={link.href}
                                                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                                                rel="noopener noreferrer"
                                                className="group inline-flex items-center gap-0.5 text-sm text-zinc-500 transition-colors hover:text-zinc-900"
                                            >
                                                {link.label}
                                                <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-60" />
                                            </a>
                                        </li>
                                    ) : (
                                        <li key={link.label}>
                                            <Link href={link.href} className="text-sm text-zinc-500 transition-colors hover:text-zinc-900">
                                                {link.label}
                                            </Link>
                                        </li>
                                    ),
                                )}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-zinc-200 pt-8 md:flex-row md:items-center">
                    <p className="text-xs text-zinc-500">
                        &copy; {new Date().getFullYear()} Unite Group Inc. · Hypersave is a product of Unite Group Inc.
                    </p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-400">
                        Your memory · every model
                    </p>
                </div>
            </div>
        </footer>
    )
}

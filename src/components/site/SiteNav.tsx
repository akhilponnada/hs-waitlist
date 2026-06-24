"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ArrowUpRight } from "lucide-react"
import { cn } from "../../lib/utils"

const NAV_LINKS = [
    { label: "Features", href: "/features" },
    { label: "How it works", href: "/how-it-works" },
    { label: "Developers", href: "/developers" },
    { label: "About", href: "/about" },
]

const DOCS_URL = "https://docs.hypersave.io"
const SIGNUP_URL = "https://platform.hypersave.io/signup"
const LOGIN_URL = "https://platform.hypersave.io/login"

export function SiteNav() {
    const pathname = usePathname()
    const [scrolled, setScrolled] = useState(false)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12)
        onScroll()
        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    useEffect(() => setOpen(false), [pathname])

    return (
        <header className="fixed inset-x-0 top-0 z-50">
            <div
                className={cn(
                    "transition-colors duration-300",
                    scrolled ? "border-b border-zinc-200 bg-white" : "border-b border-transparent",
                )}
            >
                <nav className="mx-auto flex h-16 max-w-[1140px] items-center justify-between px-6 md:px-8">
                    <Link href="/" className="flex items-center" aria-label="Hypersave home">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/logo.svg" alt="Hypersave" className="h-[20px] w-auto" />
                    </Link>

                    <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 lg:flex">
                        {NAV_LINKS.map((link) => {
                            const active = pathname === link.href
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={cn(
                                        "rounded-full px-3.5 py-2 text-[13.5px] font-medium transition-colors",
                                        active ? "text-zinc-950" : "text-zinc-500 hover:text-zinc-950",
                                    )}
                                >
                                    {link.label}
                                </Link>
                            )
                        })}
                        <a
                            href={DOCS_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-0.5 rounded-full px-3.5 py-2 text-[13.5px] font-medium text-zinc-500 transition-colors hover:text-zinc-950"
                        >
                            Docs
                            <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                    </div>

                    <div className="hidden items-center gap-2 lg:flex">
                        <a
                            href={LOGIN_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 text-[13.5px] font-medium text-zinc-600 transition-colors hover:text-zinc-950"
                        >
                            Sign in
                        </a>
                        <a
                            href={SIGNUP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex h-9 items-center gap-1.5 rounded-full bg-zinc-950 px-4 text-[13.5px] font-semibold text-white transition-all hover:bg-zinc-800 active:scale-[0.98]"
                        >
                            Get API key
                            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                    </div>

                    <button
                        onClick={() => setOpen((v) => !v)}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-300 text-zinc-900 lg:hidden"
                        aria-label="Toggle menu"
                    >
                        {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                    </button>
                </nav>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                        className="border-b border-zinc-200 bg-white lg:hidden"
                    >
                        <div className="flex flex-col gap-1 px-6 py-5">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="rounded-xl px-4 py-3 text-base font-medium text-zinc-700 transition-colors hover:bg-zinc-50 hover:text-zinc-950"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <a
                                href={DOCS_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-zinc-700 hover:bg-zinc-50"
                            >
                                Docs <ArrowUpRight className="h-4 w-4" />
                            </a>
                            <div className="mt-4 flex flex-col gap-2.5 border-t border-zinc-200 pt-5">
                                <a
                                    href={LOGIN_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-full border border-zinc-300 px-4 py-3 text-center text-sm font-medium text-zinc-900"
                                >
                                    Sign in
                                </a>
                                <a
                                    href={SIGNUP_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-full bg-zinc-950 px-4 py-3 text-center text-sm font-semibold text-white"
                                >
                                    Get API key
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}

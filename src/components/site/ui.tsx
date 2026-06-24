"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { cn } from "../../lib/utils"

/* --------------------------------------------------------------- layout */

export function Container({ children, className }: { children: React.ReactNode; className?: string }) {
    return <div className={cn("mx-auto w-full max-w-[1140px] px-6 md:px-8", className)}>{children}</div>
}

export function Section({
    children,
    className,
    id,
}: {
    children: React.ReactNode
    className?: string
    id?: string
}) {
    return (
        <section id={id} className={cn("relative py-20 md:py-28", className)}>
            {children}
        </section>
    )
}

/* Section label row: mono eyebrow + thin rule + optional index counter */
export function SectionLabel({ children, index }: { children: React.ReactNode; index?: string }) {
    return (
        <div className="mb-10 flex items-center gap-4">
            <span className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span className="eyebrow">{children}</span>
            </span>
            <span className="h-px flex-1 bg-zinc-200" />
            {index && <span className="eyebrow tabular-nums">{index}</span>}
        </div>
    )
}

/* --------------------------------------------------------------- eyebrow */

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <span className={cn("inline-flex items-center gap-2.5", className)}>
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="eyebrow">{children}</span>
        </span>
    )
}

/* --------------------------------------------------------- section heading */

export function SectionHeading({
    eyebrow,
    title,
    lead,
    align = "left",
    className,
}: {
    eyebrow?: string
    title: React.ReactNode
    lead?: React.ReactNode
    align?: "left" | "center"
    className?: string
}) {
    return (
        <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
            {eyebrow && (
                <Reveal>
                    <div className={cn(align === "center" && "flex justify-center")}>
                        <Eyebrow>{eyebrow}</Eyebrow>
                    </div>
                </Reveal>
            )}
            <Reveal delay={0.05}>
                <h2 className="mt-4 font-display text-[2rem] leading-[1.05] text-zinc-950 md:text-[2.6rem]">
                    {title}
                </h2>
            </Reveal>
            {lead && (
                <Reveal delay={0.1}>
                    <p
                        className={cn(
                            "mt-5 text-lg leading-relaxed text-zinc-500",
                            align === "center" && "mx-auto max-w-2xl",
                        )}
                    >
                        {lead}
                    </p>
                </Reveal>
            )}
        </div>
    )
}

/* --------------------------------------------------------------- reveal */

export function Reveal({
    children,
    delay = 0,
    y = 10,
    className,
}: {
    children: React.ReactNode
    delay?: number
    y?: number
    className?: string
}) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.4, delay, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </motion.div>
    )
}

/* --------------------------------------------------------------- button */

type ButtonProps = {
    href: string
    children: React.ReactNode
    variant?: "primary" | "ghost" | "accent"
    size?: "sm" | "md" | "lg"
    arrow?: boolean
    className?: string
}

export function Button({ href, children, variant = "primary", size = "md", arrow = false, className }: ButtonProps) {
    const base =
        "group inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 active:scale-[0.98] whitespace-nowrap"

    const variants = {
        primary: "bg-zinc-950 text-white hover:bg-zinc-800",
        ghost: "border border-zinc-300 text-zinc-800 hover:border-zinc-400 hover:bg-zinc-50",
        accent: "bg-accent text-white hover:bg-teal-700",
    }

    const sizes = {
        sm: "h-9 px-4 text-[13px]",
        md: "h-11 px-5 text-sm",
        lg: "h-12 px-6 text-[15px]",
    }

    const content = (
        <>
            <span>{children}</span>
            {arrow && <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />}
        </>
    )

    const classes = cn(base, variants[variant], sizes[size], className)
    const isExternal = href.startsWith("http") || href.startsWith("mailto:")

    if (isExternal) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
                {content}
            </a>
        )
    }
    return (
        <Link href={href} className={classes}>
            {content}
        </Link>
    )
}

/* --------------------------------------------------------------- atoms */

export function Pill({ children }: { children: React.ReactNode }) {
    return (
        <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3.5 py-1.5 text-[12px] font-medium text-zinc-600 shadow-sm">
            {children}
        </span>
    )
}

export function LiveDot() {
    return <span className="inline-flex h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(20,184,166,0.7)]" />
}

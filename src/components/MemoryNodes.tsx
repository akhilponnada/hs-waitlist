"use client"

import React, { forwardRef, useRef, useEffect, useState } from "react"
import { AnimatedBeam } from "./AnimatedBeam"
import { Mail, Slack, Chrome, Github, Youtube, FileText, Music, Twitter, Command } from "lucide-react"
import { cn } from "../lib/utils"

const Circle = forwardRef<
    HTMLDivElement,
    { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                "z-10 flex h-9 w-9 md:h-10 md:w-10 shrink-0 items-center justify-center rounded-xl bg-zinc-900 border border-white/10 text-white shadow-lg transition-all duration-300",
                className,
            )}
        >
            {children}
        </div>
    )
})

Circle.displayName = "Circle"

export function MemoryNodes() {
    const containerRef = useRef<HTMLDivElement>(null)
    const div1Ref = useRef<HTMLDivElement>(null)
    const div2Ref = useRef<HTMLDivElement>(null)
    const div3Ref = useRef<HTMLDivElement>(null)
    const div4Ref = useRef<HTMLDivElement>(null)
    const div5Ref = useRef<HTMLDivElement>(null)
    const div6Ref = useRef<HTMLDivElement>(null)
    const div7Ref = useRef<HTMLDivElement>(null)
    const div8Ref = useRef<HTMLDivElement>(null)
    const centerRef = useRef<HTMLDivElement>(null)

    const [mounted, setMounted] = useState(false)
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return <div className="h-[250px] w-full opacity-0" />

    return (
        <div
            className="relative flex h-[250px] w-full items-center justify-center overflow-visible"
            ref={containerRef}
        >
            {/* Stable Grid for Nodes */}
            <div className="relative flex w-full max-w-lg md:max-w-xl items-center justify-between px-8 md:px-12">

                {/* Left Input Nodes */}
                <div className="flex flex-col gap-5 md:gap-7 items-center">
                    <Circle ref={div1Ref} className="hover:border-white/40"><Mail className="h-4 w-4 opacity-70" /></Circle>
                    <Circle ref={div2Ref} className="hover:border-white/40"><Slack className="h-4 w-4 opacity-70" /></Circle>
                    <Circle ref={div3Ref} className="hover:border-white/40"><Chrome className="h-4 w-4 opacity-70" /></Circle>
                    <Circle ref={div4Ref} className="hover:border-white/40"><Github className="h-4 w-4 opacity-70" /></Circle>
                </div>

                {/* Central Hub */}
                <div className="relative flex items-center justify-center">
                    <Circle ref={centerRef} className="h-12 w-12 md:h-14 md:w-14 rounded-2xl bg-white border-none shadow-[0_0_30px_rgba(255,255,255,0.4)] z-20">
                        <Command className="h-6 w-6 md:h-7 md:w-7 text-black" />
                    </Circle>
                </div>

                {/* Right Input Nodes */}
                <div className="flex flex-col gap-5 md:gap-7 items-center">
                    <Circle ref={div5Ref} className="hover:border-white/40"><Youtube className="h-4 w-4 opacity-70" /></Circle>
                    <Circle ref={div6Ref} className="hover:border-white/40"><FileText className="h-4 w-4 opacity-70" /></Circle>
                    <Circle ref={div7Ref} className="h-9 w-9 md:h-10 md:w-10 hover:border-white/40"><Music className="h-4 w-4 opacity-70" /></Circle>
                    <Circle ref={div8Ref} className="h-9 w-9 md:h-10 md:w-10 hover:border-white/40"><Twitter className="h-4 w-4 opacity-70" /></Circle>
                </div>
            </div>

            {/* Connection Beams - Added small variations to paths for visual interest */}
            <AnimatedBeam containerRef={containerRef} fromRef={div1Ref} toRef={centerRef} duration={4.1} curvature={-10} />
            <AnimatedBeam containerRef={containerRef} fromRef={div2Ref} toRef={centerRef} duration={5.2} curvature={-5} />
            <AnimatedBeam containerRef={containerRef} fromRef={div3Ref} toRef={centerRef} duration={6.3} curvature={5} />
            <AnimatedBeam containerRef={containerRef} fromRef={div4Ref} toRef={centerRef} duration={4.4} curvature={10} />

            <AnimatedBeam containerRef={containerRef} fromRef={div5Ref} toRef={centerRef} duration={5.5} curvature={-10} reverse />
            <AnimatedBeam containerRef={containerRef} fromRef={div6Ref} toRef={centerRef} duration={6.6} curvature={-5} reverse />
            <AnimatedBeam containerRef={containerRef} fromRef={div7Ref} toRef={centerRef} duration={4.7} curvature={5} reverse />
            <AnimatedBeam containerRef={containerRef} fromRef={div8Ref} toRef={centerRef} duration={5.8} curvature={10} reverse />
        </div>
    )
}

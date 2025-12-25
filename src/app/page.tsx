"use client"

import { motion } from "framer-motion"
import { WaitlistForm } from "../components/WaitlistForm"
import { ShaderAnimation } from "../components/ShaderBackground"
import { Twitter, Instagram } from "lucide-react"

export default function Home() {
    return (
        <main className="fixed inset-0 bg-black text-white selection:bg-white/10 overflow-hidden flex flex-col items-center py-6 md:py-10 px-6">
            {/* Shader Background */}
            <div className="absolute inset-0 z-0">
                <ShaderAnimation />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black" />
            </div>

            {/* Header - Centered White Logo */}
            <header className="relative z-30 w-full mb-8 pt-4 md:pt-8">
                <div className="flex justify-center">
                    <img
                        src="/logo.svg"
                        alt="Hypersave Logo"
                        className="h-8 md:h-10 w-auto invert brightness-[10]"
                    />
                </div>
            </header>

            {/* Main Content Area - Massive Impactful Typography */}
            <div className="relative z-10 w-full max-w-7xl flex-1 flex flex-col items-center justify-center text-center">

                <div className="space-y-6 md:space-y-10 px-4 w-full">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="flex justify-center"
                    >
                        <div className="px-4 py-1.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex items-center">
                            <span className="text-[10px] md:text-[11px] font-bold tracking-[0.4em] uppercase text-zinc-400">
                                Distributed Context Layer
                            </span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="space-y-4"
                    >
                        <h1 className="text-6xl md:text-8xl lg:text-[11rem] font-serif italic tracking-tighter leading-[0.8] text-zinc-700">
                            Don&apos;t Remember, <br />
                            <span className="text-white">Just Hypersave.</span>
                        </h1>

                        <p className="mt-8 md:mt-12 max-w-2xl mx-auto text-base md:text-xl text-zinc-500 font-light leading-relaxed">
                            A universal memory layer that captures and recalls
                            everything in your digital life, automatically.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="pt-4 md:pt-6 flex justify-center"
                        id="waitlist"
                    >
                        <div className="w-full max-w-xl">
                            <WaitlistForm />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Footer - Updated with X and Instagram Links */}
            <footer className="relative z-30 w-full max-w-7xl mt-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-6 border-t border-white/[0.05]">

                    <div className="flex items-center gap-8">
                        <a href="mailto:hello@hypersave.io" className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-600 hover:text-white transition-all duration-300">
                            Contact
                        </a>
                        <div className="flex items-center gap-6">
                            <a
                                href="https://x.com/hypersaveai"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-600 hover:text-white transition-all duration-300"
                            >
                                <Twitter className="w-3 h-3" />
                                X
                            </a>
                            <a
                                href="https://instagram.com/hypersaveai"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-600 hover:text-white transition-all duration-300"
                            >
                                <Instagram className="h-3 w-3" />
                                Instagram
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center gap-8 text-zinc-800">
                        <span className="text-[9px] uppercase tracking-[0.3em] font-black hover:text-zinc-500 cursor-pointer transition-colors">
                            Privacy
                        </span>
                        <span className="text-[9px] uppercase tracking-[0.3em] font-black hover:text-zinc-500 cursor-pointer transition-colors">
                            Terms
                        </span>
                    </div>

                </div>
            </footer>

        </main>
    )
}

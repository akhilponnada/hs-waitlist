"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle2, Loader2, ArrowRight } from "lucide-react"

export function WaitlistForm() {
    const [email, setEmail] = useState("")
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
    const [message, setMessage] = useState("")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!email) return

        setStatus("loading")
        try {
            const res = await fetch("/api/waitlist", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            })

            if (res.ok) {
                setStatus("success")
                setMessage("Waitlist joined.")
                setEmail("")
            } else {
                const data = await res.json()
                throw new Error(data.error || "Something went wrong")
            }
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : "Something went wrong"
            setStatus("error")
            setMessage(errorMessage)
        }
    }

    return (
        <div className="w-full max-w-lg mx-auto relative z-10 px-4">
            <AnimatePresence mode="wait">
                <motion.div
                    key={status === "success" ? "success" : "form"}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="relative group outline-none"
                >
                    <div className="relative flex items-center p-1.5 bg-zinc-900/40 backdrop-blur-2xl border border-white/5 rounded-full hover:border-white/20 focus-within:border-white/30 transition-all duration-300 min-h-[64px]">
                        {status === "success" ? (
                            <div className="flex-1 flex items-center justify-between px-6 py-3">
                                <span className="text-white font-medium text-base tracking-tight">{message}</span>
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", damping: 12, stiffness: 200 }}
                                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center"
                                >
                                    <CheckCircle2 className="w-5 h-5 text-black" />
                                </motion.div>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex-1 flex items-center w-full">
                                <input
                                    type="email"
                                    required
                                    placeholder="name@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    disabled={status === "loading"}
                                    className="flex-1 bg-transparent px-6 py-3 text-white placeholder-zinc-600 focus:outline-none text-base font-light"
                                />
                                <button
                                    type="submit"
                                    disabled={status === "loading"}
                                    className="bg-white text-black h-12 px-8 rounded-full font-medium text-sm transition-all flex items-center gap-2 hover:bg-zinc-200 active:scale-95 disabled:opacity-50"
                                >
                                    {status === "loading" ? (
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                    ) : (
                                        <>
                                            <span>Join</span>
                                            <ArrowRight className="w-4 h-4" />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>

                    {status === "error" && (
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="absolute -bottom-8 left-0 right-0 text-center text-red-500 text-xs font-light"
                        >
                            {message}
                        </motion.p>
                    )}
                </motion.div>
            </AnimatePresence>

            {status !== "success" && (
                <p className="mt-8 text-center text-zinc-600 text-[11px] uppercase tracking-[0.2em] font-medium opacity-50">
                    Limited slots available for v1.0
                </p>
            )}
        </div>
    )
}

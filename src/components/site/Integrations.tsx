"use client"

import React from "react"
import { OpenAI, Claude, Gemini, Mistral, Cohere } from "@lobehub/icons"

type Model = { name: string; icon: React.ReactNode }

const MODELS: Model[] = [
    { name: "OpenAI", icon: <OpenAI size={22} /> },
    { name: "Claude", icon: <Claude.Color size={22} /> },
    { name: "Gemini", icon: <Gemini.Color size={22} /> },
    { name: "Mistral", icon: <Mistral.Color size={22} /> },
    { name: "Cohere", icon: <Cohere.Color size={22} /> },
]

/* "Works with any model" logo row — colored brand marks. */
export function Integrations({ className }: { className?: string }) {
    return (
        <div className={className}>
            <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-4 md:gap-x-10">
                {MODELS.map((m) => (
                    <div key={m.name} className="flex items-center gap-2 opacity-90 transition-opacity hover:opacity-100">
                        <span className="flex h-6 w-6 items-center justify-center">{m.icon}</span>
                        <span className="text-[15px] font-medium text-zinc-700">{m.name}</span>
                    </div>
                ))}
                <div className="flex items-center gap-2">
                    <span className="text-[15px] font-medium text-zinc-400">+ any model</span>
                </div>
            </div>
        </div>
    )
}

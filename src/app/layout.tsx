import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteNav } from "../components/site/SiteNav";
import { SiteFooter } from "../components/site/SiteFooter";

const geist = Geist({
    subsets: ["latin"],
    variable: "--font-geist",
});

const geistMono = Geist_Mono({
    subsets: ["latin"],
    variable: "--font-geist-mono",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://hypersave.io"),
    title: {
        default: "Hypersave — Memory for AI that isn't locked to one model",
        template: "%s — Hypersave",
    },
    description:
        "Hypersave is portable memory for AI. Bring your data; Hypersave turns it into memory your AI actually uses — across every model and app. You own it, not your model vendor.",
    keywords: [
        "AI memory",
        "memory API",
        "portable AI memory",
        "model-agnostic memory",
        "agent memory",
        "RAG alternative",
        "Hypersave",
    ],
    authors: [{ name: "Unite Group Inc." }],
    openGraph: {
        type: "website",
        url: "https://hypersave.io",
        siteName: "Hypersave",
        title: "Hypersave — Memory for AI that isn't locked to one model",
        description:
            "Portable memory for AI. Bring your data; recall it across every model and app. You own it.",
    },
    twitter: {
        card: "summary_large_image",
        title: "Hypersave — Memory for AI that isn't locked to one model",
        description:
            "Portable memory for AI. Bring your data; recall it across every model and app. You own it.",
        creator: "@hypersave_io",
    },
    icons: {
        icon: "/favicon.svg",
        apple: "/favicon.svg",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geist.variable} ${geistMono.variable} antialiased bg-white text-zinc-950`}
            >
                <SiteNav />
                {children}
                <SiteFooter />
            </body>
        </html>
    );
}

import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

const instrumentSerif = Instrument_Serif({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-serif",
});

export const metadata: Metadata = {
    title: "Hypersave | The AI Memory Layer",
    description: "Hypersave is your second brain - an AI-powered universal memory layer that captures, organizes, and recalls everything in your digital life automatically.",
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
        <html lang="en" className="dark">
            <body className={`${inter.variable} ${instrumentSerif.variable} antialiased bg-black text-white`}>
                {children}
            </body>
        </html>
    );
}

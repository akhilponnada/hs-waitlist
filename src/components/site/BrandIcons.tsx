import React from "react"

/* Lightweight marks for stack members not covered by @lobehub/icons.
   Rendered in currentColor so they sit cohesively in monochrome chips. */

export function ConvexMark({
    size = 22,
    className,
}: {
    size?: number
    className?: string
}) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            className={className}
            aria-hidden
        >
            <path
                d="M12 2.4 20.3 7v10L12 21.6 3.7 17V7L12 2.4Z"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinejoin="round"
            />
            <circle cx="12" cy="12" r="2.6" fill="currentColor" />
            <path
                d="M12 9.4V4.8M16 14.3l3.4 2M8 14.3l-3.4 2"
                stroke="currentColor"
                strokeWidth={1.4}
                strokeLinecap="round"
                opacity={0.55}
            />
        </svg>
    )
}

export function HonoMark({
    size = 22,
    className,
}: {
    size?: number
    className?: string
}) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            className={className}
            aria-hidden
        >
            <path
                d="M12 2.2c.5 3.4 3.9 5 3.9 8.9a3.9 3.9 0 1 1-7.8 0c0-1.4.5-2.3 1.2-3.2.3 1.3.9 2.3 1.8 2.9-.5-2.6 1-5.7-.9-8.5C11 3.4 11.5 2.8 12 2.2Z"
                fill="currentColor"
            />
        </svg>
    )
}

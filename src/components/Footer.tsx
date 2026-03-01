"use client";

import { Heart } from "lucide-react";

export default function Footer() {
    return (
        <footer
            role="contentinfo"
            className="px-6 py-12 text-center"
            style={{ background: "var(--navy-900)" }}
        >
            <div className="mx-auto max-w-xl">
                <p className="mb-1 font-heading text-xl text-white">
                    Coolidge Cornerstone
                </p>
                <p className="mb-8 flex items-center justify-center gap-1.5 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
                    With{" "}
                    <Heart className="inline h-3.5 w-3.5 text-coral-400" fill="currentColor" aria-hidden="true" />
                    {" "}from Brookline, MA
                </p>

                <nav aria-label="Footer navigation">
                    <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                        {["About", "Sign Up", "Events", "Resources"].map((label, i) => (
                            <li key={label}>
                                <a
                                    href={["#main-content", "#signup", "#bulletin", "#resources"][i]}
                                    className="text-sm font-medium no-underline transition-colors"
                                    style={{ color: "rgba(255,255,255,0.4)" }}
                                    onMouseEnter={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.85)"; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.4)"; }}
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <hr
                    className="mx-auto my-8 max-w-[80px] border-none"
                    style={{ height: "1px", background: "rgba(255,255,255,0.08)" }}
                    aria-hidden="true"
                />

                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.2)" }}>
                    This site does not represent AA as a whole. AA is a fellowship
                    of people who share their experience, strength, and hope.
                </p>
            </div>
        </footer>
    );
}

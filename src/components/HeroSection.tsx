"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Calendar } from "lucide-react";

const fade = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.12, duration: 0.5, ease: "easeOut" as const },
    }),
};

export default function HeroSection() {
    return (
        <section
            id="main-content"
            aria-label="Group information"
            className="relative overflow-hidden"
            style={{
                background: "linear-gradient(170deg, #091A2A 0%, #0F2A45 50%, #163652 100%)",
                minHeight: "100svh",
                display: "flex",
                alignItems: "center",
            }}
        >
            {/* Large organic blob — top right */}
            <div
                className="float"
                aria-hidden="true"
                style={{
                    position: "absolute", top: "-10%", right: "-8%",
                    width: "45vw", maxWidth: "500px", aspectRatio: "1",
                    borderRadius: "40% 60% 55% 45% / 50% 40% 60% 50%",
                    background: "radial-gradient(ellipse at 30% 40%, rgba(244,166,141,0.12) 0%, rgba(232,132,95,0.04) 60%, transparent 80%)",
                }}
            />

            {/* Small shape — bottom left */}
            <div
                aria-hidden="true"
                style={{
                    position: "absolute", bottom: "8%", left: "4%",
                    width: "120px", height: "120px",
                    borderRadius: "50%",
                    border: "1.5px solid rgba(244,166,141,0.12)",
                }}
            />

            {/* Tiny dots cluster */}
            <div aria-hidden="true" style={{ position: "absolute", top: "20%", left: "8%" }}>
                {[0, 1, 2].map((i) => (
                    <div
                        key={i}
                        style={{
                            position: "absolute",
                            width: "4px", height: "4px", borderRadius: "50%",
                            background: "rgba(244,166,141,0.25)",
                            top: `${i * 18}px`, left: `${i * 12}px`,
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="relative z-10 mx-auto w-full max-w-2xl px-6 pt-24 pb-32 text-center sm:pt-28 sm:pb-36">
                <motion.div
                    className="mb-8 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-2"
                    initial="hidden" animate="visible" custom={0} variants={fade}
                >
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-coral-400">
                        Alcoholics Anonymous
                    </span>
                </motion.div>

                {/* Title — pure white, maximum contrast */}
                <motion.h1
                    className="mb-8 font-heading text-5xl text-white sm:text-6xl md:text-7xl"
                    initial="hidden" animate="visible" custom={1} variants={fade}
                >
                    Coolidge{" "}
                    <span className="text-coral-400">Cornerstone</span>
                </motion.h1>

                <motion.p
                    className="mx-auto mb-16 max-w-sm text-base leading-relaxed sm:text-lg"
                    style={{ color: "rgba(255,255,255,0.72)" }}
                    initial="hidden" animate="visible" custom={2} variants={fade}
                >
                    A welcoming space for recovery, connection, and hope.
                    You&apos;re not alone — you&apos;re always welcome here.
                </motion.p>

                {/* Meeting details — clear white text */}
                <motion.div
                    className="mb-16 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-5"
                    initial="hidden" animate="visible" custom={3} variants={fade}
                >
                    {[
                        { icon: Calendar, label: "Every Friday" },
                        { icon: Clock, label: "6:30 – 7:30 PM" },
                        { icon: MapPin, label: "Brookline, MA" },
                    ].map(({ icon: Icon, label }) => (
                        <div
                            key={label}
                            className="flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-5 py-3"
                        >
                            <Icon className="h-4 w-4 text-coral-400" aria-hidden="true" />
                            <span className="text-sm font-semibold text-white">{label}</span>
                        </div>
                    ))}
                </motion.div>

                {/* CTA — Navy text on solid coral for maximum contrast */}
                <motion.div
                    className="mb-12"
                    initial="hidden" animate="visible" custom={4} variants={fade}
                >
                    <a
                        href="#signup"
                        className="inline-block rounded-full px-10 py-4 text-base font-bold transition-all duration-200 hover:-translate-y-0.5"
                        style={{
                            background: "var(--coral-500)",
                            color: "var(--navy-900)",
                            boxShadow: "0 4px 24px rgba(232,132,95,0.3)",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = "var(--coral-600)";
                            e.currentTarget.style.boxShadow = "0 8px 32px rgba(232,132,95,0.4)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = "var(--coral-500)";
                            e.currentTarget.style.boxShadow = "0 4px 24px rgba(232,132,95,0.3)";
                        }}
                    >
                        Join Our Mailing List
                    </a>
                </motion.div>
            </div>

            {/* Bottom curve transition to cream */}
            <div
                aria-hidden="true"
                style={{
                    position: "absolute", bottom: 0, left: 0, right: 0, height: "80px",
                    background: "var(--cream-200)",
                    clipPath: "ellipse(55% 100% at 50% 100%)",
                }}
            />
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import {
    ExternalLink,
    Globe,
    Building,
    Map,
    Monitor,
    Phone,
    Smartphone,
} from "lucide-react";

interface QuickLinkItem {
    title: string;
    description: string;
    url: string;
    icon: React.ElementType;
}

const links: QuickLinkItem[] = [
    {
        title: "AA.org",
        description: "Official AA — resources, literature, and meeting finder.",
        url: "https://www.aa.org",
        icon: Globe,
    },
    {
        title: "Greater Boston AA",
        description: "Local meetings, events, and service across Greater Boston.",
        url: "https://aaboston.org",
        icon: Building,
    },
    {
        title: "AA Area 30 — Eastern MA",
        description: "Eastern Massachusetts General Service Area.",
        url: "https://aaemass.org",
        icon: Map,
    },
    {
        title: "In The Rooms",
        description: "Free online recovery meetings — join anytime, anywhere.",
        url: "https://www.intherooms.com",
        icon: Monitor,
    },
    {
        title: "SAMHSA Helpline",
        description: "Free, confidential 24/7 treatment referral.",
        url: "https://www.samhsa.gov/find-help/national-helpline",
        icon: Phone,
    },
    {
        title: "Meeting Guide App",
        description: "Find nearby AA meetings with the official app.",
        url: "https://www.aa.org/meeting-guide-app",
        icon: Smartphone,
    },
];

const stagger = {
    visible: { transition: { staggerChildren: 0.06 } },
};

const fadeIn = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" as const } },
};

export default function QuickLinks() {
    return (
        <section
            id="resources"
            aria-label="Helpful recovery resources"
            className="section-pad"
            style={{ background: "var(--cream-200)" }}
        >
            <div className="mx-auto max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.45 }}
                    className="mb-10 text-center"
                >
                    <h2
                        className="mb-3 font-heading text-3xl sm:text-4xl"
                        style={{ color: "var(--navy-800)" }}
                    >
                        Helpful Resources
                    </h2>
                    <p className="text-base text-ink-secondary">
                        Trusted links for meetings, support, and recovery.
                    </p>
                </motion.div>

                <motion.div
                    className="grid gap-3 sm:grid-cols-2"
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-20px" }}
                >
                    {links.map((link) => (
                        <motion.a
                            key={link.title}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-start gap-4 rounded-xl bg-white p-5 no-underline transition-all duration-150 hover:-translate-y-0.5"
                            style={{
                                border: "1px solid var(--cream-300)",
                                boxShadow: "0 1px 4px rgba(15,42,69,0.04)",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow = "0 6px 24px rgba(15,42,69,0.08)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = "0 1px 4px rgba(15,42,69,0.04)";
                            }}
                            variants={fadeIn}
                            aria-label={`${link.title} — opens in a new tab`}
                        >
                            <div
                                className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg"
                                style={{ background: "var(--cream-200)" }}
                            >
                                <link.icon
                                    className="h-5 w-5"
                                    style={{ color: "var(--navy-700)" }}
                                    aria-hidden="true"
                                />
                            </div>
                            <div className="min-w-0 flex-1">
                                <span className="mb-0.5 flex items-center gap-1.5 text-sm font-bold group-hover:text-coral-600"
                                    style={{ color: "var(--navy-800)" }}
                                >
                                    {link.title}
                                    <ExternalLink
                                        className="h-3 w-3 flex-shrink-0 opacity-0 transition-opacity group-hover:opacity-100"
                                        style={{ color: "var(--ink-muted)" }}
                                        aria-hidden="true"
                                    />
                                </span>
                                <p className="text-sm leading-snug text-ink-secondary">
                                    {link.description}
                                </p>
                            </div>
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

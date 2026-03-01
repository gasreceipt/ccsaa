"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { motion } from "framer-motion";
import { Calendar, Megaphone, ChevronDown, MapPin, Clock } from "lucide-react";
import eventsData from "@/data/events.json";

interface EventItem {
    id: string;
    title: string;
    date: string;
    time: string | null;
    description: string;
    type: "event" | "announcement";
    location?: string;
}

const events: EventItem[] = eventsData as EventItem[];

function formatDate(dateStr: string): string {
    const date = new Date(dateStr + "T00:00:00");
    return date.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric",
    });
}

function TypeBadge({ type }: { type: "event" | "announcement" }) {
    return type === "event" ? (
        <span
            className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-bold"
            style={{ background: "var(--cream-300)", color: "var(--navy-800)" }}
        >
            <Calendar className="h-3 w-3" aria-hidden="true" />
            Event
        </span>
    ) : (
        <span
            className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-bold"
            style={{ background: "rgba(232,132,95,0.15)", color: "var(--coral-600)" }}
        >
            <Megaphone className="h-3 w-3" aria-hidden="true" />
            Announcement
        </span>
    );
}

const stagger = {
    visible: { transition: { staggerChildren: 0.08 } },
};

const fadeIn = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" as const } },
};

export default function BulletinSection() {
    const sorted = [...events].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    return (
        <section
            id="bulletin"
            aria-label="News and events"
            className="section-pad"
            style={{ background: "var(--cream-100)" }}
        >
            <div className="mx-auto max-w-2xl">
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
                        What&apos;s Happening
                    </h2>
                    <p className="text-base text-ink-secondary">
                        Upcoming events and announcements from our community.
                    </p>
                </motion.div>

                <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-20px" }}
                >
                    <Accordion.Root type="multiple" className="space-y-3">
                        {sorted.map((event) => (
                            <motion.div key={event.id} variants={fadeIn}>
                                <Accordion.Item
                                    value={event.id}
                                    className="acc-item overflow-hidden bg-white"
                                    style={{
                                        border: "1px solid var(--cream-300)",
                                        boxShadow: "0 1px 4px rgba(15,42,69,0.04)",
                                    }}
                                >
                                    <Accordion.Header>
                                        <Accordion.Trigger className="acc-trigger">
                                            <div className="flex flex-col items-start gap-1.5 text-left">
                                                <TypeBadge type={event.type} />
                                                <span
                                                    className="text-base font-bold sm:text-lg"
                                                    style={{ color: "var(--navy-800)" }}
                                                >
                                                    {event.title}
                                                </span>
                                                <span className="text-sm text-ink-muted">
                                                    {formatDate(event.date)}
                                                </span>
                                            </div>
                                            <ChevronDown
                                                className="acc-chevron ml-4 h-5 w-5 flex-shrink-0 text-ink-muted"
                                                aria-hidden="true"
                                            />
                                        </Accordion.Trigger>
                                    </Accordion.Header>
                                    <Accordion.Content className="acc-content">
                                        <div
                                            className="px-6 pb-5 pt-2"
                                            style={{ borderTop: "1px solid var(--cream-300)" }}
                                        >
                                            <p className="mb-3 text-sm leading-relaxed text-ink-secondary">
                                                {event.description}
                                            </p>
                                            {(event.time || event.location) && (
                                                <div className="flex flex-wrap gap-3 text-xs font-medium text-ink-muted">
                                                    {event.time && (
                                                        <span className="flex items-center gap-1">
                                                            <Clock className="h-3.5 w-3.5 text-coral-500" aria-hidden="true" />
                                                            {event.time}
                                                        </span>
                                                    )}
                                                    {event.location && (
                                                        <span className="flex items-center gap-1">
                                                            <MapPin className="h-3.5 w-3.5 text-coral-500" aria-hidden="true" />
                                                            {event.location}
                                                        </span>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    </Accordion.Content>
                                </Accordion.Item>
                            </motion.div>
                        ))}
                    </Accordion.Root>
                </motion.div>
            </div>
        </section>
    );
}

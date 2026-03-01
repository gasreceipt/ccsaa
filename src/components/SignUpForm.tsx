"use client";

import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Mail, User, Send, CheckCircle } from "lucide-react";
import { useState } from "react";

interface FormData {
    name: string;
    email: string;
}

export default function SignUpForm() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        try {
            await fetch(
                "https://script.google.com/macros/s/AKfycbzCBNXXYAJ9j2bs_vCpCTQ68rASb3lBHtegIbVw94alIBhmoLUgryEybjuCgT6fWMJHMQ/exec",
                {
                    method: "POST",
                    mode: "no-cors",
                    headers: {
                        "Content-Type": "text/plain;charset=utf-8",
                    },
                    body: JSON.stringify(data),
                }
            );

            setIsSubmitted(true);
            reset();
            setTimeout(() => setIsSubmitted(false), 8000);
        } catch (error) {
            console.error("Form submission error:", error);
            alert("Something went wrong. Please try again later.");
        }
    };

    return (
        <section
            id="signup"
            aria-label="Join our mailing list"
            className="section-pad"
            style={{ background: "var(--cream-200)" }}
        >
            <div className="mx-auto max-w-md">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.45 }}
                    className="mb-8 text-center"
                >
                    <h2
                        className="mb-3 font-heading text-3xl sm:text-4xl"
                        style={{ color: "var(--navy-800)" }}
                    >
                        Stay Connected
                    </h2>
                    <p className="text-base text-ink-secondary">
                        Get meeting updates, announcements, and recovery resources
                        delivered to your inbox.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.45, delay: 0.1 }}
                >
                    {isSubmitted ? (
                        <div
                            className="flex flex-col items-center gap-4 rounded-xl bg-white p-8 text-center"
                            style={{ boxShadow: "0 2px 12px rgba(15,42,69,0.06)" }}
                            role="status"
                            aria-live="polite"
                        >
                            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-50">
                                <CheckCircle className="h-7 w-7 text-green-600" aria-hidden="true" />
                            </div>
                            <h3 className="font-heading text-xl" style={{ color: "var(--navy-800)" }}>
                                Thank You!
                            </h3>
                            <p className="text-sm text-ink-secondary">
                                You&apos;ve been added to our list. We&apos;ll be in touch.
                            </p>
                        </div>
                    ) : (
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            noValidate
                            className="rounded-xl bg-white p-6 sm:p-8"
                            style={{ boxShadow: "0 2px 12px rgba(15,42,69,0.06)" }}
                        >
                            {/* Name */}
                            <div className="mb-4">
                                <label
                                    htmlFor="signup-name"
                                    className="mb-1.5 block text-sm font-semibold"
                                    style={{ color: "var(--navy-800)" }}
                                >
                                    First Name
                                </label>
                                <div className="relative">
                                    <input
                                        id="signup-name"
                                        type="text"
                                        placeholder="Your name"
                                        className="form-input"
                                        aria-invalid={errors.name ? "true" : "false"}
                                        aria-describedby={errors.name ? "name-error" : undefined}
                                        {...register("name", {
                                            required: "Please enter your name",
                                            minLength: { value: 2, message: "Name must be at least 2 characters" },
                                        })}
                                    />
                                </div>
                                {errors.name && (
                                    <p id="name-error" role="alert" className="mt-1.5 text-sm font-medium text-red-700">
                                        {errors.name.message}
                                    </p>
                                )}
                            </div>

                            {/* Email */}
                            <div className="mb-5">
                                <label
                                    htmlFor="signup-email"
                                    className="mb-1.5 block text-sm font-semibold"
                                    style={{ color: "var(--navy-800)" }}
                                >
                                    Email
                                </label>
                                <div className="relative">
                                    <input
                                        id="signup-email"
                                        type="email"
                                        placeholder="you@example.com"
                                        className="form-input"
                                        aria-invalid={errors.email ? "true" : "false"}
                                        aria-describedby={errors.email ? "email-error" : undefined}
                                        {...register("email", {
                                            required: "Please enter your email",
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "Please enter a valid email",
                                            },
                                        })}
                                    />
                                </div>
                                {errors.email && (
                                    <p id="email-error" role="alert" className="mt-1.5 text-sm font-medium text-red-700">
                                        {errors.email.message}
                                    </p>
                                )}
                            </div>

                            <p className="mb-5 text-xs text-ink-muted">
                                Your privacy matters. We never share your information.
                            </p>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-bold text-white transition-all duration-150 disabled:cursor-not-allowed disabled:opacity-50"
                                style={{ background: "var(--navy-800)" }}
                                onMouseEnter={(e) => { e.currentTarget.style.background = "var(--navy-700)"; }}
                                onMouseLeave={(e) => { e.currentTarget.style.background = "var(--navy-800)"; }}
                            >
                                {isSubmitting ? (
                                    <>
                                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" aria-hidden="true" />
                                        Signing up…
                                    </>
                                ) : (
                                    <>
                                        <Send className="h-4 w-4" aria-hidden="true" />
                                        Join the List
                                    </>
                                )}
                            </button>
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    );
}

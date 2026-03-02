"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { type Experience } from "@/data/experiences";

export function ExperienceLayout({ experience }: { experience: Experience }) {
    return (
        <div className="min-h-screen bg-[#121212] flex flex-col md:flex-row">
            {/* Left Pane - Content */}
            <div className="w-full md:w-1/2 min-h-screen flex flex-col p-8 md:p-16 lg:p-24 overflow-y-auto">

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link
                        href="/"
                        className="inline-flex items-center text-sm font-medium text-white/50 hover:text-white mb-12 transition-colors uppercase tracking-widest"
                    >
                        <span className="mr-2">←</span> Back to Portfolio
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex-1 flex flex-col justify-center max-w-xl"
                >
                    <div className="mb-6 flex items-center gap-4">
                        <span className="px-3 py-1 rounded-full border border-white/10 text-xs font-medium tracking-widest text-white/50 bg-white/5 uppercase">
                            {experience.category}
                        </span>
                        <span className="text-sm font-medium text-emerald-400">
                            {experience.duration}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
                        {experience.title}
                    </h1>

                    <h2 className="text-2xl text-white/70 font-medium mb-8 pb-8 border-b border-white/10">
                        {experience.role}
                    </h2>

                    <p className="text-lg text-white/80 leading-relaxed mb-12">
                        {experience.shortDescription}
                    </p>

                    <div className="space-y-6">
                        <h3 className="text-xl font-semibold text-white tracking-tight">Key Achievements</h3>
                        <ul className="space-y-4">
                            {experience.achievements.map((achievement, idx) => (
                                <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: 0.4 + (idx * 0.1) }}
                                    className="flex items-start gap-4"
                                >
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2.5 flex-shrink-0" />
                                    <p className="text-white/60 leading-relaxed">{achievement}</p>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                </motion.div>
            </div>

            {/* Right Pane - Sticky Image */}
            <div className="w-full md:w-1/2 md:h-screen md:sticky top-0 bg-black overflow-hidden relative border-l border-white/5">
                <div className={`absolute inset-0 bg-gradient-to-br opacity-30 mix-blend-overlay z-10 ${experience.color}`} />
                <motion.img
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    src={experience.image}
                    alt={experience.title}
                    className="w-full h-[50vh] md:h-full object-cover object-center"
                />

                {/* Subtle vignette for premium feel */}
                <div className="absolute inset-0 pointer-events-none z-20 shadow-[inset_0_0_150px_rgba(0,0,0,0.8)]" />
            </div>
        </div>
    );
}

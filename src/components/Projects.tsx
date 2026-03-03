"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

import Link from "next/link";
import { experiences } from "@/data/experiences";

export function Projects() {
    return (
        <section className="relative z-10 bg-[#121212] py-32 px-6 md:px-24">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 shadow-sm">
                        Selected Works
                    </h2>
                    <div className="h-1 w-20 bg-white/20 rounded mt-4" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {experiences.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="group relative rounded-3xl overflow-hidden bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col"
                        >
                            <div
                                className={cn(
                                    "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                                    project.color
                                )}
                            />
                            <div className="relative p-8 h-full flex flex-col justify-between z-10">
                                <div className="mb-12">
                                    <span className="text-xs uppercase tracking-widest text-white/50 mb-4 block font-medium">
                                        {project.category}
                                    </span>
                                    <h3 className="text-2xl font-semibold tracking-tight text-white mb-4">
                                        {project.title}
                                    </h3>
                                    <p className="text-white/60 text-sm leading-relaxed">
                                        {project.shortDescription}
                                    </p>
                                </div>
                                <div className="mt-auto">
                                    <Link href={`/experience/${project.slug}`} className="inline-flex items-center text-sm text-white/80 hover:text-white transition-colors cursor-pointer pb-1 border-b border-transparent hover:border-white/50 group-hover:border-white/50 duration-300">
                                        View Experience
                                        <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                                            →
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

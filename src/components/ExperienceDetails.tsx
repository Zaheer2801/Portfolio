"use client";

import { motion } from "framer-motion";

export function ExperienceDetails() {
    return (
        <section className="relative z-10 bg-[#121212] py-24 px-6 md:px-24">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

                {/* Education Column */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold tracking-tight text-white mb-8 flex items-center gap-4">
                        <span className="text-white/30 text-4xl">01</span> Education
                    </h2>
                    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">

                        {/* Master's */}
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                            <div className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-white/20 bg-[#121212] flex-shrink-0 z-10 group-hover:border-emerald-400 transition-colors" />
                            <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-1.5rem)] p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/20 hover:bg-white/[0.04] transition-all ml-6 md:ml-0 md:mr-6 shadow-xl">
                                <div className="flex flex-col gap-1 mb-2">
                                    <span className="text-sm font-medium text-emerald-400">Master's in Information System</span>
                                    <h3 className="text-xl font-bold text-white leading-tight">Auburn University at Montgomery, Alabama</h3>
                                </div>
                                <div className="flex justify-between items-center text-white/60 text-sm mt-4 pt-4 border-t border-white/10">
                                    <span>Aug 2023 - Dec 2024</span>
                                    <span className="font-medium text-white/80 border border-white/10 px-2 py-1 rounded-md bg-white/5">GPA: 3.92</span>
                                </div>
                            </div>
                        </div>

                        {/* Bachelor's */}
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                            <div className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-white/20 bg-[#121212] flex-shrink-0 z-10 group-hover:border-emerald-400 transition-colors" />
                            <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-1.5rem)] p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/20 hover:bg-white/[0.04] transition-all ml-6 md:ml-0 md:mr-6 shadow-xl">
                                <div className="flex flex-col gap-1 mb-2">
                                    <span className="text-sm font-medium text-emerald-400">B.Tech in Electronics & Communication</span>
                                    <h3 className="text-xl font-bold text-white leading-tight">Dr. MGR University, Chennai, India</h3>
                                </div>
                                <div className="flex justify-between items-center text-white/60 text-sm mt-4 pt-4 border-t border-white/10">
                                    <span>Aug 2013 - May 2017</span>
                                    <span className="font-medium text-white/80 border border-white/10 px-2 py-1 rounded-md bg-white/5">GPA: 3.62</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </motion.div>

                {/* Contact/Connect Column */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h2 className="text-3xl font-bold tracking-tight text-white mb-8 flex items-center gap-4">
                        <span className="text-white/30 text-4xl">02</span> Connect
                    </h2>

                    <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 flex flex-col gap-6">
                        <p className="text-white/70 leading-relaxed">
                            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                        </p>

                        <div className="flex gap-4">
                            {/* Email Icon */}
                            <a href="mailto:zshaik2801@gmail.com" className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:bg-white/10 hover:border-emerald-400 group transition-all" title="Email Me">
                                <svg className="w-6 h-6 text-white/70 group-hover:text-emerald-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </a>

                            {/* Phone Icon */}
                            <a href="tel:3342202926" className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:bg-white/10 hover:border-emerald-400 group transition-all" title="Call Me">
                                <svg className="w-6 h-6 text-white/70 group-hover:text-emerald-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </a>

                            {/* LinkedIn Icon */}
                            <a href="https://www.linkedin.com/in/zshaik2801/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:bg-white/10 hover:border-emerald-400 group transition-all" title="LinkedIn">
                                <svg className="w-6 h-6 text-white/70 group-hover:text-emerald-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                        </div>

                        {/* Quick Contact Form */}
                        <form className="mt-4 flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-emerald-500/50 transition-colors"
                                required
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-emerald-500/50 transition-colors"
                                required
                            />
                            <textarea
                                placeholder="Your Message..."
                                rows={4}
                                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-emerald-500/50 transition-colors resize-none"
                                required
                            />
                            <button
                                type="submit"
                                className="w-full bg-white text-black font-semibold rounded-xl py-3 mt-2 hover:bg-white/90 transition-colors focus:ring-2 focus:ring-white/20 outline-none"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </motion.div>

                {/* AI Ventures - Full Width */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="col-span-1 md:col-span-2 group relative rounded-3xl overflow-hidden bg-gradient-to-br from-emerald-900/20 to-teal-900/20 border border-emerald-500/20 hover:border-emerald-400/50 transition-all duration-500 p-8 md:p-12 mt-8 shadow-2xl"
                >
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="max-w-xl">
                            <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold mb-4 block">03 / AI Ventures</span>
                            <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
                                ProudCV AI Application
                            </h3>
                            <p className="text-white/70 text-lg leading-relaxed mix-blend-screen">
                                Beyond supply chains and enterprise architecture, I'm actively building AI products. Check out my recently launched application that empowers job seekers with AI-driven resume enhancements.
                            </p>
                        </div>
                        <div className="w-full md:w-auto flex-shrink-0">
                            <a
                                href="https://proudcv.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-emerald-500 text-black font-semibold rounded-full hover:bg-emerald-400 hover:scale-105 transition-all duration-300 w-full md:w-auto shadow-[0_0_30px_rgba(52,211,153,0.3)]"
                            >
                                Visit ProudCV.com
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}

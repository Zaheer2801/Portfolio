"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface OverlayProps {
    scrollProgress: MotionValue<number>;
}

export function Overlay({ scrollProgress }: OverlayProps) {
    // Section 1: 0% scroll (Center)
    const opacity1 = useTransform(scrollProgress, [0, 0.1, 0.2], [1, 1, 0]);
    const y1 = useTransform(scrollProgress, [0, 0.2], [0, -100]); // parallax up

    // Section 2: 30% scroll (Left aligned)
    const opacity2 = useTransform(scrollProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
    const y2 = useTransform(scrollProgress, [0.2, 0.5], [100, -100]); // parallax up

    // Section 3: 60% scroll (Right aligned)
    const opacity3 = useTransform(scrollProgress, [0.5, 0.6, 0.8, 1], [0, 1, 1, 0]);
    const y3 = useTransform(scrollProgress, [0.5, 0.8], [100, -100]); // parallax up

    return (
        <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-center">
            {/* Section 1 */}
            <motion.div
                style={{ opacity: opacity1, y: y1 }}
                className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center text-center px-4"
            >
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white drop-shadow-lg">
                    Zaheer Abbas Shaik. <br />
                    <span className="text-white/70 text-4xl md:text-5xl">SAP EWM Functional Consultant.</span>
                </h1>
            </motion.div>

            {/* Section 2 */}
            <motion.div
                style={{ opacity: opacity2, y: y2 }}
                className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-start px-8 md:px-24"
            >
                <div className="max-w-xl">
                    <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-4">
                        Optimizing <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">supply chains</span>.
                    </h2>
                    <p className="text-xl text-white/60">
                        7+ years of expertise in SAP EWM on S4HANA implementations across pharma, FMCG, and dairy industries.
                    </p>
                </div>
            </motion.div>

            {/* Section 3 */}
            <motion.div
                style={{ opacity: opacity3, y: y3 }}
                className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-end px-8 md:px-24 text-right"
            >
                <div className="max-w-xl self-end ml-auto">
                    <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-4">
                        Bridging processes <br /> and technology.
                    </h2>
                    <p className="text-xl text-white/60">
                        Translating complex business requirements into seamless, integrated SAP solutions.
                    </p>
                </div>
            </motion.div>
        </div>
    );
}

"use client";

import { useRef, useEffect, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import NextImage from "next/image";
import { Overlay } from "./Overlay";

const FRAME_COUNT = 90;

export function ScrollyCanvas() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [firstFrameLoaded, setFirstFrameLoaded] = useState(false);

    // Load images
    useEffect(() => {
        const loadedImages: HTMLImageElement[] = [];

        // Load first frame specifically to trigger initial render fast
        const firstImg = new Image();
        firstImg.src = `/sequence/frame_00_delay-0.066s.png`;
        firstImg.onload = () => {
            setFirstFrameLoaded(true);
        };
        loadedImages.push(firstImg);

        // Preload the rest of the sequence
        for (let i = 1; i < FRAME_COUNT; i++) {
            const img = new Image();
            // Format number to be two digits, e.g. 01, ..., 89
            const frameStr = i.toString().padStart(2, "0");
            img.src = `/sequence/frame_${frameStr}_delay-0.066s.png`;
            loadedImages.push(img);
        }
        setImages(loadedImages);
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

    const drawImage = (index: number) => {
        if (!canvasRef.current || !images[index]) return;

        const img = images[index];

        // Ensure the image object has finished downloading before trying to draw
        if (!img.complete || img.naturalHeight === 0) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Maintain aspect ratio while covering the canvas
        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.max(hRatio, vRatio);
        const centerShift_x = (canvas.width - img.width * ratio) / 2;
        const centerShift_y = (canvas.height - img.height * ratio) / 2;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(
            img,
            0,
            0,
            img.width,
            img.height,
            centerShift_x,
            centerShift_y,
            img.width * ratio,
            img.height * ratio
        );
    };

    useMotionValueEvent(frameIndex, "change", (latest) => {
        drawImage(Math.round(latest));
    });

    // Handle resize
    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
                drawImage(Math.round(frameIndex.get()));
            }
        };

        // Initial setup
        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [firstFrameLoaded, frameIndex]);

    return (
        <div ref={containerRef} className="relative h-[200vh] bg-[#121212]">
            <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
                {/* Next.js Optimized Image for instant First Contentful Paint (LCP) */}
                <NextImage
                    src="/sequence/frame_00_delay-0.066s.png"
                    alt="Hero Background"
                    fill
                    priority
                    className={`object-cover object-center transition-opacity duration-500 ${firstFrameLoaded ? 'opacity-0' : 'opacity-100'}`}
                />

                {/* Animation Canvas */}
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full z-10"
                />
                {/* Pass scrollYProgress to overlay for parallax text */}
                <Overlay scrollProgress={scrollYProgress} />
            </div>
        </div>
    );
}

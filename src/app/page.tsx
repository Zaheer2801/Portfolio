import { ScrollyCanvas } from "@/components/ScrollyCanvas";
import { Projects } from "@/components/Projects";
import { ExperienceDetails } from "@/components/ExperienceDetails";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212]">
      {/* 500vh scrolling section */}
      <ScrollyCanvas />

      {/* Post-scroll content (projects) */}
      <Projects />

      {/* Education & Contact Details */}
      <ExperienceDetails />

      {/* Simple footer */}
      <footer className="py-12 text-center text-white/30 text-sm bg-[#121212] border-t border-white/5">
        <p>© {new Date().getFullYear()} Zaheer Abbas Shaik. Let&apos;s build efficient supply chains.</p>
      </footer>
    </main>
  );
}

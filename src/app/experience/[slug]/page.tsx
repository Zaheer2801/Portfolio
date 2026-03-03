import { experiences } from "@/data/experiences";
import { ExperienceLayout } from "@/components/ExperienceLayout";
import { notFound } from "next/navigation";

export function generateStaticParams() {
    return experiences.map((exp) => ({
        slug: exp.slug,
    }));
}

export default function ExperiencePage({ params }: { params: { slug: string } }) {
    const experience = experiences.find((exp) => exp.slug === params.slug);

    if (!experience) {
        notFound();
    }

    return <ExperienceLayout experience={experience} />;
}

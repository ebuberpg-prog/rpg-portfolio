import type { Metadata } from "next";
import { ProjectPreview } from "@/components/portfolio/project-preview";
import { projects } from "@/data/projects";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Work",
  description: "Five selected motion design and art direction case studies by EbubeRPG."
};

export default function WorkPage() {
  return (
    <div className="flex w-full flex-col px-5 pt-32 pb-24 sm:px-8 lg:pb-32">
      <div className="mx-auto w-full max-w-7xl">
        <Reveal>
          <header className="mb-20 flex flex-col gap-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#888888]">
              Work / 05 case studies
            </p>
            <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[0.95] sm:text-7xl lg:text-8xl">
              Selected projects
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-[#888888] sm:text-xl">
              A focused body of work, edited for signal. Each project
              demonstrates craft, clarity, and creative ownership.
            </p>
          </header>
        </Reveal>

        <div className="flex flex-col gap-6">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.08}>
              <ProjectPreview project={project} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}

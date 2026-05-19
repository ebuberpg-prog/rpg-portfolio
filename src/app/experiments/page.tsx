import type { Metadata } from "next";
import { MediaFrame } from "@/components/portfolio/media-frame";
import { Reveal } from "@/components/reveal";
import { experiments } from "@/data/experiments";

export const metadata: Metadata = {
  title: "Experiments",
  description: "Personal experiments, motion tests, and visual explorations by EbubeRPG."
};

export default function ExperimentsPage() {
  return (
    <div className="flex w-full flex-col px-5 pt-32 pb-24 sm:px-8 lg:pb-32">
      <div className="mx-auto w-full max-w-7xl">
        <Reveal>
          <header className="mb-20 flex flex-col gap-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#888888]">
              Experiments
            </p>
            <h1 className="max-w-5xl font-display text-5xl font-semibold leading-[0.95] sm:text-7xl lg:text-8xl">
              Motion tests & visual explorations
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-[#888888] sm:text-xl">
              A collection of personal work, technique studies, and creative
              experiments that don&apos;t fit into a case study.
            </p>
          </header>
        </Reveal>

        {experiments.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {experiments.map((experiment, index) => (
              <Reveal key={experiment.slug} delay={index * 0.08}>
                <div className="group flex flex-col gap-3">
                  <div className="overflow-hidden border border-[#1a1a1a]">
                    <MediaFrame
                      media={experiment.cover}
                      className="min-h-48"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#888888]">
                        {experiment.category}
                      </p>
                      <p className="font-mono text-xs text-[#888888]/50">
                        {experiment.year}
                      </p>
                    </div>
                    <h3 className="font-display text-xl font-medium">
                      {experiment.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#888888]">
                      {experiment.summary}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-6 border border-dashed border-[#1a1a1a] py-24 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#888888]">
              Coming soon
            </p>
            <p className="max-w-md text-lg text-[#888888]">
              Experiments will be added here as they are produced. Check back
              soon for motion tests, 3D explorations, and visual studies.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

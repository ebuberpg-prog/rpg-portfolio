import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";
import { MediaFrame } from "@/components/portfolio/media-frame";
import { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

type ProjectPreviewProps = {
  project: Project;
  index: number;
  featured?: boolean;
};

export function ProjectPreview({
  project,
  index,
  featured = false
}: ProjectPreviewProps) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className={cn(
        "group grid gap-0 border border-[#1a1a1a] bg-[#0a0a0a] transition-colors hover:bg-[#0f0f0f]",
        featured
          ? "lg:grid-cols-[1.2fr_1fr]"
          : "lg:grid-cols-[0.95fr_1.05fr]"
      )}
    >
      <div className="overflow-hidden">
        <MediaFrame
          media={project.cover}
          className={cn(
            "min-h-64 sm:min-h-80",
            featured && "sm:min-h-96"
          )}
        />
      </div>
      <div className="flex flex-col justify-between gap-8 p-6 sm:p-8 lg:p-10">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between gap-4">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#888888]">
              0{index + 1} / 05
            </span>
            <ArrowUpRightIcon className="size-5 text-[#888888] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#7c3aed]" />
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap gap-3 text-sm text-[#888888]">
              <span>{project.category}</span>
              {project.status === "draft-slot" ? (
                <span className="text-[#888888]/50">— Replaceable slot</span>
              ) : null}
            </div>
            <h2 className="font-display text-3xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              {project.title}
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-[#888888]">
              {project.summary}
            </p>
          </div>
        </div>
        <p className="text-sm leading-relaxed text-[#888888]">
          <span className="text-white">Role: </span>
          {project.roleSummary}
        </p>
      </div>
    </Link>
  );
}

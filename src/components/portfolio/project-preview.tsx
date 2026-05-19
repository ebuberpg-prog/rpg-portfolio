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

export function ProjectPreview({ project, index, featured = false }: ProjectPreviewProps) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group grid grid-cols-1 bg-[#080808] transition-colors duration-300 hover:bg-[#0c0c0c] lg:grid-cols-[auto_1fr_auto]"
    >
      {/* Index */}
      <div className="hidden items-center border-r border-[#141414] px-6 lg:flex">
        <span className="font-mono text-[10px] tracking-[0.25em] text-[#2a2a2a]">
          0{index + 1}
        </span>
      </div>

      {/* Media — appears on mobile/tablet above text */}
      <div
        className={cn(
          "overflow-hidden border-b border-[#141414] lg:border-b-0 lg:border-r",
          featured ? "lg:w-[520px]" : "lg:w-[400px]"
        )}
      >
        <MediaFrame
          media={project.cover}
          className={cn(
            "w-full",
            featured ? "min-h-[260px] lg:min-h-[360px]" : "min-h-[220px] lg:min-h-[280px]"
          )}
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between gap-6 p-6 sm:p-8 lg:p-10">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-3">
            {/* Category + year */}
            <div className="flex items-center gap-3">
              <span className="border border-[#1e1e1e] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.22em] text-[#3a3a3a]">
                {project.category}
              </span>
              <span className="font-mono text-[9px] tracking-[0.18em] text-[#2a2a2a]">
                {project.year}
              </span>
            </div>
            {/* Title */}
            <h2
              className={cn(
                "font-display font-semibold leading-[0.9] tracking-tight text-[#f0ede8] transition-colors duration-300",
                featured
                  ? "text-[clamp(28px,4vw,52px)]"
                  : "text-[clamp(24px,3vw,40px)]"
              )}
            >
              {project.title}
              {project.status === "draft-slot" && (
                <span className="ml-3 align-middle font-mono text-[10px] font-normal text-[#2a2a2a]">
                  [slot]
                </span>
              )}
            </h2>
          </div>
          {/* Arrow */}
          <ArrowUpRightIcon className="mt-1 size-5 shrink-0 text-[#2a2a2a] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#f0ede8]" />
        </div>

        {/* Summary */}
        <p className="max-w-lg text-[13px] leading-[1.75] text-[#3a3a3a]">
          {project.summary}
        </p>

        {/* Bottom row */}
        <div className="flex items-center justify-between gap-4 border-t border-[#111111] pt-5">
          <p className="text-[12px] text-[#2e2e2e]">
            <span className="text-[#3a3a3a]">Role — </span>
            {project.roleSummary}
          </p>
          <div className="h-px w-8 shrink-0 bg-[#1e1e1e] transition-all duration-300 group-hover:w-12 group-hover:bg-[#e8e0d0]" />
        </div>
      </div>
    </Link>
  );
}

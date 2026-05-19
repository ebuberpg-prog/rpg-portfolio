import { ImageIcon, PlayIcon, SparklesIcon } from "lucide-react";
import { ProjectMedia } from "@/data/projects";
import { cn } from "@/lib/utils";

type MediaFrameProps = {
  media: ProjectMedia;
  priority?: boolean;
  className?: string;
};

const mediaLabels: Record<ProjectMedia["type"], string> = {
  image: "Image",
  video: "Video",
  gif: "GIF",
  embed: "Embed",
  interactive: "Interactive"
};

export function MediaFrame({ media, className }: MediaFrameProps) {
  const icon =
    media.type === "video" || media.type === "gif" ? (
      <PlayIcon aria-hidden="true" className="size-4" />
    ) : media.type === "interactive" ? (
      <SparklesIcon aria-hidden="true" className="size-4" />
    ) : (
      <ImageIcon aria-hidden="true" className="size-4" />
    );

  if (media.src && media.type === "video") {
    return (
      <figure
        className={cn(
          "group relative overflow-hidden bg-[#0a0a0a]",
          className
        )}
      >
        <video
          className="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          autoPlay
          muted
          loop
          playsInline
          poster={media.poster}
          aria-label={media.alt}
        >
          <source src={media.src} />
        </video>
        {media.caption ? (
          <figcaption className="border-t border-[#1a1a1a] px-4 py-3 text-xs text-[#888888]">
            {media.caption}
          </figcaption>
        ) : null}
      </figure>
    );
  }

  if (media.src && (media.type === "image" || media.type === "gif")) {
    return (
      <figure
        className={cn(
          "group relative overflow-hidden bg-[#0a0a0a]",
          className
        )}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={media.src}
          alt={media.alt}
          className="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          loading="lazy"
        />
        {media.caption ? (
          <figcaption className="border-t border-[#1a1a1a] px-4 py-3 text-xs text-[#888888]">
            {media.caption}
          </figcaption>
        ) : null}
      </figure>
    );
  }

  return (
    <figure
      className={cn(
        "group relative flex min-h-56 overflow-hidden border border-[#1a1a1a] bg-[#0f0f0f] sm:aspect-video",
        className
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#7c3aed,transparent_18rem),radial-gradient(circle_at_80%_20%,#4c1d95,transparent_20rem)] opacity-15 transition-opacity group-hover:opacity-25" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#7c3aed] to-transparent opacity-50" />
      <div className="relative flex w-full flex-col justify-between p-5">
        <div className="flex items-center justify-between gap-4">
          <span className="inline-flex items-center gap-2 border border-[#1a1a1a] bg-[#060606]/80 px-2.5 py-1 text-xs text-[#888888]">
            {icon}
            {mediaLabels[media.type]}
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#888888]">
            Draft media
          </span>
        </div>
        <figcaption className="max-w-lg text-sm leading-relaxed text-[#888888]">
          {media.caption ?? media.alt}
        </figcaption>
      </div>
    </figure>
  );
}

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className
}: SectionHeadingProps) {
  return (
    <div className={cn("grid gap-6 lg:grid-cols-[0.35fr_1fr]", className)}>
      <div>
        {eyebrow ? (
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#888888]">
            {eyebrow}
          </p>
        ) : null}
      </div>
      <div className="flex max-w-4xl flex-col gap-4">
        <h2 className="font-display text-4xl font-semibold leading-[0.95] sm:text-5xl lg:text-7xl">
          {title}
        </h2>
        {description ? (
          <p className="max-w-2xl text-lg leading-relaxed text-[#888888] sm:text-xl">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}

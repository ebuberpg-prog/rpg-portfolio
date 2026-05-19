import { cn } from "@/lib/utils";

type ReelStripProps = {
  count?: number;
  activeIndex?: number;
  className?: string;
};

export function ReelStrip({
  count = 12,
  activeIndex = 0,
  className
}: ReelStripProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("flex items-center gap-1.5", className)}
    >
      {Array.from({ length: count }).map((_, index) => (
        <span
          key={index}
          className={cn(
            "h-1.5 flex-1 rounded-full bg-border",
            index === activeIndex && "bg-lime",
            index > activeIndex && index < activeIndex + 3 && "bg-purple/70"
          )}
        />
      ))}
    </div>
  );
}

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] w-full max-w-3xl flex-col items-start justify-center gap-6 px-5 pt-32 pb-24 sm:px-8">
      <p className="font-mono text-sm uppercase tracking-[0.16em] text-[#888888]">
        404
      </p>
      <h1 className="font-display text-5xl font-semibold leading-[0.95] sm:text-6xl">
        Page not found
      </h1>
      <p className="text-[#888888]">
        This route is not available yet, or the content has not been added.
      </p>
      <Button asChild className="h-12 px-6 text-base">
        <Link href="/">Back home</Link>
      </Button>
    </div>
  );
}

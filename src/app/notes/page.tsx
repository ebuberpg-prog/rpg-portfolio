import type { Metadata } from "next";
import Link from "next/link";
import { notes } from "@/data/notes";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Notes",
  description: "Writing, process notes, and experiments from EbubeRPG."
};

export default function NotesPage() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-8 px-5 pt-32 pb-24 sm:px-8">
      <Reveal>
        <header className="mb-12 flex flex-col gap-4">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#888888]">
            Notes
          </p>
          <h1 className="font-display text-5xl font-semibold leading-[0.95] sm:text-6xl">
            Writing & process
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-[#888888]">
            A future home for process writing, experiments, breakdowns, and
            behind-the-scenes notes.
          </p>
        </header>
      </Reveal>

      {notes.length > 0 ? (
        <div className="flex flex-col gap-4">
          {notes.map((note) => (
            <Link
              key={note.slug}
              href={`/notes/${note.slug}`}
              className="border border-[#1a1a1a] bg-[#0a0a0a] p-6 transition-colors hover:bg-[#0f0f0f]"
            >
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-[#888888]">
                {note.publishedAt}
              </p>
              <h2 className="mt-2 text-2xl font-semibold">{note.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-[#888888]">
                {note.summary}
              </p>
            </Link>
          ))}
        </div>
      ) : (
        <div className="border border-dashed border-[#1a1a1a] p-8 text-sm leading-relaxed text-[#888888]">
          No notes yet. The route exists so editorial content can be added
          cleanly later.
        </div>
      )}
    </div>
  );
}

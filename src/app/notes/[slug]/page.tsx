import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getNoteBySlug, notes } from "@/data/notes";

type NotePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return notes.map((note) => ({
    slug: note.slug
  }));
}

export async function generateMetadata({
  params
}: NotePageProps): Promise<Metadata> {
  const { slug } = await params;
  const note = getNoteBySlug(slug);

  if (!note) {
    return {};
  }

  return {
    title: note.title,
    description: note.summary
  };
}

export default async function NotePage({ params }: NotePageProps) {
  const { slug } = await params;
  const note = getNoteBySlug(slug);

  if (!note) {
    notFound();
  }

  return (
    <article className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-5 py-16 sm:px-8">
      <header className="flex flex-col gap-3 border-b pb-8">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
          {note.publishedAt}
        </p>
        <h1 className="text-4xl font-semibold sm:text-5xl">{note.title}</h1>
        <p className="text-lg leading-8 text-muted-foreground">
          {note.summary}
        </p>
      </header>
      <div className="rounded-lg border border-dashed p-8 text-sm leading-6 text-muted-foreground">
        Note body support can be connected to MDX or local rich text when you
        start writing.
      </div>
    </article>
  );
}

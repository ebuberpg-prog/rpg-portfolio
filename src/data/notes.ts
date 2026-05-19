export type Note = {
  title: string;
  slug: string;
  summary: string;
  publishedAt: string;
  updatedAt?: string;
};

export const notes: Note[] = [];

export function getNoteBySlug(slug: string) {
  return notes.find((note) => note.slug === slug);
}

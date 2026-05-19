export type Experiment = {
  slug: string;
  title: string;
  year: string;
  category: string;
  summary: string;
  cover: {
    type: "image" | "video" | "gif";
    src?: string;
    alt: string;
    poster?: string;
  };
};

export const experiments: Experiment[] = [];

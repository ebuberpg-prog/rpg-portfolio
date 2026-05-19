export const projectCategories = [
  "Motion Design",
  "Art Direction",
  "3D",
  "Branding",
  "Experiments"
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export type ProjectMedia = {
  type: "image" | "video" | "gif" | "embed" | "interactive";
  src?: string;
  alt: string;
  poster?: string;
  caption?: string;
  provider?: "local" | "vimeo" | "youtube" | "cloudinary" | "mux" | "other";
};

export type ProjectCredit = {
  role: string;
  names: string[];
};

export type ProjectCaseStudyBlock =
  | {
      type: "text";
      label: "Context" | "Role" | "Craft" | "Impact";
      heading: string;
      body: string;
    }
  | {
      type: "media";
      heading?: string;
      media: ProjectMedia[];
    }
  | {
      type: "quote";
      quote: string;
      attribution?: string;
    };

export type Project = {
  order: number;
  title: string;
  slug: string;
  year: string;
  category: ProjectCategory;
  summary: string;
  roleSummary: string;
  impact: string;
  roles: string[];
  tools: string[];
  client?: string;
  featured?: boolean;
  status?: "draft-slot" | "ready";
  cover: ProjectMedia;
  media?: ProjectMedia[];
  caseStudy: ProjectCaseStudyBlock[];
  credits?: ProjectCredit[];
  links?: {
    label: string;
    href: string;
  }[];
  updatedAt?: string;
};

const sharedTools = ["After Effects", "Cinema 4D", "Illustrator", "Figma"];

const projectSeeds: Project[] = [
  {
    order: 1,
    title: "Case Study Slot 01",
    slug: "case-study-slot-01",
    year: "TBD",
    category: "Motion Design",
    client: "Replace with client",
    summary:
      "Reserved for a flagship motion-led project with the strongest first impression.",
    roleSummary:
      "Replace with the clearest sentence about your ownership, contribution, and creative responsibility.",
    impact:
      "Replace with reach, launch context, campaign use, client result, or a concise qualitative outcome.",
    roles: ["Motion Design", "Art Direction"],
    tools: sharedTools,
    featured: true,
    status: "draft-slot",
    cover: {
      type: "video",
      alt: "Replace with the hero video or strongest moving image for case study slot 01."
    },
    caseStudy: [
      {
        type: "text",
        label: "Context",
        heading: "What this project needed to do",
        body: "Replace with the project brief, audience, launch context, and why the work mattered."
      },
      {
        type: "text",
        label: "Role",
        heading: "What Ebube owned",
        body: "Replace with your specific responsibilities, collaborators, and decision-making scope."
      },
      {
        type: "text",
        label: "Craft",
        heading: "The creative system",
        body: "Replace with the visual language, motion principles, technical approach, and production choices."
      },
      {
        type: "text",
        label: "Impact",
        heading: "What the work made possible",
        body: "Replace with measurable impact, client feedback, launch results, or why this belongs in the top five."
      }
    ]
  },
  {
    order: 2,
    title: "Case Study Slot 02",
    slug: "case-study-slot-02",
    year: "TBD",
    category: "Art Direction",
    client: "Replace with client",
    summary:
      "Reserved for a project that proves concept, taste, and direction across a complete visual world.",
    roleSummary:
      "Replace with the strongest framing of your creative direction and visual decision-making.",
    impact:
      "Replace with the result, rollout, stakeholder value, or why the direction was effective.",
    roles: ["Art Direction", "Visual Development"],
    tools: sharedTools,
    featured: true,
    status: "draft-slot",
    cover: {
      type: "image",
      alt: "Replace with the strongest key visual for case study slot 02."
    },
    caseStudy: [
      {
        type: "text",
        label: "Context",
        heading: "The visual problem",
        body: "Replace with the brand, campaign, or story challenge."
      },
      {
        type: "text",
        label: "Role",
        heading: "Direction and decisions",
        body: "Replace with your art direction responsibilities and collaborators."
      },
      {
        type: "text",
        label: "Craft",
        heading: "How the world was shaped",
        body: "Replace with references, composition, color, type, motion, and production logic."
      },
      {
        type: "text",
        label: "Impact",
        heading: "Why it earns its place",
        body: "Replace with the reason this is one of the five strongest pieces."
      }
    ]
  },
  {
    order: 3,
    title: "Case Study Slot 03",
    slug: "case-study-slot-03",
    year: "TBD",
    category: "3D",
    client: "Replace with client",
    summary:
      "Reserved for a 3D or mixed-media project that demonstrates polish, technical control, and taste.",
    roleSummary:
      "Replace with your role across look development, animation, production, or final delivery.",
    impact:
      "Replace with where the work shipped, how it was used, or what it helped communicate.",
    roles: ["3D Design", "Motion Design"],
    tools: ["Cinema 4D", "Redshift", "After Effects", "Figma"],
    featured: true,
    status: "draft-slot",
    cover: {
      type: "video",
      alt: "Replace with the strongest 3D loop or render sequence for case study slot 03."
    },
    caseStudy: [
      {
        type: "text",
        label: "Context",
        heading: "The production challenge",
        body: "Replace with the brief and constraints."
      },
      {
        type: "text",
        label: "Role",
        heading: "Your contribution",
        body: "Replace with the work you owned in the pipeline."
      },
      {
        type: "text",
        label: "Craft",
        heading: "The build and finish",
        body: "Replace with modeling, lighting, animation, compositing, and polish decisions."
      },
      {
        type: "text",
        label: "Impact",
        heading: "The final value",
        body: "Replace with what the 3D work achieved."
      }
    ]
  },
  {
    order: 4,
    title: "Case Study Slot 04",
    slug: "case-study-slot-04",
    year: "TBD",
    category: "Branding",
    client: "Replace with client",
    summary:
      "Reserved for a brand or system project that proves strategic thinking and consistency.",
    roleSummary:
      "Replace with your role in shaping, extending, or animating the brand system.",
    impact:
      "Replace with system usefulness, rollout scale, asset count, or team/client value.",
    roles: ["Brand System", "Motion"],
    tools: sharedTools,
    featured: true,
    status: "draft-slot",
    cover: {
      type: "image",
      alt: "Replace with a system overview or brand-led cover for case study slot 04."
    },
    caseStudy: [
      {
        type: "text",
        label: "Context",
        heading: "The system need",
        body: "Replace with why the identity or motion system was needed."
      },
      {
        type: "text",
        label: "Role",
        heading: "Your system role",
        body: "Replace with your strategic, visual, and production responsibilities."
      },
      {
        type: "text",
        label: "Craft",
        heading: "Rules that flex",
        body: "Replace with principles, components, templates, and motion behavior."
      },
      {
        type: "text",
        label: "Impact",
        heading: "How the system scaled",
        body: "Replace with evidence that the system worked beyond a single asset."
      }
    ]
  },
  {
    order: 5,
    title: "Case Study Slot 05",
    slug: "case-study-slot-05",
    year: "TBD",
    category: "Experiments",
    client: "Independent",
    summary:
      "Reserved for the most distinctive experimental or personal work that reveals your taste.",
    roleSummary:
      "Replace with the idea, constraint, or creative obsession behind the work.",
    impact:
      "Replace with what the experiment taught, unlocked, or demonstrates about your range.",
    roles: ["Creative Direction", "Experiment"],
    tools: sharedTools,
    featured: true,
    status: "draft-slot",
    cover: {
      type: "interactive",
      alt: "Replace with an experiment, interaction, or unexpected media moment for case study slot 05."
    },
    caseStudy: [
      {
        type: "text",
        label: "Context",
        heading: "The creative question",
        body: "Replace with the idea or question that started the experiment."
      },
      {
        type: "text",
        label: "Role",
        heading: "Self-directed ownership",
        body: "Replace with what you explored, produced, and refined."
      },
      {
        type: "text",
        label: "Craft",
        heading: "The expressive move",
        body: "Replace with the style, system, technique, or constraint that gives the work character."
      },
      {
        type: "text",
        label: "Impact",
        heading: "Why it matters",
        body: "Replace with why this reveals range, taste, or a direction worth showing."
      }
    ]
  }
];

export const projects = projectSeeds.sort((a, b) => a.order - b.order);

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

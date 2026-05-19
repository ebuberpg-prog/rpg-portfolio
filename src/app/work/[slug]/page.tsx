import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeftIcon, ArrowUpRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MediaFrame } from "@/components/portfolio/media-frame";
import { ProjectMeta } from "@/components/portfolio/project-meta";
import { getProjectBySlug, projects } from "@/data/projects";
import { Reveal } from "@/components/reveal";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug
  }));
}

export async function generateMetadata({
  params
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      images: project.cover.src ? [project.cover.src] : undefined
    }
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const textBlocks = project.caseStudy.filter((block) => block.type === "text");
  const mediaBlocks = project.caseStudy.filter((block) => block.type === "media");
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[currentIndex + 1] ?? projects[0];
  const prevProject =
    projects[currentIndex - 1] ?? projects[projects.length - 1];

  return (
    <article className="flex w-full flex-col px-5 pt-28 pb-24 sm:px-8 lg:pb-32">
      <div className="mx-auto w-full max-w-7xl">
        <Reveal>
          <Button
            asChild
            variant="ghost"
            className="mb-10 w-fit text-[#888888] hover:text-white"
          >
            <Link href="/work">
              <ArrowLeftIcon className="size-4" />
              Work
            </Link>
          </Button>
        </Reveal>

        <header className="mb-16 flex flex-col gap-8">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3 text-sm text-[#888888]">
              <span>{project.category}</span>
              {project.status === "draft-slot" ? (
                <span className="text-[#888888]/50">— Replaceable slot</span>
              ) : null}
              <span className="text-[#888888]/30">|</span>
              <span className="font-mono text-xs uppercase tracking-[0.2em]">
                Case study 0{project.order} / 05
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="max-w-5xl font-display text-5xl font-semibold leading-[0.95] sm:text-7xl lg:text-8xl">
              {project.title}
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="max-w-2xl text-lg leading-relaxed text-[#888888] sm:text-xl">
              {project.summary}
            </p>
          </Reveal>
        </header>

        <Reveal>
          <div className="mb-16 grid gap-8 lg:grid-cols-[1fr_320px]">
            <MediaFrame media={project.cover} className="min-h-[28rem]" />
            <ProjectMeta project={project} />
          </div>
        </Reveal>

        <section className="flex flex-col gap-0">
          {textBlocks.map((block) => (
            <Reveal key={block.label}>
              <div className="grid gap-6 border-t border-[#1a1a1a] py-10 lg:grid-cols-[0.28fr_1fr]">
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#7c3aed]">
                  {block.label}
                </div>
                <div className="flex max-w-3xl flex-col gap-4">
                  <h2 className="font-display text-2xl font-semibold sm:text-3xl lg:text-4xl">
                    {block.heading}
                  </h2>
                  <p className="text-base leading-relaxed text-[#888888] sm:text-lg">
                    {block.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </section>

        {mediaBlocks.map((block, index) => (
          <section key={index} className="mt-10 flex flex-col gap-4">
            {block.heading ? (
              <Reveal>
                <h2 className="font-display text-2xl font-semibold sm:text-3xl">
                  {block.heading}
                </h2>
              </Reveal>
            ) : null}
            <div className="grid gap-4 md:grid-cols-2">
              {block.media.map((media) => (
                <MediaFrame key={media.alt} media={media} />
              ))}
            </div>
          </section>
        ))}

        <footer className="mt-20 flex flex-col justify-between gap-5 border-t border-[#1a1a1a] pt-10 sm:flex-row sm:items-center">
          <div className="flex gap-6">
            <Button
              asChild
              variant="ghost"
              className="text-[#888888] hover:text-white"
            >
              <Link href={`/work/${prevProject.slug}`}>
                <ArrowLeftIcon className="size-4" />
                {prevProject.title}
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              className="text-[#888888] hover:text-white"
            >
              <Link href={`/work/${nextProject.slug}`}>
                {nextProject.title}
                <ArrowUpRightIcon className="size-4" />
              </Link>
            </Button>
          </div>
          <Button
            asChild
            className="h-12 px-6 text-base"
          >
            <Link href="/contact">
              Email availability
              <ArrowUpRightIcon className="size-4" />
            </Link>
          </Button>
        </footer>
      </div>
    </article>
  );
}

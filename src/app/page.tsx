import Link from "next/link";
import { ArrowRightIcon, ArrowDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectPreview } from "@/components/portfolio/project-preview";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { siteConfig } from "@/config/site";
import { getFeaturedProjects } from "@/data/projects";
import { Reveal } from "@/components/reveal";

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="flex w-full flex-col">
      {/* Hero */}
      <section className="relative flex min-h-[92vh] flex-col justify-end px-5 pb-16 pt-32 sm:px-8 lg:pb-24">
        <div className="mx-auto w-full max-w-7xl">
          <Reveal>
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-[#888888]">
              Motion design & art direction
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="max-w-5xl font-display text-6xl font-semibold leading-[0.9] sm:text-8xl lg:text-[9rem]">
              {siteConfig.name}
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#888888] sm:text-xl">
              A personal studio for motion, direction, and visual systems.
              Based in Lagos, available worldwide.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="h-12 px-6 text-base">
                <Link href="/work">
                  View work
                  <ArrowRightIcon className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 border-[#1a1a1a] bg-transparent px-6 text-base text-white hover:bg-white hover:text-[#060606]"
              >
                <Link href={`mailto:${siteConfig.links.email}`}>
                  Email availability
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block">
          <ArrowDownIcon className="size-5 animate-bounce text-[#888888]" />
        </div>
      </section>

      {/* Selected Work */}
      <section className="mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <SectionHeading
          eyebrow="Selected work"
          title="Five case studies. No filler."
          description="A focused portfolio for motion design, art direction, and visual systems."
        />
        <div className="mt-16 flex flex-col gap-6">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.1}>
              <ProjectPreview
                project={project}
                index={index}
                featured={index === 0}
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Capabilities */}
      <section className="border-t border-[#1a1a1a]">
        <div className="mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-[0.4fr_1fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#888888]">
                Capabilities
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Motion direction",
                "Art direction",
                "3D look development",
                "Brand motion systems",
                "Campaign visuals",
                "Experimental moving image"
              ].map((capability) => (
                <Reveal key={capability}>
                  <div className="border-t border-[#1a1a1a] pt-4">
                    <p className="font-display text-xl font-medium">
                      {capability}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-[#1a1a1a]">
        <div className="mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
          <p className="mb-16 font-mono text-xs uppercase tracking-[0.2em] text-[#888888]">
            What clients say
          </p>
          <div className="grid gap-12 lg:grid-cols-2">
            {[
              {
                quote:
                  "Ebube brought a level of craft and attention to detail that elevated our entire campaign. The motion work was exactly what we needed.",
                name: "Client Name",
                title: "Creative Director, Agency"
              },
              {
                quote:
                  "Working with Ebube felt like having an extension of our team. The visual direction was bold, clear, and delivered on time.",
                name: "Client Name",
                title: "Brand Lead, Tech Company"
              }
            ].map((testimonial, index) => (
              <Reveal key={index} delay={index * 0.15}>
                <div className="flex flex-col gap-6">
                  <p className="text-xl leading-relaxed text-[#888888] sm:text-2xl">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div>
                    <p className="font-medium text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-[#888888]">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

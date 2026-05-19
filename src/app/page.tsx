import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";
import { ProjectPreview } from "@/components/portfolio/project-preview";
import { CapabilitiesMarquee } from "@/components/portfolio/capabilities-marquee";
import { HeroHeadline } from "@/components/portfolio/hero-headline";
import { siteConfig } from "@/config/site";
import { getFeaturedProjects } from "@/data/projects";
import { Reveal } from "@/components/reveal";

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="flex w-full flex-col">

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden px-6 pb-14 pt-0 sm:px-10">

        {/* Faint background texture */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #f0ede8 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Warm glow top-right */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-15%] top-[-10%] h-[600px] w-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(232,224,208,0.045) 0%, transparent 70%)",
          }}
        />

        {/* Top bar */}
        <div className="relative flex items-end justify-between pt-32 sm:pt-36">
          <Reveal>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#2e2e2e]">
              Motion — Direction — Systems
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#2e2e2e]">
              ©{new Date().getFullYear()}
            </p>
          </Reveal>
        </div>

        {/* Main headline block */}
        <div className="relative flex flex-1 flex-col justify-center py-10">
          <div className="text-[clamp(72px,12vw,180px)]">
            <HeroHeadline name={siteConfig.name} />
          </div>

          {/* Descriptor — right-aligned offset row */}
          <div className="mt-8 flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
            <Reveal delay={0.4}>
              <p className="max-w-sm text-[15px] leading-[1.7] text-[#4a4a4a]">
                A personal studio for motion,
                <br />direction, and visual systems.
                <br />
                <span className="text-[#2e2e2e]">Based in Lagos, available worldwide.</span>
              </p>
            </Reveal>
            <Reveal delay={0.5}>
              <div className="flex flex-col items-start gap-3 sm:items-end">
                <Link
                  href="/work"
                  className="group inline-flex items-center gap-3 border border-[#f0ede8] px-7 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-[#f0ede8] transition-all duration-300 hover:bg-[#f0ede8] hover:text-[#080808]"
                >
                  View selected work
                  <ArrowUpRightIcon className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href={`mailto:${siteConfig.links.email}`}
                  className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#3a3a3a] transition-colors duration-200 hover:text-[#6a6a6a]"
                >
                  {siteConfig.links.email} ↗
                </Link>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="relative flex items-center justify-between border-t border-[#1a1a1a] pt-5">
          <Reveal delay={0.6}>
            <div className="flex items-center gap-6">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className="h-px w-5 bg-[#2a2a2a] transition-colors duration-200"
                    style={{ background: i === 0 ? "#c8ff00" : "#2a2a2a" }}
                  />
                ))}
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#2e2e2e]">
                Portfolio 2024–25
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.65}>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#2e2e2e]">
              Scroll
            </span>
          </Reveal>
        </div>
      </section>

      {/* ─── MARQUEE ──────────────────────────────────────────── */}
      <CapabilitiesMarquee />

      {/* ─── SELECTED WORK ────────────────────────────────────── */}
      <section className="mx-auto w-full max-w-[1440px] px-6 py-24 sm:px-10 lg:py-36">
        {/* Section header */}
        <div className="mb-14 flex items-end justify-between gap-4">
          <Reveal>
            <h2 className="font-display text-[clamp(36px,5vw,64px)] font-semibold leading-[0.92] tracking-tight">
              Selected Work
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/work"
              className="group hidden items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[#3a3a3a] transition-colors hover:text-[#f0ede8] sm:flex"
            >
              All projects
              <ArrowUpRightIcon className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>

        {/* Project list */}
        <div className="flex flex-col divide-y divide-[#1a1a1a] border-y border-[#1a1a1a]">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.06}>
              <ProjectPreview project={project} index={index} featured={index === 0} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─── CAPABILITIES ─────────────────────────────────────── */}
      <section className="border-t border-[#1a1a1a]">
        <div className="mx-auto w-full max-w-[1440px] px-6 py-24 sm:px-10 lg:py-36">
          <div className="grid gap-20 lg:grid-cols-[280px_1fr]">

            {/* Left label */}
            <Reveal>
              <div className="flex flex-col gap-4 lg:pt-2">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#2e2e2e]">
                  Capabilities
                </p>
                <div className="h-px w-10 bg-[#2a2a2a]" />
              </div>
            </Reveal>

            {/* Right grid */}
            <div className="grid grid-cols-1 gap-0 divide-y divide-[#141414] sm:grid-cols-2 lg:grid-cols-3">
              {[
                { label: "Motion direction", num: "01" },
                { label: "Art direction", num: "02" },
                { label: "3D look development", num: "03" },
                { label: "Brand motion systems", num: "04" },
                { label: "Campaign visuals", num: "05" },
                { label: "Experimental moving image", num: "06" },
              ].map((item, i) => (
                <Reveal key={item.label} delay={i * 0.05}>
                  <div className="group flex items-start gap-4 py-7 pr-6 transition-colors duration-200 hover:text-[#f0ede8]">
                    <span className="mt-1 font-mono text-[9px] tracking-widest text-[#2a2a2a]">
                      {item.num}
                    </span>
                    <span className="font-display text-[17px] font-medium leading-snug text-[#4a4a4a] transition-colors duration-200 group-hover:text-[#f0ede8]">
                      {item.label}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─────────────────────────────────────── */}
      <section className="border-t border-[#1a1a1a]">
        <div className="mx-auto w-full max-w-[1440px] px-6 py-24 sm:px-10 lg:py-36">
          <div className="mb-14">
            <Reveal>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#2e2e2e]">
                What clients say
              </p>
            </Reveal>
          </div>
          <div className="grid gap-px bg-[#141414] lg:grid-cols-2">
            {[
              {
                quote:
                  "Ebube brought a level of craft and attention to detail that elevated our entire campaign. The motion work was exactly what we needed.",
                name: "Client Name",
                title: "Creative Director, Agency",
              },
              {
                quote:
                  "Working with Ebube felt like having an extension of our team. The visual direction was bold, clear, and delivered on time.",
                name: "Client Name",
                title: "Brand Lead, Tech Company",
              },
            ].map((t, i) => (
              <Reveal key={i} delay={i * 0.12}>
                <div className="flex h-full flex-col justify-between gap-12 bg-[#080808] p-8 lg:p-12">
                  <p className="text-[17px] leading-[1.75] text-[#4a4a4a]">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="h-px w-8 shrink-0 bg-[#e8e0d0]" />
                    <div>
                      <p className="text-[13px] font-medium text-[#f0ede8]">
                        {t.name}
                      </p>
                      <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-[#3a3a3a]">
                        {t.title}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT CTA ──────────────────────────────────────── */}
      <section className="border-t border-[#1a1a1a]">
        <div className="mx-auto w-full max-w-[1440px] px-6 py-24 sm:px-10 lg:py-36">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <Reveal>
              <div className="max-w-2xl">
                <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.3em] text-[#2e2e2e]">
                  Start a project
                </p>
                <h2 className="font-display text-[clamp(36px,6vw,80px)] font-semibold leading-[0.9] tracking-tight">
                  Let&apos;s make
                  <br />
                  <span className="text-[#4a4a4a]">something</span>
                  <br />
                  worth watching.
                </h2>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <Link
                href={`mailto:${siteConfig.links.email}`}
                className="group inline-flex items-center gap-3 border border-[#1e1e1e] px-7 py-4 font-mono text-[11px] uppercase tracking-[0.2em] text-[#4a4a4a] transition-all duration-300 hover:border-[#f0ede8] hover:text-[#f0ede8]"
              >
                {siteConfig.links.email}
                <ArrowUpRightIcon className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRightIcon, MailIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact EbubeRPG for motion design and art direction work."
};

const plannedLinks = [
  { label: "LinkedIn", href: siteConfig.links.linkedin },
  { label: "Instagram", href: siteConfig.links.instagram },
  { label: "YouTube", href: siteConfig.links.youtube },
  { label: "X", href: siteConfig.links.x },
  { label: "GitHub", href: siteConfig.links.github }
];

export default function ContactPage() {
  return (
    <div className="flex min-h-[80vh] w-full flex-col justify-center px-5 pt-32 pb-24 sm:px-8 lg:pb-32">
      <div className="mx-auto w-full max-w-7xl">
        <Reveal>
          <header className="mb-16 flex flex-col gap-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#888888]">
              Contact
            </p>
            <h1 className="max-w-5xl font-display text-5xl font-semibold leading-[0.95] sm:text-7xl lg:text-8xl">
              Let&apos;s work together
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-[#888888] sm:text-xl">
              I&apos;m currently available for freelance projects and studio
              collaborations. If you have a project in mind, I&apos;d love to hear
              about it.
            </p>
          </header>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mb-20 flex flex-col gap-3 sm:flex-row">
            <Button asChild className="h-14 px-8 text-lg">
              <Link href={`mailto:${siteConfig.links.email}`}>
                <MailIcon className="size-5" />
                {siteConfig.links.email}
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-14 border-[#1a1a1a] bg-transparent px-8 text-lg text-white hover:bg-white hover:text-[#060606]"
            >
              <Link href="/work">
                View work
                <ArrowUpRightIcon className="size-5" />
              </Link>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="border-t border-[#1a1a1a] pt-10">
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-[#888888]">
              Social
            </p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {plannedLinks.map((link) =>
                link.href ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between border border-[#1a1a1a] bg-[#0a0a0a] px-5 py-4 text-sm text-[#888888] transition-colors hover:border-[#7c3aed] hover:text-white"
                  >
                    {link.label}
                    <ArrowUpRightIcon className="size-4" />
                  </a>
                ) : (
                  <div
                    key={link.label}
                    className="flex items-center justify-between border border-[#1a1a1a] bg-[#0a0a0a] px-5 py-4 text-sm text-[#888888]/40"
                  >
                    {link.label}
                  </div>
                )
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "About",
  description: "About EbubeRPG — motion design and art direction studio."
};

const capabilities = [
  "Motion direction",
  "Art direction",
  "3D look development",
  "Brand motion systems",
  "Campaign visuals",
  "Experimental moving image"
];

const clients = [
  "Client A",
  "Client B",
  "Client C",
  "Client D",
  "Client E",
  "Client F"
];

export default function AboutPage() {
  return (
    <div className="flex w-full flex-col px-5 pt-32 pb-24 sm:px-8 lg:pb-32">
      <div className="mx-auto w-full max-w-7xl">
        <Reveal>
          <header className="mb-20 flex flex-col gap-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#888888]">
              About
            </p>
            <h1 className="max-w-5xl font-display text-5xl font-semibold leading-[0.95] sm:text-7xl lg:text-8xl">
              A personal studio for motion, direction, and visual systems.
            </h1>
          </header>
        </Reveal>

        <div className="mb-24 grid gap-16 lg:grid-cols-[0.4fr_1fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#888888]">
              Bio
            </p>
          </div>
          <Reveal>
            <div className="flex max-w-3xl flex-col gap-6 text-lg leading-relaxed text-[#888888] sm:text-xl">
              <p>
                I&apos;m Ebube Onyema, a motion designer and art director based in
                Lagos. I help brands and studios tell visual stories through
                motion, building systems that scale from a single asset to a full
                campaign.
              </p>
              <p>
                My work sits at the intersection of design and animation —
                combining strong conceptual thinking with technical execution
                across 2D, 3D, and motion systems.
              </p>
              <p>
                Previously, I&apos;ve worked with teams across advertising, tech,
                and entertainment, delivering work that ranges from brand
                identities to broadcast motion packages.
              </p>
            </div>
          </Reveal>
        </div>

        <SectionHeading
          eyebrow="Capabilities"
          title="Built for the kind of work that needs taste and execution."
          className="mb-16"
        />

        <div className="mb-24 grid gap-0 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability, index) => (
            <Reveal key={capability} delay={index * 0.05}>
              <div className="border-t border-[#1a1a1a] py-5">
                <p className="font-display text-xl font-medium">{capability}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mb-24 grid gap-16 lg:grid-cols-[0.4fr_1fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#888888]">
              Selected clients
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {clients.map((client, index) => (
              <Reveal key={client} delay={index * 0.05}>
                <div className="border border-[#1a1a1a] bg-[#0a0a0a] px-5 py-4 text-sm text-[#888888]">
                  {client}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-between gap-5 border-t border-[#1a1a1a] bg-[#0a0a0a] p-6 sm:flex-row sm:items-center">
          <p className="max-w-2xl text-sm leading-relaxed text-[#888888]">
            Available for freelance projects, studio collaborations, and
            full-time opportunities.
          </p>
          <Button
            asChild
            variant="outline"
            className="h-12 border-[#1a1a1a] bg-transparent px-6 text-base text-white hover:bg-white hover:text-[#060606]"
          >
            <Link href="/contact">
              Start a conversation
              <ArrowUpRightIcon className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

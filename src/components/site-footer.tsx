import Link from "next/link";
import { siteConfig } from "@/config/site";

const footerLinks = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/experiments", label: "Experiments" },
  { href: "/contact", label: "Contact" }
];

const socialLinks = [
  { label: "LinkedIn", href: siteConfig.links.linkedin },
  { label: "Instagram", href: siteConfig.links.instagram },
  { label: "YouTube", href: siteConfig.links.youtube },
  { label: "X", href: siteConfig.links.x }
];

export function SiteFooter() {
  return (
    <footer className="border-t border-[#1a1a1a]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-5 py-20 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.6fr]">
          <div className="flex flex-col gap-6">
            <h2 className="font-display text-5xl font-semibold leading-[0.95] sm:text-7xl lg:text-8xl">
              Let&apos;s work
              <br />
              together
            </h2>
            <a
              href={`mailto:${siteConfig.links.email}`}
              className="text-xl text-[#888888] transition-colors hover:text-[#7c3aed] hover:underline sm:text-2xl"
            >
              {siteConfig.links.email}
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-4">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#888888]">
                Navigate
              </p>
              <div className="flex flex-col gap-2">
                {footerLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-[#888888] transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#888888]">
                Social
              </p>
              <div className="flex flex-col gap-2">
                {socialLinks.map((link) =>
                  link.href ? (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#888888] transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <span
                      key={link.label}
                      className="text-sm text-[#888888]/50"
                    >
                      {link.label}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4 border-t border-[#1a1a1a] pt-8 text-sm text-[#888888] sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {siteConfig.creator}</p>
          <p>Motion design & art direction</p>
        </div>
      </div>
    </footer>
  );
}

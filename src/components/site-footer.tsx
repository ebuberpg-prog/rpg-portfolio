import Link from "next/link";
import { siteConfig } from "@/config/site";

const footerLinks = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/experiments", label: "Experiments" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { label: "LinkedIn", href: siteConfig.links.linkedin },
  { label: "Instagram", href: siteConfig.links.instagram },
  { label: "YouTube", href: siteConfig.links.youtube },
  { label: "X / Twitter", href: siteConfig.links.x },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-[#1a1a1a]">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10">

        {/* Main footer content */}
        <div className="grid gap-16 py-20 lg:grid-cols-[1fr_auto]">

          {/* Left: Big wordmark */}
          <div className="flex flex-col justify-between gap-10">
            <Link href="/" className="font-display text-[clamp(48px,9vw,120px)] font-semibold leading-[0.88] tracking-tight text-[#f0ede8] opacity-[0.06] transition-opacity duration-500 hover:opacity-10">
              {siteConfig.name}
            </Link>
            <div className="flex flex-col gap-2">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#2e2e2e]">
                Motion design & art direction
              </p>
              <a
                href={`mailto:${siteConfig.links.email}`}
                className="text-[15px] text-[#3a3a3a] transition-colors duration-200 hover:text-[#f0ede8]"
              >
                {siteConfig.links.email}
              </a>
            </div>
          </div>

          {/* Right: Links */}
          <div className="grid grid-cols-2 gap-10 pt-2 sm:gap-16">
            <div className="flex flex-col gap-5">
              <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#2a2a2a]">
                Navigate
              </p>
              <div className="flex flex-col gap-3">
                {footerLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-[13px] text-[#3a3a3a] transition-colors duration-200 hover:text-[#f0ede8]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#2a2a2a]">
                Social
              </p>
              <div className="flex flex-col gap-3">
                {socialLinks.map((link) =>
                  link.href ? (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] text-[#3a3a3a] transition-colors duration-200 hover:text-[#f0ede8]"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <span key={link.label} className="text-[13px] text-[#2a2a2a]">
                      {link.label}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col justify-between gap-3 border-t border-[#141414] py-6 sm:flex-row sm:items-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#2a2a2a]">
            © {new Date().getFullYear()} {siteConfig.creator}
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#2a2a2a]">
            Lagos, Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
}

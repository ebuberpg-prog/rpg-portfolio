"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

const navItems = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/experiments", label: "Experiments" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="mx-auto flex h-16 w-full max-w-[1440px] items-center justify-between px-6 sm:px-10">
        {/* Logo */}
        <Link href="/" className="group relative">
          <span className="font-display text-[13px] font-semibold tracking-widest text-[#f0ede8] uppercase">
            {siteConfig.name}
          </span>
          <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#e8e0d0] transition-all duration-500 group-hover:w-full" />
        </Link>

        {/* Nav */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 sm:flex">
          {navItems.map((item) => {
            const active =
              pathname === item.href ||
              pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative font-mono text-[11px] uppercase tracking-[0.18em] transition-colors duration-200",
                  active
                    ? "text-[#f0ede8]"
                    : "text-[#4a4a4a] hover:text-[#8a8a8a]"
                )}
              >
                {item.label}
                {active && (
                  <span className="absolute -bottom-0.5 left-0 h-px w-full bg-[#e8e0d0]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <span className="hidden items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[#3a3a3a] sm:flex">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#c8ff00] opacity-60" />
              <span className="relative inline-flex size-1.5 rounded-full bg-[#c8ff00]" />
            </span>
            Open to work
          </span>
          <Link
            href={`mailto:${siteConfig.links.email}`}
            className="border border-[#1e1e1e] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[#4a4a4a] transition-all duration-200 hover:border-[#f0ede8] hover:text-[#f0ede8]"
          >
            Say hello
          </Link>
        </div>
      </div>
    </header>
  );
}

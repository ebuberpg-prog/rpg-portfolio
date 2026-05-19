import Link from "next/link";
import { siteConfig } from "@/config/site";

const navItems = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/experiments", label: "Experiments" },
  { href: "/contact", label: "Contact" }
];

export function SiteHeader() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-[#1a1a1a] bg-[#060606]">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight text-white"
        >
          {siteConfig.name}
        </Link>
        <nav className="flex items-center gap-1 text-sm text-[#888888]">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-2 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href={`mailto:${siteConfig.links.email}`}
          className="hidden border border-[#1a1a1a] bg-white px-4 py-2 text-sm font-medium text-[#060606] transition-colors hover:bg-[#7c3aed] hover:text-white sm:inline-flex"
        >
          Email
        </Link>
      </div>
    </header>
  );
}

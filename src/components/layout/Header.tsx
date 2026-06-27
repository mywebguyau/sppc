"use client";

import Link from "next/link";
import { useState } from "react";
import { CrossLogo } from "@/components/brand/CrossLogo";
import { Button } from "@/components/ui/Button";
import { mainNav } from "@/content/navigation";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-oxblood/15 bg-parchment">
      <div className="border-b border-oxblood/10 bg-oxblood px-4 py-2 text-center text-sm text-parchment md:hidden">
        <span className="font-semibold">Sunday Holy Raza · 9:00am</span>
        {" · "}
        <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="underline">
          {siteConfig.phoneDisplay}
        </a>
      </div>

      <div className="mx-auto flex max-w-[1100px] items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold">
          <CrossLogo />
          <div className="font-display text-lg font-semibold leading-tight">
            {siteConfig.name}
            <span className="block text-[11px] font-normal uppercase tracking-[0.08em] text-ink-soft">
              {siteConfig.tagline}
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium lg:flex" aria-label="Main">
          {mainNav.map((item) =>
            item.children ? (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className="border-b-2 border-transparent py-1 hover:border-gold"
                >
                  {item.label}
                </Link>
                <div className="invisible absolute left-0 top-full z-50 min-w-[180px] pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="rounded border border-oxblood/12 bg-parchment-card py-2 shadow-sm">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm hover:bg-oxblood/5"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="border-b-2 border-transparent py-1 hover:border-gold"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <Button href="/visit" variant="nav" className="hidden sm:inline-flex">
            Plan a visit
          </Button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded border border-oxblood/20 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((prev) => !prev)}
          >
            <span className="sr-only">Menu</span>
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
              {open ? (
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        className={cn(
          "border-t border-oxblood/12 bg-parchment lg:hidden",
          open ? "block" : "hidden",
        )}
        aria-label="Mobile"
      >
        <div className="mx-auto max-w-[1100px] px-6 py-4">
          {mainNav.map((item) => (
            <div key={item.href} className="border-b border-oxblood/10 py-3 last:border-b-0">
              <Link
                href={item.href}
                className="block text-base font-semibold"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="mt-2 space-y-2 pl-3">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block text-sm text-ink-soft"
                      onClick={() => setOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-4">
            <Button href="/visit" variant="nav" className="w-full">
              Plan a visit
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}

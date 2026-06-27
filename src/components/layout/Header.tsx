"use client";

import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import { CrossLogo } from "@/components/brand/CrossLogo";
import { Button } from "@/components/ui/button";
import { LinkButton } from "@/components/ui/link-button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { mainNav } from "@/content/navigation";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="border-b border-oxblood/15 bg-oxblood px-4 py-2 text-center text-sm text-parchment md:hidden">
        <span className="font-semibold">Sunday Holy Raza · 8:30am</span>
        {" · "}
        <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="underline">
          {siteConfig.phoneDisplay}
        </a>
      </div>

      <div className="mx-auto flex max-w-[1100px] items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-2.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          <CrossLogo />
          <div className="font-display text-lg font-semibold leading-tight">
            {siteConfig.name}
            <span className="text-meta block text-[11px] font-normal uppercase tracking-[0.08em]">
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
                  <div className="rounded-lg border border-border bg-card py-2 shadow-sm">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm hover:bg-muted"
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
          <LinkButton href="/visit" variant="nav" size="sm" className="hidden sm:inline-flex">
            Plan a visit
          </LinkButton>

          <Button
            type="button"
            variant="outline"
            size="icon"
            className="lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(true)}
          >
            <MenuIcon className="size-5" />
          </Button>
        </div>
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="right" id="mobile-nav" className="w-full sm:max-w-sm">
          <SheetHeader>
            <SheetTitle className="font-display text-left">Menu</SheetTitle>
          </SheetHeader>

          <nav className="flex flex-col gap-1 px-4" aria-label="Mobile">
            {mainNav.map((item) => (
              <div key={item.href} className="border-b border-border py-3 last:border-b-0">
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
                        className={cn("text-meta block text-sm")}
                        onClick={() => setOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <SheetFooter>
            <LinkButton
              href="/visit"
              variant="nav"
              className="w-full"
              onClick={() => setOpen(false)}
            >
              Plan a visit
            </LinkButton>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </header>
  );
}

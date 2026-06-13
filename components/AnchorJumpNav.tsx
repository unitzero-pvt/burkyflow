"use client";

import { cn } from "@/lib/utils";

export type AnchorItem = { label: string; href: string };

// Inline jump nav under the hero. Sticks just below the navbar on scroll.
export function AnchorJumpNav({ items }: { items: AnchorItem[] }) {
  return (
    <nav
      aria-label="On this page"
      className="sticky top-16 z-40 border-y border-border bg-white/80 backdrop-blur-md"
    >
      <div className="container-page">
        <ul className="flex gap-1 overflow-x-auto py-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={cn(
                  "inline-block whitespace-nowrap rounded-2xl px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-surface hover:text-foreground cursor-pointer"
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

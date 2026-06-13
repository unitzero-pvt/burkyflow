"use client";

import { useState } from "react";
import { ImageIcon } from "lucide-react";

// Renders the wedge card image, falling back to a placeholder if the
// `src` is missing/empty or fails to load (e.g. the file isn't added yet).
export function WedgeCardImage({ src, alt }: { src?: string; alt: string }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div className="flex h-full min-h-[200px] w-full flex-col items-center justify-center gap-2 rounded-2xl bg-surface text-muted-foreground/50">
        <ImageIcon className="size-9" strokeWidth={1.5} />
        <span className="text-xs font-medium">Image</span>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className="h-full min-h-[200px] w-full rounded-2xl object-cover"
    />
  );
}

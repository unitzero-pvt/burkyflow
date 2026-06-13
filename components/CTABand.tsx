import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/button";

export function CTABand({
  heading = "Ready to stop losing jobs to a voicemail?",
  lead = "Book a short call and we will map exactly where revenue is leaking and what we would automate first.",
  primaryHref = site.ctaHref,
  primaryLabel = site.ctaLabel,
  secondaryHref = "/services",
  secondaryLabel = site.secondaryCtaLabel,
}: {
  heading?: string;
  lead?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-brand px-6 py-16 text-center sm:px-12">
      <div className="relative mx-auto max-w-2xl">
        <h2 className="text-3xl font-semibold text-brand-fg sm:text-4xl">{heading}</h2>
        <p className="mt-4 text-lg text-brand-fg/85">{lead}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild variant="secondary" size="lg">
            <Link href={primaryHref}>
              {primaryLabel}
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="ghost"
            size="lg"
            className="text-brand-fg hover:bg-white/10"
          >
            <Link href={secondaryHref}>{secondaryLabel}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

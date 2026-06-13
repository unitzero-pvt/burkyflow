import Link from "next/link";
import { ArrowRight, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { ServiceIllustration } from "@/components/illustrations/ServiceIllustration";

export type FeatureStep = { title: string; detail: string };

export type AlternatingFeatureBlockProps = {
  eyebrow: string;
  heading: string;
  lead: string;
  steps: FeatureStep[];
  whyItMatters: string;
  imageAlt?: string;
  /** Illustration variant key (matches a service slug, or "default"). */
  illustration?: string;
  /** Desktop side for the visual. Mobile always shows image first. */
  side?: "left" | "right";
  ctaHref?: string;
  ctaLabel?: string;
  id?: string;
};

export function AlternatingFeatureBlock({
  eyebrow,
  heading,
  lead,
  steps,
  whyItMatters,
  imageAlt,
  illustration = "default",
  side = "right",
  ctaHref = site.ctaHref,
  ctaLabel = site.ctaLabel,
  id,
}: AlternatingFeatureBlockProps) {
  const imageRight = side === "right";

  return (
    <div
      id={id}
      className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16"
    >
      {/* Visual. Mobile: always first (order-1). Desktop: follows `side`. */}
      <Reveal
        className={cn(
          "order-1",
          imageRight ? "lg:order-2" : "lg:order-1"
        )}
      >
        <ServiceIllustration variant={illustration} title={imageAlt ?? heading} />
      </Reveal>

      {/* Copy. Mobile: second. */}
      <Reveal
        delay={0.05}
        className={cn("order-2", imageRight ? "lg:order-1" : "lg:order-2")}
      >
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{heading}</h2>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{lead}</p>

        <div className="mt-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-foreground">
            How we do it
          </p>
          <ol className="mt-4 space-y-4">
            {steps.map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand/10 text-sm font-semibold text-brand">
                  {i + 1}
                </span>
                <span className="pt-0.5">
                  <span className="font-semibold text-foreground">{step.title}. </span>
                  <span className="text-muted-foreground">{step.detail}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-8 flex items-start gap-3 rounded-2xl bg-surface p-4">
          <Lightbulb className="mt-0.5 size-5 shrink-0 text-brand" />
          <p className="text-sm font-medium text-foreground">
            <span className="text-muted-foreground">Why it matters: </span>
            {whyItMatters}
          </p>
        </div>

        <div className="mt-8">
          <Button asChild>
            <Link href={ctaHref}>
              {ctaLabel}
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </Reveal>
    </div>
  );
}

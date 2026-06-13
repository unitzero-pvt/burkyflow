import Link from "next/link";
import { ArrowRight, Home, HeartPulse, Building2, Car, Briefcase, Layers, type LucideIcon } from "lucide-react";
import { industries } from "@/content/industries";

// Icon per industry slug (falls back to a generic mark).
const icons: Record<string, LucideIcon> = {
  "home-services": Home,
  healthcare: HeartPulse,
  "real-estate": Building2,
  automotive: Car,
  "professional-firms": Briefcase,
};

export function IndustryStrip({
  eyebrow = "Industries",
  heading = "Built for service businesses like yours",
  lead = "We work across the industries where speed-to-lead and follow-up decide who wins the job.",
}: {
  eyebrow?: string;
  heading?: string;
  lead?: string;
}) {
  return (
    <div>
      <div className="mx-auto max-w-2xl text-center">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{heading}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">{lead}</p>
      </div>

      <div className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((industry) => {
          const Icon = icons[industry.slug] ?? Layers;
          return (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="group flex flex-col rounded-2xl border border-border/70 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-soft-lg"
            >
              <div className="flex size-12 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                <Icon className="size-6" strokeWidth={1.75} />
              </div>

              <h3 className="mt-5 text-lg font-bold tracking-tight text-foreground">
                {industry.name}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {industry.lead.split(".")[0]}.
              </p>

              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                Explore industry
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

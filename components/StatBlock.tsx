import { Reveal } from "@/components/Reveal";

export type Stat = { value: string; label: string };

export function StatBlock({
  stats,
  heading,
}: {
  stats: readonly Stat[];
  heading?: string;
}) {
  return (
    <div className="rounded-3xl bg-surface px-6 py-14 sm:px-12">
      {heading && (
        <h2 className="mb-10 text-center text-2xl font-semibold sm:text-3xl">
          {heading}
        </h2>
      )}
      <dl className="grid grid-cols-1 gap-10 sm:grid-cols-3">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.08}>
            <div className="text-center">
              <dt className="text-4xl font-semibold text-brand sm:text-5xl font-heading">
                {stat.value}
              </dt>
              <dd className="mt-2 text-sm font-medium text-muted-foreground">
                {stat.label}
              </dd>
            </div>
          </Reveal>
        ))}
      </dl>
    </div>
  );
}

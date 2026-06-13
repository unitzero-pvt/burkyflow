// "Results that matter" — homepage stat cards.
// Each card has a slot for a progress-bar / chart background image.
import { LineChart, Users, Clock, Zap, TrendingUp, ShieldCheck, User, type LucideIcon } from "lucide-react";

// ── Paste your progress-bar / chart background image per card here ──
// Use a /images/... path (file in public/images) or a full URL. Leave "" for none.
const cardBg: Record<Accent, string> = {
  blue: "/images/pro1.png",
  emerald: "/images/pro2.png",
  violet: "/images/pro1.png",
};

type Accent = "blue" | "emerald" | "violet";

// Static class strings so Tailwind keeps them in the build.
const accents: Record<Accent, { badge: string; icon: string; value: string; box: string; boxText: string }> = {
  blue: { badge: "bg-blue-50", icon: "text-blue-600", value: "text-blue-600", box: "bg-blue-50", boxText: "text-blue-700" },
  emerald: { badge: "bg-emerald-50", icon: "text-emerald-600", value: "text-emerald-600", box: "bg-emerald-50", boxText: "text-emerald-700" },
  violet: { badge: "bg-violet-50", icon: "text-violet-600", value: "text-violet-600", box: "bg-violet-50", boxText: "text-violet-700" },
};

const avatarTints = [
  "from-blue-200 to-blue-300",
  "from-rose-200 to-rose-300",
  "from-amber-200 to-amber-300",
  "from-emerald-200 to-emerald-300",
];

type InfoBox = { icon: LucideIcon; title: string; sub: string };

type Card = {
  accent: Accent;
  icon: LucideIcon;
  value: string;
  label: string;
  avatars?: { count: string; caption: string };
  info?: InfoBox;
};

const cards: Card[] = [
  {
    accent: "blue",
    icon: Users,
    value: "25+",
    label: "Businesses served",
    avatars: { count: "+21", caption: "Join 25+ growing businesses" },
  },
  {
    accent: "emerald",
    icon: Clock,
    value: "10,000+",
    label: "Hours of automation deployed",
    info: { icon: TrendingUp, title: "That's 416+ days saved", sub: "Back to your business" },
  },
  {
    accent: "violet",
    icon: Zap,
    value: "Under 60s",
    label: "Average lead response time",
    info: { icon: Clock, title: "3x faster than industry average", sub: "Respond before your competitors even see it" },
  },
];

function StatCard({ card }: { card: Card }) {
  const a = accents[card.accent];
  const Icon = card.icon;
  const bg = cardBg[card.accent];

  return (
    <div className="relative overflow-hidden rounded-3xl bg-white p-7 shadow-soft ring-1 ring-border/60">
      {/* Background chart/progress image slot */}
      {bg ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={bg}
          alt=""
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -top-2 w-full"
        />
      ) : null}

      <div className="relative z-10">
        <div className={`flex size-12 items-center justify-center rounded-2xl ${a.badge} ${a.icon}`}>
          <Icon className="size-6" strokeWidth={1.75} />
        </div>

        <p className={`mt-8 text-4xl font-bold tracking-tight font-heading ${a.value}`}>{card.value}</p>
        <p className="mt-2 font-semibold text-foreground">{card.label}</p>

        <hr className="my-5 border-border/60" />

        {card.avatars && (
          <div>
            <div className="flex items-center">
              <div className="flex -space-x-3">
                {avatarTints.map((tint, i) => (
                  <span
                    key={i}
                    className={`flex size-10 items-center justify-center rounded-full bg-gradient-to-br ${tint} ring-2 ring-white`}
                  >
                    <User className="size-5 text-white/90" />
                  </span>
                ))}
              </div>
              <span className="ml-3 flex size-10 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand ring-2 ring-white">
                {card.avatars.count}
              </span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">{card.avatars.caption}</p>
          </div>
        )}

        {card.info && (
          <div className={`rounded-xl ${a.box} p-4`}>
            <p className={`flex items-center gap-2 text-sm font-semibold ${a.boxText}`}>
              <card.info.icon className="size-4 shrink-0" />
              {card.info.title}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{card.info.sub}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export function ResultsStats() {
  return (
    <section className="section">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand">
            <LineChart className="size-4" />
            Results that matter
          </span>

          <h2 className="mt-5 text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl">
            Early, focused, and <span className="text-brand">accountable to the numbers</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
            We don&apos;t just automate, we deliver measurable impact that drives real business growth.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <StatCard key={card.label} card={card} />
          ))}
        </div>

        <p className="mt-10 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <ShieldCheck className="size-4 text-brand" />
          Real results from real businesses using BurkyFlow
        </p>
      </div>
    </section>
  );
}

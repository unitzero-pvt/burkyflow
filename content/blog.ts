// Placeholder blog posts. TODO(you): replace with real posts or wire to a CMS / MDX.
export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  readMinutes: number;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "missed-calls-are-lost-revenue",
    title: "Missed calls are lost revenue, not lost time",
    excerpt:
      "Most owners guess they miss a couple of calls a week. The real number, and what it costs, is almost always worse.",
    date: "2026-05-01",
    readMinutes: 4,
    body: [
      "Most service businesses underestimate how many calls they miss. When you pull the actual phone logs, the number is rarely a couple. It is often a third of inbound calls, and each one is a job that went to whoever picked up second.",
      "An AI voice receptionist closes that gap. It answers on the first ring, qualifies the caller, and books the work, day or night.",
      "This is a placeholder article. Replace this body with real content when you publish.",
    ],
  },
  {
    slug: "your-crm-is-a-revenue-list",
    title: "Your CRM is a revenue list you forgot to use",
    excerpt:
      "The customers you already paid to acquire are the cheapest bookings you will ever make. Here is how reactivation works.",
    date: "2026-04-18",
    readMinutes: 5,
    body: [
      "Every past customer in your database already trusts you. Reactivating them costs a fraction of buying new clicks, and they convert faster.",
      "A short, on-brand SMS sequence wakes the list, and an AI voice books the ones who are ready.",
      "This is a placeholder article. Replace this body with real content when you publish.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

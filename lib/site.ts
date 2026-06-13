// Central site config. Edit once, propagates everywhere.
export const site = {
  name: "BurkyFlow",
  legalName: "BurkyFlow",
  tagline: "AI automation that turns missed calls and dormant leads into booked revenue.",
  url: "https://burkyflow.com",
  // TODO(you): confirm where the primary CTA points. Placeholder for now.
  ctaHref: "/contact",
  ctaLabel: "Book a call",
  secondaryCtaLabel: "See how it works",
  email: "hello@burkyflow.com", // TODO(you): confirm
  // Phone shown in the navbar. TODO(you): replace with the real number.
  phone: { display: "(702) 900-1234", href: "tel:+17029001234" },
  // Real registered address — used ONLY for LocalBusiness/Organization on Contact.
  // TODO(you): confirm exact address. UNITZERO is registered in Karachi (later Wyoming, US).
  address: {
    streetAddress: "",
    addressLocality: "Karachi",
    addressRegion: "Sindh",
    postalCode: "",
    addressCountry: "PK",
  },
  // Metros we serve remotely (declared via Service.areaServed, never as a local presence).
  serviceAreas: ["Houston", "San Antonio", "Charleston", "Greenville"],
  social: {
    linkedin: "https://www.linkedin.com/company/unitzero",
    instagram: "https://instagram.com/unitzero",
    facebook: "https://facebook.com/unitzero",
    youtube: "https://youtube.com/@unitzero",
    x: "https://x.com/unitzero",
  },
} as const;

export const nav = [
  { label: "Services", href: "/services" },
  { label: "Bundles", href: "/bundles" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Industries", href: "/industries" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

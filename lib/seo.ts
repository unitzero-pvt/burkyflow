import type { Metadata } from "next";
import { site } from "./site";

export function pageMetadata({
  title,
  description,
  path = "/",
  noindex = false,
}: {
  title: string;
  description: string;
  path?: string;
  noindex?: boolean;
}): Metadata {
  const url = `${site.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noindex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      type: "website",
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

// ── JSON-LD builders ─────────────────────────────────────────────────────

// Organization with the REAL registered address. Use on Contact + as provider.
export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.legalName,
    url: site.url,
    description: site.tagline,
    email: site.email,
    sameAs: Object.values(site.social),
    areaServed: site.serviceAreas,
  };
}

// LocalBusiness — ONLY for the Contact page, where the real address sits.
export function localBusinessLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.legalName,
    url: site.url,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      ...site.address,
    },
    areaServed: site.serviceAreas,
  };
}

// Service schema for geo pages. Declares a remotely served area honestly via
// areaServed + provider. NO LocalBusiness, no fabricated local address.
export function serviceLd({
  serviceName,
  description,
  cityName,
  state,
  url,
}: {
  serviceName: string;
  description: string;
  cityName: string;
  state: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description,
    serviceType: "AI automation for service businesses",
    provider: {
      "@type": "Organization",
      name: site.legalName,
      url: site.url,
    },
    areaServed: {
      "@type": "City",
      name: cityName,
      containedInPlace: { "@type": "State", name: state },
    },
    url,
  };
}

// BreadcrumbList — reinforces the silo structure for crawlers.
export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}

// ItemList of the AI services offered for a given industry — lets crawlers see
// exactly what we provide per industry.
export function serviceItemListLd({
  name,
  services,
}: {
  name: string;
  services: { name: string; url: string; description: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name: s.name,
        description: s.description,
        url: s.url,
        provider: { "@type": "Organization", name: site.legalName, url: site.url },
        areaServed: site.serviceAreas,
      },
    })),
  };
}

// Service schema for a single service detail page.
export function serviceDetailLd({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: "AI automation for service businesses",
    provider: { "@type": "Organization", name: site.legalName, url: site.url },
    areaServed: site.serviceAreas,
    url,
  };
}

export function faqPageLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

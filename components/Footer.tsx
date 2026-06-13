import Link from "next/link";
import Image from "next/image";
import { Linkedin, Instagram, Facebook, Youtube } from "lucide-react";
import { site } from "@/lib/site";
import { services } from "@/content/services";
import { industries } from "@/content/industries";

// Ported from the existing unitzero.tech footer structure:
// service groups, quick links, legal, social, newsletter.
export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-page py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="/images/burkylogo.png"
                alt={site.name}
                width={2205}
                height={713}
                className="h-8 w-auto"
              />
            </Link>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              {site.tagline}
            </p>
            <div className="mt-5 flex gap-3">
              <SocialLink href={site.social.linkedin} label="LinkedIn">
                <Linkedin className="size-5" />
              </SocialLink>
              <SocialLink href={site.social.instagram} label="Instagram">
                <Instagram className="size-5" />
              </SocialLink>
              <SocialLink href={site.social.facebook} label="Facebook">
                <Facebook className="size-5" />
              </SocialLink>
              <SocialLink href={site.social.youtube} label="YouTube">
                <Youtube className="size-5" />
              </SocialLink>
            </div>
          </div>

          <FooterColumn title="Services">
            {services.map((s) => (
              <FooterLink key={s.slug} href={`/services/${s.slug}`}>
                {s.name}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Industries">
            {industries.map((i) => (
              <FooterLink key={i.slug} href={`/industries/${i.slug}`}>
                {i.name}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Company">
            <FooterLink href="/about">About</FooterLink>
            <FooterLink href="/blog">Blog</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
            <FooterLink href="/sitemap.xml">Sitemap</FooterLink>
          </FooterColumn>

          <FooterColumn title="Stay in the loop">
            {/* TODO(you): wire this form to your email provider / endpoint. */}
            <p className="text-sm text-muted-foreground">
              Occasional notes on automation that books revenue. No spam.
            </p>
            <form className="mt-3 flex flex-col gap-2" action="#" method="post">
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                name="email"
                required
                placeholder="you@company.com"
                className="h-11 rounded-2xl border border-border bg-white px-4 text-sm outline-none focus:ring-2 focus:ring-ring"
              />
              <button
                type="submit"
                className="h-11 rounded-2xl bg-brand-cta px-4 text-sm font-semibold text-brand-cta-fg transition-colors hover:brightness-110 cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </FooterColumn>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground">
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-foreground">{title}</h4>
      <div className="mt-4 flex flex-col gap-3">{children}</div>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
    >
      {children}
    </Link>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex size-10 items-center justify-center rounded-2xl bg-white text-muted-foreground shadow-soft transition-colors hover:text-brand cursor-pointer"
    >
      {children}
    </a>
  );
}

import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: `Privacy policy for ${site.name}`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <section className="section">
      <div className="container-page mx-auto max-w-3xl">
        <h1 className="text-3xl font-semibold">Privacy Policy</h1>
        <p className="mt-4 text-muted-foreground">Last updated: May 31, 2026</p>

        <p className="mt-6">
          {site.legalName} ("we", "us", "our") operates {site.url} (the "Site"). This Privacy
          Policy explains how we collect, use, disclose, and protect personal information when you
          visit or interact with the Site.
        </p>

        <h2 className="mt-6 text-xl font-semibold">What we collect</h2>
        <ul className="mt-3 list-disc pl-6">
          <li>Contact information you provide via forms (name, email, phone, company).</li>
          <li>Communications you send to us (messages, inquiries).</li>
          <li>Automatically collected data (IP address, browser, device, pages visited, and logs).</li>
          <li>Cookies and similar technologies to enable the Site and basic analytics.</li>
        </ul>

        <h2 className="mt-6 text-xl font-semibold">How we use information</h2>
        <p className="mt-3">We use the information to:</p>
        <ul className="mt-3 list-disc pl-6">
          <li>Respond to inquiries and provide services or information you request.</li>
          <li>Operate, maintain, and improve the Site and our services.</li>
          <li>Send marketing or transactional communications if you opt in or as permitted by law.</li>
          <li>Detect, investigate, and prevent fraudulent or illegal activity.</li>
        </ul>

        <h2 className="mt-6 text-xl font-semibold">Third parties</h2>
        <p className="mt-3">
          We may share information with service providers who help operate the Site (hosting,
          email, analytics, form providers) and when required by law. We do not sell personal
          information.
        </p>

        <h2 className="mt-6 text-xl font-semibold">Cookies and tracking</h2>
        <p className="mt-3">
          The Site uses cookies and similar technologies for essential functionality and analytics.
          You can control cookies through your browser settings; disabling certain cookies may
          affect Site functionality.
        </p>

        <h2 className="mt-6 text-xl font-semibold">Data retention</h2>
        <p className="mt-3">
          We retain personal information only as long as necessary to provide services, comply
          with legal obligations, and resolve disputes. Specific retention periods vary by data
          type; contact us to request deletion.
        </p>

        <h2 className="mt-6 text-xl font-semibold">Security</h2>
        <p className="mt-3">We take reasonable measures to protect personal data, but no system is perfect.</p>

        <h2 className="mt-6 text-xl font-semibold">Children</h2>
        <p className="mt-3">The Site is not intended for children under 16. We do not knowingly collect their data.</p>

        <h2 className="mt-6 text-xl font-semibold">Your rights</h2>
        <p className="mt-3">Subject to local law, you may access, correct, or delete personal data we hold about you.</p>

        <h2 className="mt-6 text-xl font-semibold">Contact</h2>
        <p className="mt-3">
          For questions or requests about this policy, email us at <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>

        <p className="mt-8 text-sm text-muted-foreground">
          Note: This privacy policy is a template and may need review by legal counsel to meet
          specific regulatory requirements in your jurisdiction.
        </p>
      </div>
    </section>
  );
}

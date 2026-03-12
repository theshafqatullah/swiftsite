import Link from "next/link";
import { ArrowRight, Shield, Lock, Eye, Database, Bell, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  {
    icon: Lock,
    title: "Encrypted by default",
    description: "All data is encrypted in transit (TLS 1.3) and at rest (AES-256). Your content is always protected.",
  },
  {
    icon: Eye,
    title: "No data selling",
    description: "We never sell, rent, or share your personal information with third-party advertisers. Period.",
  },
  {
    icon: Database,
    title: "Your data, your control",
    description: "Export or delete your data at any time from your dashboard. We make it easy to exercise your rights.",
  },
  {
    icon: UserCheck,
    title: "GDPR & CCPA compliant",
    description: "We comply with GDPR, CCPA, and other major privacy regulations worldwide.",
  },
];

const sections = [
  {
    id: "information-we-collect",
    title: "1. Information We Collect",
    content: [
      "We collect information you provide when creating an account, using our services, or contacting support. This includes your name, email address, and website content you create through Swiftsite.",
      "We also collect usage data automatically, including browser type, device information, IP address, pages visited, and actions taken within the platform. This helps us improve our service and troubleshoot issues.",
      "When you make a purchase, our payment processor (Stripe) handles your payment information directly. We do not store credit card numbers on our servers.",
    ],
  },
  {
    id: "how-we-use",
    title: "2. How We Use Your Information",
    content: [
      "Your information is used to provide and improve our services, communicate with you about your account, send product updates (with your consent), and ensure security.",
      "We use aggregated, anonymized usage data to understand platform trends, improve AI model performance, and develop new features. This data cannot be used to identify individual users.",
      "We do not use your website content to train our AI models unless you explicitly opt in to our improvement program.",
    ],
  },
  {
    id: "data-sharing",
    title: "3. Data Sharing & Third Parties",
    content: [
      "We share data only with service providers who help us operate Swiftsite — including hosting (AWS), analytics (PostHog), payment processing (Stripe), and email delivery (Resend). All providers are contractually bound to protect your data.",
      "We may disclose information if required by law, court order, or government request. We will notify you of such requests when legally permitted.",
      "We never sell your personal data to advertisers or data brokers.",
    ],
  },
  {
    id: "data-security",
    title: "4. Data Security",
    content: [
      "We use industry-standard encryption and security measures to protect your data. All data is stored on secure, SOC 2 Type II compliant infrastructure.",
      "We conduct regular security audits, penetration testing, and vulnerability assessments. Our team follows secure development practices and undergoes annual security training.",
      "In the event of a data breach, we will notify affected users within 72 hours as required by GDPR and other applicable regulations.",
    ],
  },
  {
    id: "cookies",
    title: "5. Cookies & Tracking",
    content: [
      "We use essential cookies to keep you signed in and maintain your session. These are strictly necessary for the platform to function.",
      "We use analytics cookies (PostHog) to understand how our service is used. These help us identify popular features, track errors, and improve the user experience.",
      "We do not use third-party advertising cookies. You can manage cookie preferences in your browser settings or through our cookie consent banner.",
    ],
  },
  {
    id: "data-retention",
    title: "6. Data Retention",
    content: [
      "We retain your account data for as long as your account is active. If you delete your account, we remove your personal data within 30 days.",
      "Backups containing your data may persist for up to 90 days after deletion for disaster recovery purposes, after which they are permanently purged.",
      "Anonymized, aggregated analytics data may be retained indefinitely as it cannot be linked back to individual users.",
    ],
  },
  {
    id: "your-rights",
    title: "7. Your Rights",
    content: [
      "You have the right to access, correct, export, or delete your personal data at any time. Most actions can be performed directly from your account settings.",
      "If you are in the EU, you have additional rights under GDPR including the right to restrict processing, the right to data portability, and the right to object to processing.",
      "To exercise any of these rights, contact us at privacy@swiftsite.dev. We respond to all requests within 30 days.",
    ],
  },
  {
    id: "children",
    title: "8. Children's Privacy",
    content: [
      "Swiftsite is not intended for users under the age of 13 (or 16 in the EU). We do not knowingly collect personal information from children.",
      "If we become aware that we have collected data from a child, we will delete it promptly. If you believe a child has provided us with personal data, please contact us.",
    ],
  },
  {
    id: "changes",
    title: "9. Changes to This Policy",
    content: [
      "We may update this privacy policy from time to time. We will notify you of material changes via email and/or a prominent notice on our platform at least 30 days before the changes take effect.",
      "Continued use of Swiftsite after changes are posted constitutes acceptance of the updated policy.",
    ],
  },
  {
    id: "contact",
    title: "10. Contact Us",
    content: [
      "If you have questions about this privacy policy or how we handle your data, please contact our Data Protection Officer at privacy@swiftsite.dev.",
      "You can also reach us by mail at: Swiftsite Inc., 548 Market St, Suite 300, San Francisco, CA 94104.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden pt-16">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-primary/[0.05] blur-[120px]" />
        </div>
        <div className="mx-auto max-w-7xl px-6 pt-28 pb-20 sm:pt-36 sm:pb-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center justify-center size-12 rounded-xl bg-primary/10 mx-auto mb-4">
              <Shield className="size-6 text-primary" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-sm text-muted-foreground">
              Last updated: March 10, 2026
            </p>
            <p className="mt-6 text-lg text-muted-foreground">
              Your privacy matters to us. This policy explains what data we
              collect, how we use it, and your rights.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy highlights */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border/40 bg-card/20 p-6 transition-colors hover:border-primary/20 group"
              >
                <div className="inline-flex items-center justify-center size-10 rounded-lg bg-primary/10 group-hover:bg-primary/15 transition-colors">
                  <item.icon className="size-5 text-primary" />
                </div>
                <h3 className="mt-4 text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Table of contents */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-lg font-semibold mb-6">Table of contents</h2>
          <nav className="space-y-2">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {section.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Policy content */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          <div className="space-y-12">
            {sections.map((section) => (
              <div key={section.id} id={section.id}>
                <h2 className="text-xl font-semibold">{section.title}</h2>
                <div className="mt-4 space-y-4">
                  {section.content.map((paragraph, idx) => (
                    <p
                      key={idx}
                      className="text-sm leading-relaxed text-muted-foreground"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Questions about your privacy?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Contact our Data Protection Officer. We&apos;re happy to help.
            </p>
            <div className="mt-8">
              <Button
                variant="outline"
                size="lg"
                className="border-border/60 h-11"
                asChild
              >
                <Link href="/contact">
                  Contact us
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

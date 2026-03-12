import Link from "next/link";
import { ArrowRight, FileText, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const sections = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    content: [
      "By accessing or using Swiftsite, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our services.",
      "These terms apply to all users, including visitors, free account holders, and paid subscribers. By creating an account, you confirm that you are at least 18 years old (or the age of majority in your jurisdiction).",
    ],
  },
  {
    id: "use-of-service",
    title: "2. Use of Service",
    content: [
      "Swiftsite provides AI-powered website building tools including page generation, visual editing, hosting, and code export. You may use the service for lawful purposes only.",
      "You agree not to use Swiftsite to create websites that contain illegal content, promote violence or hatred, distribute malware, infringe on intellectual property, or engage in spam or phishing.",
      "We reserve the right to suspend or terminate accounts that violate these terms or that we reasonably believe are being used for harmful purposes.",
    ],
  },
  {
    id: "accounts",
    title: "3. Accounts & Security",
    content: [
      "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.",
      "You must notify us immediately at security@swiftsite.dev if you become aware of any unauthorized access to your account.",
      "We recommend enabling two-factor authentication (2FA) for additional security. Swiftsite is not liable for losses resulting from unauthorized account access due to your failure to protect your credentials.",
    ],
  },
  {
    id: "intellectual-property",
    title: "4. Intellectual Property",
    content: [
      "You retain full ownership of all content you create using Swiftsite, including website designs, text, images, and exported code. We claim no ownership over your content.",
      "Swiftsite retains ownership of the platform, its underlying technology, AI models, branding, documentation, and all proprietary materials.",
      "By using our AI generation features, you grant us a limited license to process your prompts and content solely for the purpose of providing the service. We do not use your content to train our AI models unless you explicitly opt in.",
    ],
  },
  {
    id: "subscriptions",
    title: "5. Subscriptions & Billing",
    content: [
      "Paid plans are billed monthly or annually in advance. All prices are in USD and exclude applicable taxes.",
      "You may upgrade, downgrade, or cancel your subscription at any time from your dashboard. Changes take effect at the start of the next billing cycle. No partial refunds are issued for mid-cycle cancellations.",
      "We offer a 30-day money-back guarantee on all new paid subscriptions. If you're not satisfied within the first 30 days, contact support for a full refund.",
      "We reserve the right to change pricing with at least 30 days' notice. Existing subscribers will be notified via email before any price changes take effect.",
    ],
  },
  {
    id: "hosting",
    title: "6. Hosting & Availability",
    content: [
      "Swiftsite provides hosting for published websites on our global edge network. We target 99.99% uptime for paid plans and 99.9% for free plans.",
      "We perform regular maintenance and updates to improve the platform. Scheduled maintenance windows are announced at least 48 hours in advance.",
      "In the event of prolonged downtime exceeding our SLA, Team plan customers may be eligible for service credits as outlined in their service agreement.",
    ],
  },
  {
    id: "code-export",
    title: "7. Code Export",
    content: [
      "Pro and Team plan subscribers can export their website code at any time. Exported code is yours to use, modify, and host anywhere without restriction.",
      "Exported code may include open-source libraries subject to their respective licenses (e.g., MIT, Apache 2.0). A list of included dependencies and their licenses is provided with each export.",
    ],
  },
  {
    id: "limitation",
    title: "8. Limitation of Liability",
    content: [
      "Swiftsite is provided \"as is\" and \"as available\" without warranties of any kind, express or implied, including warranties of merchantability, fitness for a particular purpose, or non-infringement.",
      "To the maximum extent permitted by law, Swiftsite's total liability for any claims arising from your use of the service shall not exceed the amount you paid us in the 12 months preceding the claim.",
      "We are not liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of data, loss of revenue, or business interruption.",
    ],
  },
  {
    id: "indemnification",
    title: "9. Indemnification",
    content: [
      "You agree to indemnify and hold harmless Swiftsite, its officers, directors, employees, and agents from any claims, damages, or expenses arising from your use of the service, your content, or your violation of these terms.",
    ],
  },
  {
    id: "termination",
    title: "10. Termination",
    content: [
      "You may close your account at any time from your dashboard settings. Upon account closure, your published websites will be taken offline and your data will be deleted within 30 days.",
      "We may suspend or terminate your account if you violate these terms, engage in fraudulent activity, or fail to pay for your subscription. We will provide reasonable notice when possible.",
    ],
  },
  {
    id: "governing-law",
    title: "11. Governing Law",
    content: [
      "These terms are governed by the laws of the State of California, United States, without regard to conflict of law principles.",
      "Any disputes arising from these terms or your use of Swiftsite shall be resolved through binding arbitration in San Francisco, CA under the rules of the American Arbitration Association.",
    ],
  },
  {
    id: "changes",
    title: "12. Changes to Terms",
    content: [
      "We may update these terms from time to time. Material changes will be communicated via email and/or a prominent notice on the platform at least 30 days before taking effect.",
      "Continued use of Swiftsite after updated terms are posted constitutes acceptance. If you disagree with the changes, you may close your account before the new terms take effect.",
    ],
  },
  {
    id: "contact",
    title: "13. Contact",
    content: [
      "Questions about these terms? Contact us at legal@swiftsite.dev or by mail at: Swiftsite Inc., 548 Market St, Suite 300, San Francisco, CA 94104.",
    ],
  },
];

export default function TermsPage() {
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
              <FileText className="size-6 text-primary" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Terms of Service
            </h1>
            <p className="mt-4 text-sm text-muted-foreground">
              Last updated: March 10, 2026
            </p>
            <p className="mt-6 text-lg text-muted-foreground">
              Please read these terms carefully before using Swiftsite.
            </p>
          </div>
        </div>
      </section>

      {/* Key points summary */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="rounded-xl border border-primary/20 bg-primary/[0.03] p-8">
            <div className="flex items-start gap-4">
              <div className="inline-flex items-center justify-center size-8 rounded-lg bg-primary/10 shrink-0 mt-0.5">
                <AlertTriangle className="size-4 text-primary" />
              </div>
              <div>
                <h2 className="text-base font-semibold">Key points summary</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  This is a simplified summary — the full terms below are legally
                  binding.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-foreground mt-1">•</span>
                    You own all content you create with Swiftsite
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-foreground mt-1">•</span>
                    We don&apos;t use your content to train AI unless you opt in
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-foreground mt-1">•</span>
                    Cancel anytime — 30-day money-back guarantee on paid plans
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-foreground mt-1">•</span>
                    Exported code is yours to use without restriction
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-foreground mt-1">•</span>
                    We target 99.99% uptime for paid plans
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Table of contents */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-lg font-semibold mb-6">Table of contents</h2>
          <nav className="grid gap-2 sm:grid-cols-2">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {section.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Terms content */}
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
              Questions about these terms?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Our legal team is happy to clarify anything.
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

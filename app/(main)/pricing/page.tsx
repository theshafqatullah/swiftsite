import Link from "next/link";
import { Check, ArrowRight, HelpCircle, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "For trying Flashsite and building your first site.",
    features: [
      "1 published site",
      "Flashsite subdomain",
      "AI page generation (10/mo)",
      "Basic analytics",
      "Community support",
    ],
    cta: "Get started free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "/month",
    description: "For creators and small businesses who need more power.",
    features: [
      "Unlimited sites",
      "Custom domains",
      "Unlimited AI generation",
      "AI copywriting & images",
      "Advanced analytics",
      "Priority support",
      "Code export",
      "Version history",
    ],
    cta: "Start Pro trial",
    highlighted: true,
  },
  {
    name: "Team",
    price: "$49",
    period: "/month",
    description: "For agencies and teams building at scale.",
    features: [
      "Everything in Pro",
      "5 team members",
      "Real-time collaboration",
      "Client billing",
      "White-label branding",
      "Dedicated account manager",
      "99.99% uptime SLA",
    ],
    cta: "Contact sales",
    highlighted: false,
  },
];

const faqs = [
  {
    q: "Can I switch plans at any time?",
    a: "Yes. Upgrade, downgrade, or cancel anytime from your dashboard. Changes take effect at the start of your next billing cycle.",
  },
  {
    q: "Is there a free trial for Pro?",
    a: "Yes — every new account gets a 14-day free trial of Pro with all features unlocked. No credit card required.",
  },
  {
    q: "What happens when I exceed the free plan limits?",
    a: "You can still access your site, but new AI generations will be paused until the next month. Upgrade to Pro for unlimited generations.",
  },
  {
    q: "Do you offer annual billing?",
    a: "Yes. Annual plans save you 20% — Pro is $15/mo and Team is $39/mo when billed annually.",
  },
  {
    q: "Can I get a refund?",
    a: "We offer a 30-day money-back guarantee on all paid plans. If you're not satisfied, contact support for a full refund.",
  },
  {
    q: "Do you offer discounts for startups or nonprofits?",
    a: "Yes. We offer 50% off for verified startups (under 2 years old) and qualified nonprofits. Contact sales to apply.",
  },
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Founder, Bloom Studio",
    quote: "Switched from Webflow to Flashsite and cut our project turnaround time by 80%. The Pro plan pays for itself.",
    stars: 5,
  },
  {
    name: "Marcus Williams",
    role: "Freelance Designer",
    quote: "The free plan is incredibly generous. I built my entire portfolio without paying a cent.",
    stars: 5,
  },
  {
    name: "Aisha Patel",
    role: "Product Lead, Tidal",
    quote: "Team plan collaboration features are game-changing. We launch 5-10 landing pages a week now.",
    stars: 5,
  },
];

export default function PricingPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden pt-16">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-primary/[0.05] blur-[120px]" />
        </div>
        <div className="mx-auto max-w-7xl px-6 pt-28 pb-20 sm:pt-36 sm:pb-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Pricing
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Simple, transparent pricing
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Start free. Upgrade when you&apos;re ready. No hidden fees, no surprises.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-xl border p-8 transition-all ${
                  plan.highlighted
                    ? "border-primary/30 bg-primary/[0.03] shadow-lg shadow-primary/5"
                    : "border-border/40 bg-card/20 hover:border-border/60"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-6">
                    <span className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                      <Zap className="size-3" />
                      Most popular
                    </span>
                  </div>
                )}
                <div>
                  <h3 className="text-lg font-semibold">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl font-bold tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {plan.period}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                </div>
                <ul className="mt-8 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <Check className="size-4 mt-0.5 shrink-0 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button
                    className={`w-full h-11 ${
                      plan.highlighted
                        ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20"
                        : "border-border/60 hover:border-primary/30 hover:bg-primary/5"
                    }`}
                    variant={plan.highlighted ? "default" : "outline"}
                    size="lg"
                    asChild
                  >
                    <Link href="/contact">
                      {plan.cta}
                      <ArrowRight className="ml-2 size-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plan comparison */}
      <section className="py-24 relative">
        <div className="absolute inset-0 -z-10 bg-card/30" />
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Compare plans
            </h2>
            <p className="mt-4 text-muted-foreground">
              See exactly what&apos;s included in each plan.
            </p>
          </div>

          <div className="mt-16 overflow-x-auto">
            <table className="w-full min-w-[500px] text-sm">
              <thead>
                <tr className="border-b border-border/40">
                  <th className="pb-4 text-left font-medium text-muted-foreground">
                    Feature
                  </th>
                  <th className="pb-4 text-center font-medium text-muted-foreground">
                    Free
                  </th>
                  <th className="pb-4 text-center font-semibold">Pro</th>
                  <th className="pb-4 text-center font-medium text-muted-foreground">
                    Team
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40">
                {[
                  { feature: "Published sites", free: "1", pro: "Unlimited", team: "Unlimited" },
                  { feature: "AI generations / mo", free: "10", pro: "Unlimited", team: "Unlimited" },
                  { feature: "Custom domains", free: "—", pro: "✓", team: "✓" },
                  { feature: "Code export", free: "—", pro: "✓", team: "✓" },
                  { feature: "AI images & copy", free: "—", pro: "✓", team: "✓" },
                  { feature: "Version history", free: "—", pro: "✓", team: "✓" },
                  { feature: "Team members", free: "1", pro: "1", team: "5" },
                  { feature: "Collaboration", free: "—", pro: "—", team: "✓" },
                  { feature: "White-label", free: "—", pro: "—", team: "✓" },
                  { feature: "Uptime SLA", free: "—", pro: "99.9%", team: "99.99%" },
                  { feature: "Support", free: "Community", pro: "Priority", team: "Dedicated" },
                ].map((row) => (
                  <tr key={row.feature}>
                    <td className="py-4 text-muted-foreground">{row.feature}</td>
                    <td className="py-4 text-center text-muted-foreground">
                      {row.free}
                    </td>
                    <td className="py-4 text-center">{row.pro}</td>
                    <td className="py-4 text-center text-muted-foreground">
                      {row.team}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              What our users say
            </h2>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-xl border border-border/40 bg-background p-6 flex flex-col transition-colors hover:border-primary/20"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star
                      key={i}
                      className="size-4 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 pt-4">
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center justify-center size-12 rounded-xl bg-primary/10 mx-auto mb-4">
              <HelpCircle className="size-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Pricing FAQ
            </h2>
          </div>
          <div className="mt-16 mx-auto max-w-3xl divide-y divide-border/40">
            {faqs.map((faq) => (
              <div key={faq.q} className="py-6">
                <h3 className="text-base font-semibold">{faq.q}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[600px] rounded-full bg-primary/[0.04] blur-[100px]" />
        </div>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Start building for free
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              No credit card required. Upgrade anytime.
            </p>
            <div className="mt-10">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 h-12 text-base shadow-lg shadow-primary/20"
                asChild
              >
                <Link href="/contact">
                  Get started
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

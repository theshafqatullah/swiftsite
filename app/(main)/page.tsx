import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Globe,
  Paintbrush,
  Gauge,
  ShieldCheck,
  Code2,
  Layers,
  Smartphone,
  Layout,
  ShoppingCart,
  PenTool,
  BarChart3,
  Zap,
  MessageSquare,
  Star,
  Check,
  ArrowUpRight,
  Users,
  Clock,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { avatars, companyLogos, featureImages } from "@/lib/mock-data";

const categories = [
  { label: "Landing Page", icon: Layout },
  { label: "Portfolio", icon: PenTool },
  { label: "E-commerce", icon: ShoppingCart },
  { label: "Blog", icon: Layers },
  { label: "Dashboard", icon: BarChart3 },
  { label: "Mobile App", icon: Smartphone },
];

const benchmarks = [
  { name: "Swiftsite", score: 94, highlight: true },
  { name: "Webflow", score: 72, highlight: false },
  { name: "Framer", score: 68, highlight: false },
  { name: "Wix AI", score: 58, highlight: false },
  { name: "Squarespace", score: 51, highlight: false },
  { name: "WordPress", score: 43, highlight: false },
];

const designBenchmarks = [
  { name: "Swiftsite", score: 9.4, highlight: true },
  { name: "Framer", score: 8.1, highlight: false },
  { name: "Webflow", score: 7.6, highlight: false },
  { name: "Squarespace", score: 7.2, highlight: false },
  { name: "Wix AI", score: 6.5, highlight: false },
  { name: "WordPress", score: 5.8, highlight: false },
];

const features = [
  {
    icon: Globe,
    title: "Build any site, any style",
    description:
      "Create landing pages, portfolios, stores, blogs, dashboards, and more. Swiftsite supports every modern design pattern.",
  },
  {
    icon: Paintbrush,
    title: "Pixel-perfect visual editor",
    description:
      "Fine-tune every element with a powerful drag-and-drop editor. Full creative control without writing code.",
  },
  {
    icon: Code2,
    title: "AI that understands design",
    description:
      "Generates clean, semantic code with beautiful layouts. It plans, builds, and iterates — all from a single prompt.",
  },
  {
    icon: Gauge,
    title: "Lightning-fast performance",
    description:
      "Every site ships optimized for Core Web Vitals. Automatic image optimization, lazy loading, and edge delivery.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & reliable hosting",
    description:
      "Enterprise-grade security with automatic SSL, DDoS protection, and 99.99% uptime guaranteed.",
  },
  {
    icon: Layers,
    title: "Export production-ready code",
    description:
      "Own your code forever. Export clean React, Next.js, or static HTML and host anywhere you like.",
  },
];

const steps = [
  {
    number: "01",
    title: "Describe your vision",
    description:
      "Tell our AI what you need in plain language — a startup landing page, portfolio, online store, or anything you can imagine.",
  },
  {
    number: "02",
    title: "AI builds it instantly",
    description:
      "In under 30 seconds, Swiftsite generates a fully designed, responsive website with real content, images, and interactions.",
  },
  {
    number: "03",
    title: "Customize everything",
    description:
      "Use the visual editor to tweak colors, fonts, layouts, and content. Or just ask the AI to make changes for you.",
  },
  {
    number: "04",
    title: "Publish with one click",
    description:
      "Go live on a custom domain with SSL, CDN, and analytics included. Your site is production-ready from day one.",
  },
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Founder, Bloom Studio",
    quote:
      "Swiftsite replaced our entire design-to-dev pipeline. We went from concept to live landing page in 2 minutes flat.",
    stars: 5,
    avatar: avatars.sarahChen,
  },
  {
    name: "Marcus Williams",
    role: "Freelance Designer",
    quote:
      "I used to spend days building client sites. Now I prototype in seconds and iterate in real-time. It's a game changer.",
    stars: 5,
    avatar: avatars.marcusWilliams,
  },
  {
    name: "Emma Rodriguez",
    role: "Marketing Lead, Tidal",
    quote:
      "We launch 5-10 landing pages a week now. The speed and quality is unmatched — our conversion rates jumped 40%.",
    stars: 5,
    avatar: avatars.emmaRodriguez,
  },
  {
    name: "James Park",
    role: "CTO, NovaTech",
    quote:
      "The exported code is clean enough for our engineering team to build on. That's incredibly rare for AI tools.",
    stars: 5,
    avatar: avatars.jamesPark,
  },
  {
    name: "Aisha Patel",
    role: "Product Designer",
    quote:
      "Finally an AI tool that actually understands design principles. The layouts it generates feel hand-crafted.",
    stars: 5,
    avatar: avatars.aishaPatel,
  },
  {
    name: "David Kim",
    role: "Agency Owner",
    quote:
      "We've cut project turnaround time by 80%. Clients are blown away when we show them a complete site in the first meeting.",
    stars: 5,
    avatar: avatars.davidKim,
  },
];

const stats = [
  { value: "50,000+", label: "Websites built", icon: Globe },
  { value: "<30s", label: "Average build time", icon: Clock },
  { value: "120+", label: "Countries served", icon: Users },
  { value: "99.99%", label: "Uptime guarantee", icon: Zap },
];

const logos = companyLogos;

const faqs = [
  {
    q: "Do I need coding experience?",
    a: "Not at all. Swiftsite is designed for everyone — from complete beginners to experienced developers. Just describe what you want in plain language.",
  },
  {
    q: "Can I use my own domain?",
    a: "Yes. Connect any custom domain with one click, or use a free swiftsite.dev subdomain. SSL certificates are included automatically.",
  },
  {
    q: "What frameworks does the exported code use?",
    a: "You can export as static HTML/CSS, React, or Next.js. The code is clean, well-structured, and ready for production.",
  },
  {
    q: "Is there a free plan?",
    a: "Yes. The free plan includes 1 published site, AI generation, and a Swiftsite subdomain. Upgrade anytime for more features.",
  },
  {
    q: "Can I cancel my subscription anytime?",
    a: "Absolutely. No contracts, no commitments. Cancel anytime from your dashboard and your sites will remain active until the end of the billing period.",
  },
  {
    q: "How does AI image generation work?",
    a: "Describe the image you need, and our AI generates custom illustrations and photos directly in the editor. No stock photo subscriptions needed.",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden pt-16">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-primary/[0.06] blur-[120px] animate-pulse-glow" />
          <div className="absolute top-1/3 left-1/3 h-[300px] w-[400px] rounded-full bg-primary/[0.04] blur-[100px]" />
        </div>
        <div className="mx-auto max-w-7xl px-6 pt-28 pb-20 sm:pt-36 sm:pb-28 lg:pt-44 lg:pb-36">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl animate-fade-in-up">
              Build any website
            </h1>
            <p className="mt-6 text-lg text-muted-foreground sm:text-xl lg:text-2xl animate-fade-in-up-delay-1 max-w-2xl mx-auto leading-relaxed">
              Describe what you want. Swiftsite&apos;s AI builds it{" "}
              <span className="text-primary font-semibold">in seconds</span> — beautiful,
              responsive, production-ready.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center animate-fade-in-up-delay-2">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 h-12 text-base shadow-lg shadow-primary/20"
                asChild
              >
                <Link href="/pricing">
                  Try for free
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-border/60 h-12 px-8 text-base"
                asChild
              >
                <Link href="/features">See how it works</Link>
              </Button>
            </div>
          </div>

          {/* Category tabs */}
          <div className="mt-20 flex flex-wrap justify-center gap-3 animate-fade-in-up-delay-3">
            {categories.map((cat) => (
              <div
                key={cat.label}
                className="flex items-center gap-2 rounded-full border border-border/50 bg-card/50 px-5 py-2.5 text-sm text-muted-foreground transition-all hover:bg-primary/10 hover:text-foreground hover:border-primary/30 cursor-pointer"
              >
                <cat.icon className="size-4" />
                {cat.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logo cloud */}
      <section className="py-20 border-y border-border/30">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center text-xs font-medium uppercase tracking-widest text-muted-foreground/60 mb-10">
            Trusted by teams at leading companies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {logos.map((logo) => (
              <Image
                key={logo.name}
                src={logo.logo}
                alt={logo.name}
                width={120}
                height={32}
                className="h-7 w-auto opacity-50 hover:opacity-80 transition-opacity grayscale invert"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center space-y-3">
                <div className="inline-flex items-center justify-center size-10 rounded-lg bg-primary/10 mx-auto">
                  <stat.icon className="size-5 text-primary" />
                </div>
                <div className="text-3xl font-bold tracking-tight sm:text-4xl">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benchmarks */}
      <section className="py-24 relative">
        <div className="absolute inset-0 -z-10 bg-card/30" />
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Industry benchmarks
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              The fastest way to build
            </h2>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            <div className="rounded-xl border border-border/40 bg-background p-8">
              <h3 className="text-lg font-semibold mb-1">#1 in Build Speed</h3>
              <p className="text-sm text-muted-foreground mb-8">
                Time-to-production benchmark score
              </p>
              <div className="space-y-4">
                {benchmarks.map((item) => (
                  <div key={item.name} className="flex items-center gap-4">
                    <span
                      className={`w-24 text-sm ${item.highlight ? "font-semibold text-foreground" : "text-muted-foreground"}`}
                    >
                      {item.name}
                    </span>
                    <div className="flex-1 h-7 bg-secondary/40 rounded-sm overflow-hidden">
                      <div
                        className={`h-full rounded-sm ${item.highlight ? "bg-primary" : "bg-muted-foreground/20"}`}
                        style={{ width: `${item.score}%` }}
                      />
                    </div>
                    <span
                      className={`w-10 text-right text-sm font-mono ${item.highlight ? "font-semibold text-primary" : "text-muted-foreground"}`}
                    >
                      {item.score}%
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-border/40 bg-background p-8">
              <h3 className="text-lg font-semibold mb-1">#1 in Design Quality</h3>
              <p className="text-sm text-muted-foreground mb-8">
                Independent design audit score (10-point scale)
              </p>
              <div className="space-y-4">
                {designBenchmarks.map((item) => (
                  <div key={item.name} className="flex items-center gap-4">
                    <span
                      className={`w-24 text-sm ${item.highlight ? "font-semibold text-foreground" : "text-muted-foreground"}`}
                    >
                      {item.name}
                    </span>
                    <div className="flex-1 h-7 bg-secondary/40 rounded-sm overflow-hidden">
                      <div
                        className={`h-full rounded-sm ${item.highlight ? "bg-primary" : "bg-muted-foreground/20"}`}
                        style={{ width: `${(item.score / 10) * 100}%` }}
                      />
                    </div>
                    <span
                      className={`w-10 text-right text-sm font-mono ${item.highlight ? "font-semibold text-primary" : "text-muted-foreground"}`}
                    >
                      {item.score}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              How it works
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Four steps to launch
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              From idea to live website in under a minute.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.number} className="relative rounded-xl border border-border/40 bg-card/20 p-6 transition-colors hover:bg-card/40">
                <div className="text-4xl font-bold text-primary/20 font-mono">
                  {step.number}
                </div>
                <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Features
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Everything you need to go from idea to live website.
            </p>
          </div>

          <div className="mt-16 grid gap-px bg-border/40 sm:grid-cols-2 lg:grid-cols-3 rounded-xl border border-border/40 overflow-hidden">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-background p-8 lg:p-10 transition-colors hover:bg-card/50 group"
              >
                <div className="inline-flex items-center justify-center size-11 rounded-lg bg-primary/10 group-hover:bg-primary/15 transition-colors">
                  <feature.icon className="size-5 text-primary" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button variant="outline" className="border-border/60 hover:border-primary/30 hover:bg-primary/5" asChild>
              <Link href="/features">
                View all features
                <ArrowUpRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Large feature highlight */}
      <section className="py-24 relative">
        <div className="absolute inset-0 -z-10 bg-card/30" />
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-primary">
                Visual Editor
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Edit like a designer.{" "}
                <span className="text-muted-foreground">Ship like a developer.</span>
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Our visual editor gives you pixel-perfect control over every element.
                Drag and drop sections, customize colors and typography, add
                animations — all without touching code. When you&apos;re done, export
                clean production-ready code.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Drag-and-drop interface with snap-to-grid alignment",
                  "Real-time preview across desktop, tablet, and mobile",
                  "One-click style themes and color palette generator",
                  "Collaborate with your team in real-time",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="size-4 mt-0.5 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-border/40 bg-background p-1">
              <div className="rounded-lg overflow-hidden aspect-[4/3] relative">
                <Image
                  src={featureImages.visualEditor}
                  alt="Visual Editor Preview"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI feature highlight */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1 rounded-xl border border-border/40 bg-background p-1">
              <div className="rounded-lg overflow-hidden aspect-[4/3] relative">
                <Image
                  src={featureImages.aiChat}
                  alt="AI Chat Interface"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-sm font-medium uppercase tracking-widest text-primary">
                AI Assistant
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Just describe it.{" "}
                <span className="text-muted-foreground">AI handles the rest.</span>
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Our AI understands design, accessibility, and performance. It doesn&apos;t just
                generate code — it crafts complete experiences with proper hierarchy,
                spacing, color theory, and responsive behavior.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Natural language prompts — no technical jargon needed",
                  "Iterative refinement: ask for changes conversationally",
                  "AI-generated images, icons, and copywriting built in",
                  "Understands SEO best practices automatically",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Sparkles className="size-4 mt-0.5 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 relative">
        <div className="absolute inset-0 -z-10 bg-card/30" />
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Testimonials
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Loved by builders
            </h2>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-xl border border-border/40 bg-background p-6 flex flex-col transition-colors hover:border-primary/20">
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
                <div className="mt-6 pt-4 border-t border-border/30">
                  <div className="flex items-center gap-3">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      width={36}
                      height={36}
                      className="size-9 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-semibold">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Everything you need to know about Swiftsite.
            </p>
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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[600px] rounded-full bg-primary/[0.05] blur-[100px]" />
        </div>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Start building today
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              No credit card required. Create your first website in seconds.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 h-12 text-base shadow-lg shadow-primary/20"
                asChild
              >
                <Link href="/pricing">
                  Try for free
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-border/60 h-12 px-8 text-base hover:border-primary/30 hover:bg-primary/5" asChild>
                <Link href="/pricing">View pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

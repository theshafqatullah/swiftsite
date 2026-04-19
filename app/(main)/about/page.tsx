import Link from "next/link";
import Image from "next/image";
import {
  Target,
  Heart,
  Lightbulb,
  ArrowRight,
  Globe,
  Users,
  Clock,
  Zap,
  Rocket,
  Shield,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { teamAvatars, pressLogos } from "@/lib/mock-data";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description:
      "We believe everyone deserves a great website. Our mission is to democratize web design with AI.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "We push the boundaries of what AI can do for web design. Every feature is built to save you time.",
  },
  {
    icon: Heart,
    title: "Customer Obsessed",
    description:
      "Our users are at the center of every decision. We listen, iterate, and ship what matters.",
  },
  {
    icon: Rocket,
    title: "Ship Fast",
    description:
      "We move quickly and deliver constant improvements. New features and refinements land every week.",
  },
  {
    icon: Shield,
    title: "Trust & Transparency",
    description:
      "We're open about how our AI works, how we use data, and what our roadmap looks like.",
  },
  {
    icon: Users,
    title: "Community First",
    description:
      "Our community shapes our product. Feature requests, bug reports, and feedback drive what we build.",
  },
];

const stats = [
  { label: "Websites created", value: "50,000+", icon: Globe },
  { label: "Countries served", value: "120+", icon: Users },
  { label: "Uptime", value: "99.99%", icon: Zap },
  { label: "Avg. support response", value: "<2 hrs", icon: Clock },
];

const timeline = [
  {
    year: "2025 Q1",
    title: "Founded",
    description:
      "Flashsite was born from a simple idea: building websites shouldn't require weeks of work or thousands of dollars.",
  },
  {
    year: "2025 Q2",
    title: "Public Beta",
    description:
      "Launched our beta to 1,000 early users. The response was overwhelming — 95% rated it better than existing tools.",
  },
  {
    year: "2025 Q3",
    title: "10,000 Users",
    description:
      "Crossed 10,000 users and launched Pro plans. Introduced the visual editor and code export features.",
  },
  {
    year: "2025 Q4",
    title: "Series A",
    description:
      "Raised Series A funding from leading investors. Expanded the team to 25 across engineering, design, and AI research.",
  },
  {
    year: "2026 Q1",
    title: "50,000+ Users",
    description:
      "Powering websites across 120+ countries. Launched Team plans, real-time collaboration, and AI image generation.",
  },
];

const team = [
  {
    name: "Alex Rivera",
    role: "Co-founder & CEO",
    bio: "Previously engineering lead at Vercel. Passionate about making the web accessible to everyone.",
    avatar: teamAvatars.alexRivera,
  },
  {
    name: "Priya Sharma",
    role: "Co-founder & CTO",
    bio: "Former ML researcher at DeepMind. Built the AI engine that powers Flashsite's generation capabilities.",
    avatar: teamAvatars.priyaSharma,
  },
  {
    name: "Jordan Lee",
    role: "Head of Design",
    bio: "Design lead at Figma for 4 years. Obsessed with creating tools that feel magical to use.",
    avatar: teamAvatars.jordanLee,
  },
  {
    name: "Sam Nakamura",
    role: "Head of Engineering",
    bio: "Senior engineer at Stripe. Architect behind Flashsite's infrastructure and performance optimizations.",
    avatar: teamAvatars.samNakamura,
  },
];

const press = [
  { outlet: "TechCrunch", quote: "Flashsite is the fastest path from idea to live website we've ever seen.", logo: pressLogos["TechCrunch"] },
  { outlet: "The Verge", quote: "AI website builders just got serious. Flashsite leads the pack.", logo: pressLogos["The Verge"] },
  { outlet: "Product Hunt", quote: "#1 Product of the Day with over 2,000 upvotes.", logo: pressLogos["Product Hunt"] },
];

export default function AboutPage() {
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
              About
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Building the future of web creation
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              We&apos;re on a mission to make website building as simple as
              describing what you want. One prompt, one click, one beautiful site.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 border-y border-border/30">
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
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                Our story
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Started from frustration.{" "}
                <span className="text-muted-foreground">Built with obsession.</span>
              </h2>
            </div>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Flashsite was born from a simple frustration: building a website
                shouldn&apos;t require weeks of work, a design degree, or thousands
                of dollars. We saw that AI could change this — and we set out to
                prove it.
              </p>
              <p>
                Founded in early 2025 by a team from Vercel, DeepMind, and Figma,
                we combine deep expertise in AI, web engineering, and design.
                We&apos;re backed by leading investors who share our vision of
                making the web accessible to everyone.
              </p>
              <p>
                Today, Flashsite powers over 50,000 websites across 120+ countries
                — from freelance portfolios and startup landing pages to local
                business storefronts and creator blogs. And we&apos;re just getting
                started.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 relative">
        <div className="absolute inset-0 -z-10 bg-card/30" />
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our journey
            </h2>
            <p className="mt-4 text-muted-foreground">
              From idea to 50,000+ users in under a year.
            </p>
          </div>

          <div className="mt-16 space-y-0">
            {timeline.map((item, idx) => (
              <div
                key={item.year}
                className="grid gap-4 lg:grid-cols-[200px_1fr] border-b border-border/40 py-8 first:pt-0 last:border-b-0"
              >
                <div className="text-sm font-mono text-primary/80">
                  {item.year}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our values
            </h2>
            <p className="mt-4 text-muted-foreground">
              The principles that guide everything we build.
            </p>
          </div>

          <div className="mt-16 grid gap-px bg-border/40 sm:grid-cols-2 lg:grid-cols-3 rounded-xl border border-border/40 overflow-hidden">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-background p-8 lg:p-10 transition-colors hover:bg-card/50 group"
              >
                <div className="inline-flex items-center justify-center size-11 rounded-lg bg-primary/10 group-hover:bg-primary/15 transition-colors">
                  <value.icon className="size-5 text-primary" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Meet the team
            </h2>
            <p className="mt-4 text-muted-foreground">
              A small, focused team building something big.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-xl border border-border/40 bg-card/20 p-6 transition-colors hover:border-primary/20"
              >
                <Image
                  src={member.avatar}
                  alt={member.name}
                  width={56}
                  height={56}
                  className="size-14 rounded-full object-cover"
                />
                <h3 className="mt-5 text-base font-semibold">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              In the press
            </h2>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {press.map((item) => (
              <div
                key={item.outlet}
                className="rounded-xl border border-border/40 bg-card/30 p-6 transition-colors hover:border-primary/20"
              >
                <Image
                  src={item.logo}
                  alt={item.outlet}
                  width={120}
                  height={28}
                  className="h-6 w-auto opacity-60 mb-4 grayscale invert"
                />
                <p className="text-sm leading-relaxed text-muted-foreground italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-xl border border-primary/20 bg-primary/[0.03] p-10 lg:p-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Join us
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              We&apos;re always looking for talented people who want to shape the
              future of web creation. Check out our open roles.
            </p>
            <div className="mt-8">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 h-12 text-base shadow-lg shadow-primary/20"
                asChild
              >
                <Link href="/contact">
                  See open roles
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </div>
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
              Try Flashsite today
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Build your website in seconds. No credit card required.
            </p>
            <div className="mt-10">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 h-12 text-base shadow-lg shadow-primary/20"
                asChild
              >
                <Link href="/pricing">
                  Get started free
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

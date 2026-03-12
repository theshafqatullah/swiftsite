import Link from "next/link";
import NextImage from "next/image";
import {
  Sparkles,
  Paintbrush,
  Globe,
  Gauge,
  ShieldCheck,
  Code2,
  Layers,
  Smartphone,
  Search,
  GitBranch,
  Image as ImageIcon,
  FileText,
  ArrowRight,
  Check,
  MessageSquare,
  MousePointerClick,
  Monitor,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { featureImages, integrationLogos } from "@/lib/mock-data";

const coreFeatures = [
  {
    icon: Sparkles,
    title: "AI Page Generation",
    description:
      "Describe your page in plain English and our AI creates a fully designed, responsive page in seconds.",
  },
  {
    icon: Paintbrush,
    title: "Visual Drag & Drop Editor",
    description:
      "Refine any AI-generated page with an intuitive visual editor. Move, resize, and style elements with precision.",
  },
  {
    icon: Globe,
    title: "Custom Domains & Deploy",
    description:
      "Connect your own domain or use a free subdomain. Publish changes instantly with zero downtime.",
  },
  {
    icon: Gauge,
    title: "Performance Optimized",
    description:
      "Every site scores 90+ on Lighthouse. Automatic image optimization, lazy loading, and edge caching.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description:
      "Free SSL, DDoS protection, automated backups, and SOC 2 compliant infrastructure.",
  },
  {
    icon: Code2,
    title: "Code Export",
    description:
      "Export clean, production-ready HTML/CSS, React, or Next.js code. You always own your code.",
  },
  {
    icon: Smartphone,
    title: "Responsive by Default",
    description:
      "Every page is mobile-first and looks stunning on all devices. Preview for phone, tablet, and desktop.",
  },
  {
    icon: Layers,
    title: "Component Library",
    description:
      "Access hundreds of pre-built sections — navbars, hero blocks, pricing tables, testimonials, and more.",
  },
  {
    icon: Search,
    title: "Built-in SEO Tools",
    description:
      "Auto-generated meta tags, Open Graph images, sitemaps, and structured data for better rankings.",
  },
  {
    icon: GitBranch,
    title: "Version History",
    description:
      "Every change is tracked. Roll back to any previous version with a single click.",
  },
  {
    icon: ImageIcon,
    title: "AI Image Generation",
    description:
      "Generate custom illustrations, icons, and hero images directly inside the editor.",
  },
  {
    icon: FileText,
    title: "AI Copywriting",
    description:
      "Generate compelling headlines, product descriptions, and full page copy in any tone.",
  },
];

const highlights = [
  {
    icon: MessageSquare,
    label: "AI Assistant",
    title: "Build with conversation",
    description:
      "Chat with our AI to create, modify, and iterate on your website. Describe changes in natural language — add a testimonials section, change the color scheme, make the hero bigger — and watch it happen instantly.",
    bullets: [
      "Natural language prompts for any change",
      "Context-aware suggestions based on your site",
      "Supports follow-up requests for iterative refinement",
      "Generates copy, images, and layouts from a single prompt",
    ],
    image: featureImages.aiChat,
  },
  {
    icon: MousePointerClick,
    label: "Visual Editor",
    title: "Pixel-perfect control",
    description:
      "For when you want hands-on control, the visual editor lets you drag, drop, resize, and style every element. See changes in real time across all breakpoints.",
    bullets: [
      "Drag-and-drop with snap-to-grid alignment",
      "Real-time responsive preview (desktop, tablet, mobile)",
      "One-click style themes and color palette generator",
      "Undo/redo and version history for every change",
    ],
    image: featureImages.visualEditor,
  },
  {
    icon: Monitor,
    label: "Hosting & Deploy",
    title: "Launch in one click",
    description:
      "Your site is hosted on a global edge network with automatic SSL, CDN, and analytics. Connect a custom domain or use a free subdomain — either way, you\u2019re live in seconds.",
    bullets: [
      "Global CDN with 99.99% uptime SLA",
      "Automatic SSL and DDoS protection",
      "Custom domain with DNS verification",
      "Built-in analytics dashboard",
    ],
    image: featureImages.hostingDeploy,
  },
];

const comparisons = [
  { feature: "AI page generation", swiftsite: true, webflow: false, wix: true, squarespace: false },
  { feature: "Visual editor", swiftsite: true, webflow: true, wix: true, squarespace: true },
  { feature: "Code export", swiftsite: true, webflow: true, wix: false, squarespace: false },
  { feature: "AI copywriting", swiftsite: true, webflow: false, wix: true, squarespace: false },
  { feature: "AI image generation", swiftsite: true, webflow: false, wix: false, squarespace: false },
  { feature: "Custom domains", swiftsite: true, webflow: true, wix: true, squarespace: true },
  { feature: "Version history", swiftsite: true, webflow: true, wix: false, squarespace: false },
  { feature: "SEO tools", swiftsite: true, webflow: true, wix: true, squarespace: true },
  { feature: "Real-time collaboration", swiftsite: true, webflow: false, wix: false, squarespace: false },
  { feature: "Free tier", swiftsite: true, webflow: true, wix: true, squarespace: false },
];

export default function FeaturesPage() {
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
              Features
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Everything you need to build the web
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              From AI generation to visual editing to one-click deploy — Swiftsite
              is the complete platform.
            </p>
          </div>
        </div>
      </section>

      {/* Core features grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-px bg-border/40 sm:grid-cols-2 lg:grid-cols-3 rounded-xl border border-border/40 overflow-hidden">
            {coreFeatures.map((feature) => (
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
        </div>
      </section>

      {/* Feature highlights (alternating) */}
      {highlights.map((item, idx) => (
        <section key={item.label} className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
              <div className={idx % 2 === 1 ? "order-2" : ""}>
                <p className="text-sm font-medium uppercase tracking-widest text-primary">
                  {item.label}
                </p>
                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  {item.title}
                </h2>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
                <ul className="mt-8 space-y-4">
                  {item.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <Check className="size-4 mt-0.5 shrink-0 text-primary" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={idx % 2 === 1 ? "order-1" : ""}>
                <div className="rounded-xl border border-border/40 bg-background p-1">
                  <div className="rounded-lg overflow-hidden aspect-[4/3] relative">
                    <NextImage
                      src={item.image}
                      alt={`${item.label} Preview`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Comparison table */}
      <section className="py-24 relative">
        <div className="absolute inset-0 -z-10 bg-card/30" />
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Comparison
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              How Swiftsite compares
            </h2>
          </div>

          <div className="mt-16 overflow-x-auto">
            <table className="w-full min-w-[600px] text-sm">
              <thead>
                <tr className="border-b border-border/40">
                  <th className="pb-4 text-left font-medium text-muted-foreground">
                    Feature
                  </th>
                  <th className="pb-4 text-center font-semibold">Swiftsite</th>
                  <th className="pb-4 text-center font-medium text-muted-foreground">
                    Webflow
                  </th>
                  <th className="pb-4 text-center font-medium text-muted-foreground">
                    Wix
                  </th>
                  <th className="pb-4 text-center font-medium text-muted-foreground">
                    Squarespace
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40">
                {comparisons.map((row) => (
                  <tr key={row.feature}>
                    <td className="py-4 text-muted-foreground">{row.feature}</td>
                    <td className="py-4 text-center">
                      {row.swiftsite ? (
                        <Check className="size-4 mx-auto text-primary" />
                      ) : (
                        <span className="text-muted-foreground/40">—</span>
                      )}
                    </td>
                    <td className="py-4 text-center">
                      {row.webflow ? (
                        <Check className="size-4 mx-auto text-muted-foreground" />
                      ) : (
                        <span className="text-muted-foreground/40">—</span>
                      )}
                    </td>
                    <td className="py-4 text-center">
                      {row.wix ? (
                        <Check className="size-4 mx-auto text-muted-foreground" />
                      ) : (
                        <span className="text-muted-foreground/40">—</span>
                      )}
                    </td>
                    <td className="py-4 text-center">
                      {row.squarespace ? (
                        <Check className="size-4 mx-auto text-muted-foreground" />
                      ) : (
                        <span className="text-muted-foreground/40">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Integration logos */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Works with your stack
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Export to any framework. Integrate with your favorite tools.
            </p>
          </div>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8">
            {integrationLogos.map((item) => (
              <div
                key={item.name}
                className="flex items-center gap-3 rounded-lg border border-border/40 bg-card/30 px-5 py-3 text-sm text-muted-foreground transition-colors hover:border-primary/30 hover:bg-primary/5"
              >
                <NextImage
                  src={item.logo}
                  alt={item.name}
                  width={20}
                  height={20}
                  className="size-5"
                />
                {item.name}
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
              Ready to try it?
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Start building for free. No credit card required.
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
              <Button
                variant="outline"
                size="lg"
                className="border-border/60 h-12 px-8 text-base hover:border-primary/30 hover:bg-primary/5"
                asChild
              >
                <Link href="/pricing">View pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

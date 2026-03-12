import Link from "next/link";
import { ArrowRight, Twitter, Github, Linkedin, Zap } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

const footerLinks = {
  Product: [
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" },
  ],
  Resources: [
    { href: "/guides/vscode-server-digitalocean", label: "Guides" },
    { href: "/contact", label: "Support" },
    { href: "/contact", label: "Contact" },
  ],
  Legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
};

const socialLinks = [
  { href: "https://twitter.com", label: "Twitter", icon: Twitter },
  { href: "https://github.com", label: "GitHub", icon: Github },
  { href: "https://linkedin.com", label: "LinkedIn", icon: Linkedin },
];

const stats = [
  { value: "10k+", label: "Sites built" },
  { value: "99.9%", label: "Uptime" },
  { value: "< 1s", label: "Avg. build time" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      {/* CTA strip */}
      <div className="border-b border-border/40 bg-[#A127FF]/[0.04]">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
            <div className="space-y-1.5 max-w-md">
              <div className="flex items-center gap-2 text-[#A127FF] mb-3">
                <Zap className="size-4 fill-[#A127FF]" />
                <span className="text-xs font-semibold uppercase tracking-widest">Get started free</span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-foreground">
                Ready to build something amazing?
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Join thousands of teams shipping faster with Swiftsite. No credit card required.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:items-end">
              <Button
                size="lg"
                className="bg-[#A127FF] text-white hover:bg-[#A127FF]/90 shadow-[0_0_24px_rgba(161,39,255,0.25)] hover:shadow-[0_0_32px_rgba(161,39,255,0.35)] transition-all"
                asChild
              >
                <Link href="/pricing">
                  Start building
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <p className="text-xs text-muted-foreground">Free plan · No credit card</p>
            </div>
          </div>

          {/* Stats row */}
          <div className="mt-10 flex flex-wrap gap-10 border-t border-border/40 pt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-bold tabular-nums text-foreground">{s.value}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer body */}
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          {/* Brand column */}
          <div className="space-y-5 max-w-xs">
            <Link href="/" className="flex items-center">
              <Logo className="h-5 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Build beautiful, production-ready websites in seconds with the power of AI.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-2 pt-1">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-8 items-center justify-center border border-border/60 text-muted-foreground transition-colors hover:border-[#A127FF]/40 hover:text-[#A127FF]"
                >
                  <Icon className="size-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="flex flex-wrap gap-12 sm:gap-16">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="space-y-3.5">
                <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground/50">
                  {category}
                </h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.href + link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border/40 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-muted-foreground/70">
            &copy; {new Date().getFullYear()} Swiftsite, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            <span className="inline-block size-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs text-muted-foreground/60">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

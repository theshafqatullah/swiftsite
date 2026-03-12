import Link from "next/link";
import {
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  MessageSquare,
  Phone,
  Globe,
  HelpCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    description: "Our team typically responds within 2 hours.",
    detail: "hello@swiftsite.dev",
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Available Mon–Fri, 9am–6pm PST.",
    detail: "Start a conversation",
  },
  {
    icon: Phone,
    title: "Phone",
    description: "For enterprise and Team plan customers.",
    detail: "+1 (415) 555-0132",
  },
  {
    icon: MapPin,
    title: "Office",
    description: "Visit us in person by appointment.",
    detail: "San Francisco, CA",
  },
];

const faqs = [
  {
    q: "What's the best way to reach support?",
    a: "For the fastest response, use our live chat during business hours. For non-urgent questions, email us and we'll respond within 2 hours.",
  },
  {
    q: "Do you offer enterprise support?",
    a: "Yes. Team plan customers get a dedicated account manager and priority support. Enterprise customers get 24/7 phone and email support with an SLA.",
  },
  {
    q: "Can I schedule a demo?",
    a: "Absolutely. Fill out the contact form and mention you'd like a demo. We'll set up a personalized walkthrough of Swiftsite for you or your team.",
  },
  {
    q: "Where is Swiftsite based?",
    a: "Our headquarters is in San Francisco, CA. We have a distributed team across the US, Europe, and Asia.",
  },
  {
    q: "Do you have a community or forum?",
    a: "Yes! Join our Discord community with 5,000+ members. Get help, share your sites, and connect with other builders.",
  },
];

const offices = [
  {
    city: "San Francisco",
    country: "United States",
    address: "548 Market St, Suite 300",
    timezone: "PST (UTC-8)",
  },
  {
    city: "London",
    country: "United Kingdom",
    address: "71 Queen Victoria St",
    timezone: "GMT (UTC+0)",
  },
];

export default function ContactPage() {
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
              Contact
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Get in touch
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Have a question, want a demo, or need help? We&apos;d love to hear
              from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact methods */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactMethods.map((method) => (
              <div
                key={method.title}
                className="rounded-xl border border-border/40 bg-card/20 p-6 transition-all hover:bg-card/40 hover:border-primary/20 group"
              >
                <div className="inline-flex items-center justify-center size-10 rounded-lg bg-primary/10 group-hover:bg-primary/15 transition-colors">
                  <method.icon className="size-5 text-primary" />
                </div>
                <h3 className="mt-4 text-base font-semibold">{method.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {method.description}
                </p>
                <p className="mt-3 text-sm font-medium">{method.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form + info */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Send us a message
              </h2>
              <p className="mt-3 text-muted-foreground">
                Fill out the form below and we&apos;ll get back to you within 24
                hours.
              </p>
              <form className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-sm">
                      First name
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      className="h-11 bg-card/30 border-border/40"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-sm">
                      Last name
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      className="h-11 bg-card/30 border-border/40"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="h-11 bg-card/30 border-border/40"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-sm">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    className="h-11 bg-card/30 border-border/40"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="bg-card/30 border-border/40"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 h-11 shadow-lg shadow-primary/20"
                >
                  Send message
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </form>
            </div>

            {/* Office info */}
            <div className="lg:pt-12">
              <h3 className="text-lg font-semibold mb-6">Our offices</h3>
              <div className="space-y-6">
                {offices.map((office) => (
                  <div
                    key={office.city}
                    className="rounded-xl border border-border/40 bg-card/20 p-6"
                  >
                    <div className="flex items-start gap-4">
                      <Globe className="size-5 mt-0.5 text-muted-foreground shrink-0" />
                      <div>
                        <h4 className="font-semibold">
                          {office.city},{" "}
                          <span className="text-muted-foreground font-normal">
                            {office.country}
                          </span>
                        </h4>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {office.address}
                        </p>
                        <p className="mt-1 text-sm text-muted-foreground flex items-center gap-1.5">
                          <Clock className="size-3.5" />
                          {office.timezone}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-xl border border-border/40 bg-card/20 p-6">
                <h3 className="text-base font-semibold">Business hours</h3>
                <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday – Friday</span>
                    <span>9:00 AM – 6:00 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>Email support only</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>

              <div className="mt-10 rounded-xl border border-border/40 bg-card/20 p-6">
                <h3 className="text-base font-semibold">Response times</h3>
                <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Live chat</span>
                    <span className="font-medium text-foreground">&lt; 5 min</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Email</span>
                    <span className="font-medium text-foreground">&lt; 2 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Phone (Team plan)</span>
                    <span className="font-medium text-foreground">Immediate</span>
                  </div>
                </div>
              </div>
            </div>
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
              Frequently asked questions
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
              Ready to get started?
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Build your first website in seconds. No credit card required.
            </p>
            <div className="mt-10">
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

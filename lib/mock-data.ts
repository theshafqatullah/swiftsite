// Mock image data used across the site.
// All URLs point to placeholder image services for development.
// Replace with real assets before production.

export const avatars = {
  sarahChen: "https://i.pravatar.cc/150?u=sarah-chen",
  marcusWilliams: "https://i.pravatar.cc/150?u=marcus-williams",
  emmaRodriguez: "https://i.pravatar.cc/150?u=emma-rodriguez",
  jamesPark: "https://i.pravatar.cc/150?u=james-park",
  aishaPatel: "https://i.pravatar.cc/150?u=aisha-patel",
  davidKim: "https://i.pravatar.cc/150?u=david-kim",
} as const;

export const teamAvatars = {
  alexRivera: "https://i.pravatar.cc/150?u=alex-rivera",
  priyaSharma: "https://i.pravatar.cc/150?u=priya-sharma",
  jordanLee: "https://i.pravatar.cc/150?u=jordan-lee",
  samNakamura: "https://i.pravatar.cc/150?u=sam-nakamura",
} as const;

export const featureImages = {
  visualEditor:
    "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop",
  aiChat:
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
  hostingDeploy:
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
} as const;

export const companyLogos: { name: string; logo: string }[] = [
  {
    name: "Acme Corp",
    logo: "https://img.logoipsum.com/243.svg",
  },
  {
    name: "TechFlow",
    logo: "https://img.logoipsum.com/244.svg",
  },
  {
    name: "Bloom Studio",
    logo: "https://img.logoipsum.com/245.svg",
  },
  {
    name: "NovaTech",
    logo: "https://img.logoipsum.com/247.svg",
  },
  {
    name: "Tidal",
    logo: "https://img.logoipsum.com/248.svg",
  },
  {
    name: "Vertex AI",
    logo: "https://img.logoipsum.com/249.svg",
  },
  {
    name: "Nimbus",
    logo: "https://img.logoipsum.com/250.svg",
  },
  {
    name: "Prism Labs",
    logo: "https://img.logoipsum.com/251.svg",
  },
];

export const pressLogos: Record<string, string> = {
  TechCrunch: "https://img.logoipsum.com/252.svg",
  "The Verge": "https://img.logoipsum.com/253.svg",
  "Product Hunt": "https://img.logoipsum.com/254.svg",
};

export const integrationLogos: { name: string; logo: string }[] = [
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Vercel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
  { name: "Netlify", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg" },
  { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Stripe", logo: "https://images.stripeassets.com/fzn2n1nzq965/HTTOloNPhisV9P4hlMPNA/cacf1bb88b9fc492dfad34378d844280/Stripe_icon_-_square.svg" },
  { name: "GA4", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
];

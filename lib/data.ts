import { Code2, type LucideIcon } from "lucide-react";

export interface Job {
  title: string;
  company: string;
  range: string;
  duties: string[];
  tech: string[];
}

export interface Project {
  title: string;
  desc: string;
  tech: string[];
  icon: LucideIcon;
  image?: string;
  video?: string;
  videoWebm?: string;
  githubLink: string;
  websiteLink: string;
}

export interface PhotoMetadata {
  src: string;
  alt: string;
  category: string;
  year: string;
  aperture: string;
  focalLength: string;
  camera: string;
  orientation: string;
}

export interface Achievement {
  title: string;
  company: string;
  description: string;
  year?: string;
}

export const jobs: Job[] = [
  {
    title: "Software Engineer",
    company: "American Express",
    range: "2024 - Present",
    duties: [
      "Develop React-based micro-frontend modules using a proprietary Node.Js orchestration framework.",
    ],
    tech: ["Node.Js", "React", "TanStack", "Tailwind"],
  },
  {
    title: "Software Engineer",
    company: "CVS Health",
    range: "2022 - 2024",
    duties: [
      "Built scalable, reusable React and Next.Js components for e-commerce payment flows."
    ],
    tech: ["Next.Js", "Angular", "GraphQL", "Jenkins"],
  },
  {
    title: "Web Engineer",
    company: "Merkle",
    range: "2021 - 2022",
    duties: [
      "Designed and developed an Express.js reverse-proxy server.",
    ],
    tech: ["React", "Express", "MySQL", "AWS"],
  },
];

export const projects: Project[] = [
  {
    title: "trackr",
    desc: "A comprehensive financial management platform that combines modern design with powerful functionality.",
    tech: ["Next.Js", "React", "shadcn/ui", "Recharts", "TanStack"],
    icon: Code2,
    video: "/trackr.mp4",
    videoWebm: "/trackr.webm",
    image: "/trackr.png",
    githubLink: "https://github.com/moamin95/trackr",
    websiteLink: "https://trackr-wheat.vercel.app/",
  },
];

export const photos: PhotoMetadata[] = [
  {
    src: "/images/cathedral.jpg",
    alt: "Cathedral architecture",
    category: "ARCHITECTURE",
    year: "2025",
    aperture: "f/2.8",
    focalLength: "35mm",
    camera: "Sony A7III",
    orientation: "portrait"
  },
  {
    src: "/images/cave.jpg",
    alt: "Cave exploration",
    category: "NATURE",
    year: "2025",
    aperture: "f/4.0",
    focalLength: "24mm",
    camera: "Sony A6700",
    orientation: "portrait"
  },
  {
    src: "/images/orange.jpg",
    alt: "Orange sunset",
    category: "STREET",
    year: "2025",
    aperture: "f/1.8",
    focalLength: "50mm",
    camera: "Sony A7III",
    orientation: "portrait"
  },
  {
    src: "/images/doggo.jpg",
    alt: "Dog portrait",
    category: "PORTRAIT",
    year: "2025",
    aperture: "f/1.4",
    focalLength: "85mm",
    camera: "Sony A6700",
    orientation: "portrait"
  },
  {
    src: "/images/prity2.jpg",
    alt: "Portrait work",
    category: "PEOPLE",
    year: "2025",
    aperture: "f/2.0",
    focalLength: "50mm",
    camera: "Sony A7III",
    orientation: "portrait"
  },
];

export const technologies = [
  "React",
  "Node.Js",
  "Next.Js",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "Figma",
  "Redux",
  "TanStack Query",
  "PostgreSQL",
];

export const achievements: Achievement[] = [
  {
    title: "React Server Components",
    company: "American Express",
    description: "Spearheading the migration of legacy architectures to React 19 and Node.js, implementing TanStack Query to architect a robust caching strategy that optimizes data-fetching performance and significantly reduces redundant API overhead.",
    year: "2025"
  },
  {
    title: "Greenfield Next.Js Pages",
    company: "CVS",
    description: "Led 0 -> 1 development of secure payment modules using Next.Js Page Router. Implemented SSR to ensure high performance and SEO, while maintaining strict data validation standards for high-stakes payment transactions.",
    year: "2024"
  },
  {
    title: "Admin Portal",
    company: "Merkle",
    description: "Architected a centralized Admin Portal, designing a MySQL schema for user management and an Express.js Reverse Proxy. Streamlined internal workflows and secured backend endpoints through a unified, authenticated entry point.",
    year: "2022"
  },
];
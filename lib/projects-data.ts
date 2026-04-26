export interface ProjectItem {
  id: number;
  titleKey: string;
  descriptionKey: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
}

export const projects: ProjectItem[] = [
  {
    id: 1,
    titleKey: "ecommercePlatform",
    descriptionKey: "ecommerceDesc",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "#",
    demo: "#",
    image: "/api/placeholder/400/250",
  },
  {
    id: 2,
    titleKey: "taskManagementApp",
    descriptionKey: "taskDesc",
    technologies: ["React Native", "Firebase", "Redux", "Expo"],
    github: "#",
    demo: "#",
    image: "/api/placeholder/400/250",
  },
  {
    id: 3,
    titleKey: "portfolioWebsite",
    descriptionKey: "portfolioDesc",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "#",
    demo: "#",
    image: "/api/placeholder/400/250",
  },
  {
    id: 4,
    titleKey: "analyticsDashboard",
    descriptionKey: "analyticsDesc",
    technologies: ["React", "Chart.js", "API", "Redux"],
    github: "#",
    demo: "#",
    image: "/api/placeholder/400/250",
  },
  {
    id: 5,
    titleKey: "socialMediaApp",
    descriptionKey: "socialDesc",
    technologies: ["React Native", "Firebase", "WebSockets"],
    github: "#",
    demo: "#",
    image: "/api/placeholder/400/250",
  },
  {
    id: 6,
    titleKey: "cmsPlatform",
    descriptionKey: "cmsDesc",
    technologies: ["Next.js", "Sanity", "Tailwind CSS", "Vercel"],
    github: "#",
    demo: "#",
    image: "/api/placeholder/400/250",
  },
];

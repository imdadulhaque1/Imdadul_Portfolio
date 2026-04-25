import ProjectsScreen from "@/app/(screens)/ProjectsScreen";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Imdadul Haque | Projects",
  description:
    "Discover the projects I've worked on, including web applications, mobile apps, and full-stack solutions.",
};

export default function ProjectsPage() {
  return <ProjectsScreen />;
}

"use client";

import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { theme } = useTheme();
  const { t } = useTranslation("common");
  const txtColor = theme === "dark" ? "dark-text" : "light-text";
  const bgColor = theme === "dark" ? "dark-bg" : "light-bg";

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include product catalog, shopping cart, payment integration, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management with real-time updates using Socket.io. Users can create projects, assign tasks, and track progress.",
      technologies: ["Next.js", "Socket.io", "PostgreSQL", "Tailwind"],
      link: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "Responsive portfolio with dark mode, animations, and multi-language support. Built with Next.js and optimized for performance.",
      technologies: ["Next.js", "Tailwind CSS", "i18n", "Framer Motion"],
      link: "#",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Real-time analytics dashboard with charts, graphs, and data visualization. Fetches data from multiple sources and displays insights.",
      technologies: ["React", "Chart.js", "API", "Redux"],
      link: "#",
    },
    {
      title: "Social Media App",
      description:
        "Social networking platform with features like posts, comments, likes, and user profiles. Includes real-time notifications.",
      technologies: ["React Native", "Firebase", "WebSockets"],
      link: "#",
    },
    {
      title: "CMS Platform",
      description:
        "Content Management System with role-based access control. Features include content creation, scheduling, and publishing workflows.",
      technologies: ["Next.js", "PostgreSQL", "GraphQL", "Prisma"],
      link: "#",
    },
  ];

  return (
    <section
      id="projects"
      className={`min-h-screen flex items-center justify-center px-4 ${bgColor} animate-fade-in-up py-20`}
    >
      <div className="max-w-6xl mx-auto w-full">
        <h2
          className={`text-3xl md:text-5xl font-bold ${txtColor} mb-8 text-center`}
        >
          {t("projects")}
        </h2>
        <p
          className={`text-lg md:text-xl ${txtColor} mb-12 text-center leading-relaxed`}
        >
          {t("projectsDesc")}
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <a
              key={idx}
              href={project.link}
              className={`p-6 rounded-lg transition-all hover:shadow-xl hover:-translate-y-2 flex flex-col cursor-pointer ${theme === "dark" ? "bg-gray-800 hover:border-blue-500" : "bg-gray-100 hover:border-blue-500"} border-2 border-transparent`}
            >
              <h3 className={`text-xl font-semibold ${txtColor} mb-3`}>
                {project.title}
              </h3>
              <p
                className={`${txtColor} mb-4 flex-grow text-sm leading-relaxed`}
              >
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-blue-500 text-white text-xs rounded font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

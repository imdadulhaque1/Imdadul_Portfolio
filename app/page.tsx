"use client";
import HireMe from "@/components/sections/HireMe";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Publication from "@/components/sections/Publication";
import Projects from "@/components/sections/Projects";
import { useEffect, useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("hireMe");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            setActiveSection(sectionId);
            window.history.replaceState(null, "", `#${sectionId}`);

            // Update page title
            const titles = {
              hireMe: "Imdadul Haque",
              about: "Imdadul Haque | About",
              experience: "Imdadul Haque | Experience",
              projects: "Imdadul Haque | Projects",
              publication: "Imdadul Haque | Publication",
              contactMe: "Imdadul Haque | Contact Me",
            };
            document.title =
              titles[sectionId as keyof typeof titles] || "Imdadul Haque";
          }
        });
      },
      { threshold: 0.5 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <HireMe />
      <About />
      <Experience />
      <Projects />
      <Publication />
      <Contact />
    </main>
  );
}

"use client";
import HireMe from "@/components/sections/HireMe";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Publication from "@/components/sections/Publication";
import Projects from "@/components/sections/Projects";
import { useEffect } from "react";
import { useActiveSection } from "@/components/ActiveSectionContext";

// Top-to-bottom DOM order, matching the sections rendered below.
const SECTION_IDS = [
  "hireMe",
  "about",
  "experience",
  "projects",
  "publication",
  "contactMe",
];

const TITLES: Record<string, string> = {
  hireMe: "Imdadul Haque",
  about: "Imdadul Haque | About",
  experience: "Imdadul Haque | Experience",
  projects: "Imdadul Haque | Projects",
  publication: "Imdadul Haque | Publication",
  contactMe: "Imdadul Haque | Contact Me",
};

// Distance from the viewport top (just past the fixed navbar) used as
// the "current section" trigger line - must match each section's
// scroll-mt-20 (5rem) offset so a clicked link lands exactly on it.
const TRIGGER_OFFSET = 80;

export default function Home() {
  const { activeSection, reportScrollSection } = useActiveSection();

  // Kept separate from the scroll listener below, which reports the
  // section a click's smooth-scroll animation is *passing through* every
  // frame - that's suppressed while a click is settling, but the URL hash
  // and title should only ever reflect the section that's actually active.
  useEffect(() => {
    window.history.replaceState(null, "", `#${activeSection}`);
    document.title = TITLES[activeSection] || "Imdadul Haque";
  }, [activeSection]);

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );

    let frame = 0;

    const updateActive = () => {
      frame = 0;

      // The active section is the last one (in DOM order) whose top has
      // scrolled up to or past the trigger line - i.e. the section we're
      // currently "inside", regardless of how tall it is.
      let activeId = SECTION_IDS[0];
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= TRIGGER_OFFSET) {
          activeId = section.id;
        } else {
          break;
        }
      }

      // The last section can't always scroll its top past the trigger
      // line - there's nothing left below it to scroll through - so once
      // we've hit (or are within rounding error of) the page's max scroll
      // position, force it active instead of leaving the previous section
      // highlighted.
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (atBottom) {
        activeId = SECTION_IDS[SECTION_IDS.length - 1];
      }

      reportScrollSection(activeId);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(updateActive);
    };

    updateActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [reportScrollSection]);

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

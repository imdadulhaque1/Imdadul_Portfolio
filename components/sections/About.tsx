"use client";

import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import { useState, useEffect, useRef } from "react";

// Skill names like "WebRTC / Socket.io" or "Microsoft Azure" can outgrow
// their column once the skills list splits into two (see the grid below),
// especially at the sm/md breakpoints where each column is narrowest.
// Wrapping would break row alignment with the progress bar underneath it,
// so text that doesn't fit scrolls as a ticker instead of wrapping or
// getting truncated; text that already fits stays perfectly still.
const TickerText = ({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [overflowing, setOverflowing] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const textEl = textRef.current;
    if (!container || !textEl) return;

    const checkOverflow = () => {
      setOverflowing(textEl.scrollWidth > container.clientWidth);
    };

    checkOverflow();
    const observer = new ResizeObserver(checkOverflow);
    observer.observe(container);
    return () => observer.disconnect();
  }, [text]);

  return (
    <div ref={containerRef} className={`overflow-hidden whitespace-nowrap ${className}`}>
      <span className={overflowing ? "skill-ticker-track" : "inline-block"}>
        <span ref={textRef} className="inline-block">
          {text}
        </span>
        {overflowing && (
          <span className="inline-block pl-10" aria-hidden="true">
            {text}
          </span>
        )}
      </span>
    </div>
  );
};

const About = () => {
  const { theme } = useTheme();
  const { t } = useTranslation("common");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === "dark";
  const txtColor = isDark ? "dark-text" : "light-text";
  const bgColor = isDark ? "dark-bg" : "light-bg";
  const cardBg = isDark ? "dark-bg-transparent" : "light-bg-transparent";

  // Bars start at 0% and only pick up their real width once `mounted` flips
  // (see the effect above) so the fill transition in globals.css actually
  // has a "from" state to animate from, instead of snapping straight to
  // full width on first paint.
  const levelPercent: Record<string, number> = {
    Expert: 95,
    Advanced: 82,
    Intermediate: 62,
    Basic: 38,
  };

  // Ordered by category priority (mobile -> realtime -> web -> backend ->
  // db -> server), not alphabetically or by level, so the list leads with
  // what this portfolio should be found for first.
  const skills = [
    // Mobile
    { name: "React Native", level: "Expert" },
    { name: "Kotlin", level: "Intermediate" },
    { name: "Swift", level: "Basic" },
    { name: "TypeScript", level: "Advanced" },
    // Realtime
    { name: "WebRTC / Socket.io", level: "Intermediate" },
    // Web
    { name: "ReactJS / Next.js", level: "Intermediate" },
    { name: "Tailwind CSS", level: "Advanced" },
    // Backend
    { name: "NestJS", level: "Advanced" },
    { name: ".NET", level: "Basic" },
    // Database
    { name: "MSSQL", level: "Intermediate" },
    { name: "PostgreSQL", level: "Basic" },
    { name: "MongoDB", level: "Basic" },
    // Server / DevOps
    { name: "Microsoft Azure", level: "Basic" },
    { name: "Redis", level: "Basic" },
    { name: "GitHub", level: "Advanced" },
  ];

  return (
    <section
      id="about"
      className={`min-h-screen scroll-mt-20 flex items-center justify-center px-4 ${bgColor} animate-fade-in-up py-12 sm:py-16 md:py-20`}
    >
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <h2
          className={`text-3xl md:text-5xl font-bold ${txtColor} mb-4 sm:mb-6 md:mb-8 text-center`}
        >
          {t("about")}
        </h2>
        <p
          className={`text-sm sm:text-sm sm:text-body md:text-body-lg ${txtColor} mb-8 sm:mb-12 text-center leading-relaxed`}
        >
          {t("aboutDesc")}
        </p>
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
          <div>
            <h3
              className={`text-heading-sm sm:text-heading md:text-heading-lg font-semibold ${txtColor} mb-6`}
            >
              {t("skills")}
            </h3>
            <div className="columns-1 sm:columns-2 gap-x-8">
              {skills.map((skill, idx) => (
                <div key={idx} className="break-inside-avoid mb-5">
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <TickerText
                      text={skill.name}
                      className={`flex-1 min-w-0 text-sm sm:text-sm sm:text-body md:text-body-lg font-medium ${txtColor}`}
                    />
                    <span className="shrink-0 text-sm sm:text-sm sm:text-body md:text-body-lg text-accent font-semibold">
                      {skill.level}
                    </span>
                  </div>
                  <div
                    className={`h-2 sm:h-2.5 rounded-full ${isDark ? "bg-gray-700" : "bg-gray-300"}`}
                  >
                    <div
                      className="skill-bar-fill h-2 sm:h-2.5 rounded-full"
                      style={{
                        width: mounted ? `${levelPercent[skill.level]}%` : "0%",
                        transitionDelay: `${idx * 80}ms`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3
              className={`text-heading-sm sm:text-heading md:text-heading-lg font-semibold ${txtColor} mb-6`}
            >
              {t("fullStackDeveloper")}
            </h3>
            <p
              className={`text-sm sm:text-sm sm:text-body md:text-body-lg ${txtColor} leading-relaxed mb-6`}
            >
              5+ years of experience in full-stack development with modern
              technologies. Specialized in building scalable, performant
              applications.
            </p>
            <div className={`p-4 sm:p-6 rounded-lg ${cardBg} backdrop-blur-sm`}>
              <p
                className={`text-sm sm:text-body md:text-body-lg ${txtColor} font-semibold mb-2`}
              >
                Key Achievements:
              </p>
              <ul
                className={`text-sm sm:text-body md:text-body-lg ${txtColor} space-y-2`}
              >
                <li>✓ Built 15+ production applications</li>
                <li>✓ Led development teams</li>
                <li>✓ Open source contributor</li>
                <li>✓ Technical writer</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

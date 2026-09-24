"use client";

import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

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

  const skills = [
    { name: "React/Next.js", level: "Expert" },
    { name: "TypeScript", level: "Expert" },
    { name: "Node.js", level: "Advanced" },
    { name: "Python", level: "Advanced" },
    { name: "MongoDB", level: "Advanced" },
    { name: "Tailwind CSS", level: "Expert" },
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
          className={`text-body md:text-body-lg ${txtColor} mb-8 sm:mb-12 text-center leading-relaxed`}
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
            <div className="space-y-4">
              {skills.map((skill, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-2">
                    <span
                      className={`text-body md:text-body-lg font-medium ${txtColor}`}
                    >
                      {skill.name}
                    </span>
                    <span className="text-body md:text-body-lg text-blue-500 font-semibold">
                      {skill.level}
                    </span>
                  </div>
                  <div
                    className={`h-2 rounded-full ${isDark ? "bg-gray-700" : "bg-gray-300"}`}
                  >
                    <div
                      className="h-2 bg-blue-500 rounded-full"
                      style={{ width: "90%" }}
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
              className={`text-body md:text-body-lg ${txtColor} leading-relaxed mb-6`}
            >
              3+ years of experience in full-stack development with modern
              technologies. Specialized in building scalable, performant
              applications.
            </p>
            <div className={`p-4 sm:p-6 rounded-lg ${cardBg} backdrop-blur-sm`}>
              <p
                className={`text-body md:text-body-lg ${txtColor} font-semibold mb-2`}
              >
                Key Achievements:
              </p>
              <ul
                className={`text-body md:text-body-lg ${txtColor} space-y-2`}
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

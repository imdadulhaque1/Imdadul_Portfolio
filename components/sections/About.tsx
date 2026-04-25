"use client";

import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";

const About = () => {
  const { theme } = useTheme();
  const { t } = useTranslation("common");
  const txtColor = theme === "dark" ? "dark-text" : "light-text";
  const bgColor = theme === "dark" ? "dark-bg" : "light-bg";

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
      className={`min-h-screen flex items-center justify-center px-4 ${bgColor} animate-fade-in-up py-20`}
    >
      <div className="max-w-5xl mx-auto w-full">
        <h2
          className={`text-3xl md:text-5xl font-bold ${txtColor} mb-8 text-center`}
        >
          {t("about")}
        </h2>
        <p
          className={`text-lg md:text-xl ${txtColor} mb-12 text-center leading-relaxed`}
        >
          {t("aboutDesc")}
        </p>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className={`text-2xl font-semibold ${txtColor} mb-6`}>
              {t("skills")}
            </h3>
            <div className="space-y-4">
              {skills.map((skill, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-2">
                    <span className={`font-medium ${txtColor}`}>
                      {skill.name}
                    </span>
                    <span className="text-blue-500 font-semibold">
                      {skill.level}
                    </span>
                  </div>
                  <div
                    className={`h-2 rounded-full ${theme === "dark" ? "bg-gray-700" : "bg-gray-300"}`}
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
            <h3 className={`text-2xl font-semibold ${txtColor} mb-6`}>
              {t("fullStackDeveloper")}
            </h3>
            <p className={`${txtColor} leading-relaxed mb-6`}>
              3+ years of experience in full-stack development with modern
              technologies. Specialized in building scalable, performant
              applications.
            </p>
            <div
              className={`p-6 rounded-lg ${theme === "dark" ? "bg-gray-800" : "bg-gray-100"}`}
            >
              <p className={`${txtColor} font-semibold mb-2`}>
                Key Achievements:
              </p>
              <ul className={`${txtColor} space-y-2`}>
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

"use client";

import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";

const Publication = () => {
  const { theme } = useTheme();
  const { t } = useTranslation("common");
  const txtColor = theme === "dark" ? "dark-text" : "light-text";
  const bgColor = theme === "dark" ? "dark-bg" : "light-bg";

  const publications = [
    {
      title: "Modern Web Development with React",
      publication: "Tech Journal",
      date: "2023",
      description: "An in-depth guide to building scalable applications with React and modern tools. Covers best practices, performance optimization, and testing strategies.",
      tags: ["React", "Web Development", "JavaScript"],
    },
    {
      title: "TypeScript Best Practices",
      publication: "Conference Paper",
      date: "2022",
      description: "Exploring advanced TypeScript patterns for better code quality. Includes practical examples and real-world scenarios.",
      tags: ["TypeScript", "Programming", "Best Practices"],
    },
    {
      title: "Building Scalable APIs with Node.js",
      publication: "Tech Medium",
      date: "2022",
      description: "A comprehensive guide on designing and implementing scalable REST APIs. Covers authentication, caching, and database optimization.",
      tags: ["Node.js", "API Design", "Backend"],
    },
  ];

  return (
    <section
      id="publication"
      className={`min-h-screen flex items-center justify-center px-4 ${bgColor} animate-fade-in-up py-20`}
    >
      <div className="max-w-4xl mx-auto w-full">
        <h2 className={`text-3xl md:text-5xl font-bold ${txtColor} mb-8 text-center`}>
          {t("publication")}
        </h2>
        <p className={`text-lg md:text-xl ${txtColor} mb-12 text-center leading-relaxed`}>
          {t("publicationDesc")}
        </p>
        <div className="space-y-8">
          {publications.map((pub, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-lg border-2 transition-all hover:shadow-lg ${theme === "dark" ? "bg-gray-800 border-gray-700 hover:border-blue-500" : "bg-gray-100 border-gray-300 hover:border-blue-500"}`}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className={`text-2xl font-semibold ${txtColor} flex-1`}>
                  \"{pub.title}\"
                </h3>
              </div>
              <div className="flex items-center gap-4 mb-4 text-sm">
                <span className="text-blue-500 font-semibold">{pub.publication}</span>
                <span className={`${txtColor} opacity-75`}>•</span>
                <span className={`${txtColor} opacity-75`}>{pub.date}</span>
              </div>
              <p className={`${txtColor} mb-6 leading-relaxed`}>{pub.description}</p>
              <div className="flex flex-wrap gap-2">
                {pub.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${theme === "dark" ? "bg-blue-900 text-blue-200" : "bg-blue-200 text-blue-800"}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publication;
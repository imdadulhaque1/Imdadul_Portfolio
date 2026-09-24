"use client";

import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

const Contact = () => {
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

  const contacts = [
    {
      icon: "📧",
      label: t("email"),
      value: "imdadulhaque1440@gmail.com",
      link: "mailto:imdadulhaque1440@gmail.com",
    },
    {
      icon: "📱",
      label: t("phone"),
      value: "+88 01770-019346",
      link: "tel: +8801770019346",
    },
    {
      icon: "💼",
      label: t("linkedin"),
      value: "/in/imdadulhaque1",
      link: "https://linkedin.com/in/imdadulhaque1",
    },
    {
      icon: "🐙",
      label: t("github"),
      value: "/imdadulhaque1",
      link: "https://github.com/imdadulhaque1",
    },
  ];

  return (
    <section
      id="contactMe"
      className={`min-h-screen scroll-mt-20 flex items-center justify-center px-4 ${bgColor} animate-fade-in-up py-12 sm:py-16 md:py-20`}
    >
      <div className="relative z-10 max-w-3xl mx-auto w-full">
        <h2
          className={`text-3xl md:text-5xl font-bold ${txtColor} mb-4 sm:mb-6 text-center`}
        >
          {t("contactMe")}
        </h2>
        <p
          className={`text-body md:text-body-lg ${txtColor} mb-8 sm:mb-12 text-center leading-relaxed`}
        >
          {t("contactMeDesc")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {contacts.map((contact, idx) => (
            <a
              key={idx}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-4 sm:p-6 rounded-lg ${cardBg} backdrop-blur-sm transition-all hover:shadow-lg hover:-translate-y-1 hover:border-accent/50`}
            >
              <div className="text-3xl mb-3">{contact.icon}</div>
              <h3
                className={`text-body md:text-body-lg font-semibold ${txtColor} opacity-75 mb-2`}
              >
                {contact.label}
              </h3>
              <p
                className={`text-heading-sm sm:text-heading md:text-heading-lg font-medium break-words ${txtColor}`}
              >
                {contact.value}
              </p>
            </a>
          ))}
        </div>
        <form className="mt-12 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className={`w-full px-4 py-3 rounded-lg text-body md:text-body-lg ${isDark ? "bg-gray-800 text-white" : "bg-gray-100 text-black"} focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          <input
            type="email"
            placeholder="Your Email"
            className={`w-full px-4 py-3 rounded-lg text-body md:text-body-lg ${isDark ? "bg-gray-800 text-white" : "bg-gray-100 text-black"} focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className={`w-full px-4 py-3 rounded-lg text-body md:text-body-lg ${isDark ? "bg-gray-800 text-white" : "bg-gray-100 text-black"} focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          <button className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 text-body md:text-body-lg font-semibold cursor-pointer">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

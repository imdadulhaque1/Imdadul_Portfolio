"use client";

import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { theme } = useTheme();
  const { t } = useTranslation("common");
  const txtColor = theme === "dark" ? "dark-text" : "light-text";
  const bgColor = theme === "dark" ? "dark-bg" : "light-bg";

  const contacts = [
    {
      icon: "📧",
      label: t("email"),
      value: "imdadul@example.com",
      link: "mailto:imdadul@example.com",
    },
    {
      icon: "📱",
      label: t("phone"),
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: "💼",
      label: t("linkedin"),
      value: "/in/imdadulhaque",
      link: "https://linkedin.com/in/imdadulhaque",
    },
    {
      icon: "🐙",
      label: t("github"),
      value: "/imdadulhaque",
      link: "https://github.com/imdadulhaque",
    },
  ];

  return (
    <section
      id="contactMe"
      className={`min-h-screen flex items-center justify-center px-4 ${bgColor} animate-fade-in-up py-20`}
    >
      <div className="max-w-2xl mx-auto w-full">
        <h2
          className={`text-3xl md:text-5xl font-bold ${txtColor} mb-6 text-center`}
        >
          {t("contactMe")}
        </h2>
        <p
          className={`text-lg md:text-xl ${txtColor} mb-12 text-center leading-relaxed`}
        >
          {t("contactMeDesc")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contacts.map((contact, idx) => (
            <a
              key={idx}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-6 rounded-lg transition-all hover:shadow-lg hover:-translate-y-1 ${theme === "dark" ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-100 hover:bg-gray-200"}`}
            >
              <div className="text-3xl mb-3">{contact.icon}</div>
              <h3
                className={`text-sm font-semibold ${txtColor} opacity-75 mb-2`}
              >
                {contact.label}
              </h3>
              <p className={`text-lg font-medium ${txtColor}`}>
                {contact.value}
              </p>
            </a>
          ))}
        </div>
        <form className="mt-12 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className={`w-full px-4 py-3 rounded-lg ${theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"} focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          <input
            type="email"
            placeholder="Your Email"
            className={`w-full px-4 py-3 rounded-lg ${theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"} focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className={`w-full px-4 py-3 rounded-lg ${theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"} focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          <button className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 font-semibold cursor-pointer">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

"use client";

import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { Mail, Phone, ArrowUpRight } from "lucide-react";

// lucide-react dropped brand/logo icons, so GitHub and LinkedIn are drawn
// inline instead of pulling in a separate icon-pack dependency for two glyphs.
const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.08.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .31.21.68.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
  </svg>
);

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
  const inputBg = isDark
    ? "bg-white/5 border-white/10 text-white placeholder:text-gray-500"
    : "bg-black/5 border-black/10 text-black placeholder:text-gray-500";

  const contacts = [
    {
      icon: Mail,
      label: t("email"),
      value: "imdadulhaque1440@gmail.com",
      link: "mailto:imdadulhaque1440@gmail.com",
      external: false,
    },
    {
      icon: Phone,
      label: t("phone"),
      value: "+88 01770-019346",
      link: "tel:+8801770019346",
      external: false,
    },
    {
      icon: LinkedinIcon,
      label: t("linkedin"),
      value: "/in/imdadulhaque1",
      link: "https://linkedin.com/in/imdadulhaque1",
      external: true,
    },
    {
      icon: GithubIcon,
      label: t("github"),
      value: "/imdadulhaque1",
      link: "https://github.com/imdadulhaque1",
      external: true,
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
          className={`text-sm sm:text-body md:text-body-lg ${txtColor} mb-8 sm:mb-12 text-center leading-relaxed`}
        >
          {t("contactMeDesc")}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {contacts.map(({ icon: Icon, label, value, link, external }, idx) => (
            <a
              key={idx}
              href={link}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className={`group relative flex items-start gap-4 p-4 sm:p-6 rounded-xl ${cardBg} backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-accent/50`}
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-accent to-accent-secondary shadow-lg shadow-accent/30 shrink-0">
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="min-w-0 pr-4">
                <h3
                  className={`text-sm sm:text-body ${txtColor} opacity-70 mb-1`}
                >
                  {label}
                </h3>
                <p
                  className={`text-sm sm:text-body md:text-body-lg font-semibold break-words ${txtColor} group-hover:text-accent transition-colors`}
                >
                  {value}
                </p>
              </div>
              <ArrowUpRight
                size={16}
                className={`absolute top-4 right-4 sm:top-5 sm:right-5 opacity-30 group-hover:opacity-100 group-hover:text-accent transition-all ${txtColor}`}
              />
            </a>
          ))}
        </div>
        <form className={`mt-8 sm:mt-12 p-4 sm:p-6 rounded-xl ${cardBg} backdrop-blur-sm space-y-4`}>
          <input
            type="text"
            placeholder="Your Name"
            className={`w-full px-4 py-3 rounded-lg border text-sm sm:text-body md:text-body-lg ${inputBg} focus:outline-none focus:ring-2 focus:ring-accent`}
          />
          <input
            type="email"
            placeholder="Your Email"
            className={`w-full px-4 py-3 rounded-lg border text-sm sm:text-body md:text-body-lg ${inputBg} focus:outline-none focus:ring-2 focus:ring-accent`}
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className={`w-full px-4 py-3 rounded-lg border text-sm sm:text-body md:text-body-lg ${inputBg} focus:outline-none focus:ring-2 focus:ring-accent`}
          />
          <button className="w-full px-6 py-3 rounded-lg btn-primary text-sm sm:text-body md:text-body-lg font-semibold cursor-pointer">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

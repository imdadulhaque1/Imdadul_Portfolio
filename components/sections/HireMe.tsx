"use client";

import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { Mail, ChevronDown, FileText } from "lucide-react";
import { useActiveSection } from "@/components/ActiveSectionContext";

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

const NpmIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M0 7.334v8h6.666v1.332H12v-1.332h12v-8H0zm6.666 6.664H5.334v-4H3.999v4H1.335V8.667h5.331v5.331zm4 0v1.336H8.001V8.667h5.334v5.332h-2.669v-.001zm12.001 0h-1.33v-4h-1.336v4h-1.335v-4h-1.33v4h-2.671V8.667h8.002v5.331z" />
  </svg>
);

const socialLinks = [
  {
    icon: GithubIcon,
    href: "https://github.com/imdadulhaque1",
    label: "GitHub",
  },
  {
    icon: LinkedinIcon,
    href: "https://linkedin.com/in/imdadulhaque1",
    label: "LinkedIn",
  },
  {
    icon: NpmIcon,
    href: "https://www.npmjs.com/package/react-native-kernel",
    label: "npm - react-native-kernel",
  },
  { icon: Mail, href: "mailto:imdadulhaque1440@gmail.com", label: "Email" },
];

const HireMe = () => {
  const { theme } = useTheme();
  const { t } = useTranslation("common");
  const { setActiveSection } = useActiveSection();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === "dark";
  const txtColor = isDark ? "dark-text" : "light-text";
  const bgColor = isDark ? "dark-bg" : "light-bg";
  const cardBg = isDark ? "dark-bg-transparent" : "light-bg-transparent";

  const scrollTo = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveSection(id);
  };

  // Printing straight from a hidden iframe - rather than navigating to
  // /resume and calling window.print() there - keeps the visitor on the
  // hero section the whole time. The resume route/page itself is still
  // needed (this loads it), it's just never the page the visitor sees.
  const handlePrintResume = () => {
    const iframe = document.createElement("iframe");
    iframe.style.position = "fixed";
    iframe.style.top = "-10000px";
    iframe.style.left = "-10000px";
    iframe.style.width = "0";
    iframe.style.height = "0";
    iframe.style.border = "0";
    iframe.setAttribute("aria-hidden", "true");
    iframe.tabIndex = -1;
    iframe.src = "/resume";

    const cleanup = () => {
      iframe.parentNode?.removeChild(iframe);
    };

    iframe.onload = () => {
      const win = iframe.contentWindow;
      if (!win) {
        cleanup();
        return;
      }
      win.addEventListener("afterprint", cleanup);
      win.focus();
      win.print();
      // Safety net in case a browser never fires afterprint on the child window.
      setTimeout(cleanup, 30000);
    };

    document.body.appendChild(iframe);
  };

  return (
    <section
      id="hireMe"
      className={`min-h-screen scroll-mt-20 flex items-center justify-center px-4 pt-28 pb-16 ${bgColor} animate-fade-in-up`}
    >
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        <div
          className={`inline-flex items-center gap-2 sm:gap-3 px-4 py-2 sm:px-6 sm:py-3 rounded-full mb-4 sm:mb-6 md:mb-8 ${cardBg} backdrop-blur-sm animate-badge-pulse`}
        >
          <span className="relative flex h-2.5 w-2.5 sm:h-3.5 sm:w-3.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
            <span className="relative inline-flex h-2.5 w-2.5 sm:h-3.5 sm:w-3.5 rounded-full bg-emerald-500" />
          </span>
          <span
            className={`text-sm sm:text-sm sm:text-body md:text-body-lg font-semibold ${txtColor}`}
          >
            {t("availabilityBadge")}
          </span>
        </div>

        <h1
          className={`text-4xl sm:text-5xl md:text-7xl font-bold ${txtColor} mb-2 sm:mb-4`}
        >
          {t("heroGreeting")}{" "}
          <span className="bg-gradient-to-r from-accent via-accent-secondary to-accent bg-clip-text text-transparent drop-shadow-[0_0_28px_rgba(139,92,246,0.35)]">
            {t("name")}
          </span>
        </h1>
        <p
          className={`text-lg sm:text-heading md:text-heading-lg font-medium ${txtColor} opacity-70 mb-3 sm:mb-4 md:mb-6`}
        >
          {t("heroRole")}
        </p>
        <p
          className={`text-sm sm:text-sm sm:text-body md:text-body-lg ${txtColor} max-w-6xl mx-auto mb-4 sm:mb-6 md:mb-8 leading-relaxed opacity-90`}
        >
          {t("hireMeDescPrefix")}
          <span className="text-lg sm:text-heading md:text-heading-lg font-bold text-accent animate-shake">
            {t("hireMeDescHighlight")}
          </span>
          {t("hireMeDescSuffix")}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8 md:mb-12">
          <button
            type="button"
            onClick={() => scrollTo("contactMe")}
            className="btn-primary px-6 py-2.5 sm:px-8 sm:py-3 rounded-lg text-sm sm:text-sm sm:text-body md:text-body-lg font-semibold cursor-pointer"
          >
            {t("contactMe")}
          </button>
          <button
            type="button"
            onClick={() => scrollTo("projects")}
            className="px-6 py-2.5 sm:px-8 sm:py-3 rounded-lg text-sm sm:text-sm sm:text-body md:text-body-lg font-semibold transition-all duration-300 border-2 cursor-pointer border-accent text-accent hover:bg-accent hover:text-white"
          >
            {t("projects")}
          </button>
          <button
            type="button"
            onClick={handlePrintResume}
            className="animate-resume-cta inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:px-8 sm:py-3 text-sm sm:text-sm sm:text-body md:text-body-lg font-semibold text-accent cursor-pointer transition-all duration-300 hover:text-white hover:-translate-y-0.5"
          >
            <span className="resume-edge resume-edge-top" aria-hidden="true" />
            <span className="resume-edge resume-edge-bottom" aria-hidden="true" />
            <span className="resume-edge resume-edge-left" aria-hidden="true" />
            <span className="resume-edge resume-edge-right" aria-hidden="true" />
            <span className="relative z-10 inline-flex items-center gap-2">
              <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
              {t("resume")}
            </span>
          </button>
        </div>

        <div className="flex flex-col items-center gap-3 sm:gap-4 md:gap-5">
          <div className="flex items-center gap-3 sm:gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center border transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:text-accent ${
                  isDark
                    ? "border-gray-700 text-gray-300"
                    : "border-gray-300 text-gray-600"
                }`}
              >
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </a>
            ))}
          </div>
          <button
            type="button"
            onClick={() => scrollTo("about")}
            aria-label={t("scrollDown")}
            className={`flex flex-col items-center gap-1 cursor-pointer group ${txtColor} opacity-60 hover:opacity-100 transition-opacity duration-300`}
          >
            <span className="text-xs sm:text-sm sm:text-body md:text-body-lg font-medium tracking-widest uppercase">
              {t("scrollDown")}
            </span>
            <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HireMe;

"use client";

import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggleButton from "./ThemeToggleButton";
import { navLinks } from "@/lib/section-data";
import { useActiveSection } from "./ActiveSectionContext";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation("common");
  const router = useRouter();
  const pathname = usePathname();
  const { activeSection, setActiveSection } = useActiveSection();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pendingTargetRef = useRef<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // After navigating home from a standalone route (e.g. /about), finish
  // the deferred scroll once the single-page sections have mounted.
  useEffect(() => {
    if (pathname !== "/" || !pendingTargetRef.current) return;

    const targetId = pendingTargetRef.current;
    pendingTargetRef.current = null;
    let attempts = 0;

    const tryScroll = () => {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        setActiveSection(targetId);
      } else if (attempts < 30) {
        attempts += 1;
        requestAnimationFrame(tryScroll);
      }
    };

    requestAnimationFrame(tryScroll);
  }, [pathname, setActiveSection]);

  const handleNavigation = (targetId: string) => {
    setMobileMenuOpen(false);
    if (pathname === "/") {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        setActiveSection(targetId);
      }
    } else {
      pendingTargetRef.current = targetId;
      router.push("/");
    }
  };

  const linkBaseClass = `px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 cursor-pointer ${
    mounted && theme === "dark" ? "dark-text" : "light-text"
  } hover:text-accent hover:bg-gray-100 dark:hover:bg-gray-800`;

  const linkActiveClass =
    "px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 cursor-pointer bg-accent text-white shadow-lg shadow-indigo-500/30";

  return (
    <nav
      className={`fixed top-0 w-full ${mounted && theme === "dark" ? "dark-bg-transparent" : "light-bg-transparent"} shadow-md z-50 transition-colors duration-300 backdrop-blur-sm`}
      suppressHydrationWarning
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="shrink-0">
            <button
              type="button"
              onClick={() => handleNavigation("hireMe")}
              className={`text-xl font-bold transition-all duration-300 cursor-pointer ${
                activeSection === "hireMe"
                  ? "text-accent-secondary"
                  : `${mounted && theme === "dark" ? "dark-text" : "light-text"} hover:text-accent-secondary`
              }`}
              suppressHydrationWarning
            >
              {t("name")}
            </button>
          </div>
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.route}
                type="button"
                onClick={() => handleNavigation(link.targetId)}
                className={
                  activeSection === link.targetId ? linkActiveClass : linkBaseClass
                }
                suppressHydrationWarning
              >
                {t(link.labelKey)}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-2">
              <LanguageSwitcher />
              <ThemeToggleButton />
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              className={`md:hidden p-2 rounded-md cursor-pointer transition-colors duration-300 ${mounted && theme === "dark" ? "dark-text" : "light-text"} hover:bg-gray-100 dark:hover:bg-gray-800`}
            >
              {mobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div
            className={`md:hidden flex flex-col gap-1 pb-4 ${mounted && theme === "dark" ? "dark-text" : "light-text"} animate-fade-in-up`}
          >
            {navLinks.map((link) => (
              <button
                key={link.route}
                type="button"
                onClick={() => handleNavigation(link.targetId)}
                className={
                  activeSection === link.targetId
                    ? `${linkActiveClass} text-left`
                    : `${linkBaseClass} text-left`
                }
                suppressHydrationWarning
              >
                {t(link.labelKey)}
              </button>
            ))}
            <div
              className={`flex items-center gap-2 mt-2 pt-3 border-t ${
                mounted && theme === "dark"
                  ? "border-gray-700"
                  : "border-gray-200"
              }`}
            >
              <LanguageSwitcher />
              <ThemeToggleButton />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

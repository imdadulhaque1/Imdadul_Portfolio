"use client";

import { useEffect, useRef, useState } from "react";
import i18n from "@/lib/i18n";

const LanguageSwitcher = () => {
  const [language, setLanguage] = useState("en");
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem("language") || "en";
    setLanguage(savedLang);
    i18n.changeLanguage(savedLang);
  }, []);

  // Dropdown বাইরে click করলে বন্ধ হবে
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
    i18n.changeLanguage(lang);
    setIsOpen(false);
    window.dispatchEvent(new Event("languageChanged"));
  };

  // mounted না হলে same size এর invisible placeholder
  if (!mounted) {
    return (
      <div
        className="ml-4 p-2 rounded-lg border-2 opacity-0 pointer-events-none select-none"
        style={{ minWidth: "72px", height: "40px" }}
        aria-hidden="true"
      />
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)} // ← functional update দিন
        className="ml-4 p-2 rounded-lg border-2 transition-all duration-300 cursor-pointer hover:shadow-lg"
        style={{
          borderColor:
            language === "bn" ? "var(--accent-secondary)" : "var(--accent)",
          backgroundColor: `color-mix(in srgb, ${
            language === "bn" ? "var(--accent-secondary)" : "var(--accent)"
          } 12%, transparent)`,
          color: language === "bn" ? "var(--accent-secondary)" : "var(--accent)",
        }}
      >
        {language === "en" ? "🇬🇧 EN" : "🇧🇩 BN"}
      </button>

      {isOpen && (
        <div
          className="absolute top-12 right-0 rounded-xl shadow-2xl z-50 overflow-hidden"
          style={{
            backgroundColor: "var(--background)",
            backdropFilter: "blur(10px)",
            border: `2px solid ${language === "bn" ? "var(--accent-secondary)" : "var(--accent)"}`,
            minWidth: "140px",
          }}
        >
          <button
            type="button"
            onClick={() => handleLanguageChange("en")}
            className="block w-full px-6 py-3 text-left transition-colors duration-200 hover:opacity-80 cursor-pointer"
            style={{
              color: "var(--foreground)",
              backgroundColor:
                language === "en"
                  ? "color-mix(in srgb, var(--accent) 15%, transparent)"
                  : "transparent",
            }}
          >
            🇬🇧 English
          </button>
          <button
            type="button"
            onClick={() => handleLanguageChange("bn")}
            className="block w-full px-6 py-3 text-left transition-colors duration-200 hover:opacity-80 cursor-pointer"
            style={{
              borderTop:
                "1px solid color-mix(in srgb, var(--foreground) 15%, transparent)",
              color: "var(--foreground)",
              backgroundColor:
                language === "bn"
                  ? "color-mix(in srgb, var(--accent-secondary) 15%, transparent)"
                  : "transparent",
            }}
          >
            🇧🇩 বাংলা
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;

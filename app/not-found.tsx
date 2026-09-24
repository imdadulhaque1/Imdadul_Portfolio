"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import "@/lib/i18n";

export default function NotFound() {
  const { theme } = useTheme();
  const { t } = useTranslation("common");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const txtColor = mounted && theme === "dark" ? "dark-text" : "light-text";
  const bgColor = mounted && theme === "dark" ? "dark-bg" : "light-bg";

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-4 ${bgColor}`}
    >
      <div className="text-center">
        <h1 className={`text-6xl md:text-8xl font-bold ${txtColor} mb-4`}>
          404
        </h1>
        <p className={`text-2xl font-semibold ${txtColor} mb-2`}>
          {t("notFound")}
        </p>
        <p className={`text-lg ${txtColor} opacity-80 mb-8`}>
          {t("notFoundDesc")}
        </p>
        <Link
          href="/"
          className="btn-primary inline-block px-8 py-3 rounded-lg font-semibold"
        >
          {t("goHome")}
        </Link>
      </div>
    </div>
  );
}

"use client";

import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { Download, X } from "lucide-react";
import { useInstallPrompt } from "./useInstallPrompt";

const InstallPWAPrompt = () => {
  const { theme } = useTheme();
  const { t } = useTranslation("common");
  const [mounted, setMounted] = useState(false);
  const { visible, install, dismiss } = useInstallPrompt();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !visible) return null;

  const isDark = theme === "dark";
  const cardBg = isDark ? "dark-bg-transparent" : "light-bg-transparent";
  const txtColor = isDark ? "dark-text" : "light-text";

  return (
    // A small corner toast (not a full-width banner) sits in space the
    // centered Hero content never reaches, so fixed positioning is safe
    // here without pushing page content down.
    <div className="fixed top-20 right-3 sm:right-6 z-40 max-w-[88vw] sm:max-w-sm animate-install-prompt print:hidden">
      <div
        className={`flex items-center gap-2 sm:gap-3 px-3 py-2 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl ${cardBg} backdrop-blur-sm shadow-2xl`}
      >
        <div className="w-8 h-8 sm:w-10 sm:h-10 shrink-0 rounded-full bg-accent/15 flex items-center justify-center">
          <Download className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
        </div>
        {/* Every child here is a plain flex sibling, not absolutely
            positioned - that's what actually prevents the Install button and
            close icon from ever overlapping, regardless of screen size. */}
        <p
          className={`flex-1 min-w-0 truncate text-xs sm:text-sm font-medium ${txtColor}`}
        >
          {t("installPromptTitle")}
        </p>
        <button
          type="button"
          onClick={install}
          className="btn-primary shrink-0 px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold cursor-pointer whitespace-nowrap"
        >
          {t("installPromptInstall")}
        </button>
        <button
          type="button"
          onClick={dismiss}
          aria-label={t("installPromptDismiss")}
          className={`shrink-0 p-1 sm:p-1.5 rounded-full cursor-pointer transition-colors ${
            isDark
              ? "text-gray-400 hover:bg-gray-800"
              : "text-gray-500 hover:bg-gray-200"
          }`}
        >
          <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </button>
      </div>
    </div>
  );
};

export default InstallPWAPrompt;

"use client";

import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import {
  ExternalLink,
  Calendar,
  User,
  BookOpen,
  Eye,
  X,
  Share2,
} from "lucide-react";
import { publications } from "@/lib/publication-data";
import { useState, useEffect } from "react";

const Publication = () => {
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

  const [selectedPublication, setSelectedPublication] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [shareMessage, setShareMessage] = useState("");

  const openModal = (pub: any) => {
    setSelectedPublication(pub);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPublication(null);
    setShareMessage("");
    document.body.style.overflow = "unset";
  };

  const sharePublication = async (pub: any) => {
    const url = `${window.location.origin}/publication/${pub.id}`;

    try {
      if (navigator.share) {
        await navigator.share({
          title: t(pub.titleKey),
          text: `Check out this publication: ${t(pub.titleKey)}`,
          url: url,
        });
      } else {
        await copyPublicationLink(pub);
      }
    } catch (error) {
      await copyPublicationLink(pub);
    }
  };

  const copyPublicationLink = async (pub: any) => {
    const url = `${window.location.origin}/publication/${pub.id}`;
    await navigator.clipboard.writeText(url);
    setShareMessage(t("linkCopied") || "Link copied to clipboard!");
    setTimeout(() => setShareMessage(""), 3000);
  };

  return (
    <section
      id="publication"
      className={`py-12 sm:py-16 md:py-20 scroll-mt-20 ${bgColor}`}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2
            className={`text-3xl md:text-5xl font-bold ${txtColor} mb-3 sm:mb-4`}
          >
            {t("publication")}
          </h2>
          <p
            className={`text-sm sm:text-body md:text-body-lg ${txtColor} opacity-80 max-w-2xl mx-auto`}
          >
            {t("publicationDesc")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {publications.map((pub) => (
            <div
              key={pub.id}
              className={`flex flex-col p-5 sm:p-6 rounded-2xl ${cardBg} backdrop-blur-sm hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl hover:border-accent/50 transition-all duration-300`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-accent to-accent-secondary shadow-lg shadow-accent/30 shrink-0">
                  <BookOpen size={20} className="text-white" />
                </div>
                <a
                  href={pub.publicationURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open publication"
                  className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 text-accent transition-colors ${
                    isDark ? "bg-white/5 hover:bg-white/10" : "bg-black/5 hover:bg-black/10"
                  }`}
                >
                  <ExternalLink size={16} />
                </a>
              </div>

              {/* Clamped to 3 lines - full academic titles run long enough
                  that leaving them unclamped made cards balloon to wildly
                  different heights across the row (some 2 lines, some 6).
                  No min-height here: pairing one with line-clamp triggers a
                  Chromium rendering bug where a sliver of the clipped line's
                  glyphs bleeds through below the ellipsis. The "See More"
                  button below is pinned to the bottom via mt-auto instead,
                  so cards still end evenly regardless of title length. */}
              <h3
                className={`text-lg sm:text-heading-sm md:text-heading font-bold ${txtColor} leading-snug mb-3 line-clamp-3`}
              >
                {t(pub.titleKey)}
              </h3>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-accent/10 text-accent border border-accent/30">
                  <BookOpen size={12} />
                  {t(pub.publisherKey)}
                </span>
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs sm:text-sm ${txtColor} opacity-75 ${
                    isDark ? "bg-white/5" : "bg-black/5"
                  }`}
                >
                  <Calendar size={12} />
                  {new Date(pub.publicationDate).toLocaleDateString()}
                </span>
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs sm:text-sm ${txtColor} opacity-75 ${
                    isDark ? "bg-white/5" : "bg-black/5"
                  }`}
                >
                  <User size={12} />
                  {t(pub.authorKey)}
                </span>
              </div>

              <p
                className={`text-sm sm:text-body ${txtColor} opacity-90 leading-relaxed mb-4 flex-1 line-clamp-3`}
              >
                {t(pub.descriptionKey)}
              </p>

              <button
                onClick={() => openModal(pub)}
                className="mt-auto self-start text-accent hover:text-accent-secondary transition-colors font-medium text-sm sm:text-body flex items-center gap-1 cursor-pointer"
              >
                <Eye size={14} />
                {t("seeMore") || "See More"}
              </button>
            </div>
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && selectedPublication && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={closeModal}
            />
            <div
              className={`relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl ${bgColor} shadow-2xl`}
            >
              {/* Modal Header */}
              <div
                className={`sticky top-0 z-10 p-4 sm:p-6 border-b ${
                  isDark ? "border-gray-700" : "border-gray-200"
                } bg-[var(--background)]/95 backdrop-blur-sm rounded-t-2xl`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h2
                      className={`text-2xl md:text-3xl font-bold ${txtColor} mb-2 leading-tight`}
                    >
                      {t(selectedPublication.titleKey)}
                    </h2>
                    <div className="flex flex-wrap items-center gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <BookOpen size={16} className="text-accent" />
                        <span className={`${txtColor} font-medium`}>
                          {t(selectedPublication.publisherKey)}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-accent" />
                        <span className={`${txtColor} opacity-75`}>
                          {new Date(
                            selectedPublication.publicationDate,
                          ).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User size={16} className="text-accent" />
                        <span className={`${txtColor} opacity-75`}>
                          {t(selectedPublication.authorKey)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={closeModal}
                    className={`p-2 rounded-full transition-colors ${
                      isDark
                        ? "hover:bg-gray-800"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <X size={24} className={txtColor} />
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-4 sm:p-6">
                {/* Publication URL */}
                <div className="mb-6 flex flex-wrap gap-3">
                  <a
                    href={selectedPublication.publicationURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg btn-primary font-medium"
                  >
                    <ExternalLink size={16} />
                    View Publication
                  </a>
                  <button
                    onClick={() => sharePublication(selectedPublication)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-colors font-medium ${
                      isDark
                        ? "bg-gray-700 hover:bg-gray-600 text-white"
                        : "bg-gray-200 hover:bg-gray-300 text-gray-800"
                    }`}
                  >
                    <Share2 size={16} />
                    {t("share") || "Share"}
                  </button>
                  <button
                    onClick={() => copyPublicationLink(selectedPublication)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-colors font-medium ${
                      isDark
                        ? "bg-gray-800 hover:bg-gray-700 text-white"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                    }`}
                  >
                    <ExternalLink size={16} />
                    {t("copyLink") || "Copy Link"}
                  </button>
                  {shareMessage && (
                    <span className="text-green-500 font-medium text-sm flex items-center">
                      {shareMessage}
                    </span>
                  )}
                </div>

                {/* Full Description */}
                <div className="mb-6">
                  <h3 className={`text-xl font-semibold ${txtColor} mb-4`}>
                    Abstract
                  </h3>
                  <p className={`${txtColor} leading-relaxed text-base`}>
                    {t(selectedPublication.descriptionKey)}
                  </p>
                </div>

                {/* Additional Info */}
                <div className={`p-4 rounded-lg ${cardBg} backdrop-blur-sm`}>
                  <h4 className={`font-semibold ${txtColor} mb-2`}>
                    Publication Details
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className={`${txtColor} opacity-75`}>
                        Published:
                      </span>
                      <span className={`ml-2 ${txtColor} font-medium`}>
                        {new Date(
                          selectedPublication.publicationDate,
                        ).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <div>
                      <span className={`${txtColor} opacity-75`}>Author:</span>
                      <span className={`ml-2 ${txtColor} font-medium`}>
                        {t(selectedPublication.authorKey)}
                      </span>
                    </div>
                    <div>
                      <span className={`${txtColor} opacity-75`}>
                        Publisher:
                      </span>
                      <span className={`ml-2 ${txtColor} font-medium`}>
                        {t(selectedPublication.publisherKey)}
                      </span>
                    </div>
                    <div>
                      <span className={`${txtColor} opacity-75`}>Type:</span>
                      <span className={`ml-2 ${txtColor} font-medium`}>
                        Research Publication
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Publication;

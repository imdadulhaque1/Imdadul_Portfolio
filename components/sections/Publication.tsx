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
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { publications } from "@/lib/publication-data";
import { useState, useEffect, useRef } from "react";

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

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const swipeStartX = useRef<number | null>(null);

  const goTo = (index: number) => {
    const total = publications.length;
    setActiveIndex(((index % total) + total) % total);
  };
  const goPrev = () => goTo(activeIndex - 1);
  const goNext = () => goTo(activeIndex + 1);

  // Autoplay pauses on hover/touch (isPaused) rather than just clearing once -
  // otherwise a visitor who hovers to read a slide would come back to it
  // having auto-advanced without them noticing.
  useEffect(() => {
    if (isPaused || publications.length <= 1) return;
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % publications.length);
    }, 6000);
    return () => clearInterval(id);
  }, [isPaused]);

  const handleSwipeStart = (e: React.PointerEvent) => {
    swipeStartX.current = e.clientX;
  };
  const handleSwipeEnd = (e: React.PointerEvent) => {
    if (swipeStartX.current === null) return;
    const delta = e.clientX - swipeStartX.current;
    swipeStartX.current = null;
    if (Math.abs(delta) < 40) return;
    if (delta < 0) goNext();
    else goPrev();
  };

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
      {/* Flat px-4, matching every other section's wrapper - see Projects.tsx
          for why the previous responsive px-4 sm:px-6 lg:px-8 made this
          section's content narrower than the rest at the lg breakpoint. */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2
            className={`text-3xl md:text-5xl font-bold ${txtColor} mb-3 sm:mb-4`}
          >
            {t("publication")}
          </h2>
          <p
            className={`text-sm sm:text-body md:text-body-lg ${txtColor} opacity-80`}
          >
            {t("publicationDesc")}
          </p>
        </div>

        {/* No max-w here (previously max-w-2xl) - the outer section wrapper
            already matches Projects' own max-w-7xl container, so leaving
            this unconstrained is what makes the two sections line up at the
            same width instead of Publication reading narrower. */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* px reserves room for the arrow buttons below - without it,
              on mobile (where they sit at left-1/right-1, inside the card's
              own edge) they overlap the badge row instead of framing the
              card. */}
          <div
            className="overflow-hidden rounded-2xl px-9 sm:px-0"
            onPointerDown={handleSwipeStart}
            onPointerUp={handleSwipeEnd}
          >
            {/* transform-driven slide, not scroll-snap - a single
                CSS transition gives one guaranteed-smooth easing curve for
                every trigger (autoplay, arrows, dots, swipe) instead of
                relying on native scroll physics, which vary by browser and
                input device and can feel abrupt on a wheel/trackpad flick. */}
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {publications.map((pub) => (
                <div key={pub.id} className="w-full shrink-0 px-1">
                  <div
                    className={`flex flex-col p-5 sm:p-6 rounded-2xl ${cardBg} backdrop-blur-sm transition-all duration-300`}
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
                      className={`text-sm sm:text-body ${txtColor} opacity-90 leading-relaxed mb-4 line-clamp-3`}
                    >
                      {t(pub.descriptionKey)}
                    </p>

                    <button
                      onClick={() => openModal(pub)}
                      className="self-start text-accent hover:text-accent-secondary transition-colors font-medium text-sm sm:text-body flex items-center gap-1 cursor-pointer"
                    >
                      <Eye size={14} />
                      {t("seeMore") || "See More"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {publications.length > 1 && (
            <>
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous publication"
                className={`absolute left-1 sm:-left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:-translate-x-0.5 cursor-pointer ${cardBg} ${txtColor} backdrop-blur-sm`}
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Next publication"
                className={`absolute right-1 sm:-right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:translate-x-0.5 cursor-pointer ${cardBg} ${txtColor} backdrop-blur-sm`}
              >
                <ChevronRight size={20} />
              </button>

              <div className="flex items-center justify-center gap-2 mt-6">
                {publications.map((pub, i) => (
                  <button
                    key={pub.id}
                    type="button"
                    onClick={() => goTo(i)}
                    aria-label={`Go to publication ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      i === activeIndex ? "w-6 bg-accent" : "w-2 bg-accent/30 hover:bg-accent/50"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
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

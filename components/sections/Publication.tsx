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
import { useState } from "react";

interface PublicationItem {
  id: number;
  titleKey: string;
  publisherKey: string;
  publicationDate: string;
  authorKey: string;
  publicationURL: string;
  descriptionKey: string;
}

const Publication = () => {
  const { theme } = useTheme();
  const { t } = useTranslation("common");
  const txtColor = theme === "dark" ? "dark-text" : "light-text";
  const bgColor = theme === "dark" ? "dark-bg" : "light-bg";
  const cardBg =
    theme === "dark" ? "dark-bg-transparent" : "light-bg-transparent";

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
    <section id="publication" className={`py-20 ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold ${txtColor} mb-4`}>
            {t("publication")}
          </h2>
          <p className={`text-lg ${txtColor} opacity-80 max-w-2xl mx-auto`}>
            {t("publicationDesc")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publications.map((pub) => (
            <div
              key={pub.id}
              className={`p-6 rounded-xl ${cardBg} backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:transform hover:scale-105 transition-all duration-300`}
            >
              <div className="flex items-start justify-between mb-4">
                <h3
                  className={`text-xl font-bold ${txtColor} flex-1 leading-tight`}
                >
                  {t(pub.titleKey)}
                </h3>
                <a
                  href={pub.publicationURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600 transition-colors ml-2"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <BookOpen size={16} className="text-blue-500" />
                  <span className={`${txtColor} font-medium`}>
                    {t(pub.publisherKey)}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar size={16} className="text-blue-500" />
                  <span className={`${txtColor} opacity-75`}>
                    {new Date(pub.publicationDate).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <User size={16} className="text-blue-500" />
                  <span className={`${txtColor} opacity-75`}>
                    {t(pub.authorKey)}
                  </span>
                </div>
              </div>
              <div className="mb-4">
                <p
                  className={`${txtColor} leading-relaxed text-sm overflow-hidden`}
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {t(pub.descriptionKey)}
                </p>
                <button
                  onClick={() => openModal(pub)}
                  className="mt-2 text-blue-500 hover:text-blue-600 transition-colors font-medium text-sm flex items-center gap-1 cursor-pointer"
                >
                  <Eye size={14} />
                  {t("seeMore") || "See More"}
                </button>
              </div>
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
              className={`relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl ${
                theme === "dark" ? "bg-gray-900" : "bg-white"
              } shadow-2xl`}
            >
              {/* Modal Header */}
              <div
                className={`sticky top-0 z-10 p-6 border-b ${
                  theme === "dark"
                    ? "border-gray-700 bg-gray-900/95"
                    : "border-gray-200 bg-white/95"
                } backdrop-blur-sm rounded-t-2xl`}
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
                        <BookOpen size={16} className="text-blue-500" />
                        <span className={`${txtColor} font-medium`}>
                          {t(selectedPublication.publisherKey)}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-blue-500" />
                        <span className={`${txtColor} opacity-75`}>
                          {new Date(
                            selectedPublication.publicationDate,
                          ).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User size={16} className="text-blue-500" />
                        <span className={`${txtColor} opacity-75`}>
                          {t(selectedPublication.authorKey)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={closeModal}
                    className={`p-2 rounded-full transition-colors ${
                      theme === "dark"
                        ? "hover:bg-gray-800"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <X size={24} className={txtColor} />
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                {/* Publication URL */}
                <div className="mb-6 flex flex-wrap gap-3">
                  <a
                    href={selectedPublication.publicationURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors font-medium"
                  >
                    <ExternalLink size={16} />
                    View Publication
                  </a>
                  <button
                    onClick={() => sharePublication(selectedPublication)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-colors font-medium ${
                      theme === "dark"
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
                      theme === "dark"
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
                <div
                  className={`p-4 rounded-lg ${
                    theme === "dark" ? "bg-gray-800" : "bg-gray-50"
                  }`}
                >
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

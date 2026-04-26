"use client";

import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import { PublicationItem } from "@/lib/publication-data";
import {
  ExternalLink,
  Calendar,
  User,
  BookOpen,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";

const PublicationDetail = ({
  publication,
}: {
  publication: PublicationItem;
}) => {
  const { theme } = useTheme();
  const { t } = useTranslation("common");
  const txtColor = theme === "dark" ? "dark-text" : "light-text";
  const bgColor = theme === "dark" ? "dark-bg" : "light-bg";
  const cardBg =
    theme === "dark" ? "dark-bg-transparent" : "light-bg-transparent";

  return (
    <div className={`min-h-screen ${bgColor} py-20 px-4`}>
      <div className="max-w-5xl mx-auto">
        <Link
          href="/publication"
          className="inline-flex items-center gap-2 text-sm font-medium text-blue-500 hover:text-blue-600 mb-8"
        >
          <ArrowLeft size={16} />
          {t("backToPublications") || "Back to publications"}
        </Link>

        <div
          className={`p-8 rounded-3xl ${cardBg} border border-gray-200 dark:border-gray-700 shadow-xl`}
        >
          <div className="mb-8">
            <h1 className={`text-4xl font-bold ${txtColor} mb-4`}>
              {t(publication.titleKey)}
            </h1>
            <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
              <span className="inline-flex items-center gap-2">
                <BookOpen size={16} className="text-blue-500" />
                {t(publication.publisherKey)}
              </span>
              <span className="inline-flex items-center gap-2">
                <Calendar size={16} className="text-blue-500" />
                {new Date(publication.publicationDate).toLocaleDateString()}
              </span>
              <span className="inline-flex items-center gap-2">
                <User size={16} className="text-blue-500" />
                {t(publication.authorKey)}
              </span>
            </div>
          </div>

          <div className="mb-8">
            <p className={`text-lg leading-8 ${txtColor}`}>
              {t(publication.descriptionKey)}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 items-center">
            <a
              href={publication.publicationURL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-blue-500 text-white hover:bg-blue-600 transition-colors"
            >
              <ExternalLink size={16} />
              {t("viewPublication") || "View Publication"}
            </a>
            <span className={`text-sm ${txtColor} opacity-80`}>
              {t("publicationId") || "Publication ID"}:{" "}
              <strong>{publication.id}</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicationDetail;

import { useTranslation } from "react-i18next";
import "@/lib/i18n";

export default function NotFound() {
  const { t } = useTranslation("common");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          404 - {t("notFound")}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          {t("notFoundDesc")}
        </p>
      </div>
    </div>
  );
}

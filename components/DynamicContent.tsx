"use client";

import { useState, useEffect } from "react";

interface DynamicContentProps {
  content: string;
  className?: string;
  tag?: "h1" | "h2" | "p" | "span" | "div";
}

// Component for dynamic content that auto-translates
const DynamicContent = ({
  content,
  className = "",
  tag: Tag = "p",
}: DynamicContentProps) => {
  const [translatedContent, setTranslatedContent] = useState(content);
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem("language") || "en";
    setCurrentLanguage(savedLang);

    if (savedLang === "bn") {
      translateContentToBangla();
    } else {
      setTranslatedContent(content);
    }

    // Listen for language changes
    const handleLanguageChange = () => {
      const newLang = localStorage.getItem("language") || "en";
      setCurrentLanguage(newLang);

      if (newLang === "bn") {
        translateContentToBangla();
      } else {
        setTranslatedContent(content);
      }
    };

    window.addEventListener("languageChanged", handleLanguageChange);
    return () =>
      window.removeEventListener("languageChanged", handleLanguageChange);
  }, [content]);

  const translateContentToBangla = async () => {
    setIsLoading(true);
    try {
      // Using free translation API
      const response = await fetch(
        `https://api.mymemory.translated.net/get?q=${encodeURIComponent(content)}&langpair=en|bn`,
      );

      if (response.ok) {
        const data = await response.json();
        const translated = data.responseData?.translatedText || content;
        setTranslatedContent(translated);

        // Cache the translation
        localStorage.setItem(`translate_bn_${content}`, translated);
      } else {
        setTranslatedContent(content);
      }
    } catch (error) {
      console.error("Translation error:", error);
      setTranslatedContent(content);
    } finally {
      setIsLoading(false);
    }
  };

  return <Tag className={className}>{translatedContent}</Tag>;
};

export default DynamicContent;

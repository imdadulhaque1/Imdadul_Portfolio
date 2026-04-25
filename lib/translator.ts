// Utility function for translating text
export const translateText = async (
  text: string,
  targetLanguage: string,
): Promise<string> => {
  // Check if we're in the browser
  if (typeof window === "undefined") {
    return text;
  }

  // Check cache first
  const cacheKey = `translate_${targetLanguage}_${text}`;
  const cached = localStorage.getItem(cacheKey);
  if (cached) {
    return cached;
  }

  try {
    // Using public Google Translate API endpoint
    const response = await fetch(
      "https://translate.googleapis.com/translate_a/element.js?cb=googleTranslateElementInit",
      {
        method: "GET",
      },
    ).catch(() => null);

    // Fallback: Use a simple translation API that doesn't require auth
    const translationResponse = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|${targetLanguage === "bn" ? "bn" : "en"}`,
    );

    if (!translationResponse.ok) {
      return text;
    }

    const data = await translationResponse.json();
    const translatedText = data.responseData?.translatedText || text;

    // Cache the result
    localStorage.setItem(cacheKey, translatedText);
    return translatedText;
  } catch (error) {
    console.error("Translation error:", error);
    return text;
  }
};

// Batch translate function
export const translateBatch = async (
  texts: Record<string, string>,
  targetLanguage: string,
): Promise<Record<string, string>> => {
  const results: Record<string, string> = {};

  for (const [key, text] of Object.entries(texts)) {
    results[key] = await translateText(text, targetLanguage);
  }

  return results;
};

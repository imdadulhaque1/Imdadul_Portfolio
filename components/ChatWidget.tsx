"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { MessageCircle, X, Send, Check } from "lucide-react";

const ChatWidget = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isEmailEntered, setIsEmailEntered] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const storedEmail = localStorage.getItem("chatEmail");
    if (storedEmail) {
      try {
        setEmail(atob(storedEmail));
        setIsEmailEntered(true);
      } catch (error) {
        // If decoding fails, clear it
        localStorage.removeItem("chatEmail");
      }
    }
  }, []);

  const handleConfirmEmail = () => {
    if (!email.trim()) {
      alert(t("emailRequired"));
      return;
    }
    localStorage.setItem("chatEmail", btoa(email));
    setIsEmailEntered(true);
  };

  const handleSend = () => {
    if (!email.trim()) {
      alert(t("emailRequired"));
      return;
    }
    if (!message.trim()) {
      alert(t("messageRequired"));
      return;
    }

    // Open email client with pre-filled message
    const subject = encodeURIComponent("Message from Portfolio Chat");
    const body = encodeURIComponent(`From: ${email}\n\n${message}`);
    window.location.href = `mailto:imdadulhaque@example.com?subject=${subject}&body=${body}`;

    // Assume sent and store
    setSent(true);
    setMessage("");
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-3 shadow-lg transition-colors"
          aria-label={t("chatIcon")}
        >
          <MessageCircle size={24} />
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-16 right-4 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-xl border z-50">
          <div className="flex items-center justify-between p-4 border-b">
            <h3 className="font-semibold text-gray-900 dark:text-white">
              {t("chatTitle")}
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <X size={20} />
            </button>
          </div>
          <div className="p-4 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {t("enterEmail")}
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isEmailEntered}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white disabled:bg-gray-100 dark:disabled:bg-gray-600"
                  placeholder="example@email.com"
                />
                {isEmailEntered ? (
                  <Check className="text-green-500" size={20} />
                ) : (
                  <button
                    onClick={handleConfirmEmail}
                    className="p-2 bg-green-500 hover:bg-green-600 text-white rounded-md"
                    title="Confirm Email"
                  >
                    <Check size={16} />
                  </button>
                )}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {t("enterMessage")}
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                rows={3}
                placeholder={t("enterMessage")}
                disabled={isEmailEntered && sent}
              />
            </div>
            <button
              onClick={handleSend}
              disabled={!isEmailEntered || (isEmailEntered && sent)}
              className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white py-2 px-4 rounded-md flex items-center justify-center space-x-2 transition-colors"
            >
              <Send size={16} />
              <span>{sent ? t("thankYou") : t("send")}</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;

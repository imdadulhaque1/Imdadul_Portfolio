import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const baseEnglishResources = {
  name: "Imdadul Haque",
  hireMe: "Hire Me",
  about: "About",
  contactMe: "Contact Me",
  experience: "Experience",
  publication: "Publication",
  projects: "Projects",
  hireMeDesc: "I am a passionate developer ready to bring your ideas to life.",
  AboutsDesc:
    "Learn more about my background, skills, and what drives me as a developer.",
  contactMeDesc: "Get in touch with me for collaborations or opportunities.",
  experienceDesc:
    "Explore my professional journey and the experiences that shaped my career.",
  publicationDesc:
    "Check out my published works and contributions to the field.",
  projectsDesc:
    "Discover the projects I've worked on and the technologies I've used.",
  language: "Language",
  // About Section
  skills: "Skills",
  fullStackDeveloper: "Full Stack Developer",
  expertiseIn: "Expertise in",
  // Contact Section
  getInTouch: "Get In Touch",
  email: "Email",
  phone: "Phone",
  linkedin: "LinkedIn",
  github: "GitHub",
  // Experience Section
  seniorDeveloper: "Senior Developer",
  techCompany: "Tech Company",
  fullStackDeveloperRole: "Full-Stack Developer",
  startupInc: "Startup Inc",
  juniorDeveloper: "Junior Developer",
  freelanceWork: "Freelance Work",
  // Publication Section
  modernWebDevelopment: "Modern Web Development with React",
  techJournal: "Tech Journal",
  typeScriptBestPractices: "TypeScript Best Practices",
  conferenceCapital: "Conference",
  // Projects Section
  ecommercePlatform: "E-Commerce Platform",
  ecommerceDesc:
    "Full-stack e-commerce solution with React, Node.js, and MongoDB.",
  taskManagementApp: "Task Management App",
  taskDesc: "Collaborative task management with real-time updates.",
  portfolioWebsite: "Portfolio Website",
  portfolioDesc: "Responsive portfolio with dark mode and animations.",
  notFound: "Page Not Found",
  notFoundDesc: "The page you are looking for does not exist.",
  toggleTheme: "Toggle Theme",
  lightMode: "Light Mode",
  darkMode: "Dark Mode",
};

const banglaTranslations = {
  name: "ইমদাদুল হক",
  hireMe: "আমাকে নিয়োগ করুন",
  about: "আমার সম্পর্কে",
  contactMe: "যোগাযোগ করুন",
  experience: "অভিজ্ঞতা",
  publication: "প্রকাশনা",
  projects: "প্রকল্প",
  hireMeDesc:
    "আমি একজন আবেগপ্রবণ ডেভেলপার যিনি আপনার ধারণাকে বাস্তবে রূপান্তরিত করতে প্রস্তুত।",
  aboutDesc:
    "আমার পটভূমি, দক্ষতা এবং আমি একজন ডেভেলপার হিসাবে কী করি তা সম্পর্কে আরও জানুন।",
  contactMeDesc: "সহযোগিতা বা সুযোগের জন্য আমার সাথে যোগাযোগ করুন।",
  experienceDesc:
    "আমার পেশাদার যাত্রা এবং আমার ক্যারিয়ারকে গঠন করেছে এমন অভিজ্ঞতাগুলি অন্বেষণ করুন।",
  publicationDesc: "আমার প্রকাশিত কাজ এবং এই ক্ষেত্রে অবদান দেখুন।",
  projectsDesc:
    "আমি যে প্রকল্পগুলিতে কাজ করেছি এবং আমি যে প্রযুক্তিগুলি ব্যবহার করেছি তা আবিষ্কার করুন।",
  language: "ভাষা",
  // About Section
  skills: "দক্ষতা",
  fullStackDeveloper: "ফুল স্ট্যাক ডেভেলপার",
  expertiseIn: "দক্ষতা",
  // Contact Section
  getInTouch: "যোগাযোগ করুন",
  email: "ইমেইল",
  phone: "ফোন",
  linkedin: "লিংকডইন",
  github: "গিটহাব",
  // Experience Section
  seniorDeveloper: "সিনিয়র ডেভেলপার",
  techCompany: "টেক কোম্পানি",
  fullStackDeveloperRole: "ফুল স্ট্যাক ডেভেলপার",
  startupInc: "স্টার্টআপ ইনক",
  juniorDeveloper: "জুনিয়র ডেভেলপার",
  freelanceWork: "ফ্রিল্যান্স কাজ",
  // Publication Section
  modernWebDevelopment: "React এর সাথে আধুনিক ওয়েব ডেভেলপমেন্ট",
  techJournal: "টেক জার্নাল",
  typeScriptBestPractices: "TypeScript সেরা অনুশীলন",
  conferenceCapital: "সম্মেলন",
  // Projects Section
  ecommercePlatform: "ই-কমার্স প্ল্যাটফর্ম",
  ecommerceDesc: "React, Node.js এবং MongoDB এর সাথে সম্পূর্ণ ই-কমার্স সমাধান।",
  taskManagementApp: "টাস্ক ম্যানেজমেন্ট অ্যাপ",
  taskDesc: "রিয়েল-টাইম আপডেট সহ সহযোগী কাজ ব্যবস্থাপনা।",
  portfolioWebsite: "পোর্টফোলিও ওয়েবসাইট",
  portfolioDesc: "ডার্ক মোড এবং অ্যানিমেশন সহ প্রতিক্রিয়াশীল পোর্টফোলিও।",
  notFound: "পৃষ্ঠা খুঁজে পাওয়া যায়নি",
  notFoundDesc: "আপনি যে পৃষ্ঠা খুঁজছেন তা বিদ্যমান নেই।",
  toggleTheme: "থিম টগল করুন",
  lightMode: "লাইট মোড",
  darkMode: "ডার্ক মোড",
};

const resources = {
  en: {
    common: baseEnglishResources,
  },
  bn: {
    common: banglaTranslations,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    ns: ["common"],
    defaultNS: "common",
    interpolation: {
      escapeValue: false,
    },
  });

export { baseEnglishResources };
export default i18n;

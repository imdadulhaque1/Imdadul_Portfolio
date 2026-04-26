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
  // Publication Items
  pub1Title:
    "A BrainNet (BrN) based New Approach to Classify Brain Stroke from CT Scan Images",
  pub1Publisher: "IEEE",
  pub1Author: "Imdadul Haque",
  pub1Description:
    "Worldwide, brain stroke is known as the 2nd leading cause of death, and based on Indian history, three people have suffered every minute. There are mainly two different types of brain stroke: ischemic stroke and Hemorrhagic stroke used to train the proposed models. Ischemic stroke is the most common and it contributes mostly to 80% of the brain stroke and Hemorrhagic stroke contributes mostly to 20% of the brain stroke. In the proposed model, there has been used a hybrid model called BrainNet (BrN) as CNN(Convolutional Neural Network) and SVM(Support Vector Machine)to classify brain stroke disease. After applying the required proposed model, it has produced a smart score of 91.91% accuracy, and compared to the existing model it performs pretty well. The BrainNet (BrN) model is mainly designed based on a deep neural network with dataset collection, preprocessing, and feature extraction with the desired model and make the classification concerning SVM. With compare to the existing model, it is an acceptable performance that belongs to the collected dataset designed with Ischemic stroke and Hemorrhagic stroke disease within the total number of 2515 data.",
  pub2Title:
    "Examining The Risk Factors of Liver Disease: A Machine Learning Approach",
  pub2Publisher: "IEEE",
  pub2Author: "Imdadul Haque",
  pub2Description:
    "Nowadays, Liver Disease (LD) is a very common clinical problem for human health and is related to morbidity and mortality. Nevertheless, an earlier prognosis of LD patients gets a scope to avoid, prior diagnosis and subsequent treatment. This research work attempts to implement a high qualified performer machine learning design to predict LD, the most wanted and unwanted risk factor of LD which could help physicians in classifying risky patients and create an analysis to restrict and control LD. The proposed research study has included all patients, who were identified as having liver diseases. Totally, 6 (six) machine learning algorithms such as Decision Tree(DT), Logistic Regression(LR), Multilayer Perceptron(MLP), Artificial Neural Network(ANN), Random Forest(RF), K Nearest Neighbor classifier(KNN) are selected to predict LD. The location underneath had been utilized to evaluate the accuracy among the six applied models. An overall total of 583 instances had been included in this scholarly research; of the 416 patients are affected by liver illness. The location which defines the receiver operating characteristic (AU ROC) of Logistic Regression, Decision Tree, Multilayer Perceptron, Random Forest, Artificial Neural Network, and K-Nearest Neighbor classifier with 10-fold-cross validation was performed. Furthermore, the reliability of LR, DT, MLP, RF, ANN and KNN with accuracy 72.89%, 81.32%, 60.24%, 86.14%, 75.61%, and 65.52%. The utilization of woodland which is certainly arbitrary within the medical setting may help doctors to detect and classify liver patients for major avoidance, surveillance, quick treatment, and management. LR, DT, MLP, RF, ANN, and KNN formulas are acclimatized to forecast and after analyzing the data set, an increased price of accuracy is achieved.",
  pub3Title:
    "Classifying Pepper Disease based on Transfer Learning: A Deep Learning Approach",
  pub3Publisher: "IEEE",
  pub3Author: "Imdadul Haque",
  pub3Description:
    "Pepper is cultivated all over the world and many farmers' subsistence depends on these crops. But unfortunately, farmers who are involved in the cultivation of pepper, have to fall on a huge loss because of the low production of pepper caused by several diseases of pepper. If the diseases can be detected accurately and in a short time, then the losses can be prevented. The incorrect identification and time needed process can't release from the diseases and also can't help reduce the losses. For acquiring great accuracy within a short time to recognize the pepper diseases, multirecognition methods can give promising results to the users. In this study, several pre-trained deep learning models such as VGG-19, Xception, NasNet Mobile, MobileNet-V2, ResNet-152-V2, and Inception-ResNet-V2 have been used to extract the deep characteristic from the images and these models provide great accuracy. Most of the diseases of pepper are caused by a fungal and bacterial attack. In this study, 386 images are used for training, 63 images are used for validation and 107 images are used for testing 4 classes of pepper diseases and one healthy image of pepper for identifying the diseases types of pepper. The customized CNN models have achieved the highest accuracy and fulfilled the target of this study. The picking accuracy has been achieved from the VGG-19 and ResNet-152-V2 is 96.26%. Also, Xception has provided better accuracy than Inception-ResNet-V2, MobileNet-V2, and NasNet-Mobile and that is 93.46%.",
  // Common UI
  seeMore: "See More",
  share: "Share",
  viewPublication: "View Publication",
  backToPublications: "Back to publications",
  publicationId: "Publication ID",
  copyLink: "Copy Link",
  linkCopied: "Link copied to clipboard!",
  // Projects Section
  ecommercePlatform: "E-Commerce Platform",
  ecommerceDesc:
    "Full-stack e-commerce solution with React, Node.js, and MongoDB.",
  taskManagementApp: "Task Management App",
  taskDesc: "Collaborative task management with real-time updates.",
  portfolioWebsite: "Portfolio Website",
  portfolioDesc: "Responsive portfolio with dark mode and animations.",
  analyticsDashboard: "Analytics Dashboard",
  analyticsDesc:
    "Real-time analytics dashboard with charts and data visualization.",
  socialMediaApp: "Social Media App",
  socialDesc: "Social networking platform with real-time notifications.",
  cmsPlatform: "CMS Platform",
  cmsDesc: "Content management system with modern UI and API.",
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
  // Publication Items
  pub1Title:
    "CT স্ক্যান ইমেজ থেকে ব্রেইন স্ট্রোক শ্রেণীবিন্যাসের জন্য একটি BrainNet (BrN) ভিত্তিক নতুন পদ্ধতি",
  pub1Publisher: "IEEE",
  pub1Author: "ইমদাদুল হক",
  pub1Description:
    "বিশ্বব্যাপী ব্রেইন স্ট্রোক মৃত্যুর দ্বিতীয় প্রধান কারণ হিসেবে পরিচিত। প্রস্তাবিত মডেলটি BrainNet (BrN) নামে একটি হাইব্রিড মডেল ব্যবহার করে, যা CNN এবং SVM কে সংযুক্ত করে স্ট্রোক রোগ শ্রেণীবিন্যে সহায়তা করে। মডেলটি ৯১.৯১% নির্ভুলতা প্রদর্শন করেছে এবং বিদ্যমান মডেলের তুলনায় ভালো ফলাফল দেখায়। এতে ডেটা সংগ্রহ, প্রিপ্রসেসিং এবং ফিচার এক্সট্রাকশন সহ পুরো প্রক্রিয়া অন্তর্ভুক্ত করা হয়েছে।",
  pub2Title: "লিভার ডিজিজের ঝুঁকি কারণ অন্বেষণ: একটি মেশিন লার্নিং পদ্ধতি",
  pub2Publisher: "IEEE",
  pub2Author: "ইমদাদুল হক",
  pub2Description:
    "লিভার ডিজিজ একটি সাধারণ ক্লিনিক্যাল সমস্যা যার সাথে স্বাস্থ্য ঝুঁকি ও মৃত্যুর হার সম্পর্কিত। প্রস্তাবিত গবেষণায় ছয়টি মেশিন লার্নিং অ্যালগরিদম ব্যবহার করে লিভার ডিজিজ পূর্বাভাস দেওয়া হয়েছে, যা চিকিৎসকদের ঝুঁকিপূর্ণ রোগী শনাক্ত করতে সহায়তা করে। মডেলগুলির মধ্যে র‍্যান্ডম ফরেস্ট, লজিস্টিক রিগ্রেশন ও অন্যান্য অ্যালগরিদমের পরিমাণগত বিশ্লেষণ করা হয়েছে।",
  pub3Title:
    "ট্রান্সফার লার্নিং ভিত্তিক মরিচ রোগ শ্রেণীবিন্যাস: একটি ডিপ লার্নিং পদ্ধতি",
  pub3Publisher: "IEEE",
  pub3Author: "ইমদাদুল হক",
  pub3Description:
    "মরিচের বিভিন্ন রোগ নির্ণয়ে দ্রুত ও সঠিক সনাক্তকরণ গুরুত্বপূর্ণ। এই গবেষণায় প্রি-ট্রেইনড ডিপ লার্নিং মডেল ব্যবহার করে মরিচ রোগ শনাক্ত করার চেষ্টা করা হয়েছে। প্রস্তাবিত পদ্ধতিতে VGG-19, Xception, NasNet Mobile, MobileNet-V2, ResNet-152-V2 ও Inception-ResNet-V2 সহ বিভিন্ন মডেলের কার্যকারিতা পরীক্ষা করা হয়েছে এবং সঠিকতা উন্নত করা হয়েছে।",
  // Common UI
  seeMore: "আরও দেখুন",
  share: "শেয়ার",
  viewPublication: "প্রকাশনা দেখুন",
  backToPublications: "প্রকাশনায় ফিরে যান",
  publicationId: "প্রকাশনা আইডি",
  copyLink: "লিংক কপি করুন",
  linkCopied: "লিংক ক্লিপবোর্ডে কপি হয়েছে!",
  // Projects Section
  ecommercePlatform: "ই-কমার্স প্ল্যাটফর্ম",
  ecommerceDesc: "React, Node.js এবং MongoDB এর সাথে সম্পূর্ণ ই-কমার্স সমাধান।",
  taskManagementApp: "টাস্ক ম্যানেজমেন্ট অ্যাপ",
  taskDesc: "রিয়েল-টাইম আপডেট সহ সহযোগী কাজ ব্যবস্থাপনা।",
  portfolioWebsite: "পোর্টফোলিও ওয়েবসাইট",
  portfolioDesc: "ডার্ক মোড এবং অ্যানিমেশন সহ প্রতিক্রিয়াশীল পোর্টফোলিও।",
  analyticsDashboard: "অ্যানালিটিক্স ড্যাশবোর্ড",
  analyticsDesc:
    "চার্ট এবং ডেটা ভিজুয়ালাইজেশন সহ রিয়েল-টাইম অ্যানালিটিক্স ড্যাশবোর্ড।",
  socialMediaApp: "সোশ্যাল মিডিয়া অ্যাপ",
  socialDesc: "রিয়েল-টাইম নোটিফিকেশন সহ সোশ্যাল নেটওয়ার্কিং প্ল্যাটফর্ম।",
  cmsPlatform: "CMS প্ল্যাটফর্ম",
  cmsDesc: "আধুনিক UI এবং API সহ কনটেন্ট ম্যানেজমেন্ট সিস্টেম।",
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

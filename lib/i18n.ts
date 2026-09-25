import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const isClient = typeof window !== "undefined";

const baseEnglishResources = {
  name: "Imdadul Haque",
  hireMe: "Hire Me",
  heroGreeting: "Hi, I'm",
  heroRole: "Mobile Application Developer",
  installPromptTitle: "Take This Portfolio With You",
  installPromptDesc:
    "Install for instant access, offline browsing, and a clean app-like experience — right from your home screen.",
  installPromptInstall: "Install",
  installPromptDismiss: "Not now",
  about: "About",
  contactMe: "Contact Me",
  experience: "Experience",
  publication: "Publication",
  projects: "Projects",
  resume: "Resume",
  hireMeDescPrefix:
    "Software Engineer bridging JavaScript and native Android. ",
  hireMeDescHighlight: "5+",
  hireMeDescSuffix:
    " years shipping React Native apps, custom TurboModules and real-time features like WebRTC calling and live chat.",
  availabilityBadge: "Available for Hybrid & Onsite Roles",
  scrollDown: "Scroll",
  aboutDesc:
    "The stack I build with day to day, and the journey from web development into React Native and native Android engineering.",
  contactMeDesc: "Get in touch with me for collaborations or opportunities.",
  experienceDesc:
    "From Assistant Engineer to Software Engineer at Snowtex Group, and the roles along the way that built my React Native and native Android expertise.",
  publicationDesc:
    "Peer-reviewed research in machine learning and deep learning, published in IEEE and Springer venues.",
  projectsDesc:
    "Enterprise mobile systems built at Snowtex Group, an open-source npm package, and a solo-built social app.",
  language: "Language",
  // About Section
  skills: "Skills",
  fullStackDeveloper: "Software Engineer",
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
  pub4Title: "Malabar Nightshade Disease Detection Using Deep Learning Technique",
  pub4Publisher: "Springer, Singapore",
  pub4Author: "Imdadul Haque",
  pub4Description:
    "One of the most common vegetables as Malabar cultivates is increasing day by day, and the farmers are suffering from the Malabar disease known as scab disease on Malabar leaves. So that there are many papers already published and some of them also able to achieve a pretty accuracy, and it is sometime up to 85%. But, this is not the perfect solution for the suffering farmers who are also facing the loss of cultivation. We are trying to solve the issues, and we also research on Malabar with 96.77% accuracy which is height accuracy. This approaches are implementing and design the model to detect and recognize Malabar disease and made this project with convolutional neural network (CNN) with respect to keras API and OpenCV, and this is a classification model of Malabar disease recognition system. We took the input as Malabar leaves with the fixed input size is 200 × 200 which defines the RGB Malabar leaves image.",
  pub5Title: "Deep Learning based Classification of Papaya Disease Recognition",
  pub5Publisher: "IEEE",
  pub5Author: "Imdadul Haque",
  pub5Description:
    "Every year many of farmers had to face a huge amount of loss due to the papaya disease. From the last several years, thousands of researchers pay attention to the papaya disease recognition system to reduce the losses of farmers. Farmers have no prior knowledge about the detection technique to mitigate the disease. They found the diseases when the papaya already affected and wasted. Due to the loss of cultivation, many of them are now frightening to take steps about planting papaya. On this matter, a research has been performed with the advancement of deep learning technology to detect and classify the papaya disease. CNN model is used according to Keras API. This model becomes reliable with fully connected, where classification is completed and all the process is a deep learning based. It took the fixed size of image 200x200 RGB image as input.",
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
  goHome: "Back to Home",
  toggleTheme: "Toggle Theme",
  lightMode: "Light Mode",
  darkMode: "Dark Mode",
  // Chat Widget
  chatIcon: "Chat",
  chatTitle: "Chat with me",
  enterEmail: "Enter your email",
  enterMessage: "Enter your message",
  send: "Send",
  emailRequired: "Email is required",
  messageRequired: "Message is required",
  thankYou: "Thank you! Your message has been sent.",
};

const banglaTranslations = {
  name: "ইমদাদুল হক",
  hireMe: "আমাকে নিয়োগ করুন",
  heroGreeting: "হ্যালো, আমি",
  heroRole: "মোবাইল অ্যাপ্লিকেশন ডেভেলপার",
  installPromptTitle: "এই পোর্টফোলিওটি সাথে রাখুন",
  installPromptDesc:
    "দ্রুত অ্যাক্সেস, অফলাইন ব্রাউজিং এবং অ্যাপের মতো স্বচ্ছন্দ অভিজ্ঞতার জন্য হোম স্ক্রিনে ইনস্টল করুন।",
  installPromptInstall: "ইনস্টল করুন",
  installPromptDismiss: "এখন নয়",
  about: "আমার সম্পর্কে",
  contactMe: "যোগাযোগ করুন",
  experience: "অভিজ্ঞতা",
  publication: "প্রকাশনা",
  projects: "প্রকল্প",
  resume: "জীবনবৃত্তান্ত",
  hireMeDescPrefix:
    "একজন সফটওয়্যার ইঞ্জিনিয়ার যিনি JavaScript ও নেটিভ Android-এর মধ্যে সেতুবন্ধন করেন। ",
  hireMeDescHighlight: "৫+",
  hireMeDescSuffix:
    " বছর ধরে React Native অ্যাপ, কাস্টম TurboModules এবং WebRTC কলিং ও লাইভ চ্যাটের মতো রিয়েল-টাইম ফিচার তৈরি করছি।",
  availabilityBadge: "হাইব্রিড ও অনসাইট কাজের জন্য উপলব্ধ",
  scrollDown: "স্ক্রল করুন",
  aboutDesc:
    "আমি প্রতিদিন যে প্রযুক্তি নিয়ে কাজ করি, এবং ওয়েব ডেভেলপমেন্ট থেকে React Native ও নেটিভ অ্যান্ড্রয়েড ইঞ্জিনিয়ারিংয়ে আসার যাত্রা।",
  contactMeDesc: "সহযোগিতা বা সুযোগের জন্য আমার সাথে যোগাযোগ করুন।",
  experienceDesc:
    "Snowtex Group-এ Assistant Engineer থেকে Software Engineer পর্যন্ত, এবং যে ভূমিকাগুলো আমার React Native ও নেটিভ অ্যান্ড্রয়েড দক্ষতা গড়ে তুলেছে।",
  publicationDesc:
    "মেশিন লার্নিং ও ডিপ লার্নিং বিষয়ে পিয়ার-রিভিউড গবেষণা, IEEE ও Springer ভেন্যুতে প্রকাশিত।",
  projectsDesc:
    "Snowtex Group-এ তৈরি এন্টারপ্রাইজ মোবাইল সিস্টেম, একটি ওপেন-সোর্স npm প্যাকেজ এবং একক হাতে তৈরি একটি সোশ্যাল অ্যাপ।",
  language: "ভাষা",
  // About Section
  skills: "দক্ষতা",
  fullStackDeveloper: "সফটওয়্যার ইঞ্জিনিয়ার",
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
  pub4Title: "ডিপ লার্নিং কৌশল ব্যবহার করে মালাবার শাকের রোগ সনাক্তকরণ",
  pub4Publisher: "Springer, Singapore",
  pub4Author: "ইমদাদুল হক",
  pub4Description:
    "মালাবার শাক চাষ দিন দিন বাড়ছে, কিন্তু কৃষকরা এর স্ক্যাব রোগে ভুগছেন। বিদ্যমান গবেষণাগুলো সর্বোচ্চ প্রায় ৮৫% নির্ভুলতা অর্জন করতে পেরেছে, যা যথেষ্ট নয়। এই গবেষণায় Keras API ও OpenCV সহযোগে একটি কনভোলিউশনাল নিউরাল নেটওয়ার্ক (CNN) মডেল তৈরি করে মালাবার রোগ শনাক্তকরণে ৯৬.৭৭% নির্ভুলতা অর্জন করা হয়েছে। ইনপুট হিসেবে ২০০ × ২০০ পিক্সেলের RGB মালাবার পাতার ছবি ব্যবহার করা হয়েছে।",
  pub5Title: "ডিপ লার্নিং ব্যবহার করে পেঁপে রোগ শ্রেণীবিন্যাস",
  pub5Publisher: "IEEE",
  pub5Author: "ইমদাদুল হক",
  pub5Description:
    "প্রতি বছর পেঁপে রোগের কারণে কৃষকদের বিপুল ক্ষতির সম্মুখীন হতে হয়, কারণ রোগ শনাক্ত করার আগে থেকেই তাদের কোনো ধারণা থাকে না এবং রোগ ধরা পড়ে ততক্ষণে ফসল নষ্ট হয়ে যায়। এই গবেষণায় Keras API ব্যবহার করে একটি CNN মডেলের মাধ্যমে পেঁপে রোগ শনাক্ত ও শ্রেণীবিন্যাস করা হয়েছে। ইনপুট হিসেবে ২০০×২০০ পিক্সেলের RGB ছবি ব্যবহার করা হয়েছে।",
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
  goHome: "হোমে ফিরে যান",
  toggleTheme: "থিম টগল করুন",
  lightMode: "লাইট মোড",
  darkMode: "ডার্ক মোড",
  // Chat Widget
  chatIcon: "চ্যাট",
  chatTitle: "আমার সাথে চ্যাট করুন",
  enterEmail: "আপনার ইমেইল লিখুন",
  enterMessage: "আপনার মেসেজ লিখুন",
  send: "পাঠান",
  emailRequired: "ইমেইল প্রয়োজন",
  messageRequired: "মেসেজ প্রয়োজন",
  thankYou: "ধন্যবাদ! আপনার মেসেজ পাঠানো হয়েছে।",
};

const resources = {
  en: {
    common: baseEnglishResources,
  },
  bn: {
    common: banglaTranslations,
  },
};

const i18nInstance = i18n.use(initReactI18next);

if (isClient) {
  i18nInstance.use(LanguageDetector);
}

i18nInstance.init({
  resources,
  lng: "en",
  fallbackLng: "en",
  ns: ["common"],
  defaultNS: "common",
  interpolation: {
    escapeValue: false,
  },
});

export { baseEnglishResources };
export default i18n;

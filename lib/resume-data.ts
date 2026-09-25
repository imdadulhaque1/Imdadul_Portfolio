export type ResumeEntry = {
  title: string;
  company?: string;
  dateRange?: string;
  location?: string;
  linkLabel?: string;
  linkHref?: string;
  linkIcon?: "link" | "playstore";
  description?: string;
  stack?: string;
  bullets?: string[];
  // No public repo link for this one - it's an internal company project
  // tracked in SVN, not GitHub. Surfaced in the UI instead of just quietly
  // omitting a link, so it doesn't read as a missing/broken card.
  internal?: boolean;
};

export const resumeProfile = {
  name: "IMDADUL HAQUE",
  role: "Mobile Application Developer (React Native)",
  phone: "01770019346",
  phoneHref: "tel:+8801770019346",
  email: "imdadulhaque1440@gmail.com",
  linkedinLabel: "https://www.linkedin.com/in/imdadulhaque1/",
  linkedinHref: "https://www.linkedin.com/in/imdadulhaque1/",
  location: "Dhaka, Bangladesh",
};

export const resumeExperience: ResumeEntry[] = [
  {
    title: "Software Engineer",
    company: "Snowtex Group",
    dateRange: "24 Aug 2026 - Present",
    location: "Dhamrai, Dhaka",
    description: "Promoted from Assistant Engineer to Software Engineer.",
  },
  {
    title: "Assistant Engineer",
    company: "Snowtex Group",
    dateRange: "26 Aug 2023 - 23 Aug 2026",
    location: "Dhamrai, Dhaka",
    description:
      "Building enterprise mobile and web applications that run the company's internal operations",
    bullets: [
      "Build enterprise mobile apps with React Native, TypeScript and Kotlin",
      "Delivered 4 production systems: ERP, FPC, HRMS and Dormitory Management",
      "Write native Android modules in Kotlin for scanning, printing and biometrics",
      "Create REST APIs with .NET and MSSQL for mobile app integration",
    ],
  },
  {
    title: "Software Engineer",
    company: "TFP Solutions Bangladesh Ltd.",
    dateRange: "07/2021 - 08/2023",
    description:
      "Worked on client-facing web and mobile products using React and React Native",
    bullets: [
      "Developed the Hello Super Stars mobile app with React Native",
      "Integrated third-party SDKs, including VideoSDK for real-time video",
      "Built and maintained several smaller React and React Native projects",
    ],
  },
];

export const resumeProjects: ResumeEntry[] = [
  {
    title: "Snowtex ERP (Cutting ERP)",
    description:
      "Mobile ERP covering the full garment cutting workflow, from fabric receive to shipment.",
    internal: true,
    stack: "React Native · TypeScript · Redux Toolkit · MMKV · SQLite · Kotlin",
    bullets: [
      "Mobile ERP covering the full garment flow, from fabric receive to shipment",
      "End-to-end cutting workflow: marker, spreading, cutting, cut-part tracking",
      "Offline-first outbox with MMKV & NetInfo, no data loss on weak networks",
      "QR/barcode scanning for fabric rolls, bins and cartons",
      "JWT auth with Axios interceptors and role-based menu permissions",
      "Connects store, cutting, QA, finishing and warehouse teams in one app",
    ],
  },
  {
    title: "Snowtex FPC (Fair Price Canteen)",
    description:
      "Employee grocery requisition and POS delivery app for company canteens, running on Sunmi devices.",
    internal: true,
    stack: "React Native · TypeScript · RTK Query · MMKV · Kotlin",
    bullets: [
      "Employee grocery requisition and POS delivery app on Sunmi devices",
      "QR card scanning with Sunmi thermal receipt printing via native module",
      "LAN-first network layer with automatic global server fallback",
      "RTK Query caching with redux-persist and MMKV storage",
      "JWT auth with OTP password recovery and auto-logout",
    ],
  },
  {
    title: "Snowtex HRMS",
    description:
      "HRMS & payroll app with GPS-verified attendance and multi-level leave approval.",
    internal: true,
    stack: "React Native · TypeScript · Kotlin · FCM · SQLite",
    bullets: [
      "HRMS & payroll app for Android and iOS",
      "GPS-based punch attendance with location verification",
      "Multi-level approval for leave, short leave and punch",
      "Kotlin native modules: fingerprint login, badge count, in-app APK update",
      "Push notifications with FCM & Notifee in foreground and background",
      "Offline SQLite caching and PDF attendance/leave reports",
    ],
  },
  {
    title: "Snowtex Dormitory Management System",
    description:
      "Web platform for dormitory and guest-house booking, allocation and reporting.",
    internal: true,
    stack: "Next.js 15 · React 19 · TypeScript · Tailwind CSS",
    bullets: [
      "Web platform for dormitory and guest-house management",
      "Full booking flow: room search, booking, allocation, checkout, payment",
      "Calendar and timeline dashboard for room occupancy",
      "JWT auth with role-based dynamic menus",
      "Room and food requisition approval workflows",
      "Reports with PDF/Excel export; HR and Kafka integration",
    ],
  },
  {
    title: "ConvoX — Social & Messaging App",
    description:
      "Solo-built social platform with real-time chat, WebRTC calling and on-device AI translation.",
    linkLabel: "Published on Google Play",
    linkIcon: "playstore",
    stack:
      "Kotlin · Jetpack Compose · MVVM · Retrofit · Socket.IO · LiveKit (WebRTC) · FCM · ML Kit",
    bullets: [
      "Solo-built a full social platform: feed, real-time chat, calling, communities",
      "WebRTC calling (LiveKit) that rings via FCM even when the app is closed",
      "On-device AI translation (ML Kit) across 4 languages with auto detection",
    ],
  },
  {
    title: "react-native-kernel",
    description:
      "Open-source npm package consolidating 8+ React Native utility TurboModules.",
    linkLabel: "react-native-kernel.vercel.app",
    linkHref: "https://react-native-kernel.vercel.app/",
    stack: "React Native · TurboModules · New Architecture · Kotlin · npm",
    bullets: [
      "Open-source npm package consolidating 8+ React Native utility libraries",
      "8+ native TurboModules: device info, networking, storage, auth, permissions, scanning, file picking",
    ],
  },
];

export const resumeSkillGroups: { label: string; value: string }[] = [
  {
    label: "Mobile",
    value:
      "React Native, TypeScript, Kotlin, Jetpack Compose, Native Android, TurboModules",
  },
  { label: "Web", value: "React, Next.js, Tailwind CSS" },
  {
    label: "State & Storage",
    value: "Redux Toolkit, RTK Query, MVVM, MMKV, SQLite",
  },
  {
    label: "APIs & Real-time",
    value: "REST API, Retrofit, Socket.IO, WebRTC / LiveKit, FCM",
  },
  { label: "AI & Backend", value: "ML Kit, .NET (Basic), MSSQL (Basic)" },
];

export const resumePublications: string[] = [
  "A BrainNet (BrN) based New Approach to Classify Brain Stroke from CT Scan Images",
  "Examining The Risk Factors of Liver Disease: A Machine Learning Approach",
  "Classifying Pepper Disease based on Transfer Learning: A Deep Learning Approach",
  "Malabar Nightshade Disease Detection Using Deep Learning Technique",
  "Deep Learning based Classification of Papaya Disease Recognition",
  "Comprehensive Analysis of CNN and YOLOv5 Object Detection Model to Classify Phytomedicine Tree's Leaf Disease",
];

export const resumeEducation: ResumeEntry[] = [
  {
    title: "Bachelor of Science in Computer Science and Engineering",
    company: "Daffodil International University",
    dateRange: "01/2017 - 12/2020",
    location: "Dhaka, Bangladesh",
    description: "CGPA: 3.51 out of 4.00",
  },
];

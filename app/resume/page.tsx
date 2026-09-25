import ResumeScreen from "@/app/(screens)/ResumeScreen";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Imdadul Haque | Resume",
  description:
    "Resume of Imdadul Haque - Mobile Application Developer specializing in React Native.",
};

export default function ResumePage() {
  return <ResumeScreen />;
}

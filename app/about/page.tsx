import AboutScreen from "@/app/(screens)/AboutScreen";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Imdadul Haque | About",
  description:
    "About Imdadul Haque - Software Engineer specializing in React, Next.js, and modern web technologies.",
};

export default function AboutPage() {
  return <AboutScreen />;
}

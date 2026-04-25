import ExperienceScreen from "@/app/(screens)/ExperienceScreen";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Imdadul Haque | Experience",
  description:
    "Explore Imdadul Haque's professional journey and experience in software development.",
};

export default function ExperiencePage() {
  return <ExperienceScreen />;
}

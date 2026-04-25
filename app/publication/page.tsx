import PublicationScreen from "@/app/(screens)/PublicationScreen";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Imdadul Haque | Publication",
  description:
    "Check out Imdadul Haque's publications and contributions to the field of software development.",
};

export default function PublicationPage() {
  return <PublicationScreen />;
}

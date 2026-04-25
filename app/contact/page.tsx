import ContactMeScreen from "@/app/(screens)/ContactMeScreen";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Imdadul Haque | Contact Me",
  description:
    "Get in touch with Imdadul Haque for collaborations, opportunities, or project discussions.",
};

export default function ContactPage() {
  return <ContactMeScreen />;
}

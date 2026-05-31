import type { Metadata } from "next";
import PageLayout from "../components/PageLayout";
import Contact from "../components/Contact";

export const metadata: Metadata = {
  title: "Contact — Green Pir Panjal R&D",
  description:
    "Get in touch with Green Pir Panjal R&D for investor relations, research partnerships and collaborations.",
};

export default function ContactPage() {
  return (
    <PageLayout>
      <div className="pt-20">
        <Contact />
      </div>
    </PageLayout>
  );
}

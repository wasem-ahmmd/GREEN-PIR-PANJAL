import type { Metadata } from "next";
import PageLayout from "../components/PageLayout";
import About from "../components/About";

export const metadata: Metadata = {
  title: "About — Green Pir Panjal R&D",
  description:
    "Learn about Green Pir Panjal R&D — a research lab rooted in the Pir Panjal range, building biodegradable materials and food processing technologies.",
};

export default function AboutPage() {
  return (
    <PageLayout>
      <div className="pt-20">
        <About />
      </div>
    </PageLayout>
  );
}

import type { Metadata } from "next";
import PageLayout from "../components/PageLayout";
import Research from "../components/Research";

export const metadata: Metadata = {
  title: "Research — Green Pir Panjal R&D",
  description:
    "Explore our research pillars — bio-polymer formulation, food preservation, agro-industrial scaling and sustainability analytics.",
};

export default function ResearchPage() {
  return (
    <PageLayout>
      <div className="pt-20">
        <Research />
      </div>
    </PageLayout>
  );
}

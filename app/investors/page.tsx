import type { Metadata } from "next";
import PageLayout from "../components/PageLayout";
import Investors from "../components/Investors";

export const metadata: Metadata = {
  title: "Investors — Green Pir Panjal R&D",
  description:
    "Fund the future of sustainable materials and food tech. Join Green Pir Panjal R&D as we scale from lab to market.",
};

export default function InvestorsPage() {
  return (
    <PageLayout>
      <div className="pt-20">
        <Investors />
      </div>
    </PageLayout>
  );
}

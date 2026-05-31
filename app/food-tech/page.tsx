import type { Metadata } from "next";
import PageLayout from "../components/PageLayout";
import FoodTech from "../components/FoodTech";

export const metadata: Metadata = {
  title: "Food Tech — Green Pir Panjal R&D",
  description:
    "Next-generation food processing technologies — solar drying, natural coatings and functional food products from Himalayan crops.",
};

export default function FoodTechPage() {
  return (
    <PageLayout>
      <div className="pt-20">
        <FoodTech />
      </div>
    </PageLayout>
  );
}

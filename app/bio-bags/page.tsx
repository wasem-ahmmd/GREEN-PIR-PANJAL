import type { Metadata } from "next";
import PageLayout from "../components/PageLayout";
import BioBags from "../components/BioBags";

export const metadata: Metadata = {
  title: "Bio Bags — Green Pir Panjal R&D",
  description:
    "Plant-derived biodegradable bags that return to the earth — engineered from regional crop residues with industrial strength.",
};

export default function BioBagsPage() {
  return (
    <PageLayout>
      <div className="pt-20">
        <BioBags />
      </div>
    </PageLayout>
  );
}

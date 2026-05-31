import PageLayout from "./components/PageLayout";
import Hero from "./components/Hero";
import CompostableBagsSection from "./components/CompostableBagsSection";

export default function Home() {
  return (
    <PageLayout>
      <Hero />
      <CompostableBagsSection />
    </PageLayout>
  );
}

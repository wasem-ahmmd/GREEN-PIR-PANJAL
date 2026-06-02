import PageLayout from "./components/PageLayout";
import Hero from "./components/Hero";
import CompostableBagsSection from "./components/CompostableBagsSection";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <PageLayout>
      <Hero />
      <CompostableBagsSection />
      <WhyChooseUs />
    </PageLayout>
  );
}

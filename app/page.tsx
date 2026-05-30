import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Research from "./components/Research";
import BioBags from "./components/BioBags";
import FoodTech from "./components/FoodTech";
import Investors from "./components/Investors";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Research />
      <BioBags />
      <FoodTech />
      <Investors />
      <Footer />
    </main>
  );
}

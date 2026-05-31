import Navbar from "./Navbar";
import Footer from "./Footer";

export default function PageLayout({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <main className={`relative min-h-screen overflow-hidden ${className}`}>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}

import Hero from "@/components/Hero";
import DTCCarousel from "@/components/DTCCarousel";
import Showcase from "@/components/Showcase";
import SampleReport from "@/components/SampleReport";
import Pricing from "@/components/Pricing";
import Comparison from "@/components/Comparison";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#F5F1EA] text-[#1A1A1A] antialiased selection:bg-[#2563EB]/20">
      <Hero />
      <DTCCarousel />
      <Showcase />
      <SampleReport />
      <Pricing />
      <Comparison />
      <Footer />
    </div>
  );
}

import Hero from "@/sections/Hero";
import ServicesOverview from "@/sections/ServicesOverview";
import PortfolioPreview from "@/sections/PortfolioPreview";
import WhyChooseUs from "@/sections/WhyChooseUs";
import Process from "@/sections/Process";
import Testimonials from "@/sections/Testimonials";
import CTA from "@/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <PortfolioPreview />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <CTA />
    </>
  );
}

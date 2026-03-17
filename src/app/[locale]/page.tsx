import { setRequestLocale } from "next-intl/server";
import Hero from "@/sections/Hero";
import ServicesOverview from "@/sections/ServicesOverview";
import PortfolioPreview from "@/sections/PortfolioPreview";
import WhyChooseUs from "@/sections/WhyChooseUs";
import Process from "@/sections/Process";
import Testimonials from "@/sections/Testimonials";
import CTA from "@/sections/CTA";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

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

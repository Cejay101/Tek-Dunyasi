import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import PortfolioCard from "@/components/PortfolioCard";
import CTA from "@/sections/CTA";
import portfolioData from "@/data/portfolio.json";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Browse our portfolio of web development projects. See the modern, fast, and professional websites we've built for businesses.",
};

export default function PortfolioPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-gray-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Work"
            title="Projects we're proud of"
            description="Every project is an opportunity to create something meaningful. Here's a selection of the websites we've designed and developed."
          />
        </div>
      </section>

      {/* Portfolio grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.map((project) => (
              <PortfolioCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}

import SectionHeading from "@/components/SectionHeading";
import PortfolioCard from "@/components/PortfolioCard";
import Button from "@/components/Button";
import portfolioData from "@/data/portfolio.json";

export default function PortfolioPreview() {
  const featured = portfolioData.filter((p) => p.featured);

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Portfolio"
          title="Our recent work"
          description="Take a look at some of the projects we've delivered for our clients."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project) => (
            <PortfolioCard key={project.id} {...project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button href="/portfolio" variant="secondary">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}

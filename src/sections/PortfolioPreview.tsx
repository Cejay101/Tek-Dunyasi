import { useTranslations } from "next-intl";
import SectionHeading from "@/components/SectionHeading";
import PortfolioCard from "@/components/PortfolioCard";
import Button from "@/components/Button";
import portfolioData from "@/data/portfolio.json";

export default function PortfolioPreview() {
  const t = useTranslations("portfolio");
  const tItems = useTranslations("portfolioItems");
  const featured = portfolioData.filter((p) => p.featured);

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label={t("label")}
          title={t("title")}
          description={t("description")}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project) => (
            <PortfolioCard
              key={project.id}
              title={tItems(`${project.id}.title`)}
              description={tItems(`${project.id}.description`)}
              image={project.image}
              category={project.category}
              technologies={project.technologies}
              liveUrl={project.liveUrl}
              viewProjectLabel={t("viewProject")}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button href="/portfolio" variant="secondary">
            {t("viewAll")}
          </Button>
        </div>
      </div>
    </section>
  );
}

import { getTranslations, setRequestLocale } from "next-intl/server";
import SectionHeading from "@/components/SectionHeading";
import PortfolioCard from "@/components/PortfolioCard";
import CTA from "@/sections/CTA";
import portfolioData from "@/data/portfolio.json";

export default async function PortfolioPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("portfolio");
  const tItems = await getTranslations("portfolioItems");

  return (
    <>
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-gray-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label={t("pageLabel")}
            title={t("pageTitle")}
            description={t("pageDescription")}
          />
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.map((project) => (
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
        </div>
      </section>

      <CTA />
    </>
  );
}

import { useTranslations } from "next-intl";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";

const serviceIds = [
  { id: "business-website", icon: "globe" },
  { id: "website-redesign", icon: "refresh" },
  { id: "landing-page", icon: "layout" },
  { id: "speed-optimization", icon: "zap" },
  { id: "seo-setup", icon: "search" },
  { id: "website-maintenance", icon: "shield" },
];

export default function ServicesOverview() {
  const t = useTranslations("services");

  return (
    <section className="py-24 bg-gray-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label={t("label")}
          title={t("title")}
          description={t("description")}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceIds.map((service) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              title={t(`items.${service.id}.title`)}
              description={t(`items.${service.id}.shortDescription`)}
              icon={service.icon}
              learnMoreLabel={t("learnMore")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

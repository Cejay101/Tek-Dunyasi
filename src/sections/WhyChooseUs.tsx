import { useTranslations } from "next-intl";
import { Icon } from "@iconify/react";
import SectionHeading from "@/components/SectionHeading";

const advantageKeys = ["fast", "design", "responsive", "seo", "secure", "support"] as const;

const advantageIcons: Record<string, string> = {
  fast: "lucide:zap",
  design: "lucide:palette",
  responsive: "lucide:smartphone",
  seo: "lucide:trending-up",
  secure: "lucide:shield-check",
  support: "lucide:headset",
};

export default function WhyChooseUs() {
  const t = useTranslations("whyUs");

  return (
    <section className="py-24 bg-gray-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading label={t("label")} title={t("title")} description={t("description")} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantageKeys.map((key) => (
            <div key={key} className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-light text-primary flex items-center justify-center">
                <Icon icon={advantageIcons[key]} className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-dark mb-2">{t(`items.${key}.title`)}</h3>
                <p className="text-text-gray text-sm leading-relaxed">{t(`items.${key}.description`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useTranslations } from "next-intl";
import SectionHeading from "@/components/SectionHeading";

const stepKeys = [
  { number: "01", key: "consultation" },
  { number: "02", key: "design" },
  { number: "03", key: "development" },
  { number: "04", key: "launch" },
];

export default function Process() {
  const t = useTranslations("process");

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading label={t("label")} title={t("title")} description={t("description")} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stepKeys.map((step, index) => (
            <div key={step.key} className="relative">
              {index < stepKeys.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gray-200 -z-10" />
              )}
              <div className="text-5xl font-heading font-bold text-light mb-4">{step.number}</div>
              <h3 className="font-heading font-semibold text-lg text-dark mb-2">{t(`steps.${step.key}.title`)}</h3>
              <p className="text-text-gray text-sm leading-relaxed">{t(`steps.${step.key}.description`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

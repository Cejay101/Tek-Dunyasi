import { getTranslations, setRequestLocale } from "next-intl/server";
import SectionHeading from "@/components/SectionHeading";
import { IconRenderer } from "@/components/Icons";
import Button from "@/components/Button";
import CTA from "@/sections/CTA";

const serviceIds = [
  "business-website",
  "website-redesign",
  "landing-page",
  "speed-optimization",
  "seo-setup",
  "website-maintenance",
] as const;

const serviceIcons: Record<string, string> = {
  "business-website": "globe",
  "website-redesign": "refresh",
  "landing-page": "layout",
  "speed-optimization": "zap",
  "seo-setup": "search",
  "website-maintenance": "shield",
};

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("services");

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
          <div className="space-y-24">
            {serviceIds.map((id, index) => (
              <div
                key={id}
                id={id}
                className={`flex flex-col lg:flex-row gap-12 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1 w-full">
                  <div className="bg-gradient-to-br from-light to-accent rounded-2xl p-12 flex items-center justify-center min-h-[300px]">
                    <div className="text-primary">
                      <IconRenderer name={serviceIcons[id]} className="w-24 h-24 opacity-20" />
                    </div>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-light text-primary mb-6">
                    <IconRenderer name={serviceIcons[id]} />
                  </div>
                  <h2 className="font-heading font-bold text-2xl sm:text-3xl text-dark mb-4">
                    {t(`items.${id}.title`)}
                  </h2>
                  <p className="text-text-gray leading-relaxed mb-6">
                    {t(`items.${id}.fullDescription`)}
                  </p>

                  <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-dark mb-4">
                    {t("whatYouGet")}
                  </h3>
                  <ul className="space-y-3 mb-8">
                    {(t.raw(`items.${id}.benefits`) as string[]).map((benefit: string) => (
                      <li key={benefit} className="flex items-start gap-3 text-text-gray text-sm">
                        <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <Button href="/contact">{t("getStarted")}</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}

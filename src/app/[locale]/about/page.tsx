import { getTranslations, setRequestLocale } from "next-intl/server";
import { Icon } from "@iconify/react";
import SectionHeading from "@/components/SectionHeading";
import CTA from "@/sections/CTA";

const valueKeys = ["quality", "client", "results", "technology"] as const;

const valueIcons: Record<string, string> = {
  quality: "lucide:badge-check",
  client: "lucide:users",
  results: "lucide:trending-up",
  technology: "lucide:code",
};

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");

  return (
    <>
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-gray-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading label={t("pageLabel")} title={t("pageTitle")} description={t("pageDescription")} />
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-gradient-to-br from-light to-accent rounded-2xl p-12 flex items-center justify-center min-h-[400px]">
              <div className="text-center">
                <div className="flex h-20 w-20 mx-auto items-center justify-center rounded-2xl bg-primary text-white font-heading font-bold text-3xl mb-4">TD</div>
                <div className="font-heading font-semibold text-2xl text-dark">Tek Dünyası</div>
                <div className="text-text-gray text-sm mt-1">Tech World</div>
              </div>
            </div>
            <div>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-dark mb-6">{t("storyTitle")}</h2>
              <div className="space-y-4 text-text-gray leading-relaxed">
                <p>{t("story.p1")}</p>
                <p>{t("story.p2")}</p>
                <p>{t("story.p3")}</p>
                <p>{t("story.p4")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading label={t("valuesLabel")} title={t("valuesTitle")} description={t("valuesDescription")} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {valueKeys.map((key) => (
              <div key={key} className="bg-white rounded-2xl p-8 border border-gray-100">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-light text-primary mb-5"><Icon icon={valueIcons[key]} className="w-6 h-6" /></div>
                <h3 className="font-heading font-semibold text-lg text-dark mb-2">{t(`values.${key}.title`)}</h3>
                <p className="text-text-gray text-sm leading-relaxed">{t(`values.${key}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading label={t("techLabel")} title={t("techTitle")} description={t("techDescription")} />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Vercel"].map((tech) => (
              <div key={tech} className="bg-white rounded-xl border border-gray-100 p-6 text-center hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all">
                <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-light flex items-center justify-center text-primary font-heading font-bold text-sm">{tech.substring(0, 2).toUpperCase()}</div>
                <div className="text-sm font-medium text-dark">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}

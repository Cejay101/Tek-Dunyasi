import { useTranslations } from "next-intl";
import Button from "@/components/Button";

export default function CTA() {
  const t = useTranslations("cta");

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-primary to-[#3B82F6] p-12 sm:p-16 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative text-center max-w-2xl mx-auto">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-4">
              {t("title")}
            </h2>
            <p className="text-white/80 text-lg mb-8">{t("description")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" className="!bg-white !text-primary hover:!bg-gray-100 !shadow-lg" size="lg">
                {t("primary")}
              </Button>
              <Button href="/services" className="!bg-white/10 !text-white !border-white/20 hover:!bg-white/20" variant="outline" size="lg">
                {t("secondary")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

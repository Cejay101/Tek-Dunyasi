import { getTranslations, setRequestLocale } from "next-intl/server";
import { Icon } from "@iconify/react";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";

const WHATSAPP_URL = "https://wa.me/+905076421736";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact");

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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <h3 className="font-heading font-semibold text-xl text-dark mb-6">
                {t("getInTouch")}
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-light text-primary flex items-center justify-center">
                    <Icon icon="lucide:mail" className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-dark">{t("email")}</div>
                    <a href="mailto:hello@tekdunyasi.com" className="text-text-gray text-sm hover:text-primary transition-colors">
                      hello@tekdunyasi.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-green-50 text-green-600 flex items-center justify-center">
                    <Icon icon="mdi:whatsapp" className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-dark">{t("whatsapp")}</div>
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-text-gray text-sm hover:text-green-600 transition-colors">
                      {t("chatWhatsapp")}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-light text-primary flex items-center justify-center">
                    <Icon icon="lucide:clock" className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-dark">{t("responseTime")}</div>
                    <div className="text-text-gray text-sm">{t("within24")}</div>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-6 bg-green-50 rounded-2xl">
                <h4 className="font-heading font-semibold text-dark mb-2">{t("preferWhatsapp")}</h4>
                <p className="text-text-gray text-sm mb-4">{t("whatsappDesc")}</p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-green-700 transition-colors"
                >
                  <Icon icon="mdi:whatsapp" className="w-5 h-5" />
                  {t("whatsappBtn")}
                </a>
              </div>
            </div>

            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

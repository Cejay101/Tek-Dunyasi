import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const serviceLinks = [
  { key: "business", href: "/services#business-website" },
  { key: "redesign", href: "/services#website-redesign" },
  { key: "landing", href: "/services#landing-page" },
  { key: "speed", href: "/services#speed-optimization" },
  { key: "seo", href: "/services#seo-setup" },
  { key: "maintenance", href: "/services#website-maintenance" },
];

const companyLinks = [
  { key: "about", href: "/about" },
  { key: "portfolio", href: "/portfolio" },
  { key: "contact", href: "/contact" },
];

export default function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");

  return (
    <footer className="bg-dark text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white font-heading font-bold text-sm">
                TD
              </div>
              <span className="font-heading font-semibold text-lg">Tek Dünyası</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">{t("description")}</p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4">{t("services")}</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.key}>
                  <Link href={link.href} className="text-gray-400 text-sm hover:text-white transition-colors">
                    {t(`serviceLinks.${link.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4">{t("company")}</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.key}>
                  <Link href={link.href} className="text-gray-400 text-sm hover:text-white transition-colors">
                    {tNav(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4">{t("getInTouch")}</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a href="mailto:hello@tekdunyasi.com" className="hover:text-white transition-colors">hello@tekdunyasi.com</a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">{t("contactForm")}</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Tek Dünyası. {t("rights")}
          </p>
          <p className="text-gray-500 text-sm">{t("builtWith")}</p>
        </div>
      </div>
    </footer>
  );
}

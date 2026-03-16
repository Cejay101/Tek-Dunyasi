import Link from "next/link";

const footerLinks = {
  services: [
    { label: "Business Websites", href: "/services#business-website" },
    { label: "Website Redesign", href: "/services#website-redesign" },
    { label: "Landing Pages", href: "/services#landing-page" },
    { label: "Speed Optimization", href: "/services#speed-optimization" },
    { label: "SEO Setup", href: "/services#seo-setup" },
    { label: "Maintenance", href: "/services#website-maintenance" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white font-heading font-bold text-sm">
                TD
              </div>
              <span className="font-heading font-semibold text-lg">
                Tek Dünyası
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              We build modern, fast, and professional websites that help
              businesses grow online.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4">
              Get In Touch
            </h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a
                  href="mailto:hello@tekdunyasi.com"
                  className="hover:text-white transition-colors"
                >
                  hello@tekdunyasi.com
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact Form
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Tek Dünyası. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Built with modern web technologies
          </p>
        </div>
      </div>
    </footer>
  );
}

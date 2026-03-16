import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import { IconRenderer } from "@/components/Icons";
import Button from "@/components/Button";
import CTA from "@/sections/CTA";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our web development services including business websites, redesigns, landing pages, speed optimization, SEO setup, and ongoing maintenance.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-gray-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Services"
            title="Web solutions for every business need"
            description="We offer a complete range of web development services to help your business succeed online. From initial design to ongoing support."
          />
        </div>
      </section>

      {/* Services list */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`flex flex-col lg:flex-row gap-12 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Visual */}
                <div className="flex-1 w-full">
                  <div className="bg-gradient-to-br from-light to-accent rounded-2xl p-12 flex items-center justify-center min-h-[300px]">
                    <div className="text-primary">
                      <IconRenderer
                        name={service.icon}
                        className="w-24 h-24 opacity-20"
                      />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-light text-primary mb-6">
                    <IconRenderer name={service.icon} />
                  </div>
                  <h2 className="font-heading font-bold text-2xl sm:text-3xl text-dark mb-4">
                    {service.title}
                  </h2>
                  <p className="text-text-gray leading-relaxed mb-6">
                    {service.fullDescription}
                  </p>

                  <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-dark mb-4">
                    What You Get
                  </h3>
                  <ul className="space-y-3 mb-8">
                    {service.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-start gap-3 text-text-gray text-sm"
                      >
                        <svg
                          className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <Button href="/contact">Get Started</Button>
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

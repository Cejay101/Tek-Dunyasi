import { useTranslations } from "next-intl";
import { Icon } from "@iconify/react";
import SectionHeading from "@/components/SectionHeading";
import { testimonials } from "@/data/testimonials";

const testimonialKeys = ["sarah", "david", "emily"] as const;

export default function Testimonials() {
  const t = useTranslations("testimonials");
  const tItems = useTranslations("testimonialItems");

  return (
    <section className="py-24 bg-dark text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading label={t("label")} title={t("title")} description={t("description")} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.name} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} icon="lucide:star" className="w-5 h-5 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                &ldquo;{tItems(`${testimonialKeys[index]}.content`)}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-medium text-sm">{testimonial.name}</div>
                  <div className="text-gray-400 text-xs">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

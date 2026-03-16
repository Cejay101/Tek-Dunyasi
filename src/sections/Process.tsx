import SectionHeading from "@/components/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We start by understanding your business, goals, and target audience. This helps us create a clear roadmap for your project.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We create a custom design that reflects your brand identity and provides the best user experience for your visitors.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Our developers bring the design to life using modern technologies, ensuring your website is fast, responsive, and secure.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "After thorough testing and your approval, we launch your website and ensure everything runs smoothly from day one.",
  },
];

export default function Process() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Our Process"
          title="From idea to launch in 4 steps"
          description="Our streamlined process ensures your project is delivered on time and exceeds expectations."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gray-200 -z-10" />
              )}
              <div className="text-5xl font-heading font-bold text-light mb-4">
                {step.number}
              </div>
              <h3 className="font-heading font-semibold text-lg text-dark mb-2">
                {step.title}
              </h3>
              <p className="text-text-gray text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

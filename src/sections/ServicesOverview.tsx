import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";

export default function ServicesOverview() {
  return (
    <section className="py-24 bg-gray-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Services"
          title="Everything you need to go online"
          description="From design to launch and beyond, we provide end-to-end web development services tailored to your business needs."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              title={service.title}
              description={service.shortDescription}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

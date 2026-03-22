import Link from "next/link";
import { Icon } from "@iconify/react";

interface PortfolioCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  liveUrl: string;
  viewProjectLabel?: string;
}

export default function PortfolioCard({
  title,
  description,
  category,
  technologies,
  liveUrl,
  viewProjectLabel = "View project",
}: PortfolioCardProps) {
  return (
    <div className="group rounded-2xl border border-gray-100 bg-white overflow-hidden transition-all hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20">
      <div className="relative h-56 bg-gradient-to-br from-light to-accent overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Icon icon="lucide:monitor" className="w-8 h-8 text-primary" />
            </div>
            <span className="text-xs font-medium text-primary/60">{title}</span>
          </div>
        </div>
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm text-xs font-medium text-dark px-3 py-1 rounded-full">{category}</span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-heading font-semibold text-lg text-dark mb-2">{title}</h3>
        <p className="text-text-gray text-sm leading-relaxed mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {technologies.map((tech) => (
            <span key={tech} className="bg-light text-primary text-xs font-medium px-2.5 py-1 rounded-md">{tech}</span>
          ))}
        </div>
        <Link href={liveUrl} className="text-primary text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
          {viewProjectLabel}
          <Icon icon="lucide:arrow-up-right" className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

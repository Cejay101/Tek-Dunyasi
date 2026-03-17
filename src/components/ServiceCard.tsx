import { Link } from "@/i18n/navigation";
import { IconRenderer } from "./Icons";

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon: string;
  learnMoreLabel?: string;
}

export default function ServiceCard({
  id,
  title,
  description,
  icon,
  learnMoreLabel = "Learn more",
}: ServiceCardProps) {
  return (
    <div className="group rounded-2xl border border-gray-100 bg-white p-8 transition-all hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-light text-primary transition-colors group-hover:bg-primary group-hover:text-white">
        <IconRenderer name={icon} />
      </div>
      <h3 className="font-heading font-semibold text-lg text-dark mb-3">{title}</h3>
      <p className="text-text-gray text-sm leading-relaxed mb-5">{description}</p>
      <Link
        href={`/services#${id}`}
        className="text-primary text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all"
      >
        {learnMoreLabel}
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-px">
          <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
    </div>
  );
}

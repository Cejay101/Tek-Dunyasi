interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeading({
  label,
  title,
  description,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${centered ? "mx-auto text-center" : ""} mb-16`}>
      {label && (
        <span className="inline-block text-primary text-sm font-semibold tracking-wide uppercase mb-3">
          {label}
        </span>
      )}
      <h2 className="font-heading font-bold text-3xl sm:text-4xl text-dark mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-text-gray text-lg leading-relaxed">{description}</p>
      )}
    </div>
  );
}

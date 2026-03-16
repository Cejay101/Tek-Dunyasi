import Link from "next/link";

interface ButtonProps {
  href: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-medium rounded-xl transition-all";

  const variants = {
    primary:
      "bg-primary text-white hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25",
    secondary:
      "bg-light text-primary hover:bg-primary hover:text-white",
    outline:
      "border-2 border-gray-200 text-dark hover:border-primary hover:text-primary",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </Link>
  );
}

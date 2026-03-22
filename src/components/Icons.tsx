import { Icon } from "@iconify/react";

interface IconProps {
  className?: string;
}

const iconMap: Record<string, string> = {
  globe: "lucide:globe",
  refresh: "lucide:refresh-cw",
  layout: "lucide:layout-template",
  zap: "lucide:zap",
  search: "lucide:search",
  shield: "lucide:shield-check",
};

export function IconRenderer({
  name,
  className = "w-6 h-6",
}: {
  name: string;
  className?: string;
}) {
  const iconName = iconMap[name] || "lucide:globe";
  return <Icon icon={iconName} className={className} />;
}

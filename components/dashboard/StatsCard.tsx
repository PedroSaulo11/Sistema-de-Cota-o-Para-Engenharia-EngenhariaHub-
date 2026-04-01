import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  color: "orange" | "blue" | "green" | "purple";
  trend?: { value: string; positive: boolean };
}

const colorMap = {
  orange: { bg: "bg-orange-50", icon: "bg-orange-500", text: "text-orange-600", border: "border-orange-100" },
  blue:   { bg: "bg-blue-50",   icon: "bg-blue-500",   text: "text-blue-600",   border: "border-blue-100" },
  green:  { bg: "bg-emerald-50",icon: "bg-emerald-500",text: "text-emerald-600",border: "border-emerald-100" },
  purple: { bg: "bg-purple-50", icon: "bg-purple-500", text: "text-purple-600", border: "border-purple-100" },
};

export function StatsCard({ title, value, subtitle, icon: Icon, color, trend }: StatsCardProps) {
  const c = colorMap[color];
  return (
    <div className={`bg-white rounded-2xl border ${c.border} p-5 shadow-sm hover:shadow-md transition-shadow`}>
      <div className="flex items-start justify-between mb-4">
        <div className={`${c.bg} p-2.5 rounded-xl`}>
          <Icon className={`w-5 h-5 ${c.text}`} />
        </div>
        {trend && (
          <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
            trend.positive ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-500"
          }`}>
            {trend.positive ? "↑" : "↓"} {trend.value}
          </span>
        )}
      </div>
      <div className="text-2xl font-extrabold text-gray-900 mb-0.5">{value}</div>
      <div className="text-sm font-semibold text-gray-700">{title}</div>
      {subtitle && <div className="text-xs text-gray-400 mt-0.5">{subtitle}</div>}
    </div>
  );
}

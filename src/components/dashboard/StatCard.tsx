import { useEffect, useState } from "react";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: number;
  prefix?: string;
  suffix?: string;
  change: number;
  icon: React.ReactNode;
  delay?: number;
}

export const StatCard = ({
  title,
  value,
  prefix = "",
  suffix = "",
  change,
  icon,
  delay = 0,
}: StatCardProps) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 1500;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, isVisible]);

  const formatValue = (val: number) => {
    if (val >= 1000000) return (val / 1000000).toFixed(1) + "M";
    if (val >= 1000) return (val / 1000).toFixed(1) + "K";
    return val.toLocaleString();
  };

  const TrendIcon = change > 0 ? TrendingUp : change < 0 ? TrendingDown : Minus;
  const trendColor = change > 0 ? "text-success" : change < 0 ? "text-destructive" : "text-muted-foreground";

  return (
    <div
      className={cn(
        "glass glass-hover rounded-xl p-6 card-shadow transition-all duration-500",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      )}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 rounded-lg bg-primary/10 text-primary glow">
          {icon}
        </div>
        <div className={cn("flex items-center gap-1 text-sm font-medium", trendColor)}>
          <TrendIcon className="w-4 h-4" />
          <span>{Math.abs(change)}%</span>
        </div>
      </div>
      <p className="text-muted-foreground text-sm mb-1">{title}</p>
      <p className="text-3xl font-bold tracking-tight">
        {prefix}
        {formatValue(displayValue)}
        {suffix}
      </p>
    </div>
  );
};

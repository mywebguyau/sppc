import { CrossIcon } from "@/components/brand/CrossLogo";
import { cn } from "@/lib/utils";

type EyebrowProps = {
  children: React.ReactNode;
  variant?: "default" | "hero" | "dark";
  showIcon?: boolean;
  className?: string;
};

export function Eyebrow({
  children,
  variant = "default",
  showIcon = false,
  className,
}: EyebrowProps) {
  const colors = {
    default: "text-oxblood",
    hero: "text-gold-light",
    dark: "text-gold-light",
  };

  return (
    <p
      className={cn(
        "flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.12em]",
        colors[variant],
        className,
      )}
    >
      {showIcon && <CrossIcon />}
      {children}
    </p>
  );
}

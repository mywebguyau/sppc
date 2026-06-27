import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded border border-oxblood/12 bg-parchment-card p-6",
        className,
      )}
    >
      {children}
    </div>
  );
}

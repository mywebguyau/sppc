import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "nav";
  className?: string;
};

export function Button({ href, children, variant = "primary", className }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-[3px] text-[15px] font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold";

  const variants = {
    primary: "bg-gold px-[26px] py-3.5 text-oxblood-dark hover:bg-gold-light",
    secondary:
      "border-[1.5px] border-parchment/45 px-[26px] py-3.5 text-parchment hover:border-parchment/70",
    nav: "whitespace-nowrap bg-oxblood px-[18px] py-2.5 text-sm text-white hover:bg-oxblood-dark",
  };

  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      {children}
    </Link>
  );
}

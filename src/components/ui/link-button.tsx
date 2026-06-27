import Link from "next/link";
import type { VariantProps } from "class-variance-authority";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type LinkButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
} & VariantProps<typeof buttonVariants>;

export function LinkButton({
  href,
  children,
  variant = "gold",
  size = "lg",
  className,
  onClick,
}: LinkButtonProps) {
  return (
    <Button
      asChild
      variant={variant}
      size={size}
      className={cn(
        variant === "gold" || variant === "hero-outline" || variant === "nav"
          ? "h-auto px-[26px] py-3.5"
          : undefined,
        variant === "nav" ? "px-[18px] py-2.5" : undefined,
        className,
      )}
    >
      <Link href={href} onClick={onClick}>
        {children}
      </Link>
    </Button>
  );
}

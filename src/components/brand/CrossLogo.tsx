type CrossLogoProps = {
  className?: string;
  variant?: "oxblood" | "gold";
};

export function CrossLogo({ className = "h-[30px] w-[30px]", variant = "oxblood" }: CrossLogoProps) {
  const bg = variant === "oxblood" ? "#6E1E2B" : "#C8A24A";
  const stroke = variant === "oxblood" ? "#C8A24A" : "#4E1521";

  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="40" height="40" rx="3" fill={bg} />
      <path
        d="M20 7v18M14 13h12M11 25h18M9 30h22M7 34h26"
        stroke={stroke}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CrossIcon({ className = "h-[14px] w-[14px]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 14 14"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M7 1v12M3 5h8M2 9.5h10M1 12h12"
        stroke="#E4CD8E"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

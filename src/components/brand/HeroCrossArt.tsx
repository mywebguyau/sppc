export function HeroCrossArt({ className = "w-full max-w-[280px]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="100" cy="95" r="78" stroke="#C8A24A" strokeWidth="0.75" opacity="0.35" />
      <circle cx="100" cy="95" r="60" stroke="#C8A24A" strokeWidth="0.75" opacity="0.5" />
      <path d="M100 30v110" stroke="#E4CD8E" strokeWidth="3" strokeLinecap="round" />
      <path d="M68 65h64" stroke="#E4CD8E" strokeWidth="3" strokeLinecap="round" />
      <rect x="50" y="170" width="100" height="10" rx="1" fill="#C8A24A" />
      <rect x="60" y="184" width="80" height="10" rx="1" fill="#C8A24A" opacity="0.85" />
      <rect x="70" y="198" width="60" height="10" rx="1" fill="#C8A24A" opacity="0.7" />
    </svg>
  );
}

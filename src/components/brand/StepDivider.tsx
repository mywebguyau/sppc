export function StepDivider({ className = "h-12 w-[120px]" }: { className?: string }) {
  return (
    <div className="flex justify-center py-2" aria-hidden="true">
      <svg viewBox="0 0 120 48" fill="none" className={className}>
        <path d="M60 4v26" stroke="#C8A24A" strokeWidth="2" strokeLinecap="round" />
        <path d="M48 16h24" stroke="#C8A24A" strokeWidth="2" strokeLinecap="round" />
        <rect x="30" y="34" width="60" height="4" fill="#C8A24A" />
        <rect x="38" y="40" width="44" height="4" fill="#C8A24A" opacity="0.6" />
        <rect x="46" y="46" width="28" height="2" fill="#C8A24A" opacity="0.35" />
      </svg>
    </div>
  );
}

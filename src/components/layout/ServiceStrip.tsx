import { siteConfig } from "@/content/site";

export function ServiceStrip() {
  return (
    <div className="border-b border-border bg-card">
      <div className="mx-auto flex max-w-[1100px] flex-wrap items-center justify-between gap-6 px-6 py-5">
        {siteConfig.services.map((service, index) => (
          <div key={service.label} className="flex items-center gap-6">
            {index > 0 && (
              <div
                className="hidden h-[34px] w-px bg-border md:block"
                aria-hidden="true"
              />
            )}
            <div>
              <div className="text-meta mb-0.5 text-xs font-semibold uppercase tracking-[0.08em]">
                {service.label}
              </div>
              <div className="text-base font-semibold text-foreground">{service.value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

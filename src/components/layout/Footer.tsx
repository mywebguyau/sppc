import Link from "next/link";
import { CrossLogo } from "@/components/brand/CrossLogo";
import { footerExploreLinks } from "@/content/navigation";
import { siteConfig } from "@/content/site";

export function Footer() {
  return (
    <footer className="mt-auto bg-oxblood-dark px-6 py-14 text-[#D8CFC0]">
      <div className="mx-auto grid max-w-[1100px] gap-9 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <div className="mb-3.5 flex items-center gap-2.5">
            <CrossLogo className="h-[26px] w-[26px]" variant="gold" />
            <span className="font-display text-lg font-semibold text-parchment">
              {siteConfig.name}
            </span>
          </div>
          <p className="text-[14.5px] leading-relaxed text-[#C2B7A6]">
            {siteConfig.address.street}
            <br />
            {siteConfig.address.suburb}, {siteConfig.address.country}
          </p>
          <p className="mt-2.5 text-[14.5px] leading-relaxed text-[#C2B7A6]">
            A parish of the Holy Apostolic Catholic
            <br />
            Assyrian Church of the East, {siteConfig.archdiocese}.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.06em] text-parchment">
            Explore
          </h4>
          <ul className="space-y-2.5 text-[14.5px]">
            {footerExploreLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-gold-light">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.06em] text-parchment">
            Contact
          </h4>
          <ul className="space-y-2.5 text-[14.5px]">
            <li>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-gold-light">
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="hover:text-gold-light"
              >
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={siteConfig.social.facebook} className="hover:text-gold-light">
                Facebook
              </a>
              {" · "}
              <a href={siteConfig.social.instagram} className="hover:text-gold-light">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-[1100px] flex-wrap justify-between gap-3 border-t border-parchment/12 pt-5 text-[13px] text-[#A89C8A]">
        <span>© {siteConfig.fullName}, {siteConfig.location}.</span>
        <span>Built with care for the parish.</span>
      </div>
    </footer>
  );
}

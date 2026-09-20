import { site, telHref, whatsappHref, hasPhone, hasWhatsApp } from "@/content/site";
import { directionsHref } from "@/lib/maps";

const links = [
  { href: "#explore", label: "Explore" },
  { href: "#celebrations", label: "Celebrations" },
  { href: "#reviews", label: "Reviews" },
  { href: "#visit", label: "Visit" },
];

export function Footer() {
  return (
    <footer className="border-t border-ink/8 px-5 pt-16 pb-28 md:pb-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-4xl tracking-tight">{site.name}</p>
          <p className="mt-3 text-ink-soft">
            {site.locality}, {site.city}
          </p>
          <p className="mt-8 max-w-xs text-sm text-ink-soft">
            Made for celebrations in Kanpur.
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="nav-link text-ink-soft hover:text-ink">
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={directionsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link text-ink-soft hover:text-ink"
              >
                Directions
              </a>
            </li>
            {hasPhone && telHref ? (
              <li>
                <a href={telHref} className="nav-link text-ink-soft hover:text-ink">
                  Call
                </a>
              </li>
            ) : null}
            {hasWhatsApp && whatsappHref ? (
              <li>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link text-ink-soft hover:text-ink"
                >
                  WhatsApp
                </a>
              </li>
            ) : null}
          </ul>
        </nav>
      </div>
    </footer>
  );
}

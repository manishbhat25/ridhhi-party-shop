/**
 * Shop facts used across the site, schema, and CTAs.
 *
 * Only fill fields you know are real. Empty strings / null / [] are omitted
 * from the UI and from JSON-LD — nothing here is invented for marketing.
 *
 * Fill later:
 *   phone, whatsapp, streetAddress, postalCode, openingHoursDisplay,
 *   openingHours, geo, mapsUrl, mapsEmbedUrl, sameAs
 *
 * Production URL: set NEXT_PUBLIC_SITE_URL (e.g. https://ridhhipartyshop.com)
 */
export const site = {
  name: "Ridhhi Party Shop",
  locality: "Kalyanpur",
  city: "Kanpur",
  region: "Uttar Pradesh",
  country: "IN",
  countryName: "India",

  /** E.164 or local, e.g. "+91 9XXXXXXXXX". Empty = hide Call. */
  phone: "",
  /** Digits with country code, e.g. "919XXXXXXXXX". Empty = hide WhatsApp. */
  whatsapp: "",

  streetAddress: "",
  postalCode: "",

  /** Human-readable hours for the visit section. Empty = omit. */
  openingHoursDisplay: "",
  /** schema.org openingHours strings, e.g. "Mo-Sa 10:00-21:00". */
  openingHours: [] as string[],

  geo: null as { lat: number; lng: number } | null,

  /** Direct Google Maps place URL. Empty = search-based directions. */
  mapsUrl: "",
  /** Embed URL. Empty = search-based embed, loaded only on demand. */
  mapsEmbedUrl: "",

  sameAs: [] as string[],

  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;

export type SiteConfig = typeof site;

export const hasPhone = Boolean(site.phone);
export const hasWhatsApp = Boolean(site.whatsapp);

export const telHref = hasPhone
  ? `tel:${site.phone.replace(/[^\d+]/g, "")}`
  : undefined;

export const whatsappHref = hasWhatsApp
  ? `https://wa.me/${site.whatsapp.replace(/\D/g, "")}`
  : undefined;

export const displayLocation = `${site.locality}, ${site.city}`;
export const fullLocation = `${site.locality}, ${site.city}, ${site.region}, ${site.countryName}`;

export const mapsSearchQuery = site.streetAddress
  ? `${site.name}, ${site.streetAddress}, ${site.locality}, ${site.city}`
  : `${site.name} ${site.locality} ${site.city}`;

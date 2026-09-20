import { site, fullLocation } from "@/content/site";

export function JsonLd() {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: site.name,
    description: `Party supplies, gifts, balloons and decorations in ${site.locality}, ${site.city}.`,
    url: site.siteUrl,
    address: {
      "@type": "PostalAddress",
      ...(site.streetAddress ? { streetAddress: site.streetAddress } : {}),
      addressLocality: site.locality,
      addressRegion: site.region,
      ...(site.postalCode ? { postalCode: site.postalCode } : {}),
      addressCountry: site.country,
    },
    areaServed: [site.locality, site.city, site.region],
  };

  if (site.phone) data.telephone = site.phone;
  if (site.openingHours.length) data.openingHours = [...site.openingHours];
  if (site.sameAs.length) data.sameAs = [...site.sameAs];
  if (site.geo) {
    data.geo = {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    };
  }

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.siteUrl,
    description: `Neighbourhood party and gift shop in ${fullLocation}.`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}

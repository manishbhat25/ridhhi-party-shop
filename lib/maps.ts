import { mapsSearchQuery, site } from "@/content/site";

const encodedQuery = encodeURIComponent(mapsSearchQuery);

export const directionsHref =
  site.mapsUrl ||
  `https://www.google.com/maps/dir/?api=1&destination=${encodedQuery}`;

export const mapsSearchHref =
  site.mapsUrl ||
  `https://www.google.com/maps/search/?api=1&query=${encodedQuery}`;

export const mapsEmbedSrc =
  site.mapsEmbedUrl ||
  `https://maps.google.com/maps?q=${encodedQuery}&z=16&output=embed`;

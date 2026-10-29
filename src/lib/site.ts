/** Shared business facts for SEO, schema, and visible copy. Keep NAP consistent. */

export const siteUrl = "https://bitterrootboudoir.com";

export const business = {
  name: "Bitterroot Boudoir",
  legalName: "Bitterroot Boudoir",
  description:
    "Premium boudoir photography based in Stevensville, Montana, serving Stevensville, Hamilton, Missoula, and the Bitterroot Valley.",
  email: "hello@bitterrootboudoir.com",
  telephone: "+14062099806",
  telephoneDisplay: "(406) 209-9806",
  priceRange: "$$",
  priceRangeDetail: "Packages from $1,095",
  locality: "Stevensville",
  region: "MT",
  country: "US",
  serviceAreaText:
    "Stevensville, Hamilton, Missoula, and the Bitterroot Valley",
  areaServed: [
    "Stevensville",
    "Hamilton",
    "Missoula",
    "Bitterroot Valley",
  ] as const,
  sameAs: ["https://www.instagram.com/bitterrootboudoir/"] as const,
  defaultOgImage: "/images/home/hero.webp",
  logo: "/images/brand/logo-full.png",
};

export function absoluteUrl(path: string): string {
  return new URL(path, siteUrl).href;
}

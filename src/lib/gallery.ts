import type { ImageMetadata } from "astro";

export type GalleryImage = {
  id: string;
  order: number;
  home: boolean;
  src: ImageMetadata;
};

const modules = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/gallery/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
  { eager: true },
);

function parseName(path: string): { order: number; home: boolean } | null {
  const file = path.split("/").pop() ?? "";
  const base = file.replace(/\.[^.]+$/, "");
  const match = base.match(/^(\d+)(?:[_-]home)?(?:[_-].*)?$/i);
  if (!match) return null;

  return {
    order: Number(match[1]),
    home: /(?:^|[_-])home(?:[_-]|$)/i.test(base),
  };
}

export function getGalleryImages(): GalleryImage[] {
  return Object.entries(modules)
    .map(([path, mod]) => {
      const parsed = parseName(path);
      if (!parsed) return null;

      return {
        id: String(parsed.order).padStart(2, "0"),
        order: parsed.order,
        home: parsed.home,
        src: mod.default,
      };
    })
    .filter((image): image is GalleryImage => image !== null)
    .sort((a, b) => a.order - b.order);
}

export function getHomeImages(limit = 6): GalleryImage[] {
  return getGalleryImages()
    .filter((image) => image.home)
    .slice(0, limit);
}

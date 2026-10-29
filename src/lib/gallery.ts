import type { ImageMetadata } from "astro";

export type GalleryImage = {
  id: string;
  order: number | null;
  home: boolean;
  src: ImageMetadata;
};

const modules = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/gallery/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
  { eager: true },
);

function parseName(path: string): { order: number | null; home: boolean; id: string } {
  const file = path.split("/").pop() ?? "";
  const base = file.replace(/\.[^.]+$/, "");
  const home = /(?:^|[_-])home(?:[_-]|$)/i.test(base);
  const numbered = base.match(/^(\d+)(?:[_-]|$)/);

  if (numbered) {
    const order = Number(numbered[1]);
    return {
      order,
      home,
      id: String(order).padStart(2, "0"),
    };
  }

  return {
    order: null,
    home,
    id: base,
  };
}

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function getGalleryImages(): GalleryImage[] {
  const images = Object.entries(modules).map(([path, mod]) => {
    const parsed = parseName(path);
    return {
      id: parsed.id,
      order: parsed.order,
      home: parsed.home,
      src: mod.default,
    };
  });

  const numbered = images
    .filter((image) => image.order !== null)
    .sort((a, b) => (a.order as number) - (b.order as number));

  const unnumbered = shuffle(images.filter((image) => image.order === null));

  return [...numbered, ...unnumbered];
}

export function getHomeImages(limit = 6): GalleryImage[] {
  return getGalleryImages()
    .filter((image) => image.home)
    .slice(0, limit);
}

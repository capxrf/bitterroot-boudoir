/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly PUBLIC_FORMSPREE_ID?: string;
  readonly PUBLIC_COMING_SOON?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

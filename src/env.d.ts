/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly PUBLIC_FORMSPREE_ID?: string;
  readonly PUBLIC_COMING_SOON?: string;
  /** Cloudflare Turnstile site key (public). Secret key goes in Formspree only. */
  readonly PUBLIC_TURNSTILE_SITE_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

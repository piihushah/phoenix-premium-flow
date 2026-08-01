import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import icon from "astro-icon";

export default defineConfig({
  site: "https://phoenixwebstudio.com",

  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },

  integrations: [
    icon(),

    sitemap({
      filter: (page) => !page.includes("/404"),
    }),

    robotsTxt({
      policy: [
        {
          userAgent: "*",
          allow: "/",
          disallow: ["/404"],
        },
      ],
    }),
  ],
});

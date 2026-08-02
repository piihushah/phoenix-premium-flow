import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://www.phoenixpremiumclear.com.au",

  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },

  vite: {
    plugins: [tailwindcss()],
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

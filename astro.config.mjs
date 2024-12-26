// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import partytown from "@astrojs/partytown";
import vercel from "@astrojs/vercel/serverless";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    site: "https://pagaconcripto.com.co",
    integrations: [
        tailwind(),
        react(),
        partytown({
            config: {
                forward: ["dataLayer.push", "gtag"],
            },
        }),
        sitemap(),
    ],
    output: "server",
    adapter: vercel({}),
});

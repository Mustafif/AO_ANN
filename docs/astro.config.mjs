// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "AO_ANN",
      social: {
        github: "https://github.com/mustafif/ao_ann",
      },
      sidebar: [
        {
          label: "Documentation",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Getting Started", slug: "get_started" },
            { label: "Dataset Handling", slug: "dataset" },
          ],
        },
      ],
    }),
  ],
});

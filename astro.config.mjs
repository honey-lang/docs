import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
	site: "https://honey-lang.github.io",
	integrations: [
		starlight({
			title: "Honey",
			social: {
				github: "https://github.com/honey-lang/honey",
			},
			sidebar: [
				{
					label: "Guides",
					items: [
						{ label: "Guide", slug: "guide" },
					],
				},
				{
					label: "Reference",
					autogenerate: { directory: "reference" },
				},
			],
		}),
	],
});

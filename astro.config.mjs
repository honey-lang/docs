import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	site: "https://honey-lang.org",
	integrations: [
		starlight({
			title: "honey",
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
			customCss: ["./src/tailwind.css"],
		}),
		tailwind({ applyBaseStyles: false }),
	],
});

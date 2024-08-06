import starlightPlugin from "@astrojs/starlight-tailwind";

// Generated color palettes
const accent = { 200: "#ddc4a4", 600: "#926000", 900: "#462c00", 950: "#331f02" };
const gray = { 100: "#f6f6f9", 200: "#ededf4", 300: "#c1c1c9", 400: "#8a8a99", 500: "#565764", 700: "#373743", 800: "#252531", 900: "#17181d" };

/** @type {import("tailwindcss").Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: { accent, gray },
		},
		fontFamily: {
			"nunito-sans": "'Nunito Sans'",
		}
	},
	plugins: [starlightPlugin()],
};
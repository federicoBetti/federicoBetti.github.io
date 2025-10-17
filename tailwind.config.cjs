/** @type {import('tailwindcss').Config} */
const themes = require("daisyui/src/theming/themes");

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
	daisyui: {
		// Define custom light and dark themes using the same brand primary
		themes: [
			{
				fb: {
					...themes["[data-theme=light]"],
					primary: "#3F6CA9",
				},
			},
			{
				"fb-dark": {
					...themes["[data-theme=dark]"],
					primary: "#3F6CA9",
				},
			},
		], // true: all themes | false: only light + dark | array: specific themes
		darkTheme: "fb-dark", // use custom dark theme so primary isn't purple
		logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
	}
}

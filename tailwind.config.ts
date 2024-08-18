import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}"
	],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: "1.6rem",
				md: "2.4rem",
			}
		},
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
			},
			colors: {
				primary: "#633CFF",
				primary_light: "#BEADFF",
				primary_lighter: "#EFEBFF",
				dark_grey: "#333333",
				grey: "#737373",
				light_grey: "#FAFAFA",
				white: "#FFFFFF",
				red: "#FF3939",
				borders: "#D9D9D9",
				placeholder: "#EEEEEE"
			},
			boxShadow: {
				drop_primary: "0 0 3.2rem 0 rgba(99, 60, 255, .25)",
				drop_grey: "0 0 3.2rem 0 rgba(0, 0, 0, .10)",
			}
		}
	},
	plugins: []
};
export default config;

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	mode: "jit",
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/**/*.html"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter var", ...defaultTheme.fontFamily.sans],
                mono: ["Source Code Pro", ...defaultTheme.fontFamily.mono]
			},
		},
	},
	plugins: [],
};

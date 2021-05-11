const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	mode: "jit",
	purge: [
		"./src/**/*.{html,js,svelte,ts}",
	],
	theme: {
		extend: {
			fontFamily: {
				opensans: ['Open Sans']
			}
		},
	},
	plugins: [],
};

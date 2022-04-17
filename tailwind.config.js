module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			typography: {
				DEFAULT: {
					css: {
						pre: {
							backgroundColor: 'transparent',
						},
					},
				},
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
};

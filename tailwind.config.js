module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				'mi-yellow': 'rgb(247, 246, 243)',
			},
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

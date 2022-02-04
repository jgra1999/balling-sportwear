module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			spacing: {
				logo: '20.5rem',
				98: '26rem',
				100: '28rem',
				102: '30rem',
				104: '32rem',
				108: '36.30rem',
				110: '40rem',
				112: '44rem',
				outfits: '600px',
				categorias: '720px',
				header: '800px',
				grande: '74rem',
			},
			borderWidth: {
				DEFAULT: '1px',
				0: '0',
				2: '2px',
				3: '3px',
				4: '4px',
				6: '6px',
			},
			colors: {
				primary: '#181818',
				secondary: '#262324',
			},
			backgroundImage: {
				womens: "url('/img/balling womens.png')",
				mens: "url('/img/balling mens.png')",
			},
		},
	},
	variants: {
		extend: {
			borderWidth: ['hover', 'focus'],
			height: ['hover', 'focus'],
			display: ['group-hover'],
			opacity: ['group-hover, hover'],
			inset: ['group-hover, hover'],
			textColor: ['active'],
		},
	},
	plugins: [],
};

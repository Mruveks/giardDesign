/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./dist/*.{html,js}"],
	theme: {
		screens: {
			sm: { min: "250px", max: "759px" },
			md: { min: "760px", max: "1239px" },
			lg: "1240px",
		},
		colors: {
			beige: "#DCC1AB",
			gray: "#F5F0EC",
			green: "#1B5B31",
			black: "#111",
			white: "#fff",
		},
		fontFamily: {
			primary: ["Montserrat"],
			secondary: ["Inter"],
		},

		extend: {
			backgroundImage: {
				about: "url('/dist/img/hero-photo.jpg')",
			},
		},
	},
	plugins: [],
};

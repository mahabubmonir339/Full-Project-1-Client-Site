module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#22d3ee",
          secondary: "#f6d860",
          accent: "#4b5563",
          neutral: "#212121",
          colorA: "#0FCFEC",
          colorB: "#19D3AE",
          colorC: "#3A4256",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}

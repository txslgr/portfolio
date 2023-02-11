/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      'sans': [
        "Montserrat",
        "Helvetica Neue",
        "Arial",
				"Noto Sans JP",
        "Hiragino Kaku Gothic ProN",
        "Hiragino Sans",
        "Meiryo",
        "sans-serif",
      ],
    },
    extend: {},
  },
  plugins: [],
};

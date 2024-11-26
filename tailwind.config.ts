import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightOrange: "#fe6e44",
        // darkOrange: "rgb(255,77,17)",
        darkGold: "#ffd700",
        darkGoldHover: "#B8860B",
        lightText: "#888888",
        midGrayText: "#757575",
        charcoalText: "#333333",
        accent: "#000000",
        accentWhite: "#ffffff",
        lightRed: "#ef3636",
        lightGreen: "#41ce09",
        bgLight: "#F9f9f9",
        deepBlue: "#00509E",
        khaki: "#F0E68C",
      },
    },
  },
  plugins: [],
} satisfies Config;

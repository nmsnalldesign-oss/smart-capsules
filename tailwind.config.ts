import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0a1628", /* Deep Blue */
          light: "#0f2847",
          accent: "#00e5c7", /* Neon Cyan */
          secondary: "#00b4d8", /* Lighter blue/cyan */
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        heading: ['var(--font-outfit)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(circle at 50% 50%, rgba(0, 229, 199, 0.15) 0%, rgba(10, 22, 40, 0) 50%)',
      }
    },
  },
  plugins: [],
};
export default config;

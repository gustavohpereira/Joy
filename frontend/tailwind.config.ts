import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {

        'content-bg': '#EEEEEE',

        // sidebar variables
          'sidebar-bg': '#CA2031',
          'sidebar-bg-hover': '#E12235',
          'sidebar-border': '#990000',
          'sidebar-text': '#CCCCCC',
          'sidebar-text-hover': '#FFFFFF',

        //text variables
          'subtitle-color': '#8B8B8B'
      },
      width: {
        'sidebar-width': '10%',
      }
    },
  },
  plugins: [],
};
export default config;

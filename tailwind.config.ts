import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#0A0F0A",
          ink: "#0E1A12",
          green: {
            50: "#EAF7EE",
            100: "#CDEAD6",
            200: "#9DD5AC",
            300: "#6DBF83",
            400: "#3EAA5A",
            500: "#1F8F3E",
            600: "#127031",
            700: "#0C5424",
            800: "#073A19",
            900: "#03200E",
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(ellipse at top, rgba(31,143,62,0.18), transparent 60%)",
        "hero-noise":
          "linear-gradient(180deg, rgba(10,15,10,0.0) 0%, rgba(10,15,10,0.85) 100%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shine: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shine: "shine 3s linear infinite",
        fadeUp: "fadeUp 0.8s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;

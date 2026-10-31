import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-syne)", "system-ui", "sans-serif"],
        body: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      fontWeight: { 600: "600", 700: "700", 800: "800" },
      colors: {
        brand: {
          green: "#25D366",
          dark: "#128C7E",
          light: "#DCF8C6",
          bg: "#F0FDF4",
        },
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease both",
        "fade-in": "fadeIn 0.4s ease both",
        float: "float 4s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      boxShadow: {
        glow: "0 0 32px rgba(37,211,102,0.35)",
        "glow-sm": "0 0 16px rgba(37,211,102,0.2)",
        card: "0 2px 20px rgba(0,0,0,0.06)",
        "card-lg": "0 8px 40px rgba(0,0,0,0.12)",
      },
    },
  },
  plugins: [],
};
export default config;

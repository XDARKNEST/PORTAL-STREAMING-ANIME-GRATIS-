import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#ef2b3d",
          redGlow: "#ff3b4d",
        },
      },
      boxShadow: {
        glow: "0 0 40px rgba(239,43,61,0.45)",
        glowSoft: "0 0 80px rgba(239,43,61,0.25)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
export default config;

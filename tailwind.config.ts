import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#08111f",
        graphite: "#18202d",
        cyanline: "#22d3ee",
        signal: "#7dd3fc",
        labgreen: "#34d399",
        alloy: "#f8fafc",
        amberglow: "#f59e0b"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"]
      },
      boxShadow: {
        panel: "0 20px 70px rgba(8, 17, 31, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;

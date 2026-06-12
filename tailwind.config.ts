import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#ffffff",
          50: "#fbfbfa",
          100: "#f5f5f3",
          200: "#ececea",
          300: "#dededb",
          400: "#c2c2bf"
        },
        ink: {
          DEFAULT: "#0b0b0c",
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#c9c9c9",
          300: "#9a9a9a",
          400: "#5d5d5d",
          500: "#3a3a3a",
          600: "#262626",
          700: "#1a1a1a",
          800: "#111111",
          900: "#0b0b0c",
          950: "#050506"
        },
        charcoal: {
          50: "#f4f4f5",
          100: "#e4e4e6",
          200: "#c7c7cb",
          300: "#9c9ca3",
          400: "#6e6e76",
          500: "#4a4a51",
          600: "#33333a",
          700: "#23232a",
          800: "#15151a",
          900: "#0a0a0d",
          950: "#040406"
        },
        emerald: {
          DEFAULT: "#10b981",
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
          800: "#065f46"
        }
      },
      borderOpacity: {
        DEFAULT: "1"
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif"
        ],
        display: ["Inter", "sans-serif"]
      },
      boxShadow: {
        glow: "0 10px 40px -10px rgba(16, 185, 129, 0.30)",
        soft: "0 8px 30px rgba(11, 11, 12, 0.08)",
        card: "0 1px 2px rgba(11, 11, 12, 0.04), 0 8px 24px rgba(11, 11, 12, 0.06)"
      },
      backgroundImage: {
        "grid-fade": "radial-gradient(circle at 50% 0%, rgba(16,185,129,0.10), transparent 60%)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" }
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
        shimmer: "shimmer 2.4s linear infinite",
        "fade-in": "fade-in 0.4s ease-out both"
      }
    }
  },
  plugins: []
};

export default config;

// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          pink: "#E5005B",
          blue: "#4565AD",
          cyan: "#4BBECF",
          purple: "#9C124F",
          dark: "#171C32",
          gray: "#706F6F",
        },
        neon: {
          blue: "#00D9FF",
          purple: "#9C27B0",
          pink: "#FF006E",
          green: "#39FF14",
        },
        dark: {
          space: "#0A0E27",
          navy: "#1A1A2E",
          slate: "#16213E",
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        "slide-up": "slideUp 0.5s ease-out",
        "fade-in": "fadeIn 0.8s ease-out",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px #00D9FF, 0 0 10px #00D9FF" },
          "100%": {
            boxShadow: "0 0 20px #00D9FF, 0 0 30px #00D9FF, 0 0 40px #00D9FF",
          },
        },
        slideUp: {
          "0%": { transform: "translateY(100px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

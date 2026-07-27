/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0B0D10",
        surface: "#14171C",
        surface2: "#1B1F26",
        border: "#262B33",
        accent: "#3E7BFA",
        accent2: "#8FB2FF",
        warn: "#F2A93B",
        ok: "#3DDC97",
        ink: "#E8ECF1",
        muted: "#8A93A3",
        faint: "#565E6C",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        grid: "linear-gradient(to right, #ffffff08 1px, transparent 1px), linear-gradient(to bottom, #ffffff08 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      boxShadow: {
        glow: "0 0 0 1px #3E7BFA33, 0 8px 30px -8px #3E7BFA4d",
        panel: "0 1px 0 0 #ffffff0a inset, 0 12px 40px -20px #000000b3",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.25 },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        rise: {
          "0%": { opacity: 0, transform: "translateY(14px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        blink: "blink 2.4s ease-in-out infinite",
        scanline: "scanline 3.5s linear infinite",
        rise: "rise 0.6s cubic-bezier(0.16,1,0.3,1) both",
      },
    },
  },
  plugins: [],
};

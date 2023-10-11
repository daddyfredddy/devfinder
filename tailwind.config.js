/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "kalas1": "#0079FF",
        "kalas2": "#697C9A",
        "kalas3": "#4B6A9B",
        "kalas4": "#2B3442",
        "kalas5": "#F6F8FF",
        "kalas6": "#FEFEFE",
        "kalas7": "#FFFFFF",
        "kalas8": "#141D2F",
        "kalas9": "#1E3A47",
        "kalas10": "#222731",
        "kalas11": "#1E2A47",
        "shado": "rgba(70, 96, 187, 0.20)",
      }
    },
    fontFamily: {
      fonty: ["Space Mono", "monospace"],
    }
  },
  plugins: [],
}


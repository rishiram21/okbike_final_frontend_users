module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeInDown: {
          '0%': { opacity: 0, transform: "translateY(-50px)" },
          '100%': { opacity: 1, transform: "translateY(0)" },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: "translateY(50px)" },
          '100%': { opacity: 1, transform: "translateY(0)" },
        },
        bounceIn: {
          '0%': { transform: "scale(0.9)", opacity: 0 },
          '50%': { transform: "scale(1.05)", opacity: 0.5 },
          '100%': { transform: "scale(1)", opacity: 1 },
        },
        zoomIn: {
          '0%': { transform: "scale(0.5)", opacity: 0 },
          '100%': { transform: "scale(1)", opacity: 1 },
        },
      },
      animation: {
        "fade-in-down": "fadeInDown 1s ease-out",
        "fade-in-up": "fadeInUp 1s ease-out",
        "bounce-in": "bounceIn 0.8s ease",
        "zoom-in": "zoomIn 0.5s ease-out",
        'spin-slow': 'spin 3s linear infinite', // Slower spinning animation
        pulse: 'pulse 2s infinite',
      },
      colors: {
        "custom-orange": "#FF9800",
        "custom-gray": "#F5F5F5",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        custom: {
          393939: "#393939",
          727272: "#727272",
          E8E8E8: "#E8E8E8",
          C4C4C4: "#C4C4C4",
        },
      },
      keyframes: {
        openModal: {
          "0%": { transform: "translateX(400px)" },
          "100%": { transform: "translateX(0px)" },
        },
      },
      animation: {
        openModal: "openModal 0.5s ease",
      },
      backgroundImage: {
        login_trampoline: "url('/images/login_trampoline.png')",
      },
      backgroundSize: {
        "150%": "150%",
      },
      width: {
        1200: 1200,
        600: 600,
      },
    },
  },
  plugins: [],
};

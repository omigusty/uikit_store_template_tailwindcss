module.exports = {
  content: ["./src/**/*.{html,js}", "node_modules/preline/dist/*.js"],
  theme: {
    extend: {},
  },
  plugins: [require("preline/plugin")],
};

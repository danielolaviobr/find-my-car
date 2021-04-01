const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    disable: true,
    dest: "public",
    disable: process.env.ENV === "development",
    register: true,
    scope: "/app",
    sw: "sw.js",
  },
});

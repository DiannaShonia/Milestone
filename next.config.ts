const { i18n } = require("./next-i18next.config.js");
const withVideos = require("next-videos");

module.exports = withVideos({
  i18n,
  reactStrictMode: true,
  images: { domains: ["techzy.app"] },
});

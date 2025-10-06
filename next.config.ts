const withVideos = require("next-videos");

module.exports = withVideos({
  reactStrictMode: true,
  images: { domains: ["techzy.app"] },
});

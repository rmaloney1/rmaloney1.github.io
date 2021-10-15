module.exports = {
  basePath: "/aboutme",
  assetPrefix: "/aboutme/",
  reactStrictMode: true,
  images: {
    loader: "imgix",
    path: "",
    domains: ["localhost", "wikimedia.org", "rmaloney1.github.io"],
  },
  env: {
    basePath: "/aboutme",
    url: "https://rmaloney1.github.io",
  },
};

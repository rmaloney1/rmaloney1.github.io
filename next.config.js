const path = "";
module.exports = {
  basePath: path,
  assetPrefix: path + "/",
  reactStrictMode: true,
  images: {
    loader: "imgix",
    path: "",
    domains: [
      "localhost",
      "wikimedia.org",
      "rmaloney1.github.io",
      "www.rohanmaloney.com",
    ],
  },
  env: {
    basePath: path,
    url: "https://rmaloney1.github.io",
  },
};

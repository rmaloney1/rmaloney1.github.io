module.exports = {
  basePath: "/out",
  assetPrefix: "/out/",
  reactStrictMode: true,
  images: {
    loader: "imgix",
    path: "",
    domains: ["localhost", "wikimedia.org"],
  },
  env: {
    basePath: "/out",
  },
};

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://howbright.github.io/comake2022"
      : "",
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["vercel.saleor.cloud", "img.youtube.com"],
    formats: ["image/avif", "image/webp"],
  },
});

/** @type {import('next').NextConfig} */
module.exports = {
  swcMinify: true,
  reactStrictMode: true,
  // TODO ダミー用のドメインなので後で消す
  images: {
    domains: ["i.imgur.com"],
  },
};

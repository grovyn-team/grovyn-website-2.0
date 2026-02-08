import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
      { protocol: "https", hostname: "i.pravatar.cc", pathname: "/**" },
      { protocol: "https", hostname: "*.ngrok-free.app", pathname: "/**" },
      { protocol: "https", hostname: "media.licdn.com", pathname: "/**" },
    ],
  },
};

export default withNextIntl(nextConfig);

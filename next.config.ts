import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/",
          destination: "/framer-pages/index.html",
        },
        {
          source: "/digital-marketing",
          destination: "/framer-pages/digital-marketing/index.html",
        },
        {
          source: "/work",
          destination: "/framer-pages/work/index.html",
        },
        {
          source: "/work/:slug",
          destination: "/framer-pages/work/:slug/index.html",
        },
        {
          source: "/blog",
          destination: "/framer-pages/blog/index.html",
        },
        {
          source: "/blog/:slug",
          destination: "/framer-pages/blog/:slug/index.html",
        },
        {
          source: "/404",
          destination: "/framer-pages/404.html",
        },
      ],
    };
  },
};

export default nextConfig;

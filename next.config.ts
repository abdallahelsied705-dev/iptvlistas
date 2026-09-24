import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" }
];

const isPreview = process.env.VERCEL_ENV === "preview";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // Todas as URLs canónicas terminam em "/". Sem isto, cada URL do sitemap respondia com redirect 308.
  trailingSlash: true,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: isPreview
          ? [...securityHeaders, { key: "X-Robots-Tag", value: "noindex, nofollow" }]
          : securityHeaders
      }
    ];
  },
  async redirects() {
    return [];
  }
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  poweredByHeader: false,
  compress: true,
  experimental: {
    reactCompiler: true,
    scrollRestoration: true,
    optimizePackageImports: ["react-hook-form", "yup", "axios"],
    serverActions: {
      bodySizeLimit: "100mb",
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  sassOptions: {
    silenceDeprecations: ["legacy-js-api"],
  },
  async rewrites() {
    return [
      {
        source: "/media-sources/:path*", // Public path you expose
        destination: "http://localhost:4447/static/:path*", // Actual external URL
      },
    ];
  },
  webpack(config, { dev, isServer }) {
    if (!dev && !isServer) {
      // Only modify the client-side production build
      if (config.optimization.minimizer) {
        const TerserPlugin = config.optimization.minimizer.find(
          (plugin) => plugin.constructor.name === "TerserPlugin"
        );

        if (TerserPlugin) {
          TerserPlugin.options.terserOptions.compress.drop_console = true;
        }
      }
    }
    return config;
  },
};

export default nextConfig;

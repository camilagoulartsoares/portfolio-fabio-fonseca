import type { NextConfig } from "next";

const repo = "portfolio-fabio-fonseca";
// Só usa basePath no GitHub Pages; no Vercel o site fica na raiz do domínio.
const forGitHubPages = process.env.GITHUB_PAGES === "true";
const basePath = forGitHubPages ? `/${repo}` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: forGitHubPages ? `${basePath}/` : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;

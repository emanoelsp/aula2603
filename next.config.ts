import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/contato", destination: "/paginas/contato" },
      { source: "/sobre", destination: "/paginas/sobre" },
      { source: "/produtos", destination: "/paginas/produto" },
      { source: "/produto/:id", destination: "/paginas/produto/:id" }
    ];
  },
};

export default nextConfig;

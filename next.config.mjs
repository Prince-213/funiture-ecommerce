/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hnuabzvdekpcvstajmkn.supabase.co",
        port: "",
      },

      {
        protocol: "https",
        hostname: "tailwindui.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;

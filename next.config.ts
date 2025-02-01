/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone", // Pastikan ini ada
};

export default nextConfig;

// const nextConfig = {
//   output: "export", // Ubah agar Next.js bisa diekspor statis
//   experimental: {
//     appDir: true, // Pastikan ini aktif jika pakai App Router
//   },
// };

// export default nextConfig;


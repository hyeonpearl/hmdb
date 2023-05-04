/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/movies/now_playing',
        destination: `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}`,
      },
    ];
  },
};

module.exports = nextConfig;

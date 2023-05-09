/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/movies/now_playing',
        destination: `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}&language=ko&page=1&region=KR`,
      },
      {
        source: '/api/movies/popular',
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=ko&page=1&region=KR`,
      },
      {
        source: '/api/movies/top_rated',
        destination: `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=ko&page=1&region=KR`,
      },
    ];
  },
};

module.exports = nextConfig;

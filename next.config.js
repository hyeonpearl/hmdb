/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      // 영화 리스트 API
      {
        source: '/api/movie/now_playing',
        destination: `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}&language=ko&page=1&region=KR`,
      },
      {
        source: '/api/movie/popular',
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=ko&page=1&region=KR`,
      },
      {
        source: '/api/movie/top_rated',
        destination: `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=ko&page=1&region=KR`,
      },
      // 영화 상세 정보 API
      {
        source: '/api/movie/:id',
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${process.env.API_KEY}&language=ko`,
      },
      // 비슷한 영화 목록 API
      {
        source: '/api/movie/:id/recommendations',
        destination: `https://api.themoviedb.org/3/movie/:id/recommendations?api_key=${process.env.API_KEY}&language=ko&page=1`,
      },
      // TV 리스트 API
      {
        source: '/api/tv/trending',
        destination: `https://api.themoviedb.org/3/trending/tv/day?api_key=${process.env.API_KEY}&language=ko&page=1`,
      },
      {
        source: '/api/tv/top_rated',
        destination: `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.API_KEY}&language=ko&page=1`,
      },
      // TV 상세 정보 API
      {
        source: '/api/tv/:id',
        destination: `https://api.themoviedb.org/3/tv/:id?api_key=${process.env.API_KEY}&language=ko`,
      },
      // 비슷한 TV 목록 API
      {
        source: '/api/tv/:id/recommendations',
        destination: `https://api.themoviedb.org/3/tv/:id/recommendations?api_key=${process.env.API_KEY}&language=ko&page=1`,
      },
    ];
  },
};

module.exports = nextConfig;

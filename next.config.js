/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      // 영화 리스트 API
      {
        source: '/api/movie/:request',
        destination: `https://api.themoviedb.org/3/movie/:request?api_key=${process.env.API_KEY}&language=ko&page=1&region=KR`,
      },
      // 영화 상세 정보 API
      {
        source: '/api/movie/:id/recommendations',
        destination: `https://api.themoviedb.org/3/movie/:id/recommendations?api_key=${process.env.API_KEY}&language=ko&page=1`,
      },
      // TV 리스트 API
      {
        source: '/api/tv/:request',
        destination: `https://api.themoviedb.org/3/tv/:request?api_key=${process.env.API_KEY}&language=ko&page=1`,
      },
      // TV 상세 정보 API
      {
        source: '/api/tv/:id/recommendations',
        destination: `https://api.themoviedb.org/3/tv/:id/recommendations?api_key=${process.env.API_KEY}&language=ko&page=1`,
      },
      // 검색 API
      {
        source: '/api/search/:query',
        destination: `https://api.themoviedb.org/3/search/multi?api_key=${process.env.API_KEY}&query=:query&include_adult=true&language=ko&page=1`,
      },
    ];
  },
};

module.exports = nextConfig;

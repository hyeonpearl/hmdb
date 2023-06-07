/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      // 영화 리스트 API
      {
        source: '/api/movie/:request/:page',
        destination: `https://api.themoviedb.org/3/movie/:request?api_key=${process.env.API_KEY}&language=ko&page=:page&region=KR`,
      },
      // 영화 상세 정보 API
      {
        source: '/api/movie/:id',
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${process.env.API_KEY}&language=ko`,
      },
      // 추천 영화 목록 API
      {
        source: '/api/movie/:id/recommendations/',
        destination: `https://api.themoviedb.org/3/movie/:id/recommendations?api_key=${process.env.API_KEY}&language=ko&page=1`,
      },
      // TV 리스트 API
      {
        source: '/api/tv/:request/:page',
        destination: `https://api.themoviedb.org/3/tv/:request?api_key=${process.env.API_KEY}&language=ko&page=:page`,
      },
      // TV 상세 정보 API
      {
        source: '/api/tv/:id',
        destination: `https://api.themoviedb.org/3/tv/:id?api_key=${process.env.API_KEY}&language=ko`,
      },
      // 추천 TV 시리즈 목록 API
      {
        source: '/api/tv/:id/recommendations',
        destination: `https://api.themoviedb.org/3/tv/:id/recommendations?api_key=${process.env.API_KEY}&language=ko&page=1`,
      },
      // 검색 API
      {
        source: '/api/search/:query/:page',
        destination: `https://api.themoviedb.org/3/search/multi?api_key=${process.env.API_KEY}&query=:query&include_adult=true&language=ko&page=:page`,
      },
    ];
  },
};

module.exports = nextConfig;

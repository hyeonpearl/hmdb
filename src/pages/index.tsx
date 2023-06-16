import Head from 'next/head';

import { HomeIntroduce, HomeMain } from '@/styles/pages/Home.styles';

import HeaderContainer from '@/containers/HeaderContainer';
import MovieContainer from '@/containers/MovieContainer';
import TVContainer from '@/containers/TVContainer';

export default function Home() {
  return (
    <>
      <Head>
        <title>HMDb : 원하는 영화 & 드라마를 찾아보세요.</title>
      </Head>

      <HeaderContainer />
      <HomeMain>
        <section>
          <HomeIntroduce>
            <strong>어서오세요</strong>
            영화 정보 사이트
            <strong>HMDb입니다.</strong>
          </HomeIntroduce>
        </section>

        <section>
          <MovieContainer
            title='현재 상영 중'
            request={'now_playing'}
            layout='flex'
          />
          <MovieContainer title='인기 영화' request={'popular'} layout='flex' />
          <MovieContainer
            title='평점 높은 영화'
            request={'top_rated'}
            layout='flex'
          />
        </section>

        <section>
          <TVContainer
            title='TV 방영 중'
            request='on_the_air'
            color='white'
            layout='flex'
          />
          <TVContainer
            title='인기 시리즈'
            request='popular'
            color='white'
            layout='flex'
          />
          <TVContainer
            title='평점 높은 TV 시리즈'
            request='top_rated'
            color='white'
            layout='flex'
          />
        </section>
      </HomeMain>
    </>
  );
}

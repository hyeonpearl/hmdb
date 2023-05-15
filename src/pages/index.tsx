import Head from 'next/head';

import styled from '@emotion/styled';

import { common } from '@/styles/common';
import MovieContainer from '@/containers/MovieContainer';
import TVContainer from '@/containers/TVContainer';

export default function Home() {
  return (
    <StyledMain>
      <Head>
        <title>HMDb : 원하는 영화 & 드라마를 찾아보세요.</title>
      </Head>

      <section>
        <StyledIntroduce>
          <strong>어서오세요</strong>
          영화 정보 사이트
          <strong>HMDb입니다.</strong>
        </StyledIntroduce>
      </section>

      <section>
        <MovieContainer title='현재 상영 중' request={'now_playing'} />
        <MovieContainer title='인기 영화' request={'popular'} />
        <MovieContainer title='평점 높은 영화' request={'top_rated'} />
      </section>

      <section>
        <TVContainer
          title='트렌드한 TV 시리즈'
          request='trending'
          color='white'
        />
        <TVContainer
          title='평점 높은 TV 시리즈'
          request='top_rated'
          color='white'
        />
      </section>
    </StyledMain>
  );
}

const StyledMain = styled.main`
  section {
    padding: 3rem;

    :first-of-type {
      margin-top: 66px;
      text-align: center;
    }

    :nth-of-type(odd) {
      background: ${common.color.black};
    }

    :nth-of-type(even) {
      background: ${common.color.white};
    }
  }
`;

const StyledIntroduce = styled.h1`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 5rem;

  @media screen and (max-width: 1200px) {
    font-size: 4.5rem;
  }

  @media screen and (max-width: 900px) {
    font-size: 3rem;
  }

  @media screen and (max-width: 600px) {
    font-size: 2.25rem;
  }

  strong {
    background: linear-gradient(
      to right,
      ${common.color.green},
      ${common.color.yellow}
    );
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
`;

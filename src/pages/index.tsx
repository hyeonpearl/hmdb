import Head from 'next/head';

import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { Container } from '@mui/material';

import { common } from '@/styles/common';
import MovieContainer from '@/containers/MovieContainer';
import TVContainer from '@/containers/TVContainer';

export default function Home() {
  return (
    <HomeContainer>
      <Head>
        <title>HMDb : Find a Best Movie & Drama</title>
      </Head>

      <section>
        <Container fixed>
          <StyledIntroduce>
            <strong>어서오세요</strong>
            영화 정보 사이트
            <strong>HMDb입니다.</strong>
          </StyledIntroduce>
        </Container>
      </section>

      <section>
        <Container fixed>
          <MovieContainer title='Now Playing' request={'now_playing'} />
          <MovieContainer title='Popular' request={'popular'} />
          <MovieContainer title='Top Rated' request={'top_rated'} />
        </Container>
      </section>

      <section>
        <Container fixed>
          <TVContainer title='Trending' request='trending' />
          <TVContainer title='Top Rated' request='top_rated' />
        </Container>
      </section>
    </HomeContainer>
  );
}

const HomeContainer = styled.main`
  section {
    padding: 1rem;

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 5rem;
  padding: 1.5rem;
  margin-bottom: 5rem;

  @media screen and (max-width: 1200px) {
    font-size: 4.5rem;
  }

  @media screen and (max-width: 900px) {
    font-size: 3rem;
    margin: 5rem 0;
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

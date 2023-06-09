import styled from '@emotion/styled';

import HeaderContainer from '@/containers/HeaderContainer';
import DetailMovieContainer from '@/containers/DetailMovieContainer';
import MovieContainer from '@/containers/MovieContainer';

export default function Detail() {
  return (
    <>
      <HeaderContainer />
      <StyledMain>
        <DetailMovieContainer />
        <section>
          <MovieContainer
            request='recommendations'
            layout='flex'
            title='추천 영화 목록'
            color='white'
          />
        </section>
      </StyledMain>
    </>
  );
}

const StyledMain = styled.main`
  margin: 66px 0;

  section {
    padding: 3rem;
  }
`;

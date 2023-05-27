import styled from '@emotion/styled';

import DetailMovieContainer from '@/containers/DetailMovieContainer';
import MovieContainer from '@/containers/MovieContainer';

export default function Detail() {
  return (
    <>
      <StyledMain>
        <DetailMovieContainer />
        <section>
          <MovieContainer
            title='비슷한 영화들'
            request='recommend'
            color='white'
            layout='nowrap'
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

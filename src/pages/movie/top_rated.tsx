import styled from '@emotion/styled';

import { common } from '@/styles/common';
import SEO from '@/components/SEO';
import MovieContainer from '@/containers/MovieContainer';

export default function TopRated() {
  return (
    <>
      <SEO title={'평점 높은 영화'} />
      <StyledMain>
        <h3>
          <span>평점 높은 영화</span>
        </h3>

        <section>
          <MovieContainer request='top_rated' color='white' layout='column' />
        </section>
      </StyledMain>
    </>
  );
}

const StyledMain = styled.main`
  margin-top: 66px;
  padding: 0 3rem;

  h3 {
    padding: 5rem 0;
    text-align: center;
    font-size: 4rem;

    span {
      cursor: pointer;

      :hover {
        background: linear-gradient(
          to right,
          ${common.color.green},
          ${common.color.yellow}
        );
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        transition: color 0.3s ease;
      }
    }
  }
`;

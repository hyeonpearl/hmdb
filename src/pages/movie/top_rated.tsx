import { StyledWhiteBody } from '@/styles/pages/Category';

import SEO from '@/components/SEO';
import HeaderContainer from '@/containers/HeaderContainer';
import MovieContainer from '@/containers/MovieContainer';

export default function TopRated() {
  return (
    <>
      <SEO title={'평점 높은 영화'} />

      <HeaderContainer color='white' />
      <StyledWhiteBody>
        <main>
          <h3>
            <span>평점 높은 영화</span>
          </h3>
          <section>
            <MovieContainer request='top_rated' layout='wrap' />
          </section>
        </main>
      </StyledWhiteBody>
    </>
  );
}

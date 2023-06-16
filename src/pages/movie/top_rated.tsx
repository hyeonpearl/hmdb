import { CategoryMain } from '@/styles/pages/Category.styles';

import SEO from '@/components/SEO';
import HeaderContainer from '@/containers/HeaderContainer';
import MovieContainer from '@/containers/MovieContainer';

export default function TopRated() {
  return (
    <>
      <SEO title={'평점 높은 영화'} />

      <HeaderContainer color='white' />
      <CategoryMain>
        <h3>
          <span>평점 높은 영화</span>
        </h3>

        <section>
          <MovieContainer request='top_rated' layout='grid' />
        </section>
      </CategoryMain>
    </>
  );
}

import { CategoryMain } from '@/styles/pages/Category.styles';

import SEO from '@/components/SEO';
import HeaderContainer from '@/containers/HeaderContainer';
import MovieContainer from '@/containers/MovieContainer';

export default function Popular() {
  return (
    <>
      <SEO title={'인기 영화'} />

      <HeaderContainer color='white' />
      <CategoryMain>
        <h3>
          <span>인기 영화</span>
        </h3>

        <section>
          <MovieContainer request='popular' layout='grid' />
        </section>
      </CategoryMain>
    </>
  );
}

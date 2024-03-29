import { CategoryMain } from '@/styles/pages/Category.styles';

import SEO from '@/components/SEO';
import HeaderContainer from '@/containers/HeaderContainer';
import MovieContainer from '@/containers/MovieContainer';

export default function NowPlaying() {
  return (
    <>
      <SEO title={'현재 상영 중'} />

      <HeaderContainer color='white' />
      <CategoryMain>
        <h3>
          <span>현재 상영 중</span>
        </h3>

        <section>
          <MovieContainer request='now_playing' layout='grid' />
        </section>
      </CategoryMain>
    </>
  );
}

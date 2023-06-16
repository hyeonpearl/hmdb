import { CategoryMain } from '@/styles/pages/Category.styles';

import SEO from '@/components/SEO';
import HeaderContainer from '@/containers/HeaderContainer';
import TVContainer from '@/containers/TVContainer';

export default function Trending() {
  return (
    <>
      <SEO title={'인기 TV 시리즈'} />

      <HeaderContainer color='white' />
      <CategoryMain>
        <h3>
          <span>인기 TV 시리즈</span>
        </h3>

        <section>
          <TVContainer request='popular' layout='grid' />
        </section>
      </CategoryMain>
    </>
  );
}

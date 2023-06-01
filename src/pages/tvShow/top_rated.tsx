import { StyledWhiteBody } from '@/styles/pages/Category';

import SEO from '@/components/SEO';
import HeaderContainer from '@/containers/HeaderContainer';
import TVContainer from '@/containers/TVContainer';

export default function TopRated() {
  return (
    <>
      <SEO title={'평점 높은 TV 시리즈'} />

      <HeaderContainer color='white' />
      <StyledWhiteBody>
        <main>
          <h3>
            <span>평점 높은 TV 시리즈</span>
          </h3>
          <section>
            <TVContainer request='top_rated' layout='wrap' />
          </section>
        </main>
      </StyledWhiteBody>
    </>
  );
}

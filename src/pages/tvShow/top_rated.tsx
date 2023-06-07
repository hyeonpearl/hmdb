import { StyledWhiteBody } from '@/styles/pages/Category.styles';

import SEO from '@/components/SEO';
import HeaderContainer from '@/containers/HeaderContainer';
import TVContainer from '@/containers/TVContainer';

export default function TopRated() {
  return (
    <>
      <SEO title={'평점 높은 TV 시리즈'} />

      <StyledWhiteBody>
        <HeaderContainer color='white' />
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

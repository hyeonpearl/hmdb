import { StyledWhiteBody } from '@/styles/pages/Category.styles';

import SEO from '@/components/SEO';
import HeaderContainer from '@/containers/HeaderContainer';
import TVContainer from '@/containers/TVContainer';

export default function Trending() {
  return (
    <>
      <SEO title={'인기 TV 시리즈'} />

      <StyledWhiteBody>
        <HeaderContainer color='white' />
        <main>
          <h3>
            <span>인기 TV 시리즈</span>
          </h3>

          <section>
            <TVContainer request='popular' layout='wrap' />
          </section>
        </main>
      </StyledWhiteBody>
    </>
  );
}

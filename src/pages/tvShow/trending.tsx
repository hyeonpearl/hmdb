import { StyledWhiteBody } from '@/styles/pages/Category';

import SEO from '@/components/SEO';
import HeaderContainer from '@/containers/HeaderContainer';
import TVContainer from '@/containers/TVContainer';

export default function Trending() {
  return (
    <>
      <SEO title={'트렌드한 TV 시리즈'} />

      <HeaderContainer color='white' />
      <StyledWhiteBody>
        <main>
          <h3>
            <span>트렌드한 TV 시리즈</span>
          </h3>
          <section>
            <TVContainer request='trending' layout='wrap' />
          </section>
        </main>
      </StyledWhiteBody>
    </>
  );
}

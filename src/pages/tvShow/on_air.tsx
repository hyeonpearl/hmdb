import { StyledWhiteBody } from '@/styles/pages/Category';

import SEO from '@/components/SEO';
import HeaderContainer from '@/containers/HeaderContainer';
import TVContainer from '@/containers/TVContainer';

export default function OnAir() {
  return (
    <>
      <SEO title={'TV 방영 중'} />

      <HeaderContainer color='white' />
      <StyledWhiteBody>
        <main>
          <h3>
            <span>TV 방영 중</span>
          </h3>
          <section>
            <TVContainer request='on_air' layout='wrap' />
          </section>
        </main>
      </StyledWhiteBody>
    </>
  );
}

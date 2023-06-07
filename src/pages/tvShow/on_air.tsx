import { StyledWhiteBody } from '@/styles/pages/Category.styles';

import SEO from '@/components/SEO';
import HeaderContainer from '@/containers/HeaderContainer';
import TVContainer from '@/containers/TVContainer';

export default function OnAir() {
  return (
    <>
      <SEO title={'TV 방영 중'} />

      <StyledWhiteBody>
        <HeaderContainer color='white' />
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

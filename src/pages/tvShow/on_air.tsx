import styled from '@emotion/styled';

import { common } from '@/styles/theme/common';
import SEO from '@/components/SEO';
import HeaderContainer from '@/containers/HeaderContainer';
import TVContainer from '@/containers/TVContainer';

export default function OnAir() {
  return (
    <>
      <SEO title={'TV 방영 중'} />

      <HeaderContainer />
      <StyledMain>
        <h3>
          <span>TV 방영 중</span>
        </h3>

        <section>
          <TVContainer request='on_air' color='white' layout='wrap' />
        </section>
      </StyledMain>
    </>
  );
}

const StyledMain = styled.main`
  margin-top: 66px;
  padding: 0 3rem;

  h3 {
    padding: 5rem 0;
    text-align: center;
    font-size: 4rem;

    span {
      cursor: pointer;

      :hover {
        background: linear-gradient(
          to right,
          ${common.color.green},
          ${common.color.yellow}
        );
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        transition: color 0.3s ease;
      }
    }
  }
`;

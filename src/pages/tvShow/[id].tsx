import styled from '@emotion/styled';

import HeaderContainer from '@/containers/HeaderContainer';
import DetailTVContainer from '@/containers/DetailTVContainer';
import TVContainer from '@/containers/TVContainer';

export default function Detail() {
  return (
    <>
      <HeaderContainer />
      <StyledMain>
        <DetailTVContainer />
        <section>
          <TVContainer
            request='recommendations'
            layout='flex'
            title='추천 TV 시리즈'
            color='white'
          />
        </section>
      </StyledMain>
    </>
  );
}

const StyledMain = styled.main`
  margin: 66px 0;

  section {
    padding: 3rem;
  }
`;

import styled from '@emotion/styled';

import DetailTVContainer from '@/containers/DetailTVContainer';
import TVContainer from '@/containers/TVContainer';

export default function Detail() {
  return (
    <StyledMain>
      <DetailTVContainer />
      <section>
        <TVContainer
          title='비슷한 TV 시리즈'
          request='recommend'
          color='white'
        />
      </section>
    </StyledMain>
  );
}

const StyledMain = styled.main`
  margin: 66px 0;

  section {
    padding: 3rem;
  }
`;

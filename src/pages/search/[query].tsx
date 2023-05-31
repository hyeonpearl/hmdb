import { useRouter } from 'next/router';

import styled from '@emotion/styled';

import HeaderContainer from '@/containers/HeaderContainer';

export default function Search() {
  const router = useRouter();

  return (
    <>
      <HeaderContainer />
      <StyledMain>
        <div>검색 결과 {router.query.query}</div>
      </StyledMain>
    </>
  );
}

const StyledMain = styled.main`
  margin-top: 66px;
`;

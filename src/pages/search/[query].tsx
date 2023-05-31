import { useRouter } from 'next/router';

import styled from '@emotion/styled';

export default function Search() {
  const router = useRouter();

  return (
    <StyledMain>
      <div>검색 결과 {router.query.query}</div>
    </StyledMain>
  );
}

const StyledMain = styled.main`
  margin-top: 66px;
`;

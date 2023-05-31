import styled from '@emotion/styled';
import { useRouter } from 'next/router';

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

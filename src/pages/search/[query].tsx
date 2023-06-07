import { useRouter } from 'next/router';

import { StyledSearch } from '@/styles/pages/Search.styles';

import HeaderContainer from '@/containers/HeaderContainer';

export default function Search() {
  const router = useRouter();

  return (
    <>
      <StyledSearch>
        <HeaderContainer color='white' />
        <main>
          <div>검색 결과 {router.query.query}</div>
        </main>
      </StyledSearch>
    </>
  );
}

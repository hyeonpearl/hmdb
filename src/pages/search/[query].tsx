import { useRouter } from 'next/router';

import { StyledSearch } from '@/styles/pages/Search';

import HeaderContainer from '@/containers/HeaderContainer';

export default function Search() {
  const router = useRouter();

  return (
    <>
      <HeaderContainer color='white' />
      <StyledSearch>
        <main>
          <div>검색 결과 {router.query.query}</div>
        </main>
      </StyledSearch>
    </>
  );
}

import { useRouter } from 'next/router';

import { SearchMain } from '@/styles/pages/Search.styles';

import HeaderContainer from '@/containers/HeaderContainer';

export default function Search() {
  const router = useRouter();

  return (
    <>
      <HeaderContainer color='white' />
      <SearchMain>
        <div>검색 결과 {router.query.query}</div>
      </SearchMain>
    </>
  );
}

import type { AppProps } from 'next/app';

import GlobalStyle from '@/styles/GlobalStyle';
import HeaderContainer from '@/containers/HeaderContainer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <HeaderContainer />
      <Component {...pageProps} />
    </>
  );
}

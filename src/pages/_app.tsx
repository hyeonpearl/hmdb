import Header from '@/components/Header';
import { Global, css } from '@emotion/react';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global
        styles={css`
          ::selection {
            background: #2cab74;
          }

          html,
          body {
            background: #191919;
            color: #fff;
            margin: 0;
            word-break: keep-all;
            font-family: Pretendard, -apple-system, BlinkMacSystemFont,
              Bazier Square, Noto Sans KR, Segoe UI, Apple SD Gothic Neo, Roboto,
              Helvetica Neue, Arial, sans-serif, Apple Color Emoji,
              Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
            letter-spacing: -0.3px;
            padding-bottom: 2rem;
            overflow-x: hidden;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
        `}
      />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

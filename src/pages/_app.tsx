import type { AppProps } from 'next/app';

import { Global, css } from '@emotion/react';

import { common } from '@/styles/common';
import Header from '@/components/Header';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global
        styles={css`
          ::selection {
            color: ${common.color.white};
            background: ${common.color.green_selection};
          }

          html,
          body {
            background: ${common.color.black};
            color: ${common.color.white};
            margin: 0;
            word-break: keep-all;
            font-family: Pretendard, -apple-system, BlinkMacSystemFont,
              Bazier Square, Noto Sans KR, Segoe UI, Apple SD Gothic Neo, Roboto,
              Helvetica Neue, Arial, sans-serif, Apple Color Emoji,
              Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
            letter-spacing: -0.3px;
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

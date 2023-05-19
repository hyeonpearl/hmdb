import { Global, css } from '@emotion/react';

import { common } from '@/styles/common';

export default function GlobalStyle() {
  return (
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
            Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji,
            Segoe UI Symbol, Noto Color Emoji;
          letter-spacing: -0.3px;
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        a {
          text-decoration: none;
          color: ${common.color.white};
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        ul,
        ol,
        p {
          margin: 0;
          padding: 0;
        }

        li {
          list-style: none;
        }

        input {
          all: unset;
        }
      `}
    />
  );
}

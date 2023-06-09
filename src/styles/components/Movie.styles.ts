import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { common } from '@/styles/theme/common';

export const StyledMovie = styled.article`
  h3 {
    font-size: 2rem;
    margin: 1rem 0;
    display: flex;
    align-items: center;

    ${({ color }) =>
      color === 'white'
        ? css`
            color: ${common.color.white};
          `
        : css`
            color: ${common.color.gray01};
          `}

    span {
      cursor: pointer;

      :hover {
        background: linear-gradient(
          to right,
          ${common.color.green},
          ${common.color.yellow}
        );
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        transition: color 0.3s ease;
      }
    }
  }

  @media screen and (max-width: 600px) {
    h3 {
      font-size: 1.5rem;
    }
  }

  ul {
    padding: 1rem 0;

    ${({ layout }: { layout: string }) =>
      layout === 'grid'
        ? css`
            display: grid;
            grid-template-columns: repeat(4, 1fr);
          `
        : css`
            display: flex;
            overflow-x: scroll;
          `}

    li {
      list-style: none;
      text-align: center;

      ${({ layout }) =>
        layout === 'grid' &&
        css`
          margin-top: 1rem;
        `}

      a {
        text-decoration: none;

        img {
          width: 210px;
          height: 330px;
          transition: all 0.3s ease-out;

          ${({ color }) =>
            color === 'white'
              ? null
              : css`
                  border: 1px solid ${common.color.gray06};
                `}

          :hover {
            transform: translate(0, -10px);
          }
        }

        @media screen and (max-width: 600px) {
          img {
            width: 150px;
            height: 220px;
          }
        }

        div.movie_title {
          font-weight: 600;

          ${({ color }) =>
            color === 'white'
              ? css`
                  color: ${common.color.white};
                `
              : css`
                  color: ${common.color.gray01};
                `}
        }

        div.movie_rate {
          display: flex;
          justify-content: center;
          align-items: center;

          svg {
            color: ${common.color.green};
          }

          strong {
            ${({ color }) =>
              color === 'white'
                ? css`
                    color: ${common.color.white};
                  `
                : css`
                    color: ${common.color.gray01};
                  `}
          }
        }
      }

      :not(:first-of-type) {
        margin-left: 1rem;
      }
    }
  }
`;

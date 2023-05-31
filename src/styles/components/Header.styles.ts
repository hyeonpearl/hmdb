import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';

import { common } from '@/styles/theme/common';

interface Dropdowns {
  movie: boolean;
  tv: boolean;
  search: boolean;
  close: boolean;
}

const backdropBlur = keyframes`
  from { backdrop-filter: blur(0); }
  to { backdrop-filter: blur(10px); }
`;

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  opacity: 0.8;
  z-index: 10;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5rem;
  background: ${common.color.gray01};

  ${({ dropdowns, inputValue }: { dropdowns: Dropdowns; inputValue: string }) =>
    dropdowns.movie || dropdowns.tv || dropdowns.search
      ? css`
          background: ${common.color.black};
          transition: background 0.3s ease;
          opacity: 1;
        `
      : css`
          transition: background 0.3s ease;
        `}

  @media screen and (max-width: 600px) {
    padding: 0 1rem;

    a img {
      width: 100px;
    }
  }

  nav {
    ul {
      display: flex;
      align-items: center;

      li {
        .menu_btn {
          color: ${common.color.white};
          margin-left: 1rem;
          padding: 1rem;
          user-select: none;
          cursor: pointer;

          :hover {
            color: ${common.color.gray_hover};
          }
        }

        .menu_wrap {
          position: absolute;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: -1;

          ${({ dropdowns }) =>
            dropdowns.movie || dropdowns.tv || dropdowns.search
              ? css`
                  animation: ${backdropBlur} 0.3s ease;
                  backdrop-filter: blur(10px);
                `
              : null}

          .content {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            height: auto;
            background: ${common.color.black};
            z-index: 5;

            padding: 5rem 6.5rem 2rem 6.5rem;

            .menu_title {
              font-size: 0.9rem;
              color: ${common.color.gray03};
              margin-bottom: 0.5rem;
            }

            ul {
              display: flex;
              flex-direction: column;
              align-items: start;

              li {
                font-size: 1.5rem;
                font-weight: 600;
                padding: 0.5rem 0;

                a {
                  :hover {
                    color: ${common.color.gray_hover};
                    cursor: pointer;
                  }
                }
              }
            }
          }

          .search {
            .search_bar {
              display: flex;
              align-items: center;

              svg {
                font-size: 2rem;
                color: ${common.color.gray03};
              }

              input {
                width: 100%;
                font-size: 1.5rem;
                font-weight: 600;
                background: ${common.color.black};
                color: ${common.color.white};
                padding: 0.5rem;
              }

              .clear_input {
                padding: 1rem;
                font-size: 1.25rem;
                visibility: hidden;
                opacity: 0;
                cursor: pointer;

                :hover {
                  color: ${common.color.gray06};
                }
              }

              ${({ inputValue }) =>
                inputValue !== ''
                  ? css`
                      svg:first-of-type {
                        color: ${common.color.gray06};
                        transition: color 0.3s ease;
                      }

                      .clear_input {
                        visibility: visible;
                        opacity: 1;
                        transition: opacity 0.3s ease;
                      }
                    `
                  : css`
                      svg {
                        color: ${common.color.gray03};
                        transition: color 0.3s ease;
                      }
                    `}
            }
          }
        }
      }
    }
  }
`;

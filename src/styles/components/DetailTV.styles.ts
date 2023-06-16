import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { common } from '@/styles/theme/common';

export const StyledDetailTV = styled.section`
  :first-of-type {
    display: flex;
    padding: 2rem;

    ${({ backdrop }: { backdrop: string }) =>
      backdrop &&
      css`
        position: relative;
        overflow: hidden;

        ::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url(${backdrop});
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
          filter: blur(10px);
          opacity: 0.3;
          z-index: 0;
        }
      `}

    article {
      position: relative;
      z-index: 1;
    }

    article.poster {
      img {
        height: 35rem;
      }
    }

    article.tvShow_detail {
      margin: 0 5rem;
      padding: 3rem 0;
      display: flex;
      flex-direction: column;

      hgroup.tvShow_title {
        margin-bottom: 2rem;

        h1 {
          margin: 0;
          font-size: 3rem;
        }

        h3 {
          color: ${common.color.gray06};
          font-weight: 500;
        }
      }

      ul.tvShow_rating {
        display: flex;
        margin-bottom: 2rem;

        li {
          :first-of-type {
            display: flex;
            flex-direction: column;

            h4 {
              margin-bottom: 2px;
              font-weight: 500;
              color: ${common.color.gray06};
              text-align: center;
            }

            .vote_detail {
              display: flex;
              padding: 0 0.5rem;
              cursor: pointer;

              :hover {
                border-radius: 5px;
                background: ${common.color.gray02};
                transition: all 0.3s ease;
              }

              svg {
                color: ${common.color.green};
                font-size: 2.5rem;
              }

              div {
                display: flex;
                flex-direction: column;

                .vote_score {
                  flex-direction: row;
                  align-items: center;

                  strong {
                    font-size: 1.25rem;
                  }

                  span {
                    font-size: 0.85rem;
                    color: ${common.color.gray06};
                  }
                }

                .vote_count {
                  font-size: 0.85rem;
                  color: ${common.color.gray06};
                }
              }
            }
          }

          :last-of-type {
            margin-left: 1rem;
            display: flex;
            flex-direction: column;

            h4 {
              margin-bottom: 2px;
              font-weight: 500;
              color: ${common.color.gray06};
              text-align: center;
            }
            div.popular_detail {
              display: flex;
              align-items: center;
              padding: 0 0.5rem;
              cursor: pointer;

              :hover {
                border-radius: 5px;
                background: ${common.color.gray02};
                transition: all 0.3s ease;
              }

              svg {
                color: ${common.color.yellow};
                font-size: 2.5rem;
              }

              strong {
                font-size: 1.25rem;
              }
            }
          }
        }
      }

      p.tagline {
        margin-bottom: 1.5rem;
        font-style: italic;
        font-size: 1.05rem;
        color: ${common.color.gray06};
      }

      div.overview {
        margin-bottom: 1.5rem;
        line-height: 1.3rem;

        h4 {
          margin-bottom: 0.5rem;
          font-size: 1.25rem;
        }
      }

      ul.genres {
        display: flex;

        li {
          color: ${common.color.white};
          padding: 0 0.5rem;
          border-radius: 5px;
          background: ${common.color.gray02};
          cursor: pointer;

          :hover {
            background: linear-gradient(
              to right,
              ${common.color.green},
              ${common.color.yellow}
            );
            color: ${common.color.black};
            transition: all 0.3s ease;
          }

          :not(:first-of-type) {
            margin-left: 1rem;
          }
        }
      }
    }
  }
`;

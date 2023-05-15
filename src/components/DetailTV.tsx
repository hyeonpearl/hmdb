/* eslint-disable @next/next/no-img-element */
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';

import { common } from '@/styles/common';
import SEO from '@/components/SEO';
import TVContainer from '@/containers/TVContainer';

interface Genre {
  id: number;
  name: string;
}

interface TVInfo {
  name: string;
  original_name: string;
  number_of_seasons: number;
  vote_average: number;
  vote_count: number;
  poster_path: string;
  backdrop_path: string;
  popularity: number;
  tagline: string;
  overview: string;
  genres: Genre[];
}

interface ComponentProps {
  tvInfo: TVInfo;
  vote_count: string;
  popular_count: string;
  backdrop: string;
  genres: JSX.Element[] | null;
}

export default function DetailTV({
  tvInfo,
  vote_count,
  popular_count,
  backdrop,
  genres,
}: ComponentProps) {
  return (
    <>
      <SEO title={tvInfo.name} />

      <StyledMain backdrop={backdrop}>
        <section>
          <article className='poster'>
            <img
              src={`https://image.tmdb.org/t/p/w500/${tvInfo.poster_path}`}
              alt='poster'
            />
          </article>

          <article className='tvShow_detail'>
            <hgroup className='tvShow_title'>
              <h1>{tvInfo.name}</h1>

              <h3>
                {tvInfo.original_name} • {tvInfo.number_of_seasons} Seasons
              </h3>
            </hgroup>

            <ul className='tvShow_rating'>
              <li>
                <h4>HMDb 평점</h4>

                <div className='vote_detail'>
                  <StarRateRoundedIcon />

                  <div>
                    <div className='vote_score'>
                      <strong>{tvInfo.vote_average?.toFixed(1)}</strong>
                      <span>&nbsp;/ 10</span>
                    </div>

                    <div className='vote_count'>{vote_count}</div>
                  </div>
                </div>
              </li>

              <li>
                <h4>인기도</h4>

                <div className='popular_detail'>
                  <BarChartRoundedIcon />
                  <strong>{popular_count}</strong>
                </div>
              </li>
            </ul>

            <p className='tagline'>{tvInfo.tagline}</p>

            <div className='overview'>
              {tvInfo.overview !== '' ? (
                <>
                  <h4>개요</h4>
                  <p>{tvInfo.overview}</p>
                </>
              ) : (
                ''
              )}
            </div>

            <ul className='genres'>{genres}</ul>
          </article>
        </section>

        <section>
          <TVContainer
            title='비슷한 TV 시리즈'
            request='recommend'
            color='white'
          />
        </section>
      </StyledMain>
    </>
  );
}

const StyledMain = styled.main`
  margin: 66px 0;

  section {
    padding: 3rem;

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
  }
`;

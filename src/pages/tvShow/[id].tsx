/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import styled from '@emotion/styled';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';

import { common } from '@/styles/common';
import SEO from '@/components/SEO';

interface TVInfo {
  name: string;
  original_name: string;
  number_of_seasons: number;
  vote_average: number;
  vote_count: number;
  poster_path: string;
  backdrop_path: string;
}

export default function Detail() {
  const router = useRouter();

  const [tvInfo, setTvInfo] = useState<TVInfo>({
    name: '',
    original_name: '',
    number_of_seasons: 0,
    vote_average: 0,
    vote_count: 0,
    poster_path: '',
    backdrop_path: '',
  });

  useEffect(() => {
    fetch(`/api/tv/${router.query.id}`)
      .then(res => res.json())
      .then(data => setTvInfo(data))
      .catch(error => console.log(error));
  }, [router.query.id]);

  const vote_count = new Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(tvInfo.vote_count);

  console.log(tvInfo);

  return (
    <>
      <SEO title={tvInfo.name} />

      <StyledMain>
        <section>
          <article>
            <div className='show_title'>
              <h1>{tvInfo.name}</h1>
              <div>
                <span>
                  {tvInfo.original_name} • {tvInfo.number_of_seasons} Seasons
                </span>
              </div>
            </div>

            <div className='show_rating'>
              <div className='rating_info'>
                <p>HMDb 평점</p>
                <div className='rating_detail'>
                  <StarRateRoundedIcon />
                  <div>
                    <div className='rating_score'>
                      <strong>{tvInfo.vote_average?.toFixed(1)}</strong>
                      <span>&nbsp;/ 10</span>
                    </div>
                    <div className='rating_count'>{vote_count}</div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article>
            <img
              src={`https://image.tmdb.org/t/p/w500/${tvInfo.poster_path}`}
              alt='poster'
            />
            <img
              src={`https://image.tmdb.org/t/p/w500/${tvInfo.backdrop_path}`}
              alt='backdrop'
            />
          </article>
        </section>
      </StyledMain>
    </>
  );
}

const StyledMain = styled.main`
  margin: 66px 0;

  section {
    article {
      margin: 0 5rem;

      :first-of-type {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 3rem 0;

        .show_title {
          h1 {
            margin: 0;
            font-size: 3rem;
          }

          span {
            color: ${common.color.gray06};
            font-weight: 500;
          }
        }

        .show_rating {
          .rating_info {
            display: flex;
            flex-direction: column;

            p {
              margin: 0;
              margin-bottom: 2px;
              font-weight: 500;
              color: ${common.color.gray06};
              text-align: center;
            }

            .rating_detail {
              display: flex;
              cursor: pointer;
              padding: 0 0.5rem;
              border-radius: 5px;

              :hover {
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

                .rating_score {
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

                .rating_count {
                  font-size: 0.85rem;
                  color: ${common.color.gray06};
                }
              }
            }
          }
        }
      }

      :nth-of-type(2) {
        img {
          height: 20rem;
          margin-right: 1rem;
        }
      }
    }
  }
`;

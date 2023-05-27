/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

import styled from '@emotion/styled';
import { css } from '@emotion/react';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';

import { common } from '@/styles/common';

interface TVShow {
  poster_path: string | null;
  id: number;
  name: string;
  vote_average: number;
}

interface ComponentProps {
  title?: string;
  tvShows: TVShow[];
  isLoading: boolean;
  color?: string;
  layout: string;
  scrollRef: React.RefObject<HTMLUListElement>;
}

export default function TVShow({
  title,
  tvShows,
  isLoading,
  color,
  layout,
  scrollRef,
}: ComponentProps) {
  return (
    <StyledArticle color={color} layout={layout}>
      {title ? (
        <h3>
          <span>{title}</span>
        </h3>
      ) : (
        <></>
      )}

      <ul ref={scrollRef}>
        {isLoading
          ? array.map((_, index) => <li key={index}></li>)
          : tvShows.map((tvShow: TVShow) => (
              <li key={tvShow.id}>
                <Link href={{ pathname: `/tvShow/${tvShow.id}` }}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${tvShow.poster_path}`}
                    alt='poster'
                  />
                  <div className='tv_title'>{tvShow.name}</div>
                  <div className='tv_rate'>
                    <StarRateRoundedIcon />
                    <strong>{tvShow.vote_average?.toFixed(1)}</strong>
                  </div>
                </Link>
              </li>
            ))}
      </ul>
    </StyledArticle>
  );
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const StyledArticle = styled.article`
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
    display: flex;

    ${({ layout }: { layout: string }) =>
      layout === 'wrap'
        ? css`
            flex-wrap: wrap;
          `
        : css`
            overflow-x: scroll;
          `}

    li {
      list-style: none;
      text-align: center;

      ${({ layout }: { layout: string }) =>
        layout === 'wrap' &&
        css`
          padding: 1rem;
          flex: 1;
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

        div.tv_title {
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

        div.tv_rate {
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

        ${({ layout }: { layout: string }) =>
          layout === 'wrap' &&
          css`
            margin-left: 0;
          `}
      }
    }
  }
`;

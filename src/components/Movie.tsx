/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { common } from '@/styles/common';

interface Movie {
  poster_path: string | null;
  id: number;
  title: string;
}

interface ComponentProps {
  title?: string;
  movies: Movie[];
  isLoading: boolean;
  color?: string;
  scrollRef: React.RefObject<HTMLUListElement>;
}

export default function Movie({
  title,
  movies,
  isLoading,
  color,
  scrollRef,
}: ComponentProps) {
  return (
    <StyledArticle color={color}>
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
          : movies.map((movie: Movie) => (
              <li key={movie.id}>
                <Link
                  href={{
                    pathname: `/movie/${movie.id}`,
                  }}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt='poster'
                  />
                  <div>{movie.title}</div>
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
    overflow-x: scroll;

    li {
      list-style: none;

      a {
        text-decoration: none;

        img {
          width: 210px;
          height: 330px;
          ${({ color }) =>
            color === 'white'
              ? null
              : css`
                  border: 1px solid ${common.color.gray06};
                `}
          transition: all 0.3s ease-out;

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

        div {
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

      :not(:first-of-type) {
        margin-left: 1rem;
      }
    }
  }
`;

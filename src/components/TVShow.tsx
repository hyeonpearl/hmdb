/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

import styled from '@emotion/styled';
import { Skeleton } from '@mui/material';

import { common } from '@/styles/common';

interface TVShow {
  poster_path: string | null;
  id: number;
  name: string;
}

interface ComponentProps {
  title: string;
  tvShows: TVShow[];
  isLoading: boolean;
}

export default function TVShow({ title, tvShows, isLoading }: ComponentProps) {
  return (
    <StyledArticle>
      <h3>
        <span>{title}</span>
      </h3>
      <ul>
        {isLoading
          ? array.map((_, index) => (
              <li key={index}>
                <StyledSkeleton
                  variant='rounded'
                  width={210}
                  height={300}
                  key={index}
                />
                <StyledSkeleton variant='rounded' width={210} height={20} />
                <StyledSkeleton variant='rounded' width={100} height={20} />
              </li>
            ))
          : tvShows.map((tvShow: TVShow) => (
              <li key={tvShow.id}>
                <Link href={{ pathname: `/tvShow/${tvShow.id}` }}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${tvShow.poster_path}`}
                    alt='poster'
                  />
                  <div>{tvShow.name}</div>
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
    color: ${common.color.white};

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
          color: ${common.color.white};
        }
      }

      :not(:first-child) {
        margin-left: 1rem;
      }
    }
  }
`;

const StyledSkeleton = styled(Skeleton)`
  background: ${common.color.gray04};
  margin-bottom: 1rem;
`;

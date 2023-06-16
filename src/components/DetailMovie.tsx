/* eslint-disable @next/next/no-img-element */
import SEO from '@/components/SEO';

import { StyledDetailMovie } from '@/styles/components/DetailMovie.styles';

import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';

interface Genre {
  id: number;
  name: string;
}

interface MovieInfo {
  title: string;
  original_title: string;
  runtime: number;
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
  movieInfo: MovieInfo;
  vote_count: string;
  popular_count: string;
  backdrop: string;
  release: string;
  genres: JSX.Element[] | null;
}

export default function DetailMovie({
  movieInfo,
  vote_count,
  popular_count,
  backdrop,
  genres,
  release,
}: ComponentProps) {
  return (
    <>
      <SEO title={movieInfo.title} />

      <StyledDetailMovie backdrop={backdrop}>
        <article className='poster'>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieInfo.poster_path}`}
            alt='poster'
          />
        </article>

        <article className='movie_detail'>
          <hgroup className='movie_title'>
            <h1>{movieInfo.title}</h1>

            <h3>
              {movieInfo.original_title} • {movieInfo.runtime}m • {release}
            </h3>
          </hgroup>

          <ul className='movie_rating'>
            <li>
              <h4>HMDb 평점</h4>

              <div className='vote_detail'>
                <StarRateRoundedIcon />

                <div>
                  <div className='vote_score'>
                    <strong>{movieInfo.vote_average?.toFixed(1)}</strong>
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

          <p className='tagline'>{movieInfo.tagline}</p>

          <div className='overview'>
            {movieInfo.overview !== '' ? (
              <>
                <h4>개요</h4>
                <p>{movieInfo.overview}</p>
              </>
            ) : (
              ''
            )}
          </div>

          <ul className='genres'>{genres}</ul>
        </article>
      </StyledDetailMovie>
    </>
  );
}

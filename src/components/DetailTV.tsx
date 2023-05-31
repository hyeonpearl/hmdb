import SEO from '@/components/SEO';

import { StyledDetailTV } from '@/styles/components/DetailTV.styles';

import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';

interface Genre {
  id: number;
  name: string;
}

interface TVInfo {
  name: string;
  original_name: string;
  number_of_seasons: number;
  number_of_episodes: number;
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

      <StyledDetailTV backdrop={backdrop}>
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
              {tvInfo.original_name} • {tvInfo.number_of_seasons} Seasons •{' '}
              {tvInfo.number_of_episodes} Episodes
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
      </StyledDetailTV>
    </>
  );
}

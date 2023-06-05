import Link from 'next/link';

import { StyledTV } from '@/styles/components/TVShow.styles';

import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';

interface TVShow {
  poster_path: string | null;
  id: number;
  name: string;
  vote_average: number;
}

interface ComponentProps {
  tvShows: TVShow[];
  isLoading: boolean;
  layout: string;
  scrollRef: React.RefObject<HTMLUListElement>;
  title?: string;
  color?: string;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function TVShow({
  title,
  tvShows,
  isLoading,
  color,
  layout,
  scrollRef,
}: ComponentProps) {
  return (
    <StyledTV color={color} layout={layout}>
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
    </StyledTV>
  );
}

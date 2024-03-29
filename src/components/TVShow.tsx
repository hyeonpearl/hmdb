/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

import { TVList } from '@/styles/components/TVShow.styles';

import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';

interface TVShow {
  id: number;
  poster_path: string | null;
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

export default function TVShow({
  tvShows,
  isLoading,
  layout,
  scrollRef,
  title,
  color,
}: ComponentProps) {
  return (
    <TVList color={color} layout={layout}>
      {title ? (
        <h3>
          <span>{title}</span>
        </h3>
      ) : (
        <></>
      )}

      <ul ref={scrollRef}>
        {isLoading
          ? Array.from({ length: 10 }).map((_, index) => <li key={index}></li>)
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
    </TVList>
  );
}

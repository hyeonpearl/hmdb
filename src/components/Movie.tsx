/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

import { MovieList } from '@/styles/components/Movie.styles';

import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';

interface Movie {
  id: number;
  poster_path: string | null;
  title: string;
  vote_average: number;
}

interface ComponentProps {
  movies: Movie[];
  isLoading: boolean;
  layout: string;
  scrollRef: React.RefObject<HTMLUListElement>;
  title?: string;
  color?: string;
}

export default function Movie({
  movies,
  isLoading,
  layout,
  scrollRef,
  title,
  color,
}: ComponentProps) {
  return (
    <MovieList color={color} layout={layout}>
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
                  <div className='movie_title'>{movie.title}</div>
                  <div className='movie_rate'>
                    <StarRateRoundedIcon />
                    <strong>{movie.vote_average?.toFixed(1)}</strong>
                  </div>
                </Link>
              </li>
            ))}
      </ul>
    </MovieList>
  );
}

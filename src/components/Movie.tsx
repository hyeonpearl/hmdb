import Link from 'next/link';

import { StyledMovie } from '@/styles/components/Movie.styles';

import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';

interface Movie {
  id: number;
  poster_path: string | null;
  title: string;
  vote_average: number;
}

interface ComponentProps {
  title?: string;
  movies: Movie[];
  isLoading: boolean;
  color?: string;
  layout: string;
  scrollRef: React.RefObject<HTMLUListElement>;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function Movie({
  title,
  movies,
  isLoading,
  color,
  layout,
  scrollRef,
}: ComponentProps) {
  return (
    <StyledMovie color={color} layout={layout}>
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
                  <div className='movie_title'>{movie.title}</div>
                  <div className='movie_rate'>
                    <StarRateRoundedIcon />
                    <strong>{movie.vote_average?.toFixed(1)}</strong>
                  </div>
                </Link>
              </li>
            ))}
      </ul>
    </StyledMovie>
  );
}

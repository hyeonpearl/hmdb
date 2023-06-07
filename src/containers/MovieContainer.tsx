import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';

import Movie from '@/components/Movie';

interface Movie {
  id: number;
  poster_path: string | null;
  title: string;
  vote_average: number;
}

interface ComponentProps {
  request: string;
  layout: string;
  title?: string;
  color?: string;
}

export default function MovieContainer({
  request,
  layout,
  title,
  color,
}: ComponentProps) {
  const router = useRouter();

  const scrollRef = useRef<HTMLUListElement>(null);

  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      let api_url = null;

      request === 'recommendations'
        ? (api_url = `/api/movie/${router.query.id}/recommendations`)
        : (api_url = `/api/movie/${request}/${page}`);

      const response = await (await fetch(api_url)).json();
      const data = response.results;

      const list = data.filter((movie: Movie) => movie.poster_path !== null);

      setMovies(list);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();

    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 0;
    }
  }, [request, router.query.id, page]);

  return (
    <Movie
      movies={movies}
      isLoading={isLoading}
      layout={layout}
      scrollRef={scrollRef}
      title={title}
      color={color}
    />
  );
}

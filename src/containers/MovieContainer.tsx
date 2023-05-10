import { useEffect, useState } from 'react';

import Movie from '@/components/Movie';

interface Movie {
  poster_path: string | null;
  id: number;
  title: string;
}

export default function MovieContainer({
  title,
  request,
}: {
  title: string;
  request: string;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`/api/movie/${request}`)
      .then(res => res.json())
      .then(data => {
        setMovies(data.results);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
        setIsLoading(true);
      });
  }, [request]);

  return <Movie title={title} movies={movies} isLoading={isLoading} />;
}

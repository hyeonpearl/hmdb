import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Movie from '@/components/Movie';

interface ComponentProps {
  title?: string;
  request: string;
  color?: string;
}

export default function MovieContainer({
  title,
  request,
  color,
}: ComponentProps) {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    request === 'recommend'
      ? fetch(`/api/movie/${router.query.id}/recommendations`)
          .then(res => res.json())
          .then(data => {
            setMovies(data.results);
            setIsLoading(false);
          })
          .catch(error => {
            console.log(error);
            setIsLoading(true);
          })
      : fetch(`/api/movie/${request}`)
          .then(res => res.json())
          .then(data => {
            setMovies(data.results);
            setIsLoading(false);
          })
          .catch(error => {
            console.log(error);
            setIsLoading(true);
          });
  }, [request, router.query.id]);

  return (
    <Movie title={title} movies={movies} isLoading={isLoading} color={color} />
  );
}

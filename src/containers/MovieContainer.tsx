import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';

import Movie from '@/components/Movie';

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

  useEffect(() => {
    request === 'recommend'
      ? fetch(`/api/movie/${router.query.id}/recommendations`)
          .then(res => res.json())
          .then(data => {
            setMovies(data.results);
            console.log(data.results);
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

    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 0;
    }
  }, [request, router.query.id]);

  return (
    <Movie
      title={title}
      movies={movies}
      isLoading={isLoading}
      color={color}
      layout={layout}
      scrollRef={scrollRef}
    />
  );
}

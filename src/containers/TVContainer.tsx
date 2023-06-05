import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';

import TVShow from '@/components/TVShow';

interface ComponentProps {
  request: string;
  layout: string;
  title?: string;
  color?: string;
}

export default function TVContainer({
  request,
  layout,
  title,
  color,
}: ComponentProps) {
  const router = useRouter();

  const scrollRef = useRef<HTMLUListElement>(null);

  const [isLoading, setIsLoading] = useState(true);
  const [tvShows, setTVShows] = useState([]);

  useEffect(() => {
    request === 'recommend'
      ? fetch(`/api/tv/${router.query.id}/recommendations`)
          .then(res => res.json())
          .then(data => {
            setTVShows(data.results);
            setIsLoading(false);
          })
          .catch(error => {
            console.log(error);
            setIsLoading(true);
          })
      : fetch(`/api/tv/${request}`)
          .then(res => res.json())
          .then(data => {
            setTVShows(data.results);
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
    <TVShow
      title={title}
      tvShows={tvShows}
      isLoading={isLoading}
      color={color}
      layout={layout}
      scrollRef={scrollRef}
    />
  );
}

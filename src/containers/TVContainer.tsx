import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import TVShow from '@/components/TVShow';

interface ComponentProps {
  title?: string;
  request: string;
  color?: string;
}

export default function TVContainer({ title, request, color }: ComponentProps) {
  const router = useRouter();

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
  }, [request, router.query.id]);

  return (
    <TVShow
      title={title}
      tvShows={tvShows}
      isLoading={isLoading}
      color={color}
    />
  );
}

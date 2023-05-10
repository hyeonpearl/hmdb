import { useEffect, useState } from 'react';

import TVShow from '@/components/TVShow';

export default function TVContainer({
  title,
  request,
}: {
  title: string;
  request: string;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [tvShows, setTVShows] = useState([]);

  useEffect(() => {
    fetch(`/api/tv/${request}`)
      .then(res => res.json())
      .then(data => {
        setTVShows(data.results);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
        setIsLoading(true);
      });
  }, [request]);

  return <TVShow title={title} tvShows={tvShows} isLoading={isLoading} />;
}

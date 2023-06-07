import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';

import TVShow from '@/components/TVShow';

interface TVShow {
  id: number;
  poster_path: string | null;
  name: string;
  vote_average: number;
}

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
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      let api_url = null;

      request === 'recommendations'
        ? (api_url = `/api/tv/${router.query.id}/recommendations`)
        : (api_url = `/api/tv/${request}/${page}`);

      const response = await (await fetch(api_url)).json();
      const data = response.results;

      const list = data.filter((tvShow: TVShow) => tvShow.poster_path !== null);

      setTVShows(list);
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
    <TVShow
      tvShows={tvShows}
      isLoading={isLoading}
      layout={layout}
      scrollRef={scrollRef}
      title={title}
      color={color}
    />
  );
}

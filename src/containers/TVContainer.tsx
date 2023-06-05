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

  const fetchData = async () => {
    setIsLoading(true);

    try {
      let api_url = null;

      request === 'recommend'
        ? (api_url = `/api/tv/${router.query.id}/recommendations`)
        : (api_url = `/api/tv/${request}`);

      const data = await (await fetch(api_url)).json();

      setTVShows(data.results);
      console.log(data);
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
  }, [request, router.query.id]);

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

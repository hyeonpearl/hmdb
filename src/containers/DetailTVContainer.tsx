import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import DetailTV from '@/components/DetailTV';

interface Genre {
  id: number;
  name: string;
}

export default function DetailTVContainer() {
  const router = useRouter();

  const initialState = {
    name: '',
    original_name: '',
    number_of_seasons: 0,
    number_of_episodes: 0,
    vote_average: 0,
    vote_count: 0,
    poster_path: '',
    backdrop_path: '',
    popularity: 0,
    tagline: '',
    overview: '',
    genres: [{ id: 0, name: '' }],
  };

  const [tvInfo, setTvInfo] = useState(initialState);

  const fetchData = async () => {
    try {
      const data = await (await fetch(`/api/tv/${router.query.id}`)).json();
      setTvInfo(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [router.query.id]);

  const vote_count = new Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(tvInfo.vote_count);

  const popular_count = new Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: 0,
  }).format(tvInfo.popularity);

  const backdrop = `https://image.tmdb.org/t/p/w500/${tvInfo.backdrop_path}`;

  const genres = tvInfo.genres.map((el: Genre) => (
    <li key={el.id}>{el.name}</li>
  ));

  return (
    <DetailTV
      tvInfo={tvInfo}
      vote_count={vote_count}
      popular_count={popular_count}
      backdrop={backdrop}
      genres={genres}
    />
  );
}

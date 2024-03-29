import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import DetailMovie from '@/components/DetailMovie';

interface Genre {
  id: number;
  name: string;
}

export default function DetailMovieContainer() {
  const router = useRouter();

  const initialState = {
    title: '',
    original_title: '',
    runtime: 0,
    vote_average: 0,
    vote_count: 0,
    poster_path: '',
    backdrop_path: '',
    popularity: 0,
    tagline: '',
    overview: '',
    release_date: '',
    genres: [{ id: 0, name: '' }],
  };

  const [movieInfo, setMovieInfo] = useState(initialState);

  const fetchData = async () => {
    try {
      const data = await (await fetch(`/api/movie/${router.query.id}`)).json();
      setMovieInfo(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [router.query.id]);

  const release = movieInfo.release_date.slice(0, 4);

  const vote_count = new Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(movieInfo.vote_count);

  const popular_count = new Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: 0,
  }).format(movieInfo.popularity);

  const backdrop = `https://image.tmdb.org/t/p/w500/${movieInfo.backdrop_path}`;

  const genres = movieInfo.genres
    ? movieInfo.genres.map((el: Genre) => <li key={el.id}>{el.name}</li>)
    : null;

  return (
    <DetailMovie
      movieInfo={movieInfo}
      vote_count={vote_count}
      popular_count={popular_count}
      backdrop={backdrop}
      release={release}
      genres={genres}
    />
  );
}

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import DetailMovie from '@/components/DetailMovie';

interface Genre {
  id: number;
  name: string;
}

export default function Detail() {
  const router = useRouter();

  const [movieInfo, setMovieInfo] = useState({
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
  });

  useEffect(() => {
    fetch(`/api/movie/${router.query.id}`)
      .then(res => res.json())
      .then(data => setMovieInfo(data))
      .catch(error => console.log(error));
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

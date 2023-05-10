import { useEffect } from 'react';
import { useRouter } from 'next/router';

import SEO from '@/components/SEO';

export default function Detail() {
  const router = useRouter();

  useEffect(() => {
    fetch(`/api/movie/${router.query.id}`)
      .then(res => res.json())
      .then(data => console.log(data));
  }, [router.query.id]);

  return (
    <>
      <SEO title={'Detail'} />
    </>
  );
}

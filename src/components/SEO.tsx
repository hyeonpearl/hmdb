import Head from 'next/head';
import React from 'react';

export default function SEO({ title }: { title: string }) {
  return (
    <Head>
      <title>{title} | Hyeoncheol Movie Database</title>
    </Head>
  );
}

import Head from 'next/head';
import React from 'react';

const SEO = ({ title }: { title: string }) => {
  return (
    <Head>
      <title>{title} | Hyeoncheol Movie Database</title>
    </Head>
  );
};

export default SEO;

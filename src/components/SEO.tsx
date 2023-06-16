import Head from 'next/head';

export default function SEO({
  title,
}: {
  title: string | string[] | undefined;
}) {
  return (
    <Head>
      <title>{title} | HMDb</title>
    </Head>
  );
}

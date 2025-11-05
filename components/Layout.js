import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>aniurddha21</title>
        <meta name="description" content="Beautiful products for modern living" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen">{children}</div>
    </>
  );
}
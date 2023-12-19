import MainPage from "@/components/pageComponents/MainPage";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Diablo 4 | Auction</title>
        <meta name="description" content="Auction" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainPage />
      <div id="portal"></div>
    </>
  );
}

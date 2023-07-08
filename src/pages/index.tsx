
import MainLayout from "@/components/layout/main/main-layout";
import { Inter } from "next/font/google";
import Head from "next/head";
import { ReactElement } from "react";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <>
      <Head>
        <title>Class Portal</title>
      </Head>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
        <div className={`relative flex place-items-center`}>
          <h2 className={`mb-3 text-2xl font-semibold`}>Class Portal</h2>
        </div>
      </main>
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}

export default Home;
import Error404Component from "@/components/404";
import Head from "next/head";
import Link from "next/link";
import React from "react";

const Error404 = () => {
  return (
    <>
      <Head>
        <title>Page not Found | Class Portal</title>
      </Head>
      <main className="p-5 bg-gray-50 min-h-screen">
        <Error404Component />
      </main>
    </>
  );
};

export default Error404;

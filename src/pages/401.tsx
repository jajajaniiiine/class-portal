import React from "react";
import Head from "next/head";
import Error401Component from "@/components/401";

const Error401 = () => {
  return (
    <>
      <Head>
        <title>Authorization Required | Class Portal</title>
      </Head>
      <main className="p-5 bg-gray-50 min-h-screen">
        <Error401Component />
      </main>
    </>
  );
};

export default Error401;

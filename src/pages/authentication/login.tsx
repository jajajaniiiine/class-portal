import { Login } from "@/components/authentication/auth-login";
import AuthLayout from "@/components/layout/auth/auth-layout";
import Head from "next/head";
import React, { ReactElement } from "react";

const LoginPage = () => {
  return (
    <>
      <Head>
        <title>Login | Class Portal</title>
      </Head>
      <main
        className={`bg-gray-100 flex min-h-screen flex-col items-center justify-between pt-16`}
      >
        <Login />
      </main>
    </>
  );
};

LoginPage.getLayout = function getLayout(page: ReactElement){
  return (
    <AuthLayout>
      {page}
    </AuthLayout>
  )
}

export default LoginPage;

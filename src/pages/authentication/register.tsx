import { Register } from '@/components/authentication/auth-register'
import AuthLayout from '@/components/layout/auth/auth-layout'
import Head from 'next/head'
import React, { ReactElement } from 'react'

const RegisterPage = () => {
  return (
    <>
      <Head>
        <title>Register | Class Portal</title>
      </Head>
      <main
        className={`bg-gray-100 flex min-h-screen flex-col items-center justify-between p-16`}
      >
        <Register />
      </main>
    </>
  )
}

RegisterPage.getLayout = function getLayout(page: ReactElement){
  return (
    <AuthLayout>
      {page}
    </AuthLayout>
  )
}

export default RegisterPage
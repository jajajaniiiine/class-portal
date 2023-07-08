import ForgotPassword from '@/components/authentication/auth-forgot-password'
import Head from 'next/head'
import React from 'react'

const ForgotPasswordPage = () => {
  return (
    <>
      <Head>
        <title>Forgot Password | Class Portal</title>
      </Head>
      <main
        className={`bg-gray-100 flex min-h-screen flex-col items-center justify-between p-16`}
      >
        <ForgotPassword />
      </main>
    </>
  )
}

export default ForgotPasswordPage
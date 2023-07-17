import DashboardLayout from '@/components/layout/dashboard/dashboard-layout'
import Head from 'next/head'
import React, { ReactElement } from 'react'

const Library = () => {
  return (
    <>
      <Head>
        <title>My Library | Class Portal</title>
      </Head>
      <main className="p-5">
        <div className="flex justify-between">
          <div>
            <h1 className="font-bold text-3xl">My Library</h1>
          </div>
        </div>
      </main>
    </>
  )
}

Library.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>
}

export default Library
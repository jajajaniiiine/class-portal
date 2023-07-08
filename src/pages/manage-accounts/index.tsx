import AdminGuard from "@/components/guards/admin-guard";
import DashboardLayout from "@/components/layout/dashboard/dashboard-layout";
import Head from "next/head";
import React, { ReactElement } from "react";

const Index = () => {
  return (
    <>
      <Head>
        <title>Manage Accounts | Class Portal </title>
      </Head>
      <main className="p-5">
        <div className="flex justify-between">
          <div>
            <h1 className="font-bold text-3xl">Manage Accounts</h1>
          </div>
        </div>
      </main>
    </>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <AdminGuard role={"admin"}>
        <DashboardLayout>{page}</DashboardLayout>
      </AdminGuard>
    </>
  );
};

export default Index;

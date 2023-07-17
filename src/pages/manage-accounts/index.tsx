import AdminGuard from "@/components/guards/admin-guard";
import DashboardLayout from "@/components/layout/dashboard/dashboard-layout";
import Table1 from "@/components/widgets/tables/table-1";
import Head from "next/head";
import React, { ReactElement } from "react";

const Index = () => {

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email"
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone"
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address"
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <div className="flex justify-between">
          <a href="#">Edit</a>
          <a href="#">Delete</a>
        </div>
      )
    }
  ]

  const rows = [
    {
      key: "1",
      name: "John Brown",
      email: "envkt@example.com",
      phone: "87654321",
      address: "New York No. 1 Lake Park"
    }
  ]
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
        <div className="flex flex-col sm:overflow-x-auto sm:-mx-6 lg:-mx-8">
          <Table1 columns={columns} rows={rows} />
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

import RoomCards from "@/components/dashboard/room-cards";
import DashboardLayout from "@/components/layout/dashboard/dashboard-layout";
import Head from "next/head";
import Link from "next/link";
import React, { ReactElement } from "react";

const Dashboard = () => {
  return (
    <>
      <Head>
        <title>Dashboard | Class Portal</title>
      </Head>
      <main className="p-5">
        <div className="flex justify-between">
          <div>
            <h1 className="font-bold text-3xl">Dashboard</h1>
          </div>
          <div className="flex gap-1">
            <select className="p-2 border-2 border-gray-200">
              <option>All</option>
              <option>Draft</option>
              <option>Published</option>
            </select>
            <button className="bg-blue-600 rounded p-2 font-semibold hover:bg-blue-500">
              <Link href={"/dashboard/classroom/add"} className="text-white">Add Classroom</Link>
            </button>
          </div>
        </div>
        <div className="p-5 grid grid-cols-4 gap-4 sm:grid grid-cols-2 md:grid grid-cols-2">
          <RoomCards />
        </div>
      </main>
    </>
  );
};

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
export default Dashboard;

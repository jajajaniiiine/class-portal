import RoomAdd from "@/components/dashboard/room-add";
import AdminGuard from "@/components/guards/admin-guard";
import DashboardLayout from "@/components/layout/dashboard/dashboard-layout";
import Head from "next/head";
import Link from "next/link";
import React, { ReactElement } from "react";

const AddNewClassroom = () => {
  return (
    <>
      <Head>
        <title>Add New Classroom | Class Portal</title>
      </Head>
      <main className="p-5">
        <div className="flex justify-between">
          <div className="flex gap-1">
            <div>
              <button className="bg-blue-600 rounded p-2 font-semibold text-white hover:bg-blue-500">
                <Link href={"/dashboard"}>
                  Back
                </Link>
              </button>
            </div>
            <div>
              <h1 className="font-bold text-3xl">Add Classroom</h1>
            </div>
          </div>
        </div>
        <div className="pt-4">
          <RoomAdd />
        </div>
      </main>
    </>
  );
};

AddNewClassroom.getLayout = function getLayout(page: ReactElement) {
  return (
    <AdminGuard role="admin">
      <DashboardLayout>{page}</DashboardLayout>;
    </AdminGuard>
  );
};

export default AddNewClassroom;

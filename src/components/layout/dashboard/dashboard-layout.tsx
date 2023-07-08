import React, { useState } from "react";
import { DashboardSidebar } from "./dashboard-sidebar";
import { DashboardNavbar } from "./dashboard-navbar";

export default function DashboardLayout({ children }: any) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <DashboardSidebar open={open} />
      <div className="min-h-screen w-full bg-gray-50 !pl-0 text-center sm:!pl-60">
        <DashboardNavbar setOpen={setOpen} />
        <div className="text-center">
          {children}
        </div>
      </div>
    </>
  );
}

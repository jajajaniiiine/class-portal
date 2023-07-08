import React from "react";
import MainNavbar from "./main-navbar";
import Footer from "./main-footer";

export default function MainLayout({ children }: any) {
  return (
    <>
      <MainNavbar />
      {children}
      <Footer />
    </>
  );
}

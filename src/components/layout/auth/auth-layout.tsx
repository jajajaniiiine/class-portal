import React from "react";
import AuthNavbar from "./auth-navbar";

export default function AuthLayout({ children }: any) {
  return (
    <>
      <AuthNavbar />
      {children}
    </>
  );
}

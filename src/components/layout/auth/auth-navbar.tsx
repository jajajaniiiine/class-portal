import Link from "next/link";
import React from "react";

export default function AuthNavbar() {
  return (
    <header className="bg-white-100">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
        aria-label="Global"
      >
        <div className="flex justify-center lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
          <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
          </Link>
        </div>
      </nav>
    </header>
  );
}

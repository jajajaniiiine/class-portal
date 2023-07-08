import Link from "next/link";
import React from "react";

export default function MainNavbar() {
  return (
    <header className="bg-gray-100">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
          <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-500"
          >
            Home
          </a>
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-500"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-500"
          >
            Blogs
          </a>
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-500"
          >
            Contact Us
          </a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="/authentication/login">
            <button className="mr-1 px-4 py-1 text-sm font-semibold rounded-full border border-gray-900 hover:text-white hover:border-transparent hover:bg-gray-500">
              Log in
            </button>
          </Link>
          <Link href="/authentication/register">
            <button className="ml-1 px-4 py-1 text-sm font-semibold rounded-full border border-gray-900 hover:text-white hover:border-transparent hover:bg-gray-500">
              Create an account
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
}

import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="p-10 text-center">
        <div>
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="pt-10 pb-5 flex flex-row justify-center">
          <div className="px-6">
            <Link
              href="#"
              className="text-gray-500 hover:text-black hover:font-bold"
            >
              Home
            </Link>
          </div>
          <div className="px-6">
            <Link
              href="#"
              className="text-gray-500 hover:text-black hover:font-bold"
            >
              About Us
            </Link>
          </div>
          <div className="px-6">
            <Link
              href="#"
              className="text-gray-500 hover:text-black hover:font-bold"
            >
              Blogs
            </Link>
          </div>
          <div className="px-6">
            <Link
              href="#"
              className="text-gray-500 hover:text-black hover:font-bold"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div className="p-5 flex flex-row justify-center">
          <div className="px-6">
            <Link
              href="#"
              className="text-gray-500 hover:text-blue-700 hover:font-bold"
            >
              Facebook
            </Link>
          </div>
          <div className="px-6">
            <Link
              href="#"
              className="text-gray-500 hover:text-black hover:font-bold"
            >
              Instagram
            </Link>
          </div>
          <div className="px-6">
            <Link
              href="#"
              className="text-gray-500 hover:text-cyan-600 hover:font-bold"
            >
              Twitter
            </Link>
          </div>
          <div className="px-6">
            <Link
              href="#"
              className="text-gray-500 hover:text-red-600 hover:font-bold"
            >
              Youtube
            </Link>
          </div>
          <div className="px-6">
            <Link
              href="#"
              className="text-gray-500 hover:text-blue-900 hover:font-bold"
            >
              LinkedIn
            </Link>
          </div>
        </div>
        <div className="p-5 text-sm text-center text-gray-500">
          2023 Company Name, Inc. All right reserved.
        </div>
      </div>
    </footer>
  );
}

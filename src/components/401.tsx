import Link from "next/link";
import React from "react";

export default function Error401Component() {
  return (
    <div className="pt-40 text-center">
      <p className="text-base font-semibold text-indigo-600">401</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Authorization Required
      </h1>
      <p className="mt-6 text-base leading-7 text-gray-600">
        You either tried some shady route or you came here by mistake. Whichever
        it is, try using the navigation.
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Link
          href={"/dashboard"}
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Back to Dashboard
        </Link>
        <a href="#" className="text-sm font-semibold text-gray-900">
          Contact support <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </div>
  );
}

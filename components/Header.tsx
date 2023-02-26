import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

export default function Header({}: Props) {
  return (
    <header>
      <div className="flex justify-between items-center px-24 py-6 bg-slate-800 text-white">
        <div className="font-extrabold text-lg text-yellow-500 ">
          Cultural Committee
        </div>
        <div className="space-x-1 font-semibold text-gray-100">
          <Link href="/" className=" hover:bg-slate-600 px-4 py-3 rounded">
            Home
          </Link>
          <Link
            href="/events"
            className=" hover:bg-slate-600 px-4 py-3 rounded"
          >
            Events
          </Link>
          <Link
            href="contactus"
            className=" hover:bg-slate-600 px-4 py-3 rounded"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}

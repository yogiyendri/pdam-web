import Link from "next/link";
import * as React from "react";
import Logo from "./ui/brand";
import { HiBars3BottomLeft } from "react-icons/hi2";

export default function Navbar() {
  return (
    <header className="border-b">
      <div className="max-w-7xl lg:mx-auto mx-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <div className="p-2 rounded-lg border bg-slate-50 block lg:hidden shadow-sm">
              <HiBars3BottomLeft className="w-6 h-6" />
            </div>
            {/* Brand */}
            <a href="/" className="flex items-center gap-2">
              <Logo className="lg:h-10 h-8" />
              <div className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                <h1 className="text-xl lg:text-2xl text-[#008ce1]">
                  PDAM TIRTA ANTOKAN
                </h1>
                <p className="hidden lg:block text-sm font-normal text-slate-500">
                  KAB. AGAM
                </p>
              </div>
            </a>
          </div>
          {/* Navigation */}
          <nav className="items-center space-x-5 hidden lg:block">
            <Link
              href="/"
              className="text-gray-600 text-sm dark:text-white hover:text-[#008ce1]"
            >
              About
            </Link>
            <Link
              href="/"
              className="text-gray-600 text-sm dark:text-white hover:text-[#008ce1]"
            >
              Tagihan
            </Link>
            <Link
              href="/"
              className="text-gray-600 text-sm dark:text-white hover:text-[#008ce1]"
            >
              News
            </Link>
            <Link
              href="/"
              className="text-gray-600 text-sm dark:text-white hover:text-[#008ce1]"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

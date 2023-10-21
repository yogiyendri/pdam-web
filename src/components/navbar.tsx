import Link from "next/link";
import * as React from "react";
import Logo from "./ui/brand";

export default function Navbar() {
  return (
    <header className="border-b">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <a href="/" className="flex items-center gap-2">
            <Logo className="h-10" />
            <div className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              <h1 className="text-xl lg:text-2xl text-[#008ce1]">
                PDAM TIRTA ANTOKAN
              </h1>
              <p className="hidden lg:block text-sm font-normal text-slate-500">
                KAB. AGAM
              </p>
            </div>
          </a>
          {/* Navigation */}
          <nav className="flex items-center space-x-5">
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

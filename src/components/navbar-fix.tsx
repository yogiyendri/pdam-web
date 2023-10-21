"use client";
import * as React from "react";
import Logo from "./ui/brand";
import { HiBars3BottomLeft, HiXMark } from "react-icons/hi2";
import Link from "next/link";
import { Dialog } from "@headlessui/react";

export default function NavbarExample() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="border-b">
      <div className="max-w-7xl lg:mx-auto mx-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            {/* Hamburger Button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-lg border bg-slate-50 shadow-sm"
              >
                <span className="sr-only">Open main menu</span>
                <HiBars3BottomLeft className="w-6 h-6" />
              </button>
            </div>
            {/* Brand */}
            <div className="flex lg:flex-1">
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
      {/* Mobile Menu */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 bg-slate-800 bg-opacity-30 z-10" />
        <Dialog.Panel className="fixed inset-y-0 left-0 z-10 w-full overflow-y-auto bg-white px-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          {/* Heading Mobile */}
          <div className="flex items-center h-16 gap-4">
            <button
              type="button"
              className="p-2 rounded-lg border bg-slate-50 shadow-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <HiXMark className="w-6 h-6" />
            </button>
            <a href="/" className="flex items-center gap-2">
              <Logo className="h-8" />
              <h1 className="text-xl font-semibold text-[#008ce1]">
                PDAM TIRTA ANTOKAN
              </h1>
            </a>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <nav className="flex flex-col items-center space-x-5">
                  <Link
                    href="/"
                    className="text-gray-600 text-sm hover:text-[#008ce1]"
                  >
                    About
                  </Link>
                  <Link
                    href="/"
                    className="text-gray-600 text-sm hover:text-[#008ce1]"
                  >
                    Tagihan
                  </Link>
                  <Link
                    href="/"
                    className="text-gray-600 text-sm hover:text-[#008ce1]"
                  >
                    News
                  </Link>
                  <Link
                    href="/"
                    className="text-gray-600 text-sm hover:text-[#008ce1]"
                  >
                    Contact
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

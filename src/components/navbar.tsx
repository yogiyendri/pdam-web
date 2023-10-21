import Link from "next/link";
import * as React from "react";

export default function Navbar() {
  return (
    <header className="border-b">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <a href="/" className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlSpace="preserve"
              id="Layer_2"
              viewBox="0 0 448.8 259.3"
              className="h-10"
            >
              <style>{".st0{fill:#008ce1}.st1{fill:#008c00}"}</style>
              <g id="XMLID_1_">
                <g id="XMLID_37_">
                  <path
                    id="XMLID_50_"
                    d="M149 12.6c33.9 0 61.5 27.6 61.5 61.5s-27.6 61.5-61.5 61.5S87.5 108 87.5 74.1s27.6-61.5 61.5-61.5m0-4c-36.2 0-65.5 29.3-65.5 65.5s29.3 65.5 65.5 65.5 65.5-29.3 65.5-65.5S185.2 8.6 149 8.6z"
                    className="st0"
                  />
                </g>
                <path
                  id="XMLID_36_"
                  d="M372.3 67.3c0-37-43.9-67.3-97.9-67.3 0 0-19.2-.5-24.4 1.7 0 0 54 17.1 54 65.2V221h68.5l-.2-153.7z"
                  className="st1"
                />
                <path
                  id="XMLID_39_"
                  d="M449.3 67.3c0-37-43.9-67.3-97.9-67.3 0 0-19.2-.5-24.4 1.7 0 0 54 17.1 54 65.2V221h68.5l-.2-153.7z"
                  className="st1"
                />
                <path
                  id="XMLID_40_"
                  d="M297.3 67.8c0-37-43.9-67.5-97.9-67.5 0 0-19.7-.6-24.9 1.5 0 0 53.5 17 53.5 65v155.1h69.5l-.2-154.1z"
                  className="st1"
                />
                <path
                  id="XMLID_41_"
                  d="M.2 67.8C.2 30.8 44.1.3 98.1.3c0 0 18.9-.6 24.1 1.5 0 0-54.2 17-54.2 65V222H0L.2 67.8z"
                  className="st1"
                />
                <g id="XMLID_5_">
                  <path
                    id="XMLID_7_"
                    d="M33.1 231.3H21.8v28h-9v-28H1.5V225h31.6v6.3z"
                    className="st0"
                  />
                  <path
                    id="XMLID_9_"
                    d="M47.4 259.3h-9V225h9v34.3z"
                    className="st0"
                  />
                  <path
                    id="XMLID_11_"
                    d="M89.8 259.3H79.5l-6.2-8.8c-.5-.7-.9-1.3-1.3-1.8s-.9-1-1.3-1.4c-.4-.4-.9-.7-1.4-.9-.5-.2-1-.3-1.5-.3h-2.4v13.1h-9V225h14.2c9.6 0 14.5 3.1 14.5 9.3 0 1.2-.2 2.3-.6 3.3-.4 1-1 1.9-1.8 2.7-.8.8-1.7 1.5-2.8 2.1-1.1.6-2.3 1.1-3.7 1.4v.1c.6.2 1.2.4 1.7.8.6.4 1.1.8 1.6 1.3l1.5 1.5c.5.6.9 1.1 1.3 1.6l7.5 10.2zm-24.4-28.5v9.5h3.9c1.9 0 3.5-.5 4.6-1.4 1.2-1 1.8-2.2 1.8-3.6 0-3-2.1-4.5-6.2-4.5h-4.1z"
                    className="st0"
                  />
                  <path
                    id="XMLID_14_"
                    d="M120.3 231.3H109v28h-9v-28H88.7V225h31.6v6.3z"
                    className="st0"
                  />
                  <path
                    id="XMLID_16_"
                    d="M156.7 259.3h-9.8l-2.8-7.6H130l-2.8 7.6h-9.7L132 225h10.6l14.1 34.3zM142 245.8l-4.3-11.5c-.3-.9-.5-1.9-.7-3.1h-.2c-.1 1-.3 2-.7 3l-4.3 11.6H142z"
                    className="st0"
                  />
                  <path
                    id="XMLID_19_"
                    d="M212.2 259.3h-9.8l-2.8-7.6h-14.1l-2.8 7.6H173l14.5-34.3h10.6l14.1 34.3zm-14.6-13.5-4.3-11.5c-.3-.9-.5-1.9-.7-3.1h-.2c-.1 1-.3 2-.7 3l-4.3 11.6h10.2z"
                    className="st0"
                  />
                  <path
                    id="XMLID_22_"
                    d="M253 259.3h-9l-16.4-21.6c-1-1.3-1.6-2.2-2-2.8h-.1c.1 1.2.2 3.1.2 5.6v18.9h-8.5V225h9.6l15.8 20.9c.7.9 1.4 1.9 2 2.8h.1c-.1-.8-.2-2.4-.2-4.7v-19h8.5v34.3z"
                    className="st0"
                  />
                  <path
                    id="XMLID_24_"
                    d="M290 231.3h-11.3v28h-9v-28h-11.3V225H290v6.3z"
                    className="st0"
                  />
                  <path
                    id="XMLID_26_"
                    d="M310 259.9c-5.7 0-10.3-1.6-13.9-4.8-3.6-3.2-5.4-7.4-5.4-12.5 0-5.4 1.8-9.8 5.5-13.2s8.5-5 14.5-5c5.7 0 10.3 1.6 13.8 4.8 3.5 3.2 5.3 7.4 5.3 12.7 0 5.4-1.8 9.7-5.4 13-3.8 3.4-8.5 5-14.4 5zm.4-28.8c-3.1 0-5.6 1-7.5 3.1-1.8 2-2.8 4.7-2.8 8.1 0 3.4.9 6.1 2.8 8.1 1.8 2 4.3 3 7.3 3 3.1 0 5.5-1 7.3-2.9 1.8-1.9 2.7-4.6 2.7-8 0-3.6-.9-6.3-2.6-8.3-1.7-2.1-4.1-3.1-7.2-3.1z"
                    className="st0"
                  />
                  <path
                    id="XMLID_29_"
                    d="M369.3 259.3H358l-11.6-14.9c-.2-.3-.6-.9-1.1-1.9h-.1v16.8h-9V225h9v16.2h.1c.2-.4.6-1.1 1.1-1.9l11-14.3h10.7l-13.9 16.4 15.1 17.9z"
                    className="st0"
                  />
                  <path
                    id="XMLID_31_"
                    d="M408.1 259.3h-9.8l-2.8-7.6h-14.1l-2.8 7.6h-9.7l14.5-34.3H394l14.1 34.3zm-14.7-13.5-4.3-11.5c-.3-.9-.5-1.9-.7-3.1h-.2c-.1 1-.3 2-.7 3l-4.3 11.6h10.2z"
                    className="st0"
                  />
                  <path
                    id="XMLID_34_"
                    d="M448.8 259.3h-9l-16.4-21.6c-1-1.3-1.6-2.2-2-2.8h-.1c.1 1.2.2 3.1.2 5.6v18.9H413V225h9.6l15.8 20.9c.7.9 1.4 1.9 2 2.8h.1c-.1-.8-.2-2.4-.2-4.7v-19h8.5v34.3z"
                    className="st0"
                  />
                </g>
                <circle
                  id="XMLID_6_"
                  cx={149}
                  cy={74.3}
                  r={55}
                  className="st0"
                />
              </g>
            </svg>
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

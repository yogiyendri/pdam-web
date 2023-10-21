import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaMap,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import Logo from "./ui/brand";

export default function Footer() {
  return (
    <footer className="border-t">
      {/* Footer Content */}
      <div className="py-16 bg-[#008ce1]/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:justify-between gap-16">
            {/* Left */}
            <div className="space-y-4 lg:w-[30%]">
              {/* Brand */}
              <div className="flex items-center gap-2">
                <Logo className="h-10" />
                <div className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                  <h1 className="text-xl lg:text-2xl text-[#008ce1]">
                    PDAM TIRTA ANTOKAN
                  </h1>
                  <p className="hidden lg:block text-sm font-normal text-slate-500">
                    KAB. AGAM
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-500 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                rerum, reprehenderit perferendis laboriosam molestias rem
                corrupti sequi beatae nisi voluptas.
              </p>
              <div className="flex space-x-6">
                <Link href="/" className="text-gray-500 hover:text-[#0866FF]">
                  <FaFacebook className="w-6 h-6" />
                </Link>
                <Link href="/" className="text-gray-500 hover:text-purple-600">
                  <FaInstagram className="w-6 h-6" />
                </Link>
                <Link href="/" className="text-gray-500 hover:text-[#1DA1F2]">
                  <FaTwitter className="w-6 h-6" />
                </Link>
                <Link href="/" className="text-gray-500 hover:text-[red]">
                  <FaYoutube className="w-6 h-6" />
                </Link>
              </div>
            </div>
            <div className="lg:flex-1 flex flex-col lg:flex-row gap-8 pt-2">
              {/* Contact */}
              <div className="space-y-4 lg:flex-1 pr-8">
                <h3 className="text-xl font-bold">Contact Us</h3>
                <div className="flex flex-col gap-2 text-gray-500">
                  <a href="/" className="flex gap-2">
                    <FaWhatsapp className="w-6 h-6" />
                    0812-3456-7890
                  </a>
                  <div className="flex gap-2">
                    <FaMap className="w-6 h-6" />
                    Jl. Raya Tirta Antokan, Kab. Agam
                  </div>
                </div>
              </div>
              {/* Quick Links */}
              <div className="space-y-4 lg:flex-1">
                <h3 className="text-xl font-bold">Quick Links</h3>
                <div className="flex flex-col gap-1 text-sm lg:pl-1">
                  <Link href="/">About</Link>
                  <Link href="/">Tagihan</Link>
                  <Link href="/">News</Link>
                  <Link href="/">Contact</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="flex flex-col-reverse lg:flex-row gap-4 items-center justify-between bg-brand px-4 py-4 bg-[#008ce1]">
        <div className="w-full text-sm text-center text-slate-100 font-semibold px-8">
          Copyright &#169; <Link href="/">Minimardo.</Link> All rights reserved.
        </div>
      </div>
    </footer>
  );
}

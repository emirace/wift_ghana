"use client";

import { FiSearch } from "react-icons/fi";
import Image from "next/image";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";

const navs = [
  { name: "Home", path: "/" },
  { name: "About", path: "/#about" },
  { name: "President", path: "/#president" },
  { name: "Pillars", path: "/#pillars" },
  { name: "Partner", path: "/#partner" },
  { name: "Contact", path: "/#contact" },
];
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex  justify-between items-center px-6 py-4 overflow-y-auto overflow-x-hidden max-w-7xl mx-auto">
      <div className="flex items-center justify-between w-full md:w-auto ">
        {/* Logo */}
        <div className="flex items-center gap-2 text-2xl font-medium">
          <Image src="/images/logo.png" alt="Logo" width={40} height={40} />
          <div className="mt-2 hidden md:block">WIFT Ghana</div>
        </div>
        <div className="text-3xl md:hidden text-white ">
          {isOpen ? (
            <IoCloseSharp onClick={() => setIsOpen(!isOpen)} />
          ) : (
            <RiMenu3Fill onClick={() => setIsOpen(!isOpen)} />
          )}
        </div>
      </div>

      {/* Nav Links */}
      <div
        className={`fixed md:relative text-sm flex flex-col md:flex-row bg-background md:bg-transparent text-foreground md:text-white gap-8 p-6 md:p-0  font-medium top-0 right-0 w-3/4 h-screen overflow-y-auto md:h-auto md:w-auto transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"
        }`}
      >
        <div>
          <IoCloseSharp
            className="md:hidden"
            size={30}
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
        <div className="flex items-center gap-2 text-2xl font-medium md:hidden">
          <Image src="/images/logo.png" alt="Logo" width={40} height={40} />
          <div className="mt-2 ">WIFT Ghana</div>
        </div>
        <div className="h-full overflow-y-auto flex flex-col md:flex-row gap-6">
          {navs.map((nav) => (
            <a
              href={nav.path}
              key={nav.name}
              className="hover:text-primary-maron uppercase"
            >
              {nav.name}
            </a>
          ))}
        </div>
        <div>
          <FiSearch className="text-xl" />
        </div>
      </div>
    </div>
  );
}

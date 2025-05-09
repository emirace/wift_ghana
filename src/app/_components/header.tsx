import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Navbar from "./navbar";

export default function Header() {
  return (
    <header className="relative  text-white  ">
      <div className="hidden md:flex justify-between items-center px-6 py-4 border-b border-gray-700 max-w-7xl mx-auto">
        <p>
          Welcome to WIFT Ghana.{" "}
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a href="/#contact" className="text-primary-maron">
            Have Any Question?
          </a>
        </p>
        <div className="flex items-center gap-6 text-primary-maron">
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-primary-green" />
            <span>+89756421301</span>
          </div>
          <div className="flex items-center gap-2">
            <HiOutlineMail className="text-primary-green" />
            <span>support@gmail.com</span>
          </div>
        </div>
      </div>
      <Navbar />
    </header>
  );
}

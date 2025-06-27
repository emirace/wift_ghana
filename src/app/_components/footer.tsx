// components/Footer.tsx

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { MdPhone, MdEmail } from "react-icons/md";

const icons = [
  {
    icon: FaFacebookF,
    link: "",
  },

  {
    icon: FaTwitter,
    link: "",
  },

  {
    icon: FaInstagram,
    link: "https://www.instagram.com/wiftghana?igsh=MWx6aXNvbGsxM28zZw==",
  },
  {
    icon: FaLinkedin,
    link: "",
  },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative bg-[#111] text-white pt-20 pb-10 px-8 overflow-hidden"
    >
      {/* Background image on the right */}
      {/* <div className="absolute right-0 top-0 h-full w-full opacity-10 ">
        <img
          src="/images/interview.png"
          alt="Background"
          className="object-cover h-full w-full"
        />
      </div> */}

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div>
          <div className="flex items-center gap-2 text-2xl font-medium mb-4">
            <Image src="/images/logo.png" alt="Logo" width={40} height={40} />
            <div className="mt-2 hidden md:block">WIFT Ghana</div>
          </div>
          <p className="mb-6">
            WIFT Ghana is a proud member of the global WIFTI network, committed
            to empowering women in Ghana’s film, TV, and media industries. We
            amplify voices, champion visibility, and work to dismantle barriers
            to leadership, funding, and inclusion.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4">
            {icons.map((Icon, idx) => (
              <a
                key={idx}
                href={Icon.link}
                target="_blank"
                className="bg-white text-primary-maron p-3 rounded-full cursor-pointer hover:bg-primary-maron hover:text-white transition"
              >
                <Icon.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-primary-maron text-xl font-bold mb-6">
            Contact Info
          </h3>
          <div className="space-y-4 text-sm">
            {/* <div className="flex items-start gap-3">
              <MdLocationOn className="text-primary-green mt-1" size={20} />
              <div>
                <p className="text-white font-semibold">Address</p>
                <p>to be added.</p>
              </div>
            </div> */}
            <div className="flex items-start gap-3">
              <MdPhone className="text-primary-green mt-1" size={20} />
              <div>
                <p className="text-white font-semibold">Phone/Whatsapp</p>
                <p>+233267065858</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MdEmail className="text-primary-green mt-1" size={20} />
              <div>
                <p className="text-white font-semibold">Mail Us</p>
                <p>info@gwift.org</p>
              </div>
            </div>
          </div>
        </div>

        {/* Services List */}
        <div>
          <h3 className="text-primary-maron text-xl font-bold mb-6">
            Services List
          </h3>
          <ul className="space-y-4 text-sm">
            <li>Film Production</li>
            <li>TV Broadcasting</li>
            <li>Scriptwriting</li>
            <li>Directing</li>
            <li>Cinematography</li>
            <li>Acting</li>
            <li>Entrepreneurship in Media</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="relative z-10 border-t border-gray-700 mt-16 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>Copyright ©2025 WIFT Ghana. All Rights Reserved</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link href="/" className="hover:text-primary-maron">
            Home
          </Link>
          <a href="/#about" className="hover:text-primary-maron">
            About
          </a>
          <Link href="/membership" className="hover:text-primary-maron">
            Membership
          </Link>
          <a href="/#pillars" className="hover:text-primary-maron">
            Pillars
          </a>
        </div>
      </div>
    </footer>
  );
}

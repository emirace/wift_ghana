import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaInstagram,
} from "react-icons/fa";

const executives = [
  {
    name: "Juliet Ibrahim",
    role: "PRESIDENT",
    image: "/images/president.jpg",
  },
  {
    name: "Sonia Ibrahim",
    role: "POSITION",
    image: "/images/sonia.jpg",
  },
  {
    name: "Full name",
    role: "pOSITION",
    image: "/images/executive3.jpg",
  },
];

export default function ExecutiveTeam() {
  return (
    <section className="py-12 bg-white text-center max-w-7xl mx-auto">
      <h4 className="text-sm text-primary-maron font-bold uppercase mb-2">
        Our Team Member
      </h4>
      <h2 className="text-4xl font-bold text-gray-900 mb-10">
        Meet Our Executive Team
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3  gap-10">
        {executives.map((exec, idx) => (
          <div
            key={idx}
            className="max-w-72 flex flex-col items-center text-center mx-auto"
          >
            <div className="relative overflow-hidden rounded shadow-lg">
              <Image
                src={exec.image}
                alt={exec.name}
                width={288}
                height={384}
                className="w-full h-96 object-cover  hover:grayscale transition duration-500"
              />
            </div>
            <div className="flex justify-center gap-4 mt-4 text-primary-maron font-bold">
              <FaFacebookF className="hover:text-primary-green cursor-pointer" />
              <FaTwitter className="hover:text-primary-green cursor-pointer" />
              <FaGooglePlusG className="hover:text-primary-green cursor-pointer" />
              <FaInstagram className="hover:text-primary-green cursor-pointer" />
            </div>
            <h5 className="mt-3 text-lg font-semibold text-gray-900">
              {exec.name}
            </h5>
            <p className="text-xs text-primary-maron font-bold mt-1 uppercase">
              {exec.role}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

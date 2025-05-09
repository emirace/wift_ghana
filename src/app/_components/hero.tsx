import { FiArrowRight, FiCamera } from "react-icons/fi";
import Header from "./header";

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center h-screen text-white sm:bg-right"
      style={{
        backgroundImage: "url('/images/hero.png')",
        backgroundPosition: "right",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <Header />

      <div className="relative z-10 flex flex-col justify- h-full max-w-7xl mx-auto">
        <div className="flex flex-col justify-center h-full px-6 max-w-4xl">
          <div className="mb-4 text-primary-maron font-medium flex items-center gap-2">
            <FiCamera className="text-primary-green text-2xl" />
            <span>WIFT Ghana</span>
            <span className="h-1 w-12 bg-white inline-block ml-4"></span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight capitalize">
            Equal opportunities for women in film, tv & screen based media
          </h1>

          <div className="flex gap-4 mt-10">
            <button className="bg-primary-maron flex items-center gap-4 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition">
              About Us <FiArrowRight />
            </button>
            <button className="bg-primary-green flex items-center gap-4 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
              Contact Us <FiArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

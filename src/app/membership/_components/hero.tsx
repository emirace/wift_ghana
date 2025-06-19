import Header from "@/app/_components/header";
import Image from "next/image";
import React from "react";
import { FiCamera } from "react-icons/fi";

const Hero = () => {
  return (
    <section
      className="relative bg-cover flex flex-col bg-center md:h-screen text-white sm:bg-right"
      style={{
        backgroundImage: "url('/images/interview.png')",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/90"></div>
      <Header />
      <div className="relative z-10 flex flex-col md:flex-row justify-center p-6  flex-1 w-full gap-10 items-center  max-w-7xl mx-auto">
        <div className="relative w-full h-96 rounded-3xl overflow-hidden ">
          <Image
            src="/images/interview.png"
            alt="Camera man"
            layout="fill"
            objectFit="cover"
            className="rounded-3xl shadow-lg"
          />
        </div>
        <div className="flex flex-col justify-center items-start  max-w-3xl">
          <div className="mb-4 text-primary-maron font-medium flex items-center gap-2">
            <FiCamera className="text-primary-green text-2xl" />
            <span>WIFTM Ghana</span>
            <span className="h-1 w-12 bg-white inline-block ml-4"></span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight capitalize">
            Become a Member of WIFTM Ghana
          </h1>
          <p className="text-xl my-4">
            Women in Film & Television Ghana (WIFTM Ghana) is a growing
            community of creatives, professionals, and advocates working to
            amplify women’s voices in the screen industries. Choose a membership
            level that matches your experience, goals, and commitment.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfRXtDX6OsOr-TWIEkxNwIp7n597EKfqOwjMYdkzxKTHcaxRg/viewform?embedded=true"
            target="_blank"
            className="bg-primary-maron cursor-pointer text-white font-semibold px-16 py-2 rounded-full shadow-md hover:bg-primary-green transition duration-300"
          >
            Join
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

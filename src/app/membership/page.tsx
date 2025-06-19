import React from "react";
import Hero from "./_components/hero";
import Footer from "../_components/footer";
import MembershipLevels from "./_components/membershipLevels";

function Membership() {
  return (
    <div>
      <Hero />
      <MembershipLevels />
      <div className="p-6 pt-0 flex flex-col justify-center items-center text-center">
        <p className="text-lg md:text-xl font-light mb-8">
          To register for membership, kindly fill out the form here
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfRXtDX6OsOr-TWIEkxNwIp7n597EKfqOwjMYdkzxKTHcaxRg/viewform?embedded=true"
          target="_blank"
          className="bg-primary-maron cursor-pointer text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-primary-green transition duration-300"
        >
          Join the Movement
        </a>
      </div>
      <Footer />
    </div>
  );
}

export default Membership;

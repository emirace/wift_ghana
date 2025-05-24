"use client";

import Image from "next/image";
import { useState } from "react";
import { FiArrowDown, FiArrowRight } from "react-icons/fi";

export default function PresidentStatement() {
  const [continueRead, setContinueRead] = useState(false);

  return (
    <section
      id="president"
      className="relative bg-accent/20 py-20 px-8 flex flex-col md:items-center md:text-center overflow-hidden "
    >
      {/* Top Title */}
      <div className="flex items-center gap-4 mb-4">
        <div className="md:hidden">
          <div className="h-0.5 w-10 bg-primary-green mb-1" />
          <div className="h-0.5 w-10 bg-primary-maron" />
        </div>
        <div className="text-primary-maron font-bold uppercase ">Message</div>
      </div>

      {/* Main Heading */}
      <h2 className="text-3xl md:text-5xl font-bold mb-12 leading-tight max-w-3xl">
        From the President
      </h2>

      {/* Main Content */}
      <div className="flex flex-col items-center md:flex-row gap-10">
        {/* Image with border */}
        <div>
          <div className="relative rounded-3xl w-[300px] h-[400px]">
            <div className="absolute top-[-20px] left-[-20px] w-full h-full bg-primary-green rounded-3xl" />
            <div className="absolute top-[-10px] left-[-10px] w-full h-full bg-primary-maron rounded-3xl" />
            <div className="relative w-full h-full rounded-3xl overflow-hidden">
              <Image
                src="/images/president.jpg"
                alt="President"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <h5 className="text-xl font-bold">
            Juliet Ibrahim{" "}
            <span className="text-primary-maron font-normal text-base">
              / President
            </span>
          </h5>
        </div>

        {/* Statement */}
        <div className=" text-left max-w-xl">
          <div className="text-primary-maron text-5xl mb-4">❝</div>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            It is both an honour and a responsibility to serve as President of
            Women in Film & Television Ghana (WIFT Ghana) — a dynamic,
            purpose-driven network of visionary women in Ghana’s film,
            television, and media industries.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            As part of the global Women in Film & Television International
            (WIFTI) network, our mission is to amplify the voices and visibility
            of women across every level of the entertainment industry. While the
            global industry has made progress, women in Ghana — particularly
            those from underrepresented backgrounds — still face significant
            barriers, including limited access to leadership roles, funding,
            fair compensation, and safe, inclusive workspaces.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            WIFT Ghana exists to change that.
          </p>
          <button
            onClick={() => setContinueRead(!continueRead)}
            className="bg-primary-maron text-white p-4 py-3 rounded-full flex items-center gap-4"
          >
            Continue reading {continueRead ? <FiArrowDown /> : <FiArrowRight />}
          </button>
        </div>
      </div>
      {continueRead && (
        <div className="mt-4 text-left max-w-5xl mx-auto">
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            We are committed to championing gender equality, nurturing creative
            talent, and building an industry where women are empowered to lead,
            innovate, and shape narratives that reflect our diverse realities.
            We believe every woman deserves not just a voice, but a seat at the
            table — as a creator, leader, and changemaker.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            I am continually inspired by the resilience, brilliance, and
            creativity of the women in this community. Together, we are laying
            the foundation for a future where the next generation of Ghanaian
            women in media can thrive — free from limitations, and full of
            possibilities.
          </p>{" "}
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Let’s keep pushing forward, united in purpose and passion — building
            a new era for women in film and television in Ghana and beyond.
          </p>
        </div>
      )}
    </section>
  );
}

"use client";

import Image from "next/image";
import { useState } from "react";
import { FiArrowDown, FiArrowRight } from "react-icons/fi";

export default function PresidentStatement() {
  const [continueRead, setContinueRead] = useState(false);

  return (
    <section
      id="president"
      className="relative bg-accent/50 py-20 px-8 flex flex-col md:items-center md:text-center overflow-hidden "
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
                src="/images/image01.jpg"
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
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            It is a privilege to serve as President of this vibrantgroup of
            women in Ghana's film and television industries. Our chapter is part
            of a global network ofWomen In Film and Television International
            groups that promote gender equality in the film and
            televisionindustries, and we are dedicated to improvingwomen's roles
            in these fields. Despite recent advancements globally, women in our
            industry continue to confrontsubstantial difficulties. Women are
            frequently excluded and underrepresented in thesector, with unequal
            compensation and little prospects for leadership positions. Thisis
            especially true for women from marginalized groups, who face
            significantobstacles to entry and advancement.
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
        <div className="mt-4 text-gray-700 text-lg leading-relaxed mb-6 text-left max-w-5xl mx-auto">
          In addition, sexual harassment and discrimination are all too
          widespread in the film and television industries, making them
          inhospitable places for women. In addition to having an effect on the
          specific women who encounter these problems, theseproblems also feed
          into an inhospitable and exclusive culture. We are dedicated as an
          organization to resolving these problems and establishing a more fair
          and welcoming workplace for all women. We're going to keep pushing
          formore leadership possibilities, safe and courteous working
          conditions, and equitablecompensation. Additionally, we will endeavor
          to advance diversity and inclusivity in representation and
          storytelling so that all women can see themselves representedon
          television. I am honored to be a member of this community of driven
          and committed women, and I have faith that we can change things
          together. Let's stick together and keepfighting for a more just and
          equal industry.
        </div>
      )}
    </section>
  );
}

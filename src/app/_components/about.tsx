import Image from "next/image";
import ColorLines from "./colorLines";

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-white py-16 px-8 max-w-7xl mx-auto"
    >
      <ColorLines text="About Us" />
      <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 md:mb-6 max-w-xl">
        <span className="text-primary-green">WIFT</span> Ghana{" "}
      </h2>
      <div className="flex flex-col-reverse md:flex-row items-center gap-10 justify-between ">
        <div className="md:w-3/5 mt-12 md:mt-0">
          <p className="font-medium mb-2 text-lg">
            Redefining Ghana’s Film, TV & Digital Media — One Woman at a Time
          </p>
          <p className="text-gray-600 mb-2 text-lg leading-relaxeyd">
            There’s a silent revolution happening in Ghana’s film and television
            industry — and at the heart of it is a fierce, unstoppable network
            of women. Welcome to Women in Film and Television Ghana (WIFT
            Ghana)— a force committed to rewriting the story of women in media.
          </p>

          <p className="text-gray-600 mb-4 text-lg leading-relaxeyd">
            As the Ghanaian chapter of Women in Film & Television International
            (WIFTI) — a global network with over 50 powerful chapters worldwide
            — our mission is clear: To close the gender gap in production,
            leadership, funding, and storytelling. We’re not just advocating for
            change. We are building it.
          </p>
          <div className="text-primary-green text-2xl font-semibold mb-2">
            Who We Are
          </div>

          <p className="text-gray-600 mb-2 text-lg leading-relaxeyd">
            WIFT Ghana is home to a growing collective of filmmakers, producers,
            directors, screenwriters, editors, actors, cinematographers, and
            media professionals united by a common vision: to amplify women’s
            voices, champion equity, and reshape how stories are told — both in
            front of and behind the screen.
          </p>
          <p className="text-gray-600 mb-2 text-lg leading-relaxeyd">
            We believe that a fully inclusive and female-empowered industry is
            not just an ideal — it’s essential. A dynamic, diverse media
            landscape is one where every voice matters and every woman thrives.
          </p>

          {/* <div className="flex items-center gap-6">
            <button className="bg-primary-maron hover:bg-primary-text-primary-maron text-white font-semibold py-3 px-8 rounded-full flex items-center gap-2">
              Learn More
              <span className="text-xl">➔</span>
            </button>
          </div> */}
        </div>

        <div className="relative md:mt-12 lg:mt-0 w-full md:w-2/5">
          <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden md:-mt-28">
            <Image
              src="/images/image04.JPG"
              alt="Camera man"
              layout="fill"
              objectFit="cover"
              className="rounded-3xl shadow-lg"
            />
          </div>
          <div className="absolute -bottom-16 right-0 w-[250px] md:w-[350px] h-[200px] md:h-[300px] rounded-3xl overflow-hidden ">
            <Image
              src="/images/image05.JPG"
              alt="Smiling man"
              layout="fill"
              objectFit="cover"
              className="rounded-3xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

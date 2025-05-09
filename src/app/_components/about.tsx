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
          <p className="text-gray-600 mb-8 text-lg leading-relaxeyd">
            A network of women called Women in Film and Television Ghana (WIFT
            Ghana) is working to create a more diverse film, television, and
            digital media landscape. We aim to close the gender gap in
            production,leadership, and narrative as a chapter of Women in Film
            and Television International (WIFTI), which hasmore than 50 chapters
            worldwide. Filmmakers, producers, screenwriters, performers, and
            mediaprofessionals dedicated to promoting innovation and career
            advancement make up our membership. Inour opinion, a completely
            female-represented sector will be more dynamic and more
            representative of a range of viewpoints. Through our programs, we
            hope to provide women in all facets of media with thetools and
            chances they need to succeed. Professionals such as actors, writers,
            producers, and directors are among our members. Since we thinkthat
            diversity and inclusion are essential to building a thriving and
            prosperous sector, we strive to givewomen from all backgrounds the
            chance to thrive. Through our efforts, we seek to encourage women
            inour sector to thrive, follow their aspirations, have access to a
            network of support, and gain economicempowerment for all future
            generations.
          </p>

          <div className="flex items-center gap-6">
            <button className="bg-primary-maron hover:bg-primary-text-primary-maron text-white font-semibold py-3 px-8 rounded-full flex items-center gap-2">
              Learn More
              <span className="text-xl">➔</span>
            </button>
          </div>
        </div>

        <div className="relative md:mt-12 lg:mt-0 w-full md:w-2/5">
          <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden md:-mt-28">
            <Image
              src="/images/interview.png"
              alt="Camera man"
              layout="fill"
              objectFit="cover"
              className="rounded-3xl shadow-lg"
            />
          </div>
          <div className="absolute -bottom-16 left-10 w-[250px] md:w-[350px] h-[200px] md:h-[300px] rounded-3xl overflow-hidden ">
            <Image
              src="/images/camgirl.png"
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

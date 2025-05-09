const pillars = [
  {
    title: "ECONOMIC EMPOWERMENT",
    description:
      "We provide training, mentorship, access to funding, and networking opportunities to help women advance their careers and gain greater visibility in the industry. This will in turn give women a fighting chance against violence, sexual exploitation, and underrepresentation.",
  },
  {
    title: "EQUALITY",
    description:
      "We are committed to advocating for gender equity in the industry. Our programs and projects will position women in places of power and enable equal access to resources as we work with stakeholders to promote policies and practices that ensure equal opportunities for women in all aspects of the industry, from creative roles to leadership positions.",
  },
  {
    title: "TRAINING",
    description:
      "Capacity building and creative business training to help women understand the diverse nature of the film, TV and screen-based media industry.",
  },
  {
    title: "ACCESS",
    description:
      "We utilize networks from our global chapters to expand our access and facilitate collaboration, and co-production across the world.",
  },
  {
    title: "DIVERSITY AND INCLUSION",
    description:
      "We recognize the importance of promoting diversity and inclusion in storytelling, especially in a Multicultural and multi-ethnic country like Ghana. We encourage the creation and distribution of works by women and underrepresented groups, as well as support diverse perspectives and narratives that reflect the richness and complexity of the Ghanaian society.",
  },
];

export default function Pillars() {
  return (
    <section
      id="pillars"
      className="flex flex-col md:flex-row items-center justify-between gap-8 px-6 py-16 max-w-7xl mx-auto"
    >
      {/* Text Content */}
      <div className="flex-1">
        <h2 className="text-4xl font-bold leading-tight mb-10">Pillars</h2>

        <div className="space-y-8">
          {pillars.map((pillar, index) => (
            <div key={index} className="flex items-start gap-6">
              <div className="relative">
                <div className="w-14 h-14 rounded-full bg-primary-green flex items-center justify-center text-background text-xl font-bold">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>
              <div className="flex-1 border-l-2 border-primary-maron pl-4">
                <h4 className="text-xl font-bold text-primary-maron">
                  {pillar.title}
                </h4>
                <p className="text-gray-600">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center relative">
        <div className="relative z-10 w-[500px] h-[500px] rounded-full overflow-hidden border-8 border-white shadow-lg">
          <img
            src="/images/training.png"
            alt="Main"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md">
          <img
            src="/images/image01.jpg"
            alt="Top Right"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="absolute -bottom-8 right-8 w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md">
          <img
            src="/images/image02.jpg"
            alt="Bottom Right"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}

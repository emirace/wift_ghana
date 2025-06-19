const MembershipLevels = () => {
  const levels = [
    {
      title: "Student Member",
      price: "Always Free",
      description:
        "For full-time undergraduate or graduate students. Requires proof of enrollment. Stay informed, access select resources, and connect with peers starting out in the industry.",
      badge: "",
    },
    {
      title: "Ally Member",
      price: "GHC 200 (Bronze)",
      description:
        "For supporters and advocates of gender equity in media. Perfect for industry friends, collaborators, and enthusiasts.",
      badge: "",
    },
    {
      title: "Creative Member",
      price: "GHC 500 (Silver)",
      description:
        "For those new to or growing within the screen industries — actors, writers, editors, directors, producers, and more.",
      benefits: [
        "Discounted access to workshops and events",
        "Submission eligibility for showcase opportunities",
        "Access to networking circles and community forums",
      ],
    },
  ];

  const levels2 = [
    {
      title: "Storyteller Member",
      price: "GHC 1,500 (Gold)",
      description:
        "For mid-career creatives, producers, and multi-hyphenates seeking growth, partnerships, and mentorship.",
      benefits: [
        "Includes everything in Silver, plus:",
        "Invitations to advanced masterclasses (production, directing, funding)",
        "Listing in WIFTM Ghana’s Creative Directory",
        "Priority access to industry networking events",
      ],
    },
    {
      title: "Champion Member",
      price: "GHC _______ (Platinum)",
      description:
        "For established professionals passionate about shaping the future.",
      benefits: [
        "Includes everything in Gold, plus:",
        "Mentorship opportunities",
        "Speaking opportunities and leadership recognition",
        "VIP invitations to curated industry events",
        "Recognition on our website and annual publications",
      ],
    },
  ];

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {levels.map((level, index) => (
            <div
              key={index}
              className=" p-6 rounded-xl duration-300 border border-primary-maron bg-accent/20"
            >
              <h3 className="text-xl font-semibold  mb-2">{level.title}</h3>
              <p className="text-lg font-bold text-primary-maron mb-4">
                {level.price}
              </p>
              <p className=" mb-4">{level.description}</p>
              {level.benefits && (
                <ul className=" space-y-2">
                  {level.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-primary-green text-2xl mr-2">
                        •
                      </span>{" "}
                      {benefit}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-6 mt-6">
          {levels2.map((level, index) => (
            <div
              key={index}
              className="p-6 rounded-xl duration-300 border border-primary-maron bg-accent/20"
            >
              <h3 className="text-xl font-semibold  mb-2">{level.title}</h3>
              <p className="text-lg font-bold text-primary-maron mb-4">
                {level.price}
              </p>
              <p className=" mb-4">{level.description}</p>
              {level.benefits && (
                <ul className=" space-y-2">
                  {level.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-primary-green text-2xl mr-2">
                        •
                      </span>{" "}
                      {benefit}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembershipLevels;

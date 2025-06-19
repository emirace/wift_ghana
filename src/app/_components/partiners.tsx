export default function Partners() {
  const partners = [
    { name: "WIF", logo: "/images/wif.jpg" },
    { name: "WIFT African", logo: "/images/wift_african.jpg" },
    { name: "Ghana Film Commission", logo: "/images/un_women.jpg" },
    { name: "Cypress", logo: "/images/cypress.JPG" },
    { name: "Black Hub", logo: "/images/blackhub.png" },
    { name: "Wifii", logo: "/images/wifti_logo.png" },
  ];

  return (
    <section id="partner" className="bg-white py-16 px-6 md:px-20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-primary-maron mb-10">
        Our Partners & Supporters
      </h2>
      <div className="flex flex-wrap gap-8 items-center justify-around max-w-6xl mx-auto">
        {partners.map((partner, index) => (
          <div key={index} className="flex items-center justify-center">
            <img
              src={partner.logo}
              alt={partner.name}
              className="w-24 md:w-32 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

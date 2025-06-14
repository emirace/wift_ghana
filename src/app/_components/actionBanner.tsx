"use client";

export default function ActionBanner() {
  return (
    <section className="relative bg-gradient-to-b from-primary-maron to-primary-green text-white py-10 px-6 md:px-16 overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('/images/interview.png')] bg-cover bg-center pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-extrabold leading-tight mb-6">
          We Are Not Just Changing Stories —<br />
          We Are Changing{" "}
          <span className="underline decoration-white">
            Who Gets to Tell Them
          </span>
          .
        </h2>
        <p className="text-lg md:text-xl font-light mb-8">
          Join us in building a Ghana where women not only dream in color but
          direct, produce, write, and act in it too.
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfRXtDX6OsOr-TWIEkxNwIp7n597EKfqOwjMYdkzxKTHcaxRg/viewform?embedded=true"
          target="_blank"
          className="bg-white cursor-pointer text-primary-maron font-semibold px-8 py-3 rounded-full shadow-md hover:bg-orange-100 transition duration-300"
        >
          Join the Movement
        </a>
      </div>
    </section>
  );
}

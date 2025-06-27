import React from "react";
import { FiCalendar } from "react-icons/fi";

const events = [
  "WIFTM Ghana Festival & Awards",
  "WIFTM Ghana Summit",
  "WIFTM Ghana Seminar",
  "WIFTM Ghana Workshop",
  "WIFTM Ghana Conference",
];

const UpcomingEventSection = () => {
  return (
    <section className="py-10 font-inter bg-accent/20">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-4xl font-bold  text-center mb-10">
          Upcoming WIFTM Ghana summit 
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <li
              key={index}
              className="bg-white p-5 rounded-xl flex items-center gap-4  hover:scale-105 transition-all duration-300 border border-gray-100"
            >
              <FiCalendar className="text-2xl text-primary-maron" />
              <div className="text-lg font-medium">{event}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default UpcomingEventSection;

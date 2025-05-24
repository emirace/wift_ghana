"use client";

import { FiCheckCircle } from "react-icons/fi";
import { motion } from "framer-motion";

const objectives = [
  "Provide tools and platforms to help women advance their careers in the Ghanaian film and TV industry",
  "Champion diverse and inclusive storytelling by amplifying women and marginalized creators",
  "Advocate for safe, respectful, and equitable workplaces across all media spaces",
  "Build a thriving community through mentorship programs, networking events, training workshops, and educational access",
  "Connect Ghanaian women to a global network of industry professionals across continents for support, visibility, and collaboration",
];

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function OurObjectives() {
  return (
    <section className="py-20 px-6 md:px-20 text-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-6 text-primary-maron"
        >
          Our Objectives
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg text-center text-gray-700 mb-10 max-w-3xl mx-auto"
        >
          We’re committed to empowering women in Ghana’s film, television, and
          media industry through actionable goals and real impact.
        </motion.p>

        <ul className="space-y-6">
          {objectives.map((item, index) => (
            <motion.li
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={itemVariants}
              className="flex items-start gap-4"
            >
              <FiCheckCircle className="text-primary-green mt-1" size={24} />
              <p className="text-lg text-gray-800 leading-relaxed">{item}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

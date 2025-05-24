"use client";

import { FaLightbulb } from "react-icons/fa";
import { FiBarChart, FiUsers } from "react-icons/fi";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function WhyUs() {
  return (
    <section className="bg-accent/20 py-20 px-6 md:px-20 text-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-primary-maron mb-4"
        >
          Why WIFT Ghana?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Ghana’s media and entertainment industry is booming — but the
          opportunities are not equally shared. Women still face barriers to
          funding, recognition, mentorship, and leadership. WIFT Ghana exists to
          break down those barriers and build a thriving, inclusive space for
          women in media.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {[...Array(3)].map((_, i) => {
            const Icon = i === 0 ? FaLightbulb : i === 1 ? FiUsers : FiBarChart;
            const title =
              i === 0
                ? "Bold Advocacy"
                : i === 1
                ? "Community & Mentorship"
                : "Sustainable Growth";
            const description =
              i === 0
                ? "We champion policy and awareness that push for equality and visibility for women in film, TV, and media."
                : i === 1
                ? "We foster strong networks and mentorship for skill-sharing, career growth, and shared success."
                : "Through training, funding access, and visibility, we’re growing a resilient creative industry — powered by women.";

            return (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
                className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition duration-300"
              >
                <Icon className="text-primary-green mb-4" size={32} />
                <h3 className="text-xl font-semibold text-primary-maron mb-2">
                  {title}
                </h3>
                <p className="text-gray-600">{description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    title: "Economic Empowerment",
    description:
      "We offer training, mentorship, funding access, and visibility platforms that empower women to break the cycle of underrepresentation, exploitation, and economic inequality. When women succeed economically, they gain power to shape their stories and destinies.",
  },
  {
    title: "Equality",
    description:
      "We relentlessly advocate for equal pay, equal leadership opportunities, and equitable creative recognition. Our programs are designed to push women into decision-making roles and influence policies that level the playing field.",
  },
  {
    title: "Capacity Building",
    description:
      "Through continuous training and creative business education, we equip women with the tools and insights to thrive in the ever-evolving screen business — from script to screen, and from concept to commercial success.",
  },
  {
    title: "Access & Global Collaboration",
    description:
      "We leverage our international network across WIFTI to expand access, spark co-productions, and build bridges for Ghanaian women to collaborate on a global stage.",
  },
  {
    title: "Diversity & Inclusion",
    description:
      "We embrace Ghana’s multicultural and multiethnic identity by supporting diverse storytelling. We champion voices from underrepresented communities and push for authentic, inclusive narratives that reflect the depth and soul of Ghanaian society.",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function Pillars() {
  return (
    <section
      id="pillars"
      className="flex flex-col md:flex-row items-center justify-between gap-8 px-6 py-16 max-w-7xl mx-auto"
    >
      {/* Text Content */}
      <div className="flex-1">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold leading-tight mb-10"
        >
          Core Values
        </motion.h2>

        <div className="space-y-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={itemVariants}
              className="flex items-start gap-6"
            >
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
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="flex-1 flex items-center justify-center relative"
      >
        <div className="relative z-10 w-[500px] h-[500px] rounded-full overflow-hidden border-8 border-white shadow-lg">
          <img
            src="/images/training.png"
            alt="Main"
            className="object-cover w-full h-full"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 30, y: -30 }}
          whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="absolute -top-8 -right-8 w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md"
        >
          <img
            src="/images/image01.jpg"
            alt="Top Right"
            className="object-cover w-full h-full"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: -30, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="absolute -bottom-8 right-8 w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md"
        >
          <img
            src="/images/image02.jpg"
            alt="Bottom Right"
            className="object-cover w-full h-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

"use client";

import { FiArrowRight, FiCamera } from "react-icons/fi";
import Header from "./header";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center h-screen text-white sm:bg-right"
      style={{
        backgroundImage: "url('/images/hero.png')",
        backgroundPosition: "right",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <Header />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 flex flex-col justify- h-full max-w-7xl mx-auto"
      >
        <div className="flex flex-col justify-center h-full px-6 max-w-4xl">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mb-4 text-primary-maron font-medium flex items-center gap-2"
          >
            <FiCamera className="text-primary-green text-2xl" />
            <span>WIFT Ghana</span>
            <span className="h-1 w-12 bg-white inline-block ml-4"></span>
          </motion.div>

          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold leading-tight capitalize"
          >
            Equal opportunities for women in film, tv & screen based media
          </motion.h1>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  delayChildren: 1.2,
                  staggerChildren: 0.3,
                },
              },
            }}
            className="flex gap-4 mt-10"
          >
            <motion.a
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              href="#about"
              className="bg-primary-maron flex items-center gap-4 text-white px-6 py-3 rounded-full font-semibold"
            >
              About Us <FiArrowRight />
            </motion.a>

            <motion.a
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              href="#contact"
              className="bg-primary-green flex items-center gap-4 text-white px-6 py-3 rounded-full font-semibold "
            >
              Contact Us <FiArrowRight />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

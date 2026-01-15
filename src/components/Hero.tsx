"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaArrowDown } from "react-icons/fa";

export default function Hero() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#1c1c1c] text-white overflow-hidden px-4 md:px-8 py-20">
      {/* Top Pill */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" as const }}
        className="relative group mb-12"
      >
        <div className="absolute inset-0 bg-[#71ddae] rounded-full blur-[15px] opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
        <div className="relative bg-white text-black rounded-full pl-2 pr-6 py-2 flex items-center shadow-lg">
          <div className="mr-3 shrink-0">
            <Image
              src="/assets/2_Logo_Bulle.png"
              alt="Logo"
              width={24}
              height={24}
              className="w-8 h-8 object-contain"
            />
          </div>
          <span className="text-xs md:text-sm font-bold tracking-wide">
            CRÉER UN SITE WEB <span className="underline decoration-2 underline-offset-2">VRAIMENT</span> UNIQUE
          </span>
        </div>
      </motion.div>

      {/* Headline */}
      <motion.h1
        className="text-4xl md:text-6xl lg:text-7xl font-bold text-center leading-tight max-w-5xl mb-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Line 1 */}
        <div className="flex flex-wrap justify-center gap-x-2 md:gap-x-2">
          <motion.span variants={wordVariants} className="text-white">Votre</motion.span>
          <motion.span variants={wordVariants} className="text-[#71ddae]">site</motion.span>
          <motion.span variants={wordVariants} className="text-white">doit</motion.span>
          <motion.span variants={wordVariants} className="text-[#71ddae]">donner envie</motion.span>
          <motion.span variants={wordVariants} className="text-white">de</motion.span>
        </div>
        
        {/* Line 2 */}
        <div className="flex flex-wrap justify-center gap-x-2 md:gap-x-4">
          <motion.span variants={wordVariants} className="text-[#71ddae]">rester,</motion.span>
          <motion.span variants={wordVariants} className="text-white">pas de</motion.span>
          <motion.span 
            variants={wordVariants} 
            className="text-[#71ddae] line-through decoration-[#1c1c1c] decoration-4"
          >
            revenir
          </motion.span>
          <motion.span variants={wordVariants} className="text-white relative">
             en
          </motion.span>
        </div>

        {/* Line 3 */}
         <div className="flex flex-wrap justify-center gap-x-2 md:gap-x-4">
          <motion.span 
            variants={wordVariants} 
            className="text-[#71ddae] line-through decoration-[#1c1c1c] decoration-4"
          >
            arrière.
          </motion.span>
        </div>
      </motion.h1>

      {/* Subtitle */}
      <motion.div
        variants={fadeUpVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1 }}
        className="text-gray-400 text-center text-sm md:text-lg mb-12 space-y-1"
      >
        <p>Design moderne, SEO solide, Suivi complet :</p>
        <p>on construit un site qui retient vos visiteurs et vous apporte des résultats.</p>
      </motion.div>

      {/* Buttons & CTA Image */}
      <div className="relative">
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          {/* Primary Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#71ddae] text-[#1c1c1c] font-bold px-8 py-3 rounded-md flex items-center gap-2 hover:bg-[#5ecda0] transition-colors shadow-[0_0_15px_rgba(113,221,174,0.3)]"
          >
             <FaCalendarAlt className="text-lg" />
             <span>Prendre RDV</span>
          </motion.button>

          {/* Secondary Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent border border-gray-600 text-white font-medium px-8 py-3 rounded-md flex items-center gap-2 hover:bg-white/5 hover:border-gray-500 transition-all"
          >
            <span>Découvrir nos projets</span>
            <FaArrowDown />
          </motion.button>
        </motion.div>

         <motion.div
           initial={{ opacity: 0, rotate: -10 }}
           animate={{ opacity: 1, rotate: 0 }}
           transition={{ delay: 1.5, duration: 0.7 }}
           className="hidden lg:block absolute -left-12 top-8 pointer-events-none"
         >
           <Image
             src="/assets/3_Un_Ptit_Click.png"
             alt="Un p'tit click ?"
             width={140}
             height={80}
             className="object-contain"
           />
         </motion.div>
      </div>
    </section>
  );
}

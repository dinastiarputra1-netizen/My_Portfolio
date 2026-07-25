import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import fotoProfil from '../assets/foto-hero.png'; 

function Hero() {
  const targetRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const textVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] },
    },
  };

  const photoVariants = {
    hidden: { x: -80, opacity: 0 }, 
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1.2, ease: [0.33, 1, 0.68, 1], delay: 0.3 },
    },
  };

  return (
    <section 
      id="home"
      ref={targetRef}
      className="relative min-h-screen flex items-center justify-center bg-[#050505] overflow-hidden pt-20"
    >
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[130px]" />
        <div className="absolute inset-0 opacity-20" 
             style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>

      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full"
      >
        
        {/* AREA FOTO: Muncul hanya di layar Laptop/PC (lg:) */}
        <motion.div
          variants={photoVariants}
          initial="hidden"
          animate="visible"
          className="hidden lg:flex relative items-center justify-start z-10 lg:col-span-5"
        >
          <div className="relative flex justify-center w-full">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -z-10" />
            <img
              src={fotoProfil}
              alt="Dinastiar Putra"
              className="w-auto max-h-[82vh] object-contain drop-shadow-[0_0_35px_rgba(59,130,246,0.25)]"
            />
          </div>
        </motion.div>


        {/* AREA TEKS: Terpusat di HP & Tablet, Rata Kiri di Laptop/PC */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left flex flex-col items-center lg:items-start lg:col-span-7 lg:pl-6 my-auto py-12 lg:py-0"
        >
          {/* Badge Status */}
          <motion.div 
            variants={textVariants}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md"
          >
            <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-white/80 text-xs md:text-sm font-semibold tracking-widest uppercase">
              Informatics Student & Developer
            </span>
          </motion.div>

          {/* Heading: Di HP text-5xl -> Di Tablet naik drastis jadi md:text-7xl -> Di Desktop lg:text-[95px] */}
          <motion.h1 
            variants={textVariants}
            className="text-5xl md:text-7xl lg:text-[95px] font-black text-white leading-[0.95] tracking-tighter mb-8"
          >
            CREATING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500">
              DIGITAL
            </span>
            <span className="italic font-light text-white/30 block sm:inline sm:ml-4">
              Flow.
            </span>
          </motion.h1>

          {/* Deskripsi: Ukuran font diperbesar di Tablet (md:text-xl) */}
          <motion.p 
            variants={textVariants}
            className="text-base md:text-xl lg:text-lg text-zinc-400 max-w-xl md:max-w-2xl lg:max-w-xl mb-12 leading-relaxed font-light"
          >
            Halo, saya <span className="text-white font-medium">Dinastiar</span>. 
            Menciptakan solusi digital yang sederhana untuk menyelesaikan masalah yang kompleks.
          </motion.p>

          {/* Tombol CTA: Ukuran tombol lebih berisi di Tablet */}
          <motion.div 
            variants={textVariants}
            className="flex flex-wrap justify-center lg:justify-start items-center gap-5 w-full sm:w-auto"
          >
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 md:px-10 py-4 md:py-5 bg-white text-black rounded-full font-bold text-sm md:text-base tracking-wide transition-all shadow-lg shadow-white/10 hover:bg-zinc-200 text-center flex-1 sm:flex-none"
            >
              Start a Project
            </motion.a>

            <motion.a 
              href="#projects"
              whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.08)" }}
              whileTap={{ scale: 0.97 }}
              className="px-8 md:px-10 py-4 md:py-5 border border-white/15 text-white rounded-full font-bold text-sm md:text-base tracking-wide backdrop-blur-sm transition-all text-center flex-1 sm:flex-none"
            >
              Check Works
            </motion.a>
          </motion.div>
        </motion.div>

      </motion.div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}

export default Hero;
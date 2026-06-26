import React from 'react';
import { motion } from 'framer-motion';

function Services() {
  const services = [
    {
      title: "Data Entry",
      desc: "Layanan input data cepat dan akurat untuk berbagai kebutuhan basis data bisnis Anda.",
      icon: "📊"
    },
    {
      title: "Data Processing",
      desc: "Transformasi data mentah menjadi informasi terstruktur yang siap digunakan untuk analisis.",
      icon: "⚙️"
    },
    {
      title: "Automation Script",
      desc: "Efisiensi maksimal dengan skrip otomatisasi untuk tugas-tugas administratif yang berulang.",
      icon: "🚀"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="services" className="relative bg-[#050505] py-32 px-6 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[120px] -z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-4"
          >
            MY <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
              SERVICES.
            </span>
          </motion.h2>
          <div className="w-20 h-1 bg-blue-600 rounded-full" />
        </div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-xl hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 italic uppercase tracking-tighter">
                {service.title}
              </h3>
              <p className="text-white/50 leading-relaxed font-light">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
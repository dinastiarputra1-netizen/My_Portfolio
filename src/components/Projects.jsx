import React from 'react';
import { motion } from 'framer-motion';

// 1. IMPORT GAMBAR DISINI (Pastikan path ke folder assets benar)
// Jika Projects.jsx di src/components dan gambar di src/assets, gunakan ../assets/
import GambarProjek1 from '../assets/projek1.png'; 
import GambarProjek2 from '../assets/projek2.png';
import GambarProjek3 from '../assets/projek3.png';
import GambarProjek4 from '../assets/projek4.png';
import GambarProjek5 from '../assets/projek5.png';

function Projects() {
  const projects = [
    {
      title: "Landing Page SB Papandayan",
      desc: "Desain landing page interaktif dengan fokus pada konversi dan pengalaman pengguna yang mulus.",
      image: GambarProjek1, // 2. GUNAKAN VARIABLE IMPORT (Tanpa tanda kutip)
      tech: ["React", "Tailwind", "Framer Motion"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Landing Page GustoDelis",
      desc: "Landing Page sederhana dengan Desain minimalis dan clean serta direct link reservasi via Whatsapp.",
      image: GambarProjek2, // Sementara gunakan gambar yang sama jika belum ada file lain
      tech: ["HTML", "CSS", "Java Script"],
      color: "from-green-400 to-emerald-600"
    },
    {
      title: "Excel Merge Tool",
      desc: "Automation tool untuk menggabungkan banyak file Excel secara instan dengan presisi data yang tinggi.",
      image: GambarProjek3, // Sementara gunakan gambar yang sama jika belum ada file lain
      tech: ["Python", "Pandas", "Automation"],
      color: "from-green-400 to-emerald-600"
    },
    {
      title: "Job Matching System",
      desc: "Sebuah sistem sederhana yang dirancang untuk mencari pekerjaan yang cocok berdasarkan CV yang diunggah.",
      image: GambarProjek4, // Sementara gunakan gambar yang sama jika belum ada file lain
      tech: ["Python", "Pandas", "Automation"],
      color: "from-green-400 to-emerald-600"
    },
    {
      title: "AI Talent Matcher",
      desc: "Sebuah sistem sederhana yang dirancang untuk memilah kandidat yang cocok dengan kriteria pekerjaan.",
      image: GambarProjek5, // Sementara gunakan gambar yang sama jika belum ada file lain
      tech: ["Python", "Pandas", "Automation"],
      color: "from-green-400 to-emerald-600"
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="projects" className="relative bg-[#050505] py-32 px-6 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-4"
          >
            SELECTED <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
              PROJECTS.
            </span>
          </motion.h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative bg-[#0a0a0a] border border-white/5 rounded-[2rem] overflow-hidden transition-all duration-500 hover:border-white/20"
            >
              {/* CONTAINER GAMBAR (16:9) */}
              <div className="relative aspect-video overflow-hidden bg-white/5">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
              </div>

              <div className="p-8 md:p-10">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[9px] font-bold text-blue-400 border border-blue-400/20 bg-blue-400/5 px-2.5 py-1 rounded-md uppercase tracking-widest">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/50 leading-relaxed mb-8 line-clamp-2">
                  {project.desc}
                </p>
                <div className="flex items-center justify-between">
                  <button className="flex items-center gap-2 text-white font-bold text-sm group/btn">
                    View Project <span className="inline-block transition-transform group-hover/btn:translate-x-1">→</span>
                  </button>
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${project.color} opacity-20 blur-xl group-hover:opacity-100 transition-opacity`} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
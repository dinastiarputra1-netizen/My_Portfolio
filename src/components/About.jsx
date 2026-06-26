import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Code2, Zap, Database, Briefcase, GraduationCap, MapPin, Calendar, Award, ChevronRight } from 'lucide-react';

// Import foto profil
import FotoProfil from '../assets/foto.png';

function About() {
  const { scrollYProgress } = useScroll();
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const [activeTab, setActiveTab] = useState('skills');

  const tabs = [
    { id: 'skills', label: 'Skills', icon: Code2 },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
  ];

  const skills = [
    { name: 'Artificial Intelligence', level: 85, color: 'from-blue-500 to-cyan-400' },
    { name: 'Workflow Automation', level: 80, color: 'from-yellow-500 to-amber-400' },
    { name: 'Problem Solving', level: 85, color: 'from-emerald-500 to-green-400' },
    { name: 'Data Processing', level: 80, color: 'from-violet-500 to-purple-400' },
    { name: 'Rapid Prototyping', level: 80, color: 'from-orange-500 to-red-400' },
    { name: 'Software Development', level: 75, color: 'from-orange-500 to-red-400' },
  ];

  const experiences = [
    {
      role: 'Cyberlabs',
      company: 'Tech Company',
      period: '2023 - 2024',
      desc: 'Mengembangkan solusi software dan automation untuk kebutuhan enterprise.'
    },
  ];

  const education = [
    {
      degree: 'S1 Teknik Informatika',
      school: 'Universitas Islam Nusantara',
      year: '2021 - 2025',
      detail: 'Fokus pada pengembangan software dan sistem informasi.'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, rotateY: -10 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotateY: 0,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  const tabContent = {
    skills: (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
        className="space-y-5"
      >
        {skills.map((skill, i) => (
          <div key={i} className="group">
            <div className="flex justify-between items-center mb-2">
              <span className="text-white/80 font-medium text-sm">{skill.name}</span>
              <span className="text-white/40 text-xs font-mono">{skill.level}%</span>
            </div>
            <div className="h-2 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`h-full rounded-full bg-gradient-to-r ${skill.color} relative`}
              >
                <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse" />
              </motion.div>
            </div>
          </div>
        ))}
      </motion.div>
    ),
    experience: (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
        className="space-y-6"
      >
        {experiences.map((exp, i) => (
          <div key={i} className="relative pl-6 border-l border-white/10 group">
            <div className="absolute left-0 top-0 w-2 h-2 -translate-x-[5px] rounded-full bg-blue-500 group-hover:scale-150 transition-transform" />
            <h4 className="text-white font-bold text-lg">{exp.role}</h4>
            <div className="flex items-center gap-3 mt-1 mb-2">
              <span className="text-blue-400 text-sm font-medium">{exp.company}</span>
              <span className="text-white/20">|</span>
              <span className="text-white/40 text-xs flex items-center gap-1">
                <Calendar className="w-3 h-3" /> {exp.period}
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">{exp.desc}</p>
          </div>
        ))}
      </motion.div>
    ),
    education: (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
        className="space-y-6"
      >
        {education.map((edu, i) => (
          <div key={i} className="relative pl-6 border-l border-white/10 group">
            <div className="absolute left-0 top-0 w-2 h-2 -translate-x-[5px] rounded-full bg-violet-500 group-hover:scale-150 transition-transform" />
            <h4 className="text-white font-bold text-lg">{edu.degree}</h4>
            <div className="flex items-center gap-3 mt-1 mb-2">
              <span className="text-violet-400 text-sm font-medium">{edu.school}</span>
              <span className="text-white/20">|</span>
              <span className="text-white/40 text-xs flex items-center gap-1">
                <Calendar className="w-3 h-3" /> {edu.year}
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">{edu.detail}</p>
          </div>
        ))}
      </motion.div>
    )
  };

  return (
    <section id="about" className="relative bg-[#030305] py-32 px-6 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-600/3 rounded-full blur-[150px] -z-0" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-violet-600/3 rounded-full blur-[150px] -z-0" />

      {/* Subtle Grid */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), 
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
            <Briefcase className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-white/60">About Me</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6">
            GET TO KNOW
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-purple-500">
              ME BETTER.
            </span>
          </h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* LEFT COLUMN - Photo Area (5 cols) */}
          <motion.div 
            className="lg:col-span-5 relative"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Photo Container */}
            <div className="relative">
              {/* Background Glow */}
              <motion.div 
                style={{ y: imageY }}
                className="absolute -inset-4 bg-gradient-to-br from-blue-500/10 via-violet-500/10 to-purple-500/10 
                  rounded-[2.5rem] blur-2xl"
              />

              {/* Photo Frame */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 border border-white/10 
                rounded-[2rem] p-3 overflow-hidden group">

                {/* Inner Border */}
                <div className="relative rounded-[1.5rem] overflow-hidden bg-[#0a0a0f]">
                  {/* Photo */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <img 
                      src={FotoProfil} 
                      alt="Profile" 
                      className="w-full h-auto object-cover"
                    />
                  </motion.div>

                  {/* Bottom Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-60" />

                  {/* Info Badge */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
                      <h3 className="text-white font-bold text-xl mb-1">Dinastiar Putra</h3>
                      <div className="flex items-center gap-4 text-white/50 text-xs">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> Indonesia
                        </span>
                        <span className="flex items-center gap-1">
                          <Award className="w-3 h-3" /> Fresh Graduate
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stats Cards */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -left-4 top-1/4 bg-[#0a0a0f] border border-white/10 rounded-2xl p-4 
                  shadow-2xl shadow-blue-500/10 hidden lg:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <Code2 className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">2+</p>
                    <p className="text-white/40 text-xs">Years Coding</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="absolute -right-4 bottom-1/3 bg-[#0a0a0f] border border-white/10 rounded-2xl p-4 
                  shadow-2xl shadow-violet-500/10 hidden lg:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-violet-400" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">15+</p>
                    <p className="text-white/40 text-xs">Projects Done</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN - Content Area (7 cols) */}
          <motion.div 
            className="lg:col-span-7"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Quote / Intro */}
            <motion.div variants={itemVariants} className="mb-10">
              <div className="relative">
                <span className="absolute -top-6 -left-2 text-6xl text-white/5 font-serif">"</span>
                <p className="text-2xl md:text-3xl text-white/80 leading-relaxed font-light pl-6 border-l-2 border-blue-500/30">
                  Lulusan <span className="text-white font-medium">Teknik Informatika</span> yang berfokus membangun solusi digital untuk menyelesaikan masalah nyata.
                </p>
              </div>
            </motion.div>

            {/* Description */}
            <motion.div variants={itemVariants} className="mb-10">
              <p className="text-white/40 leading-relaxed text-lg">
                Saya percaya <span className="text-blue-400">Teknologi</span>, 
                bukan tentang siapa yang menulis kode paling banyak, tetapi siapa yang mampu menghadirkan solusi terbaik. Saya memanfaatkan <span className="text-emerald-400">Artificial Intelligence, automation, dan berbagai tools digital </span>, untuk mempercepat pengembangan aplikasi, mengolah data, serta meningkatkan produktivitas.
              </p>
            </motion.div>

            {/* Expertise Tags */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-12">
              {['AI Integration', 'Automation', 'No-Code / Low-Code', 'Data Processing', 'Problem Solving'].map((tag, i) => (
                <span 
                  key={i}
                  className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/60 
                    text-sm font-medium hover:bg-white/10 hover:border-white/20 transition-all cursor-default"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* Tabs Navigation */}
            <motion.div variants={itemVariants} className="mb-8">
              <div className="flex gap-2 p-1.5 bg-white/5 rounded-2xl border border-white/5 w-fit">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 
                        flex items-center gap-2 ${isActive ? 'text-white' : 'text-white/40 hover:text-white/70'}`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeAboutTab"
                          className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-violet-500/20 
                            border border-blue-500/30 rounded-xl"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                      <span className="relative z-10 flex items-center gap-2">
                        <Icon className="w-4 h-4" />
                        {tab.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </motion.div>

            {/* Tab Content */}
            <motion.div 
              variants={itemVariants}
              className="bg-white/[0.03] border border-white/[0.06] rounded-3xl p-8 md:p-10"
            >
              {tabContent[activeTab]}
            </motion.div>

            {/* Quick Stats Row */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 mt-8"
            >
              {[
                { icon: Code2, label: 'Tech Stack', value: '3+' },
                { icon: Database, label: 'Data Processed', value: '100+' },
                { icon: Award, label: 'Certifications', value: '2+' },
              ].map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div 
                    key={i} 
                    className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5 text-center 
                      hover:bg-white/[0.06] hover:border-white/10 transition-all group"
                  >
                    <Icon className="w-5 h-5 text-white/30 mx-auto mb-2 group-hover:text-blue-400 transition-colors" />
                    <p className="text-white font-bold text-2xl mb-1">{stat.value}</p>
                    <p className="text-white/30 text-xs">{stat.label}</p>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
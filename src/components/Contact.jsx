import React from 'react';
import { motion } from 'framer-motion';

// --- AUTHENTIC SVG BRAND LOGOS ---
const EmailIcon = () => (
  <svg className="w-8 h-8 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const WhatsappIcon = () => (
  <svg className="w-8 h-8 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.148-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.579-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-8 h-8 text-sky-400" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const GithubIcon = () => (
  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-8 h-8 text-pink-400" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg className="w-8 h-8 text-red-500" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.12-2.12C19.8 3.5 12 3.5 12 3.5s-7.8 0-9.378.566a3.016 3.016 0 0 0-2.12 2.12A31.55 31.55 0 0 0 0 12a31.55 31.55 0 0 0 .502 5.814 3.016 3.016 0 0 0 2.12 2.12C4.2 20.5 12 20.5 12 20.5s7.8 0 9.378-.566a3.016 3.016 0 0 0 2.12-2.12A31.55 31.55 0 0 0 24 12a31.55 31.55 0 0 0-.502-5.814ZM9.75 15.568V8.432L15.5 12l-5.75 3.568Z" />
  </svg>
);

function Contact() {
  // --- KONFIGURASI LINK DIRECT KAMU ---
  const contactInfo = [
    {
      label: "Email",
      value: "dinastiarputra1@gmail.com",
      link: "mailto:dinastiarputra1@gmail.com?subject=Tertarik%20Kerja%20Sama%20Project",
      icon: <EmailIcon />,
      hoverBorder: "hover:border-blue-500/50",
      hoverShadow: "hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]"
    },
    {
      label: "WhatsApp",
      value: "+62 857-9734-2071",
      // Ganti 6281234567890 dengan nomor WA kamu (Angka 0 di depan diganti 62)
      link: "https://wa.me/6285797342071?text=Halo%20Dinastiar,%20saya%20melihat%20portfolio%20Anda%20dan%20tertarik%20untuk%20berdiskusi.",
      icon: <WhatsappIcon />,
      hoverBorder: "hover:border-emerald-500/50",
      hoverShadow: "hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]"
    },
    {
      label: "LinkedIn",
      value: "Dinastiar Putra",
      link: "https://linkedin.com/in/dinastiarputra",
      icon: <LinkedinIcon />,
      hoverBorder: "hover:border-sky-500/50",
      hoverShadow: "hover:shadow-[0_0_30px_rgba(14,165,233,0.15)]"
    },
    {
      label: "Github",
      value: "Dinastiar Putra",
      link: "https://github.com/dinastiarputra1-netizen",
      icon: <GithubIcon />,
      hoverBorder: "hover:border-white/40",
      hoverShadow: "hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
    },
    {
      label: "Instagram",
      value: "@dinastiar_putra",
      link: "https://instagram.com/dinastiar_putra",
      icon: <InstagramIcon />,
      hoverBorder: "hover:border-pink-500/50",
      hoverShadow: "hover:shadow-[0_0_30px_rgba(236,72,153,0.15)]"
    },
    {
      label: "YouTube",
      value: "Dinastiar Putra",
      link: "https://youtube.com/@dinastiarputra?si=QBIkyMAX2S9TTznh",
      icon: <YoutubeIcon />,
      hoverBorder: "hover:border-red-500/50",
      hoverShadow: "hover:shadow-[0_0_30px_rgba(239,68,68,0.15)]"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="contact" className="relative bg-[#050505] py-32 px-6 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[140px] pointer-events-none -z-0" />

      <div className="max-w-6xl mx-auto relative z-10 text-center">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-6 uppercase">
            GET IN <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
              TOUCH.
            </span>
          </h2>
          <p className="text-white/40 uppercase tracking-[0.3em] text-xs md:text-sm font-bold">
            Klik kartu di bawah untuk terhubung langsung dengan saya
          </p>
        </motion.div>

        {/* Contact Grid (Menggunakan Flex-Wrap agar 5 kartu terpusat simetris) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6"
        >
          {contactInfo.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.98 }}
              className={`group bg-[#0a0a0a] border border-white/10 p-8 rounded-[2.2rem] transition-all duration-500 w-full sm:w-[280px] md:w-[310px] flex flex-col items-center justify-center hover:bg-[#121212] ${contact.hoverBorder} ${contact.hoverShadow}`}
            >
              <div className="mb-5 transform group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
                {contact.icon}
              </div>
              
              <p className="text-zinc-500 text-[11px] uppercase tracking-widest font-bold mb-1.5 group-hover:text-zinc-300 transition-colors">
                {contact.label}
              </p>
              
              <h4 className="text-white font-semibold text-base md:text-lg tracking-tight truncate w-full">
                {contact.value}
              </h4>

              {/* Action hint kecil */}
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1 text-[11px] text-white/50">
                <span>Connect</span>
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Footer Text */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-32 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <p className="text-zinc-500 text-xs md:text-sm tracking-widest font-medium">
            © 2024 DINASTIAR. BUILT WITH REACT & TAILWIND.
          </p>
          <div className="flex gap-8 text-zinc-400 text-xs font-bold uppercase tracking-widest">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Contact;
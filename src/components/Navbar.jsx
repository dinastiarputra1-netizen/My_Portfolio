import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Menambahkan efek blur saat user melakukan scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`w-full fixed top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#050505]/80 backdrop-blur-xl py-4 border-b border-white/5' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        
        {/* Logo Section */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center font-black text-white text-xl">
            D
          </div>
          <span className="text-2xl font-black tracking-tighter text-white">
            DINASTIAR.
          </span>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">
          {['Home', 'About', 'Projects', 'Services', 'Contact'].map((item) => (
            <li 
              key={item}
              className="relative cursor-pointer transition-all hover:text-white"
            >
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>

        {/* Action Button */}
        <div className="flex items-center gap-4">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block px-6 py-2.5 bg-white text-black text-[11px] font-black uppercase tracking-widest rounded-full transition-all"
          >
            Hire Me
          </motion.button>
          
          {/* Mobile Menu Icon */}
          <div className="md:hidden flex flex-col gap-1.5 cursor-pointer p-2">
            <span className="w-6 h-[1px] bg-white"></span>
            <span className="w-4 h-[1px] bg-white self-end"></span>
          </div>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
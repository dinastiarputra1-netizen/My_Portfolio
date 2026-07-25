import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

function Projects() {
  return (
    <section id="projects" className="relative bg-[#050505] py-32 px-6 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-4">
            SELECTED <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
              PROJECTS.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
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
                  <Link
                    to={`/projects/${project.id}`}
                    className="flex items-center gap-2 text-white font-bold text-sm group/btn"
                  >
                    View Project <span className="inline-block transition-transform group-hover/btn:translate-x-1">→</span>
                  </Link>
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${project.color} opacity-20 blur-xl group-hover:opacity-100 transition-opacity`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
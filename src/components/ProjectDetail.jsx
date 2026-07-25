import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { projects } from '../data/projects';

function ProjectDetail() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projects.find((item) => item.id === projectId);

  if (!project) {
    return (
      <section className="min-h-screen bg-[#050505] py-24 px-6 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-slate-400 mb-8">Maaf, proyek yang diminta tidak ditemukan.</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-bold uppercase tracking-widest text-white transition hover:bg-white/10"
          >
            Kembali ke Portfolio
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#050505] py-24 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-10">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-bold uppercase tracking-widest text-white transition hover:bg-white/10"
            >
              ← Kembali
            </button>
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-transparent bg-gradient-to-r from-blue-500 to-cyan-500 px-5 py-3 text-sm font-bold uppercase tracking-widest text-black transition hover:opacity-90"
            >
              Kembali ke Portfolio
            </Link>
          </div>

          <div className="text-right text-sm text-slate-400">
            <span className="block">Project Detail</span>
            <span className="block mt-1 text-white">{project.title}</span>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-[2rem] border border-white/10 bg-[#0a0a0a] overflow-hidden shadow-2xl shadow-black/20">
            <div className="relative aspect-[16/10] overflow-hidden bg-white/5">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-transparent to-transparent" />
            </div>
            <div className="p-10">
              <span className="inline-flex rounded-full bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-blue-200">
                {project.tech.join(' • ')}
              </span>
              <h1 className="mt-8 text-4xl font-black tracking-tighter text-white sm:text-5xl">
                {project.title}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-slate-300">{project.longDesc}</p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-[2rem] border border-white/10 bg-[#0a0a0a] p-8 shadow-2xl shadow-black/20">
              <h2 className="text-sm font-bold uppercase tracking-[0.35em] text-slate-400">Ikhtisar</h2>
              <p className="mt-4 text-white/80 leading-relaxed">{project.desc}</p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-[#0a0a0a] p-8 shadow-2xl shadow-black/20">
              <h2 className="text-sm font-bold uppercase tracking-[0.35em] text-slate-400">Detail Proyek</h2>
              <ul className="mt-6 space-y-4">
                {project.details.map((detail, index) => (
                  <li key={index} className="flex gap-3 text-slate-200">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-blue-400" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-[#0a0a0a] p-8 shadow-2xl shadow-black/20">
              <h2 className="text-sm font-bold uppercase tracking-[0.35em] text-slate-400">Teknologi</h2>
              <div className="mt-6 flex flex-wrap gap-3">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetail;
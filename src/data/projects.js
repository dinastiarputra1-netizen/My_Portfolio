import GambarProjek1 from '../assets/projek1.png';
import GambarProjek2 from '../assets/projek2.png';
import GambarProjek3 from '../assets/projek3.png';
import GambarProjek4 from '../assets/projek4.png';
import GambarProjek5 from '../assets/projek5.png';

export const projects = [
  {
    id: 'sb-papandayan',
    title: 'Landing Page SB Papandayan',
    desc: 'Desain landing page interaktif dengan fokus pada konversi dan pengalaman pengguna yang mulus.',
    image: GambarProjek1,
    tech: ['React', 'Tailwind', 'Framer Motion'],
    color: 'from-blue-500 to-cyan-500',
    details: [
      'Landing page modern dengan layout responsif dan navigasi yang jelas.',
      'Animasi halus untuk meningkatkan engagement pengguna.',
      'Call-to-action strategis untuk mengarahkan pengunjung ke proses pemesanan.',
    ],
    longDesc:
      'Projek ini menonjolkan estetika profesional dan keterbacaan informasi, membuat pengunjung langsung memahami nilai SB Papandayan. Setiap elemen didesain agar estetis, responsif, dan mudah dinavigasi.',
  },
  {
    id: 'gusto-delis',
    title: 'Landing Page GustoDelis',
    desc: 'Landing Page sederhana dengan desain minimalis dan clean serta direct link reservasi via Whatsapp.',
    image: GambarProjek2,
    tech: ['HTML', 'CSS', 'JavaScript'],
    color: 'from-green-400 to-emerald-600',
    details: [
      'Desain minimalis untuk tampilan bersih dan profesional.',
      'Tombol reservasi langsung ke WhatsApp untuk pengalaman pengguna cepat.',
      'Konten yang mudah dipahami dengan fokus pada informasi penting.',
    ],
    longDesc:
      'GustoDelis menghadirkan landing page ringan yang mudah diakses di perangkat apa pun. Struktur kontennya dibuat agar pelanggan segera tahu menu, layanan, dan cara reservasi dengan cepat.',
  },
  {
    id: 'excel-merge-tool',
    title: 'Excel Merge Tool',
    desc: 'Automation tool untuk menggabungkan banyak file Excel secara instan dengan presisi data yang tinggi.',
    image: GambarProjek3,
    tech: ['Python', 'Pandas', 'Automation'],
    color: 'from-violet-500 to-fuchsia-500',
    details: [
      'Automasi penggabungan file Excel dari banyak sumber menjadi satu file konsisten.',
      'Validasi format dan struktur data untuk meminimalkan kesalahan manual.',
      'Desain sederhana untuk meningkatkan produktivitas dan efisiensi kerja.',
    ],
    longDesc:
      'Excel Merge Tool membantu pengguna menghemat waktu saat memproses banyak dokumen. Solusi ini dirancang untuk stabilitas data dan kemudahan penggunaan, cocok untuk tim yang sering menangani laporan berganda.',
  },
  {
    id: 'job-matching-system',
    title: 'Job Matching System',
    desc: 'Sebuah sistem sederhana yang dirancang untuk mencari pekerjaan yang cocok berdasarkan CV yang diunggah.',
    image: GambarProjek4,
    tech: ['Python', 'Pandas', 'Automation'],
    color: 'from-orange-500 to-amber-500',
    details: [
      'Algoritme sederhana untuk mencocokkan kandidat dengan lowongan berdasarkan kriteria yang relevan.',
      'Proses upload CV dan analisis data tekstual secara otomatis.',
      'Meningkatkan akurasi rekomendasi pekerjaan dengan meminimalisir pekerjaan manual.',
    ],
    longDesc:
      'Job Matching System memberikan pengalaman awal untuk mempercepat proses pencarian pekerjaan. Dengan pendekatan data-driven, sistem ini membantu menemukan kecocokan yang lebih tepat untuk kandidat dan perekrut.',
  },
  {
    id: 'ai-talent-matcher',
    title: 'AI Talent Matcher',
    desc: 'Sebuah sistem sederhana yang dirancang untuk memilah kandidat yang cocok dengan kriteria pekerjaan.',
    image: GambarProjek5,
    tech: ['Python', 'Pandas', 'Automation'],
    color: 'from-indigo-500 to-sky-500',
    details: [
      'Pemrosesan data kandidat untuk menghasilkan rekomendasi yang relevan.',
      'Filter kriteria berbasis keahlian, pengalaman, dan preferensi kerja.',
      'Mendesain alur yang mudah dipahami oleh pengguna non-teknis.',
    ],
    longDesc:
      'AI Talent Matcher memadukan analisis data dan automasi untuk membantu proses seleksi kandidat. Fokusnya pada kepraktisan dan hasil yang mudah diterjemahkan dalam konteks rekrutmen.',
  },
];
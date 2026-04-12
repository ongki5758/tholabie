import React from 'react';
import { BadgeCheck, Home, Briefcase, Compass, BookMarked, ClipboardList, ArrowRight, Check } from 'lucide-react';

export default function Scholarship() {
  const benefits = [
    {
      icon: <BadgeCheck className="w-8 h-8 text-accent mb-4" />,
      title: '100% Bebas Biaya Kuliah',
      desc: 'Beasiswa penuh selama masa studi program D3 Politeknik Kota Malang.',
      delay: '',
    },
    {
      icon: <Home className="w-8 h-8 text-accent mb-4" />,
      title: 'Fasilitas Asrama Islami',
      desc: 'Akomodasi gratis di lingkungan asrama yang terstruktur untuk membangun karakter Islami.',
      delay: 'delay-100',
    },
    {
      icon: <Briefcase className="w-8 h-8 text-accent mb-4" />,
      title: 'Pelatihan Life & Digital Skills',
      desc: 'Pelatihan ekstrakurikuler intensif dalam bidang digital marketing, pemanfaatan AI, dan kewirausahaan.',
      delay: 'delay-200',
    },
    {
      icon: <Compass className="w-8 h-8 text-accent mb-4" />,
      title: 'Pendampingan Karier',
      desc: 'Bimbingan langsung untuk persiapan memasuki dunia kerja atau memulai bisnis setelah lulus.',
      delay: 'delay-300',
    },
  ];

  return (
    <section id="beasiswa" className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="2" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <span className="text-accent uppercase tracking-widest text-sm font-bold mb-4 block">Program Resmi 2026</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
            Beasiswa Kuliah Berasrama <br /> Politeknik Kota Malang & CIBS
          </h2>
          <p className="text-white text-lg">
            Beasiswa pendidikan terintegrasi yang dirancang khusus untuk lulusan berpotensi tinggi dari keluarga dengan keterbatasan ekonomi.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            {benefits.map((b, idx) => (
              <div
                key={idx}
                className={`animate-on-scroll ${b.delay} bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl text-white hover:bg-white/20 transition-colors`}
              >
                {b.icon}
                <h3 className="text-lg font-bold mb-2">{b.title}</h3>
                <p className="text-sm text-gray-300">{b.desc}</p>
              </div>
            ))}
          </div>

          <div className="animate-on-scroll delay-400 bg-white rounded-3xl p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-bl-full -z-0"></div>

            <h3 className="text-xl font-serif font-bold text-secondary mb-6 relative z-10 flex items-center gap-2">
              <BookMarked className="w-5 h-5 text-primary" /> Pilihan Program Studi
            </h3>
            <ul className="space-y-3 mb-8 relative z-10">
              <li className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                <span className="w-2 h-2 rounded-full bg-primary"></span> D3 Teknik Informatika
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                <span className="w-2 h-2 rounded-full bg-primary"></span> D3 Teknik Mekatronika
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                <span className="w-2 h-2 rounded-full bg-primary"></span> D3 Teknik Telekomunikasi
              </li>
            </ul>

            <h3 className="text-xl font-serif font-bold text-secondary mb-6 relative z-10 flex items-center gap-2">
              <ClipboardList className="w-5 h-5 text-primary" /> Syarat Pendaftaran
            </h3>
            <ul className="space-y-3 mb-8 relative z-10">
              {[
                'Lulusan SMA/SMK/Sederajat (Pesantren)',
                'Tahun kelulusan 2024 atau 2025',
                'Berasal dari keluarga prasejahtera',
                'Bersedia tinggal dan mematuhi Tata Tertib Tholabie CIBS',
              ].map((s, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://wa.me/6285183003060"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center w-full px-6 py-4 bg-secondary text-white font-semibold rounded-xl hover:bg-secondary-light transition-colors relative z-10 shadow-md group"
            >
              Mulai Pendaftaran
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

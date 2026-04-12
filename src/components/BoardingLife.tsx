import React from 'react';
import { Sunrise, Building2, Laptop, Moon } from 'lucide-react';

export default function BoardingLife() {
  const rhythm = [
    {
      icon: <Sunrise className="w-8 h-8 mx-auto text-accent mb-3" />,
      title: 'Pagi Hari',
      desc: "Qiyamul Lail, Subuh berjamaah, Tahsin/Tahfidz Qur'an, dan persiapan sarapan.",
      delay: '',
    },
    {
      icon: <Building2 className="w-8 h-8 mx-auto text-primary mb-3" />,
      title: 'Siang Hari',
      desc: 'Perkuliahan formal dan aktivitas akademik di kampus Politeknik.',
      delay: 'delay-100',
    },
    {
      icon: <Laptop className="w-8 h-8 mx-auto text-blue-500 mb-3" />,
      title: 'Sore Hari',
      desc: 'Inkubasi keahlian: Digital marketing, bahasa asing, dan sesi kepemimpinan.',
      delay: 'delay-200',
    },
    {
      icon: <Moon className="w-8 h-8 mx-auto text-secondary mb-3" />,
      title: 'Malam Hari',
      desc: 'Maghrib berjamaah, kajian keislaman (Diniyah), dan jam belajar mandiri.',
      delay: 'delay-300',
    },
  ];

  const gallery = [
    { src: '/img/pondok-pesantren-tholabie-malang.webp', label: 'Fasilitas Nyaman', delay: '' },
    { src: '/img/pondok-tholabie-malang.webp', label: 'Pembelajaran Digital', delay: 'delay-100' },
    { src: '/img/pesantren-tholabie-malang.webp', label: 'Kolaborasi Pembelajaran', delay: 'delay-200', hideMobile: true },
  ];

  return (
    <section id="asrama" className="py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <span className="text-primary uppercase tracking-widest text-xs font-bold mb-4 block">Kehidupan Asrama</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-6">Lingkungan Terstruktur untuk Bertumbuh</h2>
          <p className="text-gray-600 mb-4">
            Kami menyediakan lingkungan yang suportif, disiplin, dan kaya akan nilai spiritual. Orang tua dapat merasa tenang mengetahui anak-anak mereka diawasi dan membangun kebiasaan harian yang positif.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-xl font-bold text-center text-secondary mb-8 animate-on-scroll">Irama Harian Santri</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {rhythm.map((item, idx) => (
              <div
                key={idx}
                className={`animate-on-scroll ${item.delay} bg-white p-5 rounded-2xl border border-gray-100 text-center shadow-sm hover:shadow-md transition-shadow`}
              >
                {item.icon}
                <h4 className="font-bold text-sm mb-1 text-secondary">{item.title}</h4>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {gallery.map((img, idx) => (
            <div
              key={idx}
              className={`animate-on-scroll ${img.delay} aspect-square bg-gray-200 rounded-2xl overflow-hidden group relative shadow-md ${
                img.hideMobile ? 'hidden md:block' : ''
              }`}
            >
              <img
                src={img.src}
                alt={img.label}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-white font-medium text-sm">{img.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

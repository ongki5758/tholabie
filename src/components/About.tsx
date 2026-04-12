import React from 'react';
import { Heart, Clock, Book, Flag, Lightbulb } from 'lucide-react';

export default function About() {
  const values = [
    { icon: <Heart className="w-4 h-4 text-primary" />, label: 'Iman' },
    { icon: <Clock className="w-4 h-4 text-primary" />, label: 'Disiplin' },
    { icon: <Book className="w-4 h-4 text-primary" />, label: 'Ilmu' },
    { icon: <Flag className="w-4 h-4 text-primary" />, label: 'Kepemimpinan' },
    { icon: <Lightbulb className="w-4 h-4 text-primary" />, label: 'Inovasi' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll">
        <div className="inline-flex justify-center items-center mb-6">
          <span className="font-arabic text-3xl text-primary">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</span>
        </div>
        <span className="text-primary uppercase tracking-widest text-xs font-bold mb-4 block">Identitas Kami</span>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-6">
          Lebih Dari Sekadar Asrama.<br />Inkubator Pemimpin Muslim.
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          Pondok Pesantren THOLABIE Classic International Boarding School adalah institusi pendidikan modern yang didesain untuk pemuda Muslim abad ke-21. Kami percaya bahwa kesuksesan sejati berasal dari keseimbangan antara aqidah yang lurus, kedisiplinan yang ketat, keunggulan akademis formal, dan kemampuan berinovasi di dunia modern.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {values.map((val, idx) => (
            <span
              key={idx}
              className="px-5 py-2.5 rounded-full bg-surface-alt text-secondary text-sm font-semibold border border-gray-100 shadow-sm flex items-center gap-2"
            >
              {val.icon} {val.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

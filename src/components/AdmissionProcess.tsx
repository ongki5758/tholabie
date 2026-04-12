import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function AdmissionProcess() {
  const steps = [
    {
      num: 1,
      title: 'Registrasi',
      desc: 'Hubungi admin via WhatsApp untuk menyatakan minat.',
      delay: '',
    },
    {
      num: 2,
      title: 'Seleksi Berkas',
      desc: 'Penyerahan dokumen akademik & keterangan tidak mampu.',
      delay: 'delay-100',
    },
    {
      num: 3,
      title: 'Wawancara',
      desc: 'Penilaian komitmen, adab, dan kesiapan mental belajar.',
      delay: 'delay-200',
    },
    {
      num: 4,
      title: 'Penerimaan Final',
      desc: 'Pengumuman resmi dan registrasi masuk ke CIBS & Politeknik.',
      delay: 'delay-300',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl font-serif font-bold text-secondary">Proses Pendaftaran yang Mudah</h2>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((s, idx) => (
              <div
                key={idx}
                className={`animate-on-scroll ${s.delay} bg-surface p-6 rounded-2xl border border-gray-200 relative text-center shadow-sm`}
              >
                <div className="w-10 h-10 rounded-full bg-primary text-white font-bold flex items-center justify-center absolute -top-5 left-1/2 -translate-x-1/2 border-4 border-white shadow-md">
                  {s.num}
                </div>
                <h4 className="font-bold text-secondary mt-5 mb-2">{s.title}</h4>
                <p className="text-sm text-gray-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center animate-on-scroll delay-400">
          <a
            href="https://wa.me/6285183003060"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full text-white bg-primary hover:bg-primary-dark transition-colors shadow-md group"
          >
            Mulai Langkah 1 Sekarang
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}

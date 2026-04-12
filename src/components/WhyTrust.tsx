import React from 'react';
import { ShieldCheck, Eye, Clock, Map, Briefcase } from 'lucide-react';

export default function WhyTrust() {
  const reasons = [
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: 'Lingkungan Islami',
      desc: 'Pergaulan yang terjaga dan fokus pada adab & akhlak.',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
      delay: '',
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: 'Perkembangan Terawasi',
      desc: 'Mentoring langsung dari pembimbing akademik & spiritual.',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      delay: 'delay-100',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Sistem Kedisiplinan',
      desc: 'Tidak ada waktu terbuang; rutinitas harian yang produktif.',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-600',
      delay: 'delay-200',
    },
    {
      icon: <Map className="w-6 h-6" />,
      title: 'Jalur yang Jelas',
      desc: 'Perjalanan terstruktur dari pendaftaran hingga siap karier.',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
      delay: 'delay-300',
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: 'Persiapan Praktis',
      desc: 'Keterampilan yang langsung menunjang kemandirian finansial.',
      bgColor: 'bg-red-50',
      textColor: 'text-red-600',
      delay: 'delay-400',
      colSpan: 'md:col-span-3 lg:col-span-1',
    },
  ];

  return (
    <section className="py-24 bg-surface-alt border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-on-scroll">
          <h2 className="text-3xl font-serif font-bold text-secondary mb-4">Mengapa Orang Tua Mempercayai Tholabie</h2>
          <p className="text-gray-600">
            Ketenangan batin mengetahui putra-putri Anda berada dalam lingkungan yang aman, terstruktur, dan berorientasi masa depan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {reasons.map((r, idx) => (
            <div
              key={idx}
              className={`animate-on-scroll ${r.delay} bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow ${
                r.colSpan || ''
              }`}
            >
              <div className={`w-12 h-12 mx-auto ${r.bgColor} rounded-full flex items-center justify-center ${r.textColor} mb-3`}>
                {r.icon}
              </div>
              <h4 className="font-bold text-sm text-secondary mb-2">{r.title}</h4>
              <p className="text-xs text-gray-500">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

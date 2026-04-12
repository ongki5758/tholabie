import React from 'react';
import { XCircle, CheckCircle2 } from 'lucide-react';

export default function ProblemSolution() {
  return (
    <section className="py-24 bg-surface" id="tentang">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl border border-gray-100 animate-on-scroll">
          <div className="bg-secondary p-10 lg:p-16 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <span className="text-accent uppercase tracking-widest text-xs font-bold mb-4 block">Tantangan Saat Ini</span>
            <h2 className="text-3xl font-serif font-bold mb-6">Iman yang Kuat, Namun Terkendala Keahlian Praktis.</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Banyak lulusan SMA/SMK sederajat dan pesantren memiliki bekal agama yang sangat baik. Namun, ketika memasuki dunia kerja modern, mereka sering menghadapi kesenjangan dalam keahlian praktis, teknologi digital, dan profesionalisme yang sangat dibutuhkan saat ini.
            </p>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-3">
                <XCircle className="w-5 h-5 text-red-400 shrink-0" /> Keterbatasan akses ke pendidikan tinggi yang berkualitas
              </li>
              <li className="flex items-center gap-3">
                <XCircle className="w-5 h-5 text-red-400 shrink-0" /> Minimnya keterampilan digital & pemasaran modern
              </li>
              <li className="flex items-center gap-3">
                <XCircle className="w-5 h-5 text-red-400 shrink-0" /> Kurangnya arah dan pendampingan karier profesional
              </li>
            </ul>
          </div>

          <div className="bg-white p-10 lg:p-16 relative">
            <span className="text-primary uppercase tracking-widest text-xs font-bold mb-4 block">Solusi Tholabie</span>
            <h2 className="text-3xl font-serif font-bold text-secondary mb-6">Penghubung Antara Urusan Agama & Duniawi.</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              THOLABIE hadir untuk menutup kesenjangan tersebut. Kami menyediakan ekosistem terpadu di mana santri tetap menjaga kedisiplinan ibadah mereka, sembari menempuh pendidikan formal politeknik dan menguasai keterampilan digital bernilai tinggi.
            </p>
            <ul className="space-y-3 text-sm text-secondary font-medium">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> 100% Dukungan Pendidikan Tinggi (D3)
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> Pembangunan Karakter Islami yang Terawasi
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> Inkubasi Bisnis & Teknologi Intensif
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { Minus, CheckCircle2 } from 'lucide-react';

export default function Transformation() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl font-serif font-bold text-secondary">Transformasi Santri Tholabie</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="animate-on-scroll bg-surface p-8 rounded-3xl border border-gray-200 shadow-sm">
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-gray-200 text-gray-600 text-sm font-bold mb-6">
              Sebelum Masuk CIBS
            </div>
            <ul className="space-y-4">
              {[
                'Arah masa depan yang belum pasti setelah lulus SMA/SMK.',
                'Minimnya paparan terhadap keterampilan digital praktis yang dibutuhkan industri.',
                'Kendala biaya untuk melanjutkan pendidikan ke perguruan tinggi berkualitas.',
              ].map((s, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Minus className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                  <span className="text-gray-600">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-on-scroll delay-100 bg-primary/5 p-8 rounded-3xl border border-primary/20 relative overflow-hidden shadow-md">
            <div className="absolute top-0 right-0 w-24 h-24 bg-accent/20 rounded-bl-full"></div>
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-primary text-white text-sm font-bold mb-6 relative z-10">
              Setelah Lulus dari CIBS
            </div>
            <ul className="space-y-4 relative z-10">
              {[
                'Memiliki karakter Islami yang kuat dan kedisiplinan ibadah harian.',
                'Menggenggam Ijazah Resmi D3 dari Politeknik Kota Malang.',
                'Siap kerja atau merintis usaha dengan portofolio keahlian digital yang matang.',
              ].map((s, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-secondary font-medium">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

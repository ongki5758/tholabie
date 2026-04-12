import React from 'react';
import { Users, Code, CheckCircle, ArrowRight } from 'lucide-react';

export default function DigitalSkills() {
  return (
    <section id="keahlian" className="py-24 bg-secondary text-white relative">
      <div
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}
      ></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2 animate-on-scroll">
            <span className="text-accent uppercase tracking-widest text-xs font-bold mb-4 block">
              Lebih Dari Sekadar Akademik
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Membekali Untuk Ekonomi Digital</h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              Kami tidak hanya ingin santri kami lulus; kami ingin mereka berjaya. Program inkubasi intensif kami memastikan setiap lulusan memiliki keterampilan praktis yang sangat dicari di pasar modern.
            </p>
            <a
              href="https://wa.me/6285183003060"
              className="inline-flex items-center text-accent font-semibold hover:text-white transition-colors group"
            >
              Tanyakan kurikulum kami <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-6">
            <div className="animate-on-scroll delay-100 bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors shadow-lg">
              <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-6 border border-white/5">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-4">Kecakapan Hidup (Life Skills)</h3>
              <ul className="space-y-3 text-sm text-gray-300">
                {[
                  'Public Speaking & Komunikasi',
                  'Manajemen & Kepemimpinan',
                  'Manajemen Waktu',
                  'Pola Pikir Kewirausahaan',
                ].map((s, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary-light" /> {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className="animate-on-scroll delay-200 bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors shadow-lg">
              <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-6 border border-white/5">
                <Code className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Keahlian Digital</h3>
              <ul className="space-y-3 text-sm text-gray-300">
                {[
                  'Digital Marketing',
                  'Content Creation & Desain',
                  'Manajemen Marketplace',
                  'Pemanfaatan AI untuk Produktivitas',
                ].map((s, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary-light" /> {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

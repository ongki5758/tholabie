import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-primary-dark opacity-50 hero-pattern"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/20 to-transparent"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-on-scroll inline-flex justify-center items-center mb-6">
          <span className="font-arabic text-3xl text-accent">رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً</span>
        </div>
        <h2 className="animate-on-scroll delay-100 text-4xl md:text-5xl font-serif font-bold text-white mb-6">
          Amankan Masa Depan Anda Hari Ini.
        </h2>
        <p className="animate-on-scroll delay-200 text-xl text-white mb-10">
          Bergabunglah dengan komunitas pemuda Muslim penggerak perubahan yang bersiap memimpin di era digital. Kuota beasiswa 2026 terbatas.
        </p>

        <div className="animate-on-scroll delay-300 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://wa.me/6285183003060"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold rounded-full text-primary-dark bg-accent hover:bg-white transition-all shadow-xl hover:-translate-y-1 group"
          >
            <MessageCircle className="w-6 h-6 mr-3" />
            Konsultasi Pendaftaran via WA
          </a>
        </div>
        <p className="animate-on-scroll delay-400 text-sm text-gray-300 mt-6">
          Pendaftaran segera ditutup. Konsultasi gratis tanpa dipungut biaya.
        </p>
      </div>
    </section>
  );
}

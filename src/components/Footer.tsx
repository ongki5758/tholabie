import React from 'react';
import { ChevronRight, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary text-gray-400 py-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4 group">
              <img
                src="/img/logo.webp"
                alt="Logo Pondok Pesantren THOLABIE CIBS"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-8 h-8 object-contain rounded-full shadow-sm group-hover:opacity-80 transition-opacity"
              />
              <span className="font-serif font-bold text-white tracking-wider">THOLABIE</span>
            </a>
            <p className="text-sm leading-relaxed max-w-sm mb-4">
              Pondok Pesantren THOLABIE Classic International Boarding School. Mengintegrasikan pembentukan karakter Islami (Akhlaq) yang mendalam dengan pendidikan tinggi formal dan keterampilan digital masa depan.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Tautan Cepat</h4>
            <ul className="space-y-2 text-sm">
              {[
                { name: 'Tentang Kami', href: '#tentang' },
                { name: 'Beasiswa 2026', href: '#beasiswa' },
                { name: 'Kehidupan Asrama', href: '#asrama' },
                { name: 'Tanya Jawab (FAQ)', href: '#faq' },
              ].map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="hover:text-accent transition-colors flex items-center gap-2">
                    <ChevronRight className="w-3 h-3" /> {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Kontak Kami</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 shrink-0 text-primary-light" />
                <span className="leading-relaxed">
                  <strong>Pondok Pesantren THOLABIE CIBS</strong>
                  <br />
                  Jl. KH Malik Dalam RT 01, RW 07 , Baran, Buring, Kedungkandang, Malang
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 shrink-0 text-primary-light" />
                <a
                  href="https://wa.me/6285183003060"
                  className="hover:text-accent transition-colors font-semibold"
                >
                  +62 851 8300 3060
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-center md:text-left">
            <p>&copy; 2026 Pondok Pesantren THOLABIE. Hak Cipta Dilindungi.</p>
            <div className="text-gray-500 flex items-center gap-2">
              Crafted by
              <a
                href="https://ongki.pro"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1.5 text-gray-400 hover:text-accent transition-all duration-300 font-medium"
              >
                <svg
                  className="w-4 h-4 text-accent animate-[spin_5s_linear_infinite]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
                  <line x1="12" y1="22" x2="12" y2="15.5"></line>
                  <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
                  <polyline points="2 15.5 12 8.5 22 15.5"></polyline>
                  <line x1="12" y1="2" x2="12" y2="8.5"></line>
                </svg>
                ongki.pro
              </a>
            </div>
          </div>
          <div className="font-arabic text-lg text-gray-500 mt-2 md:mt-0">وَاللَّهُ الْمُسْتَعَانُ</div>
        </div>
      </div>
    </footer>
  );
}

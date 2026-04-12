import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const faqs = [
    {
      q: 'Apakah beasiswa ini menanggung 100% biaya kuliah?',
      a: 'Ya, beasiswa ini mencakup 100% biaya pendidikan untuk seluruh masa studi program D3 yang dipilih di Politeknik Kota Malang.',
    },
    {
      q: 'Apakah fasilitas asrama sudah termasuk?',
      a: 'Ya, seluruh penerima beasiswa diwajibkan untuk tinggal di fasilitas asrama Islami yang telah disediakan guna mengikuti program pembinaan karakter dan keahlian secara terpadu tanpa dipungut biaya penginapan.',
    },
    {
      q: 'Siapa yang berhak mendaftar program ini?',
      a: 'Lulusan SMA/SMK atau sederajat (termasuk pesantren) dari tahun kelulusan 2024 atau 2025 yang berasal dari keluarga dengan keterbatasan finansial (prasejahtera), dan memiliki kemauan kuat untuk mematuhi tata tertib asrama.',
    },
    {
      q: 'Apakah program ini cocok untuk lulusan pesantren?',
      a: 'Sangat cocok. Bahkan, program ini dirancang khusus untuk menjadi langkah strategis bagi lulusan pesantren, memungkinkan mereka mempertahankan lingkungan keagamaan (biah shalihah) sekaligus mendapatkan pendidikan formal dan keahlian digital modern.',
    },
    {
      q: 'Bagaimana cara mendaftarnya?',
      a: 'Anda dapat memulai proses pendaftaran segera dengan menekan tombol "Daftar Sekarang" atau "Hubungi via WhatsApp" di halaman ini, yang akan langsung menghubungkan Anda dengan admin resmi kami untuk instruksi lebih lanjut.',
    },
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl font-serif font-bold text-secondary mb-4">Pertanyaan yang Sering Diajukan</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="animate-on-scroll border border-gray-200 rounded-2xl overflow-hidden bg-surface">
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="accordion-button w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                aria-expanded={openIdx === idx}
              >
                <span className="font-bold text-secondary">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 accordion-icon transition-transform ${
                    openIdx === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`accordion-content px-6 bg-white transition-all duration-300 ${
                  openIdx === idx ? 'active pt-4 pb-5' : ''
                }`}
              >
                <p className="text-gray-600 text-sm">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

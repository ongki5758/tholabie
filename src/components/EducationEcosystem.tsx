import React from 'react';
import { BookOpen, GraduationCap, Users, Cpu, Rocket, ArrowDown } from 'lucide-react';

export default function EducationEcosystem() {
  const steps = [
    {
      icon: <BookOpen className="w-7 h-7" />,
      title: 'Karakter Islami',
      desc: 'Ibadah harian, adab, dan kedisiplinan spiritual.',
      bgColor: 'bg-primary',
      textColor: 'text-white',
      delay: '',
    },
    {
      icon: <GraduationCap className="w-7 h-7" />,
      title: 'Pendidikan Formal',
      desc: 'Gelar D3 dari Politeknik Kota Malang.',
      bgColor: 'bg-secondary',
      textColor: 'text-white',
      delay: 'delay-100',
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: 'Life Skills',
      desc: 'Public speaking & pelatihan kepemimpinan.',
      bgColor: 'bg-accent',
      textColor: 'text-primary-dark',
      delay: 'delay-200',
    },
    {
      icon: <Cpu className="w-7 h-7" />,
      title: 'Keahlian Digital',
      desc: 'Pemasaran digital, AI, dan content creation.',
      bgColor: 'bg-blue-600',
      textColor: 'text-white',
      delay: 'delay-300',
    },
    {
      icon: <Rocket className="w-7 h-7" />,
      title: 'Siap Berkarier',
      desc: 'Mindset bisnis & kesiapan kerja profesional.',
      bgColor: 'bg-primary-dark',
      textColor: 'text-white',
      isDark: true,
      delay: 'delay-400',
    },
  ];

  return (
    <section className="py-24 bg-surface-alt border-y border-gray-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-primary uppercase tracking-widest text-xs font-bold mb-4 block animate-on-scroll">
          Metodologi Kami
        </span>
        <h2 className="text-3xl font-serif font-bold text-secondary mb-16 animate-on-scroll delay-100">
          Ekosistem Pendidikan Terintegrasi
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
          <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary via-accent to-primary-dark -z-10 -translate-y-1/2 opacity-30"></div>

          {steps.map((step, idx) => (
            <React.Fragment key={idx}>
              <div
                className={`animate-on-scroll ${step.delay} ${
                  step.isDark ? 'bg-primary-dark border-primary shadow-premium' : 'bg-white border-gray-100 shadow-sm'
                } w-full md:w-1/5 p-6 rounded-2xl border flex flex-col items-center relative group hover:shadow-md transition-shadow`}
              >
                <div
                  className={`w-16 h-16 rounded-full ${
                    step.isDark ? 'bg-white text-primary-dark' : `${step.bgColor} ${step.textColor}`
                  } flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg relative`}
                >
                  {step.icon}
                </div>
                <h3 className={`font-bold ${step.isDark ? 'text-white' : 'text-secondary'} text-sm mb-2 text-center`}>
                  {step.title}
                </h3>
                <p className={`text-xs ${step.isDark ? 'text-gray-300' : 'text-gray-500'} text-center`}>{step.desc}</p>
              </div>
              {idx < steps.length - 1 && (
                <ArrowDown className="md:hidden text-gray-300 w-6 h-6 my-2 animate-on-scroll" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

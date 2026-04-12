import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InstitutionSnapshot from './components/InstitutionSnapshot';
import ProblemSolution from './components/ProblemSolution';
import About from './components/About';
import EducationEcosystem from './components/EducationEcosystem';
import Scholarship from './components/Scholarship';
import BoardingLife from './components/BoardingLife';
import DigitalSkills from './components/DigitalSkills';
import Transformation from './components/Transformation';
import WhyTrust from './components/WhyTrust';
import AdmissionProcess from './components/AdmissionProcess';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';

export default function App() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '50px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((elem) => observer.observe(elem));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="font-sans text-secondary bg-surface antialiased selection:bg-primary selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <InstitutionSnapshot />
        <ProblemSolution />
        <About />
        <EducationEcosystem />
        <Scholarship />
        <BoardingLife />
        <DigitalSkills />
        <Transformation />
        <WhyTrust />
        <AdmissionProcess />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}

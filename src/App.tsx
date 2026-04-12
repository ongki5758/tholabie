import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
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
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

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
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
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
      </motion.main>
      
      <Footer />
      <StickyCTA />
    </div>
  );
}

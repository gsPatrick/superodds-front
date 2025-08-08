// src/app/components/Hero/Hero.js (COMPLETO COM BOTÃO EM DESTAQUE)
'use client';

import { useRef, useLayoutEffect } from 'react';
import styles from './Hero.module.css';
import { gsap } from 'gsap';

const Hero = () => {
  const heroRef = useRef(null);
  const ctaRef = useRef(null); 

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(ctaRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.5 
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.heroSection} ref={heroRef}>
      <div className={`${styles.heroContent} container`}>
        <a
          href="https://hub.la/g/Pn5INxvNv3z8taCv7LI1"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaButton}
          ref={ctaRef}
        >
          {/* ✨ TEXTO ENVOLVIDO EM SPAN PARA O EFEITO DE BRILHO FUNCIONAR CORRETAMENTE ✨ */}
          <span>QUERO FAZER PARTE AGORA</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
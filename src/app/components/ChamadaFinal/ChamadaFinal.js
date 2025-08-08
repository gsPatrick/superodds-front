// src/app/components/ChamadaFinal/ChamadaFinal.js (ATUALIZADO PARA BOLEIROS 3.0)
'use client';

import { useRef, useLayoutEffect } from 'react';
import styles from './ChamadaFinal.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ChamadaFinal = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const titleRef = useRef(null);

  useLayoutEffect(() => {
    // Animação de entrada simplificada, já que não há mais contador
    const section = sectionRef.current;
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      });

      tl.from(contentRef.current.children, {
        opacity: 0,
        y: 60,
        stagger: 0.15,
        duration: 1,
        ease: 'power3.out',
      });
      
    }, section);
    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.particles}>
        {[...Array(20)].map((_, i) => (
          <div key={i} className={styles.particle}></div>
        ))}
      </div>

      <div className={`${styles.container} container`} ref={contentRef}>
        
        {/* ✨ TÍTULO PRINCIPAL DA CHAMADA FINAL ✨ */}
        <h2 className={styles.title} ref={titleRef}>
          FAÇA PARTE DO BOLEIROS 3.0
        </h2>
        
        {/* ✨ SUBTÍTULO COM A NOVA MENSAGEM ✨ */}
        <p className={styles.subtitle}>
          Mais que um grupo.<br/>
          É uma comunidade. É um time. É uma nova era.
        </p>

        {/* ✨ BOTÃO COM O TEXTO FINAL ✨ */}
        <a
          href="https://hub.la/g/Pn5INxvNv3z8taCv7LI1"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaButton}
        >
          <span>QUERO ENTRAR AGORA</span>
        </a>
      </div>
    </section>
  );
};

export default ChamadaFinal;
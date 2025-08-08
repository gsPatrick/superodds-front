// src/app/components/Beneficios/Beneficios.js (ATUALIZADO PARA BOLEIROS 3.0)
'use client';

import { useRef, useLayoutEffect } from 'react';
import styles from './Beneficios.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Beneficios = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const introRef = useRef(null); // Ref para o novo parágrafo
  const gridRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animação para o título e parágrafo de introdução
      gsap.from([titleRef.current, introRef.current], {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
      });

      // Animação para os cards
      gsap.to(gridRef.current.children, {
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // ✨✨ DADOS ATUALIZADOS PARA OS 3 PILARES DO BOLEIROS 3.0 ✨✨
  const beneficios = [
    { 
      icon: '⚽', 
      title: 'Futebol', 
      description: 'Palpites analisados com valor real e cobertura dos principais campeonatos do mundo.' 
    },
    { 
      icon: '🏀', 
      title: 'NBA', 
      description: 'Melhores oportunidades no mundo da bola laranja' 
    },
    { 
      icon: '💥', 
      title: 'Odds Altas', 
      description: 'Palpites ousados, pensadas com critério, e que mudam o jogo quando batem.' 
    },
  ];

  return (
    <section className={styles.beneficiosSection} ref={sectionRef}>
      <div className={`${styles.beneficiosContainer} container`}>
        
        {/* ✨ TÍTULO ATUALIZADO ✨ */}
        <h2 className={styles.beneficiosTitle} ref={titleRef}>
          O QUE É O <span className={styles.beneficiosHighlight}>BOLEIROS 3.0?</span>
        </h2>
        
        {/* ✨ PARÁGRAFO DE INTRODUÇÃO ADICIONADO ✨ */}
        <p className={styles.beneficiosIntro} ref={introRef}>
          O Boleiros 3.0 é a união dos 3 grupos de maior sucesso do nosso VIP, tudo em um só lugar:
        </p>
        
        <div className={styles.beneficiosGrid} ref={gridRef}>
          {beneficios.map((beneficio, index) => (
            <div key={index} className={styles.beneficiosCard}>
              <div className={styles.cardIcon}>{beneficio.icon}</div>
              <h3 className={styles.cardTitle}>{beneficio.title}</h3>
              <p className={styles.cardDescription}>{beneficio.description}</p>
            </div>
          ))}
        </div>
        
        {/* ✨ TEXTO DO BOTÃO ATUALIZADO ✨ */}
        <a
          href="https://hub.la/g/Pn5INxvNv3z8taCv7LI1"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.beneficiosCtaButton}
        >
          QUERO ENTRAR AGORA NO GRUPO
        </a>
      </div>
    </section>
  );
};

export default Beneficios;
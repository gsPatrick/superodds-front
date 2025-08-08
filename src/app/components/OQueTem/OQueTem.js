// src/app/components/OQueTem/OQueTem.js (COMPLETO COM LAYOUT INVERTIDO)
'use client';

import { useRef, useLayoutEffect } from 'react';
import Image from 'next/image';
import styles from './OQueTem.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CheckIcon from '../Icons/CheckIcon';

gsap.registerPlugin(ScrollTrigger);

const OQueTem = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // ✨✨✨ ANIMAÇÕES INVERTIDAS PARA ACOMPANHAR O NOVO LAYOUT ✨✨✨
      
      // A imagem (agora na direita) virá da direita.
      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        x: 100, // Era -100, agora é 100
        duration: 1,
        ease: 'power3.out',
      });
      
      // O conteúdo (agora na esquerda) virá da esquerda.
      gsap.from(contentRef.current.children, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        x: -100, // Era 100, agora é -100
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    { icon: <CheckIcon />, text: 'Palpites com base em estatísticas, análise e cenário de jogo' },
    { icon: <CheckIcon />, text: 'Conteúdo direto ao ponto, enviado pelo Telegram' },
    { icon: <CheckIcon />, text: 'Alertas diários com as melhores oportunidades do dia' },
    { icon: <CheckIcon />, text: 'Comunidade ativa e focada em futebol, basquete e palpites inteligentes' },
    { icon: <CheckIcon />, text: 'Zero achismo, 100% estudo e transparência' },
    { icon: <CheckIcon />, text: 'Um time liderado por quem vive isso todos os dias' },
  ];

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={`${styles.gridWrapper} container`}>
        
        {/* ✨✨✨ ORDEM DOS ELEMENTOS INVERTIDA ✨✨✨ */}
        {/* O conteúdo agora vem PRIMEIRO no código */}
        <div className={styles.contentContainer} ref={contentRef}>
          <h2 className={styles.title}>
            Dentro do <span className={styles.highlight}>Boleiros 3.0</span> você tem:
          </h2>
          <ul className={styles.featureList}>
            {features.map((feature, index) => (
              <li key={index} className={styles.featureItem}>
                <span className={styles.icon}>{feature.icon}</span>
                <p className={styles.featureText}>{feature.text}</p>
              </li>
            ))}
          </ul>
           <a
              href="https://t.me/melhoressuperodds"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              QUERO ENTRAR AGORA NO GRUPO
            </a>
        </div>
        
        {/* A imagem agora vem DEPOIS no código */}
        <div className={styles.imageContainer} ref={imageRef}>
          <Image
            src="/images/Smartphone.png"
            alt="Celular mostrando o grupo Boleiros 3.0 no Telegram"
            width={700}
            height={1450}
            className={styles.image}
          />
        </div>

      </div>
    </section>
  );
};

export default OQueTem;
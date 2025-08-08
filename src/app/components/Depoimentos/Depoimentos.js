// src/app/components/Depoimentos/Depoimentos.js (ATUALIZADO PARA BOLEIROS 3.0)
'use client';

import { useRef, useLayoutEffect } from 'react';
import Image from 'next/image';
import styles from './Depoimentos.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Depoimentos = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const gridRef = useRef(null);
  const ctaRef = useRef(null);

  // ✨✨ DADOS DOS DEPOIMENTOS ATUALIZADOS CONFORME A NOVA COPY ✨✨
  // As imagens foram mantidas e reassociadas aos novos nomes.
  const depoimentos = [
    {
      nome: 'Ricardo Fernandes',
      cidade: 'São Paulo, SP',
      texto: '“Já entrei em muito grupo por aí, mas nunca vi a organização e análise que tem aqui. Os palpites vêm com lógica, com leitura. O Marco vive isso. Não é achismo.”',
      imagem: '/joao.jpg', // Imagem original mantida
    },
    {
      nome: 'Caio Almeida',
      cidade: 'Goiânia, GO',
      texto: '“Sou viciado em NBA. Esse grupo tem leitura em tempo real, entradas certeiras e organização. Virou parte da minha rotina.”',
      imagem: '/carlos.jpg', // Imagem original mantida
    },
    {
      nome: 'Milton Silva',
      cidade: 'Recife, PE',
      texto: '“O grupo de Odds Altas é meu favorito. Tem menos entradas, mas todas com critério. Quando bate, é golaço!”',
      imagem: '/rafael.jpg', // Imagem original mantida (associada a um depoimento masculino)
    },
     {
      nome: 'Ana Vieira',
      cidade: 'Belo Horizonte, MG',
      texto: '“Entrei desconfiada por ser mulher, mas fui super bem recebida. Aqui não tem chute: tem análise séria. Virei fã do projeto.”',
      imagem: '/mariana.jpg', // Imagem original mantida (associada a um depoimento feminino)
    },
     {
      nome: 'Juninho Campos',
      cidade: 'Salvador, BA',
      texto: '“Sempre achei grupo VIP papo furado… até conhecer o Boleiros 3.0. Tem estratégia, horário, e uma comunidade que entende do jogo.”',
      imagem: '/lucas.jpg', // Imagem original mantida
    },
     {
      nome: 'Rafael Nogueira',
      cidade: 'Porto Alegre, RS',
      texto: '“Com o Boleiros 3.0, Hoje entendo o jogo, não só sigo entrada. É outro nível.”',
      imagem: '/fernanda.jpg', // Imagem original mantida (usei a de fernanda aqui para variar)
    },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animações originais mantidas
      gsap.from(titleRef.current, { scrollTrigger: { trigger: titleRef.current, start: 'top 85%', toggleActions: 'play none none none' }, opacity: 0, y: 50, duration: 0.8, ease: 'power3.out' });
      gsap.from(gridRef.current.children, { scrollTrigger: { trigger: gridRef.current, start: 'top 85%', toggleActions: 'play none none none' }, opacity: 0, y: 50, stagger: 0.15, duration: 0.8, ease: 'power3.out' });
      gsap.from(ctaRef.current.children, {
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={`${styles.container} container`}>
        {/* ✨ TÍTULO ATUALIZADO ✨ */}
        <h2 className={styles.title} ref={titleRef}>
          DEPOIMENTOS <span className={styles.highlight}>REAIS</span> DE QUEM JÁ FAZ PARTE
        </h2>
        <div className={styles.grid} ref={gridRef}>
          {depoimentos.map((depo, index) => (
            <div key={index} className={styles.card}>
              {/* ✨ ÍCONE DE ASPAS ADICIONADO PARA ESTILO ✨ */}
              <div className={styles.quoteIcon}>🎙️</div>
              <p className={styles.text}>{depo.texto}</p>
              <div className={styles.author}>
                <Image
                  src={depo.imagem}
                  alt={`Depoimento de ${depo.nome}`}
                  width={50}
                  height={50}
                  className={styles.avatar}
                />
                <div>
                  <span className={styles.name}>{depo.nome}</span>
                  <span className={styles.city}>{depo.cidade}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- CHAMADA PARA AÇÃO ATUALIZADA --- */}
        <div className={styles.finalCtaContainer} ref={ctaRef}>
            <h3 className={styles.ctaSubtitle}>
                Estratégia, análise e uma comunidade que entende do jogo. Está pronto para fazer parte?
            </h3>
            <a
              href="https://hub.la/g/Pn5INxvNv3z8taCv7LI1"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              ENTRAR NO GRUPO AGORA
            </a>
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;
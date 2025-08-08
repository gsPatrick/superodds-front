// src/app/components/VagaGarantida/VagaGarantida.js (ATUALIZADO PARA BOLEIROS 3.0)
'use client';

import { useState, useRef, useLayoutEffect } from 'react';
import styles from './VagaGarantida.module.css';
import { gsap } from 'gsap';

const VagaGarantida = () => {
  const [status, setStatus] = useState('idle'); // 'idle', 'loading', 'success'
  const sectionRef = useRef(null);
  const lockRef = useRef(null);
  const successRef = useRef(null);
  const loadingTextRef = useRef(null);

  const handleUnlock = () => {
    setStatus('loading');
  };

  useLayoutEffect(() => {
    if (status === 'loading') {
      // ✨ TEXTOS DA ANIMAÇÃO ATUALIZADOS PARA A NOVA TEMÁTICA ✨
      const loadingTexts = ["VALIDANDO SEU CONVITE...", "PREPARANDO SEU LUGAR NO TIME...", "CONEXÃO QUASE COMPLETA..."];
      let textIndex = 0;

      const tl = gsap.timeline();
      tl.to(lockRef.current, { opacity: 1, duration: 0.5 })
        .to(`.${styles.ring1}`, { rotation: "+=360", duration: 2.5, ease: "none" }, 0)
        .to(`.${styles.ring2}`, { rotation: "-=360", duration: 2.5, ease: "none" }, 0)
        .to(`.${styles.progressBarInner}`, { width: "100%", duration: 2.5, ease: "power2.inOut" }, 0)
        .call(() => {
            const interval = setInterval(() => {
                textIndex = (textIndex + 1) % loadingTexts.length;
                if (loadingTextRef.current) {
                    gsap.to(loadingTextRef.current, {opacity: 0, duration: 0.2, onComplete: () => {
                        loadingTextRef.current.textContent = loadingTexts[textIndex];
                        gsap.to(loadingTextRef.current, {opacity: 1, duration: 0.2});
                    }});
                }
            }, 800);
            tl.vars.interval = interval;
        }, [], 0)
        .to(lockRef.current, { scale: 1.2, boxShadow: "0 0 100px rgba(183, 238, 35, 1)", duration: 0.2, delay: 2.3 })
        .to(lockRef.current, { 
            opacity: 0, 
            duration: 0.3,
            onComplete: () => {
                clearInterval(tl.vars.interval);
                setStatus('success');
            }
        });
    }

    if(status === 'success' && successRef.current) {
        gsap.from(successRef.current.children, {
            opacity: 0,
            y: 30,
            stagger: 0.2,
            duration: 0.8,
            ease: 'power3.out'
        });
    }

  }, [status]);

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={`${styles.container} container`}>
        {status !== 'success' && (
            <div className={styles.initialState} style={{ display: status === 'idle' ? 'flex' : 'none' }}>
                {/* ✨ COPY INICIAL TOTALMENTE REFEITA ✨ */}
                <h2 className={styles.title}>Um convite para o nosso time</h2>
                <p className={styles.subtitle}>O Boleiros 3.0 não é apenas um grupo, é uma comunidade. Clique para validar seu acesso e se juntar aos melhores.</p>
                <button onClick={handleUnlock} className={styles.unlockButton}>
                  VALIDAR MEU ACESSO
                </button>
            </div>
        )}
        
        {status === 'loading' && (
          <div className={styles.loadingState}>
            <div className={styles.lockContainer} ref={lockRef}>
              <div className={`${styles.ring} ${styles.ring1}`}></div>
              <div className={`${styles.ring} ${styles.ring2}`}></div>
              <div className={styles.centerDot}></div>
            </div>
            <div className={styles.progressBar}>
                <div className={styles.progressBarInner}></div>
            </div>
            <p className={styles.loadingText} ref={loadingTextRef}>VALIDANDO SEU CONVITE...</p>
          </div>
        )}
        
        {status === 'success' && (
          <div className={styles.successState} ref={successRef}>
             <div className={styles.successIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg>
             </div>
             {/* ✨ COPY DE SUCESSO TOTALMENTE REFEITA ✨ */}
             <h2 className={styles.title}>ACESSO VALIDADO!</h2>
             <p className={styles.subtitle}>Tudo certo! Seu lugar no <span className={styles.highlight}>Boleiros 3.0</span> está garantido. Clique no botão abaixo para entrar no grupo imediatamente e não perder nenhuma análise.</p>
             <a
                href="https://hub.la/g/Pn5INxvNv3z8taCv7LI1"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.finalCtaButton}
              >
                ENTRAR NO GRUPO AGORA
              </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default VagaGarantida;
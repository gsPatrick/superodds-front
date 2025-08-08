// src/app/components/SocialProofPopup/SocialProofPopup.js (ATUALIZADO PARA BOLEIROS 3.0)
'use client';

import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './SocialProofPopup.module.css';

// ✨✨ LISTA DE DADOS ATUALIZADA COM NOVOS NOMES E ATIVIDADES ✨✨
const proofData = [
  { name: 'Ricardo F.', location: 'São Paulo, SP', type: 'join' },
  { name: 'Caio A.', location: 'Goiânia, GO', type: 'hit_nba', oddValue: '3.50' },
  { name: 'Ana V.', location: 'Belo Horizonte, MG', type: 'join' },
  { name: 'Milton S.', location: 'Recife, PE', type: 'hit_odds', oddValue: '5.20' },
  { name: 'Juninho C.', location: 'Salvador, BA', type: 'join' },
  { name: 'Rafael N.', location: 'Porto Alegre, RS', type: 'hit_futebol', oddValue: '2.90' },
];

const SocialProofPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentProof, setCurrentProof] = useState(proofData[0]);
  const popupRef = useRef(null);
  let timeoutId = useRef(null);

  const showRandomPopup = () => {
    const randomIndex = Math.floor(Math.random() * proofData.length);
    setCurrentProof(proofData[randomIndex]);
    setIsVisible(true);
  };

  useEffect(() => {
    // Animações mantidas
    if (isVisible) {
      gsap.fromTo(popupRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' });
    } else {
      gsap.to(popupRef.current, { y: 50, opacity: 0, duration: 0.5, ease: 'power3.in' });
    }
  }, [isVisible]);

  useEffect(() => {
    // Lógica de tempo mantida
    const scheduleNextPopup = () => {
      clearTimeout(timeoutId.current);
      if (isVisible) setIsVisible(false);
      const randomDelay = Math.random() * 4000 + 4000;
      timeoutId.current = setTimeout(() => {
        showRandomPopup();
        timeoutId.current = setTimeout(() => {
          setIsVisible(false);
          scheduleNextPopup();
        }, 5000); 
      }, randomDelay);
    };
    timeoutId.current = setTimeout(scheduleNextPopup, 5000);
    return () => clearTimeout(timeoutId.current);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // ✨✨ LÓGICA DE RENDERIZAÇÃO ATUALIZADA PARA OS 3 PILARES ✨✨
  const renderContent = () => {
    switch (currentProof.type) {
      case 'join':
        return {
          icon: '🎉',
          message: <><span className={styles.name}>{currentProof.name}</span> de {currentProof.location} acabou de entrar no time!</>
        };
      case 'hit_nba':
        return {
          icon: '🏀',
          message: <><span className={styles.name}>{currentProof.name}</span> acertou uma na <span className={styles.highlight}>NBA</span> com odd <span className={styles.value}>@{currentProof.oddValue}</span>!</>
        };
      case 'hit_futebol':
        return {
          icon: '⚽',
          message: <><span className={styles.name}>{currentProof.name}</span> cravou uma no <span className={styles.highlight}>Futebol</span> com odd <span className={styles.value}>@{currentProof.oddValue}</span>!</>
        };
      case 'hit_odds':
        return {
          icon: '💥',
          message: <><span className={styles.name}>{currentProof.name}</span> pegou uma <span className={styles.highlight}>Odd Alta</span> de <span className={styles.value}>@{currentProof.oddValue}</span>!</>
        };
      default:
        return { icon: '🎉', message: '' };
    }
  };

  const { icon, message } = renderContent();

  return (
    <div ref={popupRef} className={styles.popupContainer} style={{ opacity: 0 }}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.content}>{message}</div>
      <button onClick={() => setIsVisible(false)} className={styles.closeButton}>×</button>
    </div>
  );
};

export default SocialProofPopup;
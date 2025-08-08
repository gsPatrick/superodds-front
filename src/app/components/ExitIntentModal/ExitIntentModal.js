// src/app/components/ExitIntentModal/ExitIntentModal.js (ATUALIZADO PARA BOLEIROS 3.0)
'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './ExitIntentModal.module.css';
import { gsap } from 'gsap';

const ExitIntentModal = () => {
    const [isVisible, setIsVisible] = useState(false);
    const modalRef = useRef(null);
    const hasBeenShown = useRef(false);

    useEffect(() => {
        // Lógica mantida
        const handleMouseOut = (e) => {
            if (e.clientY <= 0 && !hasBeenShown.current) {
                setIsVisible(true);
                hasBeenShown.current = true;
            }
        };
        document.addEventListener('mouseout', handleMouseOut);
        return () => document.removeEventListener('mouseout', handleMouseOut);
    }, []);

    useEffect(() => {
        // Animação mantida
        if (isVisible) {
            gsap.to(`.${styles.overlay}`, { opacity: 1, duration: 0.3 });
            gsap.fromTo(modalRef.current, 
                { opacity: 0, scale: 0.9, y: -50 }, 
                { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: 'power3.out', delay: 0.2 }
            );
        }
    }, [isVisible]);

    const handleClose = () => {
        gsap.to(modalRef.current, { 
            opacity: 0, scale: 0.9, y: -50, duration: 0.3, ease: 'power3.in',
            onComplete: () => {
                gsap.to(`.${styles.overlay}`, { opacity: 0, duration: 0.3, onComplete: () => setIsVisible(false) });
            }
        });
    };

    if (!isVisible) return null;

    return (
        <div className={styles.overlay} onClick={handleClose}>
            <div ref={modalRef} className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <button onClick={handleClose} className={styles.closeButton}>×</button>
                <div className={styles.icon}>✋</div>
                {/* ✨ COPY DO MODAL TOTALMENTE ATUALIZADA ✨ */}
                <h2 className={styles.title}>ESPERA, NÃO VAI EMBORA AINDA!</h2>
                <p className={styles.subtitle}>Você está a um passo de perder as melhores análises de Futebol, NBA e as Odds Altas mais criteriosas do mercado. Tem certeza que quer ficar de fora do time?</p>
                <a 
                    href="https://hub.la/g/Pn5INxvNv3z8taCv7LI1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.ctaButton}
                >
                    QUERO GARANTIR MEU ACESSO
                </a>
            </div>
        </div>
    );
};

export default ExitIntentModal;
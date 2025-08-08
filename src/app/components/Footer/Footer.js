// src/app/components/Footer/Footer.js (ATUALIZADO PARA BOLEIROS 3.0)

import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} container`}>
        
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Boleiros 3.0 Logo"
            width={200}
            height={200}
          />
        </Link>
        
        <div className={styles.disclaimers}>
          {/* ✨ NOVA SEÇÃO DE RESPONSABILIDADE ADICIONADA ✨ */}
          <div className={styles.responsibilitySection}>
            <h3 className={styles.responsibilityTitle}>🔒 Aqui é conteúdo com responsabilidade</h3>
            <p className={styles.responsibilityText}>
              Sem promessas de lucro fácil. Aqui é conteúdo opinativo, com leitura de jogo e entretenimento pra quem ama futebol e aposta com consciência.
            </p>
          </div>

          <p className={styles.warning18}>
            Atenção: Conteúdo destinado para maiores de 18 anos.
          </p>
          <p className={styles.responsibleGaming}>
            Nossos materiais têm fins puramente informativos e recreativos. As apostas esportivas envolvem riscos e devem ser feitas com responsabilidade. Nunca aposte dinheiro que você não pode perder. Não prometemos ou garantimos quaisquer ganhos.
          </p>
        </div>
        <div className={styles.bottomBar}>
          <p>© {currentYear} Boleiro Tips. Todos os direitos reservados.</p>
          <Link href="/politica-de-privacidade" className={styles.privacyLink}>
            Política de Privacidade
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
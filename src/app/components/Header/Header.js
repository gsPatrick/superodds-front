// src/app/components/Header/Header.js (ATUALIZADO PARA BOLEIROS 3.0)
'use client';

import styles from './Header.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className={styles.header}>
      {/* Camada 1: Barra de Escassez com texto atualizado */}
      <div className={styles.urgencyBanner}>
        {/* ✨ TEXTO DE URGÊNCIA ATUALIZADO ✨ */}
        <p className={styles.urgencyText}>
          VAGAS LIMITADAS: ÚLTIMAS OPORTUNIDADES PARA ENTRAR!
        </p>
      </div>

      {/* Camada 2: Header Principal Translúcido */}
      <div className={`${styles.mainHeader} container`}>
        <Link href="/" className={styles.logoLink}>
          <Image
            src="/images/logo.png"
            // ✨ ALT TEXT DO LOGO ATUALIZADO ✨
            alt="Boleiros 3.0 Logo" 
            width={80}
            height={80}
            priority
          />
        </Link>
        
        <a
          href="https://hub.la/g/Pn5INxvNv3z8taCv7LI1"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaButton}
        >
          {/* ✨ TEXTO DO BOTÃO ATUALIZADO ✨ */}
          ENTRAR AGORA
        </a>
      </div>
    </header>
  );
};

export default Header;
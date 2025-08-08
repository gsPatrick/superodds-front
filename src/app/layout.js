// src/app/layout.js (ATUALIZADO PARA BOLEIROS 3.0)

import { Poppins } from 'next/font/google';
import './globals.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SocialProofPopup from './components/SocialProofPopup/SocialProofPopup';
import ExitIntentModal from './components/ExitIntentModal/ExitIntentModal';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900']
});

// ✨ METADADOS ATUALIZADOS PARA A NOVA COPY ✨
export const metadata = {
  title: 'Boleiros 3.0 - Futebol, NBA & Odds Altas em um só lugar',
  description: 'A união dos 3 melhores grupos de palpites do Brasil: Futebol, NBA e Odds Altas. Palpites analisados, leitura de jogo ao vivo e palpites com valor real.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <SocialProofPopup />
        <ExitIntentModal />
      </body>
    </html>
  );
}
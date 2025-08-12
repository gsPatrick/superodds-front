import { Poppins } from 'next/font/google';
import './index.css';

import Header from './components-telegram/Header/Header';
import Footer from './components-telegram/Footer/Footer';
import SocialProofPopup from './components-telegram/SocialProofPopup/SocialProofPopup';
import ExitIntentModal from './components-telegram/ExitIntentModal/ExitIntentModal';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
});

export const metadata = {
  title: 'Grupo VIP Telegram - SuperOdds.ai',
  description: 'Acesse o grupo VIP do Telegram da SuperOdds.ai para dicas exclusivas e super odds!',
};

export default function GrupoTelegramLayout({ children }) {
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

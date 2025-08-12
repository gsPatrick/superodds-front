import { Poppins } from 'next/font/google';
import './globals.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SocialProofPopup from './components/SocialProofPopup/SocialProofPopup';
import ExitIntentModal from './components/ExitIntentModal/ExitIntentModal';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
});

export const metadata = {
  title: 'Grupo de Super Odds - As Melhores Odds do Brasil',
  description: 'Entre gratuitamente no grupo exclusivo e receba as Super Odds mais procuradas e analisadas por especialistas.',
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

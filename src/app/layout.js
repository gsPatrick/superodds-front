import { Poppins } from 'next/font/google';
import Script from 'next/script';
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
      <head>
        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '722055177469851');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=722055177469851&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </head>
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

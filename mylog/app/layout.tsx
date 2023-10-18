import type { Metadata } from 'next';
import { Head } from 'next/document';
import { Inter } from 'next/font/google';
import Footer from './component/layout/Footer/footer';
import Header from './component/layout/header';
import './globals.css';
import Providers from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Log Memory',
  description: 'iam seung woo',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="google-site-verification"
          content="uN6r8wtwmM5jus_sDEYdaP06xZ0jF7NGQ4npFnd2Xnk"
        />
      </Head>
      <body>
        <Providers>
          <div className="mx-auto max-w-3xl px-6 lg:max-w-6xl lg:px-8">
            <Header />
            <div className={``}>{children}</div>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
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
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/react-quill@1.3.3/dist/quill.snow.css"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://synaptein.vercel.app/" />

        <meta charSet="utf-8" />
        <meta name="description" content="logging your knowledge" />
        <meta name="author" content="qyinm" />
        <meta name="keyword" content="blog, develop, backend" />

        <meta
          name="google-site-verification"
          content="uN6r8wtwmM5jus_sDEYdaP06xZ0jF7NGQ4npFnd2Xnk"
        />

        <title>synaptein</title>
      </head>
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

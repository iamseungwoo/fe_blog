import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
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
      <body>
        <Providers>
          <div className="mx-auto max-w-3xl px-6 lg:max-w-6xl lg:px-8">
            <Header />
            <div className={``}>{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
}

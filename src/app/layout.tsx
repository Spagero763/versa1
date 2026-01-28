import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { cn } from '@/lib/utils';
import { PrivyProviderWrapper } from '@/context/PrivyProviderWrapper';

export const metadata: Metadata = {
  title: {
    default: 'VersaGames - Classic Games Platform',
    template: '%s | VersaGames',
  },
  description: 'Play classic games like Chess, Checkers, Tic-Tac-Toe, Scrabble and more. Challenge friends or compete against opponents in our modern gaming platform.',
  keywords: ['games', 'chess', 'checkers', 'tic-tac-toe', 'scrabble', 'puzzle', 'memory game', 'online games'],
  authors: [{ name: 'VersaGames Team' }],
  creator: 'VersaGames',
  publisher: 'VersaGames',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'VersaGames',
    title: 'VersaGames - Classic Games Platform',
    description: 'Play classic games like Chess, Checkers, Tic-Tac-Toe, Scrabble and more.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VersaGames - Classic Games Platform',
    description: 'Play classic games like Chess, Checkers, Tic-Tac-Toe, Scrabble and more.',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a1a' },
  ],
};

const fontInter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn('dark', fontInter.variable)}>
      <body className="font-body antialiased">
        <PrivyProviderWrapper>
          <div className="relative flex min-h-screen w-full flex-col">
            <Header />
            <main className="flex-1 animate-fade-in-up">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </PrivyProviderWrapper>
      </body>
    </html>
  );
}

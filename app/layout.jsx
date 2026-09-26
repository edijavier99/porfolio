import { Inter, JetBrains_Mono } from 'next/font/google';
import Nav from '@/components/Nav';
import Providers from '@/components/Providers';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://edijavier.com'),
  title: {
    template: '%s | Edi Javier',
    default: 'Edi Javier — Software Engineer & Builder',
  },
  description:
    'Software Engineer helping founders and businesses build websites, web apps, and AI-powered products. London-based, working globally.',
  keywords: [
    'Edi Javier',
    'software engineer London',
    'web developer London',
    'freelance software engineer',
    'web app development',
    'AI integration developer',
    'Next.js developer',
    'React developer London',
    'startup developer',
    'custom software development UK',
  ],
  authors: [{ name: 'Edi Javier', url: 'https://edijavier.com' }],
  creator: 'Edi Javier',
  publisher: 'Edi Javier',
  alternates: { canonical: 'https://edijavier.com' },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://edijavier.com',
    siteName: 'Edi Javier',
    title: 'Edi Javier — Software Engineer & Builder',
    description:
      'Software Engineer helping founders and businesses build websites, web apps, and AI-powered products.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Edi Javier — Software Engineer' }],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@edijavier',
    title: 'Edi Javier — Software Engineer & Builder',
    description:
      'Software Engineer helping founders and businesses build websites, web apps, and AI-powered products.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  category: 'technology',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrains.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg text-body font-body antialiased">
        <Providers>
          <Nav />
          {children}
        </Providers>
      </body>
    </html>
  );
}

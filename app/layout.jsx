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
  metadataBase: new URL('https://kova.co.uk'),
  title: {
    template: '%s | Kova',
    default: 'Kova — Software Studio London',
  },
  description:
    'We design and build websites, web applications, and custom software that help businesses grow online. London-based, serving clients globally.',
  keywords: ['software studio', 'web development', 'web design', 'London', 'custom software'],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://kova.co.uk',
    siteName: 'Kova',
    title: 'Kova — Software Studio London',
    description: 'We design and build websites, web apps and custom software.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Kova' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kova — Software Studio London',
    description: 'We design and build websites, web apps and custom software.',
  },
  robots: { index: true, follow: true },
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

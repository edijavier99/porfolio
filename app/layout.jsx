import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import Nav from '@/components/Nav';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

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
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <body className="bg-bg text-body font-body antialiased">
        <Nav />
        {children}
      </body>
    </html>
  );
}

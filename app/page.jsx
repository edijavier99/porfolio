import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import TrustedBySection from '@/components/TrustedByBanner';
import AboutSection from '@/components/AboutSection';
import ProjectCarousel from '@/components/ProjectCarousel';
import StatsSection from '@/components/StatsSection';
import ServicesSection from '@/components/ServicesSection';
import FAQItem from '@/components/FAQItem';
import ContactForm from '@/components/ContactForm';
import WhyChooseSection from '@/components/WhyChooseSection';
import ProjectsSection from '@/components/ProjectsSection';
import { services, whyUsItems, projects, faqItems } from '@/lib/data';
import CaseStudySection from '@/components/CaseStudySection';
import TestimonialSection from '@/components/TestimonialSection';
import ExperienceSection from '@/components/ExperienceSection';
import BlogSection from '@/components/BlogSection';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Edi Javier — Software Engineer | Websites, Web Apps & AI',
  description:
    'Edi Javier is a Software Engineer helping founders and small businesses build websites, web apps, and AI solutions that save time and accelerate growth.',
  keywords: [
    'Edi Javier',
    'Edi Javier software engineer',
    'software engineer London',
    'web developer London',
    'AI solutions developer',
    'web app development',
    'Next.js developer',
    'startup developer London',
    'custom software development',
  ],
  alternates: { canonical: 'https://edijavier.com' },
  openGraph: {
    title: 'Edi Javier — Software Engineer | Websites, Web Apps & AI',
    description:
      'Software Engineer helping founders and businesses build websites, web apps, and AI-powered products.',
    url: 'https://edijavier.com',
    siteName: 'Edi Javier',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Edi Javier — Software Engineer' }],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://edijavier.com/#person',
      name: 'Edi Javier',
      url: 'https://edijavier.com',
      jobTitle: 'Software Engineer',
      description:
        'Software Engineer helping founders and small businesses build websites, web apps, and AI solutions that save time and accelerate growth.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'London',
        addressCountry: 'GB',
      },
      sameAs: ['https://www.linkedin.com/in/edisonca%C3%B1izares/'],
      knowsAbout: [
        'Software Engineering',
        'Web Development',
        'AI Integration',
        'Next.js',
        'React',
        'Node.js',
        'AWS',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Software Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Website Development',
              description:
                'Custom websites with SEO-friendly structure, fast load times, and mobile-first design.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Software & Web Apps',
              description:
                'Custom web and mobile applications built to replace manual processes and scale with your business.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Maintenance & Support',
              description:
                '24/7 uptime monitoring, security patches, and ongoing improvements after launch.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'AI Integration',
              description:
                'Integrating AI tools — chatbots, smart search, automated workflows — where they genuinely save time.',
            },
          },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://edijavier.com/#website',
      url: 'https://edijavier.com',
      name: 'Edi Javier',
      description: 'Software Engineer building websites, web apps, and AI-powered products.',
      publisher: { '@id': 'https://edijavier.com/#person' },
      inLanguage: 'en-GB',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What services does Edi Javier offer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'I build websites, web applications, mobile apps, and custom business software. Whether you need a simple landing page or a complex platform, I handle the whole process from design to launch.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does a software project take?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most projects are completed within 1 to 3 months, depending on the scope. I share a clear timeline from day one and send weekly progress updates throughout.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Edi Javier offer support after launch?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes — I stay after launch. I offer ongoing support, maintenance, and updates so your product keeps working well and improving over time.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can Edi Javier add AI features to my product?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Absolutely. I integrate AI tools where they genuinely save time or improve results — from smart search and chatbots to automated workflows and data insights.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much does it cost to work with Edi Javier?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Every project is different, so I give you a custom quote after a free discovery call. There are no hidden fees — just a clear price for a clear scope of work.',
          },
        },
      ],
    },
  ],
};



export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <HeroSection />
      <TrustedBySection />
      <AboutSection />
      <StatsSection/>
      <ServicesSection/>
      <WhyChooseSection/>
      <CaseStudySection/>
      <TestimonialSection/>
      <ExperienceSection/>
      <BlogSection/>
      <Footer />
    </>
  );
}



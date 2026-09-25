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
  title: 'Edi Javier — Software Engineer',
  description:
    'Software Engineer building digital products, web apps, and platforms that solve real problems.',
  openGraph: {
    title: 'Edi Javier — Software Engineer',
    description: 'Software Engineer building digital products, web apps, and platforms.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Edi Javier',
  jobTitle: 'Software Engineer',
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

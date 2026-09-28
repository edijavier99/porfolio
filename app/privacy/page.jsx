import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy',
  description: 'How Edi Javier collects, uses, and protects your personal data.',
  alternates: { canonical: 'https://edijavier.com/privacy' },
  robots: { index: false },
};

const Section = ({ title, children }) => (
  <div className="mb-10">
    <h2
      className="font-head font-bold text-body mb-4"
      style={{ fontSize: '1.25rem' }}
    >
      {title}
    </h2>
    <div className="text-muted text-base leading-7 space-y-4">{children}</div>
  </div>
);

export default function PrivacyPage() {
  return (
    <>
      <main className="bg-bg">
        <section className="px-6 pt-12 pb-20 md:px-12 lg:px-[64px] lg:pt-16 lg:pb-28">
          <div className="max-w-[760px] mx-auto">
            <nav className="flex items-center gap-2 text-sm text-muted mb-12">
              <Link href="/" className="no-underline hover:text-body">Home</Link>
              <span>›</span>
              <span className="text-body">Privacy Policy</span>
            </nav>

            <h1
              className="font-head font-bold text-body tracking-[-0.02em] mb-3"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.1 }}
            >
              Privacy Policy
            </h1>
            <p className="text-muted text-sm mb-12">Last updated: September 28, 2026</p>

            <Section title="Who is responsible for your data">
              <p>
                This website is operated by Edi Javier, a freelance Software Engineer based in London, United Kingdom.
                If you have any questions about how your data is handled, you can contact me at{' '}
                <a href="mailto:edijavier10@gmail.com" className="text-body underline">edijavier10@gmail.com</a>.
              </p>
            </Section>

            <Section title="What data I collect and why">
              <p><strong className="text-body">Contact form</strong> — When you submit the contact form, I collect your name, email address, and message. I use this information solely to respond to your enquiry. This data is stored in a secure database (Supabase) and forwarded to my inbox via Resend.</p>
              <p><strong className="text-body">Newsletter subscription</strong> — If you subscribe, I collect your email address to send you occasional updates. You can unsubscribe at any time by emailing me directly.</p>
              <p><strong className="text-body">Analytics</strong> — This site uses Vercel Analytics, which collects anonymised, aggregated data about page visits (e.g. page views, general location by country, device type). No personally identifiable information is collected through analytics, and no cookies are set for this purpose.</p>
            </Section>

            <Section title="Legal basis (UK GDPR)">
              <p>I process your contact and subscription data on the basis of <strong className="text-body">legitimate interests</strong> — specifically, to respond to your enquiry or keep you informed about my work. You can object to this processing at any time by contacting me.</p>
            </Section>

            <Section title="Who I share your data with">
              <p>I do not sell or share your personal data with third parties for marketing purposes. Your data may be processed by the following service providers, solely to operate this website:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong className="text-body">Supabase</strong> — database storage for form submissions and subscriptions</li>
                <li><strong className="text-body">Resend</strong> — email delivery of contact form notifications</li>
                <li><strong className="text-body">Vercel</strong> — website hosting and anonymised analytics</li>
              </ul>
              <p>All providers are contractually bound to process your data only as instructed and in accordance with applicable data protection law.</p>
            </Section>

            <Section title="How long I keep your data">
              <p>Contact form submissions are kept for as long as necessary to handle your enquiry, and no longer than 2 years. Subscriber email addresses are kept until you unsubscribe.</p>
            </Section>

            <Section title="Your rights">
              <p>Under UK GDPR, you have the right to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Access the personal data I hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing based on legitimate interests</li>
                <li>Lodge a complaint with the ICO (ico.org.uk) if you believe your rights have been infringed</li>
              </ul>
              <p>
                To exercise any of these rights, email me at{' '}
                <a href="mailto:edijavier10@gmail.com" className="text-body underline">edijavier10@gmail.com</a>.
                I will respond within 30 days.
              </p>
            </Section>

            <Section title="Changes to this policy">
              <p>I may update this policy occasionally. The date at the top of this page will always reflect the most recent version.</p>
            </Section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import Hero from '@/components/landing/hero';
import Partners from '@/components/landing/partners';
import Benefits from '@/components/landing/benefits';
import HowItWorks from '@/components/landing/how-it-works';
import Pricing from '@/components/landing/pricing';
import Bonuses from '@/components/landing/bonuses';
import Testimonials from '@/components/landing/testimonials';
import Faq from '@/components/landing/faq';
import Cta from '@/components/landing/cta';
import Footer from '@/components/landing/footer';

export default function LandingPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <main className="flex-1">
        <Hero />
        <Partners />
        <Benefits />
        <HowItWorks />
        <Pricing />
        <Bonuses />
        <Testimonials />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}

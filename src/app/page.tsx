import Hero from '@/components/landing/hero';
import Benefits from '@/components/landing/benefits';
import Pricing from '@/components/landing/pricing';
import Bonuses from '@/components/landing/bonuses';
import Faq from '@/components/landing/faq';
import AboutUs from '@/components/landing/about';
import Guarantee from '@/components/landing/guarantee';
import Cta from '@/components/landing/cta';
import Footer from '@/components/landing/footer';

export default function LandingPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <main className="flex-1">
        <Hero />
        <Benefits />
        <Bonuses />
        <Guarantee />
        <Pricing />
        <AboutUs />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}

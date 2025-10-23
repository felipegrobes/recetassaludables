import Hero from '@/components/landing/hero';
import Benefits from '@/components/landing/benefits';
import Pricing from '@/components/landing/pricing';
import Bonuses from '@/components/landing/bonuses';
import Faq from '@/components/landing/faq';

export default function LandingPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <main className="flex-1">
        <Hero />
        <Benefits />
        <Bonuses />
        <Pricing />
        <Faq />
      </main>
    </div>
  );
}

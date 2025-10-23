import Hero from '@/components/landing/hero';
import Benefits from '@/components/landing/benefits';
import BookContents from '@/components/landing/book-contents';
import Pricing from '@/components/landing/pricing';
import Bonuses from '@/components/landing/bonuses';
import Faq from '@/components/landing/faq';
import AboutUs from '@/components/landing/about';
import Guarantee from '@/components/landing/guarantee';
import Footer from '@/components/landing/footer';

export default function LandingPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <main className="flex-1">
        <Hero />
        <Benefits />
        <BookContents />
        <Bonuses />
        <Guarantee />
        <Pricing />
        <AboutUs />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}

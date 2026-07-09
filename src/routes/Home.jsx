import HomeHero from '../components/HomeHero';
import HomeStats from '../components/HomeStats';
import HomeLogoStrip from '../components/HomeLogoStrip';
import HomeHowItWorks from '../components/HomeHowItWorks';
import HomeWhatWeDo from '../components/HomeWhatWeDo';
import HomeTestimonials from '../components/HomeTestimonials';
import CTABanner from '../components/CTABanner';

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomeLogoStrip />
      <HomeStats />
      <HomeHowItWorks />
      <HomeWhatWeDo />
      <HomeTestimonials />
      <CTABanner buttonClassName="bg-transparent text-foreground border border-white rounded-lg" />
    </main>
  );
}

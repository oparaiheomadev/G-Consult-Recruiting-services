import HomeHero from '../components/section/OldHomeHero';
import HomeStats from '../components/section/HomeStats';
import HomeLogoStrip from '../components/section/HomeLogoStrip';
import HomeHowItWorks from '../components/section/HomeHowItWorks';
import HomeWhatWeDo from '../components/section/HomeWhatWeDo';
import HomeTestimonials from '../components/section/HomeTestimonials';
import CTABanner from '../components/section/CTABanner';

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

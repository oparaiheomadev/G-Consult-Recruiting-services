import HomeHero from '../components/section/HomeHero';
import HomeDoors from '@/components/section/HomeDoors';
import HomeServices from '../components/section/HomeServices';
import HomeHowItWorks from '../components/section/HomeHowItWorks';
import HomeWhatWeDo from '../components/section/HomeWhatWeDo';
import HomeTestimonials from '../components/section/HomeTestimonials';
import CTABanner from '../components/section/CTABanner';
import HomeIndustries from '../components/section/HomeIndustries';

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomeDoors />
      <HomeServices />
      <HomeIndustries />
      <HomeHowItWorks />
      <HomeWhatWeDo />
      <HomeTestimonials />
      <CTABanner buttonClassName="bg-transparent text-foreground border border-white rounded-lg" />
    </main>
  );
}

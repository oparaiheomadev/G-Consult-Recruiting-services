import HomeHero from '../components/section/HomeHero';
import HomeDoors from '@/components/section/HomeDoors';
import HomeServices from '../components/section/HomeServices';
import HomeIndustries from '../components/section/HomeIndustries';
import HomeProcess from '../components/section/HomeProcess';
import HomeAbout from '../components/section/HomeAbout';
import HomeTestimonials from '../components/section/HomeTestimonials';
import HomeFaq from '@/components/section/HomeFAQ';
import HomeCta from '@/components/section/HomeCTA';

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomeDoors />
      <HomeServices />
      <HomeIndustries />
      <HomeProcess />
      <HomeAbout />
      <HomeTestimonials />
      <HomeFaq />
      <HomeCta />
    </main>
  );
}

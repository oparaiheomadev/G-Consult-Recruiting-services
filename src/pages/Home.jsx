import Seo from '@/components/layout/Seo';
import HomeHero from '../components/section/HomeHero';
import HomeDoors from '@/components/section/HomeDoors';
import HomeServices from '../components/section/HomeServices';
import HomeIndustries from '../components/section/HomeIndustries';
import HomeProcess from '../components/section/HomeProcess';
import HomeAbout from '../components/section/HomeAbout';
// import HomeTestimonials from '../components/section/HomeTestimonials';
import HomeFaq from '@/components/section/HomeFAQ';
import CtaBanner from '@/components/shared/CtaBanner';

export default function Home() {
  return (
    <main>
      <Seo
        title=" | Recruitment and Executive Search in Lagos, Nigeria"
        description=" places senior and mid-level professionals with organisations across Nigeria. First shortlist within 48 hours, five candidates, 90-day replacement cover."
        path="/"
      />
      <HomeHero />
      <HomeDoors />
      <HomeServices />
      <HomeIndustries />
      <HomeProcess />
      <HomeAbout />
      {/* <HomeTestimonials /> */}
      <HomeFaq />
      <CtaBanner
        primaryLabel="Get in touch"
        secondaryLabel="See our services"
        secondaryTo="/services"
      />
    </main>
  );
}

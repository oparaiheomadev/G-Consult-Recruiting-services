import Hero from '../components/Hero';
import Stats from '../components/Stats';
import LogoStrip from '../components/LogoStrip';
import HowItWorks from '../components/HowItWorks';
import WhatWeDo from '../components/WhatWeDo';
import Testimonials from '../components/Testimonials';
import CTABanner from '../components/CTABanner';

export default function Home() {
  return (
    <main>
      <Hero />
      <LogoStrip />
      <Stats />
      <HowItWorks />
      <WhatWeDo />
      <Testimonials />
      <CTABanner buttonClassName="bg-transparent text-foreground border border-white rounded-lg" />
    </main>
  );
}

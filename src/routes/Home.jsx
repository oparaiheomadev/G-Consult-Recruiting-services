import Hero from '../components/Hero';
import Stats from '../components/Stats';
import LogoStrip from '../components/LogoStrip';
import HowItWorks from '../components/HowItWorks';
import WhatWeDo from '../components/WhatWeDo';

export default function Home() {
  return (
    <main>
      <Hero />
      <LogoStrip />
      <Stats />
      <HowItWorks />
      <WhatWeDo />
    </main>
  );
}

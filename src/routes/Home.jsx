import Hero from '../components/Hero';
import Stats from '../components/Stats';
import LogoStrip from '../components/LogoStrip';
import HowItWorks from '../components/HowItWorks';

export default function Home() {
  return (
    <main>
      <Hero />
      <LogoStrip />
      <Stats />
      <HowItWorks />
    </main>
  );
}

import HeroBanner from '../components/HeroBanner';
import Industries2 from '../assets/industries2.jpg';
import IndustryTypes from '../components/IndustryTypes';
import CTABanner from '../components/CTABanner';

export default function Industries() {
  return (
    <main>
      <HeroBanner
        image={Industries2}
        badge="Sector expertise"
        title="Deep knowledge of the industries"
        highlight="where talent matters most."
        description="Our consultants specialise  so they know what good actually looks like in your sector."
      />
      <IndustryTypes />
      <CTABanner
        title="Dont See Your sector?"
        description="We've placed talent in 12+ industries. Let's talk"
        buttonText="Talk to a specilaist"
        buttonLink="/contact"
        buttonClassName="bg-transparent text-foreground border border-white rounded-lg"
      />
    </main>
  );
}

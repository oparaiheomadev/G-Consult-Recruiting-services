import HeroBanner from '../components/section/HeroBanner';
import service from '../assets/service.jpg';
import Aboutus from '../assets/aboutus.jpg';
import CTABanner from '../components/section/CTABanner';
import About from '../components/section/About';
import AboutSector from '../components/section/AboutSector';
import AboutCommitments from '../components/section/AboutCommitments';
export default function AboutUs() {
  return (
    <main>
      <HeroBanner
        badge="Our Story"
        image={Aboutus}
        title="We built G-Consult because "
        highlight="great hiring shouldn't be this hard"
        description="Founded in Lagos in 2018, we've grown into Nigeria's most trusted recruitment partner — placing over 1,200 professionals across every sector."
        OverlayClassName="bg-background/65"
      />
      <About />
      <AboutSector />
      <AboutCommitments />
      <CTABanner
        title="Want to work with a team that cares?"
        description="Let's talk about your next hire or your next career move."
        buttonText="Get in touch"
        buttonLink="/contact"
        buttonClassName="bg-transparent text-foreground border border-white rounded-lg"
      />
    </main>
  );
}

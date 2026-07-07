import HeroBanner from '../components/HeroBanner';
import service from '../assets/service.jpg';
import teamsBg from '../assets/teams.jpg';
import CoreServices from '../components/CoreServices';
import CTABanner from '../components/CTABanner';

export default function Service() {
  return (
    <main>
      <HeroBanner
        image={service}
        badge="what we offer"
        title="Recruitment that is "
        highlight="beyond the CV"
        description="Whether you're building a team from scratch or replacing a critical role, we have the expertise to get it right."
      />
      <CoreServices />
      <CTABanner
        title="Not sure which services fits?"
        description="Tell us about your open role and we'll have a shortlist on your desk within 48 hours."
        buttonText="Book a free Call"
        buttonLink="/contact"
        buttonClassName="bg-transparent text-foreground border border-white rounded-lg"
      />
    </main>
  );
}
// bg-transparent text-primary-foreground border border-primary-foreground

import Seo from '@/components/layout/Seo';
import PageHero from '../components/shared/PageHero';

import Aboutus from '../assets/aboutus.webp';
import CtaBanner from '../components/shared/CtaBanner';
import AboutStory from '../components/section/Aboutstory';
import AboutPractices from '@/components/section/AboutPractices';
import AboutTeams from '@/components/section/AboutTeams';
import AboutClients from '@/components/section/AboutClients';
export default function AboutUs() {
  return (
    <main>
      <Seo
        title="About  | One Of The Fastest Growing Recruitment Firm in Lagos"
        description="A Lagos recruitment practice built around senior attention rather than volume. Every search is run by the consultant who took the brief."
        path="/about"
      />
      <PageHero
        badge="About "
        title="A small firm, on purpose."
        intro="We are a Lagos recruitment practice built around senior attention rather than volume. Every search is run by the person who took the brief."
      />
      <AboutStory />
      <AboutPractices />
      <AboutTeams />
      <AboutClients />
      <CtaBanner
        title="Want to talk to someone who will actually run the search?"
        body="Tell us about the role. We will tell you honestly whether we are the right fit for it."
      />
    </main>
  );
}
